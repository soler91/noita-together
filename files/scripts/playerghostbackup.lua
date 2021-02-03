function GetDest(eid)
    local vars = EntityGetComponent(eid, "VariableStorageComponent")
    local x = 0
    local y = 0
    for _, var in pairs(vars) do
        local name = ComponentGetValue2(var, "name")
        local value = ComponentGetValue2(var, "value_float")
        if (name == "dest_x") then x = value end
        if (name == "dest_y") then y = value end
    end

    return x, y
end

function Step(start,dest, step)
    if (start < dest) then
        return math.min(start + step, dest)
    elseif (start > dest) then
        return math.max(start - step, dest)
    end
end

local entity_id = GetUpdatedEntityID()
local x, y = EntityGetTransform(entity_id)

local dest_x, dest_y = GetDest(entity_id)
local d = 120/60

if (x ~= dest_x) then
    if (math.abs(math.abs(x) - math.abs(dest_x)) > 120) then
        x = dest_x
    else
        x = Step(x, dest_x, d)
    end
end

if (y ~= dest_y) then
    if (math.abs(math.abs(y) - math.abs(dest_y)) > 120) then
        y = dest_y
    else
        y = Step(y, dest_y, d)
    end
end

EntitySetTransform(entity_id, x, y)