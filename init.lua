-- all functions below are optional and can be left out

--[[

function OnModPreInit()
	print("Mod - OnModPreInit()") -- First this is called for all mods
end

function OnModInit()
	print("Mod - OnModInit()") -- After that this is called for all mods
end

function OnModPostInit()
	print("Mod - OnModPostInit()") -- Then this is called for all mods
end

function OnPlayerSpawned( player_entity ) -- This runs when player entity has been created
	GamePrint( "OnPlayerSpawned() - Player entity id: " .. tostring(player_entity) )
end

function OnWorldInitialized() -- This is called once the game world is initialized. Doesn't ensure any world chunks actually exist. Use OnPlayerSpawned to ensure the chunks around player have been loaded or created.
	GamePrint( "OnWorldInitialized() " .. tostring(GameGetFrameNum()) )
end

function OnWorldPreUpdate() -- This is called every time the game is about to start updating the world
	GamePrint( "Pre-update hook " .. tostring(GameGetFrameNum()) )
end

function OnWorldPostUpdate() -- This is called every time the game has finished updating the world
	GamePrint( "Post-update hook " .. tostring(GameGetFrameNum()) )
end

]]--
function OnWorldPreUpdate()
    dofile("mods/noita-nemesis/files/scripts/ui.lua")
end

function OnPlayerSpawned(player)
	dofile_once("mods/noita-nemesis/files/store.lua")
end

function SetupEnemyDeath(entity)
	EntityAddComponent2( entity, "LuaComponent", 
	{ 
		script_death = "mods/noita-nemesis/files/death.lua",
		execute_every_n_frame = -1,
	} )
	EntityAddTag(entity, "NT_NEMESIS")
end

function OnWorldPostUpdate()
	local frame = GameGetFrameNum()
	local timer = 10
	if (frame % timer == 0) then
		local x, y = GameGetCameraPos()
		local enemies = EntityGetInRadiusWithTag( x, y, 1024, "enemy" )

		for i = 1, #enemies do
			local enemy = enemies[i]
			if (EntityGetName(enemy) ~= "$animal_boss_limbs" and EntityGetName(enemy) ~= "$animal_boss_centipede") then
				if (not EntityHasTag(enemy, "NT_NEMESIS")) then
					SetupEnemyDeath(enemy)
				end
			end
		end
	end
end
ModLuaFileAppend("mods/noita-together/files/append/co_op_mail.lua", "mods/noita-nemesis/files/append/disable_mail.lua")
-- ModLuaFileAppend("mods/noita-together/files/append/boss_arena.lua", "mods/noita-nemesis/files/append/boss_arena.lua")
ModTextFileSetContent("mods/noita-together/files/append/boss_arena.lua", "-- noop")
ModTextFileSetContent("mods/noita-together/files/append/sampo_append.lua", "-- noop")
ModTextFileSetContent("mods/noita-together/files/scripts/ui.lua", "-- noop")
ModLuaFileAppend("mods/noita-together/files/scripts/ui.lua", "mods/noita-nemesis/files/append/ui.lua")
ModLuaFileAppend("data/entities/animals/boss_centipede/death_check.lua", "mods/noita-nemesis/files/append/boss_death.lua")
ModLuaFileAppend( "mods/noita-together/files/ws/events.lua", "mods/noita-nemesis/files/events.lua" ) 
ModLuaFileAppend("mods/noita-together/files/scripts/utils.lua", "mods/noita-nemesis/files/append/utils.lua" )
ModLuaFileAppend("data/scripts/buildings/workshop_exit.lua", "mods/noita-nemesis/files/append/workshop_exit.lua" )
ModLuaFileAppend("data/scripts/buildings/workshop_exit_final.lua", "mods/noita-nemesis/files/append/workshop_exit.lua" )

