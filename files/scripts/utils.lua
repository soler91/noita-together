dofile_once("data/scripts/lib/utilities.lua")
function get_player() return EntityGetWithTag("player_unit")[1] end

function get_player_pos()
    local x, y = EntityGetTransform(get_player())
    if x == nil then
        return GameGetCameraPos()
    else
        return x, y
    end
end

function get_closest_entity(px, py, tag)
    if not py then
        tag = px
        px, py = get_player_pos()
    end
    return EntityGetClosestWithTag(px, py, tag)
end

function get_entity_mouse(tag)
    local mx, my = DEBUG_GetMouseWorld()
    return get_closest_entity(mx, my, tag or "hittable")
end

function teleport(x, y) EntitySetTransform(get_player(), x, y) end

function spawn_entity(ename, offset_x, offset_y)
    local x, y = get_player_pos()
    x = x + (offset_x or 0)
    y = y + (offset_y or 0)
    return EntityLoad(ename, x, y)
end

function get_players()
    return EntityGetWithTag( "player_unit" ) or {};
end

function resolve_localized_name(s, default)
    if s:sub(1, 1) ~= "$" then return s end
    local rep = GameTextGet(s)
    if rep and rep ~= "" then
        return rep
    else
        return default or s
    end
end

function twiddle_health(f)
    local damagemodels =
        EntityGetComponent(get_player(), "DamageModelComponent")
    if (damagemodels ~= nil) then
        for i, damagemodel in ipairs(damagemodels) do
            local max_hp = tonumber(ComponentGetValue(damagemodel, "max_hp"))
            local cur_hp = tonumber(ComponentGetValue(damagemodel, "hp"))
            local new_cur, new_max = f(cur_hp, max_hp)
            ComponentSetValue2(damagemodel, "max_hp", new_max)
            ComponentSetValue2(damagemodel, "hp", new_cur)
        end
    end
end

function urand(mag) return math.floor((math.random() * 2.0 - 1.0) * mag) end

function spawn_item(path, offset_mag)
    local x, y = get_player_pos()
    local dx, dy = urand(offset_mag or 0), urand(offset_mag or 0)
    print(x + dx, y + dy)
    local entity = EntityLoad(path, x + dx, y + dy)
end

function wrap_spawn(path, offset_mag)
    return function() spawn_item(path, offset_mag) end
end

-- 0 to not limit axis, -1 to limit to negative values, 1 to limit to positive values
function generate_value_in_range(max_range, min_range, limit_axis)
    local range = (max_range or 0) - (min_range or 0)
    if (limit_axis or 0) == 0 then limit_axis = Random(0, 1) == 0 and 1 or -1 end

    return (Random(0, range) + (min_range or 0)) * limit_axis
end

function spawn_item_in_range(path, min_x_range, max_x_range, min_y_range,
                             max_y_range, limit_x_axis, limit_y_axis,
                             spawn_blackhole)
    local x, y = get_player_pos()
    local dx = generate_value_in_range(max_x_range, min_x_range, limit_x_axis)
    local dy = generate_value_in_range(max_y_range, min_y_range, limit_y_axis)

    if spawn_blackhole then
        EntityLoad("data/entities/projectiles/deck/black_hole.xml", x + dx,
                   y + dy)
    end
    local ix, iy = FindFreePositionForBody(x + dx, y + dy, 300, 300, 30)
    return EntityLoad(path, ix, iy)
end

function spawn_item(path, min_range, max_range, spawn_blackhole)
    return spawn_item_in_range(path, min_range, max_range, min_range, max_range,
                               0, 0, spawn_blackhole)
end

function empty_player_stomach()
    local player = get_player()
    if player ~= nil then
        local stomach = EntityGetFirstComponent(player, "IngestionComponent")
        if stomach ~= nil then
            ComponentSetValue2(stomach, "ingestion_size", "0")
        end
    end
end

function GetBestPoint(x, y, distance, resolution)
	local bestScore = -10
	local bestAngle = 0
	local bestDistance = 0
	local seed = math.floor(math.random(0,resolution))
	
	for i = seed, resolution - 1 + seed do
	
		local hit2, hx2, hy2, a2 = Raycast(x, y, distance, i/resolution - (1/resolution/2))
		local hit1, hx1, hy1, a1 = Raycast(x, y, distance, i/resolution)
		local hit3, hx3, hy3, a3 = Raycast(x, y, distance, i/resolution + (1/resolution/2))
		
		local mid = dist(x, y, hx1, hy1)
		local score = mid + dist(x, y, hx2, hy2) + dist(x, y, hx3, hy3)
		if(bestScore < score) then
			bestScore = score
			bestAngle = a1
			bestDistance = math.sqrt(mid)
		end
	end
	
	return bestAngle, bestDistance
end

function Raycast(x, y, distance, fraction)
	local angle = fraction * math.pi * 2
	x, y = ToPointFromDirection(x,y,10, angle)
	local sx, sy = ToPointFromDirection(x,y,distance-10, angle)
	local hit, hx, hy = RaytraceSurfaces(x, y, sx, sy)--RaytraceSurfaces RaytracePlatforms
	return hit, hx, hy, angle;
end

function ToPointFromDirection(x, y, distance, angle)
	local sx, sy = x + math.cos(angle) * distance,
				   y + math.sin(angle) * distance;
    return sx, sy
end

function dist(x, y, sx, sy)
	return ((sx-x)*(sx-x)) + ((sy-y)*(sy-y))
end

function spawn_entity_in_view_random_angle(filename, min_distance, max_distance, safety, callback, inEmpty)
	safety = safety or 20
	if inEmpty ~= true then inEmpty = false end
	
	async(function()
		local x, y, hit, hx, hy, angle, distance
		repeat
			wait(1)
			local fraction = math.random();
			distance = Random(min_distance, max_distance) + safety;
			x, y = get_player_pos()
			hit, hx, hy, angle = Raycast(x, y, distance, fraction)
		until(hit == inEmpty and dist(x, y, hx, hy) > (min_distance*min_distance))
		
		hx, hy = ToPointFromDirection(x, y, distance - safety, angle)
		local eid = EntityLoad(filename, hx, hy)
		if(callback) then callback(eid) end
	end)
end
local states = {
    "RandomMove",
    "Wandering",
    "Eating",
    "RaisingHead",
    "PreparingJump",
    "MoveNearTarget",
    "Peeing",
    "Defecating",
    "Alert",
    "Landing",
    "TakingFireDamage",
    "EscapingPrey",
    "AttackingMelee",
    "AttackingMeleeDash",
    "AttackingRanged",
    "AttackingRangedMulti",
    "Escaping",
    "JobDefault",
    "JobGoto",
    "JobHelpOtherEntity",
    "GoNearHome",
   }
function entity_attack_timer(eid, frames)
    local AIComponent = EntityGetFirstComponentIncludingDisabled(eid, "AnimalAIComponent")
    if (AIComponent == nil) then return end
    
    ComponentSetValue2(AIComponent, "ai_state", 2)
    ComponentSetValue2(AIComponent, "ai_state_timer", frames)
    GamePrint(states[ComponentGetValue2(AIComponent, "ai_state")])
end

function DistanceFromLineMany(a,b,c, aX,aY) -- ax + by + c = 0 | by = -ax - c
	local top = 0
	for k, v in pairs(aX) do
		local dis = a * aX[k] + b * aY[k] + c;
		top = top + dis*dis;
	end
	return top/(a*a+b*b);
end

function PointToLine(x, y, a)
	if( a == 90) then a = 90.5; end
	if( a == 270) then a = 270.5; end
	local radian = a * math.pi / 180;
	-- m =  tan(angle)
	local m = math.tan(radian);
	-- n = startPoint_Y - (tan ( angle) * startPoint_X )
	local n = y - m * x;
	-- m*x + n = y 
	return -m, 1, -n, radian;
end


function GetTunelDirectionFromPoint2(x, y, distance, resolution)
local pointX = {};
	local pointY = {};
	table.insert(pointX, x);
	table.insert(pointY, y);
	
	for i = 0, resolution - 1 do
		local angle = i / resolution * math.pi * 2
		local sx, sy = x + math.cos(angle) * distance,
					   y + math.sin(angle) * distance;
					   
	    local hit, hx, hy = RaytracePlatforms(x, y, sx, sy)
		table.insert(pointX, hx);
		table.insert(pointY, hy);
		
		--EntityLoad( "data/entities/particles/poof_pink.xml", hx, hy )
	end
	
	local angleMin = nil
	local distance = nil
	
	for i = 0, 180 do
		local a,b,c, angleRad = PointToLine(x, y, i)
		local dist = DistanceFromLineMany(a,b,c, pointX, pointY)
		if distance == nil or distance > dist then
			angleMin = angleRad;
			distance = dist
		end
	end
	--GamePrint(angleMin)
	if math.random(0,2) == 0 then angleMin = angleMin + math.pi end
	
	return x, y, angleMin
end

function GetInven()
    local childs = EntityGetAllChildren(get_player())
    local inven = nil
    if childs ~= nil then
        for _, child in ipairs(childs) do
            if EntityGetName(child) == "inventory_quick" then
                inven = child
            end
        end
    end
    return inven
end

function GetWands(hax)
    local childs = EntityGetAllChildren(get_player())
    local inven = nil
    if childs ~= nil then
        for _, child in ipairs(childs) do
            if EntityGetName(child) == "inventory_quick" then
                inven = child
            end
        end
    end
    local wands = {}
    if inven ~= nil then
        local items = EntityGetAllChildren(inven)
        for _, child_item in ipairs(items) do
            if EntityHasTag(child_item, "wand") then
                if (hax) then
                    table.insert(wands, child_item)
                else
                    wands[_] = child_item
                end
            end
        end
    end

    return wands or nil
end

function force_refresh_wands()
    local inventory2 = EntityGetFirstComponent( get_player(), "Inventory2Component" );
    if inventory2 ~= nil then
        ComponentSetValue2( inventory2, "mForceRefresh", true );
        ComponentSetValue2( inventory2, "mActualActiveItem", 0 );
    end
end

function can_remove_perk(perk_data)
  local flag_name = get_perk_picked_flag_name( perk_data.id )
  local pickup_count = tonumber( GlobalsGetValue( flag_name .. "_PICKUP_COUNT", "0" ) )

  return ( GameHasFlagRun( flag_name ) or ( pickup_count > 0 ) ) and ( ( perk_data.do_not_remove == nil ) or ( perk_data.do_not_remove == false ) )
end

function remove_random_perk(perk_filter)
  if perk_filter == nil then
      perk_filter = function() return true end
  end
  local removeable = {}
  for i, perk in pairs(perk_list) do
      if perk_filter(perk) and can_remove_perk(perk) then
          table.insert(removeable, perk)
      end
  end
  if #removeable == 0 then
      return
  end

  local player_id = get_player()
  if player_id == nil then
      return
  end

  local perk_data = removeable[Random(1, #removeable)]
  local perk_id = perk_data.id
  local flag_name = get_perk_picked_flag_name( perk_id )
  local pickup_count = tonumber( GlobalsGetValue( flag_name .. "_PICKUP_COUNT", "0" ) )
  GamePrint( "Removing " .. perk_id )
  GameRemoveFlagRun( flag_name )
  pickup_count = 0
  GlobalsSetValue( flag_name .. "_PICKUP_COUNT", tostring( pickup_count ) )
  
  if ( perk_data.game_effect ~= nil ) then
    local comp = GameGetGameEffect( player_id, perk_data.game_effect )
    
    if ( comp ~= NULL_ENTITY ) then
      ComponentSetValue2( comp, "frames", 1 )
    end
  end
  
  if ( perk_data.game_effect2 ~= nil ) then
    local comp = GameGetGameEffect( player_id, perk_data.game_effect2 )
    
    if ( comp ~= NULL_ENTITY ) then
      ComponentSetValue2( comp, "frames", 1 )
    end
  end
  
  if ( perk_data.func_remove ~= nil ) then
    perk_data.func_remove( player_id )
  end
  
  if ( perk_data.remove_other_perks ~= nil ) then
    for a,b in ipairs( perk_data.remove_other_perks ) do
      local f = get_perk_picked_flag_name( b )
      GameRemoveFlagRun( f )
    end
  end

  local children = EntityGetAllChildren( player_id )
  for i,v in ipairs( children ) do
      if EntityHasTag(v, "perk_entity") then
          ui_comp = EntityGetFirstComponent(v, "UIIconComponent")
          if ui_comp ~= nil and ComponentGetValue2(ui_comp, "icon_sprite_file") == perk_data.ui_icon then
              EntityKill(v)
          end
      end
  end
end

immunity_perks = {
PROTECTION_FIRE=true,
PROTECTION_RADIOACTIVITY=true,
PROTECTION_EXPLOSION=true,
PROTECTION_MELEE=true,
PROTECTION_ELECTRICITY=true,
EXPLODING_CORPSES=true,
BLEED_OIL=true,
BLEED_GAS=true,
ELECTRICITY=true
}

function is_immunity_perk(perk)
  return immunity_perks[perk.id] ~= nil
end
