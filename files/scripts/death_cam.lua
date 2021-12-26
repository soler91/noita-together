dofile_once("mods/noita-together/files/scripts/utils.lua")
local entity = GetUpdatedEntityID()
local x, y = EntityGetTransform(entity)
local px, py = GetLastCheckPoint()
local player = GetPlayer()
if (player ~= nil and player > 0) then
    EntitySetTransform(player, px, py)
end
GameSetCameraPos(x, y)