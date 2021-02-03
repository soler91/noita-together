dofile( "data/scripts/lib/utilities.lua" )
dofile_once("mods/noita-together/files/store.lua")
dofile_once("mods/noita-together/files/scripts/json.lua")
_item_pickup = _item_pickup or item_pickup

function item_pickup( entity_item, entity_who_picked, name )
	local x,y = EntityGetTransform( entity_item )

	EntityLoad("data/entities/particles/image_emitters/chest_effect.xml", x, y)

	local entities = EntityGetWithTag( "sampo_or_boss" )
	if ( #entities == 0 ) then
		print_error("boss - couldn't find sampo")
		return
	end

    for key,entity_id in pairs(entities) do
        if (not EntityHasTag( entity_id, "boss_centipede" )) then
            EntitySetComponentsWithTagEnabled( entity_id, "disabled_at_start", true )
            EntitySetComponentsWithTagEnabled( entity_id, "enabled_at_start", false )
            PhysicsSetStatic( entity_id, false )
        end
    end
    if (not NT.sampo_pickup) then
        NT.sampo_pickup = true
        NT.players_sampo = NT.players_sampo + 1
        local queue = json.decode(NT.wsQueue)
        table.insert(queue, {event="CustomModEvent", payload={name="SampoPickup"}})
        NT.wsQueue = json.encode(queue)
    end
end