dofile_once("mods/noita-together/files/store.lua")
dofile_once("mods/noita-together/files/scripts/utils.lua")
local entity_id = GetUpdatedEntityID()
local x, y = EntityGetTransform(entity_id)

local player = GetPlayer()
local distance = 999
if (player ~= nil) then
    local px, py = EntityGetTransform(player)
    distance = math.abs(x - px) + math.abs(y - py)
end

if (distance <= 200) then
    NT.sampo_proximity = true
else 
    NT.sampo_proximity = false
end