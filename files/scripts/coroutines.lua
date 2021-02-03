if async then return end -- guard against multiple "includes"

-- coroutine runtime ---------------------------------------------------------
-- FIXME: stolen from https://github.com/ecbambrick/UntitledGame/tree/master/src/lib


-- This file implements wait, wait_signal, signal, and their supporting stuff.

-- This table is indexed by coroutine and simply contains the time at which the coroutine
-- should be woken up.
local WAITING_ON_TIME = {}

-- This table is indexed by signal and contains list of coroutines that are waiting
-- on a given signal
local WAITING_ON_SIGNAL = {}
local WAITING_ON_SIGNAL_CALLBACK = {}

-- Keep track of how long the game has been running.
local CURRENT_TIME = 0

function wait(frames)
    -- Grab a reference to the current running coroutine
    local co = coroutine.running()

    -- If co is nil, that means we're on the main process, which isn't a coroutine and can't yield
    assert(co ~= nil, "The main thread cannot wait!")

    -- Store the coroutine and its wakeup time in the WAITING_ON_TIME table
    local wakeupTime = CURRENT_TIME + frames
    WAITING_ON_TIME[co] = wakeupTime

    -- And suspend the process
    return coroutine.yield(co)
end

function wake_up_waiting_threads(frames_delta)
    -- this function should be called once per game logic update with the amount of time
    -- that has passed since it was last called
    CURRENT_TIME = CURRENT_TIME + frames_delta

    local threadsToWake = {}
    for co, wakeupTime in pairs(WAITING_ON_TIME) do
        if wakeupTime < CURRENT_TIME then
            table.insert(threadsToWake, co)
        end
    end

    for _, co in ipairs(threadsToWake) do
        WAITING_ON_TIME[co] = nil -- setting a field to nil removes it from the table
        local happy, err = coroutine.resume(co)
        if not happy then (cprint or print)("Coroutine error: " .. tostring(err)) end
    end
end

function wait_signal(signalName)
    -- Same check as in wait; the main thread cannot wait
    local co = coroutine.running()
    assert(co ~= nil, "The main thread cannot wait!")

    if WAITING_ON_SIGNAL[signalStr] == nil then
        -- If there wasn't already a list for this signal, start a new one.
        WAITING_ON_SIGNAL[signalName] = { co }
    else
        table.insert(WAITING_ON_SIGNAL[signalName], co)
    end

    return coroutine.yield()
end

function wait_signal_callback(signalName, callback)
    -- Same check as in wait; the main thread cannot wait
    local co = coroutine.running()
    assert(co ~= nil, "The main thread cannot wait!")

    if WAITING_ON_SIGNAL[signalStr] == nil then
        -- If there wasn't already a list for this signal, start a new one.
        WAITING_ON_SIGNAL[signalName] = { co }
    else
        table.insert(WAITING_ON_SIGNAL[signalName], co)
    end
	
	if WAITING_ON_SIGNAL_CALLBACK[signalStr] == nil then
        -- If there wasn't already a list for this signal, start a new one.
        WAITING_ON_SIGNAL_CALLBACK[signalName] = { callback }
    else
        table.insert(WAITING_ON_SIGNAL_CALLBACK[signalName], callback)
    end

    return coroutine.yield()
end

function signal(signalName)
    local threads = WAITING_ON_SIGNAL[signalName]
    if threads == nil then return end

	-- call the callback
    local funcs = WAITING_ON_SIGNAL_CALLBACK[signalName]
    if funcs ~= nil then
        WAITING_ON_SIGNAL_CALLBACK[signalName] = nil
		for _, func in ipairs(funcs) do
			func()
		end
	end
	
	-- resume the coroutine
    WAITING_ON_SIGNAL[signalName] = nil
    for _, co in ipairs(threads) do
        coroutine.resume(co)
    end
end

function signal_2params(signalName, a, b)
    local threads = WAITING_ON_SIGNAL[signalName]
    if threads == nil then return end

	-- call the callback
    local funcs = WAITING_ON_SIGNAL_CALLBACK[signalName]
    if funcs ~= nil then
        WAITING_ON_SIGNAL_CALLBACK[signalName] = nil
		for _, func in ipairs(funcs) do
			func()
		end
	end
	
	-- resume the coroutine
    WAITING_ON_SIGNAL[signalName] = nil
    for _, co in ipairs(threads) do
        coroutine.resume(co, a, b)
    end
end


function async(func)
    -- This function is just a quick wrapper to start a coroutine.
    local co = coroutine.create(func)
    return coroutine.resume(co)
end

function async_loop(func)
    -- This function is just a quick wrapper to start a coroutine.
    local func_loop = function()
        while true do
            func()
        end
    end

    local co = coroutine.create(func_loop)
    return coroutine.resume(co)
end