--damage_received( float damage, string message, int entity_thats_responsible, bool is_fatal  )
function damage_received(damage, message, entity_thats_responsible, is_fatal)
    local entity_id = GetUpdatedEntityID()
    local x, y = EntityGetTransform(entity_id)
    local owner = EntityGetClosestWithTag(x, y, "mortal")
    local damage_component = EntityGetFirstComponent(owner, "DamageModelComponent")
    if (damage_component) then
        local current_frame = GameGetFrameNum()
        local last_damage_frame = tonumber(GlobalsGetValue( "last-sanic-hit-"..entity_id, 0))
        if (current_frame - last_damage_frame < 240) then return nil end
    else
        return nil;
    end
	

    local wallet_component = EntityGetFirstComponent(owner, "WalletComponent")
    if (wallet_component) then
        local money = tonumber(ComponentGetValue2(wallet_component, "money"))
        if (money > 10) then
            local remove_amount = math.floor(money * 0.3)
            local ring_value = math.ceil(remove_amount / (9-1)) -- gain 1 ring of gold if collecting all

            ComponentSetValue2(wallet_component, "money", money - remove_amount)
			drop_rings(owner, ring_value)
			GlobalsSetValue( "last-sanic-hit-"..entity_id, GameGetFrameNum() )
        end
    end
end

function drop_rings(player, value)
    local circlePercent = 0.75; -- 3/4 of circle in fractions
    local center = -0.25; -- -90 deg in percent
    local start = -center/2;    
    local number = 9; -- odd number will be best, preferably 5+    
    local step = -circlePercent/(number-1);    
    local distance = 12; -- from player to spawn
    local force = 13; -- speed of ring
	local velocityToForce = 9;
        
    local x, y = EntityGetTransform(player)
    local velocity_component = EntityGetFirstComponent(player, 'VelocityComponent')
    local pvx, pvy = ComponentGetValueVector2(velocity_component, 'mVelocity')
    for i = 0, number-1 do
        local angle = (start + step * i) * math.pi * 2
        local rx, ry = to_point_from_direction(x,y,distance, angle)
        local fx, fy = to_point_from_direction(0,0,force, angle)
        local ring = spawn_at_with_force("mods/noita-nemesis/files/entities/items/pickup/sanic/sanic_ring.xml", rx, ry, fx+pvx*velocityToForce, fy+pvy*velocityToForce)
        ring_value(ring, value)
    end
end

function ring_value(entity_id, value)
    local variable_component = EntityGetFirstComponent(entity_id, "VariableStorageComponent")
    ComponentSetValue2(variable_component, "value_int", value)
end

function spawn_at_with_force(path, x, y, fx, fy)
    local eid = EntityLoad(path, x, y)
    PhysicsApplyForce(eid, fx, fy)
    return eid
end

function to_point_from_direction(x, y, distance, angle)
    local sx, sy = x + math.cos(angle) * distance, y + math.sin(angle) * distance;
    return sx, sy
end