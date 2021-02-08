dofile_once("data/scripts/lib/utilities.lua")

dofile_once("mods/noita-together/files/store.lua")
dofile_once("mods/noita-together/files/scripts/json.lua")
local entity_id = GetUpdatedEntityID()
local x, y = EntityGetTransform(entity_id)

-- tags -> card_actions | tablet | wand | item_physics
local card_actions = EntityGetWithTag("card_action")
local wands = EntityGetWithTag("wand")
local flasks = EntityGetWithTag("item_physics")

if (#card_actions > 0) then
    local msg = {event="SendItems", payload={spells={}}}
    local send = false
    for _, spell_id in ipairs(card_actions) do
        local in_world = false
        local components = EntityGetComponent(spell_id, "SimplePhysicsComponent")
        if (components ~= nil) then
            in_world = true
        end
        local tx, ty = EntityGetTransform(spell_id)

        if (in_world) then
            local distance = math.abs(x - tx) + math.abs(y - ty)
            if (distance < 24) then
                local item = EntityGetFirstComponent(spell_id, "ItemComponent")
                local item_component = EntityGetFirstComponent(spell_id, "ItemActionComponent")
                local uses_remaining = ComponentGetValue2(item, "uses_remaining")
                local action_id = ComponentGetValue2(item_component, "action_id")
                table.insert(msg.payload.spells, {id=action_id, usesRemaining=uses_remaining})
                send = true
                EntityLoad("data/entities/particles/poof_pink.xml", tx, ty)
                EntityKill(spell_id)
            end
        end
    end

    if (send) then
        local queue = json.decode(NT.wsQueue)
        table.insert(queue, msg)
        NT.wsQueue = json.encode(queue)
    end
end

if (#wands > 0 and GameHasFlagRun("send_wands")) then
    local msg = {event="SendItems", payload={wands={}}}
    local send = false
    for _, wand_id in ipairs(wands) do
        local wand = nil
        local wand_sprite = nil
        local in_world = false
        local components = EntityGetComponent(wand_id, "SimplePhysicsComponent")
        if (components ~= nil) then
            in_world = true
        end

        tx, ty = EntityGetTransform(wand_id)
        if (in_world and wand == nil) then
            local distance = math.abs(x - tx) + math.abs(y - ty)
            if (distance < 24) then
                wand = wand_id
                local ability_comp = EntityGetFirstComponentIncludingDisabled(wand_id, "AbilityComponent")
                wand_sprite = ComponentGetValue2(ability_comp, "sprite_file")
                local sprite_id = string.match(wand_sprite, "wand_([0-9]+)")
                if (sprite_id ~= nil) then
                    wand_sprite = tonumber(sprite_id) + 1
                    wand_sprite = math.min(wand_sprite, 1000)
                else
                    wand_sprite = Random(10,500)
                end
            end
        end

        if wand ~= nil then
            local serialized = {}
    
            local ability_comp = EntityGetFirstComponentIncludingDisabled(wand, "AbilityComponent")
    
            serialized.sprite = tostring(wand_sprite)
            serialized.ui_name = ComponentGetValue2(ability_comp, "ui_name")
            serialized.mana_max = ComponentGetValue2(ability_comp, "mana_max")
            serialized.mana_charge_speed = ComponentGetValue2(ability_comp, "mana_charge_speed")
    
            serialized.reload_time = ComponentObjectGetValue2(ability_comp, "gun_config", "reload_time")
            serialized.actions_per_round = ComponentObjectGetValue2(ability_comp, "gun_config", "actions_per_round")
            serialized.deck_capacity = ComponentObjectGetValue2(ability_comp, "gun_config", "deck_capacity")
            serialized.shuffle_deck_when_empty = ComponentObjectGetValue2(ability_comp, "gun_config", "shuffle_deck_when_empty")
    
            serialized.spread_degrees = ComponentObjectGetValue2(ability_comp, "gunaction_config", "spread_degrees")
            serialized.speed_multiplier = ComponentObjectGetValue2(ability_comp, "gunaction_config", "speed_multiplier")
            serialized.fire_rate_wait = ComponentObjectGetValue2(ability_comp, "gunaction_config", "fire_rate_wait")
    
            local childs = EntityGetAllChildren(wand)
            local always_cast = {}
            local deck = {}
            if childs ~= nil then
                for _, child in ipairs(childs) do
                    local item_comp = EntityGetFirstComponentIncludingDisabled(child, "ItemComponent")
                    local item_component = EntityGetFirstComponentIncludingDisabled(child, "ItemActionComponent")
                    local is_always_cast = ComponentGetValue2(item_comp, "permanently_attached")
                    local uses_remaining = ComponentGetValue2(item_comp, "uses_remaining")
                    local action_id = ComponentGetValue2(item_component, "action_id")
                    if (is_always_cast) then
                        table.insert(always_cast, {id=action_id, usesRemaining=-1})
                    else
                        table.insert(deck, {id=action_id, usesRemaining=uses_remaining})
                    end
                end
            end
            table.insert(msg.payload.wands, {stats = serialized, always_cast = always_cast, deck = deck})
            send = true
            EntityLoad("data/entities/particles/poof_pink.xml", x, y)
            EntityKill(wand)
        end
    end

    if (send) then
        local queue = json.decode(NT.wsQueue)
        table.insert(queue, msg)
        NT.wsQueue = json.encode(queue)
    end
end

if (#flasks > 0 and GameHasFlagRun("send_flasks")) then
    local msg = {event="SendItems", payload={flasks={}}}
    local send = false
    local flask = nil
    local flask_inventory = nil
    for _, flask_id in ipairs(flasks) do
        local in_world = false
        local components = EntityGetComponent(flask_id, "PhysicsBodyComponent")
        local inventory = EntityGetFirstComponentIncludingDisabled(flask_id, "MaterialInventoryComponent")
        if (components ~= nil and inventory ~= nil) then
            in_world = true
        end

        tx, ty = EntityGetTransform(flask_id)
        if (in_world and flask == nil) then
            local distance = math.abs(x - tx) + math.abs(y - ty)
            if (distance < 24) then
                flask = flask_id
                flask_inventory = inventory
            end
        end
    end

    if flask ~= nil then
        local count_per_material_type = ComponentGetValue2(flask_inventory, "count_per_material_type")
        local item_comp = EntityGetFirstComponent(flask, "ItemComponent")
        local is_chest = ComponentGetValue2(item_comp, "item_name") == "$item_powder_stash"
        local serialized = {}
        local color = GameGetPotionColorUint(flask)
        serialized.color = color
        serialized.isChest = is_chest
        serialized.content = {}
        
        for k, v in pairs(count_per_material_type) do
            if v ~= 0 then
                table.insert( serialized.content, {id = k-1, amount = v} )
            end
        end
        if (#serialized.content == 0) then
            table.insert(serialized.content, {id=0, amount=0})
        end
        table.insert(msg.payload.flasks, serialized)
        send = true
        EntityLoad("data/entities/particles/poof_pink.xml", x, y)
        EntityKill(flask)
    end
    if (send) then
        local queue = json.decode(NT.wsQueue)
        table.insert(queue, msg)
        NT.wsQueue = json.encode(queue)
    end
end
