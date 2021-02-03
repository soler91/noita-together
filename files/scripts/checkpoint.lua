function collision_trigger(player)
    if (not GameHasFlagRun("death_penalty_full_respawn") and not GameHasFlagRun("death_penalty_weak_respawn")) then
        return
    end
    local entity_id = GetUpdatedEntityID()
    local x,y = EntityGetTransform(entity_id)

    local var_components = EntityGetComponent(player, "VariableStorageComponent")
    if (var_components ~= nil and #var_components > 0) then
        for _, var_comp in ipairs(var_components) do
            if (ComponentGetValue2(var_comp, "name") == "respawn_checkpoint") then
                ComponentSetValue2(var_comp, "value_string", tostring(x) .. "," .. tostring(y))
                return
            end 
        end
    end
end