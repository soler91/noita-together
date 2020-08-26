stringstore.noita = stringstore.noita or {}

stringstore.noita.global = function(base_name)
	GlobalsSetValue(base_name, "<managed by stringstore>")

	return {
		set_type = function(key, val)
			GlobalsSetValue(base_name .. "." .. key .. ".type", val)
		end,

		set = function(key, val)
			GlobalsSetValue(base_name .. "." .. key, val)
		end,

		get_type = function(key, val)
			local stored_type = GlobalsGetValue(base_name .. "." .. key .. ".type")
			if stored_type == "" then
				return nil
			else
				return stored_type
			end
		end,

		get = function(key)
			return GlobalsGetValue(base_name .. "." .. key)
		end,

		get_sub_prefix = function(key)
			return key .. ".idx."
		end,

		get_typed_key = function(key, type)
			return key .. ":" .. type
		end,

		get_len_key = function(key)
			return key .. ".len"
		end,

		restrict = function(key)
			if key:find("\\.") or key:find(":") then
				error("Cannot use the dot ('.') character or the colon character (':') in the Globals stringstore")
			end
		end
	}
end