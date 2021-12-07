local entity_id = GetUpdatedEntityID()
local x, y = EntityGetTransform(entity_id)

x = math.floor(x)
y = math.floor(y)
local used = GlobalsGetValue("NEMESIS_USED_ABILITY_"..tostring(x).."_"..tostring(y), "0")

if (used == "1") then
    EntityKill(entity_id)
end