dofile("data/scripts/lib/mod_settings.lua")

local mod_id = "noita-together"
mod_settings_version = 1
mod_settings = 
{
	{
		id = "NT_HINTS",
		ui_name = "Show hints",
		value_default = true,
        scope=MOD_SETTING_SCOPE_RUNTIME
	},
	{
		id = "NT_GHOST_OPACITY",
		ui_name = "Player ghost opacity",
		value_default = 1.0,
		value_min = 0.0,
		value_max = 1.0,
		value_display_multiplier = 100,
        scope=MOD_SETTING_SCOPE_RUNTIME
	},
}

function ModSettingsUpdate( init_scope )
	local old_version = mod_settings_get_version( mod_id )
	mod_settings_update( mod_id, mod_settings, init_scope )
end

function ModSettingsGuiCount()
	return mod_settings_gui_count( mod_id, mod_settings )
end

function ModSettingsGui( gui, in_main_menu )
	mod_settings_gui( mod_id, mod_settings, gui, in_main_menu )
end
