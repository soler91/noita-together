dofile_once("mods/noita-nemesis/files/scripts/utils.lua")
local entity_id = GetUpdatedEntityID()
local x, y = EntityGetTransform(entity_id)
local player = EntityGetClosestWithTag(x, y, "mortal")
SetRandomSeed(x - 1337, y + 69420)

local inventory_items = GetWands(true)
if inventory_items ~= nil then
    local replaced_wand = inventory_items[Random(1, #inventory_items)]
    GameKillInventoryItem(player, replaced_wand)
    local item_entity = nil
    local rnd = Random(0, 1000)
    if rnd < 200 then
        item_entity = EntityLoad("data/entities/items/wand_level_01.xml")
    elseif rnd < 600 then
        item_entity = EntityLoad("data/entities/items/wand_level_02.xml")
    elseif rnd < 850 then
                item_entity = EntityLoad("data/entities/items/wand_level_03.xml")
    elseif rnd < 998 then
                item_entity = EntityLoad("data/entities/items/wand_level_04.xml")
    else
        item_entity = EntityLoad("data/entities/items/wand_level_05.xml")
    end
    GamePickUpInventoryItem( player, item_entity, false )

    force_refresh_wands()
    
end

EntityKill(entity_id)