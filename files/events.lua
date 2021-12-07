--dofile_once("mods/noita-together/files/scripts/json.lua")
if not async then
  dofile("mods/noita-together/files/scripts/coroutines.lua")
end
dofile_once("mods/noita-nemesis/files/scripts/utils.lua")

local NEMESIS_PLAYERLIST_HACK = {}
customEvents["NemesisEnemy"] = function(data)
    local userId = data.userId
    local playerlist = json.decode(NEMESIS.PlayerList)
    local playername = playerlist[tostring(data.userId)]
    local cx, cy = GameGetCameraPos()
    local target_x = cx - 100
    local target_y = cy - 120
    
    spawn_entity_in_view_random_angle("mods/noita-nemesis/files/entities/enemy_spawner/entity.xml", 96, 269, 20, function(spawner)
        local dx, dy = EntityGetTransform(spawner)
        EntityAddComponent2(spawner, "VariableStorageComponent", {
            name="dest_x",
            value_float=dx
        })
        EntityAddComponent2(spawner, "VariableStorageComponent", {
            name="dest_y",
            value_float=dy
        })
        EntityAddComponent2(spawner, "VariableStorageComponent", {
            name="enemy_file",
            value_string=data.file or ""
        })
        EntitySetTransform(spawner, target_x, target_y)
        local sprite = EntityGetFirstComponent(spawner, "SpriteComponent")
        ComponentSetValue2(sprite, "image_file", data.icon or "")
    end)
    GamePrint(playername .. " sends and enemy")
end

customEvents["NemesisRespawn"] = function(data)
    local userId = data.userId
    local playerlist = json.decode(NEMESIS.PlayerList)
    local playername = playerlist[tostring(data.userId)]
    
    GamePrint(playername .. " respawned")
end

customEvents["NemesisAbility"] = function(data)
    local used = GlobalsGetValue("NEMESIS_USED_ABILITY_"..tostring(data.x).."_"..tostring(data.y), "0")
    if (used == "1") then return end
    local userId = data.userId
    local playerlist = json.decode(NEMESIS.PlayerList)
    local playername = playerlist[tostring(data.userId)]
    GamePrint(playername .. " used " .. data.ability)
    GlobalsSetValue("NEMESIS_USED_ABILITY_"..tostring(data.x).."_"..tostring(data.y), "1")
    local fn = ABILITIES[data.ability].fn
    if (fn ~= nil) then fn() end
end

customEvents["NemesisNgPlus"] = function(data)
    --TODO
end

customEvents["TeamPerk"] = function(data)
    -- no-op
end

local _AddPlayer = wsEvents["AddPlayer"]
--local _RemovePlayer = wsEvents["RemovePlayer"]

wsEvents["AddPlayer"] = function(data)
    local userIdStr = tostring(data.userId)
    if (NEMESIS == nil) then
        NEMESIS_PLAYERLIST_HACK[userIdStr] = data.name
    else
        local playerlist = json.decode(NEMESIS.PlayerList)
        playerlist[userIdStr] = data.name
        NEMESIS.PlayerList = json.encode(playerlist)
    end
    _AddPlayer(data)
end

local _PlayerSpawn = OnPlayerSpawned
function OnPlayerSpawned(player)
	  dofile_once("mods/noita-nemesis/files/store.lua")
    NEMESIS.PlayerList = json.encode(NEMESIS_PLAYERLIST_HACK)
    _PlayerSpawn(player)
end

wsEvents["PlayerDeath"] = function(data)
    if (data.isWin == true) then
        -- TODO: no winning
        PlayerList[data.userId].curHp = 0
        msg = PlayerList[data.userId].name .. " has won."
        --InGameChatAddMsg({name = "[System]", message = msg})
        GamePrintImportant(msg, "")
    else
        PlayerList[data.userId].curHp = 0

        local aliveCount = 0

        for k, v in pairs(PlayerList) do
            if (v.curHp > 0) then
                aliveCount = aliveCount + 1
            end
        end

        if (aliveCount == 0) then
            msg = "You won."
            GamePrintImportant(msg, "")
        else
          msg = PlayerList[data.userId].name .. " has died."
          GamePrintImportant(msg, "")
        end
    end
end

--[[
wsEvents["RemovePlayer"] = function(data)
    DespawnPlayerGhost(data.userId)
    Playerplayerlist[data.userId] = nil
    PlayerCount = PlayerCount - 1
end
]]
function timed_ability(name, frames)
    local player = get_player()
    if (player == nil) then return end
    local thing = EntityGetWithName("nemesis_" .. name)
    if (thing ~= 0) then
        local lifetime = EntityGetFirstComponentIncludingDisabled(thing, "LifetimeComponent")
        local framesleft = ComponentGetValue2(lifetime, "kill_frame")
        ComponentSetValue2(lifetime, "kill_frame", framesleft + frames )
        return
    end
    local x, y = get_player_pos()
    local thingy = EntityLoad("mods/noita-nemesis/files/effects/".. name .."/effect.xml", x, y)
    local effectcomp = EntityGetFirstComponent(thingy, "GameEffectComponent")
    if (effectcomp) then
        ComponentSetValue2(effectcomp, "frames", frames)
    end
    EntityAddComponent2(thingy, "LifetimeComponent", {
        lifetime=frames
    })
    EntityAddChild(player, thingy)
end

ABILITIES = {
    grounded = {id="grounded", name="Grounded", weigths = {0.01, 0.01, 0.01, 0.01, 0.01, 0.01},
    fn = function()
        timed_ability("grounded", 60*6)
    end
    },
    shrooms = {id="shrooms", name="Shrooms", weigths = {0.05, 0.05, 0.1, 0.1, 0.1, 0.1},
    fn =function()
        local player = get_player()
        if (player == nil) then return end 
        local pos_x, pos_y, rot = EntityGetTransform( player )
        local how_many = 4
        local angle_inc = ( 2 * 3.14159 ) / how_many
        local theta = rot
        local length = 600
        local name = "fungus"

        for i=1,how_many do
            local vel_x = math.cos( theta ) * length
            local vel_y = 0 - math.sin( theta ) * length

            local bid = shoot_projectile( entity_id, "data/entities/projectiles/" .. name .. ".xml", pos_x + math.cos( theta ) * 12, pos_y - math.sin( theta ) * 12, vel_x, vel_y )
            
            
            theta = theta + angle_inc
        end
    end
    },
    steve = {id="steve", name="Steve", weigths = {0.001, 0.001, 0.01, 0.02, 0.1, 0.1},
    fn=function()
        spawn_entity_in_view_random_angle("data/entities/animals/necromancer_shop.xml", 60, 200, 0, function(eid)
            EntityAddTag(eid, "NEMESIS_ENEMY")
            entity_attack_timer(eid, 20000)
        end)
    end
    },
    acid = {id="acid", name="Acid", weigths={0.1, 0.1, 0.1, 0.1, 0.1, 0.1},
    fn=function ()
        for i=1, 6 do 
            spawn_entity_in_view_random_angle("data/entities/projectiles/deck/acidshot.xml", 20, 180)
        end
    end
    },
    hentai = {id="hentai", name="Hentai", weigths={0.2, 0.1, 0.2, 0.1, 0.1, 0.1},
    fn=function()
        for i=1, 5 do 
            spawn_entity_in_view_random_angle("data/entities/projectiles/deck/tentacle_portal.xml", 30, 200)
        end
    end
    },
    ukko = {id="ukko", name="Ukko", weigths={0.01, 0.05, 0.1, 0.1, 0.1, 1.00},
    fn=function () --
        spawn_entity_in_view_random_angle("data/entities/animals/thundermage.xml", 40, 200, 0, function(eid)
            EntityAddTag(eid, "NEMESIS_ENEMY")
            entity_attack_timer(eid, 20000)
        end)
    end
    },
    trip = {id="trip", name="Trip", weigths={0.80, 0.80, 0.80, 0.80, 0.80, 0.80},
    fn=function ()
        local player = get_player()
        local fungi = CellFactory_GetType("fungi")
        EntityIngestMaterial( player, fungi, 600 )
    end
    },
    tanks = {id="tanks", name="Tanks", weigths={0.60, 0.60, 0.60, 0.60, 0.60, 0.60},
    fn=function ()
        local r = Random(1, 3)
        for i=1, r do 
            spawn_entity_in_view_random_angle("data/entities/animals/tank.xml", 40, 200, 0, function(eid)
                EntityAddTag(eid, "NEMESIS_ENEMY")
                entity_attack_timer(eid, 20000)
            end)
        end
    end
    },
    hankhill = {id="hankhill", name="Hank Hill", weigths={0.7, 0.4, 0.6, 0.2, 0.4, 0.4},
    fn=function()
        local player = get_player()
        if (player == nil) then return end 
        local pos_x, pos_y, rot = EntityGetTransform( player )
        local how_many = 4
        local angle_inc = ( 2 * 3.14159 ) / how_many
        local theta = rot
        local length = 600

        for i=1,how_many do
            local vel_x = math.cos( theta ) * length
            local vel_y = 0 - math.sin( theta ) * length

            local bid = shoot_projectile( entity_id, "data/entities/projectiles/propane_tank.xml", pos_x + math.cos( theta ) * 12, pos_y - math.sin( theta ) * 12, vel_x, vel_y )
            
            theta = theta + angle_inc
        end
    end
    },
    spikedrinks = {id="spikedrinks", name="Spike Drinks", weigths={0.80, 0.80, 0.80, 0.80, 0.80, 0.80},
    fn=function()
        local drinks = {
            "lava",
            "alcohol",
            "acid",
            "radioactive_liquid",
            "magic_liquid_polymorph",
            "magic_liquid_random_polymorph",
            "blood_cold"
        }
        local inventory = GetInven()
        local items = EntityGetAllChildren(inventory)
        if items ~= nil then
            for _, item_id in ipairs(items) do
                local flask_comp = EntityGetFirstComponentIncludingDisabled(item_id, "MaterialInventoryComponent")
                if flask_comp ~= nil then
                    local potion_material = random_from_array(drinks)
                    AddMaterialInventoryMaterial(item_id, potion_material, 150)
                end
            end
        end
    end
    },
    sanic = {id="sanic", name="Sanic", weigths={0.20, 0.10, 0.50, 0.50, 0.50, 0.50},
    fn=function()
        timed_ability("sanic", 60*5)
    end
    },
    confusion = {id="confusion", name="Confusion", weigths={0.80, 0.80, 0.80, 0.80, 0.80, 0.80},
    fn=function()
        timed_ability("confusion", 60*15)
    end
    },
    enemyrandomizer = {id="enemyrandomizer", name="Enemy Randomizer", weigths={0.05, 0.05, 0.05, 0.05, 0.05, 0.05},
    fn=function()
        timed_ability("enemyrandomizer", 60*1)
    end
    },
    matryoshka = {id="matryoshka", name="Matryoshka", weigths={0.30, 0.30, 0.30, 0.30, 0.30, 0.30},
    fn=function()
        timed_ability("matryoshka", 60*45)
    end
    },
    twitchy = {id="twitchy", name="Twitchy", weigths={0.80, 0.80, 0.80, 0.80, 0.80, 0.80},
    fn=function()
        timed_ability("twitchy", 60*30)
    end
    },
    fizzled = {id="fizzled", name="Fizzled", weigths={0.80, 0.80, 0.80, 0.80, 0.80, 0.80},
    fn=function()
        timed_ability("fizzled", 60*30)
    end
    },
    hearty = {id="hearty", name="Hearty", weigths={0.80, 0.80, 0.80, 0.80, 0.80, 0.80},
    fn=function()
        timed_ability("hearty", 60*30)
    end
    },
    weakened = {id="weakened", name="Weakened", weigths={0.80, 0.80, 0.80, 0.80, 0.80, 0.80},
    fn=function()
        timed_ability("weakened", 60*30)
    end
    },
    slowpoke = {id="slowpoke", name="Slowpoke", weigths={0.45, 0.45, 0.45, 0.80, 0.80, 0.80},
    fn=function()
        timed_ability("slowpoke", 60*45)
    end
    },
    gravityfield = {id="gravityfield", name="Gravity Field", weigths={0.40, 0.40, 0.40, 0.40, 0.40, 0.40},
    fn=function()
        timed_ability("gravityfield", 60*30)
    end
    },
    heavyspread = {id="heavyspread", name="Heavy Spread", weigths={0.80, 0.80, 0.80, 0.80, 0.80, 0.80},
    fn=function()
        timed_ability("heavyspread", 60*30)
    end
    },
    loosechunks = {id="loosechunks", name="Loose Chunks", weigths={0.40, 0.40, 0.40, 0.40, 0.40, 0.40},
    fn=function()
        timed_ability("loosechunks", 60*15)
    end
    },
    earthquake = {id="earthquake", name="Earthquake", weigths={0.01, 0.01, 0.01, 0.01, 0.01, 0.01},
    fn=function()
        local x,y = get_player_pos()
        EntityLoad("mods/noita-nemesis/files/entities/earthquake/entity.xml", x, y)
    end
    },
    removerandomPerk = {id="removerandomPerk", name="Remove RandomPerk", weigths={0.08, 0.08, 0.08, 0.08, 0.08, 0.08},
    fn=function()
        remove_random_perk()
    end
    },--[[
    RemoveRandomImmunity = function() 
        remove_random_perk(true)
    end,]]
    removewand = {id="removewand", name="Remove Wand", weigths={0.01, 0.01, 0.01, 0.01, 0.01, 0.01},
    fn=function() --
        local player = get_player()
        if (player ~= nil) then
            local x, y = EntityGetTransform(player)
            local effect = EntityLoad("mods/noita-nemesis/files/entities/removewand/entity.xml", x, y)
            EntityAddChild(player, effect)
        end
    end
    },
    replacewand = {id="replacewand", name="Replace Wand", weigths={0.05, 0.05, 0.05, 0.05, 0.05, 0.05},
    fn=function()
        local player = get_player()
        if (player ~= nil) then
            local x, y = EntityGetTransform(player)
            local effect = EntityLoad("mods/noita-nemesis/files/entities/replacewand/entity.xml", x, y)
            EntityAddChild(player, effect)
        end
    end
    },
    electrocution = {id="electrocution", name="Electrocution", weigths={0.80, 0.80, 0.80, 0.80, 0.80, 0.80},
    fn=function()
        local player = get_player()
        local game_effect = GetGameEffectLoadTo( player, "ELECTROCUTION", true );
        if game_effect ~= nil then ComponentSetValue2( game_effect, "frames", 120 ); end
    end
    },
    enemyshields = {id="enemyshields", name="Enemy Shields", weigths={0.70, 0.70, 0.70, 0.70, 0.70, 0.70},
    fn=function()
        local x, y = get_player_pos()
        for _, entity in pairs(EntityGetInRadiusWithTag(x, y, 1024, "enemy") or {}) do			
            if(EntityHasTag(entity, "boss_centipede") == false or EntityHasTag(entity, "boss_centipede_active") == true) then
                
                local x, y = EntityGetTransform(entity);
                local hitbox = EntityGetFirstComponent(entity, "HitboxComponent");
                local radius = nil;
                local height = 18;
                local width = 18;
                if hitbox ~= nil then
                    height = tonumber(ComponentGetValue(hitbox, "aabb_max_y")) -
                                tonumber(ComponentGetValue(hitbox, "aabb_min_y"));
                    width = tonumber(ComponentGetValue(hitbox, "aabb_max_x")) -
                                tonumber(ComponentGetValue(hitbox, "aabb_min_x"));
                end
                radius = math.max(height, width) + 6;
                local shield = EntityLoad("data/entities/misc/animal_energy_shield.xml",x, y);
                local stats = EntityGetFirstComponent(shield, "EnergyShieldComponent" )
                if stats ~= nil then
                    ComponentSetValue(stats, "energy", "1");
                    ComponentSetValue(stats, "energy_required_to_shield", "0.8");
                    ComponentSetValue(stats, "recharge_speed", "0.10");
                end
                local inherit_transform = EntityGetFirstComponent(shield,"InheritTransformComponent");
                if inherit_transform ~= nil then
                    ComponentSetValue(inherit_transform, "parent_hotspot_tag","shield_center");
                end
                local emitters =
                    EntityGetComponent(shield, "ParticleEmitterComponent") or {};
                for _, emitter in pairs(emitters) do
                    ComponentSetValueValueRange(emitter, "area_circle_radius", radius,radius);
                end
                local energy_shield = EntityGetFirstComponent(shield,"EnergyShieldComponent");
                ComponentSetValue(energy_shield, "radius", tostring(radius));

                local hotspot = EntityAddComponent(entity, "HotspotComponent", {_tags = "shield_center"});
                ComponentSetValueVector2(hotspot, "offset", 0, -height * 0.3);

                if shield ~= nil then EntityAddChild(entity, shield); end
            end
        end
    end
    }
}