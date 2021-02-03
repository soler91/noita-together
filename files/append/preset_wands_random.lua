function spawn_trapwand(x, y)
	local options = { "wands/level_01/wand_001", "wands/level_01/wand_002", "wands/level_01/wand_003", "wands/level_01/wand_004", "wands/level_01/wand_005", "wands/level_01/wand_006", "wands/level_01/wand_007", "wands/level_01/wand_008", "wands/level_01/wand_009", "wand_level_01" }
	local seed = ModSettingGet( "noita_together.seed" )
    if (seed ~= nil and seed > 0) then
        SetRandomSeed( x + GameGetFrameNum(), y );
    else
        SetRandomSeed( x, y );
    end 
	
	local rnd = Random( 1, #options )
	local wand_to_spawn = "data/entities/items/" .. options[rnd] .. ".xml"
	
	local wand_id = EntityLoad( wand_to_spawn, x, y)
	EntityAddTag( wand_id, "trap_wand" )
end