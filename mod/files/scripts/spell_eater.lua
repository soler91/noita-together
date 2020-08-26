dofile_once("data/scripts/lib/utilities.lua")
dofile("mods/noita-together/files/scripts/utils.lua")
local entity_id = GetUpdatedEntityID()
local x, y = EntityGetTransform(entity_id)

-- tags -> card_actions | tablet | wand | item_physics
local card_actions = EntityGetWithTag("card_action")
if (#card_actions > 0) then
    local collected = false
    local tx = 0
    local ty = 0
    for i, spell_id in ipairs(card_actions) do
        local in_world = false
        local components = EntityGetComponent(spell_id, "SimplePhysicsComponent")

        if (components ~= nil) then
            in_world = true
        end
        tx, ty = EntityGetTransform(spell_id)

        if in_world then
            local distance = math.abs(x - tx) + math.abs(y - ty)
            if (distance < 24) then
                local item_component = EntityGetFirstComponent(spell_id, "ItemActionComponent")
                local action_id = ComponentGetValue2(item_component, "action_id")
                NT.spell_queue = NT.spell_queue .. action_id .. ","

                EntityLoad("data/entities/particles/poof_pink.xml", tx, ty)
                collected = true
                EntityKill(spell_id)
            end
        end
    end
end
