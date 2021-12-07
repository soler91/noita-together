local entity_id = GetUpdatedEntityID()
local x, y = EntityGetTransform(entity_id)
local field = EntityLoad("data/entities/misc/gravity_field_enemy.xml", x, y)
EntityAddChild( entity_id, field )