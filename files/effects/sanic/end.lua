local entity_id = GetUpdatedEntityID()
local x, y = EntityGetTransform(entity_id)
local owner = EntityGetClosestWithTag(x, y, "mortal")

local lua_components = EntityGetComponent(owner, "LuaComponent")
if (lua_components ~= nil) then
    for _, component in ipairs(lua_components) do
        local damage_script_name = ComponentGetValue2(component, "script_damage_received")
        if (damage_script_name ~= nil and damage_script_name == "mods/noita-nemesis/files/effects/sanic/damage.lua") then
            EntityRemoveComponent(owner, component)
        end
    end
end