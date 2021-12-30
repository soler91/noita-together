dofile("mods/noita-together/files/scripts/json.lua")
dofile("mods/noita-together/files/scripts/json_unjank.lua")
dofile("data/scripts/lib/utilities.lua")
if not async then
    dofile("mods/noita-together/files/scripts/coroutines.lua")
end

function GetPlayer()
    local player = EntityGetWithTag("player_unit") or nil
    if player ~= nil then
        return player[1]
    end
end

function GetPlayerPos(do_return_scale)
    local x, y, rot, scale_x = EntityGetTransform(GetPlayer())
    if do_return_scale then
        if (x ~= nil) then
            return x, y, scale_x
        end
    end
    if (x ~= nil) then
        return x, y
    end
end

function GetPlayerOrCameraPos()
    local x, y = EntityGetTransform(GetPlayer())
    if x == nil then
        return GameGetCameraPos()
    else
        return x, y
    end
end

function UpdatePlayerStats()
    local changes = 0
    local player = GetPlayer()
    if (player == nil) then return end
    local payload = {}
    local damage_comp = EntityGetFirstComponent(player, "DamageModelComponent")
    if (damage_comp ~= nil) then
        local hp = ComponentGetValue2(damage_comp, "hp")
        local max_hp = ComponentGetValue2(damage_comp, "max_hp")
        hp = hp * 25
        max_hp = max_hp * 25
        if (hp ~= LastUpdate.curHp) then
            LastUpdate.curHp = hp
            changes = changes + 1
        end
        if (max_hp ~= LastUpdate.maxHp) then
            LastUpdate.maxHp = max_hp
            changes = changes + 1
        end
        payload.curHp = hp
        payload.maxHp = max_hp
    end
    local location = BiomeMapGetName()
    if (location ~= "_EMPTY_" and location ~= LastUpdate.location) then
        LastUpdate.location = location
        changes = changes + 1
    end
    payload.location = location
    if (changes > 0) then
        SendWsEvent({event="PlayerUpdate", payload=payload})
    end
end

function GetPlayerSpeed()
    local player = GetPlayer()
    if player ~= nil then
        local char_data = EntityGetFirstComponent(player, "CharacterDataComponent")
        if char_data ~= nil then
            local min_x = ComponentGetValue2(char_data, "eff_hg_velocity_min_x")
            local max_x = ComponentGetValue2(char_data, "eff_hg_velocity_max_x")
            local min_y = ComponentGetValue2(char_data, "eff_hg_velocity_min_y")
            local max_y = ComponentGetValue2(char_data, "eff_hg_velocity_max_y")
            return min_x, max_x, min_y, max_y
        end
    end
end

function ConvertStrToNumberTable(data)
    local ret = {}
    for value in string.gmatch(data, "([^,]+)") do
        table.insert(ret, tonumber(value))
    end
    return unpack(ret)
end

function ConvertStrToTable(data)
    local ret = {}
    for value in string.gmatch(data, "([^,]+)") do
        table.insert(ret, value)
    end
    return ret
end

function GetPlayerWands()
    local player = GetPlayer()
    if (player == nil) then return {} end
    local childs = EntityGetAllChildren(player)
    local inven = nil
    if childs ~= nil then
        for _, child in ipairs(childs) do
            if EntityGetName(child) == "inventory_quick" then
                inven = child
            end
        end
    end
    local wands = {}
    if inven ~= nil then
        local items = EntityGetAllChildren(inven) or {}
        for _, child_item in ipairs(items) do
            if EntityHasTag(child_item, "wand") then
                wands[_] = child_item
            end
        end
    end

    return wands or nil
end

function GetPlayerInventory()
    local childs = EntityGetAllChildren(GetPlayer())
    local inven = nil
    if childs ~= nil then
        for _, child in ipairs(childs) do
            if EntityGetName(child) == "inventory_full" then
                inven = child
            end
        end
    end
    return inven or nil
end

function AngerSteve(userId)
    if (NT.sent_steve or GlobalsGetValue("TEMPLE_SPAWN_GUARDIAN") == "1") then return nil end
    NT.sent_steve = true
    local player = PlayerList[userId].name
    GamePrintImportant(player .. " Angered The Gods", "good luck")
    GlobalsSetValue("TEMPLE_SPAWN_GUARDIAN", "1")
    local workshop_exit_id = EntityGetClosestWithTag(pos_x, pos_y, "workshop_exit")
    local guard_x = pos_x
    local guard_y = pos_y
    if (workshop_exit_id ~= 0) then
        guard_x, guard_y = EntityGetTransform(workshop_exit_id)
        guard_x = guard_x - 120
        guard_y = guard_y + 30
        EntityLoad("data/entities/misc/spawn_necromancer_shop.xml", guard_x, guard_y)
    end
    GamePlaySound("data/audio/Desktop/event_cues.snd", "event_cues/sampo_pick/create", pos_x, pos_y)
    GameScreenshake(150)
end

function PlayerHeartPickup(perk, userId)
    local player_name = PlayerList[userId].name
    local player = GetPlayer()
    local x, y = GetPlayerPos()
    local damagemodels = EntityGetComponent(player, "DamageModelComponent")
    local variablestorages = EntityGetComponent(entity_who_picked, "VariableStorageComponent")
    local playercount = NT.player_count or 1
    local multiplier = tonumber( GlobalsGetValue( "HEARTS_MORE_EXTRA_HP_MULTIPLIER", "1" ) )

    if (damagemodels ~= nil) then
        for i, damagemodel in ipairs(damagemodels) do
            local cur_hp = ComponentGetValue2(damagemodel, "hp")
            local max_hp = ComponentGetValue2(damagemodel, "max_hp")
            local added = math.max(0.16 ,(1 / (playercount)) * multiplier)
            local max_hp = max_hp + added

            local max_hp_cap = ComponentGetValue2(damagemodel, "max_hp_cap")
            if max_hp_cap > 0 then
                max_hp = math.min(max_hp, max_hp_cap)
            end
            
            ComponentSetValue2(damagemodel, "hp", cur_hp + added)
            ComponentSetValue2(damagemodel, "max_hp", max_hp)
        end
    end
    GameTriggerMusicCue("item")
    GamePrint(player_name .. " picked up a heart.")
end

function PlayerOrbPickup(id, userId)
    async(
        function()
            local player = PlayerList[userId].name
            local already_picked = GameGetOrbCollectedThisRun(id)
            if (already_picked) then
                GamePrint(player .. " found an orb of knowledge you had already found.")
                return nil
            end
            GamePrint(player .. " found an orb of knowledge.")
            local orb = EntityLoad("mods/noita-together/files/entities/forced_orb.xml", GetPlayerPos())
            local orbcomp = EntityGetFirstComponent(orb, "OrbComponent")
            ComponentSetValue2(orbcomp, "orb_id", id)
            local itemcomp = EntityGetFirstComponent(orb, "ItemComponent")
            ComponentSetValue2(itemcomp, "auto_pickup", true)
            wait(10)
            local x, y = GetPlayerPos()
            EntitySetTransform(orb, x, y)
        end
    )
end

function SpawnPlayerGhosts(player_list)
    for userId, player in pairs(player_list) do
        SpawnPlayerGhost(player, userId)
    end
end

function SpawnPlayerGhost(player, userId)
    local ghost = EntityLoad("mods/noita-together/files/entities/ntplayer.xml", 0, 0)
    AppendName(ghost, player.name)
    local vars = EntityGetComponent(ghost, "VariableStorageComponent")
    for _, var in pairs(vars) do
        local name = ComponentGetValue2(var, "name")
        if (name == "userId") then
            ComponentSetValue2(var, "value_string", userId)
        end
        if (name == "inven") then
            ComponentSetValue2(var, "value_string", json.encode(PlayerList[userId].inven))
        end
    end
    if (player.x ~= nil and player.y ~= nil) then
        EntitySetTransform(ghost, player.x, player.y)
    end
end

function DespawnPlayerGhosts()
    local ghosts = EntityGetWithTag("nt_ghost")
    for _, eid in pairs(ghosts) do
        EntityKill(eid)
    end
end

function DespawnPlayerGhost(userId)
    local ghosts = EntityGetWithTag("nt_ghost")
    for _, ghost in pairs(ghosts) do
        local vars = EntityGetComponent(ghost, "VariableStorageComponent")
        for _, var in pairs(vars) do
            local name = ComponentGetValue2(var, "name")
            if (name == "userId") then
                local id = ComponentGetValue2(var, "value_string")
                if (id == userId) then EntityKill(ghost) end
            end
        end
    end
end

function TeleportPlayerGhost(data)
    local ghosts = EntityGetWithTag("nt_ghost")

    for _, ghost in pairs(ghosts) do
        local id_comp = get_variable_storage_component(ghost, "userId")
        local userId = ComponentGetValue2(id_comp, "value_string")
        if (userId == data.userId) then
            EntitySetTransform(ghost, data.x, data.y)
            break
        end
    end
end

function MovePlayerGhost(data)
    local ghosts = EntityGetWithTag("nt_ghost")

    for _, ghost in pairs(ghosts) do
        local id_comp = get_variable_storage_component(ghost, "userId")
        local userId = ComponentGetValue2(id_comp, "value_string")
        if (userId == data.userId) then
            local dest = get_variable_storage_component(ghost, "dest")
            
            ComponentSetValue2(dest, "value_string", data.jank)
            break
        end
    end
end

function UpdatePlayerGhost(data)
    local ghosts = EntityGetWithTag("nt_ghost")
    local stuff = {}
    local inven = ","
    for i, wand in ipairs(data.inven) do
        inven = inven .. "," .. tostring(wand.stats.inven_slot) .. "," .. wand.stats.sprite .. ","
    end
    for _, ghost in pairs(ghosts) do
        local id_comp = get_variable_storage_component(ghost, "userId")
        local userId = ComponentGetValue2(id_comp, "value_string")
        if (userId == data.userId) then
            local dest = get_variable_storage_component(ghost, "inven")
            ComponentSetValue2(dest, "value_string", inven)
            break
        end
    end
end

function UpdatePlayerGhostCosmetic(data)
    local ghosts = EntityGetWithTag("nt_ghost")

    for _, ghost in pairs(ghosts) do
        local id_comp = get_variable_storage_component(ghost, "userId")
        local userId = ComponentGetValue2(id_comp, "value_string")
        if (userId == data.userId) then
            for __, flag in pairs(data.flags) do
                EntitySetComponentsWithTagEnabled( ghost, flag, true )
            end
            break
        end
    end
end

function AppendName(entity, name)
        local text = {
            string = name,
            offset_y = "-6",
            scale_x="0.7",
            scale_y="0.7"
        }
        local name_entity = EntityCreateNew()
        EntityAddComponent(name_entity, "InheritTransformComponent", {
            _tags = "enabled_in_world",
            use_root_parent = "1"
        })
        AppendText(name_entity, text)
        EntityAddChild(entity, name_entity)
end

function AppendText(entity, text)
    if EntityGetIsAlive(entity) == false then return nil end
    text.offset_x = string.len(text.string)*1.9
    local component = EntityAddComponent( entity, "SpriteComponent", {
        _tags = "enabled_in_world",
        image_file = text.font or "data/fonts/font_pixel_white.xml",
        emissive = "1",
        is_text_sprite = "1",
        offset_x = text.offset_x or "0",
        offset_y = text.offset_y or "0",
        alpha = text.alpha or "1",
        update_transform = "1",
        update_transform_rotation = "0",
        text = text.string or "",
        has_special_scale = "1",
        special_scale_x = text.scale_x or "1",
        special_scale_y = text.scale_y or "1",
        z_index = "-9000"
    } )
    return component
end

function RemoveItemWithId(target, id)
    for index, item in ipairs(target) do
        if (item.id == id) then
            table.remove(target, index)
        end
    end
end

function GetItemWithId(target, id)
    for index, item in ipairs(target) do
        if (item.id == id) then
            return item
        end
    end
end

function PopulateSpellList()
    dofile_once("data/scripts/gun/gun_enums.lua")
    dofile_once("data/scripts/gun/gun_actions.lua")
    for _, spell in ipairs(actions) do
        SpellSprites[spell.id] = {
            name = GameTextGetTranslatedOrNot(spell.name),
            sprite = spell.sprite,
            type = spell.type
        }
    end
end

function GetLastCheckPoint()
    local x = tonumber(MagicNumbersGetValue("DESIGN_PLAYER_START_POS_X"))
    local y = tonumber(MagicNumbersGetValue("DESIGN_PLAYER_START_POS_Y"))
    local player = GetPlayer()
    if (player == nil) then
        return x, y
    end
    local var_components = EntityGetComponent(player, "VariableStorageComponent")
    if (var_components ~= nil and #var_components > 0) then
        for _, var_comp in ipairs(var_components) do
            if (ComponentGetValue2(var_comp, "name") == "respawn_checkpoint") then
                return ConvertStrToNumberTable(ComponentGetValue2(var_comp, "value_string"))
            end 
        end
    end
    return x, y --justin case? 
end

function EndRun()
    if (NT.run_ended) then return end
    NT.run_ended = true
    local win = GameHasFlagRun("ending_game_completed")
    SendWsEvent({event="PlayerDeath", payload={isWin=win, gameTime=GameGetFrameNum()}})
end

function FinishRun()
    if (NT.run_ended or not NT.run_started) then return end
    NT.run_ended = true
    
    local player = GetPlayer()
    local damage_models = nil
    if (player ~= nil) then
        damage_models = EntityGetFirstComponent(player, "DamageModelComponent")
    end
    if (damage_models ~= nil) then
        ComponentSetValue2(damage_models, "hp", 0.0)
        ComponentSetValue2(damage_models, "kill_now", true)
    end
    GameTriggerGameOver()
    SendWsEvent({event="RunOver", payload={}})
end

function RespawnPenalty(userId)
    local player_name = PlayerList[userId].name
    local player = GetPlayer()
    local damage_models = nil
    if (player ~= nil) then
        damage_models = EntityGetFirstComponent(player, "DamageModelComponent")
    end
    if (damage_models ~= nil) then
        local max_hp = ComponentGetValue2(damage_models, "max_hp")
        local cur_hp = ComponentGetValue2(damage_models, "hp")

        local new_max = max_hp * 0.8
        if (new_max < 1) then
            GamePrintImportant("Not enough life force", "Your teammate stays dead and the run ends...")
            EndRun()
            ComponentSetValue2(damage_models, "kill_now", true)
            return
        end
        ComponentSetValue2(damage_models, "max_hp", new_max)
        if (cur_hp > new_max) then
            ComponentSetValue2(damage_models, "hp", new_max)
        end
    end
    GamePrintImportant(player_name .. " died but...", "They took some of your lifeforce to respawn")
end

function PlayerRespawn(entity_id, poly, weak)
    if (Respawning == true) then return end
    async(function()
        local cx, cy = GameGetCameraPos()
        GameSetCameraFree(true)
        
        EntityLoad("mods/noita-together/files/entities/death_cam.xml", cx, cy)
        Respawning = true
        if (poly) then
            local children = EntityGetAllChildren(entity_id)
            for _, child in ipairs(children) do
                local effects = EntityGetComponent(child, "GameEffectComponent")
                if (effects ~= nil and #effects > 0) then
                    for _, effect_comp in ipairs(effects) do
                        if (effect_comp ~= nil and effect_comp > 0) then
                            ComponentSetValue2(effect_comp, "frames", 1)
                        end
                    end
                end
            end
            wait(2)
        end
        local player = GetPlayer()
        local damage_models = nil
        if (player ~= nil) then
            damage_models = EntityGetFirstComponent(player, "DamageModelComponent")
        end
        if (damage_models ~= nil) then
            local max_hp = ComponentGetValue2(damage_models, "max_hp")
            if (weak) then
                max_hp = max_hp * 0.8
                if (max_hp < 1) then
                    --Send death
                    EndRun()
                    ComponentSetValue2(damage_models, "hp", 0.0)
                    ComponentSetValue2(damage_models, "kill_now", true)
                    return
                end
                local new_max = math.max(1, max_hp )
                ComponentSetValue2(damage_models, "max_hp", new_max)
                --send custom message for weakening
                if (GameGetFrameNum() > LastRespawn + 30) then
                    LastRespawn = GameGetFrameNum()
                    SendWsEvent({event="RespawnPenalty", payload={deaths=0}})--for now
                end
            end
            ComponentSetValue2(damage_models, "hp", max_hp)
        end
        local effect_entity = LoadGameEffectEntityTo(player, "data/entities/misc/effect_protection_all.xml")
        local effect_comp = EntityGetFirstComponent(effect_entity, "GameEffectComponent")
        ComponentSetValue2(effect_comp, "frames", 60*40)
        EntityAddComponent2(effect_entity, "UIIconComponent", {
            icon_sprite_file = "data/ui_gfx/status_indicators/protection_all.png",
            name = "Respawn Protection",
            description = "You are being protected against campers.",
            display_above_head = true,
            display_in_hud = true,
            is_perk = false
        })
        EntitySetTransform(player, GetLastCheckPoint())
        Respawning = false
    end)
end

function IsPlayerPolymorphed()
    local polymorphed_entities = EntityGetWithTag("polymorphed")
    if (polymorphed_entities ~= nil) then
        for _, entity_id in ipairs(polymorphed_entities) do
            local is_player = false
            local game_stats_comp = EntityGetFirstComponent(entity_id, "GameStatsComponent")
            if (game_stats_comp ~= nil) then 
                is_player = ComponentGetValue2(game_stats_comp, "is_player")
            end
            if (is_player) then
                return true, entity_id
            end
        end
    end
end

function IsPlayerDead()
    local player = GetPlayer()
    local damage_models = nil
    if (player ~= nil) then
        damage_models = EntityGetFirstComponent(player, "DamageModelComponent")
    end

    if (damage_models ~= nil) then
        local curHp = ComponentGetValue2(damage_models, "hp")
        if (curHp < 0.0) then
            if (GameHasFlagRun("ending_game_completed")) then
                ComponentSetValue2(damage_models, "kill_now", true)
                EndRun()
                return
            end
            if (GameHasFlagRun("death_penalty_end")) then
                EndRun()
                ComponentSetValue2(damage_models, "kill_now", true)
            elseif(GameHasFlagRun("death_penalty_weak_respawn")) then
                PlayerRespawn(player, false, true)
            elseif(GameHasFlagRun("death_penalty_full_respawn")) then
                PlayerRespawn(player, false)
            end
        end
    end
    damage_models = nil
    local polymorphed, entity_id = IsPlayerPolymorphed()
    if (not polymorphed) then return end

    damage_models = EntityGetFirstComponent(entity_id, "DamageModelComponent")
    if (damage_models ~= nil) then
        ComponentSetValue2(damage_models, "wait_for_kill_flag_on_death", true)
        local curHp = ComponentGetValue2(damage_models, "hp")
        if (curHp < 0.0) then
            if (GameHasFlagRun("ending_game_completed")) then
                ComponentSetValue2(damage_models, "kill_now", true)
                return
            end
            
            if (GameHasFlagRun("death_penalty_end")) then
                ComponentSetValue2(damage_models, "kill_now", true)
                EndRun()
            elseif(GameHasFlagRun("death_penalty_weak_respawn")) then
                PlayerRespawn(entity_id, true, true)
            elseif(GameHasFlagRun("death_penalty_full_respawn")) then
                PlayerRespawn(entity_id, true)
            end
        end
    end
end

function CheckSampoStatus()
    local disabled_sampo = EntityGetWithTag("disabled_sampo")[1]
    if (disabled_sampo == nil) then
        return false
    end
    local enable_sampo = true
    local x, y = EntityGetTransform(disabled_sampo)
    --print("player list " .. tostring(#PlayerList))
    for _, player in pairs(PlayerList) do
        local distance = 999
        distance = math.abs(x - player.x) + math.abs(y - player.y)
        
        if (distance >= 200) then 
            return false
        end
    end

    return enable_sampo
end

function SpawnSampo()
    local disabled_sampo = EntityGetWithTag("disabled_sampo")[1]
    if (disabled_sampo == nil) then
        return false
    end
    local x, y = EntityGetTransform(disabled_sampo)
    EntityKill(disabled_sampo)
    NT.sampo_proximity = false
    local has_platform = RaytracePlatforms(x,y, x, y + 50)
    --print("has platform " .. tostring(has_platform))
    if (not has_platform) then
        EntityLoad( "mods/noita-together/files/entities/sampo/platform.xml", x, y + 50)
    end
    EntityLoad( "data/entities/animals/boss_centipede/sampo.xml", x, y )
end

function StartBossFight()
    NT.boss_fight = true
    NT.players_sampo = 0
    local x, y = GetPlayerPos()
    GameTriggerMusicFadeOutAndDequeueAll( 10.0 )
	GamePlaySound( "data/audio/Desktop/event_cues.bank", "event_cues/sampo_pick/create", x, y )
	GameTriggerMusicEvent( "music/boss_arena/battle", false, x, y )
	SetRandomSeed( x, y )
    GlobalsSetValue( "FINAL_BOSS_ACTIVE", "1" )
    
    local entities = EntityGetWithTag( "sampo_or_boss" )
	if ( #entities == 0 ) then
		return
    end
    
    for key,entity_id in pairs(entities) do
        if EntityHasTag( entity_id, "boss_centipede" ) then
            EntitySetComponentsWithTagEnabled( entity_id, "disabled_at_start", true )
            EntitySetComponentsWithTagEnabled( entity_id, "enabled_at_start", false )
            PhysicsSetStatic( entity_id, false )
            EntityAddTag( entity_id, "boss_centipede_active" )
            
            local child_entities = EntityGetAllChildren( entity_id )
            local child_to_remove = 0
            
            if ( child_entities ~= nil ) then
                for i,child_id in ipairs( child_entities ) do
                    EntityHasTag( child_id, "protection" )
                    child_to_remove = child_id
                end
            end
            
            if ( child_to_remove ~= 0 ) then
                EntityKill( child_to_remove )
            end
        end
    end
end

function PlayerWalletInfo()
    local player = GetPlayer()
    local wallet = nil

    if (player ~= nil) then
        wallet = EntityGetFirstComponent(player, "WalletComponent")
    end

    if (wallet ~= nil) then
        local gold = ComponentGetValue2(wallet, "money")
        return wallet, gold
    end
end

function SpawnPoi(name, message,  x, y)
    local poi = EntityLoad("mods/noita-together/files/entities/poi/poi.xml")
    local item_comp = EntityGetFirstComponent(poi, "ItemComponent")
    ComponentSetValue2(item_comp, "item_name", name)
    ComponentSetValue2(item_comp, "ui_description", message)
    EntitySetTransform(poi, x, y)
end

function CanSpawnPoi(x, y)
    local pois = EntityGetInRadiusWithTag(x, y, 50, "NT_POI") or {}
    return #pois == 0
end

function GetWandStats(id)
    local serialized = {}

    local ability_comp = EntityGetFirstComponentIncludingDisabled(id, "AbilityComponent")
    serialized.sprite = ComponentGetValue2(ability_comp, "sprite_file")
    serialized.uiName = ComponentGetValue2(ability_comp, "ui_name")
    serialized.manaMax = ComponentGetValue2(ability_comp, "mana_max")
    serialized.manaChargeSpeed = ComponentGetValue2(ability_comp, "mana_charge_speed")

    serialized.reloadTime = ComponentObjectGetValue2(ability_comp, "gun_config", "reload_time")
    serialized.actionsPerRound = ComponentObjectGetValue2(ability_comp, "gun_config", "actions_per_round")
    serialized.deckCapacity = ComponentObjectGetValue2(ability_comp, "gun_config", "deck_capacity")
    serialized.shuffleDeckWhenEmpty = ComponentObjectGetValue2(ability_comp, "gun_config", "shuffle_deck_when_empty")

    serialized.spreadDegrees = ComponentObjectGetValue2(ability_comp, "gunaction_config", "spread_degrees")
    serialized.speedMultiplier = ComponentObjectGetValue2(ability_comp, "gunaction_config", "speed_multiplier")
    serialized.fireRateWait = ComponentObjectGetValue2(ability_comp, "gunaction_config", "fire_rate_wait")
    local item_comp = EntityGetFirstComponentIncludingDisabled(id, "ItemComponent")
    serialized.inven_slot = ComponentGetValue2(item_comp, "inventory_slot")
    return serialized
end

function GetWandSpells(id)
    if (id == nil or id == 0) then return {}, {} end
    local childs = EntityGetAllChildren(id)
    local always_cast = {}
    local deck = {}
    if childs ~= nil then
        local last_slot = 0
        for _, child in ipairs(childs) do
            local item_comp = EntityGetFirstComponentIncludingDisabled(child, "ItemComponent")
            local item_action_component = EntityGetFirstComponentIncludingDisabled(child, "ItemActionComponent")
            local is_always_cast = ComponentGetValue2(item_comp, "permanently_attached")
            local action_id = ComponentGetValue2(item_action_component, "action_id")
            local slot = ComponentGetValue2(item_comp, "inventory_slot")
            local empty_slots = slot - last_slot

            if empty_slots > 0 then
                for s = 1, empty_slots do
                    table.insert(deck, {gameId="0"})
                    last_slot = last_slot + 1
                end
            end
            if (is_always_cast) then
                table.insert(always_cast, {gameId=action_id})
            else
                table.insert(deck, {gameId=action_id})
                last_slot = last_slot + 1
            end
        end
    end
    return always_cast, deck
end

function find_the_wand_held( entity_id )
	local children = EntityGetAllChildren( entity_id )
	if ( children == nil ) then return 0 end

	local backup_result = 0

	-- Inventory2Component
	-- mActiveItem
	local inventory2_comp = EntityGetFirstComponentIncludingDisabled( entity_id, "Inventory2Component" )
	if ( inventory2_comp ~= nil ) then
		local active_item = ComponentGetValue( inventory2_comp, "mActiveItem" )
		if ( EntityHasTag( active_item, "wand" ) ) then
			return active_item
		end
	end
	
	-- if that doesn't work (e.g. player is holding something else than a wand)
	for i,child in ipairs( children ) do
		if( EntityHasTag( child, "wand" ) ) then
			if ( EntityGetFirstComponent( child, "ItemComponent") ~= nil ) then
				return child
			end
			if ( ComponentGetIsEnabled( EntityGetFirstComponentIncludingDisabled( child, "ItemComponent") ) ) then
				backup_result = child
			end
		else
			local temp_result = find_the_wand_held( child )
			if ( temp_result ~= 0 ) then
				if ( EntityGetFirstComponent( temp_result, "ItemComponent") ~= nil ) then
					return temp_result
				else
					backup_result = temp_result
				end
			end
		end
	end

	return backup_result
end

function GetWandSlot(player)
    local held_id = find_the_wand_held( player )
    if (held_id == 0) then return 0 end
    local item_comp = EntityGetFirstComponentIncludingDisabled(held_id, "ItemComponent")
    if (item_comp ~= nil and item_comp > 0) then
        local slot = ComponentGetValue2(item_comp, "inventory_slot")
        return slot
    end
end

function SerializeWands()
    local player = GetPlayer()
    if (player == nil) then
        return "";
    end
    local serialized = {}
    local wands_ids = GetPlayerWands()

    for _, wand in ipairs(wands_ids) do
        local stats = GetWandStats(wand)
        local always_cast, deck = GetWandSpells(wand)
        table.insert( serialized, {stats=stats, alwaysCast=always_cast, deck=deck} )
    end
    return jankson.encode(serialized)
end

function CosmeticFlags()
    local data = {}
    if HasFlagPersistent( "secret_amulet" ) then
        table.insert(data, "player_amulet")
    end
    if HasFlagPersistent( "secret_amulet_gem" ) then
        table.insert(data, "player_amulet_gem")
    end
    if HasFlagPersistent( "secret_hat" ) then
        table.insert(data, "player_hat2")
    end
    return data
end

function ConvertStrToTable(data)
    local ret = {}
    for value in string.gmatch(data, "([^,]+)") do
        table.insert(ret, tonumber(value))
    end
    return ret
end
function ConvertTableToStr(data)
    local ret = ","
    for _, value in pairs(data) do
        ret = ret .. value .. ","
    end
    return ret
end
function GetStuff(data)
    local ret = {arm={}}
    if (#data < 7) then return nil end
    ret.arm.r = tonumber(table.remove(data,1))
    ret.arm.sy = tonumber(table.remove(data,1))
    ret.x = tonumber(table.remove(data,1))
    ret.y = tonumber(table.remove(data,1))
    ret.scale_x = tonumber(table.remove(data,1))
    ret.anim = tonumber(table.remove(data,1))
    ret.h = tonumber(table.remove(data,1))
    return ret
end