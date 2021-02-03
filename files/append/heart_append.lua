dofile_once("mods/noita-together/files/store.lua")
dofile_once("mods/noita-together/files/scripts/json.lua")
_item_pickup = _item_pickup or item_pickup

function shared_heart(entity_item, entity_who_picked, name)
    local damagemodels = EntityGetComponent(entity_who_picked, "DamageModelComponent")
    local variablestorages = EntityGetComponent(entity_who_picked, "VariableStorageComponent")

    local max_hp_old = 0
    local max_hp = 0
    local multiplier = 1

    local x, y = EntityGetTransform(entity_item)
    local playercount = NT.player_count
    if (variablestorages ~= nil) then
        for key, comp_id in pairs(variablestorages) do
            local var_name = ComponentGetValue(comp_id, "name")
            if (var_name == "hearts_more_extra_hp") then
                multiplier = ComponentGetValueInt(comp_id, "value_int")
            end
        end
    end

    if (damagemodels ~= nil) then
        for i, damagemodel in ipairs(damagemodels) do
            max_hp = tonumber(ComponentGetValue(damagemodel, "max_hp"))
            max_hp_old = max_hp
            max_hp = max_hp + math.max(0.16 ,(1 / (playercount)) * multiplier)
            local max_hp_cap = tonumber(ComponentGetValue(damagemodel, "max_hp_cap"))
            if max_hp_cap > 0 then
                max_hp = math.min(max_hp, max_hp_cap)
            end

            -- if( hp > max_hp ) then hp = max_hp end
            ComponentSetValue(damagemodel, "max_hp", max_hp)
        end
    end

    EntityLoad("data/entities/particles/image_emitters/heart_effect.xml", x, y - 12)
    EntityLoad("data/entities/particles/heart_out.xml", x, y - 8)
    local description = GameTextGet("$logdesc_heart", tostring(math.floor(max_hp * 25)))
    if max_hp == max_hp_old then
        description = GameTextGet("$logdesc_heart_blocked", tostring(math.floor(max_hp * 25)))
    end

    GamePrintImportant("$log_heart", description)
    GameTriggerMusicCue("item")
    EntityKill(entity_item)
end

function item_pickup(entity_item, entity_who_picked, name)
    if (GameHasFlagRun("NT_GAMEMODE_CO_OP") and GameHasFlagRun("sync_hearts")) then
        shared_heart(entity_item, entity_who_picked, name)
        if (NT.skip_heart > 0) then
            NT.skip_heart = NT.skip_heart - 1
        else
            local queue = json.decode(NT.wsQueue)
            table.insert(queue, {event="PlayerPickup", payload={heart={hpPerk=false}}})
            NT.wsQueue = json.encode(queue)
        end
    else
        _item_pickup(entity_item, entity_who_picked, name)
    end
end
