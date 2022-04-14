local _SetRandomSeed = SetRandomSeed;
local _deaths = tonumber(StatsGlobalGetValue("death_count"))
SetRandomSeed = function( x, y )
    local seed = ModSettingGet( "noita_together.seed" )
    if (seed ~= nil and seed > 0 and GameHasFlagRun("world_randomize_loot")) then
        return _SetRandomSeed( x + GameGetFrameNum() - _deaths, y + _deaths );
    else
        return _SetRandomSeed( x, y );
    end 
end