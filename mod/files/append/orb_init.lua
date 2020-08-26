local entity_id = GetUpdatedEntityID()

EntityAddComponent(
    entity_id,
    "LuaComponent",
    {
        script_source_file = "mods/noita-together/files/scripts/orb_killer.lua",
        execute_on_added = "1",
        execute_every_n_frame = "10"
    }
)
