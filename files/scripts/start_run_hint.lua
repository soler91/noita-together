dofile_once("mods/noita-together/files/store.lua")
local entity_id = GetUpdatedEntityID()

if (NT.run_started) then
    EntityKill(entity_id)
end