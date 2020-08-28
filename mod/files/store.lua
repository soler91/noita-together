if NT then
    return
end
dofile("mods/noita-together/files/stringstore/stringstore.lua")
dofile("mods/noita-together/files/stringstore/noitaglobalstore.lua")

NT = stringstore.open_store(stringstore.noita.global("NT_STORE"))

if (NT.initialized ~= true) then
    NT.players = ""
    NT.selected_player = ""
    NT.locations = {}
    NT.current_location = "Mountain"
    NT.players_won = 0
    -- queue -> game buffer
    -- send_queue -> to app
    -- player_queue -> received from app

    NT.spell_queue = ""
    NT.spell_send_queue = ""
    NT.spell_player_queue = ""

    NT.item_queue = ""
    NT.item_send_queue = ""
    NT.item_player_queue = ""

    NT.wand_queue = ""
    NT.wand_send_queue = ""
    NT.wand_player_queue = "[]"

    NT.gold_queue = 0
    NT.gold_send_queue = 0
    NT.gold_player_queue = 0

    NT.skip_heart = 0
    NT.send_heart = 0

    NT.send_orb = -1

    NT.end_type = "0"
    
    NT.send_win = false
    NT.initialized = true
end
