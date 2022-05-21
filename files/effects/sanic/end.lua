dofile_once("mods/noita-nemesis/files/scripts/utils.lua")

local owner = get_player()
if (owner ~= nil) then
    local lua_components = EntityGetComponent(owner, "LuaComponent")
    if (lua_components ~= nil) then
        for _, component in ipairs(lua_components) do
            local damage_script_name = ComponentGetValue2(component, "script_damage_received")
            if (damage_script_name ~= nil and damage_script_name == "mods/noita-nemesis/files/effects/sanic/damage.lua") then
                EntityRemoveComponent(owner, component)
            end
        end
    end
end