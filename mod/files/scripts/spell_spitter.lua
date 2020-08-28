dofile_once("mods/noita-together/files/scripts/utils.lua")
dofile_once("data/scripts/gun/procedural/gun_procedural.lua")
dofile_once("data/scripts/gun/procedural/gun_action_utils.lua")
dofile_once("data/scripts/gun/procedural/wands.lua")
dofile_once("mods/noita-together/files/scripts/json.lua")
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

        local wands_queue = json.decode(NT.wand_player_queue)
        NT.wand_player_queue = "[]"
        if (#wands_queue > 0) then
            poof = true
            for _, wand_table in ipairs(wands_queue) do
                local wand_entity = EntityLoad("mods/noita-together/files/entities/wand.xml")
                local ability_comp = EntityGetFirstComponentIncludingDisabled(wand_entity, "AbilityComponent")
                local wand = wand_table[1]
                local always_casts = wand_table[2]
                local deck = wand_table[3]

                local wand_info = wands[wand.sprite]
                SetWandSprite(wand_entity, ability_comp, wand_info.file, wand_info.grip_x, wand_info.grip_y, (wand_info.tip_x - wand_info.grip_x), (wand_info.tip_y - wand_info.grip_y))
                --serialized.sprite = wand_sprite
                ComponentSetValue2(ability_comp, "ui_name", wand.ui_name)
                ComponentObjectSetValue2(ability_comp, "gun_config", "reload_time", wand.reload_time)
                ComponentObjectSetValue2(ability_comp, "gunaction_config", "fire_rate_wait", wand.fire_rate_wait)
                ComponentSetValue2(ability_comp, "mana_charge_speed", wand.mana_charge_speed)
                ComponentObjectSetValue2(ability_comp, "gun_config", "actions_per_round", wand.actions_per_round)
                ComponentObjectSetValue2(ability_comp, "gun_config", "deck_capacity", wand.deck_capacity)
                ComponentObjectSetValue2(ability_comp, "gun_config", "shuffle_deck_when_empty", wand.shuffle_deck_when_empty)
                ComponentObjectSetValue2(ability_comp, "gunaction_config", "spread_degrees", wand.spread_degrees)
                ComponentObjectSetValue2(ability_comp, "gunaction_config", "speed_multiplier", wand.speed_multiplier)
                ComponentSetValue2(ability_comp, "mana_max", wand.mana_max)
                ComponentSetValue2(ability_comp, "mana", wand.mana_max)
                
                if (#always_casts > 0) then
                    for _, spell in pairs(always_casts) do
                        AddGunActionPermanent(wand_entity, spell)
                    end
                end

                if (#deck > 0) then
                    for _, spell in pairs(deck) do
                        AddGunAction(wand_entity, spell)
                    end
                end
                EntitySetTransform(wand_entity, x, y)
            end
        end

        if (poof) then
            EntityLoad("data/entities/particles/poof_pink.xml", x, y)
        end
    end
end
