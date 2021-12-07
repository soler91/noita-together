local entity_id = GetUpdatedEntityID()
local x, y = EntityGetTransform(entity_id)
local owner = EntityGetClosestWithTag(x, y, "mortal")