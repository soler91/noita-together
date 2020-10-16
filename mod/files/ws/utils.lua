function queue_wands(str, player)
    GamePrint(player .. " sent you something.")
    local queue = json.decode(NT.wand_player_queue)
    table.insert(queue, json.decode(str))
    NT.wand_player_queue = json.encode(queue)
end

function queue_items(str, player)
    GamePrint(player .. " sent you something.")
    local queue = json.decode(NT.item_player_queue)
    table.insert(queue, json.decode(str))
    NT.item_player_queue = json.encode(queue)
end

function queue_spells(str, player)
    GamePrint(player .. " sent you something.")
    NT.spell_player_queue = NT.spell_player_queue .. str
end

function queue_gold(amount, player)
    NT.gold_player_queue = NT.gold_player_queue + amount
    GamePrint(player .. " sent you " .. tostring(amount) .. " gold. Total amount: " .. tostring(NT.gold_player_queue))
    GlobalsSetValue("co-op_gold_queue", tostring(NT.gold_player_queue))
end

function anger_gods(player)
    GameRemoveFlagRun("sync_gods_mood")
    GamePrintImportant(player .. "Angered The Gods", "good luck")
    GlobalsSetValue("TEMPLE_SPAWN_GUARDIAN", "1")
    local workshop_exit_id = EntityGetClosestWithTag(pos_x, pos_y, "workshop_exit")
    local guard_x = pos_x
    local guard_y = pos_y
    if (workshop_exit_id ~= 0) then
        guard_x, guard_y = EntityGetTransform(workshop_exit_id)
        guard_x = guard_x - 120
        guard_y = guard_y + 60
        EntityLoad("data/entities/misc/spawn_necromancer_shop.xml", guard_x, guard_y)
    end
    GamePlaySound("data/audio/Desktop/event_cues.snd", "event_cues/sampo_pick/create", pos_x, pos_y)
    GameScreenshake(150)
end

function add_hp(player_name)
    local player = get_player()
    local x, y = get_player_pos()
    local damagemodels = EntityGetComponent(player, "DamageModelComponent")
    local players, playercount = get_player_list()
    if (damagemodels ~= nil) then
        for i, damagemodel in ipairs(damagemodels) do
            max_hp = tonumber(ComponentGetValue(damagemodel, "max_hp"))
            max_hp_old = max_hp
            max_hp = max_hp + (1 / (playercount + 1)) * 1

            local max_hp_cap = tonumber(ComponentGetValue(damagemodel, "max_hp_cap"))
            if max_hp_cap > 0 then
                max_hp = math.min(max_hp, max_hp_cap)
            end

            -- if( hp > max_hp ) then hp = max_hp end
            ComponentSetValue(damagemodel, "max_hp", max_hp)
        end
    end

    EntityLoad("data/entities/particles/image_emitters/heart_effect.xml", x, y - 12)
    EntityLoad("data/entities/particles/heart_out.xml", x, y - 8)
    GameTriggerMusicCue("item")
    GamePrint(player_name .. " picked up a heart.")
end

function force_orb(id, player)
    async(
        function()
            local already_picked = GameGetOrbCollectedThisRun(id)
            if (already_picked) then
                GamePrint(player .. " found an orb of knowledge you had already found.")
                return nil
            end
            GamePrint(player .. " found an orb of knowledge.")
            local orb = EntityLoad("mods/noita-together/files/entities/forced_orb.xml", get_player_pos())
            local orbcomp = EntityGetFirstComponent(orb, "OrbComponent")
            ComponentSetValue2(orbcomp, "orb_id", id)
            local itemcomp = EntityGetFirstComponent(orb, "ItemComponent")
            ComponentSetValue2(itemcomp, "auto_pickup", true)
            wait(10)
            local x, y = get_player_pos()
            EntitySetTransform(orb, x, y)
        end
    )
end

function run_over(username, type)
    local typeText = type == 1 and "won" or "died"
    GamePrintImportant(username .. " has " .. typeText .. ".", "")
    if (type == 1) then
        NT.players_won = NT.players_won + 1
    elseif (type == 0) then
        GameAddFlagRun("co-op_run_ended")--until respawning is a thing
        async(
            function()
                wait(300)
                GameTriggerGameOver()
            end
        )
    end
end

async_loop(
    function()
        local location = BiomeMapGetName()
        if (location ~= "_EMPTY_" and location ~= NT.current_location) then
            send_location(location)
        end

        if (GameHasFlagRun("sync_gods_mood") and GlobalsGetValue("TEMPLE_SPAWN_GUARDIAN") == "1") then
            send_gods_mood()
        end

        if (GameHasFlagRun("sync_orbs") and NT.send_orb > -1) then
            send_orb()
        end

        if (GameHasFlagRun("can_send_gold") and NT.gold_send_queue > 0) then
            send_gold()
        end

        if (GameHasFlagRun("share_hp_plus") and NT.send_heart > 0) then
            send_hp_plus()
        end

        if GameHasFlagRun("send_modlist") then
        --send_modlist()
        end
        local spells = NT.spell_send_queue
        if (#spells > 1) then
            send_spells(spells)
        end
        local wands = NT.wand_send_queue
        if (#wands > 1) then
            send_wands(wands)
        end

        local items = NT.item_send_queue
        if (#items > 1) then
            send_items(items)
        end
        if (GameHasFlagRun("co-op_run_ended") == false) then
            if (NT.send_win) then
                NT.send_win = false
                send_run_end("1")
            elseif (GameHasFlagRun("co-op_run_send_end")) then
                send_run_end(NT.end_type)
            elseif (#StatsGetValue("killed_by_extra") > 1) then --poly death
                send_run_end("0") --TODO add "2" in app
            end
        end

        wait(30)
    end
)
