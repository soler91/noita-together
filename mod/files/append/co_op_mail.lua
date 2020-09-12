local _spawn_hp = _spawn_hp or spawn_hp

RegisterSpawnFunction(0xffc9490a, "spawn_spell_eater")
RegisterSpawnFunction(0xff63c408, "spawn_spell_spitter")
--RegisterSpawnFunction( 0xffb108c4, "spawn_player_selector" )
RegisterSpawnFunction(0xffb43ac2, "spawn_item_sender")

function spawn_hp(x, y)
    _spawn_hp(x, y)
    if (GameHasFlagRun("NT_GAMEMODE_CO_OP")) then
        LoadPixelScene("mods/noita-together/files/pixel_scenes/co_op_mail.png", "", x - 49, y, "", true)
    end
end

function spawn_spell_eater(x, y)
    EntityLoad("mods/noita-together/files/entities/spell_eater.xml", x, y)
end

function spawn_spell_spitter(x, y)
    EntityLoad("mods/noita-together/files/entities/spell_spitter.xml", x, y)
end
--[[
function spawn_player_selector(x, y)
    EntityLoad("mods/noita-together/files/entities/player_selector.xml", x, y)
end
]]
function spawn_item_sender(x, y)
    EntityLoad("mods/noita-together/files/entities/item_sender.xml", x, y)
end
