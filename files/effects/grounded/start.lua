local entity_id = GetUpdatedEntityID()
local owner = EntityGetParent(entity_id)

local player_data = EntityGetFirstComponent( owner, "CharacterDataComponent")
ComponentSetValue2(player_data, "mFlyingTimeLeft",0)