ModLuaFileAppend("data/scripts/biomes/temple_altar.lua", "mods/noita-together/files/append/co_op_mail.lua")
ModLuaFileAppend("data/scripts/biomes/boss_arena.lua", "mods/noita-together/files/append/co_op_mail.lua")
ModLuaFileAppend("data/scripts/biomes/boss_victoryroom.lua", "mods/noita-together/files/append/boss_victoryroom.lua")

ModLuaFileAppend("data/scripts/items/heart.lua", "mods/noita-together/files/append/heart_append.lua")
ModLuaFileAppend("data/scripts/items/orb_init.lua", "mods/noita-together/files/append/orb_init.lua")
ModLuaFileAppend("data/scripts/items/orb_pickup.lua", "mods/noita-together/files/append/orb_pickup.lua")

startpos = {x = 0, y = 0}

function get_player()
    local player = EntityGetWithTag("player_unit") or nil
    if player ~= nil then
        return player[1]
    end
end

function get_player_pos()
    local x, y = EntityGetTransform(get_player())
    if (x ~= nil) then
        return x, y
    end
end

function is_valid_entity(entity_id)
    return entity_id ~= nil and entity_id ~= 0
end

function OnWorldPostUpdate()
    local world_state = GameGetWorldStateEntity()
    if (_ws_main and is_valid_entity(world_state)) then
        _ws_main()
    end
    
    ----[[
    if (player_spawned == false) then
        return
    end

    local init_check_flag = "nt_run_started"
    if GameHasFlagRun(init_check_flag) then
        return
    else
        EntitySetTransform(get_player(), startpos.x, startpos.y)
    end
    --]]
end

function OnPlayerSpawned(player_entity)
    dofile("mods/noita-together/files/ws/ws.lua")
    EntityAddComponent(
        player_entity,
        "LuaComponent",
        {
            execute_every_n_frame = "-1",
            script_death = "mods/noita-together/files/scripts/player_death.lua"
        }
    )
    local x, y = EntityGetTransform(player_entity)
    startpos.x = x
    startpos.y = y

    if #(EntityGetWithTag("co-op-gui") or {}) == 0 then
        EntityLoad("mods/noita-together/files/gui/gui.xml")
    end
end
