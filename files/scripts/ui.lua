if initialized == nil then initialized = false; end

if not initialized then
    wand_cache = {}
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
    local show_message = false
    local caps_lock = false
    local radar_on = true
    local hidden_chat = false
    local hoveredFrames = 0
    local last_player_msg = 0
    local bankfilter = ""
    local player_msg = ""
    local filteredItems = {}
    local gold_amount = "1"
    local bank_offset = 0
    local last_inven_is_open = false
    local selected_player = ""
    local numbers = {"1", "2", "3", "4", "5", "6", "7", "8", "9", "0"}
    local alphabet = {"q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"}
    local _wand_tooltip = {
        "$inventory_shuffle",
        "$inventory_actionspercast",
        "$inventory_castdelay",
        "$inventory_rechargetime",
        "$inventory_manamax",
        "$inventory_manachargespeed",
        "$inventory_capacity",
        "$inventory_spread"
    }
    local biome_sprites = {
        ["Mountain"] = "mountain.png",
        ["$biome_coalmine"] = "coalmine.png",
        ["$biome_coalmine_alt"] = "coalmine_alt.png",
        ["$biome_excavationsite"] = "excavationsite.png",
        ["$biome_fungicave"] = "fungicave.png",
        ["$biome_rainforest"] = "rainforest.png",
        ["$biome_snowcave"] = "snowcave.png",
        ["$biome_snowcastle"] = "snowcastle.png",
        ["$biome_vault"] = "vault.png",
        ["$biome_crypt"] = "crypt.png",
        ["$biome_holymountain"] = "holymountain.png",
        ["$biome_boss_victoryroom"] = "the_work.png",

        ["$biome_boss_arena"] = "laboratory.png",
        ["$biome_desert"] = "desert.png",
        ["$biome_dragoncave"] = "dragoncave.png",
        ["$biome_gold"] = "the_gold.png",
        ["$biome_lake"] = "lake.png",
        ["$biome_sandcave"] = "sandcave.png",
        ["$biome_tower"] = "tower.png",
        ["$biome_vault_frozen"] = "vault_frozen.png",
        ["$biome_clouds"] = "cloudscape.png",
        ["$biome_liquidcave"] = "ancient_laboratory.png",
        ["$biome_secret_lab"] = "alchemistboss.png",
        ["$biome_orbroom"] = "orbroom.png",
        ["$biome_wizardcave"] = "wizardcave.png",
        ["$biome_rainforest_dark"] = "lukki.png",
        ["$biome_mestari_secret"] = "wizardboss.png",
        ["$biome_ghost_secret"] = "snowy_boss.png",
        ["$biome_winter_caves"] = "snowy_chasm.png",
        ["$biome_the_end"] = "hell_work.png", --maybe no worky
        ["$biome_the_end_sky"] = "sky_work.png", --maybe no worky
        ["$biome_wandcave"] = "wandcave.png",
        ["$biome_winter"] = "winter.png",
        ["$biome_fun"] = "fun.png",
        ["$biome_robobase"] = "robobase.png",
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

    local function follow_player( userId, name )
        local ghosts = EntityGetWithTag("nt_ghost") or {}
        for _, ghost in ipairs(ghosts) do
            local var_comp = get_variable_storage_component(ghost, "userId")
            local user_id = ComponentGetValue2(var_comp, "value_string")
            if (user_id == userId) then
                if (EntityHasTag(ghost, "nt_follow")) then
                    EntityRemoveTag(ghost, "nt_follow")
                    GamePrint("No longer following " .. (name or ""))
                else
                    EntityAddTag(ghost, "nt_follow")
                    GamePrint("Following " .. (name or ""))
                end
            end
        end
    end

    local function wand_tooltip(wand)
        local ret = {
            wand.shuffleDeckWhenEmpty and "Yes" or "No",
            tostring(wand.actionsPerRound),
            string.format("%.2f",wand.fireRateWait / 60),
            string.format("%.2f",wand.reloadTime / 60),
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
            local translated_text = ""
            translated_text = GameTextGetTranslatedOrNot(CellFactory_GetUIName(inv.id))
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

    local function get_wand_sprite(filename)
        if (wand_cache[filename] ~= nil) then return wand_cache[filename] end
        local wand = {}
        wand.sprite = filename
        if (filename:sub(-#".xml") == ".xml") then
            wand.sprite = _ModTextFileGetContent(filename):match([[filename="([^"]+)]])
        end

        local w, h = GuiGetImageDimensions(gui, wand.sprite, 1)
        local ox = ((w - 20) / 2) * -1
        local oy = ((h - 20) / 2) * -1
        wand.ox = ox
        wand.oy = oy
        wand_cache[filename] = wand
        return wand_cache[filename]
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
            local wand = get_wand_sprite(item.stats.sprite)
            GuiImage(gui, next_id(), x + wand.ox, y + wand.oy, wand.sprite, 1, 1, 1)--, GUI_RECT_ANIMATION_PLAYBACK.PlayToEndAndPause)
            
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
            local container_name = item.isChest and "Powder Pouch" or "Flask"
            if (player ~= nil) then
                container_name = container_name .. "\nSent by: " .. player.name
            end
            GuiZSetForNextWidget(gui, 7)
            if (item.isChest) then
                GuiImage(gui, next_id(), x + 2, y + 2, "data/ui_gfx/items/material_pouch.png", 1, 1, 1)
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
        local item = filteredItems[item_offset]
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

    local function filterItems()
        local filterkey = bankfilter
        if (filterkey == "") then
            filteredItems = BankItems
            return
        end
        local ret = {}

        for _, item in ipairs(BankItems) do
            if (item.gameId ~= nil) then -- spell
                local spell = SpellSprites[item.gameId]
                if (string.find(string.lower(spell.name), string.lower(filterkey))) then
                    table.insert(ret, item)
                end
            elseif (item.stats ~= nil) then -- wand
                local found = false
                for _, action in ipairs(item.alwaysCast or {}) do
                    local spell = SpellSprites[action.gameId]
                    if (spell ~= nil) then
                        if (string.find(string.lower(spell.name), string.lower(filterkey))) then
                            found = true
                        end
                    end
                end
                for _, action in ipairs(item.deck or {}) do
                    local spell = SpellSprites[action.gameId]
                    if (spell ~= nil) then
                        if (string.find(string.lower(spell.name), string.lower(filterkey))) then
                            found = true
                        end
                    end
                end

                if (found) then
                    table.insert(ret, item)
                end
            elseif (item.content ~= nil) then -- flask
                local container = item.isChest and "Powder Stash\n" or "Flask\n"
                container = container .. flask_info(item.content, item.isChest)
                if (string.find(string.lower(container), string.lower(filterkey))) then
                    table.insert(ret, item)
                end
            elseif (item.path ~= nil) then -- entity item
                local item_name = nt_items[item.path] and nt_items[item.path].name or ""
                item_name = GameTextGetTranslatedOrNot(item_name)
                if (string.find(string.lower(item_name), string.lower(filterkey))) then
                    table.insert(ret, item)
                end
            end
        end

        filteredItems = ret
    end

    local function sortItems()
        table.sort(BankItems, function (a, b)
            if (a.gameId) then
                if (b.gameId) then return a.gameId < b.gameId end
                if (b.stats) then return false end
                if (b.content) then return true end
                if (b.path) then return true end
            elseif (a.stats) then
                if (b.gameId) then return true end
                if (b.stats) then return a.stats.sprite < b.stats.sprite end
                if (b.content) then return true end
                if (b.path) then return true end
            elseif (a.content) then
                if (b.gameId) then return false end
                if (b.stats) then return false end
                if (b.content) then return false end
                if (b.path) then return true end
            elseif (a.path) then
                return false
            end
            return false
        end)
    end

    local function draw_item_bank()
        local pos_x, pos_y = (screen_width / 2) - 90, (screen_height/2) - 90
        local offx, offy = 20, 20
        GuiOptionsAdd(gui, GUI_OPTION.NoPositionTween)
        GuiZSetForNextWidget(gui, 10)
        GuiImageNinePiece(gui, next_id(), pos_x, pos_y, 160, 170, 1, "mods/noita-together/files/ui/background.png")
        GuiZSetForNextWidget(gui, 9)
        if (GuiImageButton(gui, next_id(), pos_x + 147, pos_y, "", "mods/noita-together/files/ui/close.png")) then
            show_bank = not show_bank
        end
        GuiZSetForNextWidget(gui, 9)
        if (GuiImageButton(gui, next_id(), pos_x + 10, pos_y, "", "mods/noita-together/files/ui/sort.png")) then
            sortItems()
        end
        GuiZSetForNextWidget(gui, 9)
        bankfilter = GuiTextInput(gui, next_id(), pos_x + 30, pos_y, bankfilter, 100, 32)
        filterItems()
        local pages = math.floor(#filteredItems / 25)
        if (bank_offset > pages) then bank_offset = pages end
        for i = 1, 25 do
            draw_bank_item(pos_x + offx,pos_y + offy, i)
            
            offx = offx + 25

            if (i % 5 == 0) then
                offx = 20
                offy = offy + 25
            end
        end        
        offy = offy + 5
        if (GuiImageButton(gui, next_id(), pos_x, pos_y + offy, "", "mods/noita-together/files/ui/prev_page.png")) then
            change_bank_offset(-1, pages)
        end
        GuiText(gui, pos_x + 75, pos_y + offy + 5, tostring(bank_offset+1) .. "/" .. tostring(pages+1))
        if GuiImageButton(gui, next_id(), pos_x + 140, pos_y + offy, "", "mods/noita-together/files/ui/next_page.png")then
            change_bank_offset(1, pages)
        end
        GuiOptionsClear(gui)
    end

    local function draw_player_info(player, userId)
        if (player.sampo) then
            GuiOptionsAddForNextWidget(gui, GUI_OPTION.Layout_NextSameLine)
            GuiZSetForNextWidget(gui, 9)
            GuiImage(gui, next_id(), 88, 0, "mods/noita-together/files/ui/sampo.png", 0.5, 1, 1)
        end
        if (biome_sprites[player.location] ~= nil) then
            GuiOptionsAddForNextWidget(gui, GUI_OPTION.Layout_NextSameLine)
            GuiZSetForNextWidget(gui, 9)
            GuiImage(gui, next_id(), 80, 0, "mods/noita-together/files/ui/biomes/" .. biome_sprites[player.location] , 0.8, 1, 1)
        end
        GuiZSetForNextWidget(gui, 10)

        if (GuiButton(gui, next_id(), 0,0, player.name)) then
            follow_player(userId, player.name)
        end
        
        local location = GameTextGetTranslatedOrNot(player.location)
        if (location == nil or location == "_EMPTY_") then location = "Mountain" end
        location = location .. "\nDepth: " .. string.format("%.0fm", player.y and player.y / 10 or 0)
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
            draw_player_info(player, userId)
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

    function draw_player_message()
        local pos_x, pos_y = (screen_width / 2) - 90, (screen_height/2) - 90
        local offx, offy = 1, 20
        GuiOptionsAdd(gui, GUI_OPTION.NoPositionTween)
        GuiZSetForNextWidget(gui, 9)
        GuiImageNinePiece(gui, next_id(), pos_x, pos_y, 160, 100, 1, "mods/noita-together/files/ui/background.png")
        GuiZSetForNextWidget(gui, 8)
        if (GuiImageButton(gui, next_id(), pos_x + 151, pos_y, "", "mods/noita-together/files/ui/close.png")) then
            player_msg = ""
            show_message = false
        end
        GuiZSetForNextWidget(gui, 8)
        player_msg = GuiTextInput(gui, next_id(), pos_x, pos_y, player_msg, 150, 99, "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789 ")
        for _, num in pairs(numbers) do
            if (GuiButton(gui, next_id(), pos_x + offx, pos_y + offy, "["..num.."]")) then
                player_msg = player_msg .. num
            end
            offx = offx + 16
        end
        offy = offy + 12
        offx = 1
        for idx, _letter in pairs(alphabet) do
            local letter = caps_lock and string.upper(_letter) or _letter
            if (GuiButton(gui, next_id(), pos_x + offx, pos_y + offy, "["..letter.."]")) then
                player_msg = player_msg .. letter
            end
            offx = offx + 16
            if (idx % 10 == 0 and idx % 20 == 10) then
                offx = 4
                offy = offy + 12
            elseif (idx % 19 == 0) then
                offx = 0
                offy = offy + 12
                if (GuiButton(gui, next_id(), pos_x + offx, pos_y + offy, "[CAPS]")) then
                    caps_lock = not caps_lock
                end
                offx = 35
            end
        end
        offy = offy + 12
        if (GuiButton(gui, next_id(), pos_x + 60, pos_y + offy, "[SPACE]")) then
            player_msg = player_msg .. " "
        end
        offy = offy + 15
        GuiZSetForNextWidget(gui, 8)
        if (GuiImageButton(gui, next_id(), pos_x + 60, pos_y + offy, "", "mods/noita-together/files/ui/button.png")) then
            local px, py = GetPlayerPos()
            py = py - 10
            if (#player_msg > 0 and GameGetFrameNum() >= last_player_msg and px ~= nil and py ~= nil and NT ~= nil and NT.run_started) then
                if (CanSpawnPoi(px, py)) then
                    SpawnPoi("My messsage", player_msg,  px, py)
                    SendWsEvent({event="CustomModEvent", payload={name="PlayerPOI", message=player_msg, x=px, y=py}})
                    show_message = false
                    player_msg = ""
                    GamePrint("message sent")
                    last_player_msg = GameGetFrameNum() + 60*30
                else
                    GamePrint("can't send message too close to another message")
                end
            else
                GamePrint("can't send message yet")
            end
        end
        GuiZSetForNextWidget(gui, 7)
        GuiText(gui, pos_x + 69 , pos_y + offy + 4, "SEND")
    end

    function draw_gui()
        --local frame = GameGetFrameNum()
        reset_id()
        GuiStartFrame(gui)
        GuiIdPushString( gui, "noita_together")

        -- controller stuff
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
            --close on inventory change
            local inven_gui = EntityGetFirstComponent(player, "InventoryGuiComponent")
            if (inven_gui ~= nil) then
                local is_open = ComponentGetValue2(inven_gui, "mActive")

                if (is_open and not last_inven_is_open) then
                    show_bank = false
                end
                last_inven_is_open = is_open
            end
            --[[ ghost selection
                local controls_comp = EntityGetFirstComponent(player, "ControlsComponent")
            if (controls_comp ~= nil) then
                local x, y = ComponentGetValue2(controls_comp, "mMousePosition")
                local mouse_down = ComponentGetValue2(controls_comp, "mButtonDownLeftClick")
                local selected_ghosts = mouse_down and EntityGetInRadiusWithTag(x, y, 24, "nt_ghost") or nil
                if (selected_ghosts ~= nil) then
                    selected_ghosts = selected_ghosts[1]
                    local var_comps = EntityGetComponent(selected_ghosts, "VariableStorageComponent") or {}
                    for _, var in ipairs(var_comps) do
                        if (ComponentGetValue2(var, "name") == "userId") then
                            --selected_player = ComponentGetValue2(var, "value_string")
                        end
                    end
                end
            end
            ]]
        end
        -- close on escape (pause)
        if (show_bank and GamePaused) then
            show_bank = false
        end
        local ghost_button = HideGhosts and "hide_player_ghosts.png" or "player_ghosts.png"
        local chat_button = HideChat and "hide_chat.png" or "chat.png"
        local ghost_tooltip = HideGhosts and "No player ghosts" or "Showing player ghosts"
        local chat_tooltip = HideChat and "Ignoring chat messages" or "Showing chat messages"
        
        if (GuiImageButton(gui, next_id(), 80, 0, "", "mods/noita-together/files/ui/buttons/keyboard.png")) then
            show_message = not show_message
            if (not show_message) then
                player_msg = ""
            end
        end
        GuiTooltip(gui, "leave a message here", "")

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

        if (show_message) then
            draw_player_message()
        end

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

        if (selected_player and PlayerList[selected_player] ~= nil) then
            GuiImageNinePiece(gui, next_id(), 5, 210, 90, 80, 0.5)
            if (GuiButton(gui, next_id(), 5, 210, "[x]")) then
                selected_player = ""
            end
            GuiText(gui, 5, 215, PlayerList[selected_player].name)
        end

        if (PlayerRadar) then
            local ghosts = EntityGetWithTag("nt_follow") or {}
            local ppos_x, ppos_y = GetPlayerOrCameraPos()
            local pos_x, pos_y = screen_width / 2, screen_height /2
            for _, ghost in ipairs(ghosts) do
                local var_comp = get_variable_storage_component(ghost, "userId")
                local user_id = ComponentGetValue2(var_comp, "value_string")
                local gx, gy = EntityGetTransform(ghost)
                local dir_x = (gx or 0) - ppos_x
                local dir_y = (gy or 0) - ppos_y
                local dist = math.sqrt(dir_x * dir_x + dir_y * dir_y)
                if (math.abs(dir_x) > 250 or math.abs(dir_y) > 150) then
                    dir_x,dir_y = vec_normalize(dir_x,dir_y)
                    local indicator_x = math.max(30, (pos_x - 30) + dir_x * 300)
                    local indicator_y = pos_y + dir_y * 170
                    GuiImage(gui, next_id(), indicator_x, indicator_y, "mods/noita-together/files/ui/player_ghost.png", 1, 1, 1)
                    GuiTooltip(gui, (PlayerList[user_id].name or ""), string.format("%.0fm", math.floor(dist/10)))
                end
            end
        end

        GuiIdPop(gui)
    end
end

draw_gui()