dofile_once("mods/noita-together/files/store.lua")
dofile_once("mods/noita-nemesis/files/store.lua")
dofile_once("mods/noita-together/files/scripts/json.lua")
dofile_once("data/scripts/lib/utilities.lua")
dofile_once("mods/noita-together/files/ws/events.lua")

local sendToSelf = false

function send_ability(ability,x,y)
    if (sendToSelf) then
    --GamePrint(ability)
    -- doesn't work with coroutines
    local fn = ABILITIES[ability].fn
    if (fn ~= nil) then fn() end
    else
      local queue = json.decode(NT.wsQueue)
      table.insert(queue, {event="CustomModEvent", payload={name="NemesisAbility", ability=ability, x=x, y=y}})
      NT.wsQueue = json.encode(queue)
    end
end

function interacting( entity_who_interacted, entity_interacted, interactable_name )
    local x, y = EntityGetTransform(entity_interacted)
    local ability_comp = get_variable_storage_component(entity_interacted, "nemesis_ability")
    local price_comp = get_variable_storage_component(entity_interacted, "ability_price")

    local ability = ComponentGetValue2(ability_comp, "value_string")
    local price = ComponentGetValue2(price_comp, "value_int")

    local points = NEMESIS.points
    if (points >= price) then
        NEMESIS.points = NEMESIS.points - price
        send_ability(ability, math.floor(x), math.floor(y))

        EntityKill(entity_interacted)

        local abs = EntityGetInRadiusWithTag(x, y - 25, 1000, "NEMESIS_ABILITY")

        for _, eid in ipairs(abs) do
            local tx, ty = EntityGetTransform(eid)
            EntityLoad("data/entities/particles/poof_pink.xml", tx, ty)
            EntityKill(eid)
        end
    end
end