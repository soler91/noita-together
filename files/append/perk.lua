--INVISIBILITY
local _perk_spawn = perk_spawn
local _perk_spawn_many = perk_spawn_many
local _perk_spawn_random = perk_spawn_random 
local _perk_reroll_perks = perk_reroll_perks
function heck_invis()
    for idx, _perk in ipairs(perk_list) do
        if (_perk.id == "INVISIBILITY") then 
            table.remove(perk_list, idx)
        end
    end
end

function perk_spawn( x, y, perk_id, dont_remove_other_perks_ )
    if (GameHasFlagRun("ban_invisibility")) then
        heck_invis()
        _perk_spawn( x, y, perk_id, dont_remove_other_perks_ )
        return
    end
    _perk_spawn( x, y, perk_id, dont_remove_other_perks_ )
end

function perk_spawn_random( x, y, dont_remove_others_ )
    if (GameHasFlagRun("ban_invisibility")) then
        heck_invis()
        _perk_spawn_random( x, y, dont_remove_others_ )
        return
    end
    _perk_spawn_random( x, y, dont_remove_others_ )
end

function perk_spawn_many( x, y, dont_remove_others_, ignore_these_ )
    if (GameHasFlagRun("ban_invisibility")) then
        heck_invis()
        _perk_spawn_many( x, y, dont_remove_others_, ignore_these_ )
        return
    end
    _perk_spawn_many( x, y, dont_remove_others_, ignore_these_ )
end

function perk_reroll_perks( entity_item )
    if (GameHasFlagRun("ban_invisibility")) then
        heck_invis()
        _perk_reroll_perks( entity_item )
        return
    end
    _perk_reroll_perks( entity_item )
end