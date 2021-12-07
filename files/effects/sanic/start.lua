local entity_id = GetUpdatedEntityID()
local x, y = EntityGetTransform(entity_id)
local owner = EntityGetClosestWithTag(x, y, "mortal")

EntityAddComponent( owner, "LuaComponent", {
    execute_every_n_frame = "-1",
    script_damage_received = "mods/noita-nemesis/files/effects/sanic/damage.lua"
})