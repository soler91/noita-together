dofile("mods/noita-together/files/store.lua")
function player_list(list)
    NT.selected_player = ""
    NT.players = list
    local players = get_player_list()
    for _, player in ipairs(players) do
        NT.locations[player] = NT.locations[player] or "Mountain"
    end
end

function update_player_location(player, location)
    NT.locations[player] = GameTextGet(location)
end

function get_player()
    local player = EntityGetWithTag("player_unit") or nil
    if player ~= nil then
        return player[1]
    end
end

function get_player_pos()
    local x, y = EntityGetTransform(get_player())
    if (x ~= nil) then
        return x, y
    end
end

function str_to_table(data)
    local ret = {}
    for value in string.gmatch(data, "([^,]+)") do
        table.insert(ret, value)
    end
    return ret
end

function get_player_list()
    local list = str_to_table(NT.players)
    local count = #list
    return list, count
end

function nothing_queued()
    return (NT.spell_queue == "" and NT.item_queue == "" and NT.wand_queue == "" and NT.gold_queue == 0)
end

function clear_queue()
    NT.spell_queue = ""
    NT.item_queue = ""
    NT.wand_queue = ""
    NT.gold_queue = 0
end

function send_queue()
    NT.spell_send_queue = NT.spell_queue
    NT.item_send_queue = NT.item_queue
    NT.wand_send_queue = NT.wand_queue
    NT.gold_send_queue = NT.gold_queue
    clear_queue()
end
