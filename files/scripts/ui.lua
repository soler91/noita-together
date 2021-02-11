if initialized == nil then initialized = false; end

if not initialized then
    initialized = true
    dofile_once("mods/noita-together/files/scripts/item_list.lua")
    dofile_once("data/scripts/gun/procedural/wands.lua")
    dofile_once( "data/scripts/lib/utilities.lua" )
    local gui = gui or GuiCreate();
    local gui_id = 6969
    GuiStartFrame( gui );
    local screen_width, screen_height = GuiGetScreenDimensions(gui)
    local show_player_list = false
    local show_bank = false
    local hidden_chat = false
    local hoveredFrames = 0
    local gold_amount = "1"
    local bank_offset = 0
    local _wand_tooltip = {
        "Shuffle",
        "Spells/Cast",
        "Cast Delay",
        "Recharge Time",
        "Mana Max",
        "Mana chg spd",
        "Capacity",
        "Spread"
    }

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

    local function wand_tooltip(wand)
        local ret = {
            wand.shuffleDeckWhenEmpty and "Yes" or "No",
            tostring(wand.actionsPerRound),
            string.format("%.2f",wand.fireRateWait/60),
            string.format("%.2f",wand.reloadTime/60),
            string.format("%.0f",wand.manaMax),
            string.format("%.0f",wand.manaChargeSpeed),
            tostring(wand.deckCapacity),
            string.format("%.2f DEG",wand.spreadDegrees)
        }
        return ret
    end

    local function flask_info(flask, chest)
        local materials = ""
        local d = 10
        if (chest) then d = 15 end
        for i, inv in ipairs(flask) do
            local translated_text = "beta only"
            if (GameIsBetaBuild()) then
                translated_text = GameTextGetTranslatedOrNot(CellFactory_GetUIName(inv.id))
            end
            materials = materials .. string.format("%s%s %s\n",
            math.ceil(inv.amount / d),
            "%",
            translated_text)
        end
        return materials
    end

    local function change_bank_offset(num, pages)
        local offset = bank_offset + num
        if (offset >= 0 and offset <= pages) then
            bank_offset = offset
        end
    end

    local function draw_item_sprite(item, x,y)
        GuiZSetForNextWidget(gui, 8)
        if (item.gameId ~= nil) then --spell
            local player = PlayerList[item.sentBy] or {name="Me"}
            local spell_description = ""
            if (player ~= nil) then
                spell_description = spell_description .. "\nSent by: " .. player.name
            end
            local spell = SpellSprites[item.gameId]
            GuiImage(gui, next_id(), x +2, y +2,  spell.sprite, 1,1,1)--SpellSprites[item.gameId], 1)
            GuiTooltip(gui, spell.name, spell_description)
        elseif (item.stats ~= nil) then --wand
            GuiZSetForNextWidget(gui, 7)
            local idx = tonumber(item.stats.sprite)
            idx = math.min(idx, 1000)
            local sprite = wands[idx].file
            local w, h = GuiGetImageDimensions(gui, sprite, 1)
            local ox = ((w - 20) / 2) * -1
            local oy = ((h - 20) / 2) * -1
            GuiImage(gui, next_id(), x + ox, y + oy, sprite, 1, 1, 1)
            local left, right, hover = previous_data(gui)
            if (hover) then
                local player = PlayerList[item.sentBy] or {name="Me"}
                local nx, ny = (screen_width / 2) - 260, (screen_height/2) - 95
                local nox, nyx = 5, 0
                GuiZSetForNextWidget(gui, 6)
                GuiImageNinePiece(gui, next_id, nx, ny, 160, 160, 1)
                GuiZSetForNextWidget(gui, 5)
                GuiText(gui, nx + nox, ny + nyx, "Sent By " .. player.name)
                nyx = nyx + 15
                
                for key, value in ipairs(wand_tooltip(item.stats))do
                    GuiZSetForNextWidget(gui, 5)
                    GuiText(gui, nx + nox, ny + nyx, _wand_tooltip[key])
                    GuiZSetForNextWidget(gui, 5)
                    GuiText(gui, nx + 80, ny + nyx, tostring(value))
                    nyx = nyx + 10
                end
                nyx = nyx + 10
                local always_casts = item.alwaysCast or {}
                local deck = item.deck or {}
                if (#always_casts > 0) then
                    GuiZSetForNextWidget(gui, 5)
                    GuiText(gui, nx + 5, ny + nyx, "Always casts")
                    nox = 60
                    for index, value in ipairs(always_casts) do
                        GuiZSetForNextWidget(gui, 5)
                        GuiImage(gui, next_id(), nx + nox, ny + nyx, SpellSprites[value.gameId].sprite, 1, 0.8, 0.8)
                        nox = nox + 15
                    end
                    nox = 5
                    nyx = nyx + 15
                end
                for index, value in ipairs(deck) do
                    GuiZSetForNextWidget(gui, 5)
                    GuiImage(gui, next_id(), nx + nox, ny + nyx, SpellSprites[value.gameId].sprite, 1, 0.8, 0.8)
                    nox = nox + 15
                    if (index % 10 == 0) then
                        nyx = nyx + 20
                        nox = 5
                    end
                end
            end
            
        elseif (item.content ~= nil) then --flask
            local player = PlayerList[item.sentBy] or {name="Me"}
            local container_name = item.isChest and "Powder Stash" or "Flask"
            if (player ~= nil) then
                container_name = container_name .. "\nSent by: " .. player.name
            end
            GuiZSetForNextWidget(gui, 7)
            if (item.isChest) then
                GuiImage(gui, next_id(), x + 2, y + 2, "data/ui_gfx/items/powder_stash.png", 1, 1, 1)
            else
                GuiColorSetForNextWidget(gui, item.color.r, item.color.g, item.color.b, 1)
                GuiImage(gui, next_id(), x + 2, y + 2, "data/ui_gfx/items/potion.png", 1, 1, 1)
            end
            GuiTooltip(gui, container_name, flask_info(item.content, item.isChest))
        elseif (item.path ~= nil) then
            local player = PlayerList[item.sentBy] or {name="Me"}
            local item_name = nt_items[item.path] and nt_items[item.path].name or ""
            item_name = GameTextGetTranslatedOrNot(item_name)
            if (player ~= nil) then
                item_name = item_name .. "\nSent by: " .. player.name
            end
            local w, h = GuiGetImageDimensions(gui, item.sprite, 1)
            local ox = ((w - 20) / 2) * -1
            local oy = ((h - 20) / 2) * -1
            GuiZSetForNextWidget(gui, 7)
            GuiImage(gui, next_id(), x + ox, y + oy, item.sprite, 1, 1, 1)
            GuiTooltip(gui, item_name, "")
        end
    end

    local function draw_bank_item(x, y, i)
        local item_offset = i + bank_offset * 25
        local item = BankItems[item_offset]
        if (item ~= nil) then
            draw_item_sprite(item, x, y)
        end

        GuiZSetForNextWidget(gui, 9)
        if (GuiImageButton(gui, next_id(), x, y, "", "data/ui_gfx/inventory/full_inventory_box.png")) then
            if (item ~= nil) then
                SendWsEvent({event="PlayerTake", payload={id=item.id}})
            end
        end
    end

    local function draw_item_bank()
        local pages = math.floor(#BankItems / 25)
        local pos_x, pos_y = (screen_width / 2) - 90, (screen_height/2) - 90
        local offx, offy = 20, 5
        GuiOptionsAdd(gui, GUI_OPTION.NoPositionTween)
        GuiZSetForNextWidget(gui, 10)
        GuiImageNinePiece(gui, next_id(), pos_x, pos_y, 160, 170, 1, "mods/noita-together/files/ui/background.png")
        GuiZSetForNextWidget(gui, 9)
        if (GuiImageButton(gui, next_id(), pos_x + 147, pos_y, "", "mods/noita-together/files/ui/close.png")) then
            show_bank = not show_bank
        end
        for i = 1, 25 do
            draw_bank_item(pos_x + offx,pos_y + offy, i)
            
            offx = offx + 25

            if (i % 5 == 0) then
                offx = 20
                offy = offy + 25
            end
        end        
        offy = offy + 20
        if (GuiImageButton(gui, next_id(), pos_x, pos_y + offy, "", "mods/noita-together/files/ui/prev_page.png")) then
            change_bank_offset(-1, pages)
        end
        GuiText(gui, pos_x + 75, pos_y + offy + 5, tostring(bank_offset+1) .. "/" .. tostring(pages+1))
        if GuiImageButton(gui, next_id(), pos_x + 140, pos_y + offy, "", "mods/noita-together/files/ui/next_page.png")then
            change_bank_offset(1, pages)
        end
        GuiOptionsClear(gui)
    end

    local function draw_player_info(player)
        if (player.sampo) then
            GuiOptionsAddForNextWidget(gui, GUI_OPTION.Layout_NextSameLine)
            GuiZSetForNextWidget(gui, 9)
            GuiImage(gui, next_id(), 88, 0, "mods/noita-together/files/ui/sampo.png", 0.5, 1, 1)
        end
        GuiZSetForNextWidget(gui, 10)
        GuiText(gui, 0, 0, player.name)
        local location = GameTextGetTranslatedOrNot(player.location)
        if (location == nil or location == "_EMPTY_") then location = "Mountain" end
        location = location .. "\nDepth: " .. string.format("%.0f", player.y or 0)
        GuiTooltip(gui, player.name, "Hp: " .. tostring(math.floor(player.curHp)) .. " / " .. tostring(math.floor(player.maxHp)) .. "\nLocation: " .. location)
        GuiOptionsAddForNextWidget(gui, GUI_OPTION.Layout_NextSameLine)
        GuiZSetForNextWidget(gui, 9)
        local bar_w = player.curHp / player.maxHp
        GuiImage(gui, next_id(), 0, 0, "mods/noita-together/files/ui/hpbar_full.png", 1, bar_w, 1)
        GuiZSetForNextWidget(gui, 10)
        GuiImage(gui, next_id(), 0, 0, "mods/noita-together/files/ui/hpbar_empty.png", 1, 1, 1)
        GuiLayoutAddVerticalSpacing(gui, 2)
    end

    local function draw_player_list(players)
        GuiZSetForNextWidget(gui, 10)
        GuiBeginScrollContainer(gui, next_id(), 5, 50, 100, 150, false, 1, 1)
        GuiLayoutBeginVertical(gui, 0, 0)
        for userId, player in pairs(players) do
            draw_player_info(player)
        end

        GuiLayoutEnd(gui)
        GuiEndScrollContainer(gui)
    end

    local function draw_gold_bank()
        local pos_x, pos_y = (screen_width / 2) + 85, (screen_height/2) - 90
        GuiOptionsAdd(gui, GUI_OPTION.NoPositionTween)
        GuiZSetForNextWidget(gui, 10)
        GuiImageNinePiece(gui, next_id(), pos_x, pos_y, 120, 65, 1, "mods/noita-together/files/ui/background.png")
        GuiZSetForNextWidget(gui, 9)
        GuiText(gui, pos_x, pos_y, "Gold: " .. tostring(BankGold))

        GuiZSetForNextWidget(gui, 9)
        GuiText(gui, pos_x, pos_y+15, "Amount")
        GuiZSetForNextWidget(gui, 9)
        gold_amount = GuiTextInput(gui, next_id(), pos_x, pos_y + 25, gold_amount, 120, 10, "0123456789")
        
        
        GuiZSetForNextWidget(gui, 9)
        if (GuiImageButton(gui, next_id(), pos_x, pos_y + 45, "", "mods/noita-together/files/ui/button.png")) then
            local amount = tonumber(gold_amount)
            if (amount <= BankGold) then
                SendWsEvent({event="TakeGold", payload={amount=amount}})
                gold_amount = "1"
            end
        end
        GuiZSetForNextWidget(gui, 8)
        GuiText(gui, pos_x + 8 , pos_y +50, "TAKE")

        GuiZSetForNextWidget(gui, 9)
        if (GuiImageButton(gui, next_id(), pos_x + 80, pos_y + 45, "", "mods/noita-together/files/ui/button.png")) then
            local wallet, gold = nil, 0
            local amount = tonumber(gold_amount)
            wallet, gold = PlayerWalletInfo()
            if (amount <= gold and wallet ~= nil) then
                SendWsEvent({event="SendGold", payload={amount=amount}})
                ComponentSetValue2(wallet, "money", gold - amount)
                gold_amount = "1"
            end
        end
        GuiZSetForNextWidget(gui, 8)
        GuiText(gui, pos_x + 80 , pos_y +50, "DEPOSIT")
        GuiOptionsClear(gui)
    end

    function draw_gui()
        --local frame = GameGetFrameNum()
        reset_id()
        GuiStartFrame(gui)
        GuiIdPushString( gui, "noita_together")

        local player = GetPlayer()
        if (player) then
            local platform_shooter_player = EntityGetFirstComponentIncludingDisabled(player, "PlatformShooterPlayerComponent")
            if (platform_shooter_player) then
                local is_gamepad = ComponentGetValue2(platform_shooter_player, "mHasGamepadControlsPrev")
                if (is_gamepad) then
                    GuiOptionsAdd(gui, GUI_OPTION.NonInteractive)
                    GuiOptionsAdd(gui, GUI_OPTION.AlwaysClickable)
                end
            end
        end

        local ghost_button = HideGhosts and "hide_player_ghosts.png" or "player_ghosts.png"
        local chat_button = HideChat and "hide_chat.png" or "chat.png"
        local ghost_tooltip = HideGhosts and "No player ghosts" or "Showing player ghosts"
        local chat_tooltip = HideChat and "Ignoring chat messages" or "Showing chat messages"

        if (GuiImageButton(gui, next_id(), 100, 0, "", "mods/noita-together/files/ui/buttons/" .. ghost_button)) then
            HideGhosts = not HideGhosts
            if (HideGhosts) then
                DespawnPlayerGhosts()
            else
                SpawnPlayerGhosts(PlayerList)
            end
        end
        GuiTooltip(gui, ghost_tooltip, "")

        if (GuiImageButton(gui, next_id(), 120, 0, "", "mods/noita-together/files/ui/buttons/" .. chat_button)) then
            HideChat = not HideChat
        end
        GuiTooltip(gui, chat_tooltip, "")

        if (GuiImageButton(gui, next_id(), 140, 0, "", "mods/noita-together/files/ui/buttons/player_list.png")) then
            show_player_list = not show_player_list
        end
        GuiTooltip(gui, "Player List", "")

        if (GuiImageButton(gui, next_id(), 160, 0, "", "mods/noita-together/files/ui/buttons/bank.png")) then
            show_bank = not show_bank
        end
        GuiTooltip(gui, "Item Bank", "")

        if (show_player_list) then
            draw_player_list(PlayerList)
        end

        if (show_bank) then
            draw_item_bank()
            if(GameHasFlagRun("send_gold")) then
                draw_gold_bank()
            end
        end
        
        local seed = ModSettingGet( "noita_together.seed" )
        local current_seed = tonumber(StatsGetValue("world_seed"))
        if (current_seed ~= seed and seed > 0) then
            GuiImageNinePiece(gui, next_id(), (screen_width / 2) - 90, 50, 180, 20, 0.8)
            GuiText(gui, (screen_width / 2) - 80, 55, "Host changed world seed, start a new game")
        end

        if (NT ~= nil and NT.run_ended) then
            GuiImageNinePiece(gui, next_id(), (screen_width / 2) - 90, 50, 180, 20, 0.8)
            GuiText(gui, (screen_width / 2) - 80, 55, NT.end_msg)
        end

        GuiIdPop(gui)
    end
end

draw_gui()