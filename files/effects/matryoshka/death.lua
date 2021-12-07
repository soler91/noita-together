-- Please give me death
dofile_once("data/scripts/lib/utilities.lua")

function SetupMatryoshka(entity, val)
	EntityAddComponent2(entity, "VariableStorageComponent", {
		name="matryoshka",
		value_float=val
	})
	EntityAddComponent2( entity, "LuaComponent", 
	{ 
		script_death = "mods/noita-nemesis/files/effects/matryoshka/death.lua",
		execute_every_n_frame = -1,
	} )
	EntityAddTag(entity, "matryoshka")
    EntityAddTag(entity, "NEMESIS_ENEMY")
end

function MakeSmol(entity, val)
    local chardata = EntityGetFirstComponentIncludingDisabled(entity, "CharacterDataComponent")
    local damage = EntityGetFirstComponentIncludingDisabled(entity, "DamageModelComponent")
    local hitbox = EntityGetFirstComponentIncludingDisabled(entity, "HitboxComponent")
    local sprites = EntityGetComponent(entity, "SpriteComponent")

    ComponentSetValue2(damage, "hp", ComponentGetValue2(damage, "hp") * 0.69 )
    ComponentSetValue2(damage, "invincibility_frames", 2)
    ComponentSetValue2(damage, "ragdoll_filenames_file", "")
    if (val > 0.70) then
        ComponentSetValue2(damage,"create_ragdoll", false)
    end
    ComponentSetValue2(chardata, "buoyancy_check_offset_y", ComponentGetValue2(chardata, "buoyancy_check_offset_y") * val)
    ComponentSetValue2(chardata, "collision_aabb_min_x", ComponentGetValue2(chardata, "collision_aabb_min_x") * val)
    ComponentSetValue2(chardata, "collision_aabb_max_x", ComponentGetValue2(chardata, "collision_aabb_max_x") * val)
    ComponentSetValue2(chardata, "collision_aabb_min_y", ComponentGetValue2(chardata, "collision_aabb_min_y") * val)
    ComponentSetValue2(chardata, "collision_aabb_max_y", ComponentGetValue2(chardata, "collision_aabb_max_y") * val)

    ComponentSetValue2(hitbox, "aabb_min_x", ComponentGetValue2(hitbox ,"aabb_min_x") * val )
    ComponentSetValue2(hitbox, "aabb_max_x", ComponentGetValue2(hitbox ,"aabb_max_x") * val )
    ComponentSetValue2(hitbox, "aabb_min_y", ComponentGetValue2(hitbox ,"aabb_min_y") * val )
    ComponentSetValue2(hitbox, "aabb_max_y", ComponentGetValue2(hitbox ,"aabb_max_y") * val )

    for _, sprite in ipairs(sprites) do
        ComponentSetValue2(sprite, "has_special_scale", true)
        ComponentSetValue2(sprite, "special_scale_x", val)
        ComponentSetValue2(sprite, "special_scale_y", val)
        ComponentSetValue2(sprite, "update_transform", true)
        ComponentSetValue2(sprite, "update_transform_rotation", true)
    end
end

function death( dmg_type, dmg_msg, entity_thats_responsible, drop_items )
    local entity_id = GetUpdatedEntityID()
	local x, y = EntityGetTransform( entity_id )
    local comp = get_variable_storage_component(entity_id, "matryoshka")
    if (comp == nil) then
        return
    end
    local val = ComponentGetValue2(comp, "value_float")
    local entity_file = EntityGetFilename( entity_id )
    val = val - 0.20

    if (val > 0.35) then
        local entity_new = EntityLoad(entity_file, x, y)
        SetupMatryoshka(entity_new, val)
        MakeSmol(entity_new, val)
    end
end