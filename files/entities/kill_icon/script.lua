dofile_once("data/scripts/lib/utilities.lua")
local entity_id = GetUpdatedEntityID()
local x, y = EntityGetTransform(entity_id)

local cx, cy = GameGetCameraPos()
local target_x = cx - 100
local target_y = cy - 120

local dir_x = target_x - x
local dir_y = target_y - y

if (math.abs(dir_x) > 5 or math.abs(dir_y) > 5) then
    local nx, ny = vec_lerp(x, y, target_x, target_y, 0.869)
    EntitySetTransform(entity_id, nx, ny)
else
    EntityKill(entity_id)
end
