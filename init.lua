if not async then
    dofile("mods/noita-together/files/scripts/coroutines.lua")
end
local pregen_wand_biomes = {
    "data/scripts/biomes/coalmine.lua",
    "data/scripts/biomes/coalmine_alt.lua",
    "data/scripts/biomes/tower.lua",
};
for _,entry in pairs( pregen_wand_biomes ) do
    ModLuaFileAppend( entry, "mods/noita-together/files/append/preset_wands_random.lua" );
end
ModLuaFileAppend("data/scripts/biome_scripts.lua", "mods/noita-together/files/append/biome_scripts.lua")
ModLuaFileAppend("data/scripts/items/generate_shop_item.lua", "mods/noita-together/files/append/generate_shop_item.lua")
ModLuaFileAppend("data/scripts/gun/procedural/gun_procedural.lua", "mods/noita-together/files/append/gun_procedural.lua")
ModLuaFileAppend("data/scripts/items/chest_random.lua", "mods/noita-together/files/append/chest_random.lua")
ModLuaFileAppend("data/scripts/items/chest_random_super.lua", "mods/noita-together/files/append/chest_random_super.lua")

ModLuaFileAppend("data/scripts/biomes/temple_altar.lua", "mods/noita-together/files/append/co_op_mail.lua")
ModLuaFileAppend("data/scripts/biomes/boss_arena.lua", "mods/noita-together/files/append/co_op_mail.lua")

ModLuaFileAppend("data/scripts/biomes/snowcastle_cavern.lua", "mods/noita-together/files/append/snowcastle_cavern.lua")
ModLuaFileAppend("data/entities/animals/boss_centipede/sampo_pickup.lua", "mods/noita-together/files/append/sampo_append.lua")
ModLuaFileAppend("data/scripts/items/heart.lua", "mods/noita-together/files/append/heart_append.lua")
ModLuaFileAppend("data/scripts/items/orb_init.lua", "mods/noita-together/files/append/orb_init.lua")
ModLuaFileAppend("data/scripts/items/orb_pickup.lua", "mods/noita-together/files/append/orb_pickup.lua")

HideGhosts = false
HideChat = false
BankItems = {}
BankGold = 0
SpellSprites = {}
InGameChat = {}
lastChatMsg = 0
PlayerList = {}
GamePaused = false
LastUpdate = {location= "Mountain", curHp = 100, maxHp = 100}
LastLocation = {x = 0, y = 0}

Respawning = false
LastRespawn = 0
function InGameChatAddMsg(data)
    table.insert(InGameChat, data)
    if (#InGameChat > 100) then
        table.remove(InGameChat, 1)
    end
end

function is_valid_entity(entity_id)
    return entity_id ~= nil and entity_id ~= 0
end

function OnWorldPreUpdate()
    dofile("mods/noita-together/files/scripts/ui.lua")
end

function OnWorldPostUpdate()
    local world_state = GameGetWorldStateEntity()
    if (GamePaused) then
        GamePaused = false
    end
    IsPlayerDead()
    if (_ws_main and is_valid_entity(world_state)) then
        _ws_main()
        if (NT ~= nil and NT.player_count == NT.players_sampo and NT.boss_fight == false) then
            StartBossFight()
        end
    end
end

function OnPlayerSpawned(player_entity)
    local init_check_flag = "start_nt_init_done"
	if GameHasFlagRun( init_check_flag ) then
		return
	end
    GameAddFlagRun( init_check_flag )
    dofile_once("mods/noita-together/files/store.lua")
    local damage_models = EntityGetFirstComponent(player_entity, "DamageModelComponent")
    if (damage_models ~= nil) then ComponentSetValue2(damage_models, "wait_for_kill_flag_on_death", true) end
    local res_x = MagicNumbersGetValue("DESIGN_PLAYER_START_POS_X")
    local res_y = MagicNumbersGetValue("DESIGN_PLAYER_START_POS_Y")

    EntityAddComponent2(player_entity, "VariableStorageComponent", {
        name = "respawn_checkpoint",
        value_string = res_x .. "," .. res_y
    })

    if (NT ~= nil and NT.run_started == false) then
        local controls_component = EntityGetFirstComponent(player_entity, "ControlsComponent")
        if (controls_component ~= nil) then
            ComponentSetValue2(controls_component, "enabled", false)
        end
    end
end

function OnPausePreUpdate()
    if (not GamePaused) then
        GamePaused = true
        SendWsEvent({event="paused", payload = {}})
    end
    if (_ws_main) then
        _ws_main()
    end
end

function OnModPreInit()
    local seed = ModSettingGet( "noita_together.seed" )

    if (seed == nil) then
        seed = 0
        ModSettingSet( "noita_together.seed", seed )
    end

    if (seed > 0) then
        SetWorldSeed(seed)
    end
end

dofile("mods/noita-together/files/ws/ws.lua")