
dofile_once("mods/noita-together/files/scripts/utils.lua")

local entity_id = GetUpdatedEntityID()
local x, y = EntityGetTransform(entity_id)

local player = GetPlayer()
local distance = 999
if (player ~= nil) then
    local px, py = EntityGetTransform(player)
    distance = math.abs(x - px) + math.abs(y - py)
end
local emitter = EntityGetFirstComponentIncludingDisabled(entity_id, "ParticleEmitterComponent")
if (emitter == nil) then return end
local emitting = ComponentGetValue2(emitter, "is_emitting")

if (not emitting and distance < 75) then
    ComponentSetValue2(emitter, "is_emitting", true)
elseif (emitting and distance > 75) then
    ComponentSetValue2(emitter, "is_emitting", false)
end