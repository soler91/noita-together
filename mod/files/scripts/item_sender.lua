dofile("mods/noita-together/files/scripts/utils.lua")
function add_sent_players(entity_id, players)
    local variable_component = EntityGetFirstComponent(entity_id, "VariableStorageComponent")
    ComponentSetValue2(variable_component, "value_string", players)
end

function item_pickup(entity_item, entity_who_picked, item_name)
    local x, y = EntityGetTransform(entity_item)
    local variable_component = EntityGetFirstComponent(entity_item, "VariableStorageComponent")
    local sent_variable = ComponentGetValue2(variable_component, "value_string")
    local already_sent = str_to_table(sent_variable)
    local prevent = false

    local wallet_component = EntityGetFirstComponent(entity_who_picked, "WalletComponent")
    local money = tonumber(ComponentGetValue2(wallet_component, "money"))
    if NT.selected_player == "" then
        GamePrintImportant("No player selected", "")
        prevent = true
    end
    for _, player in ipairs(already_sent) do
        if (player == NT.selected_player) then
            GamePrintImportant("Already sent to " .. NT.selected_player, "Select another player.")
            prevent = true
        end
    end
    if (prevent == false and nothing_queued()) then
        GamePrintImportant("Queue is empty", "Throw things on the right pillar to add them to the queue.")
        prevent = true
    elseif (NT.gold_queue > 0 and money < NT.gold_queue) then
        GamePrintImportant("Not enough money to send.", "go kill more stuff")
        prevent = true
    end

    if (prevent == false) then
        ComponentSetValue2(wallet_component, "money", money - NT.gold_queue)
        send_queue()
        sent_variable = sent_variable .. NT.selected_player .. ","
        GamePrintImportant("Items sent to " .. NT.selected_player, "Select another player to send more items.")
    end

    EntityKill(entity_item)
    local newSender = EntityLoad("mods/noita-together/files/entities/item_sender.xml", x, y)
    add_sent_players(newSender, sent_variable)
end
