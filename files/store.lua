if NEMESIS then
    return
end
dofile("mods/noita-together/files/stringstore/stringstore.lua")
dofile("mods/noita-together/files/stringstore/noitaglobalstore.lua")
NEMESIS = stringstore.open_store(stringstore.noita.global("NEMESIS_STORE"))

if (NEMESIS.initialized ~= true) then
    NEMESIS.points = 0
    NEMESIS.ngcount = 0
    NEMESIS.deaths = 0
    NEMESIS.PlayerList = "{}"
    NEMESIS.ngstats = "{}"
    NEMESIS.alive = true
    NEMESIS.initialized = true
end