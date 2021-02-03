dofile_once("mods/noita-together/files/store.lua")
dofile_once("mods/noita-together/files/scripts/json.lua")
_item_pickup = _item_pickup or item_pickup

function item_pickup(entity_item, entity_who_picked, name)
    if (GameHasFlagRun("sync_orbs") and EntityHasTag(entity_item, "fake_orb") == false) then
        local orbcomp = EntityGetFirstComponent(entity_item, "OrbComponent")
        local orb_id = -1
        orb_id = ComponentGetValue2(orbcomp, "orb_id")

        local queue = json.decode(NT.wsQueue)
        table.insert(queue, {event="PlayerPickup", payload={orb={id=orb_id}}})
        NT.wsQueue = json.encode(queue)
        NT.skip_heart = NT.skip_heart + 1
    elseif EntityHasTag(entity_item, "fake_orb") == true then
        NT.skip_heart = NT.skip_heart + 1
    end
    _item_pickup(entity_item, entity_who_picked, name)
end