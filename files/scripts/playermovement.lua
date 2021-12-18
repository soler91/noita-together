dofile("data/scripts/lib/utilities.lua")
function ConvertStrToNumberTable(data, idk)
    local ret = {}
    for value in string.gmatch(data, "([^,]+)") do
        table.insert(ret, tonumber(value))
    end
    return unpack(ret)
end

function GetVarComponent(eid, name)
    local vars = EntityGetComponent(eid, "VariableStorageComponent")
    for _, var in pairs(vars) do
        local vname = ComponentGetValue2(var, "name")
        if (name == vname) then
            return var
        end
    end
    return nil
end

function GetDest(eid)
    local dest_comp = GetVarComponent(eid, "dest")
    local dest = ComponentGetValue2(dest_comp, "value_string")
    --print("Current Request: "..dest)
    return ConvertStrToNumberTable(dest, "dest")
end

local entity_id = GetUpdatedEntityID()
local x, y = EntityGetTransform(entity_id)
local dest_x, dest_y, dest_scale_x = GetDest(entity_id)

if (x ~= nil and y ~= nil and dest_x ~= nil and dest_y ~= nil) then
    if (x ~= dest_x) then
        if (math.abs(math.abs(x) - math.abs(dest_x)) > 250) then
            --print("JUST TP")
            x = dest_x
        else
            local d = CalCulateStep(x, dest_x)
            x = Step(x, dest_x, d)
        end
    end
    
    if (y ~= dest_y) then
        if (math.abs(math.abs(y) - math.abs(dest_y)) > 250) then
            --print("JUST TP")
            y = dest_y
        else
            local d = CalCulateStep(y, dest_y)
            y = Step(y, dest_y, d)
        end
    end
    local scale_x = dest_scale_x or 1
    EntitySetTransform(entity_id, x, y, 0, scale_x)
    SetLastDest(entity_id, dest_x ..","..dest_y .. "," .. scale_x)
end