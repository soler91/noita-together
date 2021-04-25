local _create_all_player_perks = create_all_player_perks

function create_all_player_perks(x, y)
    local _perk_spawn = perk_spawn
    perk_spawn = function( x, y, perk_id, dont_remove_other_perks_ )
        local perk_entity = _perk_spawn(x, y, perk_id, dont_remove_other_perks_ )
        if (perk_entity ~= nil) then
            EntityAddComponent( perk_entity, "VariableStorageComponent", 
            { 
                name = "NT_DONT_SHARE",
                value_string = "",
            } )
        end
        return perk_entity
    end
    _create_all_player_perks(x, y)
    perk_spawn = _perk_spawn
end