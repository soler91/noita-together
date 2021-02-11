if NT then
    return
end
dofile("mods/noita-together/files/stringstore/stringstore.lua")
dofile("mods/noita-together/files/stringstore/noitaglobalstore.lua")
NT = stringstore.open_store(stringstore.noita.global("NT_STORE"))

if (NT.initialized ~= true) then
    NT.run_started = false
    NT.player_count = 1
    NT.players = {}
    NT.current_location = "Mountain"

    NT.sampo_pickup = false
    NT.players_sampo = 0 -- Players that have picked up the sampo
    NT.players_won = 0 -- Players that have killed the boss
    NT.boss_fight = false
    NT.run_ended = false
    NT.sent_steve = false
    NT.end_msg = ""

    NT.skip_heart = 0

    NT.initialized = true
    NT.wsQueue = "[]"
    NT.queuedItems = "[]"
    NT.gold_queue = 0
end