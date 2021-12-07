function SetupMatryoshka(entity, val)
	EntityAddComponent2(entity, "VariableStorageComponent", {
		name="matryoshka",
		value_float=val
	})
	EntityAddComponent2( entity, "LuaComponent", 
	{ 
		script_death = "mods/noita-nemesis/files/effects/matryoshka/death.lua",
		execute_every_n_frame = -1,
	} )
	EntityAddTag(entity, "matryoshka")
end

local frame = GameGetFrameNum()
local x, y = GameGetCameraPos()
local enemies = EntityGetInRadiusWithTag( x, y, 1024, "enemy" )

for i = 1, #enemies do
		local enemy = enemies[i]
		if (EntityGetName(enemy) ~= "$animal_boss_limbs" and EntityGetName(enemy) ~= "$animal_boss_centipede") then
				if (not EntityHasTag(enemy, "matryoshka")) then
					SetupMatryoshka(enemy, 0.90)
				end
		end
end