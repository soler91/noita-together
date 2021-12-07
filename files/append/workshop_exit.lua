local _collision_trigger = collision_trigger

function collision_trigger()
    local _EntityLoad = EntityLoad
    EntityLoad = function(filename, x, y)
        if (filename == "data/entities/misc/workshop_collapse.xml") then return end
        if (filename == "data/entities/misc/workshop_areadamage.xml") then return end

        _EntityLoad(filename, x, y)
    end

    _collision_trigger()
    EntityLoad = _EntityLoad
end