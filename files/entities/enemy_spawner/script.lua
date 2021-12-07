dofile_once("data/scripts/lib/utilities.lua")
local entity_id = GetUpdatedEntityID()
local x, y = EntityGetTransform(entity_id)
SetRandomSeed(x,y)
local cxc = get_variable_storage_component(entity_id, "dest_x")
local cyc = get_variable_storage_component(entity_id, "dest_y")
local target_x = ComponentGetValue2(cxc, "value_float")
local target_y = ComponentGetValue2(cyc, "value_float")

local dir_x = target_x - x
local dir_y = target_y - y

if (math.abs(dir_x) > 5 or math.abs(dir_y) > 5) then
    local nx, ny = vec_lerp(x, y, target_x, target_y, 0.869)
    EntitySetTransform(entity_id, nx, ny)
else
    local entityvar = get_variable_storage_component(entity_id, "enemy_file")
    local filename = ComponentGetValue2(entityvar, "value_string")
    EntityLoad("data/entities/particles/poof_white_appear.xml", x, y)
    EntityKill(entity_id)
    local enemy = EntityLoad(filename, x, y)
    local sprites = EntityGetComponent(enemy, "SpriteComponent")
    EntityAddTag(enemy, "NEMESIS_ENEMY")
    for _, sprite in ipairs(sprites) do
        ComponentSetValue2(sprite, "alpha", 0.5694201337)
    end 
end