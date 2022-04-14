dofile( "data/scripts/perks/perk.lua" )
customEvents = {
    PlayerPOI = function(data)
        local user = PlayerList[data.userId]
        if (user == nil) then
            return nil
        end
        SpawnPoi(user.name .. "'s message", data.message, data.x, data.y)
    end,
    FungalShift = function(data)
        if(GameHasFlagRun("NT_GAMEMODE_CO_OP") and GameHasFlagRun("sync_shift")) then
            DoFungalShift(data.from, data.to)
        end
    end,
    TeamPerk = function(data)
        local list = dofile("mods/noita-together/files/scripts/perks.lua")
        if (not GameHasFlagRun("NT_GAMEMODE_CO_OP") or (not GameHasFlagRun("sync_perks") and not GameHasFlagRun("team_perks"))) then 
            return nil
        elseif (GameHasFlagRun("team_perks") and not GameHasFlagRun("sync_perks") and (list[data.id] == false or list[data.id] == nil)) then
            return nil
        end
        local user = PlayerList[data.userId]
        if (user ~= nil) then
            GamePrintImportant(user.name .. " sent you a perk", "enjoy")
        end
        local player = GetPlayer()
        local x, y = GetPlayerPos()
        if (player ~= nil) then
            local perk_entity = perk_spawn(x, y - 8, data.id)
            if (perk_entity ~= nil) then
                perk_pickup(perk_entity, player, nil, true, false)
            end
        end
    end,
    SampoPickup = function (data)
        local player = PlayerList[data.userId].name
        if (player ~= nil) then
            PlayerList[data.userId].sampo = true
        end
        NT.players_sampo = NT.players_sampo + 1
        GamePrint(player .. " picked up the salt, they wait for you")
    end,
    PlayerMove = function(data)
        --[[
        local md = GetStuff(ConvertStrToTable(data.movement))
        if (md ~= nil) then
            PlayerList[data.userId].x = md.x
            PlayerList[data.userId].y = md.y
            PlayerList[data.userId].scale_x = md.scaleX
            MovePlayerGhost(data)
        end
        ]]
    end,
    PlayerInven = function(data)
        local inven = jankson.decode(data.inven)
        PlayerList[data.userId].inven = inven
        data.inven = inven
        UpdatePlayerGhost(data)
    end,
    PlayerCosmeticFlags = function(data)
        UpdatePlayerGhostCosmetic(data)
    end,
    SecretHourglass = function (data)
        local player = GetPlayer()
        local player_name = PlayerList[data.userId].name
        
        if (data.effect == "ambrosia") then
            local x, y = GetPlayerOrCameraPos()
            local effect_entity = EntityLoad("mods/noita-together/files/effects/weak_ambrosia.xml", x, y)
            EntityAddChild(player, effect_entity)
            EntityAddComponent2(effect_entity, "UIIconComponent", {
                icon_sprite_file = "data/ui_gfx/status_indicators/protection_all.png",
                name = "Weak Ambrosia",
                description = player_name .. "thinks you are too weak\n50% damage reduction to most damage types",
                display_above_head = true,
                display_in_hud = true,
                is_perk = false
            })
            GamePrintImportant(player_name .. " boosted the team", "Players will have a protection effect for 2 minutes")
        elseif (data.effect == "berserk") then
            local effect_entity = LoadGameEffectEntityTo(player, "data/entities/misc/effect_damage_multiplier.xml")
            local effect_comp = EntityGetFirstComponent(effect_entity, "GameEffectComponent")
            ComponentSetValue2(effect_comp, "frames", 60*120)
            EntityAddComponent2(effect_entity, "UIIconComponent", {
                icon_sprite_file = "data/ui_gfx/status_indicators/berserk.png",
                name = "DAMAGE",
                description = player_name .. " thinks you are too weak",
                display_above_head = true,
                display_in_hud = true,
                is_perk = false
            })
            GamePrintImportant(player_name .. " boosted the team", "Players will have a damage boost effect for 2 minutes")
        elseif (data.effect == "charm") then
            local x, y = GetPlayerOrCameraPos()
            EntityLoad("data/entities/projectiles/deck/regeneration_field_long.xml", x, y)
            GamePrintImportant(player_name .. " sent you a boon", "")
        elseif (data.effect == "confusion") then
            local fungi = CellFactory_GetType("fungi")
            if (player ~= nil) then
                EntityIngestMaterial( player, fungi, 300 )
                local stomach = EntityGetFirstComponent(player, "IngestionComponent")
                if (stomach ~= nil) then
                    local ingestion_size = ComponentGetValue2(stomach, "ingestion_size")
                    ComponentSetValue2(stomach, "ingestion_size", math.max(0, ingestion_size - 300))
                end
                GamePrintImportant(player_name .. " wants to party", "you have been dragged into it")
            else
                GamePrintImportant(player_name .. " wants to party", "but you are having none of that")
            end
        elseif (data.effect == "speed") then
            local effect_entity = LoadGameEffectEntityTo(player, "data/entities/misc/effect_movement_faster.xml")
            local effect_comp = EntityGetFirstComponent(effect_entity, "GameEffectComponent")
            ComponentSetValue2(effect_comp, "frames", 60*45)
            EntityAddComponent2(effect_entity, "UIIconComponent", {
                icon_sprite_file = "data/ui_gfx/status_indicators/movement_faster.png",
                name = "SPEED",
                description = player_name .. " thinks you are too slow",
                display_above_head = true,
                display_in_hud = true,
                is_perk = false
            })
            GamePrintImportant(player_name .. " boosted the team", "Players will have a speed boost effect for 45 seconds")
        end
    end
}
wsEvents = {
    AngerySteve = function (data)
        if (GameHasFlagRun("sync_steve")) then
            AngerSteve(data.userId)
        end
    end,
    RespawnPenalty = function (data)
        if (GameHasFlagRun("death_penalty_weak_respawn")) then
            RespawnPenalty(data.userId)
        end
    end,
    StartRun = function ()
        last_wands = ""
        _start_run = true
    end,
    ItemBank = function(data)
        BankItems = data.items
        BankGold = data.gold
    end,
    UserTakeFailed = function(data)
        GamePrint("Failed to take item.")
    end,
    UserTakeSuccess = function(data)
        local item = GetItemWithId(BankItems, data.id)
        RemoveItemWithId(BankItems, data.id)
        if (data.me) then
            GamePrint("Stay on the left wing altar in the holy mountain to receive your item.")
            local queue = json.decode(NT.queuedItems)
            table.insert(queue, item)
            NT.queuedItems = json.encode(queue)
        end
    end,
    UserAddGold = function(data)
        BankGold = BankGold + data.amount
        if (PlayerList[data.userId] ~= nil) then
            GamePrint(PlayerList[data.userId].name .. " deposited " .. tostring(data.amount) .. " gold to the bank.")
        end
    end,
    UserTakeGoldSuccess = function(data)
        BankGold = BankGold - data.amount
        if (data.me) then
            GamePrint("Stay on the left wing altar in the holy mountain to receive your gold.")
            NT.gold_queue = NT.gold_queue + data.amount
        end
    end,
    UserTakeGoldFailed = function(data)
        GamePrint("Failed to take gold.")
    end,
    RequestGameInfo = function(data)
        local seed = StatsGetValue("world_seed")
        local mods = ModGetActiveModIDs()
        SendWsEvent({event="GameInfo", payload={seed=seed, mods=mods, version="v0.10.82", beta=GameIsBetaBuild()}})
        SendWsEvent({event="RequestPlayerList", payload={}})
        PopulateSpellList()
    end,
    PlayerMove = function(data)
        local last = data.frames[math.floor(#data.frames/2)]
        PlayerList[data.userId].x = last.x
        PlayerList[data.userId].y = last.y
        PlayerList[data.userId].scale_x = last.scaleX
        MovePlayerGhost(data)
    end,
    PlayerPos = function(data)
        PlayerList[data.userId].x = data.x
        PlayerList[data.userId].y = data.y
        PlayerList[data.userId].scale_x = 1
        TeleportPlayerGhost(data)
    end,
    PlayerUpdate = function(data)
        if (PlayerList[data.userId] ~= nil) then
            for key, value in pairs(data) do
                PlayerList[data.userId][key] = value
            end
        end
    end,
    PlayerUpdateInventory = function(data)
        --NT.players[data.userId].inventory = data.inventory
    end,
    UserAddItems = function(data)
        for index, item in ipairs(data.items) do
            table.insert(BankItems, item)
        end
        if (PlayerList[data.userId] ~= nil) then
            GamePrint(PlayerList[data.userId].name .. " deposited " .. #data.items .. " items to the bank.")
        end
    end,
    AddPlayer = function(data)
        if (PlayerList[data.userId] ~= nil) then return end
        PlayerList[data.userId] = {
            x = 0,
            y = 0,
            curHp = 100,
            maxHp = 100,
            name = data.name,
            userId = data.userId,
            location = "Mountain",
            sampo = false,
            inven = {}
        }
        PlayerCount = PlayerCount + 1
        if (not HideGhosts) then
            SpawnPlayerGhost(data, data.userId)
        end
    end,
    RemovePlayer = function(data)
        DespawnPlayerGhost(data.userId)
        PlayerList[data.userId] = nil
        PlayerCount = PlayerCount - 1
    end,
    PlayerPickup = function(data)
        if (data.heart ~= nil) then
            PlayerHeartPickup(data.heart.hpPerk, data.userId)
        elseif (data.orb ~= nil) then
            PlayerOrbPickup(data.orb.id, data.userId)
        end
    end,
    PlayerDeath = function(data)
        if (data.isWin == true) then
            PlayerList[data.userId].curHp = 0
            msg = PlayerList[data.userId].name .. " has won."
            --InGameChatAddMsg({name = "[System]", message = msg})
            GamePrintImportant(msg, "")
        else
            PlayerList[data.userId].curHp = 0
            msg = PlayerList[data.userId].name .. " has died."
            if (GameHasFlagRun("death_penalty_end") or GameHasFlagRun("death_penalty_weak_respawn")) then
                NT.end_msg = msg
                FinishRun()
            end
        end
    end,
    PlayerSecretHourglass = function(data)
    end,
    Chat = function(data)
        if (not HideChat) then
            GamePrint(data.name .. ": " .. data.message)
        end
    end,
    PlayerList = function(data)
        --[{name, userId}] ?
        for _, value in ipairs(data) do
            PlayerList[value.userId] = {
                name = value.name,
                curHp = 100,
                maxHp = 100,
                x = 0,
                y = 0,
                speed = 1,
                location = "Mountain",
                inven = {}
            }
        end
    end,
    UpdateFlags = function(data)
        dofile("mods/noita-together/files/scripts/remove_flags.lua")
        for _, entry in ipairs(data) do
            if (entry.flag == "sync_world_seed") then
                ModSettingSet( "noita_together.seed", entry.uIntVal )
                local seed = tonumber(StatsGetValue("world_seed"))
                if (entry.uIntVal > 0 and seed ~= entry.uIntVal) then
                    GameTriggerGameOver()
                --elseif (entry.intVal == seed) then messes up random perks/items sadge
                    --ModSettingSet( "noita_together.seed", 0 )
                end
            else
                GameAddFlagRun(entry.flag)
            end
        end
    end
}