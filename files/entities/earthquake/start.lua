local entity_id = GetUpdatedEntityID()
local x, y = EntityGetTransform(entity_id)
local hit, hx, hy = RaytracePlatforms(x, y, x, y - 500)
local yy = (y+hy)/2;
EntityLoad("data/entities/particles/image_emitters/magical_symbol.xml", hx, yy)
EntitySetTransform(entity_id, hx, yy)