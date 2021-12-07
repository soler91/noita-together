dofile_once("data/scripts/lib/utilities.lua")

local entity_id    = GetUpdatedEntityID()
local pos_x, pos_y = EntityGetTransform( entity_id )

SetRandomSeed( pos_x, pos_y )

local theta = math.rad( Random( 180,360 ) )
local length = 1800

local parent_id = EntityGetParent( entity_id )

if (parent_id ~= NULL_ENTITY) then
	local vel_x = math.cos( theta ) * length
	local vel_y = math.sin( theta ) * length

	shoot_projectile( parent_id, "mods/noita-nemesis/files/entities/earthquake_bullet/entity.xml", pos_x, pos_y, vel_x, vel_y )
end