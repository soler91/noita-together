local _spawn_sampo_spot = _spawn_sampo_spot or spawn_sampo_spot

function spawn_sampo_spot(x, y)
    if (GameHasFlagRun("NT_GAMEMODE_CO_OP")) then
        EntityLoad("mods/noita-together/files/entities/co_op_win_mechanism.xml", x, y - 30)
    else
        _spawn_sampo_spot(x, y)
    end
end
