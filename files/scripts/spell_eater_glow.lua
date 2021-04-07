dofile_once("mods/noita-together/files/scripts/utils.lua")

local entity_id = GetUpdatedEntityID()
local x, y = EntityGetTransform(entity_id)

local player = GetPlayer()
local distance = 999
if (player ~= nil) then
    local px, py = EntityGetTransform(player)
    distance = math.abs(x - px) + math.abs(y - py)
end
local show_hints = ModSettingGet("noita-together.NT_HINTS")
local hint_sprite = EntityGetFirstComponentIncludingDisabled(entity_id, "SpriteComponent")
local hint_active = false
if (hint_sprite ~= nil) then
    hint_active = ComponentGetIsEnabled(hint_sprite)
end
local emitter = EntityGetFirstComponentIncludingDisabled(entity_id, "ParticleEmitterComponent")
if (emitter == nil) then return end
local emitting = ComponentGetValue2(emitter, "is_emitting")

if (not emitting and distance < 50) then
    ComponentSetValue2(emitter, "is_emitting", true)
    if (show_hints and hint_sprite ~= nil and not hint_active) then
        EntitySetComponentIsEnabled(entity_id, hint_sprite, true)
    end
elseif (emitting and distance > 50) then
    ComponentSetValue2(emitter, "is_emitting", false)
    if (hint_sprite ~= nil and hint_active) then
        EntitySetComponentIsEnabled(entity_id, hint_sprite, false)
    end
end