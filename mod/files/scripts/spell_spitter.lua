dofile("mods/noita-together/files/scripts/utils.lua")
local entity_id = GetUpdatedEntityID()
local x, y = EntityGetTransform(entity_id)

local player = get_player()

if (player ~= nil) then
    local spells = str_to_table(NT.spell_player_queue)

    local px, py = EntityGetTransform(player)
    local distance = math.abs(x - px) + math.abs(y - py)
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
        if (poof) then
            EntityLoad("data/entities/particles/poof_pink.xml", x, y)
        end
    end
end
