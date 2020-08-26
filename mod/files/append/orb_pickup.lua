dofile("mods/noita-together/files/scripts/utils.lua")
_item_pickup = _item_pickup or item_pickup

function item_pickup(entity_item, entity_who_picked, name)
    if (GameHasFlagRun("sync_orbs") and EntityHasTag(entity_item, "fake_orb") == false) then
        local orbcomp = EntityGetComponent(entity_item, "OrbComponent")
        local orb_id = -1

        for key, comp_id in pairs(orbcomp) do
            orb_id = ComponentGetValueInt(comp_id, "orb_id")
        end
        NT.send_orb = orb_id
        NT.skip_heart = NT.skip_heart + 1
    elseif EntityHasTag(entity_item, "fake_orb") == true then
        NT.skip_heart = NT.skip_heart + 1
    end
    _item_pickup(entity_item, entity_who_picked, name)
end