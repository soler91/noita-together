dofile_once("data/scripts/lib/utilities.lua")

local entity_id = GetUpdatedEntityID()
local player_id = EntityGetParent( entity_id )
local x, y = EntityGetTransform( entity_id )

if ( player_id ~= NULL_ENTITY ) and ( entity_id ~= player_id ) then
	local comp = EntityGetFirstComponent( player_id, "DamageModelComponent" )
	local comps = EntityGetComponent( entity_id, "VariableStorageComponent" )
	
	local resists = { "drill", "electricity", "explosion", "fire", "ice", "melee", "projectile", "radioactive", "slice" }
	local result = ""
	
	if ( comp ~= nil ) and ( comps ~= nil ) then
		for a,b in ipairs( resists ) do
			local r = tostring(ComponentObjectGetValue( comp, "damage_multipliers", b ))
			
			result = result .. r
			
			if ( a < #resists ) then
				result = result .. " "
			end
			
			ComponentObjectSetValue( comp, "damage_multipliers", b, "0.5" )
		end
	
		if ( #result > 0 ) then
			for i,v in ipairs( comps ) do
				local n = ComponentGetValue2( v, "name" )
				
				if ( n == "resis_data" ) then
					ComponentSetValue2( v, "value_string", result )
					break
				end
			end
		end
	end
end