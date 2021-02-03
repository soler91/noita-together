dofile_once("mods/noita-together/files/store.lua")
dofile_once("mods/noita-together/files/scripts/json.lua")

function material_area_checker_success( pos_x, pos_y )
	local entity_id = GetUpdatedEntityID()
	local x,y = EntityGetTransform(entity_id)
	EntitySetComponentsWithTagEnabled(entity_id, "enabled_by_liquid", true)
	EntitySetComponentsWithTagEnabled(entity_id, "disabled_by_liquid", false)
	
	-- kill others
	for _,v in pairs(EntityGetInRadiusWithTag(x, y, 150, "hourglass_entity")) do
		if v ~= entity_id then EntityKill(v) end
    end
    
    local queue = json.decode(NT.wsQueue)
    table.insert(queue, {event="CustomModEvent", payload={name="SecretHourglass", effect="speed"}})
    NT.wsQueue = json.encode(queue)

    GamePrintImportant("Your team receives a boon", "")
end