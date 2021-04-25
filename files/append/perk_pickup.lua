dofile_once("mods/noita-together/files/store.lua")
dofile_once("mods/noita-together/files/scripts/json.lua")

local _item_pickup = item_pickup

function item_pickup( entity_item, entity_who_picked, item_name )
    local list = dofile("mods/noita-together/files/scripts/perks.lua")
	local perk_id = ""
    local blocked = false
	local components = EntityGetComponent( entity_item, "VariableStorageComponent" )
	if ( components ~= nil ) then
		for key,comp_id in pairs(components) do 
			local var_name = ComponentGetValue( comp_id, "name" )
			if( var_name == "perk_id") then
				perk_id = ComponentGetValue2( comp_id, "value_string" )
			end
            if (var_name == "NT_DONT_SHARE") then
                blocked = true
            end
		end
	end
    if (GameHasFlagRun("NT_GAMEMODE_CO_OP") and not blocked) then
        if ((GameHasFlagRun("team_perks") and list[perk_id] == true) or GameHasFlagRun("sync_perks")) then
            local queue = json.decode(NT.wsQueue)
            table.insert(queue, {event="CustomModEvent", payload={name="TeamPerk", id=perk_id}})
            NT.wsQueue = json.encode(queue)
            GamePrint("Your team also receives this perk")
        end
    end
	_item_pickup( entity_item, entity_who_picked, item_name )
end
