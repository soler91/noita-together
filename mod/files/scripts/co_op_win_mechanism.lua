dofile_once("data/scripts/lib/coroutines.lua")
dofile("mods/noita-together/files/scripts/utils.lua")
local deleted_inventory = false
local mechanism_spawned = false
local entity_id = GetUpdatedEntityID()
local x, y = EntityGetTransform(entity_id)

function delete_quick_inv(player)
    local childs = EntityGetAllChildren(player)
    local inven = nil
    if childs ~= nil then
        for _, child in ipairs(childs) do
            if EntityGetName(child) == "inventory_quick" then
                inven = child
            end
        end
    end
    local wands = {}
    if inven ~= nil then
        local items = EntityGetAllChildren(inven)
        for _, item in ipairs(items) do
            GameKillInventoryItem(player, item)
        end
    end

end
async_loop(
    function()
        local player = get_player()
        if (player ~= nil) then
            local px, py = EntityGetTransform(player)
            local distance = math.abs(x - px) + math.abs(y - py)
            if (distance < 300 and not deleted_inventory) then
                delete_quick_inv(player)
                deleted_inventory = true
                NT.send_win = true
                GamePrintImportant("You made it. Now wait")
            end
        end

        if (mechanism_spawned == false) then
            local players, playercount = get_player_list()
            if (NT.players_won == playercount+1) then
                mechanism_spawned = true
                GamePrintImportant("All players have won.", "LOCK IT IN")
                EntityLoad("data/entities/animals/boss_centipede/ending/ending_sampo_spot_underground.xml", x, y + 30)
                EntityLoad("data/entities/animals/boss_centipede/boss_victoryroom_mechanism.xml", x, y)
            end
        end
        wait(5)
    end
)