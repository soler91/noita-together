dofile_once("mods/noita-together/files/store.lua")
dofile_once("mods/noita-nemesis/files/store.lua")
dofile_once("mods/noita-together/files/scripts/json.lua")
dofile_once("data/scripts/newgame_plus.lua")
local _death = death
function death( dmg_type, dmg_msg, entity_thats_responsible, drop_items )
    local p_x = MagicNumbersGetValue("DESIGN_PLAYER_START_POS_X")
    local p_y = MagicNumbersGetValue("DESIGN_PLAYER_START_POS_Y")
    NEMESIS.ngcount = NEMESIS.ngcount + 1
    local queue = json.decode(NT.wsQueue)
    table.insert(queue, {event="CustomModEvent", payload={name="NemesisNgPlus", number=NEMESIS.ngcount}})
    NT.wsQueue = json.encode(queue)

    _death( dmg_type, dmg_msg, entity_thats_responsible, drop_items )
    local player = EntityGetWithTag( "player_unit" )[1]
    if (player ~= nil) then
        EntitySetTransform(player, p_x, p_y - 20)
    end
    do_newgame_plus()
end