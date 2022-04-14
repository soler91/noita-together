local _drop_random_reward = drop_random_reward;
function drop_random_reward( x, y, entity_id, rand_x, rand_y, set_rnd_  )
    local seed = ModSettingGet( "noita_together.seed" )
	local set_rnd = false 
	if( set_rnd_ ~= nil ) then set_rnd = set_rnd_ end
    if (seed ~= nil and seed > 0 and GameHasFlagRun("world_randomize_loot")) then
        set_rnd = true
    end
	if( set_rnd ) then
		SetRandomSeed( GameGetFrameNum(), x + y + entity_id )
    end
    
    return _drop_random_reward( x, y, entity_id, rand_x, rand_y, set_rnd_ );
end