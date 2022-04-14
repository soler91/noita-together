local _generate_shop_item = generate_shop_item
local deaths = tonumber(StatsGlobalGetValue("death_count"))
function generate_shop_item( x, y, cheap_item, biomeid_, is_stealable )
    local seed = ModSettingGet( "noita_together.seed" )
    if (seed ~= nil and seed > 0 and GameHasFlagRun("world_randomize_loot")) then
        SetRandomSeed(GameGetFrameNum(), 69420 + deaths)
        local rx, ry = Random(0,5), Random(0,5)
        _generate_shop_item(x-rx, y-ry, cheap_item, biomeid_, is_stealable );
    else
        _generate_shop_item(x, y, cheap_item, biomeid_, is_stealable );
    end 
end