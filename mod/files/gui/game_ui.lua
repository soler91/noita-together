dofile_once("data/scripts/lib/coroutines.lua")
dofile("mods/noita-together/files/scripts/utils.lua")
--dofile("mods/noita-together/files/scripts/json.lua")
local gui = gui or GuiCreate()
local gui_id = 6969

local player_selector = false
local gold_controls = false

local xpos = xpos or 1
local ypos = ypos or 12

local function reset_id()
    gui_id = 6969
end

local function next_id()
    local id = gui_id
    gui_id = gui_id + 1
    return id
end

function update_gold(amount)
    local total = NT.gold_queue + amount
    if (total < 0) then
        NT.gold_queue = 0
        return nil
    end
    NT.gold_queue = total
end

function draw_display()
    reset_id()
    GuiStartFrame(gui)
    GuiLayoutBeginHorizontal(gui, xpos, ypos)
    local players, player_count = get_player_list()

    if (player_count < 0) then
        GuiLayoutEnd(gui)
        return
    end

    local player_text = "Players"
    local player_selector_button = "[SHOW]"
    if (player_selector) then
        player_selector_button = "[HIDE]"
    end
    if (player_count == 1) then
        player_text = "Player"
    end

    if GuiButton(gui, 0, 0, tostring(player_count) .. " " .. player_text .. " Online " .. player_selector_button, next_id()) then
        player_selector = not player_selector
        if (player_selector) then
            gold_controls = false
        end
    end
    local items_queued = nothing_queued() and "no" or "yes"
    GuiText(gui, 0, 0, "| Queued Items: " .. items_queued)
    
    if GuiButton(gui, 0, 0, "| [Gold] : " .. tostring(NT.gold_queue), next_id()) then
        gold_controls = not gold_controls
        if (gold_controls) then
            player_selector = false
        end
    end

    if (player_selector) then
        GuiLayoutEnd(gui)
        GuiLayoutBeginVertical(gui, xpos, ypos + 4)
        for _, player in ipairs(players) do
            local button = player == NT.selected_player and "[x]" or "[o]"
            if GuiButton(gui, 0, 0, button .. " " .. player .. " | " .. NT.locations[player], next_id()) then
                NT.selected_player = player
            end
        end
    elseif gold_controls then
        GuiLayoutEnd(gui)
        GuiLayoutBeginHorizontal(gui, xpos, ypos + 4)
        if GuiButton(gui, 0, 0, "[-500]", next_id()) then
            update_gold(-500)
        end
        if GuiButton(gui, 0, 0, "[-100]", next_id()) then
            update_gold(-100)
        end

        if GuiButton(gui, 0, 0, "[RESET]", next_id()) then
            reset_gold()
        end

        if GuiButton(gui, 0, 0, "[+100]", next_id()) then
            update_gold(100)
        end
        if GuiButton(gui, 0, 0, "[+500]", next_id()) then
            update_gold(500)
        end
    end
    GuiLayoutEnd(gui)
end

if gui then
    async_loop(
        function()
            draw_display()
            wait(0)
        end
    )
end
