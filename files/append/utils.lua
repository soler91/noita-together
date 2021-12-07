
function IsPlayerDead()
  local player = GetPlayer()
  local damage_models = nil
  if (player ~= nil) then
      damage_models = EntityGetFirstComponent(player, "DamageModelComponent")
  end

  if (damage_models ~= nil) then
      local curHp = ComponentGetValue2(damage_models, "hp")
      if (curHp < 0.0) then
          if (GameHasFlagRun("ending_game_completed")) then
              ComponentSetValue2(damage_models, "kill_now", true)
              EndRun()
              return
          end

          if (NEMESIS.deaths > 0) then
              EndRun()
              EntityRemoveComponent(player, damage_models)
              local sprites = EntityGetComponent(player, "SpriteComponent")
              for _, sprite in ipairs(sprites) do
                ComponentSetValue2(sprite, "alpha", 0)
              end
              GameDestroyInventoryItems( player )
              local controls_component = EntityGetFirstComponent(player, "ControlsComponent")
                if (controls_component ~= nil) then
                    ComponentSetValue2(controls_component, "enabled", false)
                end
                EntityAddTag( player, "polymorphable_NOT")
                NEMESIS.alive = false
              --ComponentSetValue2(damage_models, "kill_now", true)
          else
              NEMESIS.deaths = NEMESIS.deaths + 1
              PlayerRespawn(player, false, true) -- TODO: get penalty?
          end
      end
  end
  damage_models = nil
  local polymorphed, entity_id = IsPlayerPolymorphed()
  if (not polymorphed) then return end

  damage_models = EntityGetFirstComponent(entity_id, "DamageModelComponent")
  if (damage_models ~= nil) then
      ComponentSetValue2(damage_models, "wait_for_kill_flag_on_death", true)
      local curHp = ComponentGetValue2(damage_models, "hp")
      if (curHp < 0.0) then
          if (GameHasFlagRun("ending_game_completed")) then
              ComponentSetValue2(damage_models, "kill_now", true)
              return
          end

          if (NEMESIS.deaths > 0) then
              EndRun()
              ComponentSetValue2(damage_models, "kill_now", true)
          else
              NEMESIS.deaths = NEMESIS.deaths + 1
              PlayerRespawn(entity_id, false, false) -- TODO: get penalty?
          end
      end
  end
end

function PlayerRespawn(entity_id, poly, weak)
  if (Respawning == true) then return end
  async(function()
      Respawning = true
      if (poly) then
          local children = EntityGetAllChildren(entity_id)
          for _, child in ipairs(children) do
              local effects = EntityGetComponent(child, "GameEffectComponent")
              if (effects ~= nil and #effects > 0) then
                  for _, effect_comp in ipairs(effects) do
                      if (effect_comp ~= nil and effect_comp > 0) then
                          ComponentSetValue2(effect_comp, "frames", 1)
                      end
                  end
              end
          end
          wait(2)
      end
      local player = GetPlayer()
      local damage_models = nil
      if (player ~= nil) then
          damage_models = EntityGetFirstComponent(player, "DamageModelComponent")
      end
      if (damage_models ~= nil) then
          local max_hp = ComponentGetValue2(damage_models, "max_hp")
          if (weak) then
              --send custom message for weakening
              if (GameGetFrameNum() > LastRespawn + 30) then
                  LastRespawn = GameGetFrameNum()
                  SendWsEvent({event="CustomModEvent", payload={name="NemesisRespawn"}})
              end
          end
          ComponentSetValue2(damage_models, "hp", max_hp)
      end
      local effect_entity = LoadGameEffectEntityTo(player, "data/entities/misc/effect_protection_all.xml")
      local effect_comp = EntityGetFirstComponent(effect_entity, "GameEffectComponent")
      ComponentSetValue2(effect_comp, "frames", 60*30)
      EntityAddComponent2(effect_entity, "UIIconComponent", {
          icon_sprite_file = "data/ui_gfx/status_indicators/protection_all.png",
          name = "Respawn Protection",
          description = "You are being protected against campers.",
          display_above_head = true,
          display_in_hud = true,
          is_perk = false
      })
      EntitySetTransform(player, GetLastCheckPoint())
      Respawning = false
  end)
end