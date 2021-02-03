local _spawn_wands = spawn_wands
local _spawn_potions = spawn_potions
local _spawn_heart = spawn_heart
local deaths = tonumber(StatsGlobalGetValue("death_count"))
function spawn_wands(x, y)
    local seed = ModSettingGet( "noita_together.seed" )
    if (seed ~= nil and seed > 0) then
        SetRandomSeed(GameGetFrameNum(), 69420 + deaths)
        local rx, ry = Random(0,5), Random(0,5)
        _spawn_wands(x - rx, y - ry);
    else
        _spawn_wands(x, y);
    end 
end

function spawn_potions(x, y)
    local seed = ModSettingGet( "noita_together.seed" )
    if (seed ~= nil and seed > 0) then
        SetRandomSeed(GameGetFrameNum(), 69420 + deaths)
        local rx, ry = Random(0,3), Random(0,5)
        _spawn_potions(x - rx, y - ry);
    else
        _spawn_potions(x, y);
    end
end

function spawn_heart(x, y)
    local seed = ModSettingGet( "noita_together.seed" )
    if (seed ~= nil and seed > 0) then
        SetRandomSeed(GameGetFrameNum(), 69420 + deaths)
        local rx, ry = Random(0,5), Random(0,5)
        _spawn_heart(x - rx, y - ry);
    else
        _spawn_heart(x, y);
    end
end