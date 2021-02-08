dofile_once("mods/noita-together/files/scripts/utils.lua")
dofile_once("data/scripts/gun/procedural/gun_procedural.lua")
dofile_once("data/scripts/gun/procedural/gun_action_utils.lua")
dofile_once("data/scripts/gun/procedural/wands.lua")

dofile_once("mods/noita-together/files/store.lua")
dofile_once("mods/noita-together/files/scripts/json.lua")


function AddGunActionWithUses( entity_id, action_id, uses )
	if( action_id == "" ) then return 0 end
    local action_entity_id = CreateItemActionEntity( action_id )
    local item_comp = EntityGetFirstComponentIncludingDisabled(action_entity_id, "ItemComponent")
    if (item_comp ~= nil) then
        ComponentSetValue2(item_comp, "uses_remaining", uses)
    end
	if action_entity_id ~= 0 then
		EntityAddChild( entity_id, action_entity_id )
		EntitySetComponentsWithTagEnabled( action_entity_id, "enabled_in_world", false )
	end
end

function SpawnSpell(item, x, y)
    local action_entity_id = CreateItemActionEntity(item.gameId, x, y)
    local item_comp = EntityGetFirstComponentIncludingDisabled(action_entity_id, "ItemComponent")
    if (item_comp ~= nil) then
        ComponentSetValue2(item_comp, "uses_remaining", item.usesRemaining)
    end
end

function SpawnWand(wand, x, y)
    local force_unshuffle = GlobalsGetValue( "PERK_NO_MORE_SHUFFLE_WANDS", "0" ) == "1"
    local wand_entity = EntityLoad("mods/noita-together/files/entities/wand.xml")
    local ability_comp = EntityGetFirstComponentIncludingDisabled(wand_entity, "AbilityComponent")
    local always_casts = wand.alwaysCast or {}
    local deck = wand.deck or {}
    
    if (force_unshuffle) then
        wand.stats.shuffleDeckWhenEmpty = false
    end
    local wand_info = wands[math.min(tonumber(wand.stats.sprite), 1000)]
    SetWandSprite(wand_entity, ability_comp, wand_info.file, wand_info.grip_x, wand_info.grip_y, (wand_info.tip_x - wand_info.grip_x), (wand_info.tip_y - wand_info.grip_y))
    ComponentSetValue2(ability_comp, "ui_name", wand.stats.uiName)
    ComponentObjectSetValue2(ability_comp, "gun_config", "reload_time", wand.stats.reloadTime)
    ComponentObjectSetValue2(ability_comp, "gunaction_config", "fire_rate_wait", wand.stats.fireRateWait)
    ComponentSetValue2(ability_comp, "mana_charge_speed", wand.stats.manaChargeSpeed)
    ComponentObjectSetValue2(ability_comp, "gun_config", "actions_per_round", wand.stats.actionsPerRound)
    ComponentObjectSetValue2(ability_comp, "gun_config", "deck_capacity", wand.stats.deckCapacity)
    ComponentObjectSetValue2(ability_comp, "gun_config", "shuffle_deck_when_empty", wand.stats.shuffleDeckWhenEmpty)
    ComponentObjectSetValue2(ability_comp, "gunaction_config", "spread_degrees", wand.stats.spreadDegrees)
    ComponentObjectSetValue2(ability_comp, "gunaction_config", "speed_multiplier", wand.stats.speedMultiplier)
    ComponentSetValue2(ability_comp, "mana_max", wand.stats.manaMax)
    ComponentSetValue2(ability_comp, "mana", wand.stats.manaMax)

    if (#always_casts > 0) then
        for _, spell in ipairs(always_casts) do
            AddGunActionPermanent(wand_entity, spell.gameId)
        end
    end

    if (#deck > 0) then
        for _, spell in ipairs(deck) do
            AddGunActionWithUses(wand_entity, spell.gameId, spell.usesRemaining)
        end
    end
    EntitySetTransform(wand_entity, x, y)
end

function SpawnFlask(contents, x,y)
    local flask = EntityLoad("mods/noita-together/files/entities/empty_flask.xml", x, y)
    for i, inv in ipairs(contents) do
        AddMaterialInventoryMaterial(flask, CellFactory_GetName(inv.id), inv.amount)
    end
end

function SpawnPowderStash(contents, x,y)
    local flask = EntityLoad("mods/noita-together/files/entities/empty_powder_stash.xml", x, y)
    for i, inv in ipairs(contents) do
        AddMaterialInventoryMaterial(flask, CellFactory_GetName(inv.id), inv.amount)
    end
end

local entity_id = GetUpdatedEntityID()
local x, y = EntityGetTransform(entity_id)

local player = GetPlayer()
local distance = 999
if (player ~= nil) then
    local px, py = EntityGetTransform(player)
    distance = math.abs(x - px) + math.abs(y - py)
end

if (distance < 24) then
    local queue = json.decode(NT.queuedItems)
    if (#queue > 0) then
        for index, item in ipairs(queue) do
            if (item.gameId ~= nil) then --spell
                SpawnSpell(item, x, y)
            elseif (item.stats ~= nil) then --wand
                SpawnWand(item, x, y)
            elseif (item.content ~= nil) then
                if (item.isChest) then
                    SpawnPowderStash(item.content, x, y)
                else
                    SpawnFlask(item.content, x, y)
                end
            end
        end
        NT.queuedItems = "[]"
        EntityLoad("data/entities/particles/poof_pink.xml", x, y)
    end
    if (NT.gold_queue > 0) then
        local wallet, gold = PlayerWalletInfo()
        if (wallet ~= nil) then
            ComponentSetValue2(wallet, "money", gold + NT.gold_queue)
            NT.gold_queue = 0
        end
    end
end
--[[
    local spells = str_to_table(NT.spell_player_queue)
    local poof = false
    if (distance < 24) then
        if (#spells > 0) then
            poof = true
            NT.spell_player_queue = ""
            for _, action_id in ipairs(spells) do
                CreateItemActionEntity(action_id, x, y)
            end
        end

        if (NT.gold_player_queue > 0) then
            poof = true
            local wallet_component = EntityGetFirstComponent(player, "WalletComponent")
            if (wallet_component ~= nil) then
                local money = tonumber(ComponentGetValue2(wallet_component, "money"))
                ComponentSetValue2(wallet_component, "money", money + NT.gold_player_queue)
                NT.gold_player_queue = 0
            end
        end

        local wands_queue = json.decode(NT.wand_player_queue)
        NT.wand_player_queue = "[]"
        if (#wands_queue > 0) then
            poof = true
            for _, wand_table in ipairs(wands_queue) do
                
            end
        end

        local flasks_queue = json.decode(NT.item_player_queue)
        NT.item_player_queue = "[]"
        if (#flasks_queue > 0) then
            poof = true
            
        end

        if (poof) then
            EntityLoad("data/entities/particles/poof_pink.xml", x, y)
        end
    end
end
]]