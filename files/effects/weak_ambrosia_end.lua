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
		for i,v in ipairs( comps ) do
			local n = ComponentGetValue2( v, "name" )
			
			if ( n == "resis_data" ) then
				result = ComponentGetValue2( v, "value_string" )
				break
			end
		end
		
		if ( #result > 0 ) then
			local data = {}
			
			for r in string.gmatch( result, "%S+" ) do
				table.insert( data, r )
			end
			
			for a,b in ipairs( resists ) do
				local r = tostring( data[a] ) or "1.0"
				
				ComponentObjectSetValue( comp, "damage_multipliers", b, r )
			end
		end
	end
end