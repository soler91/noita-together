dofile_once("data/scripts/lib/utilities.lua")
function ConvertStrToTable(data)
    local ret = {}
    for value in string.gmatch(data, "([^,]+)") do
        table.insert(ret, value)
    end
    return ret
end
function ConvertTableToStr(data)
    local ret = ","
    for _, value in pairs(data) do
        ret = ret .. value .. ","
    end
    return ret
end
function GetStuff(data, remove)
    local ret = {arm={}}
    if (#data < 7) then return nil end
    ret.arm.r = tonumber(remove and table.remove(data,1) or data[1])
    ret.arm.sy = tonumber(remove and table.remove(data,1) or data[2])
    ret.x = tonumber(remove and table.remove(data,1) or data[3])
    ret.y = tonumber(remove and table.remove(data,1) or data[4])
    ret.scale_x = tonumber(remove and table.remove(data,1) or data[5])
    ret.a = tonumber(remove and table.remove(data,1) or data[6])
    ret.h = tonumber(remove and table.remove(data,1) or data[7])
    return ret
end

function Wands(data)
    local ret = {}
    repeat
        local slot = tonumber(data[1] and table.remove(data, 1) or -2)
        local sprite = table.remove(data,1)
        table.insert(ret, {slot=slot, sprite=sprite})
    until(#data == 0)
    return ret
end
local anims_n = {
    stand = 1,
    walk = 2,
    run = 3,
    burn = 4,
    jump_up = 5,
    jump_fall = 6,
    land = 7,
    fly_idle = 8,
    fly_move = 9,
    knockback = 10,
    swim_idle = 11,
    swim_move = 12,
    attack = 13,
    kick = 14,
    kick_alt = 15,
    lower_head = 16,
    raise_head = 17,
    eat = 18,
    crouch = 19,
    walk_backwards = 20,
    move_item_stash = 21,
    move_item = 22,
    throw_old = 23,
    stand_crouched = 24,
    walk_crouched = 25,
    run_crouched = 26,
    walk_backwards_crouched = 27,
    kick_crouched = 28,
    kick_alt_crouched = 29,
    throw_crouched = 30,
    rise = 31,
    throw = 32,
    slide = 33,
    slide_end = 34,
    slide_crouched = 35,
    slide_end_crouched = 36,
    slide_start = 37,
    slide_start_crouched = 38,
    hurt = 39,
    hurt_swim = 40,
    hurt_fly = 41,
    grab_item = 42,
    idle_hold = 43,
    throw_item = 44,
    push_start = 45,
    push = 46,
    cough = 47,
    intro_stand_up = 48,
    intro_sleep = 49,
    throw_small = 50,
    telekinesis_grab_start = 51,
    telekinesis_grab_start_crouched = 52,
    telekinesis_throw = 53,
    telekinesis_throw_crouched = 54
}
local anims_s = {
    "stand",
    "walk",
    "run",
    "burn",
    "jump_up",
    "jump_fall",
    "land",
    "fly_idle",
    "fly_move",
    "knockback",
    "swim_idle",
    "swim_move",
    "attack",
    "kick",
    "kick_alt",
    "lower_head",
    "raise_head",
    "eat",
    "crouch",
    "walk_backwards",
    "move_item_stash",
    "move_item",
    "throw_old",
    "stand_crouched",
    "walk_crouched",
    "run_crouched",
    "walk_backwards_crouched",
    "kick_crouched",
    "kick_alt_crouched",
    "throw_crouched",
    "rise",
    "throw",
    "slide",
    "slide_end",
    "slide_crouched",
    "slide_end_crouched",
    "slide_start",
    "slide_start_crouched",
    "hurt",
    "hurt_swim",
    "hurt_fly",
    "grab_item",
    "idle_hold",
    "throw_item",
    "push_start",
    "push",
    "cough",
    "intro_stand_up",
    "intro_sleep",
    "throw_small",
    "telekinesis_grab_start",
    "telekinesis_grab_start_crouched",
    "telekinesis_throw",
    "telekinesis_throw_crouched"
}
local entity_id = GetUpdatedEntityID()
local x, y = EntityGetTransform(entity_id)
local visible = is_in_camera_bounds(x, y, 60)
local dest_varcomp =get_variable_storage_component(entity_id, "dest")
local movement = ConvertStrToTable(ComponentGetValue2(dest_varcomp, "value_string"))
local current = GetStuff(movement, true)
if (visible) then
    local platcomp = EntityGetComponent( entity_id, "SpriteComponent", "character" )
    local inven_varcomp =get_variable_storage_component(entity_id, "inven")
    local inven = Wands(ConvertStrToTable(ComponentGetValue2(inven_varcomp, "value_string")))
    local next = GetStuff(movement, false)
    held = -1
    if (current ~= nil) then
        arm = current.arm
        held = current.h + 1
    end
    local held_wand = ""
    for _, wand in pairs(inven or {}) do
        if (wand.slot+1 == held) then 
            held_wand = wand.sprite
            break
        end
    end
    if (next ~= nil) then current = next end

    if (x ~= nil and y ~= nil and current ~= nil) then
        movement = ConvertTableToStr(movement)
        local anim = anims_s[current.a] or anims_s[1]
        tx, ty = vec_lerp(x, y, current.x, current.y, 0.869)
        EntitySetTransform(entity_id, tx, ty, 0, current.scale_x)
        for _, compid in pairs(platcomp) do
            ComponentSetValue2(compid, "rect_animation", anim)
        end
        for _, child in pairs(EntityGetAllChildren(entity_id)) do
            local name = EntityGetName(child)
            if (name == "held_item") then
                local sprite_comp = EntityGetFirstComponent(child, "SpriteComponent")
                local sprite = ComponentGetValue2(sprite_comp, "image_file")
                if (sprite ~= held_wand and held_wand ~= "") then
                    ComponentSetValue2(sprite_comp, "image_file", held_wand)
                end
            end
            if (name == "arm_r" or name == "held_item") then
                local ax, ay = EntityGetTransform(child)
                EntitySetTransform(child, ax, ay, arm.r, 1, arm.sy)
            end
        end
        ComponentSetValue2(dest_varcomp, "value_string", movement)
    end
else
    if (x ~= nil and y ~= nil and current ~= nil) then
        local hax = true
        while hax do
            local nextmov = GetStuff(movement, true)
            if (nextmov == nil) then 
                hax = false
            else
                current = nextmov 
            end
        end
        EntitySetTransform(entity_id, current.x, current.y, 0, current.scale_x)
        ComponentSetValue2(dest_varcomp, "value_string", ",")
    end
end