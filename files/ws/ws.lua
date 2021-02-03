dofile("mods/noita-together/files/scripts/utils.lua")
if not async then
    dofile("mods/noita-together/files/scripts/coroutines.lua")
end
dofile_once("mods/noita-together/files/lib/pollnet.lua")
dofile("mods/noita-together/files/ws/host.lua")

dofile("mods/noita-together/files/ws/events.lua")
local main_socket = wslib.open_ws(HOST_URL)
local reconnect = false
local count = 0

--[[
send_event = function(json_string)
    if main_socket then
        if main_socket:status() == "open" then
            main_socket:send(json_string)
        end
    end
end
]]

SendWsEvent = function(data)
    if main_socket then
        if main_socket:status() == "open" then
            local encoded = json.encode(data)
            main_socket:send(encoded)
        end
    end
end

local function increase_count()
    wake_up_waiting_threads(1) -- from coroutines.lua
    count = count + 1
end

_ws_main = function()
    if not main_socket then
        if (reconnect and count % 300 == 0) then
            main_socket = wslib.open_ws(HOST_URL)
            reconnect = false
        end
        increase_count()
        return
    end

    for i=1, 25 do -- bandaid for desync
        local happy, msg = main_socket:poll()
        
        if (not happy and count % 1200 == 0) then
            main_socket = nil
            reconnect = true
            increase_count()
            return
        end
        local decoded, data = pcall(json.decode, msg)
        if (decoded) then
            if (data.event == "CustomModEvent") then
                local evt = customEvents[data.payload.name]
                if (evt ~= nil) then
                    local e, res = pcall(evt, data.payload)
                    --[[if (e) then
                        print(e)
                    end]]
                end
            else
                --GamePrint(data.event)
                local evt = wsEvents[data.event]
                if (evt ~= nil) then
                    local e, res = pcall(evt, data.payload)
                    --[[if (e) then
                        print(e)
                    end]]
                end
            end
        end
        if (count % 60 == 0) then
            SendWsEvent({event="ping", payload = {}})
        end
        increase_count()
    end
end

async_loop(function()
    if (NT ~= nil) then
        local queue = json.decode(NT.wsQueue)
        for _, value in ipairs(queue) do
            SendWsEvent(value)
        end
        NT.wsQueue = "[]"
        if (not NT.sent_steve and GlobalsGetValue("TEMPLE_SPAWN_GUARDIAN") == "1") then
            NT.sent_steve = true
            SendWsEvent({event="CustomModEvent", payload={name="AngerySteve"}})
        end
    end
    local x, y = GetPlayerPos()
    if (LastLocation.x ~= x or LastLocation.y ~= y) then
        SendWsEvent({event="PlayerMove", payload={x=x, y=y}})
        LastLocation = {x=x, y=y}
    end
    UpdatePlayerStats()
    
    wait(25)
end)