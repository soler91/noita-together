dofile("mods/noita-together/files/scripts/utils.lua")

function death(damage_type_bit_field, damage_message, entity_thats_responsible, drop_items)
    GameAddFlagRun("co-op_run_send_end")
    if GameHasFlagRun("ending_game_completed") then
        NT.end_type = "1"
    else
        NT.end_type = "0"
    end
end
