local entity_id = GetUpdatedEntityID()
local pos_x, pos_y = EntityGetTransform( entity_id )

local orbcomp = EntityGetComponent( entity_id, "OrbComponent" )
local orb_id = -1

for key,comp_id in pairs(orbcomp) do 
	orb_id = ComponentGetValueInt( comp_id, "orb_id" )
end
local already_picked = GameGetOrbCollectedThisRun(orb_id)
if (already_picked) then
    EntityKill(entity_id)
end