local _generate_gun = generate_gun;
function generate_gun( cost, level, force_unshuffle )
    local seed = ModSettingGet( "noita_together.seed" )
    if (seed ~= nil and seed > 0 and GameHasFlagRun("world_randomize_loot")) then
        local _SetRandomSeed = SetRandomSeed;
        SetRandomSeed = function( x, y )
            return _SetRandomSeed( x + GameGetFrameNum(), y );
        end
        _generate_gun( cost, level, force_unshuffle );
        SetRandomSeed = _SetRandomSeed;
    else
        _generate_gun( cost, level, force_unshuffle );
    end
end