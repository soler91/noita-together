dofile_once("mods/noita-together/files/ws/events.lua")
dofile_once("data/scripts/lib/utilities.lua")

dofile_once("mods/noita-together/files/scripts/json.lua") --TESTIN
biomes ={
	[2] = 1,
	[5] = 2,
	[9] = 3,
	[12] = 4,
	[16] = 5,
	[20] = 6,
    [25] = 6
}

abilities = {
    [1] = {},
    [2] = {},
    [3] = {},
    [4] = {},
    [5] = {},
    [6] = {}
}

for _, value in pairs(ABILITIES) do
    for i, weight in ipairs(value.weigths) do
        table.insert(abilities[i], {
            probability = weight,
            id = value.id,
            name = value.name
        })
    end
end

function spawn_spell_eater(x,y)
    SetRandomSeed(69420+x,42069+y)
    local rnd = random_create(x, y)
    y = y - 3
    for i=1, 3 do
        SpawnNemesisAbility(x+2, y - (i-1)*25, rnd)
    end
end

function spawn_spell_spitter(x,y)
    SetRandomSeed(42069+x,69420+y)
    local rnd = random_create(x, y)
    y = y - 3
    for i=1, 3 do
        SpawnNemesisAbility(x-2, y - (i-1)*25, rnd)
    end
end

function SpawnNemesisAbility(x,y, rnd)
    local level = math.floor(y/512) -- 2, 5, 9, 12, 16, 20
    local tier = biomes[level]
    local ability = pick_random_from_table_weighted(rnd, abilities[tier])
    for i, v in ipairs(abilities[tier]) do
        if (v.id == ability.id) then
            table.remove(abilities[tier], i)
        end
    end
    local price = 10*math.floor(math.pow(level, 1.5)) + 15
    local ability_eid = EntityLoad("mods/noita-nemesis/files/entities/ability/entity.xml", x, y)
    EntityAddComponent2(ability_eid, "VariableStorageComponent", {
        name="nemesis_ability",
        value_string=ability.id
    })
    EntityAddComponent2(ability_eid, "VariableStorageComponent", {
        name="ability_price",
        value_int=price
    })

    local interact = EntityGetFirstComponent(ability_eid, "InteractableComponent")
    ComponentSetValue2(interact, "ui_text", "Press $0 to buy "..ability.name.." ("..price..")")
    local uiinfo = EntityGetFirstComponent(ability_eid, "UIInfoComponent")
    ComponentSetValue2(uiinfo, "name", ability.name)

    local badge = EntityGetFirstComponent( ability_eid, "SpriteComponent", "badge" )
    ComponentSetValue2(badge, "image_file", "mods/noita-nemesis/files/badges/" .. ability.id .. ".png")
end