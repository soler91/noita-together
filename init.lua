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
ModLuaFileAppend("data/scripts/biomes/boss_arena.lua", "mods/noita-together/files/append/boss_arena.lua")

ModLuaFileAppend("data/scripts/biomes/snowcastle_cavern.lua", "mods/noita-together/files/append/snowcastle_cavern.lua")
ModLuaFileAppend("data/scripts/biomes/snowcastle_hourglass_chamber.lua", "mods/noita-together/files/append/butcher_randomseed.lua")
ModLuaFileAppend("data/entities/animals/boss_centipede/sampo_pickup.lua", "mods/noita-together/files/append/sampo_append.lua")
ModLuaFileAppend("data/scripts/items/heart.lua", "mods/noita-together/files/append/heart_append.lua")
ModLuaFileAppend("data/scripts/items/heart_better.lua", "mods/noita-together/files/append/heart_better_append.lua")
ModLuaFileAppend("data/scripts/items/orb_init.lua", "mods/noita-together/files/append/orb_init.lua")
ModLuaFileAppend("data/scripts/items/orb_pickup.lua", "mods/noita-together/files/append/orb_pickup.lua")
ModLuaFileAppend("data/scripts/perks/perk_pickup.lua", "mods/noita-together/files/append/perk_pickup.lua")
ModLuaFileAppend("data/scripts/perks/perk_reroll.lua", "mods/noita-together/files/append/perk_reroll.lua")
ModLuaFileAppend("data/scripts/perks/perk.lua", "mods/noita-together/files/append/perk.lua")
HideGhosts = false
HideChat = false
PlayerRadar = true
BankItems = {}
BankGold = 0
SpellSprites = {}
InGameChat = {}
lastChatMsg = 0
PlayerList = {}
PlayerCount = 1 -- fix this later
GamePaused = false
LastUpdate = {location= "Mountain", curHp = 100, maxHp = 100}
LastLocation = {x = 0, y = 0, scale_x = 0}
loc_counter = 0
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

loc_tracker = {}
local anims_n = {
    stand = 1,
    walk = 2,
    run = 3,
    burn = 4,
    jump_up = 5,
    jump_fall = 6,
    land = 7,
    fly_idle = 8,
    fly_move = 9,
    knockback = 10,
    swim_idle = 11,
    swim_move = 12,
    attack = 13,
    kick = 14,
    kick_alt = 15,
    lower_head = 16,
    raise_head = 17,
    eat = 18,
    crouch = 19,
    walk_backwards = 20,
    move_item_stash = 21,
    move_item = 22,
    throw_old = 23,
    stand_crouched = 24,
    walk_crouched = 25,
    run_crouched = 26,
    walk_backwards_crouched = 27,
    kick_crouched = 28,
    kick_alt_crouched = 29,
    throw_crouched = 30,
    rise = 31,
    throw = 32,
    slide = 33,
    slide_end = 34,
    slide_crouched = 35,
    slide_end_crouched = 36,
    slide_start = 37,
    slide_start_crouched = 38,
    hurt = 39,
    hurt_swim = 40,
    hurt_fly = 41,
    grab_item = 42,
    idle_hold = 43,
    throw_item = 44,
    push_start = 45,
    push = 46,
    cough = 47,
    intro_stand_up = 48,
    intro_sleep = 49,
    throw_small = 50,
    telekinesis_grab_start = 51,
    telekinesis_grab_start_crouched = 52,
    telekinesis_throw = 53,
    telekinesis_throw_crouched = 54
}
function OnWorldPostUpdate()
    local world_state = GameGetWorldStateEntity()
    if (GamePaused) then
        GamePaused = false
    end
    IsPlayerDead()
    if (_ws_main and is_valid_entity(world_state)) then
        _ws_main()
        if (NT ~= nil) then
            if (NT.sampo_proximity) then
                local sampo_check = CheckSampoStatus()
                if (sampo_check) then SpawnSampo() end
            end
            if (NT.sampo_pickup and NT.player_count == NT.players_sampo and NT.boss_fight == false) then
                StartBossFight()
            end
        end
        local player = GetPlayer()
        if (player ~= nil) then
            local x, y, rot, scale_x = EntityGetTransform(player)
            local spritecomp = EntityGetFirstComponentIncludingDisabled(player, "SpriteComponent", "character")
            local rect_anim = ComponentGetValue2(spritecomp, "rect_animation")
            local anim = anims_n[rect_anim] or 1
            local arm = {}
            local held = GetWandSlot( player )
            for _, child in pairs(EntityGetAllChildren(player)) do
                if (EntityGetName(child) == "arm_r") then
                    local ax, ay, ar, asx, asy = EntityGetTransform(child)
                    arm = {r=ar, sy=asy}
                    break
                end
            end
            table.insert(loc_tracker, {x=x, y=y, scale_x = scale_x, a=anim, arm=arm, h=held})
        end
    end
end

function OnPlayerSpawned(player_entity)
    --[[local init_check_flag = "start_nt_init_done"
	if GameHasFlagRun( init_check_flag ) then
		return
	end
    GameAddFlagRun( init_check_flag )]]
    dofile_once("mods/noita-together/files/store.lua")
    local damage_models = EntityGetFirstComponent(player_entity, "DamageModelComponent")
    if (damage_models ~= nil) then ComponentSetValue2(damage_models, "wait_for_kill_flag_on_death", true) end
    local res_x = MagicNumbersGetValue("DESIGN_PLAYER_START_POS_X")
    local res_y = MagicNumbersGetValue("DESIGN_PLAYER_START_POS_Y")
    if (not GameHasFlagRun("respawn_checkpoint_added")) then
		EntityAddComponent2(player_entity, "VariableStorageComponent", {
            name = "respawn_checkpoint",
            value_string = res_x .. "," .. res_y
        })
        GameAddFlagRun("respawn_checkpoint_added")
	end
    
    local controls_component = EntityGetFirstComponent(player_entity, "ControlsComponent")
    if (controls_component ~= nil) then
        ComponentSetValue2(controls_component, "enabled", false)
    end

    if (ModSettingGet("noita-together.NT_HINTS")) then
        EntityLoad("mods/noita-together/files/entities/start_run_hint.xml", res_x - 45, res_y + 30)
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

function OnModInit()
    --[[
    if (GameIsBetaBuild()) then
        local action = ModTextFileGetContent("data/entities/misc/custom_cards/action.xml")
        ModTextFileSetContent("data/entities/misc/custom_cards/action.xml", string.gsub(action, "<Entity>", "<Entity tags=\"card_action\">"))
    end
    ]]
    _G._ModTextFileGetContent = ModTextFileGetContent
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