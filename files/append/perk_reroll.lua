local _item_pickup = item_pickup

function item_pickup( entity_item, entity_who_picked, item_name )
	local seed = ModSettingGet( "noita_together.seed" )
    if (seed ~= nil and seed > 0) then
        local _SetRandomSeed = SetRandomSeed;
        SetRandomSeed = function( x, y )
            return _SetRandomSeed( x + GameGetFrameNum(), y );
        end
        _item_pickup(entity_item, entity_who_picked, item_name);
        SetRandomSeed = _SetRandomSeed;
    else
        _item_pickup(entity_item, entity_who_picked, item_name);
    end 
end
