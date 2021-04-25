local _spawn_items = spawn_items

function spawn_items( x, y ) 
	EntityLoad( "data/entities/animals/boss_centipede/boss_centipede.xml", x, y )
	-- if game is not completed
	if( GameHasFlagRun( "ending_game_completed" ) == false ) then
		EntityLoad( "mods/noita-together/files/entities/sampo/disabled_sampo.xml", x, y + 80 )
	end
	
	EntityLoad( "data/entities/animals/boss_centipede/reference_point.xml", x, y )
end