local _spawn_hp = _spawn_hp or spawn_hp
local _spawn_all_shopitems = spawn_all_shopitems
local _spawn_all_perks = spawn_all_perks
RegisterSpawnFunction(0xffc9490a, "spawn_spell_eater")
RegisterSpawnFunction(0xff63c408, "spawn_spell_spitter")
local deaths = tonumber(StatsGlobalGetValue("death_count"))

function spawn_hp(x, y)
    _spawn_hp(x, y)
    if (GameHasFlagRun("NT_GAMEMODE_CO_OP")) then
        LoadPixelScene("mods/noita-together/files/pixel_scenes/co_op_mail.png", "", x - 49, y, "", true)
        local checkpoint = EntityCreateNew("co_op_checkpoint")
        EntityAddComponent(checkpoint, "CollisionTriggerComponent", {
            width="20",
            height="100",
            radius="64",
            destroy_this_entity_when_triggered="0",
            required_tag="player_unit"
        })
        EntityAddComponent(checkpoint, "LuaComponent", {
            script_collision_trigger_hit="mods/noita-together/files/scripts/checkpoint.lua",
            execute_every_n_frame="1"
        })
        EntitySetTransform(checkpoint, x, y)
    end
end

function spawn_all_shopitems(x, y)
    local seed = ModSettingGet( "noita_together.seed" )
    if (seed ~= nil and seed > 0) then
        SetRandomSeed(GameGetFrameNum(), 69420 + deaths)
        local rx, ry = Random(0,3), Random(0,5)
        _spawn_all_shopitems(x-rx, y-ry);
    else
        _spawn_all_shopitems(x, y);
    end 
end

function spawn_all_perks(x, y)
    local seed = ModSettingGet( "noita_together.seed" )
    if (seed ~= nil and seed > 0) then
        local _SetRandomSeed = SetRandomSeed;
        SetRandomSeed = function( x, y )
            return _SetRandomSeed( x + GameGetFrameNum(), y );
        end
        _spawn_all_perks(x, y);
        SetRandomSeed = _SetRandomSeed;
    else
        _spawn_all_perks(x, y);
    end 
end

function spawn_spell_eater(x, y)
    EntityLoad("mods/noita-together/files/entities/spell_eater.xml", x, y)
end

function spawn_spell_spitter(x, y)
    EntityLoad("mods/noita-together/files/entities/spell_spitter.xml", x, y)
end