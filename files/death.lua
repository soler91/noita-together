dofile_once("mods/noita-together/files/store.lua")
dofile_once("mods/noita-nemesis/files/store.lua")
dofile_once("mods/noita-together/files/scripts/json.lua")
dofile_once("mods/noita-nemesis/files/scripts/utils.lua")

function death( dmg_type, dmg_msg, entity_thats_responsible, drop_items )
    local player = get_player()
    if (entity_thats_responsible ~= player and EntityGetParent(entity_thats_responsible) ~= player) then
        return
    end

    local entity_id = GetUpdatedEntityID()
	local x, y = EntityGetTransform( entity_id )
    local px, py = get_player_pos()
    local entity_file = EntityGetFilename( entity_id )
    local entity_name = EntityGetName(entity_id)
    local damagecomp = EntityGetFirstComponentIncludingDisabled(entity_id, "DamageModelComponent")
    if (damagecomp ~= nil) then
        local max_hp = ComponentGetValue2(damagecomp, "max_hp")
        local points = math.floor(max_hp*10) --Y scaling TODO ???
        NEMESIS.points = NEMESIS.points + points
    end 
    if (EntityHasTag(entity_id, "NEMESIS_ENEMY")) then
        return
    end
    local playerlist = json.decode(NEMESIS.PlayerList)
    local count = #playerlist
    if (count < 5) then count = 5 end
    if (count > 30) then count = 30 end
    local spawn_chance = 1 - 0.03 * count
    if Random(1, 100) >= spawn_chance * 100 then
        return
    end
    local cx, cy = GameGetCameraPos()
    local icon = string.gsub(entity_name, "$animal_", "")
    icon = "data/ui_gfx/animal_icons/" .. icon .. ".png"
    local icon_entity = EntityLoad("mods/noita-nemesis/files/entities/kill_icon/entity.xml")
    local sprite = EntityGetFirstComponent(icon_entity, "SpriteComponent")
    ComponentSetValue2(sprite, "image_file", icon)
    EntitySetTransform(icon_entity, x, y)
    local queue = json.decode(NT.wsQueue)
    table.insert(queue, {event="CustomModEvent", payload={name="NemesisEnemy", icon=icon, file=entity_file}})
    NT.wsQueue = json.encode(queue)
end