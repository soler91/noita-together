if initialized == nil then initialized = false; end

if not initialized then
    initialized = true
    dofile_once( "data/scripts/lib/utilities.lua" )
    local gui = gui or GuiCreate();
    local gui_id = 6969
    GuiStartFrame( gui );
    local screen_width, screen_height = GuiGetScreenDimensions(gui)

    local function reset_id()
        gui_id = 6969
    end
    
    local function next_id()
        local id = gui_id
        gui_id = gui_id + 1
        return id
    end

    local function previous_data( gui )
        local left_click,right_click,hover,x,y,width,height,draw_x,draw_y,draw_width,draw_height = GuiGetPreviousWidgetInfo( gui );
        if left_click == 1 then left_click = true; elseif left_click == 0 then left_click = false; end
        if right_click == 1 then right_click = true; elseif right_click == 0 then right_click = false; end
        if hover == 1 then hover = true; elseif hover == 0 then hover = false; end
        return left_click,right_click,hover,x,y,width,height,draw_x,draw_y,draw_width,draw_height;
    end


    function draw_gui()
        reset_id()
        GuiStartFrame(gui)
        GuiIdPushString( gui, "nemesis")
        if (NEMESIS ~= nil) then
            local NP = NEMESIS.points or 0
            GuiText( gui, 22, 69/1.69, "NP: " .. tostring(NP) )
        end
        GuiIdPop(gui)
    end
end

draw_gui()