dofile_once("mods/noita-together/files/store.lua")
dofile_once("mods/noita-together/files/scripts/json.lua")

local _item_pickup = item_pickup

function item_pickup( entity_item, entity_who_picked, item_name )
    local list = {
        EXTRA_MONEY=true,
        STRONG_KICK=true,
        GLOBAL_GORE=true,
        EXTRA_HP=true,
        HEARTS_MORE_EXTRA_HP=true,
        ATTRACT_ITEMS=true,
        EXTRA_SHOP_ITEM=true,
        GENOME_MORE_HATRED=true,
        GENOME_MORE_LOVE=true,
        PEACE_WITH_GODS=true
    }
	local perk_id = ""
	local components = EntityGetComponent( entity_item, "VariableStorageComponent" )
	if ( components ~= nil ) then
		for key,comp_id in pairs(components) do 
			local var_name = ComponentGetValue( comp_id, "name" )
			if( var_name == "perk_id") then
				perk_id = ComponentGetValue2( comp_id, "value_string" )
			end
		end
	end
    if (GameHasFlagRun("NT_GAMEMODE_CO_OP")) then
        local queue = json.decode(NT.wsQueue)
        table.insert(queue, {event="CustomModEvent", payload={name="TeamPerk", id=perk_id}})
        NT.wsQueue = json.encode(queue)
        GamePrint("Your team also receives this perk")
    end
	_item_pickup( entity_item, entity_who_picked, item_name )
end
