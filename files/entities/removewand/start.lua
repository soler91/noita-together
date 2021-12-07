dofile_once("mods/noita-nemesis/files/scripts/utils.lua")
local entity_id = GetUpdatedEntityID()
local x, y = EntityGetTransform(entity_id)
local player = EntityGetClosestWithTag(x, y, "mortal")
SetRandomSeed(x - 1337, y + 69420)
local inventory_items = GetWands(true)

if inventory_items ~= nil then
    local remove_wand = inventory_items[Random(1, #inventory_items)]
    GameKillInventoryItem(player, remove_wand)

    force_refresh_wands()
    EntityKill(entity_id)
end