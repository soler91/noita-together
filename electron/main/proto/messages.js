/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const NT = $root.NT = (() => {

    const NT = {};

    NT.Envelope = (function() {

        function Envelope(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Envelope.prototype.gameAction = null;
        Envelope.prototype.lobbyAction = null;

        let $oneOfFields;

        Object.defineProperty(Envelope.prototype, "kind", {
            get: $util.oneOfGetter($oneOfFields = ["gameAction", "lobbyAction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Envelope.create = function create(properties) {
            return new Envelope(properties);
        };

        Envelope.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameAction != null && Object.hasOwnProperty.call(message, "gameAction"))
                $root.NT.GameAction.encode(message.gameAction, writer.uint32(2).fork()).ldelim();
            if (message.lobbyAction != null && Object.hasOwnProperty.call(message, "lobbyAction"))
                $root.NT.LobbyAction.encode(message.lobbyAction, writer.uint32(402).fork()).ldelim();
            return writer;
        };

        Envelope.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.Envelope();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.gameAction = $root.NT.GameAction.decode(reader, reader.uint32());
                        break;
                    }
                case 50: {
                        message.lobbyAction = $root.NT.LobbyAction.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        Envelope.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.gameAction != null && message.hasOwnProperty("gameAction")) {
                properties.kind = 1;
                {
                    let error = $root.NT.GameAction.verify(message.gameAction);
                    if (error)
                        return "gameAction." + error;
                }
            }
            if (message.lobbyAction != null && message.hasOwnProperty("lobbyAction")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    let error = $root.NT.LobbyAction.verify(message.lobbyAction);
                    if (error)
                        return "lobbyAction." + error;
                }
            }
            return null;
        };

        Envelope.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.Envelope)
                return object;
            let message = new $root.NT.Envelope();
            if (object.gameAction != null) {
                if (typeof object.gameAction !== "object")
                    throw TypeError(".NT.Envelope.gameAction: object expected");
                message.gameAction = $root.NT.GameAction.fromObject(object.gameAction);
            }
            if (object.lobbyAction != null) {
                if (typeof object.lobbyAction !== "object")
                    throw TypeError(".NT.Envelope.lobbyAction: object expected");
                message.lobbyAction = $root.NT.LobbyAction.fromObject(object.lobbyAction);
            }
            return message;
        };

        Envelope.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.gameAction != null && message.hasOwnProperty("gameAction")) {
                object.gameAction = $root.NT.GameAction.toObject(message.gameAction, options);
                if (options.oneofs)
                    object.kind = "gameAction";
            }
            if (message.lobbyAction != null && message.hasOwnProperty("lobbyAction")) {
                object.lobbyAction = $root.NT.LobbyAction.toObject(message.lobbyAction, options);
                if (options.oneofs)
                    object.kind = "lobbyAction";
            }
            return object;
        };

        Envelope.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Envelope.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.Envelope";
        };

        return Envelope;
    })();

    NT.GameAction = (function() {

        function GameAction(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameAction.prototype.cPlayerMove = null;
        GameAction.prototype.sPlayerMove = null;
        GameAction.prototype.cPlayerUpdate = null;
        GameAction.prototype.sPlayerUpdate = null;
        GameAction.prototype.cPlayerUpdateInventory = null;
        GameAction.prototype.sPlayerUpdateInventory = null;
        GameAction.prototype.cHostItemBank = null;
        GameAction.prototype.sHostItemBank = null;
        GameAction.prototype.cHostUserTake = null;
        GameAction.prototype.sHostUserTake = null;
        GameAction.prototype.cHostUserTakeGold = null;
        GameAction.prototype.sHostUserTakeGold = null;
        GameAction.prototype.cPlayerAddGold = null;
        GameAction.prototype.sPlayerAddGold = null;
        GameAction.prototype.cPlayerTakeGold = null;
        GameAction.prototype.sPlayerTakeGold = null;
        GameAction.prototype.cPlayerAddItem = null;
        GameAction.prototype.sPlayerAddItem = null;
        GameAction.prototype.cPlayerTakeItem = null;
        GameAction.prototype.sPlayerTakeItem = null;
        GameAction.prototype.cPlayerPickup = null;
        GameAction.prototype.sPlayerPickup = null;
        GameAction.prototype.cNemesisAbility = null;
        GameAction.prototype.sNemesisAbility = null;
        GameAction.prototype.cNemesisPickupItem = null;
        GameAction.prototype.sNemesisPickupItem = null;
        GameAction.prototype.cChat = null;
        GameAction.prototype.sChat = null;
        GameAction.prototype.cPlayerDeath = null;
        GameAction.prototype.sPlayerDeath = null;
        GameAction.prototype.cPlayerNewGamePlus = null;
        GameAction.prototype.sPlayerNewGamePlus = null;
        GameAction.prototype.cPlayerSecretHourglass = null;
        GameAction.prototype.sPlayerSecretHourglass = null;
        GameAction.prototype.cCustomModEvent = null;
        GameAction.prototype.sCustomModEvent = null;
        GameAction.prototype.cRespawnPenalty = null;
        GameAction.prototype.sRespawnPenalty = null;
        GameAction.prototype.cAngerySteve = null;
        GameAction.prototype.sAngerySteve = null;
        GameAction.prototype.sPlayerPos = null;

        let $oneOfFields;

        Object.defineProperty(GameAction.prototype, "action", {
            get: $util.oneOfGetter($oneOfFields = ["cPlayerMove", "sPlayerMove", "cPlayerUpdate", "sPlayerUpdate", "cPlayerUpdateInventory", "sPlayerUpdateInventory", "cHostItemBank", "sHostItemBank", "cHostUserTake", "sHostUserTake", "cHostUserTakeGold", "sHostUserTakeGold", "cPlayerAddGold", "sPlayerAddGold", "cPlayerTakeGold", "sPlayerTakeGold", "cPlayerAddItem", "sPlayerAddItem", "cPlayerTakeItem", "sPlayerTakeItem", "cPlayerPickup", "sPlayerPickup", "cNemesisAbility", "sNemesisAbility", "cNemesisPickupItem", "sNemesisPickupItem", "cChat", "sChat", "cPlayerDeath", "sPlayerDeath", "cPlayerNewGamePlus", "sPlayerNewGamePlus", "cPlayerSecretHourglass", "sPlayerSecretHourglass", "cCustomModEvent", "sCustomModEvent", "cRespawnPenalty", "sRespawnPenalty", "cAngerySteve", "sAngerySteve", "sPlayerPos"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        GameAction.create = function create(properties) {
            return new GameAction(properties);
        };

        GameAction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cPlayerMove != null && Object.hasOwnProperty.call(message, "cPlayerMove"))
                $root.NT.ClientPlayerMove.encode(message.cPlayerMove, writer.uint32(2).fork()).ldelim();
            if (message.sPlayerMove != null && Object.hasOwnProperty.call(message, "sPlayerMove"))
                $root.NT.ServerPlayerMove.encode(message.sPlayerMove, writer.uint32(10).fork()).ldelim();
            if (message.cPlayerUpdate != null && Object.hasOwnProperty.call(message, "cPlayerUpdate"))
                $root.NT.ClientPlayerUpdate.encode(message.cPlayerUpdate, writer.uint32(18).fork()).ldelim();
            if (message.sPlayerUpdate != null && Object.hasOwnProperty.call(message, "sPlayerUpdate"))
                $root.NT.ServerPlayerUpdate.encode(message.sPlayerUpdate, writer.uint32(26).fork()).ldelim();
            if (message.cPlayerUpdateInventory != null && Object.hasOwnProperty.call(message, "cPlayerUpdateInventory"))
                $root.NT.ClientPlayerUpdateInventory.encode(message.cPlayerUpdateInventory, writer.uint32(34).fork()).ldelim();
            if (message.sPlayerUpdateInventory != null && Object.hasOwnProperty.call(message, "sPlayerUpdateInventory"))
                $root.NT.ServerPlayerUpdateInventory.encode(message.sPlayerUpdateInventory, writer.uint32(42).fork()).ldelim();
            if (message.cHostItemBank != null && Object.hasOwnProperty.call(message, "cHostItemBank"))
                $root.NT.ClientHostItemBank.encode(message.cHostItemBank, writer.uint32(50).fork()).ldelim();
            if (message.sHostItemBank != null && Object.hasOwnProperty.call(message, "sHostItemBank"))
                $root.NT.ServerHostItemBank.encode(message.sHostItemBank, writer.uint32(58).fork()).ldelim();
            if (message.cHostUserTake != null && Object.hasOwnProperty.call(message, "cHostUserTake"))
                $root.NT.ClientHostUserTake.encode(message.cHostUserTake, writer.uint32(66).fork()).ldelim();
            if (message.sHostUserTake != null && Object.hasOwnProperty.call(message, "sHostUserTake"))
                $root.NT.ServerHostUserTake.encode(message.sHostUserTake, writer.uint32(74).fork()).ldelim();
            if (message.cHostUserTakeGold != null && Object.hasOwnProperty.call(message, "cHostUserTakeGold"))
                $root.NT.ClientHostUserTakeGold.encode(message.cHostUserTakeGold, writer.uint32(82).fork()).ldelim();
            if (message.sHostUserTakeGold != null && Object.hasOwnProperty.call(message, "sHostUserTakeGold"))
                $root.NT.ServerHostUserTakeGold.encode(message.sHostUserTakeGold, writer.uint32(90).fork()).ldelim();
            if (message.cPlayerAddGold != null && Object.hasOwnProperty.call(message, "cPlayerAddGold"))
                $root.NT.ClientPlayerAddGold.encode(message.cPlayerAddGold, writer.uint32(98).fork()).ldelim();
            if (message.sPlayerAddGold != null && Object.hasOwnProperty.call(message, "sPlayerAddGold"))
                $root.NT.ServerPlayerAddGold.encode(message.sPlayerAddGold, writer.uint32(106).fork()).ldelim();
            if (message.cPlayerTakeGold != null && Object.hasOwnProperty.call(message, "cPlayerTakeGold"))
                $root.NT.ClientPlayerTakeGold.encode(message.cPlayerTakeGold, writer.uint32(114).fork()).ldelim();
            if (message.sPlayerTakeGold != null && Object.hasOwnProperty.call(message, "sPlayerTakeGold"))
                $root.NT.ServerPlayerTakeGold.encode(message.sPlayerTakeGold, writer.uint32(122).fork()).ldelim();
            if (message.cPlayerAddItem != null && Object.hasOwnProperty.call(message, "cPlayerAddItem"))
                $root.NT.ClientPlayerAddItem.encode(message.cPlayerAddItem, writer.uint32(130).fork()).ldelim();
            if (message.sPlayerAddItem != null && Object.hasOwnProperty.call(message, "sPlayerAddItem"))
                $root.NT.ServerPlayerAddItem.encode(message.sPlayerAddItem, writer.uint32(138).fork()).ldelim();
            if (message.cPlayerTakeItem != null && Object.hasOwnProperty.call(message, "cPlayerTakeItem"))
                $root.NT.ClientPlayerTakeItem.encode(message.cPlayerTakeItem, writer.uint32(146).fork()).ldelim();
            if (message.sPlayerTakeItem != null && Object.hasOwnProperty.call(message, "sPlayerTakeItem"))
                $root.NT.ServerPlayerTakeItem.encode(message.sPlayerTakeItem, writer.uint32(154).fork()).ldelim();
            if (message.cPlayerPickup != null && Object.hasOwnProperty.call(message, "cPlayerPickup"))
                $root.NT.ClientPlayerPickup.encode(message.cPlayerPickup, writer.uint32(162).fork()).ldelim();
            if (message.sPlayerPickup != null && Object.hasOwnProperty.call(message, "sPlayerPickup"))
                $root.NT.ServerPlayerPickup.encode(message.sPlayerPickup, writer.uint32(170).fork()).ldelim();
            if (message.cNemesisAbility != null && Object.hasOwnProperty.call(message, "cNemesisAbility"))
                $root.NT.ClientNemesisAbility.encode(message.cNemesisAbility, writer.uint32(178).fork()).ldelim();
            if (message.sNemesisAbility != null && Object.hasOwnProperty.call(message, "sNemesisAbility"))
                $root.NT.ServerNemesisAbility.encode(message.sNemesisAbility, writer.uint32(186).fork()).ldelim();
            if (message.cNemesisPickupItem != null && Object.hasOwnProperty.call(message, "cNemesisPickupItem"))
                $root.NT.ClientNemesisPickupItem.encode(message.cNemesisPickupItem, writer.uint32(194).fork()).ldelim();
            if (message.sNemesisPickupItem != null && Object.hasOwnProperty.call(message, "sNemesisPickupItem"))
                $root.NT.ServerNemesisPickupItem.encode(message.sNemesisPickupItem, writer.uint32(202).fork()).ldelim();
            if (message.cChat != null && Object.hasOwnProperty.call(message, "cChat"))
                $root.NT.ClientChat.encode(message.cChat, writer.uint32(210).fork()).ldelim();
            if (message.sChat != null && Object.hasOwnProperty.call(message, "sChat"))
                $root.NT.ServerChat.encode(message.sChat, writer.uint32(218).fork()).ldelim();
            if (message.cPlayerDeath != null && Object.hasOwnProperty.call(message, "cPlayerDeath"))
                $root.NT.ClientPlayerDeath.encode(message.cPlayerDeath, writer.uint32(226).fork()).ldelim();
            if (message.sPlayerDeath != null && Object.hasOwnProperty.call(message, "sPlayerDeath"))
                $root.NT.ServerPlayerDeath.encode(message.sPlayerDeath, writer.uint32(234).fork()).ldelim();
            if (message.cPlayerNewGamePlus != null && Object.hasOwnProperty.call(message, "cPlayerNewGamePlus"))
                $root.NT.ClientPlayerNewGamePlus.encode(message.cPlayerNewGamePlus, writer.uint32(242).fork()).ldelim();
            if (message.sPlayerNewGamePlus != null && Object.hasOwnProperty.call(message, "sPlayerNewGamePlus"))
                $root.NT.ServerPlayerNewGamePlus.encode(message.sPlayerNewGamePlus, writer.uint32(250).fork()).ldelim();
            if (message.cPlayerSecretHourglass != null && Object.hasOwnProperty.call(message, "cPlayerSecretHourglass"))
                $root.NT.ClientPlayerSecretHourglass.encode(message.cPlayerSecretHourglass, writer.uint32(258).fork()).ldelim();
            if (message.sPlayerSecretHourglass != null && Object.hasOwnProperty.call(message, "sPlayerSecretHourglass"))
                $root.NT.ServerPlayerSecretHourglass.encode(message.sPlayerSecretHourglass, writer.uint32(266).fork()).ldelim();
            if (message.cCustomModEvent != null && Object.hasOwnProperty.call(message, "cCustomModEvent"))
                $root.NT.ClientCustomModEvent.encode(message.cCustomModEvent, writer.uint32(274).fork()).ldelim();
            if (message.sCustomModEvent != null && Object.hasOwnProperty.call(message, "sCustomModEvent"))
                $root.NT.ServerCustomModEvent.encode(message.sCustomModEvent, writer.uint32(282).fork()).ldelim();
            if (message.cRespawnPenalty != null && Object.hasOwnProperty.call(message, "cRespawnPenalty"))
                $root.NT.ClientRespawnPenalty.encode(message.cRespawnPenalty, writer.uint32(290).fork()).ldelim();
            if (message.sRespawnPenalty != null && Object.hasOwnProperty.call(message, "sRespawnPenalty"))
                $root.NT.ServerRespawnPenalty.encode(message.sRespawnPenalty, writer.uint32(298).fork()).ldelim();
            if (message.cAngerySteve != null && Object.hasOwnProperty.call(message, "cAngerySteve"))
                $root.NT.ClientAngerySteve.encode(message.cAngerySteve, writer.uint32(306).fork()).ldelim();
            if (message.sAngerySteve != null && Object.hasOwnProperty.call(message, "sAngerySteve"))
                $root.NT.ServerAngerySteve.encode(message.sAngerySteve, writer.uint32(314).fork()).ldelim();
            if (message.sPlayerPos != null && Object.hasOwnProperty.call(message, "sPlayerPos"))
                $root.NT.ServerPlayerPos.encode(message.sPlayerPos, writer.uint32(322).fork()).ldelim();
            return writer;
        };

        GameAction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.GameAction();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.cPlayerMove = $root.NT.ClientPlayerMove.decode(reader, reader.uint32());
                        break;
                    }
                case 1: {
                        message.sPlayerMove = $root.NT.ServerPlayerMove.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.cPlayerUpdate = $root.NT.ClientPlayerUpdate.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.sPlayerUpdate = $root.NT.ServerPlayerUpdate.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.cPlayerUpdateInventory = $root.NT.ClientPlayerUpdateInventory.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.sPlayerUpdateInventory = $root.NT.ServerPlayerUpdateInventory.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.cHostItemBank = $root.NT.ClientHostItemBank.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.sHostItemBank = $root.NT.ServerHostItemBank.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.cHostUserTake = $root.NT.ClientHostUserTake.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.sHostUserTake = $root.NT.ServerHostUserTake.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.cHostUserTakeGold = $root.NT.ClientHostUserTakeGold.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.sHostUserTakeGold = $root.NT.ServerHostUserTakeGold.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.cPlayerAddGold = $root.NT.ClientPlayerAddGold.decode(reader, reader.uint32());
                        break;
                    }
                case 13: {
                        message.sPlayerAddGold = $root.NT.ServerPlayerAddGold.decode(reader, reader.uint32());
                        break;
                    }
                case 14: {
                        message.cPlayerTakeGold = $root.NT.ClientPlayerTakeGold.decode(reader, reader.uint32());
                        break;
                    }
                case 15: {
                        message.sPlayerTakeGold = $root.NT.ServerPlayerTakeGold.decode(reader, reader.uint32());
                        break;
                    }
                case 16: {
                        message.cPlayerAddItem = $root.NT.ClientPlayerAddItem.decode(reader, reader.uint32());
                        break;
                    }
                case 17: {
                        message.sPlayerAddItem = $root.NT.ServerPlayerAddItem.decode(reader, reader.uint32());
                        break;
                    }
                case 18: {
                        message.cPlayerTakeItem = $root.NT.ClientPlayerTakeItem.decode(reader, reader.uint32());
                        break;
                    }
                case 19: {
                        message.sPlayerTakeItem = $root.NT.ServerPlayerTakeItem.decode(reader, reader.uint32());
                        break;
                    }
                case 20: {
                        message.cPlayerPickup = $root.NT.ClientPlayerPickup.decode(reader, reader.uint32());
                        break;
                    }
                case 21: {
                        message.sPlayerPickup = $root.NT.ServerPlayerPickup.decode(reader, reader.uint32());
                        break;
                    }
                case 22: {
                        message.cNemesisAbility = $root.NT.ClientNemesisAbility.decode(reader, reader.uint32());
                        break;
                    }
                case 23: {
                        message.sNemesisAbility = $root.NT.ServerNemesisAbility.decode(reader, reader.uint32());
                        break;
                    }
                case 24: {
                        message.cNemesisPickupItem = $root.NT.ClientNemesisPickupItem.decode(reader, reader.uint32());
                        break;
                    }
                case 25: {
                        message.sNemesisPickupItem = $root.NT.ServerNemesisPickupItem.decode(reader, reader.uint32());
                        break;
                    }
                case 26: {
                        message.cChat = $root.NT.ClientChat.decode(reader, reader.uint32());
                        break;
                    }
                case 27: {
                        message.sChat = $root.NT.ServerChat.decode(reader, reader.uint32());
                        break;
                    }
                case 28: {
                        message.cPlayerDeath = $root.NT.ClientPlayerDeath.decode(reader, reader.uint32());
                        break;
                    }
                case 29: {
                        message.sPlayerDeath = $root.NT.ServerPlayerDeath.decode(reader, reader.uint32());
                        break;
                    }
                case 30: {
                        message.cPlayerNewGamePlus = $root.NT.ClientPlayerNewGamePlus.decode(reader, reader.uint32());
                        break;
                    }
                case 31: {
                        message.sPlayerNewGamePlus = $root.NT.ServerPlayerNewGamePlus.decode(reader, reader.uint32());
                        break;
                    }
                case 32: {
                        message.cPlayerSecretHourglass = $root.NT.ClientPlayerSecretHourglass.decode(reader, reader.uint32());
                        break;
                    }
                case 33: {
                        message.sPlayerSecretHourglass = $root.NT.ServerPlayerSecretHourglass.decode(reader, reader.uint32());
                        break;
                    }
                case 34: {
                        message.cCustomModEvent = $root.NT.ClientCustomModEvent.decode(reader, reader.uint32());
                        break;
                    }
                case 35: {
                        message.sCustomModEvent = $root.NT.ServerCustomModEvent.decode(reader, reader.uint32());
                        break;
                    }
                case 36: {
                        message.cRespawnPenalty = $root.NT.ClientRespawnPenalty.decode(reader, reader.uint32());
                        break;
                    }
                case 37: {
                        message.sRespawnPenalty = $root.NT.ServerRespawnPenalty.decode(reader, reader.uint32());
                        break;
                    }
                case 38: {
                        message.cAngerySteve = $root.NT.ClientAngerySteve.decode(reader, reader.uint32());
                        break;
                    }
                case 39: {
                        message.sAngerySteve = $root.NT.ServerAngerySteve.decode(reader, reader.uint32());
                        break;
                    }
                case 40: {
                        message.sPlayerPos = $root.NT.ServerPlayerPos.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameAction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.cPlayerMove != null && message.hasOwnProperty("cPlayerMove")) {
                properties.action = 1;
                {
                    let error = $root.NT.ClientPlayerMove.verify(message.cPlayerMove);
                    if (error)
                        return "cPlayerMove." + error;
                }
            }
            if (message.sPlayerMove != null && message.hasOwnProperty("sPlayerMove")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerPlayerMove.verify(message.sPlayerMove);
                    if (error)
                        return "sPlayerMove." + error;
                }
            }
            if (message.cPlayerUpdate != null && message.hasOwnProperty("cPlayerUpdate")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientPlayerUpdate.verify(message.cPlayerUpdate);
                    if (error)
                        return "cPlayerUpdate." + error;
                }
            }
            if (message.sPlayerUpdate != null && message.hasOwnProperty("sPlayerUpdate")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerPlayerUpdate.verify(message.sPlayerUpdate);
                    if (error)
                        return "sPlayerUpdate." + error;
                }
            }
            if (message.cPlayerUpdateInventory != null && message.hasOwnProperty("cPlayerUpdateInventory")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientPlayerUpdateInventory.verify(message.cPlayerUpdateInventory);
                    if (error)
                        return "cPlayerUpdateInventory." + error;
                }
            }
            if (message.sPlayerUpdateInventory != null && message.hasOwnProperty("sPlayerUpdateInventory")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerPlayerUpdateInventory.verify(message.sPlayerUpdateInventory);
                    if (error)
                        return "sPlayerUpdateInventory." + error;
                }
            }
            if (message.cHostItemBank != null && message.hasOwnProperty("cHostItemBank")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientHostItemBank.verify(message.cHostItemBank);
                    if (error)
                        return "cHostItemBank." + error;
                }
            }
            if (message.sHostItemBank != null && message.hasOwnProperty("sHostItemBank")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerHostItemBank.verify(message.sHostItemBank);
                    if (error)
                        return "sHostItemBank." + error;
                }
            }
            if (message.cHostUserTake != null && message.hasOwnProperty("cHostUserTake")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientHostUserTake.verify(message.cHostUserTake);
                    if (error)
                        return "cHostUserTake." + error;
                }
            }
            if (message.sHostUserTake != null && message.hasOwnProperty("sHostUserTake")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerHostUserTake.verify(message.sHostUserTake);
                    if (error)
                        return "sHostUserTake." + error;
                }
            }
            if (message.cHostUserTakeGold != null && message.hasOwnProperty("cHostUserTakeGold")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientHostUserTakeGold.verify(message.cHostUserTakeGold);
                    if (error)
                        return "cHostUserTakeGold." + error;
                }
            }
            if (message.sHostUserTakeGold != null && message.hasOwnProperty("sHostUserTakeGold")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerHostUserTakeGold.verify(message.sHostUserTakeGold);
                    if (error)
                        return "sHostUserTakeGold." + error;
                }
            }
            if (message.cPlayerAddGold != null && message.hasOwnProperty("cPlayerAddGold")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientPlayerAddGold.verify(message.cPlayerAddGold);
                    if (error)
                        return "cPlayerAddGold." + error;
                }
            }
            if (message.sPlayerAddGold != null && message.hasOwnProperty("sPlayerAddGold")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerPlayerAddGold.verify(message.sPlayerAddGold);
                    if (error)
                        return "sPlayerAddGold." + error;
                }
            }
            if (message.cPlayerTakeGold != null && message.hasOwnProperty("cPlayerTakeGold")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientPlayerTakeGold.verify(message.cPlayerTakeGold);
                    if (error)
                        return "cPlayerTakeGold." + error;
                }
            }
            if (message.sPlayerTakeGold != null && message.hasOwnProperty("sPlayerTakeGold")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerPlayerTakeGold.verify(message.sPlayerTakeGold);
                    if (error)
                        return "sPlayerTakeGold." + error;
                }
            }
            if (message.cPlayerAddItem != null && message.hasOwnProperty("cPlayerAddItem")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientPlayerAddItem.verify(message.cPlayerAddItem);
                    if (error)
                        return "cPlayerAddItem." + error;
                }
            }
            if (message.sPlayerAddItem != null && message.hasOwnProperty("sPlayerAddItem")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerPlayerAddItem.verify(message.sPlayerAddItem);
                    if (error)
                        return "sPlayerAddItem." + error;
                }
            }
            if (message.cPlayerTakeItem != null && message.hasOwnProperty("cPlayerTakeItem")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientPlayerTakeItem.verify(message.cPlayerTakeItem);
                    if (error)
                        return "cPlayerTakeItem." + error;
                }
            }
            if (message.sPlayerTakeItem != null && message.hasOwnProperty("sPlayerTakeItem")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerPlayerTakeItem.verify(message.sPlayerTakeItem);
                    if (error)
                        return "sPlayerTakeItem." + error;
                }
            }
            if (message.cPlayerPickup != null && message.hasOwnProperty("cPlayerPickup")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientPlayerPickup.verify(message.cPlayerPickup);
                    if (error)
                        return "cPlayerPickup." + error;
                }
            }
            if (message.sPlayerPickup != null && message.hasOwnProperty("sPlayerPickup")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerPlayerPickup.verify(message.sPlayerPickup);
                    if (error)
                        return "sPlayerPickup." + error;
                }
            }
            if (message.cNemesisAbility != null && message.hasOwnProperty("cNemesisAbility")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientNemesisAbility.verify(message.cNemesisAbility);
                    if (error)
                        return "cNemesisAbility." + error;
                }
            }
            if (message.sNemesisAbility != null && message.hasOwnProperty("sNemesisAbility")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerNemesisAbility.verify(message.sNemesisAbility);
                    if (error)
                        return "sNemesisAbility." + error;
                }
            }
            if (message.cNemesisPickupItem != null && message.hasOwnProperty("cNemesisPickupItem")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientNemesisPickupItem.verify(message.cNemesisPickupItem);
                    if (error)
                        return "cNemesisPickupItem." + error;
                }
            }
            if (message.sNemesisPickupItem != null && message.hasOwnProperty("sNemesisPickupItem")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerNemesisPickupItem.verify(message.sNemesisPickupItem);
                    if (error)
                        return "sNemesisPickupItem." + error;
                }
            }
            if (message.cChat != null && message.hasOwnProperty("cChat")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientChat.verify(message.cChat);
                    if (error)
                        return "cChat." + error;
                }
            }
            if (message.sChat != null && message.hasOwnProperty("sChat")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerChat.verify(message.sChat);
                    if (error)
                        return "sChat." + error;
                }
            }
            if (message.cPlayerDeath != null && message.hasOwnProperty("cPlayerDeath")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientPlayerDeath.verify(message.cPlayerDeath);
                    if (error)
                        return "cPlayerDeath." + error;
                }
            }
            if (message.sPlayerDeath != null && message.hasOwnProperty("sPlayerDeath")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerPlayerDeath.verify(message.sPlayerDeath);
                    if (error)
                        return "sPlayerDeath." + error;
                }
            }
            if (message.cPlayerNewGamePlus != null && message.hasOwnProperty("cPlayerNewGamePlus")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientPlayerNewGamePlus.verify(message.cPlayerNewGamePlus);
                    if (error)
                        return "cPlayerNewGamePlus." + error;
                }
            }
            if (message.sPlayerNewGamePlus != null && message.hasOwnProperty("sPlayerNewGamePlus")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerPlayerNewGamePlus.verify(message.sPlayerNewGamePlus);
                    if (error)
                        return "sPlayerNewGamePlus." + error;
                }
            }
            if (message.cPlayerSecretHourglass != null && message.hasOwnProperty("cPlayerSecretHourglass")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientPlayerSecretHourglass.verify(message.cPlayerSecretHourglass);
                    if (error)
                        return "cPlayerSecretHourglass." + error;
                }
            }
            if (message.sPlayerSecretHourglass != null && message.hasOwnProperty("sPlayerSecretHourglass")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerPlayerSecretHourglass.verify(message.sPlayerSecretHourglass);
                    if (error)
                        return "sPlayerSecretHourglass." + error;
                }
            }
            if (message.cCustomModEvent != null && message.hasOwnProperty("cCustomModEvent")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientCustomModEvent.verify(message.cCustomModEvent);
                    if (error)
                        return "cCustomModEvent." + error;
                }
            }
            if (message.sCustomModEvent != null && message.hasOwnProperty("sCustomModEvent")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerCustomModEvent.verify(message.sCustomModEvent);
                    if (error)
                        return "sCustomModEvent." + error;
                }
            }
            if (message.cRespawnPenalty != null && message.hasOwnProperty("cRespawnPenalty")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientRespawnPenalty.verify(message.cRespawnPenalty);
                    if (error)
                        return "cRespawnPenalty." + error;
                }
            }
            if (message.sRespawnPenalty != null && message.hasOwnProperty("sRespawnPenalty")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerRespawnPenalty.verify(message.sRespawnPenalty);
                    if (error)
                        return "sRespawnPenalty." + error;
                }
            }
            if (message.cAngerySteve != null && message.hasOwnProperty("cAngerySteve")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientAngerySteve.verify(message.cAngerySteve);
                    if (error)
                        return "cAngerySteve." + error;
                }
            }
            if (message.sAngerySteve != null && message.hasOwnProperty("sAngerySteve")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerAngerySteve.verify(message.sAngerySteve);
                    if (error)
                        return "sAngerySteve." + error;
                }
            }
            if (message.sPlayerPos != null && message.hasOwnProperty("sPlayerPos")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerPlayerPos.verify(message.sPlayerPos);
                    if (error)
                        return "sPlayerPos." + error;
                }
            }
            return null;
        };

        GameAction.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.GameAction)
                return object;
            let message = new $root.NT.GameAction();
            if (object.cPlayerMove != null) {
                if (typeof object.cPlayerMove !== "object")
                    throw TypeError(".NT.GameAction.cPlayerMove: object expected");
                message.cPlayerMove = $root.NT.ClientPlayerMove.fromObject(object.cPlayerMove);
            }
            if (object.sPlayerMove != null) {
                if (typeof object.sPlayerMove !== "object")
                    throw TypeError(".NT.GameAction.sPlayerMove: object expected");
                message.sPlayerMove = $root.NT.ServerPlayerMove.fromObject(object.sPlayerMove);
            }
            if (object.cPlayerUpdate != null) {
                if (typeof object.cPlayerUpdate !== "object")
                    throw TypeError(".NT.GameAction.cPlayerUpdate: object expected");
                message.cPlayerUpdate = $root.NT.ClientPlayerUpdate.fromObject(object.cPlayerUpdate);
            }
            if (object.sPlayerUpdate != null) {
                if (typeof object.sPlayerUpdate !== "object")
                    throw TypeError(".NT.GameAction.sPlayerUpdate: object expected");
                message.sPlayerUpdate = $root.NT.ServerPlayerUpdate.fromObject(object.sPlayerUpdate);
            }
            if (object.cPlayerUpdateInventory != null) {
                if (typeof object.cPlayerUpdateInventory !== "object")
                    throw TypeError(".NT.GameAction.cPlayerUpdateInventory: object expected");
                message.cPlayerUpdateInventory = $root.NT.ClientPlayerUpdateInventory.fromObject(object.cPlayerUpdateInventory);
            }
            if (object.sPlayerUpdateInventory != null) {
                if (typeof object.sPlayerUpdateInventory !== "object")
                    throw TypeError(".NT.GameAction.sPlayerUpdateInventory: object expected");
                message.sPlayerUpdateInventory = $root.NT.ServerPlayerUpdateInventory.fromObject(object.sPlayerUpdateInventory);
            }
            if (object.cHostItemBank != null) {
                if (typeof object.cHostItemBank !== "object")
                    throw TypeError(".NT.GameAction.cHostItemBank: object expected");
                message.cHostItemBank = $root.NT.ClientHostItemBank.fromObject(object.cHostItemBank);
            }
            if (object.sHostItemBank != null) {
                if (typeof object.sHostItemBank !== "object")
                    throw TypeError(".NT.GameAction.sHostItemBank: object expected");
                message.sHostItemBank = $root.NT.ServerHostItemBank.fromObject(object.sHostItemBank);
            }
            if (object.cHostUserTake != null) {
                if (typeof object.cHostUserTake !== "object")
                    throw TypeError(".NT.GameAction.cHostUserTake: object expected");
                message.cHostUserTake = $root.NT.ClientHostUserTake.fromObject(object.cHostUserTake);
            }
            if (object.sHostUserTake != null) {
                if (typeof object.sHostUserTake !== "object")
                    throw TypeError(".NT.GameAction.sHostUserTake: object expected");
                message.sHostUserTake = $root.NT.ServerHostUserTake.fromObject(object.sHostUserTake);
            }
            if (object.cHostUserTakeGold != null) {
                if (typeof object.cHostUserTakeGold !== "object")
                    throw TypeError(".NT.GameAction.cHostUserTakeGold: object expected");
                message.cHostUserTakeGold = $root.NT.ClientHostUserTakeGold.fromObject(object.cHostUserTakeGold);
            }
            if (object.sHostUserTakeGold != null) {
                if (typeof object.sHostUserTakeGold !== "object")
                    throw TypeError(".NT.GameAction.sHostUserTakeGold: object expected");
                message.sHostUserTakeGold = $root.NT.ServerHostUserTakeGold.fromObject(object.sHostUserTakeGold);
            }
            if (object.cPlayerAddGold != null) {
                if (typeof object.cPlayerAddGold !== "object")
                    throw TypeError(".NT.GameAction.cPlayerAddGold: object expected");
                message.cPlayerAddGold = $root.NT.ClientPlayerAddGold.fromObject(object.cPlayerAddGold);
            }
            if (object.sPlayerAddGold != null) {
                if (typeof object.sPlayerAddGold !== "object")
                    throw TypeError(".NT.GameAction.sPlayerAddGold: object expected");
                message.sPlayerAddGold = $root.NT.ServerPlayerAddGold.fromObject(object.sPlayerAddGold);
            }
            if (object.cPlayerTakeGold != null) {
                if (typeof object.cPlayerTakeGold !== "object")
                    throw TypeError(".NT.GameAction.cPlayerTakeGold: object expected");
                message.cPlayerTakeGold = $root.NT.ClientPlayerTakeGold.fromObject(object.cPlayerTakeGold);
            }
            if (object.sPlayerTakeGold != null) {
                if (typeof object.sPlayerTakeGold !== "object")
                    throw TypeError(".NT.GameAction.sPlayerTakeGold: object expected");
                message.sPlayerTakeGold = $root.NT.ServerPlayerTakeGold.fromObject(object.sPlayerTakeGold);
            }
            if (object.cPlayerAddItem != null) {
                if (typeof object.cPlayerAddItem !== "object")
                    throw TypeError(".NT.GameAction.cPlayerAddItem: object expected");
                message.cPlayerAddItem = $root.NT.ClientPlayerAddItem.fromObject(object.cPlayerAddItem);
            }
            if (object.sPlayerAddItem != null) {
                if (typeof object.sPlayerAddItem !== "object")
                    throw TypeError(".NT.GameAction.sPlayerAddItem: object expected");
                message.sPlayerAddItem = $root.NT.ServerPlayerAddItem.fromObject(object.sPlayerAddItem);
            }
            if (object.cPlayerTakeItem != null) {
                if (typeof object.cPlayerTakeItem !== "object")
                    throw TypeError(".NT.GameAction.cPlayerTakeItem: object expected");
                message.cPlayerTakeItem = $root.NT.ClientPlayerTakeItem.fromObject(object.cPlayerTakeItem);
            }
            if (object.sPlayerTakeItem != null) {
                if (typeof object.sPlayerTakeItem !== "object")
                    throw TypeError(".NT.GameAction.sPlayerTakeItem: object expected");
                message.sPlayerTakeItem = $root.NT.ServerPlayerTakeItem.fromObject(object.sPlayerTakeItem);
            }
            if (object.cPlayerPickup != null) {
                if (typeof object.cPlayerPickup !== "object")
                    throw TypeError(".NT.GameAction.cPlayerPickup: object expected");
                message.cPlayerPickup = $root.NT.ClientPlayerPickup.fromObject(object.cPlayerPickup);
            }
            if (object.sPlayerPickup != null) {
                if (typeof object.sPlayerPickup !== "object")
                    throw TypeError(".NT.GameAction.sPlayerPickup: object expected");
                message.sPlayerPickup = $root.NT.ServerPlayerPickup.fromObject(object.sPlayerPickup);
            }
            if (object.cNemesisAbility != null) {
                if (typeof object.cNemesisAbility !== "object")
                    throw TypeError(".NT.GameAction.cNemesisAbility: object expected");
                message.cNemesisAbility = $root.NT.ClientNemesisAbility.fromObject(object.cNemesisAbility);
            }
            if (object.sNemesisAbility != null) {
                if (typeof object.sNemesisAbility !== "object")
                    throw TypeError(".NT.GameAction.sNemesisAbility: object expected");
                message.sNemesisAbility = $root.NT.ServerNemesisAbility.fromObject(object.sNemesisAbility);
            }
            if (object.cNemesisPickupItem != null) {
                if (typeof object.cNemesisPickupItem !== "object")
                    throw TypeError(".NT.GameAction.cNemesisPickupItem: object expected");
                message.cNemesisPickupItem = $root.NT.ClientNemesisPickupItem.fromObject(object.cNemesisPickupItem);
            }
            if (object.sNemesisPickupItem != null) {
                if (typeof object.sNemesisPickupItem !== "object")
                    throw TypeError(".NT.GameAction.sNemesisPickupItem: object expected");
                message.sNemesisPickupItem = $root.NT.ServerNemesisPickupItem.fromObject(object.sNemesisPickupItem);
            }
            if (object.cChat != null) {
                if (typeof object.cChat !== "object")
                    throw TypeError(".NT.GameAction.cChat: object expected");
                message.cChat = $root.NT.ClientChat.fromObject(object.cChat);
            }
            if (object.sChat != null) {
                if (typeof object.sChat !== "object")
                    throw TypeError(".NT.GameAction.sChat: object expected");
                message.sChat = $root.NT.ServerChat.fromObject(object.sChat);
            }
            if (object.cPlayerDeath != null) {
                if (typeof object.cPlayerDeath !== "object")
                    throw TypeError(".NT.GameAction.cPlayerDeath: object expected");
                message.cPlayerDeath = $root.NT.ClientPlayerDeath.fromObject(object.cPlayerDeath);
            }
            if (object.sPlayerDeath != null) {
                if (typeof object.sPlayerDeath !== "object")
                    throw TypeError(".NT.GameAction.sPlayerDeath: object expected");
                message.sPlayerDeath = $root.NT.ServerPlayerDeath.fromObject(object.sPlayerDeath);
            }
            if (object.cPlayerNewGamePlus != null) {
                if (typeof object.cPlayerNewGamePlus !== "object")
                    throw TypeError(".NT.GameAction.cPlayerNewGamePlus: object expected");
                message.cPlayerNewGamePlus = $root.NT.ClientPlayerNewGamePlus.fromObject(object.cPlayerNewGamePlus);
            }
            if (object.sPlayerNewGamePlus != null) {
                if (typeof object.sPlayerNewGamePlus !== "object")
                    throw TypeError(".NT.GameAction.sPlayerNewGamePlus: object expected");
                message.sPlayerNewGamePlus = $root.NT.ServerPlayerNewGamePlus.fromObject(object.sPlayerNewGamePlus);
            }
            if (object.cPlayerSecretHourglass != null) {
                if (typeof object.cPlayerSecretHourglass !== "object")
                    throw TypeError(".NT.GameAction.cPlayerSecretHourglass: object expected");
                message.cPlayerSecretHourglass = $root.NT.ClientPlayerSecretHourglass.fromObject(object.cPlayerSecretHourglass);
            }
            if (object.sPlayerSecretHourglass != null) {
                if (typeof object.sPlayerSecretHourglass !== "object")
                    throw TypeError(".NT.GameAction.sPlayerSecretHourglass: object expected");
                message.sPlayerSecretHourglass = $root.NT.ServerPlayerSecretHourglass.fromObject(object.sPlayerSecretHourglass);
            }
            if (object.cCustomModEvent != null) {
                if (typeof object.cCustomModEvent !== "object")
                    throw TypeError(".NT.GameAction.cCustomModEvent: object expected");
                message.cCustomModEvent = $root.NT.ClientCustomModEvent.fromObject(object.cCustomModEvent);
            }
            if (object.sCustomModEvent != null) {
                if (typeof object.sCustomModEvent !== "object")
                    throw TypeError(".NT.GameAction.sCustomModEvent: object expected");
                message.sCustomModEvent = $root.NT.ServerCustomModEvent.fromObject(object.sCustomModEvent);
            }
            if (object.cRespawnPenalty != null) {
                if (typeof object.cRespawnPenalty !== "object")
                    throw TypeError(".NT.GameAction.cRespawnPenalty: object expected");
                message.cRespawnPenalty = $root.NT.ClientRespawnPenalty.fromObject(object.cRespawnPenalty);
            }
            if (object.sRespawnPenalty != null) {
                if (typeof object.sRespawnPenalty !== "object")
                    throw TypeError(".NT.GameAction.sRespawnPenalty: object expected");
                message.sRespawnPenalty = $root.NT.ServerRespawnPenalty.fromObject(object.sRespawnPenalty);
            }
            if (object.cAngerySteve != null) {
                if (typeof object.cAngerySteve !== "object")
                    throw TypeError(".NT.GameAction.cAngerySteve: object expected");
                message.cAngerySteve = $root.NT.ClientAngerySteve.fromObject(object.cAngerySteve);
            }
            if (object.sAngerySteve != null) {
                if (typeof object.sAngerySteve !== "object")
                    throw TypeError(".NT.GameAction.sAngerySteve: object expected");
                message.sAngerySteve = $root.NT.ServerAngerySteve.fromObject(object.sAngerySteve);
            }
            if (object.sPlayerPos != null) {
                if (typeof object.sPlayerPos !== "object")
                    throw TypeError(".NT.GameAction.sPlayerPos: object expected");
                message.sPlayerPos = $root.NT.ServerPlayerPos.fromObject(object.sPlayerPos);
            }
            return message;
        };

        GameAction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.cPlayerMove != null && message.hasOwnProperty("cPlayerMove")) {
                object.cPlayerMove = $root.NT.ClientPlayerMove.toObject(message.cPlayerMove, options);
                if (options.oneofs)
                    object.action = "cPlayerMove";
            }
            if (message.sPlayerMove != null && message.hasOwnProperty("sPlayerMove")) {
                object.sPlayerMove = $root.NT.ServerPlayerMove.toObject(message.sPlayerMove, options);
                if (options.oneofs)
                    object.action = "sPlayerMove";
            }
            if (message.cPlayerUpdate != null && message.hasOwnProperty("cPlayerUpdate")) {
                object.cPlayerUpdate = $root.NT.ClientPlayerUpdate.toObject(message.cPlayerUpdate, options);
                if (options.oneofs)
                    object.action = "cPlayerUpdate";
            }
            if (message.sPlayerUpdate != null && message.hasOwnProperty("sPlayerUpdate")) {
                object.sPlayerUpdate = $root.NT.ServerPlayerUpdate.toObject(message.sPlayerUpdate, options);
                if (options.oneofs)
                    object.action = "sPlayerUpdate";
            }
            if (message.cPlayerUpdateInventory != null && message.hasOwnProperty("cPlayerUpdateInventory")) {
                object.cPlayerUpdateInventory = $root.NT.ClientPlayerUpdateInventory.toObject(message.cPlayerUpdateInventory, options);
                if (options.oneofs)
                    object.action = "cPlayerUpdateInventory";
            }
            if (message.sPlayerUpdateInventory != null && message.hasOwnProperty("sPlayerUpdateInventory")) {
                object.sPlayerUpdateInventory = $root.NT.ServerPlayerUpdateInventory.toObject(message.sPlayerUpdateInventory, options);
                if (options.oneofs)
                    object.action = "sPlayerUpdateInventory";
            }
            if (message.cHostItemBank != null && message.hasOwnProperty("cHostItemBank")) {
                object.cHostItemBank = $root.NT.ClientHostItemBank.toObject(message.cHostItemBank, options);
                if (options.oneofs)
                    object.action = "cHostItemBank";
            }
            if (message.sHostItemBank != null && message.hasOwnProperty("sHostItemBank")) {
                object.sHostItemBank = $root.NT.ServerHostItemBank.toObject(message.sHostItemBank, options);
                if (options.oneofs)
                    object.action = "sHostItemBank";
            }
            if (message.cHostUserTake != null && message.hasOwnProperty("cHostUserTake")) {
                object.cHostUserTake = $root.NT.ClientHostUserTake.toObject(message.cHostUserTake, options);
                if (options.oneofs)
                    object.action = "cHostUserTake";
            }
            if (message.sHostUserTake != null && message.hasOwnProperty("sHostUserTake")) {
                object.sHostUserTake = $root.NT.ServerHostUserTake.toObject(message.sHostUserTake, options);
                if (options.oneofs)
                    object.action = "sHostUserTake";
            }
            if (message.cHostUserTakeGold != null && message.hasOwnProperty("cHostUserTakeGold")) {
                object.cHostUserTakeGold = $root.NT.ClientHostUserTakeGold.toObject(message.cHostUserTakeGold, options);
                if (options.oneofs)
                    object.action = "cHostUserTakeGold";
            }
            if (message.sHostUserTakeGold != null && message.hasOwnProperty("sHostUserTakeGold")) {
                object.sHostUserTakeGold = $root.NT.ServerHostUserTakeGold.toObject(message.sHostUserTakeGold, options);
                if (options.oneofs)
                    object.action = "sHostUserTakeGold";
            }
            if (message.cPlayerAddGold != null && message.hasOwnProperty("cPlayerAddGold")) {
                object.cPlayerAddGold = $root.NT.ClientPlayerAddGold.toObject(message.cPlayerAddGold, options);
                if (options.oneofs)
                    object.action = "cPlayerAddGold";
            }
            if (message.sPlayerAddGold != null && message.hasOwnProperty("sPlayerAddGold")) {
                object.sPlayerAddGold = $root.NT.ServerPlayerAddGold.toObject(message.sPlayerAddGold, options);
                if (options.oneofs)
                    object.action = "sPlayerAddGold";
            }
            if (message.cPlayerTakeGold != null && message.hasOwnProperty("cPlayerTakeGold")) {
                object.cPlayerTakeGold = $root.NT.ClientPlayerTakeGold.toObject(message.cPlayerTakeGold, options);
                if (options.oneofs)
                    object.action = "cPlayerTakeGold";
            }
            if (message.sPlayerTakeGold != null && message.hasOwnProperty("sPlayerTakeGold")) {
                object.sPlayerTakeGold = $root.NT.ServerPlayerTakeGold.toObject(message.sPlayerTakeGold, options);
                if (options.oneofs)
                    object.action = "sPlayerTakeGold";
            }
            if (message.cPlayerAddItem != null && message.hasOwnProperty("cPlayerAddItem")) {
                object.cPlayerAddItem = $root.NT.ClientPlayerAddItem.toObject(message.cPlayerAddItem, options);
                if (options.oneofs)
                    object.action = "cPlayerAddItem";
            }
            if (message.sPlayerAddItem != null && message.hasOwnProperty("sPlayerAddItem")) {
                object.sPlayerAddItem = $root.NT.ServerPlayerAddItem.toObject(message.sPlayerAddItem, options);
                if (options.oneofs)
                    object.action = "sPlayerAddItem";
            }
            if (message.cPlayerTakeItem != null && message.hasOwnProperty("cPlayerTakeItem")) {
                object.cPlayerTakeItem = $root.NT.ClientPlayerTakeItem.toObject(message.cPlayerTakeItem, options);
                if (options.oneofs)
                    object.action = "cPlayerTakeItem";
            }
            if (message.sPlayerTakeItem != null && message.hasOwnProperty("sPlayerTakeItem")) {
                object.sPlayerTakeItem = $root.NT.ServerPlayerTakeItem.toObject(message.sPlayerTakeItem, options);
                if (options.oneofs)
                    object.action = "sPlayerTakeItem";
            }
            if (message.cPlayerPickup != null && message.hasOwnProperty("cPlayerPickup")) {
                object.cPlayerPickup = $root.NT.ClientPlayerPickup.toObject(message.cPlayerPickup, options);
                if (options.oneofs)
                    object.action = "cPlayerPickup";
            }
            if (message.sPlayerPickup != null && message.hasOwnProperty("sPlayerPickup")) {
                object.sPlayerPickup = $root.NT.ServerPlayerPickup.toObject(message.sPlayerPickup, options);
                if (options.oneofs)
                    object.action = "sPlayerPickup";
            }
            if (message.cNemesisAbility != null && message.hasOwnProperty("cNemesisAbility")) {
                object.cNemesisAbility = $root.NT.ClientNemesisAbility.toObject(message.cNemesisAbility, options);
                if (options.oneofs)
                    object.action = "cNemesisAbility";
            }
            if (message.sNemesisAbility != null && message.hasOwnProperty("sNemesisAbility")) {
                object.sNemesisAbility = $root.NT.ServerNemesisAbility.toObject(message.sNemesisAbility, options);
                if (options.oneofs)
                    object.action = "sNemesisAbility";
            }
            if (message.cNemesisPickupItem != null && message.hasOwnProperty("cNemesisPickupItem")) {
                object.cNemesisPickupItem = $root.NT.ClientNemesisPickupItem.toObject(message.cNemesisPickupItem, options);
                if (options.oneofs)
                    object.action = "cNemesisPickupItem";
            }
            if (message.sNemesisPickupItem != null && message.hasOwnProperty("sNemesisPickupItem")) {
                object.sNemesisPickupItem = $root.NT.ServerNemesisPickupItem.toObject(message.sNemesisPickupItem, options);
                if (options.oneofs)
                    object.action = "sNemesisPickupItem";
            }
            if (message.cChat != null && message.hasOwnProperty("cChat")) {
                object.cChat = $root.NT.ClientChat.toObject(message.cChat, options);
                if (options.oneofs)
                    object.action = "cChat";
            }
            if (message.sChat != null && message.hasOwnProperty("sChat")) {
                object.sChat = $root.NT.ServerChat.toObject(message.sChat, options);
                if (options.oneofs)
                    object.action = "sChat";
            }
            if (message.cPlayerDeath != null && message.hasOwnProperty("cPlayerDeath")) {
                object.cPlayerDeath = $root.NT.ClientPlayerDeath.toObject(message.cPlayerDeath, options);
                if (options.oneofs)
                    object.action = "cPlayerDeath";
            }
            if (message.sPlayerDeath != null && message.hasOwnProperty("sPlayerDeath")) {
                object.sPlayerDeath = $root.NT.ServerPlayerDeath.toObject(message.sPlayerDeath, options);
                if (options.oneofs)
                    object.action = "sPlayerDeath";
            }
            if (message.cPlayerNewGamePlus != null && message.hasOwnProperty("cPlayerNewGamePlus")) {
                object.cPlayerNewGamePlus = $root.NT.ClientPlayerNewGamePlus.toObject(message.cPlayerNewGamePlus, options);
                if (options.oneofs)
                    object.action = "cPlayerNewGamePlus";
            }
            if (message.sPlayerNewGamePlus != null && message.hasOwnProperty("sPlayerNewGamePlus")) {
                object.sPlayerNewGamePlus = $root.NT.ServerPlayerNewGamePlus.toObject(message.sPlayerNewGamePlus, options);
                if (options.oneofs)
                    object.action = "sPlayerNewGamePlus";
            }
            if (message.cPlayerSecretHourglass != null && message.hasOwnProperty("cPlayerSecretHourglass")) {
                object.cPlayerSecretHourglass = $root.NT.ClientPlayerSecretHourglass.toObject(message.cPlayerSecretHourglass, options);
                if (options.oneofs)
                    object.action = "cPlayerSecretHourglass";
            }
            if (message.sPlayerSecretHourglass != null && message.hasOwnProperty("sPlayerSecretHourglass")) {
                object.sPlayerSecretHourglass = $root.NT.ServerPlayerSecretHourglass.toObject(message.sPlayerSecretHourglass, options);
                if (options.oneofs)
                    object.action = "sPlayerSecretHourglass";
            }
            if (message.cCustomModEvent != null && message.hasOwnProperty("cCustomModEvent")) {
                object.cCustomModEvent = $root.NT.ClientCustomModEvent.toObject(message.cCustomModEvent, options);
                if (options.oneofs)
                    object.action = "cCustomModEvent";
            }
            if (message.sCustomModEvent != null && message.hasOwnProperty("sCustomModEvent")) {
                object.sCustomModEvent = $root.NT.ServerCustomModEvent.toObject(message.sCustomModEvent, options);
                if (options.oneofs)
                    object.action = "sCustomModEvent";
            }
            if (message.cRespawnPenalty != null && message.hasOwnProperty("cRespawnPenalty")) {
                object.cRespawnPenalty = $root.NT.ClientRespawnPenalty.toObject(message.cRespawnPenalty, options);
                if (options.oneofs)
                    object.action = "cRespawnPenalty";
            }
            if (message.sRespawnPenalty != null && message.hasOwnProperty("sRespawnPenalty")) {
                object.sRespawnPenalty = $root.NT.ServerRespawnPenalty.toObject(message.sRespawnPenalty, options);
                if (options.oneofs)
                    object.action = "sRespawnPenalty";
            }
            if (message.cAngerySteve != null && message.hasOwnProperty("cAngerySteve")) {
                object.cAngerySteve = $root.NT.ClientAngerySteve.toObject(message.cAngerySteve, options);
                if (options.oneofs)
                    object.action = "cAngerySteve";
            }
            if (message.sAngerySteve != null && message.hasOwnProperty("sAngerySteve")) {
                object.sAngerySteve = $root.NT.ServerAngerySteve.toObject(message.sAngerySteve, options);
                if (options.oneofs)
                    object.action = "sAngerySteve";
            }
            if (message.sPlayerPos != null && message.hasOwnProperty("sPlayerPos")) {
                object.sPlayerPos = $root.NT.ServerPlayerPos.toObject(message.sPlayerPos, options);
                if (options.oneofs)
                    object.action = "sPlayerPos";
            }
            return object;
        };

        GameAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        GameAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.GameAction";
        };

        return GameAction;
    })();

    NT.PlayerFrame = (function() {

        function PlayerFrame(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        PlayerFrame.prototype.x = null;
        PlayerFrame.prototype.y = null;
        PlayerFrame.prototype.armR = null;
        PlayerFrame.prototype.armScaleY = null;
        PlayerFrame.prototype.scaleX = null;
        PlayerFrame.prototype.anim = null;
        PlayerFrame.prototype.held = null;

        let $oneOfFields;

        Object.defineProperty(PlayerFrame.prototype, "_x", {
            get: $util.oneOfGetter($oneOfFields = ["x"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Object.defineProperty(PlayerFrame.prototype, "_y", {
            get: $util.oneOfGetter($oneOfFields = ["y"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Object.defineProperty(PlayerFrame.prototype, "_armR", {
            get: $util.oneOfGetter($oneOfFields = ["armR"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Object.defineProperty(PlayerFrame.prototype, "_armScaleY", {
            get: $util.oneOfGetter($oneOfFields = ["armScaleY"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Object.defineProperty(PlayerFrame.prototype, "_scaleX", {
            get: $util.oneOfGetter($oneOfFields = ["scaleX"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Object.defineProperty(PlayerFrame.prototype, "_anim", {
            get: $util.oneOfGetter($oneOfFields = ["anim"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Object.defineProperty(PlayerFrame.prototype, "_held", {
            get: $util.oneOfGetter($oneOfFields = ["held"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        PlayerFrame.create = function create(properties) {
            return new PlayerFrame(properties);
        };

        PlayerFrame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(13).float(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(21).float(message.y);
            if (message.armR != null && Object.hasOwnProperty.call(message, "armR"))
                writer.uint32(29).float(message.armR);
            if (message.armScaleY != null && Object.hasOwnProperty.call(message, "armScaleY"))
                writer.uint32(37).float(message.armScaleY);
            if (message.scaleX != null && Object.hasOwnProperty.call(message, "scaleX"))
                writer.uint32(45).float(message.scaleX);
            if (message.anim != null && Object.hasOwnProperty.call(message, "anim"))
                writer.uint32(48).int32(message.anim);
            if (message.held != null && Object.hasOwnProperty.call(message, "held"))
                writer.uint32(56).int32(message.held);
            return writer;
        };

        PlayerFrame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.PlayerFrame();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.float();
                        break;
                    }
                case 2: {
                        message.y = reader.float();
                        break;
                    }
                case 3: {
                        message.armR = reader.float();
                        break;
                    }
                case 4: {
                        message.armScaleY = reader.float();
                        break;
                    }
                case 5: {
                        message.scaleX = reader.float();
                        break;
                    }
                case 6: {
                        message.anim = reader.int32();
                        break;
                    }
                case 7: {
                        message.held = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        PlayerFrame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.x != null && message.hasOwnProperty("x")) {
                properties._x = 1;
                if (typeof message.x !== "number")
                    return "x: number expected";
            }
            if (message.y != null && message.hasOwnProperty("y")) {
                properties._y = 1;
                if (typeof message.y !== "number")
                    return "y: number expected";
            }
            if (message.armR != null && message.hasOwnProperty("armR")) {
                properties._armR = 1;
                if (typeof message.armR !== "number")
                    return "armR: number expected";
            }
            if (message.armScaleY != null && message.hasOwnProperty("armScaleY")) {
                properties._armScaleY = 1;
                if (typeof message.armScaleY !== "number")
                    return "armScaleY: number expected";
            }
            if (message.scaleX != null && message.hasOwnProperty("scaleX")) {
                properties._scaleX = 1;
                if (typeof message.scaleX !== "number")
                    return "scaleX: number expected";
            }
            if (message.anim != null && message.hasOwnProperty("anim")) {
                properties._anim = 1;
                if (!$util.isInteger(message.anim))
                    return "anim: integer expected";
            }
            if (message.held != null && message.hasOwnProperty("held")) {
                properties._held = 1;
                if (!$util.isInteger(message.held))
                    return "held: integer expected";
            }
            return null;
        };

        PlayerFrame.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.PlayerFrame)
                return object;
            let message = new $root.NT.PlayerFrame();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.armR != null)
                message.armR = Number(object.armR);
            if (object.armScaleY != null)
                message.armScaleY = Number(object.armScaleY);
            if (object.scaleX != null)
                message.scaleX = Number(object.scaleX);
            if (object.anim != null)
                message.anim = object.anim | 0;
            if (object.held != null)
                message.held = object.held | 0;
            return message;
        };

        PlayerFrame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.x != null && message.hasOwnProperty("x")) {
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
                if (options.oneofs)
                    object._x = "x";
            }
            if (message.y != null && message.hasOwnProperty("y")) {
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
                if (options.oneofs)
                    object._y = "y";
            }
            if (message.armR != null && message.hasOwnProperty("armR")) {
                object.armR = options.json && !isFinite(message.armR) ? String(message.armR) : message.armR;
                if (options.oneofs)
                    object._armR = "armR";
            }
            if (message.armScaleY != null && message.hasOwnProperty("armScaleY")) {
                object.armScaleY = options.json && !isFinite(message.armScaleY) ? String(message.armScaleY) : message.armScaleY;
                if (options.oneofs)
                    object._armScaleY = "armScaleY";
            }
            if (message.scaleX != null && message.hasOwnProperty("scaleX")) {
                object.scaleX = options.json && !isFinite(message.scaleX) ? String(message.scaleX) : message.scaleX;
                if (options.oneofs)
                    object._scaleX = "scaleX";
            }
            if (message.anim != null && message.hasOwnProperty("anim")) {
                object.anim = message.anim;
                if (options.oneofs)
                    object._anim = "anim";
            }
            if (message.held != null && message.hasOwnProperty("held")) {
                object.held = message.held;
                if (options.oneofs)
                    object._held = "held";
            }
            return object;
        };

        PlayerFrame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        PlayerFrame.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.PlayerFrame";
        };

        return PlayerFrame;
    })();

    NT.ServerPlayerPos = (function() {

        function ServerPlayerPos(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerPlayerPos.prototype.userId = "";
        ServerPlayerPos.prototype.x = 0;
        ServerPlayerPos.prototype.y = 0;

        ServerPlayerPos.create = function create(properties) {
            return new ServerPlayerPos(properties);
        };

        ServerPlayerPos.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.userId);
            writer.uint32(13).float(message.x);
            writer.uint32(21).float(message.y);
            return writer;
        };

        ServerPlayerPos.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerPlayerPos();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.userId = reader.string();
                        break;
                    }
                case 1: {
                        message.x = reader.float();
                        break;
                    }
                case 2: {
                        message.y = reader.float();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("x"))
                throw $util.ProtocolError("missing required 'x'", { instance: message });
            if (!message.hasOwnProperty("y"))
                throw $util.ProtocolError("missing required 'y'", { instance: message });
            return message;
        };

        ServerPlayerPos.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userId))
                return "userId: string expected";
            if (typeof message.x !== "number")
                return "x: number expected";
            if (typeof message.y !== "number")
                return "y: number expected";
            return null;
        };

        ServerPlayerPos.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerPlayerPos)
                return object;
            let message = new $root.NT.ServerPlayerPos();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            return message;
        };

        ServerPlayerPos.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = "";
                object.x = 0;
                object.y = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            return object;
        };

        ServerPlayerPos.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerPlayerPos.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerPlayerPos";
        };

        return ServerPlayerPos;
    })();

    NT.ClientPlayerMove = (function() {

        function ClientPlayerMove(properties) {
            this.frames = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientPlayerMove.prototype.frames = $util.emptyArray;

        ClientPlayerMove.create = function create(properties) {
            return new ClientPlayerMove(properties);
        };

        ClientPlayerMove.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.frames != null && message.frames.length)
                for (let i = 0; i < message.frames.length; ++i)
                    $root.NT.PlayerFrame.encode(message.frames[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        ClientPlayerMove.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientPlayerMove();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.frames && message.frames.length))
                            message.frames = [];
                        message.frames.push($root.NT.PlayerFrame.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ClientPlayerMove.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.frames != null && message.hasOwnProperty("frames")) {
                if (!Array.isArray(message.frames))
                    return "frames: array expected";
                for (let i = 0; i < message.frames.length; ++i) {
                    let error = $root.NT.PlayerFrame.verify(message.frames[i]);
                    if (error)
                        return "frames." + error;
                }
            }
            return null;
        };

        ClientPlayerMove.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientPlayerMove)
                return object;
            let message = new $root.NT.ClientPlayerMove();
            if (object.frames) {
                if (!Array.isArray(object.frames))
                    throw TypeError(".NT.ClientPlayerMove.frames: array expected");
                message.frames = [];
                for (let i = 0; i < object.frames.length; ++i) {
                    if (typeof object.frames[i] !== "object")
                        throw TypeError(".NT.ClientPlayerMove.frames: object expected");
                    message.frames[i] = $root.NT.PlayerFrame.fromObject(object.frames[i]);
                }
            }
            return message;
        };

        ClientPlayerMove.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.frames = [];
            if (message.frames && message.frames.length) {
                object.frames = [];
                for (let j = 0; j < message.frames.length; ++j)
                    object.frames[j] = $root.NT.PlayerFrame.toObject(message.frames[j], options);
            }
            return object;
        };

        ClientPlayerMove.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientPlayerMove.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientPlayerMove";
        };

        return ClientPlayerMove;
    })();

    NT.ServerPlayerMove = (function() {

        function ServerPlayerMove(properties) {
            this.frames = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerPlayerMove.prototype.userId = "";
        ServerPlayerMove.prototype.frames = $util.emptyArray;

        ServerPlayerMove.create = function create(properties) {
            return new ServerPlayerMove(properties);
        };

        ServerPlayerMove.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.userId);
            if (message.frames != null && message.frames.length)
                for (let i = 0; i < message.frames.length; ++i)
                    $root.NT.PlayerFrame.encode(message.frames[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        ServerPlayerMove.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerPlayerMove();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.userId = reader.string();
                        break;
                    }
                case 1: {
                        if (!(message.frames && message.frames.length))
                            message.frames = [];
                        message.frames.push($root.NT.PlayerFrame.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            return message;
        };

        ServerPlayerMove.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userId))
                return "userId: string expected";
            if (message.frames != null && message.hasOwnProperty("frames")) {
                if (!Array.isArray(message.frames))
                    return "frames: array expected";
                for (let i = 0; i < message.frames.length; ++i) {
                    let error = $root.NT.PlayerFrame.verify(message.frames[i]);
                    if (error)
                        return "frames." + error;
                }
            }
            return null;
        };

        ServerPlayerMove.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerPlayerMove)
                return object;
            let message = new $root.NT.ServerPlayerMove();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.frames) {
                if (!Array.isArray(object.frames))
                    throw TypeError(".NT.ServerPlayerMove.frames: array expected");
                message.frames = [];
                for (let i = 0; i < object.frames.length; ++i) {
                    if (typeof object.frames[i] !== "object")
                        throw TypeError(".NT.ServerPlayerMove.frames: object expected");
                    message.frames[i] = $root.NT.PlayerFrame.fromObject(object.frames[i]);
                }
            }
            return message;
        };

        ServerPlayerMove.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.frames = [];
            if (options.defaults)
                object.userId = "";
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.frames && message.frames.length) {
                object.frames = [];
                for (let j = 0; j < message.frames.length; ++j)
                    object.frames[j] = $root.NT.PlayerFrame.toObject(message.frames[j], options);
            }
            return object;
        };

        ServerPlayerMove.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerPlayerMove.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerPlayerMove";
        };

        return ServerPlayerMove;
    })();

    NT.ClientPlayerUpdate = (function() {

        function ClientPlayerUpdate(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientPlayerUpdate.prototype.curHp = null;
        ClientPlayerUpdate.prototype.maxHp = null;
        ClientPlayerUpdate.prototype.location = null;
        ClientPlayerUpdate.prototype.sampo = null;

        let $oneOfFields;

        Object.defineProperty(ClientPlayerUpdate.prototype, "_curHp", {
            get: $util.oneOfGetter($oneOfFields = ["curHp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Object.defineProperty(ClientPlayerUpdate.prototype, "_maxHp", {
            get: $util.oneOfGetter($oneOfFields = ["maxHp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Object.defineProperty(ClientPlayerUpdate.prototype, "_location", {
            get: $util.oneOfGetter($oneOfFields = ["location"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Object.defineProperty(ClientPlayerUpdate.prototype, "_sampo", {
            get: $util.oneOfGetter($oneOfFields = ["sampo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ClientPlayerUpdate.create = function create(properties) {
            return new ClientPlayerUpdate(properties);
        };

        ClientPlayerUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.curHp != null && Object.hasOwnProperty.call(message, "curHp"))
                writer.uint32(13).float(message.curHp);
            if (message.maxHp != null && Object.hasOwnProperty.call(message, "maxHp"))
                writer.uint32(21).float(message.maxHp);
            if (message.location != null && Object.hasOwnProperty.call(message, "location"))
                writer.uint32(26).string(message.location);
            if (message.sampo != null && Object.hasOwnProperty.call(message, "sampo"))
                writer.uint32(32).bool(message.sampo);
            return writer;
        };

        ClientPlayerUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientPlayerUpdate();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.curHp = reader.float();
                        break;
                    }
                case 2: {
                        message.maxHp = reader.float();
                        break;
                    }
                case 3: {
                        message.location = reader.string();
                        break;
                    }
                case 4: {
                        message.sampo = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ClientPlayerUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.curHp != null && message.hasOwnProperty("curHp")) {
                properties._curHp = 1;
                if (typeof message.curHp !== "number")
                    return "curHp: number expected";
            }
            if (message.maxHp != null && message.hasOwnProperty("maxHp")) {
                properties._maxHp = 1;
                if (typeof message.maxHp !== "number")
                    return "maxHp: number expected";
            }
            if (message.location != null && message.hasOwnProperty("location")) {
                properties._location = 1;
                if (!$util.isString(message.location))
                    return "location: string expected";
            }
            if (message.sampo != null && message.hasOwnProperty("sampo")) {
                properties._sampo = 1;
                if (typeof message.sampo !== "boolean")
                    return "sampo: boolean expected";
            }
            return null;
        };

        ClientPlayerUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientPlayerUpdate)
                return object;
            let message = new $root.NT.ClientPlayerUpdate();
            if (object.curHp != null)
                message.curHp = Number(object.curHp);
            if (object.maxHp != null)
                message.maxHp = Number(object.maxHp);
            if (object.location != null)
                message.location = String(object.location);
            if (object.sampo != null)
                message.sampo = Boolean(object.sampo);
            return message;
        };

        ClientPlayerUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.curHp != null && message.hasOwnProperty("curHp")) {
                object.curHp = options.json && !isFinite(message.curHp) ? String(message.curHp) : message.curHp;
                if (options.oneofs)
                    object._curHp = "curHp";
            }
            if (message.maxHp != null && message.hasOwnProperty("maxHp")) {
                object.maxHp = options.json && !isFinite(message.maxHp) ? String(message.maxHp) : message.maxHp;
                if (options.oneofs)
                    object._maxHp = "maxHp";
            }
            if (message.location != null && message.hasOwnProperty("location")) {
                object.location = message.location;
                if (options.oneofs)
                    object._location = "location";
            }
            if (message.sampo != null && message.hasOwnProperty("sampo")) {
                object.sampo = message.sampo;
                if (options.oneofs)
                    object._sampo = "sampo";
            }
            return object;
        };

        ClientPlayerUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientPlayerUpdate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientPlayerUpdate";
        };

        return ClientPlayerUpdate;
    })();

    NT.ServerPlayerUpdate = (function() {

        function ServerPlayerUpdate(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerPlayerUpdate.prototype.userId = "";
        ServerPlayerUpdate.prototype.curHp = null;
        ServerPlayerUpdate.prototype.maxHp = null;
        ServerPlayerUpdate.prototype.location = null;
        ServerPlayerUpdate.prototype.sampo = null;

        let $oneOfFields;

        Object.defineProperty(ServerPlayerUpdate.prototype, "_curHp", {
            get: $util.oneOfGetter($oneOfFields = ["curHp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Object.defineProperty(ServerPlayerUpdate.prototype, "_maxHp", {
            get: $util.oneOfGetter($oneOfFields = ["maxHp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Object.defineProperty(ServerPlayerUpdate.prototype, "_location", {
            get: $util.oneOfGetter($oneOfFields = ["location"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Object.defineProperty(ServerPlayerUpdate.prototype, "_sampo", {
            get: $util.oneOfGetter($oneOfFields = ["sampo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ServerPlayerUpdate.create = function create(properties) {
            return new ServerPlayerUpdate(properties);
        };

        ServerPlayerUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.userId);
            if (message.curHp != null && Object.hasOwnProperty.call(message, "curHp"))
                writer.uint32(13).float(message.curHp);
            if (message.maxHp != null && Object.hasOwnProperty.call(message, "maxHp"))
                writer.uint32(21).float(message.maxHp);
            if (message.location != null && Object.hasOwnProperty.call(message, "location"))
                writer.uint32(26).string(message.location);
            if (message.sampo != null && Object.hasOwnProperty.call(message, "sampo"))
                writer.uint32(32).bool(message.sampo);
            return writer;
        };

        ServerPlayerUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerPlayerUpdate();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.userId = reader.string();
                        break;
                    }
                case 1: {
                        message.curHp = reader.float();
                        break;
                    }
                case 2: {
                        message.maxHp = reader.float();
                        break;
                    }
                case 3: {
                        message.location = reader.string();
                        break;
                    }
                case 4: {
                        message.sampo = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            return message;
        };

        ServerPlayerUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (!$util.isString(message.userId))
                return "userId: string expected";
            if (message.curHp != null && message.hasOwnProperty("curHp")) {
                properties._curHp = 1;
                if (typeof message.curHp !== "number")
                    return "curHp: number expected";
            }
            if (message.maxHp != null && message.hasOwnProperty("maxHp")) {
                properties._maxHp = 1;
                if (typeof message.maxHp !== "number")
                    return "maxHp: number expected";
            }
            if (message.location != null && message.hasOwnProperty("location")) {
                properties._location = 1;
                if (!$util.isString(message.location))
                    return "location: string expected";
            }
            if (message.sampo != null && message.hasOwnProperty("sampo")) {
                properties._sampo = 1;
                if (typeof message.sampo !== "boolean")
                    return "sampo: boolean expected";
            }
            return null;
        };

        ServerPlayerUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerPlayerUpdate)
                return object;
            let message = new $root.NT.ServerPlayerUpdate();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.curHp != null)
                message.curHp = Number(object.curHp);
            if (object.maxHp != null)
                message.maxHp = Number(object.maxHp);
            if (object.location != null)
                message.location = String(object.location);
            if (object.sampo != null)
                message.sampo = Boolean(object.sampo);
            return message;
        };

        ServerPlayerUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.userId = "";
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.curHp != null && message.hasOwnProperty("curHp")) {
                object.curHp = options.json && !isFinite(message.curHp) ? String(message.curHp) : message.curHp;
                if (options.oneofs)
                    object._curHp = "curHp";
            }
            if (message.maxHp != null && message.hasOwnProperty("maxHp")) {
                object.maxHp = options.json && !isFinite(message.maxHp) ? String(message.maxHp) : message.maxHp;
                if (options.oneofs)
                    object._maxHp = "maxHp";
            }
            if (message.location != null && message.hasOwnProperty("location")) {
                object.location = message.location;
                if (options.oneofs)
                    object._location = "location";
            }
            if (message.sampo != null && message.hasOwnProperty("sampo")) {
                object.sampo = message.sampo;
                if (options.oneofs)
                    object._sampo = "sampo";
            }
            return object;
        };

        ServerPlayerUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerPlayerUpdate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerPlayerUpdate";
        };

        return ServerPlayerUpdate;
    })();

    NT.ClientPlayerUpdateInventory = (function() {

        function ClientPlayerUpdateInventory(properties) {
            this.wands = [];
            this.items = [];
            this.spells = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientPlayerUpdateInventory.prototype.wands = $util.emptyArray;
        ClientPlayerUpdateInventory.prototype.items = $util.emptyArray;
        ClientPlayerUpdateInventory.prototype.spells = $util.emptyArray;

        ClientPlayerUpdateInventory.create = function create(properties) {
            return new ClientPlayerUpdateInventory(properties);
        };

        ClientPlayerUpdateInventory.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.wands != null && message.wands.length)
                for (let i = 0; i < message.wands.length; ++i)
                    $root.NT.ClientPlayerUpdateInventory.InventoryWand.encode(message.wands[i], writer.uint32(2).fork()).ldelim();
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.NT.ClientPlayerUpdateInventory.InventoryItem.encode(message.items[i], writer.uint32(10).fork()).ldelim();
            if (message.spells != null && message.spells.length)
                for (let i = 0; i < message.spells.length; ++i)
                    $root.NT.ClientPlayerUpdateInventory.InventorySpell.encode(message.spells[i], writer.uint32(18).fork()).ldelim();
            return writer;
        };

        ClientPlayerUpdateInventory.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientPlayerUpdateInventory();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        if (!(message.wands && message.wands.length))
                            message.wands = [];
                        message.wands.push($root.NT.ClientPlayerUpdateInventory.InventoryWand.decode(reader, reader.uint32()));
                        break;
                    }
                case 1: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.NT.ClientPlayerUpdateInventory.InventoryItem.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        if (!(message.spells && message.spells.length))
                            message.spells = [];
                        message.spells.push($root.NT.ClientPlayerUpdateInventory.InventorySpell.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ClientPlayerUpdateInventory.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.wands != null && message.hasOwnProperty("wands")) {
                if (!Array.isArray(message.wands))
                    return "wands: array expected";
                for (let i = 0; i < message.wands.length; ++i) {
                    let error = $root.NT.ClientPlayerUpdateInventory.InventoryWand.verify(message.wands[i]);
                    if (error)
                        return "wands." + error;
                }
            }
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (let i = 0; i < message.items.length; ++i) {
                    let error = $root.NT.ClientPlayerUpdateInventory.InventoryItem.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            if (message.spells != null && message.hasOwnProperty("spells")) {
                if (!Array.isArray(message.spells))
                    return "spells: array expected";
                for (let i = 0; i < message.spells.length; ++i) {
                    let error = $root.NT.ClientPlayerUpdateInventory.InventorySpell.verify(message.spells[i]);
                    if (error)
                        return "spells." + error;
                }
            }
            return null;
        };

        ClientPlayerUpdateInventory.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientPlayerUpdateInventory)
                return object;
            let message = new $root.NT.ClientPlayerUpdateInventory();
            if (object.wands) {
                if (!Array.isArray(object.wands))
                    throw TypeError(".NT.ClientPlayerUpdateInventory.wands: array expected");
                message.wands = [];
                for (let i = 0; i < object.wands.length; ++i) {
                    if (typeof object.wands[i] !== "object")
                        throw TypeError(".NT.ClientPlayerUpdateInventory.wands: object expected");
                    message.wands[i] = $root.NT.ClientPlayerUpdateInventory.InventoryWand.fromObject(object.wands[i]);
                }
            }
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".NT.ClientPlayerUpdateInventory.items: array expected");
                message.items = [];
                for (let i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".NT.ClientPlayerUpdateInventory.items: object expected");
                    message.items[i] = $root.NT.ClientPlayerUpdateInventory.InventoryItem.fromObject(object.items[i]);
                }
            }
            if (object.spells) {
                if (!Array.isArray(object.spells))
                    throw TypeError(".NT.ClientPlayerUpdateInventory.spells: array expected");
                message.spells = [];
                for (let i = 0; i < object.spells.length; ++i) {
                    if (typeof object.spells[i] !== "object")
                        throw TypeError(".NT.ClientPlayerUpdateInventory.spells: object expected");
                    message.spells[i] = $root.NT.ClientPlayerUpdateInventory.InventorySpell.fromObject(object.spells[i]);
                }
            }
            return message;
        };

        ClientPlayerUpdateInventory.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.wands = [];
                object.items = [];
                object.spells = [];
            }
            if (message.wands && message.wands.length) {
                object.wands = [];
                for (let j = 0; j < message.wands.length; ++j)
                    object.wands[j] = $root.NT.ClientPlayerUpdateInventory.InventoryWand.toObject(message.wands[j], options);
            }
            if (message.items && message.items.length) {
                object.items = [];
                for (let j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.NT.ClientPlayerUpdateInventory.InventoryItem.toObject(message.items[j], options);
            }
            if (message.spells && message.spells.length) {
                object.spells = [];
                for (let j = 0; j < message.spells.length; ++j)
                    object.spells[j] = $root.NT.ClientPlayerUpdateInventory.InventorySpell.toObject(message.spells[j], options);
            }
            return object;
        };

        ClientPlayerUpdateInventory.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientPlayerUpdateInventory.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientPlayerUpdateInventory";
        };

        ClientPlayerUpdateInventory.InventoryWand = (function() {

            function InventoryWand(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            InventoryWand.prototype.index = 0;
            InventoryWand.prototype.wand = null;

            InventoryWand.create = function create(properties) {
                return new InventoryWand(properties);
            };

            InventoryWand.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(0).uint32(message.index);
                $root.NT.Wand.encode(message.wand, writer.uint32(10).fork()).ldelim();
                return writer;
            };

            InventoryWand.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientPlayerUpdateInventory.InventoryWand();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 0: {
                            message.index = reader.uint32();
                            break;
                        }
                    case 1: {
                            message.wand = $root.NT.Wand.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("index"))
                    throw $util.ProtocolError("missing required 'index'", { instance: message });
                if (!message.hasOwnProperty("wand"))
                    throw $util.ProtocolError("missing required 'wand'", { instance: message });
                return message;
            };

            InventoryWand.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
                {
                    let error = $root.NT.Wand.verify(message.wand);
                    if (error)
                        return "wand." + error;
                }
                return null;
            };

            InventoryWand.fromObject = function fromObject(object) {
                if (object instanceof $root.NT.ClientPlayerUpdateInventory.InventoryWand)
                    return object;
                let message = new $root.NT.ClientPlayerUpdateInventory.InventoryWand();
                if (object.index != null)
                    message.index = object.index >>> 0;
                if (object.wand != null) {
                    if (typeof object.wand !== "object")
                        throw TypeError(".NT.ClientPlayerUpdateInventory.InventoryWand.wand: object expected");
                    message.wand = $root.NT.Wand.fromObject(object.wand);
                }
                return message;
            };

            InventoryWand.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.index = 0;
                    object.wand = null;
                }
                if (message.index != null && message.hasOwnProperty("index"))
                    object.index = message.index;
                if (message.wand != null && message.hasOwnProperty("wand"))
                    object.wand = $root.NT.Wand.toObject(message.wand, options);
                return object;
            };

            InventoryWand.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            InventoryWand.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/NT.ClientPlayerUpdateInventory.InventoryWand";
            };

            return InventoryWand;
        })();

        ClientPlayerUpdateInventory.InventoryItem = (function() {

            function InventoryItem(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            InventoryItem.prototype.index = 0;
            InventoryItem.prototype.item = null;

            InventoryItem.create = function create(properties) {
                return new InventoryItem(properties);
            };

            InventoryItem.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(0).uint32(message.index);
                $root.NT.Item.encode(message.item, writer.uint32(10).fork()).ldelim();
                return writer;
            };

            InventoryItem.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientPlayerUpdateInventory.InventoryItem();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 0: {
                            message.index = reader.uint32();
                            break;
                        }
                    case 1: {
                            message.item = $root.NT.Item.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("index"))
                    throw $util.ProtocolError("missing required 'index'", { instance: message });
                if (!message.hasOwnProperty("item"))
                    throw $util.ProtocolError("missing required 'item'", { instance: message });
                return message;
            };

            InventoryItem.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
                {
                    let error = $root.NT.Item.verify(message.item);
                    if (error)
                        return "item." + error;
                }
                return null;
            };

            InventoryItem.fromObject = function fromObject(object) {
                if (object instanceof $root.NT.ClientPlayerUpdateInventory.InventoryItem)
                    return object;
                let message = new $root.NT.ClientPlayerUpdateInventory.InventoryItem();
                if (object.index != null)
                    message.index = object.index >>> 0;
                if (object.item != null) {
                    if (typeof object.item !== "object")
                        throw TypeError(".NT.ClientPlayerUpdateInventory.InventoryItem.item: object expected");
                    message.item = $root.NT.Item.fromObject(object.item);
                }
                return message;
            };

            InventoryItem.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.index = 0;
                    object.item = null;
                }
                if (message.index != null && message.hasOwnProperty("index"))
                    object.index = message.index;
                if (message.item != null && message.hasOwnProperty("item"))
                    object.item = $root.NT.Item.toObject(message.item, options);
                return object;
            };

            InventoryItem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            InventoryItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/NT.ClientPlayerUpdateInventory.InventoryItem";
            };

            return InventoryItem;
        })();

        ClientPlayerUpdateInventory.InventorySpell = (function() {

            function InventorySpell(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            InventorySpell.prototype.index = 0;
            InventorySpell.prototype.spell = null;

            InventorySpell.create = function create(properties) {
                return new InventorySpell(properties);
            };

            InventorySpell.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(0).uint32(message.index);
                $root.NT.Spell.encode(message.spell, writer.uint32(10).fork()).ldelim();
                return writer;
            };

            InventorySpell.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientPlayerUpdateInventory.InventorySpell();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 0: {
                            message.index = reader.uint32();
                            break;
                        }
                    case 1: {
                            message.spell = $root.NT.Spell.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("index"))
                    throw $util.ProtocolError("missing required 'index'", { instance: message });
                if (!message.hasOwnProperty("spell"))
                    throw $util.ProtocolError("missing required 'spell'", { instance: message });
                return message;
            };

            InventorySpell.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
                {
                    let error = $root.NT.Spell.verify(message.spell);
                    if (error)
                        return "spell." + error;
                }
                return null;
            };

            InventorySpell.fromObject = function fromObject(object) {
                if (object instanceof $root.NT.ClientPlayerUpdateInventory.InventorySpell)
                    return object;
                let message = new $root.NT.ClientPlayerUpdateInventory.InventorySpell();
                if (object.index != null)
                    message.index = object.index >>> 0;
                if (object.spell != null) {
                    if (typeof object.spell !== "object")
                        throw TypeError(".NT.ClientPlayerUpdateInventory.InventorySpell.spell: object expected");
                    message.spell = $root.NT.Spell.fromObject(object.spell);
                }
                return message;
            };

            InventorySpell.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.index = 0;
                    object.spell = null;
                }
                if (message.index != null && message.hasOwnProperty("index"))
                    object.index = message.index;
                if (message.spell != null && message.hasOwnProperty("spell"))
                    object.spell = $root.NT.Spell.toObject(message.spell, options);
                return object;
            };

            InventorySpell.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            InventorySpell.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/NT.ClientPlayerUpdateInventory.InventorySpell";
            };

            return InventorySpell;
        })();

        return ClientPlayerUpdateInventory;
    })();

    NT.ServerPlayerUpdateInventory = (function() {

        function ServerPlayerUpdateInventory(properties) {
            this.wands = [];
            this.items = [];
            this.spells = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerPlayerUpdateInventory.prototype.userId = "";
        ServerPlayerUpdateInventory.prototype.wands = $util.emptyArray;
        ServerPlayerUpdateInventory.prototype.items = $util.emptyArray;
        ServerPlayerUpdateInventory.prototype.spells = $util.emptyArray;

        ServerPlayerUpdateInventory.create = function create(properties) {
            return new ServerPlayerUpdateInventory(properties);
        };

        ServerPlayerUpdateInventory.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.userId);
            if (message.wands != null && message.wands.length)
                for (let i = 0; i < message.wands.length; ++i)
                    $root.NT.ServerPlayerUpdateInventory.InventoryWand.encode(message.wands[i], writer.uint32(10).fork()).ldelim();
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.NT.ServerPlayerUpdateInventory.InventoryItem.encode(message.items[i], writer.uint32(18).fork()).ldelim();
            if (message.spells != null && message.spells.length)
                for (let i = 0; i < message.spells.length; ++i)
                    $root.NT.ServerPlayerUpdateInventory.InventorySpell.encode(message.spells[i], writer.uint32(26).fork()).ldelim();
            return writer;
        };

        ServerPlayerUpdateInventory.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerPlayerUpdateInventory();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.userId = reader.string();
                        break;
                    }
                case 1: {
                        if (!(message.wands && message.wands.length))
                            message.wands = [];
                        message.wands.push($root.NT.ServerPlayerUpdateInventory.InventoryWand.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.NT.ServerPlayerUpdateInventory.InventoryItem.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        if (!(message.spells && message.spells.length))
                            message.spells = [];
                        message.spells.push($root.NT.ServerPlayerUpdateInventory.InventorySpell.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            return message;
        };

        ServerPlayerUpdateInventory.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userId))
                return "userId: string expected";
            if (message.wands != null && message.hasOwnProperty("wands")) {
                if (!Array.isArray(message.wands))
                    return "wands: array expected";
                for (let i = 0; i < message.wands.length; ++i) {
                    let error = $root.NT.ServerPlayerUpdateInventory.InventoryWand.verify(message.wands[i]);
                    if (error)
                        return "wands." + error;
                }
            }
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (let i = 0; i < message.items.length; ++i) {
                    let error = $root.NT.ServerPlayerUpdateInventory.InventoryItem.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            if (message.spells != null && message.hasOwnProperty("spells")) {
                if (!Array.isArray(message.spells))
                    return "spells: array expected";
                for (let i = 0; i < message.spells.length; ++i) {
                    let error = $root.NT.ServerPlayerUpdateInventory.InventorySpell.verify(message.spells[i]);
                    if (error)
                        return "spells." + error;
                }
            }
            return null;
        };

        ServerPlayerUpdateInventory.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerPlayerUpdateInventory)
                return object;
            let message = new $root.NT.ServerPlayerUpdateInventory();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.wands) {
                if (!Array.isArray(object.wands))
                    throw TypeError(".NT.ServerPlayerUpdateInventory.wands: array expected");
                message.wands = [];
                for (let i = 0; i < object.wands.length; ++i) {
                    if (typeof object.wands[i] !== "object")
                        throw TypeError(".NT.ServerPlayerUpdateInventory.wands: object expected");
                    message.wands[i] = $root.NT.ServerPlayerUpdateInventory.InventoryWand.fromObject(object.wands[i]);
                }
            }
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".NT.ServerPlayerUpdateInventory.items: array expected");
                message.items = [];
                for (let i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".NT.ServerPlayerUpdateInventory.items: object expected");
                    message.items[i] = $root.NT.ServerPlayerUpdateInventory.InventoryItem.fromObject(object.items[i]);
                }
            }
            if (object.spells) {
                if (!Array.isArray(object.spells))
                    throw TypeError(".NT.ServerPlayerUpdateInventory.spells: array expected");
                message.spells = [];
                for (let i = 0; i < object.spells.length; ++i) {
                    if (typeof object.spells[i] !== "object")
                        throw TypeError(".NT.ServerPlayerUpdateInventory.spells: object expected");
                    message.spells[i] = $root.NT.ServerPlayerUpdateInventory.InventorySpell.fromObject(object.spells[i]);
                }
            }
            return message;
        };

        ServerPlayerUpdateInventory.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.wands = [];
                object.items = [];
                object.spells = [];
            }
            if (options.defaults)
                object.userId = "";
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.wands && message.wands.length) {
                object.wands = [];
                for (let j = 0; j < message.wands.length; ++j)
                    object.wands[j] = $root.NT.ServerPlayerUpdateInventory.InventoryWand.toObject(message.wands[j], options);
            }
            if (message.items && message.items.length) {
                object.items = [];
                for (let j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.NT.ServerPlayerUpdateInventory.InventoryItem.toObject(message.items[j], options);
            }
            if (message.spells && message.spells.length) {
                object.spells = [];
                for (let j = 0; j < message.spells.length; ++j)
                    object.spells[j] = $root.NT.ServerPlayerUpdateInventory.InventorySpell.toObject(message.spells[j], options);
            }
            return object;
        };

        ServerPlayerUpdateInventory.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerPlayerUpdateInventory.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerPlayerUpdateInventory";
        };

        ServerPlayerUpdateInventory.InventoryWand = (function() {

            function InventoryWand(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            InventoryWand.prototype.index = 0;
            InventoryWand.prototype.wand = null;

            InventoryWand.create = function create(properties) {
                return new InventoryWand(properties);
            };

            InventoryWand.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(0).uint32(message.index);
                $root.NT.Wand.encode(message.wand, writer.uint32(10).fork()).ldelim();
                return writer;
            };

            InventoryWand.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerPlayerUpdateInventory.InventoryWand();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 0: {
                            message.index = reader.uint32();
                            break;
                        }
                    case 1: {
                            message.wand = $root.NT.Wand.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("index"))
                    throw $util.ProtocolError("missing required 'index'", { instance: message });
                if (!message.hasOwnProperty("wand"))
                    throw $util.ProtocolError("missing required 'wand'", { instance: message });
                return message;
            };

            InventoryWand.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
                {
                    let error = $root.NT.Wand.verify(message.wand);
                    if (error)
                        return "wand." + error;
                }
                return null;
            };

            InventoryWand.fromObject = function fromObject(object) {
                if (object instanceof $root.NT.ServerPlayerUpdateInventory.InventoryWand)
                    return object;
                let message = new $root.NT.ServerPlayerUpdateInventory.InventoryWand();
                if (object.index != null)
                    message.index = object.index >>> 0;
                if (object.wand != null) {
                    if (typeof object.wand !== "object")
                        throw TypeError(".NT.ServerPlayerUpdateInventory.InventoryWand.wand: object expected");
                    message.wand = $root.NT.Wand.fromObject(object.wand);
                }
                return message;
            };

            InventoryWand.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.index = 0;
                    object.wand = null;
                }
                if (message.index != null && message.hasOwnProperty("index"))
                    object.index = message.index;
                if (message.wand != null && message.hasOwnProperty("wand"))
                    object.wand = $root.NT.Wand.toObject(message.wand, options);
                return object;
            };

            InventoryWand.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            InventoryWand.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/NT.ServerPlayerUpdateInventory.InventoryWand";
            };

            return InventoryWand;
        })();

        ServerPlayerUpdateInventory.InventoryItem = (function() {

            function InventoryItem(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            InventoryItem.prototype.index = 0;
            InventoryItem.prototype.item = null;

            InventoryItem.create = function create(properties) {
                return new InventoryItem(properties);
            };

            InventoryItem.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(0).uint32(message.index);
                $root.NT.Item.encode(message.item, writer.uint32(10).fork()).ldelim();
                return writer;
            };

            InventoryItem.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerPlayerUpdateInventory.InventoryItem();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 0: {
                            message.index = reader.uint32();
                            break;
                        }
                    case 1: {
                            message.item = $root.NT.Item.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("index"))
                    throw $util.ProtocolError("missing required 'index'", { instance: message });
                if (!message.hasOwnProperty("item"))
                    throw $util.ProtocolError("missing required 'item'", { instance: message });
                return message;
            };

            InventoryItem.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
                {
                    let error = $root.NT.Item.verify(message.item);
                    if (error)
                        return "item." + error;
                }
                return null;
            };

            InventoryItem.fromObject = function fromObject(object) {
                if (object instanceof $root.NT.ServerPlayerUpdateInventory.InventoryItem)
                    return object;
                let message = new $root.NT.ServerPlayerUpdateInventory.InventoryItem();
                if (object.index != null)
                    message.index = object.index >>> 0;
                if (object.item != null) {
                    if (typeof object.item !== "object")
                        throw TypeError(".NT.ServerPlayerUpdateInventory.InventoryItem.item: object expected");
                    message.item = $root.NT.Item.fromObject(object.item);
                }
                return message;
            };

            InventoryItem.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.index = 0;
                    object.item = null;
                }
                if (message.index != null && message.hasOwnProperty("index"))
                    object.index = message.index;
                if (message.item != null && message.hasOwnProperty("item"))
                    object.item = $root.NT.Item.toObject(message.item, options);
                return object;
            };

            InventoryItem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            InventoryItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/NT.ServerPlayerUpdateInventory.InventoryItem";
            };

            return InventoryItem;
        })();

        ServerPlayerUpdateInventory.InventorySpell = (function() {

            function InventorySpell(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            InventorySpell.prototype.index = 0;
            InventorySpell.prototype.spell = null;

            InventorySpell.create = function create(properties) {
                return new InventorySpell(properties);
            };

            InventorySpell.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(0).uint32(message.index);
                $root.NT.Spell.encode(message.spell, writer.uint32(10).fork()).ldelim();
                return writer;
            };

            InventorySpell.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerPlayerUpdateInventory.InventorySpell();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 0: {
                            message.index = reader.uint32();
                            break;
                        }
                    case 1: {
                            message.spell = $root.NT.Spell.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("index"))
                    throw $util.ProtocolError("missing required 'index'", { instance: message });
                if (!message.hasOwnProperty("spell"))
                    throw $util.ProtocolError("missing required 'spell'", { instance: message });
                return message;
            };

            InventorySpell.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
                {
                    let error = $root.NT.Spell.verify(message.spell);
                    if (error)
                        return "spell." + error;
                }
                return null;
            };

            InventorySpell.fromObject = function fromObject(object) {
                if (object instanceof $root.NT.ServerPlayerUpdateInventory.InventorySpell)
                    return object;
                let message = new $root.NT.ServerPlayerUpdateInventory.InventorySpell();
                if (object.index != null)
                    message.index = object.index >>> 0;
                if (object.spell != null) {
                    if (typeof object.spell !== "object")
                        throw TypeError(".NT.ServerPlayerUpdateInventory.InventorySpell.spell: object expected");
                    message.spell = $root.NT.Spell.fromObject(object.spell);
                }
                return message;
            };

            InventorySpell.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.index = 0;
                    object.spell = null;
                }
                if (message.index != null && message.hasOwnProperty("index"))
                    object.index = message.index;
                if (message.spell != null && message.hasOwnProperty("spell"))
                    object.spell = $root.NT.Spell.toObject(message.spell, options);
                return object;
            };

            InventorySpell.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            InventorySpell.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/NT.ServerPlayerUpdateInventory.InventorySpell";
            };

            return InventorySpell;
        })();

        return ServerPlayerUpdateInventory;
    })();

    NT.ClientHostItemBank = (function() {

        function ClientHostItemBank(properties) {
            this.wands = [];
            this.spells = [];
            this.items = [];
            this.objects = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientHostItemBank.prototype.wands = $util.emptyArray;
        ClientHostItemBank.prototype.spells = $util.emptyArray;
        ClientHostItemBank.prototype.items = $util.emptyArray;
        ClientHostItemBank.prototype.gold = 0;
        ClientHostItemBank.prototype.objects = $util.emptyArray;

        ClientHostItemBank.create = function create(properties) {
            return new ClientHostItemBank(properties);
        };

        ClientHostItemBank.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.wands != null && message.wands.length)
                for (let i = 0; i < message.wands.length; ++i)
                    $root.NT.Wand.encode(message.wands[i], writer.uint32(10).fork()).ldelim();
            if (message.spells != null && message.spells.length)
                for (let i = 0; i < message.spells.length; ++i)
                    $root.NT.Spell.encode(message.spells[i], writer.uint32(18).fork()).ldelim();
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.NT.Item.encode(message.items[i], writer.uint32(26).fork()).ldelim();
            if (message.gold != null && Object.hasOwnProperty.call(message, "gold"))
                writer.uint32(32).uint32(message.gold);
            if (message.objects != null && message.objects.length)
                for (let i = 0; i < message.objects.length; ++i)
                    $root.NT.EntityItem.encode(message.objects[i], writer.uint32(42).fork()).ldelim();
            return writer;
        };

        ClientHostItemBank.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientHostItemBank();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.wands && message.wands.length))
                            message.wands = [];
                        message.wands.push($root.NT.Wand.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        if (!(message.spells && message.spells.length))
                            message.spells = [];
                        message.spells.push($root.NT.Spell.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.NT.Item.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        message.gold = reader.uint32();
                        break;
                    }
                case 5: {
                        if (!(message.objects && message.objects.length))
                            message.objects = [];
                        message.objects.push($root.NT.EntityItem.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ClientHostItemBank.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.wands != null && message.hasOwnProperty("wands")) {
                if (!Array.isArray(message.wands))
                    return "wands: array expected";
                for (let i = 0; i < message.wands.length; ++i) {
                    let error = $root.NT.Wand.verify(message.wands[i]);
                    if (error)
                        return "wands." + error;
                }
            }
            if (message.spells != null && message.hasOwnProperty("spells")) {
                if (!Array.isArray(message.spells))
                    return "spells: array expected";
                for (let i = 0; i < message.spells.length; ++i) {
                    let error = $root.NT.Spell.verify(message.spells[i]);
                    if (error)
                        return "spells." + error;
                }
            }
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (let i = 0; i < message.items.length; ++i) {
                    let error = $root.NT.Item.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (!$util.isInteger(message.gold))
                    return "gold: integer expected";
            if (message.objects != null && message.hasOwnProperty("objects")) {
                if (!Array.isArray(message.objects))
                    return "objects: array expected";
                for (let i = 0; i < message.objects.length; ++i) {
                    let error = $root.NT.EntityItem.verify(message.objects[i]);
                    if (error)
                        return "objects." + error;
                }
            }
            return null;
        };

        ClientHostItemBank.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientHostItemBank)
                return object;
            let message = new $root.NT.ClientHostItemBank();
            if (object.wands) {
                if (!Array.isArray(object.wands))
                    throw TypeError(".NT.ClientHostItemBank.wands: array expected");
                message.wands = [];
                for (let i = 0; i < object.wands.length; ++i) {
                    if (typeof object.wands[i] !== "object")
                        throw TypeError(".NT.ClientHostItemBank.wands: object expected");
                    message.wands[i] = $root.NT.Wand.fromObject(object.wands[i]);
                }
            }
            if (object.spells) {
                if (!Array.isArray(object.spells))
                    throw TypeError(".NT.ClientHostItemBank.spells: array expected");
                message.spells = [];
                for (let i = 0; i < object.spells.length; ++i) {
                    if (typeof object.spells[i] !== "object")
                        throw TypeError(".NT.ClientHostItemBank.spells: object expected");
                    message.spells[i] = $root.NT.Spell.fromObject(object.spells[i]);
                }
            }
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".NT.ClientHostItemBank.items: array expected");
                message.items = [];
                for (let i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".NT.ClientHostItemBank.items: object expected");
                    message.items[i] = $root.NT.Item.fromObject(object.items[i]);
                }
            }
            if (object.gold != null)
                message.gold = object.gold >>> 0;
            if (object.objects) {
                if (!Array.isArray(object.objects))
                    throw TypeError(".NT.ClientHostItemBank.objects: array expected");
                message.objects = [];
                for (let i = 0; i < object.objects.length; ++i) {
                    if (typeof object.objects[i] !== "object")
                        throw TypeError(".NT.ClientHostItemBank.objects: object expected");
                    message.objects[i] = $root.NT.EntityItem.fromObject(object.objects[i]);
                }
            }
            return message;
        };

        ClientHostItemBank.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.wands = [];
                object.spells = [];
                object.items = [];
                object.objects = [];
            }
            if (options.defaults)
                object.gold = 0;
            if (message.wands && message.wands.length) {
                object.wands = [];
                for (let j = 0; j < message.wands.length; ++j)
                    object.wands[j] = $root.NT.Wand.toObject(message.wands[j], options);
            }
            if (message.spells && message.spells.length) {
                object.spells = [];
                for (let j = 0; j < message.spells.length; ++j)
                    object.spells[j] = $root.NT.Spell.toObject(message.spells[j], options);
            }
            if (message.items && message.items.length) {
                object.items = [];
                for (let j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.NT.Item.toObject(message.items[j], options);
            }
            if (message.gold != null && message.hasOwnProperty("gold"))
                object.gold = message.gold;
            if (message.objects && message.objects.length) {
                object.objects = [];
                for (let j = 0; j < message.objects.length; ++j)
                    object.objects[j] = $root.NT.EntityItem.toObject(message.objects[j], options);
            }
            return object;
        };

        ClientHostItemBank.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientHostItemBank.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientHostItemBank";
        };

        return ClientHostItemBank;
    })();

    NT.ServerHostItemBank = (function() {

        function ServerHostItemBank(properties) {
            this.wands = [];
            this.spells = [];
            this.items = [];
            this.objects = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerHostItemBank.prototype.wands = $util.emptyArray;
        ServerHostItemBank.prototype.spells = $util.emptyArray;
        ServerHostItemBank.prototype.items = $util.emptyArray;
        ServerHostItemBank.prototype.gold = 0;
        ServerHostItemBank.prototype.objects = $util.emptyArray;

        ServerHostItemBank.create = function create(properties) {
            return new ServerHostItemBank(properties);
        };

        ServerHostItemBank.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.wands != null && message.wands.length)
                for (let i = 0; i < message.wands.length; ++i)
                    $root.NT.Wand.encode(message.wands[i], writer.uint32(10).fork()).ldelim();
            if (message.spells != null && message.spells.length)
                for (let i = 0; i < message.spells.length; ++i)
                    $root.NT.Spell.encode(message.spells[i], writer.uint32(18).fork()).ldelim();
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.NT.Item.encode(message.items[i], writer.uint32(26).fork()).ldelim();
            if (message.gold != null && Object.hasOwnProperty.call(message, "gold"))
                writer.uint32(32).uint32(message.gold);
            if (message.objects != null && message.objects.length)
                for (let i = 0; i < message.objects.length; ++i)
                    $root.NT.EntityItem.encode(message.objects[i], writer.uint32(42).fork()).ldelim();
            return writer;
        };

        ServerHostItemBank.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerHostItemBank();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.wands && message.wands.length))
                            message.wands = [];
                        message.wands.push($root.NT.Wand.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        if (!(message.spells && message.spells.length))
                            message.spells = [];
                        message.spells.push($root.NT.Spell.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.NT.Item.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        message.gold = reader.uint32();
                        break;
                    }
                case 5: {
                        if (!(message.objects && message.objects.length))
                            message.objects = [];
                        message.objects.push($root.NT.EntityItem.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ServerHostItemBank.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.wands != null && message.hasOwnProperty("wands")) {
                if (!Array.isArray(message.wands))
                    return "wands: array expected";
                for (let i = 0; i < message.wands.length; ++i) {
                    let error = $root.NT.Wand.verify(message.wands[i]);
                    if (error)
                        return "wands." + error;
                }
            }
            if (message.spells != null && message.hasOwnProperty("spells")) {
                if (!Array.isArray(message.spells))
                    return "spells: array expected";
                for (let i = 0; i < message.spells.length; ++i) {
                    let error = $root.NT.Spell.verify(message.spells[i]);
                    if (error)
                        return "spells." + error;
                }
            }
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (let i = 0; i < message.items.length; ++i) {
                    let error = $root.NT.Item.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (!$util.isInteger(message.gold))
                    return "gold: integer expected";
            if (message.objects != null && message.hasOwnProperty("objects")) {
                if (!Array.isArray(message.objects))
                    return "objects: array expected";
                for (let i = 0; i < message.objects.length; ++i) {
                    let error = $root.NT.EntityItem.verify(message.objects[i]);
                    if (error)
                        return "objects." + error;
                }
            }
            return null;
        };

        ServerHostItemBank.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerHostItemBank)
                return object;
            let message = new $root.NT.ServerHostItemBank();
            if (object.wands) {
                if (!Array.isArray(object.wands))
                    throw TypeError(".NT.ServerHostItemBank.wands: array expected");
                message.wands = [];
                for (let i = 0; i < object.wands.length; ++i) {
                    if (typeof object.wands[i] !== "object")
                        throw TypeError(".NT.ServerHostItemBank.wands: object expected");
                    message.wands[i] = $root.NT.Wand.fromObject(object.wands[i]);
                }
            }
            if (object.spells) {
                if (!Array.isArray(object.spells))
                    throw TypeError(".NT.ServerHostItemBank.spells: array expected");
                message.spells = [];
                for (let i = 0; i < object.spells.length; ++i) {
                    if (typeof object.spells[i] !== "object")
                        throw TypeError(".NT.ServerHostItemBank.spells: object expected");
                    message.spells[i] = $root.NT.Spell.fromObject(object.spells[i]);
                }
            }
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".NT.ServerHostItemBank.items: array expected");
                message.items = [];
                for (let i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".NT.ServerHostItemBank.items: object expected");
                    message.items[i] = $root.NT.Item.fromObject(object.items[i]);
                }
            }
            if (object.gold != null)
                message.gold = object.gold >>> 0;
            if (object.objects) {
                if (!Array.isArray(object.objects))
                    throw TypeError(".NT.ServerHostItemBank.objects: array expected");
                message.objects = [];
                for (let i = 0; i < object.objects.length; ++i) {
                    if (typeof object.objects[i] !== "object")
                        throw TypeError(".NT.ServerHostItemBank.objects: object expected");
                    message.objects[i] = $root.NT.EntityItem.fromObject(object.objects[i]);
                }
            }
            return message;
        };

        ServerHostItemBank.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.wands = [];
                object.spells = [];
                object.items = [];
                object.objects = [];
            }
            if (options.defaults)
                object.gold = 0;
            if (message.wands && message.wands.length) {
                object.wands = [];
                for (let j = 0; j < message.wands.length; ++j)
                    object.wands[j] = $root.NT.Wand.toObject(message.wands[j], options);
            }
            if (message.spells && message.spells.length) {
                object.spells = [];
                for (let j = 0; j < message.spells.length; ++j)
                    object.spells[j] = $root.NT.Spell.toObject(message.spells[j], options);
            }
            if (message.items && message.items.length) {
                object.items = [];
                for (let j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.NT.Item.toObject(message.items[j], options);
            }
            if (message.gold != null && message.hasOwnProperty("gold"))
                object.gold = message.gold;
            if (message.objects && message.objects.length) {
                object.objects = [];
                for (let j = 0; j < message.objects.length; ++j)
                    object.objects[j] = $root.NT.EntityItem.toObject(message.objects[j], options);
            }
            return object;
        };

        ServerHostItemBank.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerHostItemBank.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerHostItemBank";
        };

        return ServerHostItemBank;
    })();

    NT.ClientHostUserTake = (function() {

        function ClientHostUserTake(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientHostUserTake.prototype.userId = "";
        ClientHostUserTake.prototype.id = "";
        ClientHostUserTake.prototype.success = false;

        ClientHostUserTake.create = function create(properties) {
            return new ClientHostUserTake(properties);
        };

        ClientHostUserTake.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.userId);
            writer.uint32(10).string(message.id);
            writer.uint32(16).bool(message.success);
            return writer;
        };

        ClientHostUserTake.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientHostUserTake();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.userId = reader.string();
                        break;
                    }
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.success = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("success"))
                throw $util.ProtocolError("missing required 'success'", { instance: message });
            return message;
        };

        ClientHostUserTake.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userId))
                return "userId: string expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
            return null;
        };

        ClientHostUserTake.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientHostUserTake)
                return object;
            let message = new $root.NT.ClientHostUserTake();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.id != null)
                message.id = String(object.id);
            if (object.success != null)
                message.success = Boolean(object.success);
            return message;
        };

        ClientHostUserTake.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = "";
                object.id = "";
                object.success = false;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            return object;
        };

        ClientHostUserTake.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientHostUserTake.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientHostUserTake";
        };

        return ClientHostUserTake;
    })();

    NT.ServerHostUserTake = (function() {

        function ServerHostUserTake(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerHostUserTake.prototype.userId = "";
        ServerHostUserTake.prototype.id = "";
        ServerHostUserTake.prototype.success = false;

        ServerHostUserTake.create = function create(properties) {
            return new ServerHostUserTake(properties);
        };

        ServerHostUserTake.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.userId);
            writer.uint32(10).string(message.id);
            writer.uint32(16).bool(message.success);
            return writer;
        };

        ServerHostUserTake.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerHostUserTake();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.userId = reader.string();
                        break;
                    }
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.success = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("success"))
                throw $util.ProtocolError("missing required 'success'", { instance: message });
            return message;
        };

        ServerHostUserTake.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userId))
                return "userId: string expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
            return null;
        };

        ServerHostUserTake.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerHostUserTake)
                return object;
            let message = new $root.NT.ServerHostUserTake();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.id != null)
                message.id = String(object.id);
            if (object.success != null)
                message.success = Boolean(object.success);
            return message;
        };

        ServerHostUserTake.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = "";
                object.id = "";
                object.success = false;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            return object;
        };

        ServerHostUserTake.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerHostUserTake.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerHostUserTake";
        };

        return ServerHostUserTake;
    })();

    NT.ClientHostUserTakeGold = (function() {

        function ClientHostUserTakeGold(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientHostUserTakeGold.prototype.userId = "";
        ClientHostUserTakeGold.prototype.amount = 0;
        ClientHostUserTakeGold.prototype.success = false;

        ClientHostUserTakeGold.create = function create(properties) {
            return new ClientHostUserTakeGold(properties);
        };

        ClientHostUserTakeGold.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.userId);
            writer.uint32(8).uint32(message.amount);
            writer.uint32(16).bool(message.success);
            return writer;
        };

        ClientHostUserTakeGold.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientHostUserTakeGold();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.userId = reader.string();
                        break;
                    }
                case 1: {
                        message.amount = reader.uint32();
                        break;
                    }
                case 2: {
                        message.success = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("amount"))
                throw $util.ProtocolError("missing required 'amount'", { instance: message });
            if (!message.hasOwnProperty("success"))
                throw $util.ProtocolError("missing required 'success'", { instance: message });
            return message;
        };

        ClientHostUserTakeGold.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userId))
                return "userId: string expected";
            if (!$util.isInteger(message.amount))
                return "amount: integer expected";
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
            return null;
        };

        ClientHostUserTakeGold.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientHostUserTakeGold)
                return object;
            let message = new $root.NT.ClientHostUserTakeGold();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.amount != null)
                message.amount = object.amount >>> 0;
            if (object.success != null)
                message.success = Boolean(object.success);
            return message;
        };

        ClientHostUserTakeGold.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = "";
                object.amount = 0;
                object.success = false;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = message.amount;
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            return object;
        };

        ClientHostUserTakeGold.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientHostUserTakeGold.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientHostUserTakeGold";
        };

        return ClientHostUserTakeGold;
    })();

    NT.ServerHostUserTakeGold = (function() {

        function ServerHostUserTakeGold(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerHostUserTakeGold.prototype.userId = "";
        ServerHostUserTakeGold.prototype.amount = 0;
        ServerHostUserTakeGold.prototype.success = false;

        ServerHostUserTakeGold.create = function create(properties) {
            return new ServerHostUserTakeGold(properties);
        };

        ServerHostUserTakeGold.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.userId);
            writer.uint32(8).uint32(message.amount);
            writer.uint32(16).bool(message.success);
            return writer;
        };

        ServerHostUserTakeGold.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerHostUserTakeGold();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.userId = reader.string();
                        break;
                    }
                case 1: {
                        message.amount = reader.uint32();
                        break;
                    }
                case 2: {
                        message.success = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("amount"))
                throw $util.ProtocolError("missing required 'amount'", { instance: message });
            if (!message.hasOwnProperty("success"))
                throw $util.ProtocolError("missing required 'success'", { instance: message });
            return message;
        };

        ServerHostUserTakeGold.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userId))
                return "userId: string expected";
            if (!$util.isInteger(message.amount))
                return "amount: integer expected";
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
            return null;
        };

        ServerHostUserTakeGold.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerHostUserTakeGold)
                return object;
            let message = new $root.NT.ServerHostUserTakeGold();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.amount != null)
                message.amount = object.amount >>> 0;
            if (object.success != null)
                message.success = Boolean(object.success);
            return message;
        };

        ServerHostUserTakeGold.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = "";
                object.amount = 0;
                object.success = false;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = message.amount;
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            return object;
        };

        ServerHostUserTakeGold.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerHostUserTakeGold.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerHostUserTakeGold";
        };

        return ServerHostUserTakeGold;
    })();

    NT.ClientPlayerAddGold = (function() {

        function ClientPlayerAddGold(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientPlayerAddGold.prototype.amount = 0;

        ClientPlayerAddGold.create = function create(properties) {
            return new ClientPlayerAddGold(properties);
        };

        ClientPlayerAddGold.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(0).uint32(message.amount);
            return writer;
        };

        ClientPlayerAddGold.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientPlayerAddGold();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.amount = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("amount"))
                throw $util.ProtocolError("missing required 'amount'", { instance: message });
            return message;
        };

        ClientPlayerAddGold.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.amount))
                return "amount: integer expected";
            return null;
        };

        ClientPlayerAddGold.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientPlayerAddGold)
                return object;
            let message = new $root.NT.ClientPlayerAddGold();
            if (object.amount != null)
                message.amount = object.amount >>> 0;
            return message;
        };

        ClientPlayerAddGold.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.amount = 0;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = message.amount;
            return object;
        };

        ClientPlayerAddGold.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientPlayerAddGold.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientPlayerAddGold";
        };

        return ClientPlayerAddGold;
    })();

    NT.ServerPlayerAddGold = (function() {

        function ServerPlayerAddGold(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerPlayerAddGold.prototype.userId = "";
        ServerPlayerAddGold.prototype.amount = 0;

        ServerPlayerAddGold.create = function create(properties) {
            return new ServerPlayerAddGold(properties);
        };

        ServerPlayerAddGold.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.userId);
            writer.uint32(8).uint32(message.amount);
            return writer;
        };

        ServerPlayerAddGold.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerPlayerAddGold();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.userId = reader.string();
                        break;
                    }
                case 1: {
                        message.amount = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("amount"))
                throw $util.ProtocolError("missing required 'amount'", { instance: message });
            return message;
        };

        ServerPlayerAddGold.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userId))
                return "userId: string expected";
            if (!$util.isInteger(message.amount))
                return "amount: integer expected";
            return null;
        };

        ServerPlayerAddGold.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerPlayerAddGold)
                return object;
            let message = new $root.NT.ServerPlayerAddGold();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.amount != null)
                message.amount = object.amount >>> 0;
            return message;
        };

        ServerPlayerAddGold.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = "";
                object.amount = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = message.amount;
            return object;
        };

        ServerPlayerAddGold.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerPlayerAddGold.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerPlayerAddGold";
        };

        return ServerPlayerAddGold;
    })();

    NT.ClientPlayerTakeGold = (function() {

        function ClientPlayerTakeGold(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientPlayerTakeGold.prototype.amount = 0;

        ClientPlayerTakeGold.create = function create(properties) {
            return new ClientPlayerTakeGold(properties);
        };

        ClientPlayerTakeGold.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(0).uint32(message.amount);
            return writer;
        };

        ClientPlayerTakeGold.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientPlayerTakeGold();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.amount = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("amount"))
                throw $util.ProtocolError("missing required 'amount'", { instance: message });
            return message;
        };

        ClientPlayerTakeGold.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.amount))
                return "amount: integer expected";
            return null;
        };

        ClientPlayerTakeGold.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientPlayerTakeGold)
                return object;
            let message = new $root.NT.ClientPlayerTakeGold();
            if (object.amount != null)
                message.amount = object.amount >>> 0;
            return message;
        };

        ClientPlayerTakeGold.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.amount = 0;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = message.amount;
            return object;
        };

        ClientPlayerTakeGold.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientPlayerTakeGold.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientPlayerTakeGold";
        };

        return ClientPlayerTakeGold;
    })();

    NT.ServerPlayerTakeGold = (function() {

        function ServerPlayerTakeGold(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerPlayerTakeGold.prototype.userId = "";
        ServerPlayerTakeGold.prototype.amount = 0;

        ServerPlayerTakeGold.create = function create(properties) {
            return new ServerPlayerTakeGold(properties);
        };

        ServerPlayerTakeGold.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.userId);
            writer.uint32(8).uint32(message.amount);
            return writer;
        };

        ServerPlayerTakeGold.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerPlayerTakeGold();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.userId = reader.string();
                        break;
                    }
                case 1: {
                        message.amount = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("amount"))
                throw $util.ProtocolError("missing required 'amount'", { instance: message });
            return message;
        };

        ServerPlayerTakeGold.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userId))
                return "userId: string expected";
            if (!$util.isInteger(message.amount))
                return "amount: integer expected";
            return null;
        };

        ServerPlayerTakeGold.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerPlayerTakeGold)
                return object;
            let message = new $root.NT.ServerPlayerTakeGold();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.amount != null)
                message.amount = object.amount >>> 0;
            return message;
        };

        ServerPlayerTakeGold.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = "";
                object.amount = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = message.amount;
            return object;
        };

        ServerPlayerTakeGold.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerPlayerTakeGold.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerPlayerTakeGold";
        };

        return ServerPlayerTakeGold;
    })();

    NT.ClientPlayerAddItem = (function() {

        function ClientPlayerAddItem(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientPlayerAddItem.prototype.spells = null;
        ClientPlayerAddItem.prototype.wands = null;
        ClientPlayerAddItem.prototype.flasks = null;
        ClientPlayerAddItem.prototype.objects = null;

        let $oneOfFields;

        Object.defineProperty(ClientPlayerAddItem.prototype, "item", {
            get: $util.oneOfGetter($oneOfFields = ["spells", "wands", "flasks", "objects"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ClientPlayerAddItem.create = function create(properties) {
            return new ClientPlayerAddItem(properties);
        };

        ClientPlayerAddItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.spells != null && Object.hasOwnProperty.call(message, "spells"))
                $root.NT.ClientPlayerAddItem.Spells.encode(message.spells, writer.uint32(2).fork()).ldelim();
            if (message.wands != null && Object.hasOwnProperty.call(message, "wands"))
                $root.NT.ClientPlayerAddItem.Wands.encode(message.wands, writer.uint32(10).fork()).ldelim();
            if (message.flasks != null && Object.hasOwnProperty.call(message, "flasks"))
                $root.NT.ClientPlayerAddItem.Items.encode(message.flasks, writer.uint32(18).fork()).ldelim();
            if (message.objects != null && Object.hasOwnProperty.call(message, "objects"))
                $root.NT.ClientPlayerAddItem.Entities.encode(message.objects, writer.uint32(26).fork()).ldelim();
            return writer;
        };

        ClientPlayerAddItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientPlayerAddItem();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.spells = $root.NT.ClientPlayerAddItem.Spells.decode(reader, reader.uint32());
                        break;
                    }
                case 1: {
                        message.wands = $root.NT.ClientPlayerAddItem.Wands.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.flasks = $root.NT.ClientPlayerAddItem.Items.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.objects = $root.NT.ClientPlayerAddItem.Entities.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ClientPlayerAddItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.spells != null && message.hasOwnProperty("spells")) {
                properties.item = 1;
                {
                    let error = $root.NT.ClientPlayerAddItem.Spells.verify(message.spells);
                    if (error)
                        return "spells." + error;
                }
            }
            if (message.wands != null && message.hasOwnProperty("wands")) {
                if (properties.item === 1)
                    return "item: multiple values";
                properties.item = 1;
                {
                    let error = $root.NT.ClientPlayerAddItem.Wands.verify(message.wands);
                    if (error)
                        return "wands." + error;
                }
            }
            if (message.flasks != null && message.hasOwnProperty("flasks")) {
                if (properties.item === 1)
                    return "item: multiple values";
                properties.item = 1;
                {
                    let error = $root.NT.ClientPlayerAddItem.Items.verify(message.flasks);
                    if (error)
                        return "flasks." + error;
                }
            }
            if (message.objects != null && message.hasOwnProperty("objects")) {
                if (properties.item === 1)
                    return "item: multiple values";
                properties.item = 1;
                {
                    let error = $root.NT.ClientPlayerAddItem.Entities.verify(message.objects);
                    if (error)
                        return "objects." + error;
                }
            }
            return null;
        };

        ClientPlayerAddItem.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientPlayerAddItem)
                return object;
            let message = new $root.NT.ClientPlayerAddItem();
            if (object.spells != null) {
                if (typeof object.spells !== "object")
                    throw TypeError(".NT.ClientPlayerAddItem.spells: object expected");
                message.spells = $root.NT.ClientPlayerAddItem.Spells.fromObject(object.spells);
            }
            if (object.wands != null) {
                if (typeof object.wands !== "object")
                    throw TypeError(".NT.ClientPlayerAddItem.wands: object expected");
                message.wands = $root.NT.ClientPlayerAddItem.Wands.fromObject(object.wands);
            }
            if (object.flasks != null) {
                if (typeof object.flasks !== "object")
                    throw TypeError(".NT.ClientPlayerAddItem.flasks: object expected");
                message.flasks = $root.NT.ClientPlayerAddItem.Items.fromObject(object.flasks);
            }
            if (object.objects != null) {
                if (typeof object.objects !== "object")
                    throw TypeError(".NT.ClientPlayerAddItem.objects: object expected");
                message.objects = $root.NT.ClientPlayerAddItem.Entities.fromObject(object.objects);
            }
            return message;
        };

        ClientPlayerAddItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.spells != null && message.hasOwnProperty("spells")) {
                object.spells = $root.NT.ClientPlayerAddItem.Spells.toObject(message.spells, options);
                if (options.oneofs)
                    object.item = "spells";
            }
            if (message.wands != null && message.hasOwnProperty("wands")) {
                object.wands = $root.NT.ClientPlayerAddItem.Wands.toObject(message.wands, options);
                if (options.oneofs)
                    object.item = "wands";
            }
            if (message.flasks != null && message.hasOwnProperty("flasks")) {
                object.flasks = $root.NT.ClientPlayerAddItem.Items.toObject(message.flasks, options);
                if (options.oneofs)
                    object.item = "flasks";
            }
            if (message.objects != null && message.hasOwnProperty("objects")) {
                object.objects = $root.NT.ClientPlayerAddItem.Entities.toObject(message.objects, options);
                if (options.oneofs)
                    object.item = "objects";
            }
            return object;
        };

        ClientPlayerAddItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientPlayerAddItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientPlayerAddItem";
        };

        ClientPlayerAddItem.Spells = (function() {

            function Spells(properties) {
                this.list = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            Spells.prototype.list = $util.emptyArray;

            Spells.create = function create(properties) {
                return new Spells(properties);
            };

            Spells.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.list != null && message.list.length)
                    for (let i = 0; i < message.list.length; ++i)
                        $root.NT.Spell.encode(message.list[i], writer.uint32(2).fork()).ldelim();
                return writer;
            };

            Spells.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientPlayerAddItem.Spells();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 0: {
                            if (!(message.list && message.list.length))
                                message.list = [];
                            message.list.push($root.NT.Spell.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            Spells.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.list != null && message.hasOwnProperty("list")) {
                    if (!Array.isArray(message.list))
                        return "list: array expected";
                    for (let i = 0; i < message.list.length; ++i) {
                        let error = $root.NT.Spell.verify(message.list[i]);
                        if (error)
                            return "list." + error;
                    }
                }
                return null;
            };

            Spells.fromObject = function fromObject(object) {
                if (object instanceof $root.NT.ClientPlayerAddItem.Spells)
                    return object;
                let message = new $root.NT.ClientPlayerAddItem.Spells();
                if (object.list) {
                    if (!Array.isArray(object.list))
                        throw TypeError(".NT.ClientPlayerAddItem.Spells.list: array expected");
                    message.list = [];
                    for (let i = 0; i < object.list.length; ++i) {
                        if (typeof object.list[i] !== "object")
                            throw TypeError(".NT.ClientPlayerAddItem.Spells.list: object expected");
                        message.list[i] = $root.NT.Spell.fromObject(object.list[i]);
                    }
                }
                return message;
            };

            Spells.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.list = [];
                if (message.list && message.list.length) {
                    object.list = [];
                    for (let j = 0; j < message.list.length; ++j)
                        object.list[j] = $root.NT.Spell.toObject(message.list[j], options);
                }
                return object;
            };

            Spells.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Spells.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/NT.ClientPlayerAddItem.Spells";
            };

            return Spells;
        })();

        ClientPlayerAddItem.Wands = (function() {

            function Wands(properties) {
                this.list = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            Wands.prototype.list = $util.emptyArray;

            Wands.create = function create(properties) {
                return new Wands(properties);
            };

            Wands.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.list != null && message.list.length)
                    for (let i = 0; i < message.list.length; ++i)
                        $root.NT.Wand.encode(message.list[i], writer.uint32(2).fork()).ldelim();
                return writer;
            };

            Wands.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientPlayerAddItem.Wands();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 0: {
                            if (!(message.list && message.list.length))
                                message.list = [];
                            message.list.push($root.NT.Wand.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            Wands.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.list != null && message.hasOwnProperty("list")) {
                    if (!Array.isArray(message.list))
                        return "list: array expected";
                    for (let i = 0; i < message.list.length; ++i) {
                        let error = $root.NT.Wand.verify(message.list[i]);
                        if (error)
                            return "list." + error;
                    }
                }
                return null;
            };

            Wands.fromObject = function fromObject(object) {
                if (object instanceof $root.NT.ClientPlayerAddItem.Wands)
                    return object;
                let message = new $root.NT.ClientPlayerAddItem.Wands();
                if (object.list) {
                    if (!Array.isArray(object.list))
                        throw TypeError(".NT.ClientPlayerAddItem.Wands.list: array expected");
                    message.list = [];
                    for (let i = 0; i < object.list.length; ++i) {
                        if (typeof object.list[i] !== "object")
                            throw TypeError(".NT.ClientPlayerAddItem.Wands.list: object expected");
                        message.list[i] = $root.NT.Wand.fromObject(object.list[i]);
                    }
                }
                return message;
            };

            Wands.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.list = [];
                if (message.list && message.list.length) {
                    object.list = [];
                    for (let j = 0; j < message.list.length; ++j)
                        object.list[j] = $root.NT.Wand.toObject(message.list[j], options);
                }
                return object;
            };

            Wands.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Wands.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/NT.ClientPlayerAddItem.Wands";
            };

            return Wands;
        })();

        ClientPlayerAddItem.Items = (function() {

            function Items(properties) {
                this.list = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            Items.prototype.list = $util.emptyArray;

            Items.create = function create(properties) {
                return new Items(properties);
            };

            Items.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.list != null && message.list.length)
                    for (let i = 0; i < message.list.length; ++i)
                        $root.NT.Item.encode(message.list[i], writer.uint32(2).fork()).ldelim();
                return writer;
            };

            Items.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientPlayerAddItem.Items();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 0: {
                            if (!(message.list && message.list.length))
                                message.list = [];
                            message.list.push($root.NT.Item.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            Items.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.list != null && message.hasOwnProperty("list")) {
                    if (!Array.isArray(message.list))
                        return "list: array expected";
                    for (let i = 0; i < message.list.length; ++i) {
                        let error = $root.NT.Item.verify(message.list[i]);
                        if (error)
                            return "list." + error;
                    }
                }
                return null;
            };

            Items.fromObject = function fromObject(object) {
                if (object instanceof $root.NT.ClientPlayerAddItem.Items)
                    return object;
                let message = new $root.NT.ClientPlayerAddItem.Items();
                if (object.list) {
                    if (!Array.isArray(object.list))
                        throw TypeError(".NT.ClientPlayerAddItem.Items.list: array expected");
                    message.list = [];
                    for (let i = 0; i < object.list.length; ++i) {
                        if (typeof object.list[i] !== "object")
                            throw TypeError(".NT.ClientPlayerAddItem.Items.list: object expected");
                        message.list[i] = $root.NT.Item.fromObject(object.list[i]);
                    }
                }
                return message;
            };

            Items.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.list = [];
                if (message.list && message.list.length) {
                    object.list = [];
                    for (let j = 0; j < message.list.length; ++j)
                        object.list[j] = $root.NT.Item.toObject(message.list[j], options);
                }
                return object;
            };

            Items.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Items.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/NT.ClientPlayerAddItem.Items";
            };

            return Items;
        })();

        ClientPlayerAddItem.Entities = (function() {

            function Entities(properties) {
                this.list = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            Entities.prototype.list = $util.emptyArray;

            Entities.create = function create(properties) {
                return new Entities(properties);
            };

            Entities.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.list != null && message.list.length)
                    for (let i = 0; i < message.list.length; ++i)
                        $root.NT.EntityItem.encode(message.list[i], writer.uint32(2).fork()).ldelim();
                return writer;
            };

            Entities.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientPlayerAddItem.Entities();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 0: {
                            if (!(message.list && message.list.length))
                                message.list = [];
                            message.list.push($root.NT.EntityItem.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            Entities.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.list != null && message.hasOwnProperty("list")) {
                    if (!Array.isArray(message.list))
                        return "list: array expected";
                    for (let i = 0; i < message.list.length; ++i) {
                        let error = $root.NT.EntityItem.verify(message.list[i]);
                        if (error)
                            return "list." + error;
                    }
                }
                return null;
            };

            Entities.fromObject = function fromObject(object) {
                if (object instanceof $root.NT.ClientPlayerAddItem.Entities)
                    return object;
                let message = new $root.NT.ClientPlayerAddItem.Entities();
                if (object.list) {
                    if (!Array.isArray(object.list))
                        throw TypeError(".NT.ClientPlayerAddItem.Entities.list: array expected");
                    message.list = [];
                    for (let i = 0; i < object.list.length; ++i) {
                        if (typeof object.list[i] !== "object")
                            throw TypeError(".NT.ClientPlayerAddItem.Entities.list: object expected");
                        message.list[i] = $root.NT.EntityItem.fromObject(object.list[i]);
                    }
                }
                return message;
            };

            Entities.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.list = [];
                if (message.list && message.list.length) {
                    object.list = [];
                    for (let j = 0; j < message.list.length; ++j)
                        object.list[j] = $root.NT.EntityItem.toObject(message.list[j], options);
                }
                return object;
            };

            Entities.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Entities.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/NT.ClientPlayerAddItem.Entities";
            };

            return Entities;
        })();

        return ClientPlayerAddItem;
    })();

    NT.ServerPlayerAddItem = (function() {

        function ServerPlayerAddItem(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerPlayerAddItem.prototype.userId = "";
        ServerPlayerAddItem.prototype.spells = null;
        ServerPlayerAddItem.prototype.wands = null;
        ServerPlayerAddItem.prototype.flasks = null;
        ServerPlayerAddItem.prototype.objects = null;

        let $oneOfFields;

        Object.defineProperty(ServerPlayerAddItem.prototype, "item", {
            get: $util.oneOfGetter($oneOfFields = ["spells", "wands", "flasks", "objects"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ServerPlayerAddItem.create = function create(properties) {
            return new ServerPlayerAddItem(properties);
        };

        ServerPlayerAddItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.userId);
            if (message.spells != null && Object.hasOwnProperty.call(message, "spells"))
                $root.NT.ServerPlayerAddItem.Spells.encode(message.spells, writer.uint32(10).fork()).ldelim();
            if (message.wands != null && Object.hasOwnProperty.call(message, "wands"))
                $root.NT.ServerPlayerAddItem.Wands.encode(message.wands, writer.uint32(18).fork()).ldelim();
            if (message.flasks != null && Object.hasOwnProperty.call(message, "flasks"))
                $root.NT.ServerPlayerAddItem.Items.encode(message.flasks, writer.uint32(26).fork()).ldelim();
            if (message.objects != null && Object.hasOwnProperty.call(message, "objects"))
                $root.NT.ServerPlayerAddItem.Entities.encode(message.objects, writer.uint32(34).fork()).ldelim();
            return writer;
        };

        ServerPlayerAddItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerPlayerAddItem();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.userId = reader.string();
                        break;
                    }
                case 1: {
                        message.spells = $root.NT.ServerPlayerAddItem.Spells.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.wands = $root.NT.ServerPlayerAddItem.Wands.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.flasks = $root.NT.ServerPlayerAddItem.Items.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.objects = $root.NT.ServerPlayerAddItem.Entities.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            return message;
        };

        ServerPlayerAddItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (!$util.isString(message.userId))
                return "userId: string expected";
            if (message.spells != null && message.hasOwnProperty("spells")) {
                properties.item = 1;
                {
                    let error = $root.NT.ServerPlayerAddItem.Spells.verify(message.spells);
                    if (error)
                        return "spells." + error;
                }
            }
            if (message.wands != null && message.hasOwnProperty("wands")) {
                if (properties.item === 1)
                    return "item: multiple values";
                properties.item = 1;
                {
                    let error = $root.NT.ServerPlayerAddItem.Wands.verify(message.wands);
                    if (error)
                        return "wands." + error;
                }
            }
            if (message.flasks != null && message.hasOwnProperty("flasks")) {
                if (properties.item === 1)
                    return "item: multiple values";
                properties.item = 1;
                {
                    let error = $root.NT.ServerPlayerAddItem.Items.verify(message.flasks);
                    if (error)
                        return "flasks." + error;
                }
            }
            if (message.objects != null && message.hasOwnProperty("objects")) {
                if (properties.item === 1)
                    return "item: multiple values";
                properties.item = 1;
                {
                    let error = $root.NT.ServerPlayerAddItem.Entities.verify(message.objects);
                    if (error)
                        return "objects." + error;
                }
            }
            return null;
        };

        ServerPlayerAddItem.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerPlayerAddItem)
                return object;
            let message = new $root.NT.ServerPlayerAddItem();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.spells != null) {
                if (typeof object.spells !== "object")
                    throw TypeError(".NT.ServerPlayerAddItem.spells: object expected");
                message.spells = $root.NT.ServerPlayerAddItem.Spells.fromObject(object.spells);
            }
            if (object.wands != null) {
                if (typeof object.wands !== "object")
                    throw TypeError(".NT.ServerPlayerAddItem.wands: object expected");
                message.wands = $root.NT.ServerPlayerAddItem.Wands.fromObject(object.wands);
            }
            if (object.flasks != null) {
                if (typeof object.flasks !== "object")
                    throw TypeError(".NT.ServerPlayerAddItem.flasks: object expected");
                message.flasks = $root.NT.ServerPlayerAddItem.Items.fromObject(object.flasks);
            }
            if (object.objects != null) {
                if (typeof object.objects !== "object")
                    throw TypeError(".NT.ServerPlayerAddItem.objects: object expected");
                message.objects = $root.NT.ServerPlayerAddItem.Entities.fromObject(object.objects);
            }
            return message;
        };

        ServerPlayerAddItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.userId = "";
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.spells != null && message.hasOwnProperty("spells")) {
                object.spells = $root.NT.ServerPlayerAddItem.Spells.toObject(message.spells, options);
                if (options.oneofs)
                    object.item = "spells";
            }
            if (message.wands != null && message.hasOwnProperty("wands")) {
                object.wands = $root.NT.ServerPlayerAddItem.Wands.toObject(message.wands, options);
                if (options.oneofs)
                    object.item = "wands";
            }
            if (message.flasks != null && message.hasOwnProperty("flasks")) {
                object.flasks = $root.NT.ServerPlayerAddItem.Items.toObject(message.flasks, options);
                if (options.oneofs)
                    object.item = "flasks";
            }
            if (message.objects != null && message.hasOwnProperty("objects")) {
                object.objects = $root.NT.ServerPlayerAddItem.Entities.toObject(message.objects, options);
                if (options.oneofs)
                    object.item = "objects";
            }
            return object;
        };

        ServerPlayerAddItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerPlayerAddItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerPlayerAddItem";
        };

        ServerPlayerAddItem.Spells = (function() {

            function Spells(properties) {
                this.list = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            Spells.prototype.list = $util.emptyArray;

            Spells.create = function create(properties) {
                return new Spells(properties);
            };

            Spells.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.list != null && message.list.length)
                    for (let i = 0; i < message.list.length; ++i)
                        $root.NT.Spell.encode(message.list[i], writer.uint32(2).fork()).ldelim();
                return writer;
            };

            Spells.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerPlayerAddItem.Spells();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 0: {
                            if (!(message.list && message.list.length))
                                message.list = [];
                            message.list.push($root.NT.Spell.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            Spells.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.list != null && message.hasOwnProperty("list")) {
                    if (!Array.isArray(message.list))
                        return "list: array expected";
                    for (let i = 0; i < message.list.length; ++i) {
                        let error = $root.NT.Spell.verify(message.list[i]);
                        if (error)
                            return "list." + error;
                    }
                }
                return null;
            };

            Spells.fromObject = function fromObject(object) {
                if (object instanceof $root.NT.ServerPlayerAddItem.Spells)
                    return object;
                let message = new $root.NT.ServerPlayerAddItem.Spells();
                if (object.list) {
                    if (!Array.isArray(object.list))
                        throw TypeError(".NT.ServerPlayerAddItem.Spells.list: array expected");
                    message.list = [];
                    for (let i = 0; i < object.list.length; ++i) {
                        if (typeof object.list[i] !== "object")
                            throw TypeError(".NT.ServerPlayerAddItem.Spells.list: object expected");
                        message.list[i] = $root.NT.Spell.fromObject(object.list[i]);
                    }
                }
                return message;
            };

            Spells.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.list = [];
                if (message.list && message.list.length) {
                    object.list = [];
                    for (let j = 0; j < message.list.length; ++j)
                        object.list[j] = $root.NT.Spell.toObject(message.list[j], options);
                }
                return object;
            };

            Spells.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Spells.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/NT.ServerPlayerAddItem.Spells";
            };

            return Spells;
        })();

        ServerPlayerAddItem.Wands = (function() {

            function Wands(properties) {
                this.list = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            Wands.prototype.list = $util.emptyArray;

            Wands.create = function create(properties) {
                return new Wands(properties);
            };

            Wands.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.list != null && message.list.length)
                    for (let i = 0; i < message.list.length; ++i)
                        $root.NT.Wand.encode(message.list[i], writer.uint32(2).fork()).ldelim();
                return writer;
            };

            Wands.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerPlayerAddItem.Wands();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 0: {
                            if (!(message.list && message.list.length))
                                message.list = [];
                            message.list.push($root.NT.Wand.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            Wands.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.list != null && message.hasOwnProperty("list")) {
                    if (!Array.isArray(message.list))
                        return "list: array expected";
                    for (let i = 0; i < message.list.length; ++i) {
                        let error = $root.NT.Wand.verify(message.list[i]);
                        if (error)
                            return "list." + error;
                    }
                }
                return null;
            };

            Wands.fromObject = function fromObject(object) {
                if (object instanceof $root.NT.ServerPlayerAddItem.Wands)
                    return object;
                let message = new $root.NT.ServerPlayerAddItem.Wands();
                if (object.list) {
                    if (!Array.isArray(object.list))
                        throw TypeError(".NT.ServerPlayerAddItem.Wands.list: array expected");
                    message.list = [];
                    for (let i = 0; i < object.list.length; ++i) {
                        if (typeof object.list[i] !== "object")
                            throw TypeError(".NT.ServerPlayerAddItem.Wands.list: object expected");
                        message.list[i] = $root.NT.Wand.fromObject(object.list[i]);
                    }
                }
                return message;
            };

            Wands.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.list = [];
                if (message.list && message.list.length) {
                    object.list = [];
                    for (let j = 0; j < message.list.length; ++j)
                        object.list[j] = $root.NT.Wand.toObject(message.list[j], options);
                }
                return object;
            };

            Wands.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Wands.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/NT.ServerPlayerAddItem.Wands";
            };

            return Wands;
        })();

        ServerPlayerAddItem.Items = (function() {

            function Items(properties) {
                this.list = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            Items.prototype.list = $util.emptyArray;

            Items.create = function create(properties) {
                return new Items(properties);
            };

            Items.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.list != null && message.list.length)
                    for (let i = 0; i < message.list.length; ++i)
                        $root.NT.Item.encode(message.list[i], writer.uint32(2).fork()).ldelim();
                return writer;
            };

            Items.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerPlayerAddItem.Items();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 0: {
                            if (!(message.list && message.list.length))
                                message.list = [];
                            message.list.push($root.NT.Item.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            Items.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.list != null && message.hasOwnProperty("list")) {
                    if (!Array.isArray(message.list))
                        return "list: array expected";
                    for (let i = 0; i < message.list.length; ++i) {
                        let error = $root.NT.Item.verify(message.list[i]);
                        if (error)
                            return "list." + error;
                    }
                }
                return null;
            };

            Items.fromObject = function fromObject(object) {
                if (object instanceof $root.NT.ServerPlayerAddItem.Items)
                    return object;
                let message = new $root.NT.ServerPlayerAddItem.Items();
                if (object.list) {
                    if (!Array.isArray(object.list))
                        throw TypeError(".NT.ServerPlayerAddItem.Items.list: array expected");
                    message.list = [];
                    for (let i = 0; i < object.list.length; ++i) {
                        if (typeof object.list[i] !== "object")
                            throw TypeError(".NT.ServerPlayerAddItem.Items.list: object expected");
                        message.list[i] = $root.NT.Item.fromObject(object.list[i]);
                    }
                }
                return message;
            };

            Items.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.list = [];
                if (message.list && message.list.length) {
                    object.list = [];
                    for (let j = 0; j < message.list.length; ++j)
                        object.list[j] = $root.NT.Item.toObject(message.list[j], options);
                }
                return object;
            };

            Items.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Items.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/NT.ServerPlayerAddItem.Items";
            };

            return Items;
        })();

        ServerPlayerAddItem.Entities = (function() {

            function Entities(properties) {
                this.list = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            Entities.prototype.list = $util.emptyArray;

            Entities.create = function create(properties) {
                return new Entities(properties);
            };

            Entities.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.list != null && message.list.length)
                    for (let i = 0; i < message.list.length; ++i)
                        $root.NT.EntityItem.encode(message.list[i], writer.uint32(2).fork()).ldelim();
                return writer;
            };

            Entities.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerPlayerAddItem.Entities();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 0: {
                            if (!(message.list && message.list.length))
                                message.list = [];
                            message.list.push($root.NT.EntityItem.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            Entities.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.list != null && message.hasOwnProperty("list")) {
                    if (!Array.isArray(message.list))
                        return "list: array expected";
                    for (let i = 0; i < message.list.length; ++i) {
                        let error = $root.NT.EntityItem.verify(message.list[i]);
                        if (error)
                            return "list." + error;
                    }
                }
                return null;
            };

            Entities.fromObject = function fromObject(object) {
                if (object instanceof $root.NT.ServerPlayerAddItem.Entities)
                    return object;
                let message = new $root.NT.ServerPlayerAddItem.Entities();
                if (object.list) {
                    if (!Array.isArray(object.list))
                        throw TypeError(".NT.ServerPlayerAddItem.Entities.list: array expected");
                    message.list = [];
                    for (let i = 0; i < object.list.length; ++i) {
                        if (typeof object.list[i] !== "object")
                            throw TypeError(".NT.ServerPlayerAddItem.Entities.list: object expected");
                        message.list[i] = $root.NT.EntityItem.fromObject(object.list[i]);
                    }
                }
                return message;
            };

            Entities.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.list = [];
                if (message.list && message.list.length) {
                    object.list = [];
                    for (let j = 0; j < message.list.length; ++j)
                        object.list[j] = $root.NT.EntityItem.toObject(message.list[j], options);
                }
                return object;
            };

            Entities.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Entities.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/NT.ServerPlayerAddItem.Entities";
            };

            return Entities;
        })();

        return ServerPlayerAddItem;
    })();

    NT.ClientPlayerTakeItem = (function() {

        function ClientPlayerTakeItem(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientPlayerTakeItem.prototype.id = "";

        ClientPlayerTakeItem.create = function create(properties) {
            return new ClientPlayerTakeItem(properties);
        };

        ClientPlayerTakeItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.id);
            return writer;
        };

        ClientPlayerTakeItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientPlayerTakeItem();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        ClientPlayerTakeItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            return null;
        };

        ClientPlayerTakeItem.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientPlayerTakeItem)
                return object;
            let message = new $root.NT.ClientPlayerTakeItem();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        ClientPlayerTakeItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        ClientPlayerTakeItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientPlayerTakeItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientPlayerTakeItem";
        };

        return ClientPlayerTakeItem;
    })();

    NT.ServerPlayerTakeItem = (function() {

        function ServerPlayerTakeItem(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerPlayerTakeItem.prototype.userId = "";
        ServerPlayerTakeItem.prototype.id = "";

        ServerPlayerTakeItem.create = function create(properties) {
            return new ServerPlayerTakeItem(properties);
        };

        ServerPlayerTakeItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.userId);
            writer.uint32(10).string(message.id);
            return writer;
        };

        ServerPlayerTakeItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerPlayerTakeItem();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.userId = reader.string();
                        break;
                    }
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        ServerPlayerTakeItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userId))
                return "userId: string expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            return null;
        };

        ServerPlayerTakeItem.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerPlayerTakeItem)
                return object;
            let message = new $root.NT.ServerPlayerTakeItem();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        ServerPlayerTakeItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = "";
                object.id = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        ServerPlayerTakeItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerPlayerTakeItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerPlayerTakeItem";
        };

        return ServerPlayerTakeItem;
    })();

    NT.ClientChat = (function() {

        function ClientChat(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientChat.prototype.message = "";

        ClientChat.create = function create(properties) {
            return new ClientChat(properties);
        };

        ClientChat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.message);
            return writer;
        };

        ClientChat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientChat();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.message = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("message"))
                throw $util.ProtocolError("missing required 'message'", { instance: message });
            return message;
        };

        ClientChat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.message))
                return "message: string expected";
            return null;
        };

        ClientChat.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientChat)
                return object;
            let message = new $root.NT.ClientChat();
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        ClientChat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.message = "";
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        ClientChat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientChat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientChat";
        };

        return ClientChat;
    })();

    NT.ServerChat = (function() {

        function ServerChat(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerChat.prototype.id = "";
        ServerChat.prototype.userId = "";
        ServerChat.prototype.name = "";
        ServerChat.prototype.message = "";

        ServerChat.create = function create(properties) {
            return new ServerChat(properties);
        };

        ServerChat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.id);
            writer.uint32(10).string(message.userId);
            writer.uint32(18).string(message.name);
            writer.uint32(26).string(message.message);
            return writer;
        };

        ServerChat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerChat();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.id = reader.string();
                        break;
                    }
                case 1: {
                        message.userId = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.message = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("message"))
                throw $util.ProtocolError("missing required 'message'", { instance: message });
            return message;
        };

        ServerChat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            if (!$util.isString(message.userId))
                return "userId: string expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isString(message.message))
                return "message: string expected";
            return null;
        };

        ServerChat.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerChat)
                return object;
            let message = new $root.NT.ServerChat();
            if (object.id != null)
                message.id = String(object.id);
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.name != null)
                message.name = String(object.name);
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        ServerChat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.userId = "";
                object.name = "";
                object.message = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        ServerChat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerChat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerChat";
        };

        return ServerChat;
    })();

    NT.ClientPlayerPickup = (function() {

        function ClientPlayerPickup(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientPlayerPickup.prototype.heart = null;
        ClientPlayerPickup.prototype.orb = null;

        let $oneOfFields;

        Object.defineProperty(ClientPlayerPickup.prototype, "kind", {
            get: $util.oneOfGetter($oneOfFields = ["heart", "orb"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ClientPlayerPickup.create = function create(properties) {
            return new ClientPlayerPickup(properties);
        };

        ClientPlayerPickup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.heart != null && Object.hasOwnProperty.call(message, "heart"))
                $root.NT.ClientPlayerPickup.HeartPickup.encode(message.heart, writer.uint32(2).fork()).ldelim();
            if (message.orb != null && Object.hasOwnProperty.call(message, "orb"))
                $root.NT.ClientPlayerPickup.OrbPickup.encode(message.orb, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        ClientPlayerPickup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientPlayerPickup();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.heart = $root.NT.ClientPlayerPickup.HeartPickup.decode(reader, reader.uint32());
                        break;
                    }
                case 1: {
                        message.orb = $root.NT.ClientPlayerPickup.OrbPickup.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ClientPlayerPickup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.heart != null && message.hasOwnProperty("heart")) {
                properties.kind = 1;
                {
                    let error = $root.NT.ClientPlayerPickup.HeartPickup.verify(message.heart);
                    if (error)
                        return "heart." + error;
                }
            }
            if (message.orb != null && message.hasOwnProperty("orb")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    let error = $root.NT.ClientPlayerPickup.OrbPickup.verify(message.orb);
                    if (error)
                        return "orb." + error;
                }
            }
            return null;
        };

        ClientPlayerPickup.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientPlayerPickup)
                return object;
            let message = new $root.NT.ClientPlayerPickup();
            if (object.heart != null) {
                if (typeof object.heart !== "object")
                    throw TypeError(".NT.ClientPlayerPickup.heart: object expected");
                message.heart = $root.NT.ClientPlayerPickup.HeartPickup.fromObject(object.heart);
            }
            if (object.orb != null) {
                if (typeof object.orb !== "object")
                    throw TypeError(".NT.ClientPlayerPickup.orb: object expected");
                message.orb = $root.NT.ClientPlayerPickup.OrbPickup.fromObject(object.orb);
            }
            return message;
        };

        ClientPlayerPickup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.heart != null && message.hasOwnProperty("heart")) {
                object.heart = $root.NT.ClientPlayerPickup.HeartPickup.toObject(message.heart, options);
                if (options.oneofs)
                    object.kind = "heart";
            }
            if (message.orb != null && message.hasOwnProperty("orb")) {
                object.orb = $root.NT.ClientPlayerPickup.OrbPickup.toObject(message.orb, options);
                if (options.oneofs)
                    object.kind = "orb";
            }
            return object;
        };

        ClientPlayerPickup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientPlayerPickup.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientPlayerPickup";
        };

        ClientPlayerPickup.HeartPickup = (function() {

            function HeartPickup(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            HeartPickup.prototype.hpPerk = false;

            HeartPickup.create = function create(properties) {
                return new HeartPickup(properties);
            };

            HeartPickup.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(0).bool(message.hpPerk);
                return writer;
            };

            HeartPickup.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientPlayerPickup.HeartPickup();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 0: {
                            message.hpPerk = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("hpPerk"))
                    throw $util.ProtocolError("missing required 'hpPerk'", { instance: message });
                return message;
            };

            HeartPickup.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (typeof message.hpPerk !== "boolean")
                    return "hpPerk: boolean expected";
                return null;
            };

            HeartPickup.fromObject = function fromObject(object) {
                if (object instanceof $root.NT.ClientPlayerPickup.HeartPickup)
                    return object;
                let message = new $root.NT.ClientPlayerPickup.HeartPickup();
                if (object.hpPerk != null)
                    message.hpPerk = Boolean(object.hpPerk);
                return message;
            };

            HeartPickup.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.hpPerk = false;
                if (message.hpPerk != null && message.hasOwnProperty("hpPerk"))
                    object.hpPerk = message.hpPerk;
                return object;
            };

            HeartPickup.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            HeartPickup.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/NT.ClientPlayerPickup.HeartPickup";
            };

            return HeartPickup;
        })();

        ClientPlayerPickup.OrbPickup = (function() {

            function OrbPickup(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            OrbPickup.prototype.id = 0;

            OrbPickup.create = function create(properties) {
                return new OrbPickup(properties);
            };

            OrbPickup.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(0).uint32(message.id);
                return writer;
            };

            OrbPickup.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientPlayerPickup.OrbPickup();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 0: {
                            message.id = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("id"))
                    throw $util.ProtocolError("missing required 'id'", { instance: message });
                return message;
            };

            OrbPickup.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
                return null;
            };

            OrbPickup.fromObject = function fromObject(object) {
                if (object instanceof $root.NT.ClientPlayerPickup.OrbPickup)
                    return object;
                let message = new $root.NT.ClientPlayerPickup.OrbPickup();
                if (object.id != null)
                    message.id = object.id >>> 0;
                return message;
            };

            OrbPickup.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.id = 0;
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                return object;
            };

            OrbPickup.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            OrbPickup.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/NT.ClientPlayerPickup.OrbPickup";
            };

            return OrbPickup;
        })();

        return ClientPlayerPickup;
    })();

    NT.ServerPlayerPickup = (function() {

        function ServerPlayerPickup(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerPlayerPickup.prototype.userId = "";
        ServerPlayerPickup.prototype.heart = null;
        ServerPlayerPickup.prototype.orb = null;

        let $oneOfFields;

        Object.defineProperty(ServerPlayerPickup.prototype, "kind", {
            get: $util.oneOfGetter($oneOfFields = ["heart", "orb"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ServerPlayerPickup.create = function create(properties) {
            return new ServerPlayerPickup(properties);
        };

        ServerPlayerPickup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(2).string(message.userId);
            if (message.heart != null && Object.hasOwnProperty.call(message, "heart"))
                $root.NT.ServerPlayerPickup.HeartPickup.encode(message.heart, writer.uint32(10).fork()).ldelim();
            if (message.orb != null && Object.hasOwnProperty.call(message, "orb"))
                $root.NT.ServerPlayerPickup.OrbPickup.encode(message.orb, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        ServerPlayerPickup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerPlayerPickup();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.userId = reader.string();
                        break;
                    }
                case 1: {
                        message.heart = $root.NT.ServerPlayerPickup.HeartPickup.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.orb = $root.NT.ServerPlayerPickup.OrbPickup.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ServerPlayerPickup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.heart != null && message.hasOwnProperty("heart")) {
                properties.kind = 1;
                {
                    let error = $root.NT.ServerPlayerPickup.HeartPickup.verify(message.heart);
                    if (error)
                        return "heart." + error;
                }
            }
            if (message.orb != null && message.hasOwnProperty("orb")) {
                if (properties.kind === 1)
                    return "kind: multiple values";
                properties.kind = 1;
                {
                    let error = $root.NT.ServerPlayerPickup.OrbPickup.verify(message.orb);
                    if (error)
                        return "orb." + error;
                }
            }
            return null;
        };

        ServerPlayerPickup.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerPlayerPickup)
                return object;
            let message = new $root.NT.ServerPlayerPickup();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.heart != null) {
                if (typeof object.heart !== "object")
                    throw TypeError(".NT.ServerPlayerPickup.heart: object expected");
                message.heart = $root.NT.ServerPlayerPickup.HeartPickup.fromObject(object.heart);
            }
            if (object.orb != null) {
                if (typeof object.orb !== "object")
                    throw TypeError(".NT.ServerPlayerPickup.orb: object expected");
                message.orb = $root.NT.ServerPlayerPickup.OrbPickup.fromObject(object.orb);
            }
            return message;
        };

        ServerPlayerPickup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.userId = "";
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.heart != null && message.hasOwnProperty("heart")) {
                object.heart = $root.NT.ServerPlayerPickup.HeartPickup.toObject(message.heart, options);
                if (options.oneofs)
                    object.kind = "heart";
            }
            if (message.orb != null && message.hasOwnProperty("orb")) {
                object.orb = $root.NT.ServerPlayerPickup.OrbPickup.toObject(message.orb, options);
                if (options.oneofs)
                    object.kind = "orb";
            }
            return object;
        };

        ServerPlayerPickup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerPlayerPickup.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerPlayerPickup";
        };

        ServerPlayerPickup.HeartPickup = (function() {

            function HeartPickup(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            HeartPickup.prototype.hpPerk = false;

            HeartPickup.create = function create(properties) {
                return new HeartPickup(properties);
            };

            HeartPickup.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(0).bool(message.hpPerk);
                return writer;
            };

            HeartPickup.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerPlayerPickup.HeartPickup();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 0: {
                            message.hpPerk = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("hpPerk"))
                    throw $util.ProtocolError("missing required 'hpPerk'", { instance: message });
                return message;
            };

            HeartPickup.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (typeof message.hpPerk !== "boolean")
                    return "hpPerk: boolean expected";
                return null;
            };

            HeartPickup.fromObject = function fromObject(object) {
                if (object instanceof $root.NT.ServerPlayerPickup.HeartPickup)
                    return object;
                let message = new $root.NT.ServerPlayerPickup.HeartPickup();
                if (object.hpPerk != null)
                    message.hpPerk = Boolean(object.hpPerk);
                return message;
            };

            HeartPickup.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.hpPerk = false;
                if (message.hpPerk != null && message.hasOwnProperty("hpPerk"))
                    object.hpPerk = message.hpPerk;
                return object;
            };

            HeartPickup.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            HeartPickup.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/NT.ServerPlayerPickup.HeartPickup";
            };

            return HeartPickup;
        })();

        ServerPlayerPickup.OrbPickup = (function() {

            function OrbPickup(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            OrbPickup.prototype.id = 0;

            OrbPickup.create = function create(properties) {
                return new OrbPickup(properties);
            };

            OrbPickup.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(0).uint32(message.id);
                return writer;
            };

            OrbPickup.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerPlayerPickup.OrbPickup();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 0: {
                            message.id = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("id"))
                    throw $util.ProtocolError("missing required 'id'", { instance: message });
                return message;
            };

            OrbPickup.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
                return null;
            };

            OrbPickup.fromObject = function fromObject(object) {
                if (object instanceof $root.NT.ServerPlayerPickup.OrbPickup)
                    return object;
                let message = new $root.NT.ServerPlayerPickup.OrbPickup();
                if (object.id != null)
                    message.id = object.id >>> 0;
                return message;
            };

            OrbPickup.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.id = 0;
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                return object;
            };

            OrbPickup.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            OrbPickup.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/NT.ServerPlayerPickup.OrbPickup";
            };

            return OrbPickup;
        })();

        return ServerPlayerPickup;
    })();

    NT.ClientNemesisPickupItem = (function() {

        function ClientNemesisPickupItem(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientNemesisPickupItem.prototype.gameId = "";

        ClientNemesisPickupItem.create = function create(properties) {
            return new ClientNemesisPickupItem(properties);
        };

        ClientNemesisPickupItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.gameId);
            return writer;
        };

        ClientNemesisPickupItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientNemesisPickupItem();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.gameId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("gameId"))
                throw $util.ProtocolError("missing required 'gameId'", { instance: message });
            return message;
        };

        ClientNemesisPickupItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.gameId))
                return "gameId: string expected";
            return null;
        };

        ClientNemesisPickupItem.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientNemesisPickupItem)
                return object;
            let message = new $root.NT.ClientNemesisPickupItem();
            if (object.gameId != null)
                message.gameId = String(object.gameId);
            return message;
        };

        ClientNemesisPickupItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.gameId = "";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            return object;
        };

        ClientNemesisPickupItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientNemesisPickupItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientNemesisPickupItem";
        };

        return ClientNemesisPickupItem;
    })();

    NT.ServerNemesisPickupItem = (function() {

        function ServerNemesisPickupItem(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerNemesisPickupItem.prototype.userId = "";
        ServerNemesisPickupItem.prototype.gameId = "";

        ServerNemesisPickupItem.create = function create(properties) {
            return new ServerNemesisPickupItem(properties);
        };

        ServerNemesisPickupItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.userId);
            writer.uint32(10).string(message.gameId);
            return writer;
        };

        ServerNemesisPickupItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerNemesisPickupItem();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.userId = reader.string();
                        break;
                    }
                case 1: {
                        message.gameId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("gameId"))
                throw $util.ProtocolError("missing required 'gameId'", { instance: message });
            return message;
        };

        ServerNemesisPickupItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userId))
                return "userId: string expected";
            if (!$util.isString(message.gameId))
                return "gameId: string expected";
            return null;
        };

        ServerNemesisPickupItem.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerNemesisPickupItem)
                return object;
            let message = new $root.NT.ServerNemesisPickupItem();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.gameId != null)
                message.gameId = String(object.gameId);
            return message;
        };

        ServerNemesisPickupItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = "";
                object.gameId = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            return object;
        };

        ServerNemesisPickupItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerNemesisPickupItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerNemesisPickupItem";
        };

        return ServerNemesisPickupItem;
    })();

    NT.ClientNemesisAbility = (function() {

        function ClientNemesisAbility(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientNemesisAbility.prototype.gameId = "";

        ClientNemesisAbility.create = function create(properties) {
            return new ClientNemesisAbility(properties);
        };

        ClientNemesisAbility.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.gameId);
            return writer;
        };

        ClientNemesisAbility.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientNemesisAbility();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.gameId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("gameId"))
                throw $util.ProtocolError("missing required 'gameId'", { instance: message });
            return message;
        };

        ClientNemesisAbility.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.gameId))
                return "gameId: string expected";
            return null;
        };

        ClientNemesisAbility.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientNemesisAbility)
                return object;
            let message = new $root.NT.ClientNemesisAbility();
            if (object.gameId != null)
                message.gameId = String(object.gameId);
            return message;
        };

        ClientNemesisAbility.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.gameId = "";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            return object;
        };

        ClientNemesisAbility.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientNemesisAbility.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientNemesisAbility";
        };

        return ClientNemesisAbility;
    })();

    NT.ServerNemesisAbility = (function() {

        function ServerNemesisAbility(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerNemesisAbility.prototype.userId = "";
        ServerNemesisAbility.prototype.gameId = "";

        ServerNemesisAbility.create = function create(properties) {
            return new ServerNemesisAbility(properties);
        };

        ServerNemesisAbility.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.userId);
            writer.uint32(10).string(message.gameId);
            return writer;
        };

        ServerNemesisAbility.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerNemesisAbility();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.userId = reader.string();
                        break;
                    }
                case 1: {
                        message.gameId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("gameId"))
                throw $util.ProtocolError("missing required 'gameId'", { instance: message });
            return message;
        };

        ServerNemesisAbility.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userId))
                return "userId: string expected";
            if (!$util.isString(message.gameId))
                return "gameId: string expected";
            return null;
        };

        ServerNemesisAbility.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerNemesisAbility)
                return object;
            let message = new $root.NT.ServerNemesisAbility();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.gameId != null)
                message.gameId = String(object.gameId);
            return message;
        };

        ServerNemesisAbility.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = "";
                object.gameId = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            return object;
        };

        ServerNemesisAbility.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerNemesisAbility.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerNemesisAbility";
        };

        return ServerNemesisAbility;
    })();

    NT.ClientPlayerDeath = (function() {

        function ClientPlayerDeath(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientPlayerDeath.prototype.isWin = false;
        ClientPlayerDeath.prototype.gameTime = null;

        let $oneOfFields;

        Object.defineProperty(ClientPlayerDeath.prototype, "_gameTime", {
            get: $util.oneOfGetter($oneOfFields = ["gameTime"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ClientPlayerDeath.create = function create(properties) {
            return new ClientPlayerDeath(properties);
        };

        ClientPlayerDeath.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(0).bool(message.isWin);
            if (message.gameTime != null && Object.hasOwnProperty.call(message, "gameTime"))
                writer.uint32(8).uint32(message.gameTime);
            return writer;
        };

        ClientPlayerDeath.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientPlayerDeath();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.isWin = reader.bool();
                        break;
                    }
                case 1: {
                        message.gameTime = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("isWin"))
                throw $util.ProtocolError("missing required 'isWin'", { instance: message });
            return message;
        };

        ClientPlayerDeath.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (typeof message.isWin !== "boolean")
                return "isWin: boolean expected";
            if (message.gameTime != null && message.hasOwnProperty("gameTime")) {
                properties._gameTime = 1;
                if (!$util.isInteger(message.gameTime))
                    return "gameTime: integer expected";
            }
            return null;
        };

        ClientPlayerDeath.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientPlayerDeath)
                return object;
            let message = new $root.NT.ClientPlayerDeath();
            if (object.isWin != null)
                message.isWin = Boolean(object.isWin);
            if (object.gameTime != null)
                message.gameTime = object.gameTime >>> 0;
            return message;
        };

        ClientPlayerDeath.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.isWin = false;
            if (message.isWin != null && message.hasOwnProperty("isWin"))
                object.isWin = message.isWin;
            if (message.gameTime != null && message.hasOwnProperty("gameTime")) {
                object.gameTime = message.gameTime;
                if (options.oneofs)
                    object._gameTime = "gameTime";
            }
            return object;
        };

        ClientPlayerDeath.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientPlayerDeath.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientPlayerDeath";
        };

        return ClientPlayerDeath;
    })();

    NT.ServerPlayerDeath = (function() {

        function ServerPlayerDeath(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerPlayerDeath.prototype.userId = "";
        ServerPlayerDeath.prototype.isWin = false;
        ServerPlayerDeath.prototype.gameTime = null;

        let $oneOfFields;

        Object.defineProperty(ServerPlayerDeath.prototype, "_gameTime", {
            get: $util.oneOfGetter($oneOfFields = ["gameTime"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ServerPlayerDeath.create = function create(properties) {
            return new ServerPlayerDeath(properties);
        };

        ServerPlayerDeath.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.userId);
            writer.uint32(8).bool(message.isWin);
            if (message.gameTime != null && Object.hasOwnProperty.call(message, "gameTime"))
                writer.uint32(16).uint32(message.gameTime);
            return writer;
        };

        ServerPlayerDeath.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerPlayerDeath();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.userId = reader.string();
                        break;
                    }
                case 1: {
                        message.isWin = reader.bool();
                        break;
                    }
                case 2: {
                        message.gameTime = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("isWin"))
                throw $util.ProtocolError("missing required 'isWin'", { instance: message });
            return message;
        };

        ServerPlayerDeath.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (!$util.isString(message.userId))
                return "userId: string expected";
            if (typeof message.isWin !== "boolean")
                return "isWin: boolean expected";
            if (message.gameTime != null && message.hasOwnProperty("gameTime")) {
                properties._gameTime = 1;
                if (!$util.isInteger(message.gameTime))
                    return "gameTime: integer expected";
            }
            return null;
        };

        ServerPlayerDeath.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerPlayerDeath)
                return object;
            let message = new $root.NT.ServerPlayerDeath();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.isWin != null)
                message.isWin = Boolean(object.isWin);
            if (object.gameTime != null)
                message.gameTime = object.gameTime >>> 0;
            return message;
        };

        ServerPlayerDeath.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = "";
                object.isWin = false;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.isWin != null && message.hasOwnProperty("isWin"))
                object.isWin = message.isWin;
            if (message.gameTime != null && message.hasOwnProperty("gameTime")) {
                object.gameTime = message.gameTime;
                if (options.oneofs)
                    object._gameTime = "gameTime";
            }
            return object;
        };

        ServerPlayerDeath.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerPlayerDeath.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerPlayerDeath";
        };

        return ServerPlayerDeath;
    })();

    NT.ClientPlayerNewGamePlus = (function() {

        function ClientPlayerNewGamePlus(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientPlayerNewGamePlus.prototype.amount = 0;

        ClientPlayerNewGamePlus.create = function create(properties) {
            return new ClientPlayerNewGamePlus(properties);
        };

        ClientPlayerNewGamePlus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(0).uint32(message.amount);
            return writer;
        };

        ClientPlayerNewGamePlus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientPlayerNewGamePlus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.amount = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("amount"))
                throw $util.ProtocolError("missing required 'amount'", { instance: message });
            return message;
        };

        ClientPlayerNewGamePlus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.amount))
                return "amount: integer expected";
            return null;
        };

        ClientPlayerNewGamePlus.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientPlayerNewGamePlus)
                return object;
            let message = new $root.NT.ClientPlayerNewGamePlus();
            if (object.amount != null)
                message.amount = object.amount >>> 0;
            return message;
        };

        ClientPlayerNewGamePlus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.amount = 0;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = message.amount;
            return object;
        };

        ClientPlayerNewGamePlus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientPlayerNewGamePlus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientPlayerNewGamePlus";
        };

        return ClientPlayerNewGamePlus;
    })();

    NT.ServerPlayerNewGamePlus = (function() {

        function ServerPlayerNewGamePlus(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerPlayerNewGamePlus.prototype.userId = "";
        ServerPlayerNewGamePlus.prototype.amount = 0;

        ServerPlayerNewGamePlus.create = function create(properties) {
            return new ServerPlayerNewGamePlus(properties);
        };

        ServerPlayerNewGamePlus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(2).string(message.userId);
            writer.uint32(8).uint32(message.amount);
            return writer;
        };

        ServerPlayerNewGamePlus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerPlayerNewGamePlus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.userId = reader.string();
                        break;
                    }
                case 1: {
                        message.amount = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("amount"))
                throw $util.ProtocolError("missing required 'amount'", { instance: message });
            return message;
        };

        ServerPlayerNewGamePlus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (!$util.isInteger(message.amount))
                return "amount: integer expected";
            return null;
        };

        ServerPlayerNewGamePlus.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerPlayerNewGamePlus)
                return object;
            let message = new $root.NT.ServerPlayerNewGamePlus();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.amount != null)
                message.amount = object.amount >>> 0;
            return message;
        };

        ServerPlayerNewGamePlus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = "";
                object.amount = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = message.amount;
            return object;
        };

        ServerPlayerNewGamePlus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerPlayerNewGamePlus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerPlayerNewGamePlus";
        };

        return ServerPlayerNewGamePlus;
    })();

    NT.ClientPlayerSecretHourglass = (function() {

        function ClientPlayerSecretHourglass(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientPlayerSecretHourglass.prototype.material = "";

        ClientPlayerSecretHourglass.create = function create(properties) {
            return new ClientPlayerSecretHourglass(properties);
        };

        ClientPlayerSecretHourglass.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.material);
            return writer;
        };

        ClientPlayerSecretHourglass.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientPlayerSecretHourglass();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.material = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("material"))
                throw $util.ProtocolError("missing required 'material'", { instance: message });
            return message;
        };

        ClientPlayerSecretHourglass.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.material))
                return "material: string expected";
            return null;
        };

        ClientPlayerSecretHourglass.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientPlayerSecretHourglass)
                return object;
            let message = new $root.NT.ClientPlayerSecretHourglass();
            if (object.material != null)
                message.material = String(object.material);
            return message;
        };

        ClientPlayerSecretHourglass.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.material = "";
            if (message.material != null && message.hasOwnProperty("material"))
                object.material = message.material;
            return object;
        };

        ClientPlayerSecretHourglass.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientPlayerSecretHourglass.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientPlayerSecretHourglass";
        };

        return ClientPlayerSecretHourglass;
    })();

    NT.ServerPlayerSecretHourglass = (function() {

        function ServerPlayerSecretHourglass(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerPlayerSecretHourglass.prototype.userId = "";
        ServerPlayerSecretHourglass.prototype.material = "";

        ServerPlayerSecretHourglass.create = function create(properties) {
            return new ServerPlayerSecretHourglass(properties);
        };

        ServerPlayerSecretHourglass.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.userId);
            writer.uint32(10).string(message.material);
            return writer;
        };

        ServerPlayerSecretHourglass.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerPlayerSecretHourglass();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.userId = reader.string();
                        break;
                    }
                case 1: {
                        message.material = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("material"))
                throw $util.ProtocolError("missing required 'material'", { instance: message });
            return message;
        };

        ServerPlayerSecretHourglass.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userId))
                return "userId: string expected";
            if (!$util.isString(message.material))
                return "material: string expected";
            return null;
        };

        ServerPlayerSecretHourglass.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerPlayerSecretHourglass)
                return object;
            let message = new $root.NT.ServerPlayerSecretHourglass();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.material != null)
                message.material = String(object.material);
            return message;
        };

        ServerPlayerSecretHourglass.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = "";
                object.material = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.material != null && message.hasOwnProperty("material"))
                object.material = message.material;
            return object;
        };

        ServerPlayerSecretHourglass.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerPlayerSecretHourglass.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerPlayerSecretHourglass";
        };

        return ServerPlayerSecretHourglass;
    })();

    NT.ClientCustomModEvent = (function() {

        function ClientCustomModEvent(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientCustomModEvent.prototype.payload = "";

        ClientCustomModEvent.create = function create(properties) {
            return new ClientCustomModEvent(properties);
        };

        ClientCustomModEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.payload);
            return writer;
        };

        ClientCustomModEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientCustomModEvent();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.payload = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("payload"))
                throw $util.ProtocolError("missing required 'payload'", { instance: message });
            return message;
        };

        ClientCustomModEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.payload))
                return "payload: string expected";
            return null;
        };

        ClientCustomModEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientCustomModEvent)
                return object;
            let message = new $root.NT.ClientCustomModEvent();
            if (object.payload != null)
                message.payload = String(object.payload);
            return message;
        };

        ClientCustomModEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.payload = "";
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = message.payload;
            return object;
        };

        ClientCustomModEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientCustomModEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientCustomModEvent";
        };

        return ClientCustomModEvent;
    })();

    NT.ServerCustomModEvent = (function() {

        function ServerCustomModEvent(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerCustomModEvent.prototype.userId = "";
        ServerCustomModEvent.prototype.payload = "";

        ServerCustomModEvent.create = function create(properties) {
            return new ServerCustomModEvent(properties);
        };

        ServerCustomModEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.userId);
            writer.uint32(10).string(message.payload);
            return writer;
        };

        ServerCustomModEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerCustomModEvent();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.userId = reader.string();
                        break;
                    }
                case 1: {
                        message.payload = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("payload"))
                throw $util.ProtocolError("missing required 'payload'", { instance: message });
            return message;
        };

        ServerCustomModEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userId))
                return "userId: string expected";
            if (!$util.isString(message.payload))
                return "payload: string expected";
            return null;
        };

        ServerCustomModEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerCustomModEvent)
                return object;
            let message = new $root.NT.ServerCustomModEvent();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.payload != null)
                message.payload = String(object.payload);
            return message;
        };

        ServerCustomModEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = "";
                object.payload = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = message.payload;
            return object;
        };

        ServerCustomModEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerCustomModEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerCustomModEvent";
        };

        return ServerCustomModEvent;
    })();

    NT.ClientRespawnPenalty = (function() {

        function ClientRespawnPenalty(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientRespawnPenalty.prototype.deaths = 0;

        ClientRespawnPenalty.create = function create(properties) {
            return new ClientRespawnPenalty(properties);
        };

        ClientRespawnPenalty.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(0).uint32(message.deaths);
            return writer;
        };

        ClientRespawnPenalty.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientRespawnPenalty();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.deaths = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("deaths"))
                throw $util.ProtocolError("missing required 'deaths'", { instance: message });
            return message;
        };

        ClientRespawnPenalty.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.deaths))
                return "deaths: integer expected";
            return null;
        };

        ClientRespawnPenalty.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientRespawnPenalty)
                return object;
            let message = new $root.NT.ClientRespawnPenalty();
            if (object.deaths != null)
                message.deaths = object.deaths >>> 0;
            return message;
        };

        ClientRespawnPenalty.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.deaths = 0;
            if (message.deaths != null && message.hasOwnProperty("deaths"))
                object.deaths = message.deaths;
            return object;
        };

        ClientRespawnPenalty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientRespawnPenalty.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientRespawnPenalty";
        };

        return ClientRespawnPenalty;
    })();

    NT.ServerRespawnPenalty = (function() {

        function ServerRespawnPenalty(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerRespawnPenalty.prototype.userId = "";
        ServerRespawnPenalty.prototype.deaths = 0;

        ServerRespawnPenalty.create = function create(properties) {
            return new ServerRespawnPenalty(properties);
        };

        ServerRespawnPenalty.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.userId);
            writer.uint32(8).uint32(message.deaths);
            return writer;
        };

        ServerRespawnPenalty.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerRespawnPenalty();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.userId = reader.string();
                        break;
                    }
                case 1: {
                        message.deaths = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("deaths"))
                throw $util.ProtocolError("missing required 'deaths'", { instance: message });
            return message;
        };

        ServerRespawnPenalty.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userId))
                return "userId: string expected";
            if (!$util.isInteger(message.deaths))
                return "deaths: integer expected";
            return null;
        };

        ServerRespawnPenalty.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerRespawnPenalty)
                return object;
            let message = new $root.NT.ServerRespawnPenalty();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.deaths != null)
                message.deaths = object.deaths >>> 0;
            return message;
        };

        ServerRespawnPenalty.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = "";
                object.deaths = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.deaths != null && message.hasOwnProperty("deaths"))
                object.deaths = message.deaths;
            return object;
        };

        ServerRespawnPenalty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerRespawnPenalty.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerRespawnPenalty";
        };

        return ServerRespawnPenalty;
    })();

    NT.ClientAngerySteve = (function() {

        function ClientAngerySteve(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientAngerySteve.prototype.idk = false;

        ClientAngerySteve.create = function create(properties) {
            return new ClientAngerySteve(properties);
        };

        ClientAngerySteve.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(0).bool(message.idk);
            return writer;
        };

        ClientAngerySteve.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientAngerySteve();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.idk = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("idk"))
                throw $util.ProtocolError("missing required 'idk'", { instance: message });
            return message;
        };

        ClientAngerySteve.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.idk !== "boolean")
                return "idk: boolean expected";
            return null;
        };

        ClientAngerySteve.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientAngerySteve)
                return object;
            let message = new $root.NT.ClientAngerySteve();
            if (object.idk != null)
                message.idk = Boolean(object.idk);
            return message;
        };

        ClientAngerySteve.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.idk = false;
            if (message.idk != null && message.hasOwnProperty("idk"))
                object.idk = message.idk;
            return object;
        };

        ClientAngerySteve.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientAngerySteve.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientAngerySteve";
        };

        return ClientAngerySteve;
    })();

    NT.ServerAngerySteve = (function() {

        function ServerAngerySteve(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerAngerySteve.prototype.userId = "";

        ServerAngerySteve.create = function create(properties) {
            return new ServerAngerySteve(properties);
        };

        ServerAngerySteve.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.userId);
            return writer;
        };

        ServerAngerySteve.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerAngerySteve();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.userId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            return message;
        };

        ServerAngerySteve.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userId))
                return "userId: string expected";
            return null;
        };

        ServerAngerySteve.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerAngerySteve)
                return object;
            let message = new $root.NT.ServerAngerySteve();
            if (object.userId != null)
                message.userId = String(object.userId);
            return message;
        };

        ServerAngerySteve.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.userId = "";
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        ServerAngerySteve.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerAngerySteve.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerAngerySteve";
        };

        return ServerAngerySteve;
    })();

    NT.Wand = (function() {

        function Wand(properties) {
            this.alwaysCast = [];
            this.deck = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Wand.prototype.id = "";
        Wand.prototype.stats = null;
        Wand.prototype.alwaysCast = $util.emptyArray;
        Wand.prototype.deck = $util.emptyArray;
        Wand.prototype.sentBy = null;
        Wand.prototype.contributedBy = null;

        let $oneOfFields;

        Object.defineProperty(Wand.prototype, "_sentBy", {
            get: $util.oneOfGetter($oneOfFields = ["sentBy"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Object.defineProperty(Wand.prototype, "_contributedBy", {
            get: $util.oneOfGetter($oneOfFields = ["contributedBy"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Wand.create = function create(properties) {
            return new Wand(properties);
        };

        Wand.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.id);
            if (message.stats != null && Object.hasOwnProperty.call(message, "stats"))
                $root.NT.Wand.WandStats.encode(message.stats, writer.uint32(10).fork()).ldelim();
            if (message.alwaysCast != null && message.alwaysCast.length)
                for (let i = 0; i < message.alwaysCast.length; ++i)
                    $root.NT.Spell.encode(message.alwaysCast[i], writer.uint32(18).fork()).ldelim();
            if (message.deck != null && message.deck.length)
                for (let i = 0; i < message.deck.length; ++i)
                    $root.NT.Spell.encode(message.deck[i], writer.uint32(26).fork()).ldelim();
            if (message.sentBy != null && Object.hasOwnProperty.call(message, "sentBy"))
                writer.uint32(34).string(message.sentBy);
            if (message.contributedBy != null && Object.hasOwnProperty.call(message, "contributedBy"))
                writer.uint32(42).string(message.contributedBy);
            return writer;
        };

        Wand.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.Wand();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.id = reader.string();
                        break;
                    }
                case 1: {
                        message.stats = $root.NT.Wand.WandStats.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.alwaysCast && message.alwaysCast.length))
                            message.alwaysCast = [];
                        message.alwaysCast.push($root.NT.Spell.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        if (!(message.deck && message.deck.length))
                            message.deck = [];
                        message.deck.push($root.NT.Spell.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        message.sentBy = reader.string();
                        break;
                    }
                case 5: {
                        message.contributedBy = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        Wand.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (!$util.isString(message.id))
                return "id: string expected";
            if (message.stats != null && message.hasOwnProperty("stats")) {
                let error = $root.NT.Wand.WandStats.verify(message.stats);
                if (error)
                    return "stats." + error;
            }
            if (message.alwaysCast != null && message.hasOwnProperty("alwaysCast")) {
                if (!Array.isArray(message.alwaysCast))
                    return "alwaysCast: array expected";
                for (let i = 0; i < message.alwaysCast.length; ++i) {
                    let error = $root.NT.Spell.verify(message.alwaysCast[i]);
                    if (error)
                        return "alwaysCast." + error;
                }
            }
            if (message.deck != null && message.hasOwnProperty("deck")) {
                if (!Array.isArray(message.deck))
                    return "deck: array expected";
                for (let i = 0; i < message.deck.length; ++i) {
                    let error = $root.NT.Spell.verify(message.deck[i]);
                    if (error)
                        return "deck." + error;
                }
            }
            if (message.sentBy != null && message.hasOwnProperty("sentBy")) {
                properties._sentBy = 1;
                if (!$util.isString(message.sentBy))
                    return "sentBy: string expected";
            }
            if (message.contributedBy != null && message.hasOwnProperty("contributedBy")) {
                properties._contributedBy = 1;
                if (!$util.isString(message.contributedBy))
                    return "contributedBy: string expected";
            }
            return null;
        };

        Wand.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.Wand)
                return object;
            let message = new $root.NT.Wand();
            if (object.id != null)
                message.id = String(object.id);
            if (object.stats != null) {
                if (typeof object.stats !== "object")
                    throw TypeError(".NT.Wand.stats: object expected");
                message.stats = $root.NT.Wand.WandStats.fromObject(object.stats);
            }
            if (object.alwaysCast) {
                if (!Array.isArray(object.alwaysCast))
                    throw TypeError(".NT.Wand.alwaysCast: array expected");
                message.alwaysCast = [];
                for (let i = 0; i < object.alwaysCast.length; ++i) {
                    if (typeof object.alwaysCast[i] !== "object")
                        throw TypeError(".NT.Wand.alwaysCast: object expected");
                    message.alwaysCast[i] = $root.NT.Spell.fromObject(object.alwaysCast[i]);
                }
            }
            if (object.deck) {
                if (!Array.isArray(object.deck))
                    throw TypeError(".NT.Wand.deck: array expected");
                message.deck = [];
                for (let i = 0; i < object.deck.length; ++i) {
                    if (typeof object.deck[i] !== "object")
                        throw TypeError(".NT.Wand.deck: object expected");
                    message.deck[i] = $root.NT.Spell.fromObject(object.deck[i]);
                }
            }
            if (object.sentBy != null)
                message.sentBy = String(object.sentBy);
            if (object.contributedBy != null)
                message.contributedBy = String(object.contributedBy);
            return message;
        };

        Wand.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.alwaysCast = [];
                object.deck = [];
            }
            if (options.defaults) {
                object.id = "";
                object.stats = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.stats != null && message.hasOwnProperty("stats"))
                object.stats = $root.NT.Wand.WandStats.toObject(message.stats, options);
            if (message.alwaysCast && message.alwaysCast.length) {
                object.alwaysCast = [];
                for (let j = 0; j < message.alwaysCast.length; ++j)
                    object.alwaysCast[j] = $root.NT.Spell.toObject(message.alwaysCast[j], options);
            }
            if (message.deck && message.deck.length) {
                object.deck = [];
                for (let j = 0; j < message.deck.length; ++j)
                    object.deck[j] = $root.NT.Spell.toObject(message.deck[j], options);
            }
            if (message.sentBy != null && message.hasOwnProperty("sentBy")) {
                object.sentBy = message.sentBy;
                if (options.oneofs)
                    object._sentBy = "sentBy";
            }
            if (message.contributedBy != null && message.hasOwnProperty("contributedBy")) {
                object.contributedBy = message.contributedBy;
                if (options.oneofs)
                    object._contributedBy = "contributedBy";
            }
            return object;
        };

        Wand.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Wand.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.Wand";
        };

        Wand.WandStats = (function() {

            function WandStats(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            WandStats.prototype.sprite = "";
            WandStats.prototype.named = false;
            WandStats.prototype.uiName = "";
            WandStats.prototype.manaMax = 0;
            WandStats.prototype.manaChargeSpeed = 0;
            WandStats.prototype.reloadTime = 0;
            WandStats.prototype.actionsPerRound = 0;
            WandStats.prototype.deckCapacity = 0;
            WandStats.prototype.shuffleDeckWhenEmpty = false;
            WandStats.prototype.spreadDegrees = 0;
            WandStats.prototype.speedMultiplier = 0;
            WandStats.prototype.fireRateWait = 0;
            WandStats.prototype.tipX = 0;
            WandStats.prototype.tipY = 0;
            WandStats.prototype.gripX = 0;
            WandStats.prototype.gripY = 0;

            WandStats.create = function create(properties) {
                return new WandStats(properties);
            };

            WandStats.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(2).string(message.sprite);
                writer.uint32(8).bool(message.named);
                writer.uint32(18).string(message.uiName);
                writer.uint32(29).float(message.manaMax);
                writer.uint32(37).float(message.manaChargeSpeed);
                writer.uint32(40).int32(message.reloadTime);
                writer.uint32(48).uint32(message.actionsPerRound);
                writer.uint32(56).uint32(message.deckCapacity);
                writer.uint32(64).bool(message.shuffleDeckWhenEmpty);
                writer.uint32(77).float(message.spreadDegrees);
                writer.uint32(85).float(message.speedMultiplier);
                writer.uint32(88).int32(message.fireRateWait);
                writer.uint32(101).float(message.tipX);
                writer.uint32(109).float(message.tipY);
                writer.uint32(117).float(message.gripX);
                writer.uint32(125).float(message.gripY);
                return writer;
            };

            WandStats.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.Wand.WandStats();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 0: {
                            message.sprite = reader.string();
                            break;
                        }
                    case 1: {
                            message.named = reader.bool();
                            break;
                        }
                    case 2: {
                            message.uiName = reader.string();
                            break;
                        }
                    case 3: {
                            message.manaMax = reader.float();
                            break;
                        }
                    case 4: {
                            message.manaChargeSpeed = reader.float();
                            break;
                        }
                    case 5: {
                            message.reloadTime = reader.int32();
                            break;
                        }
                    case 6: {
                            message.actionsPerRound = reader.uint32();
                            break;
                        }
                    case 7: {
                            message.deckCapacity = reader.uint32();
                            break;
                        }
                    case 8: {
                            message.shuffleDeckWhenEmpty = reader.bool();
                            break;
                        }
                    case 9: {
                            message.spreadDegrees = reader.float();
                            break;
                        }
                    case 10: {
                            message.speedMultiplier = reader.float();
                            break;
                        }
                    case 11: {
                            message.fireRateWait = reader.int32();
                            break;
                        }
                    case 12: {
                            message.tipX = reader.float();
                            break;
                        }
                    case 13: {
                            message.tipY = reader.float();
                            break;
                        }
                    case 14: {
                            message.gripX = reader.float();
                            break;
                        }
                    case 15: {
                            message.gripY = reader.float();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("sprite"))
                    throw $util.ProtocolError("missing required 'sprite'", { instance: message });
                if (!message.hasOwnProperty("named"))
                    throw $util.ProtocolError("missing required 'named'", { instance: message });
                if (!message.hasOwnProperty("uiName"))
                    throw $util.ProtocolError("missing required 'uiName'", { instance: message });
                if (!message.hasOwnProperty("manaMax"))
                    throw $util.ProtocolError("missing required 'manaMax'", { instance: message });
                if (!message.hasOwnProperty("manaChargeSpeed"))
                    throw $util.ProtocolError("missing required 'manaChargeSpeed'", { instance: message });
                if (!message.hasOwnProperty("reloadTime"))
                    throw $util.ProtocolError("missing required 'reloadTime'", { instance: message });
                if (!message.hasOwnProperty("actionsPerRound"))
                    throw $util.ProtocolError("missing required 'actionsPerRound'", { instance: message });
                if (!message.hasOwnProperty("deckCapacity"))
                    throw $util.ProtocolError("missing required 'deckCapacity'", { instance: message });
                if (!message.hasOwnProperty("shuffleDeckWhenEmpty"))
                    throw $util.ProtocolError("missing required 'shuffleDeckWhenEmpty'", { instance: message });
                if (!message.hasOwnProperty("spreadDegrees"))
                    throw $util.ProtocolError("missing required 'spreadDegrees'", { instance: message });
                if (!message.hasOwnProperty("speedMultiplier"))
                    throw $util.ProtocolError("missing required 'speedMultiplier'", { instance: message });
                if (!message.hasOwnProperty("fireRateWait"))
                    throw $util.ProtocolError("missing required 'fireRateWait'", { instance: message });
                if (!message.hasOwnProperty("tipX"))
                    throw $util.ProtocolError("missing required 'tipX'", { instance: message });
                if (!message.hasOwnProperty("tipY"))
                    throw $util.ProtocolError("missing required 'tipY'", { instance: message });
                if (!message.hasOwnProperty("gripX"))
                    throw $util.ProtocolError("missing required 'gripX'", { instance: message });
                if (!message.hasOwnProperty("gripY"))
                    throw $util.ProtocolError("missing required 'gripY'", { instance: message });
                return message;
            };

            WandStats.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.sprite))
                    return "sprite: string expected";
                if (typeof message.named !== "boolean")
                    return "named: boolean expected";
                if (!$util.isString(message.uiName))
                    return "uiName: string expected";
                if (typeof message.manaMax !== "number")
                    return "manaMax: number expected";
                if (typeof message.manaChargeSpeed !== "number")
                    return "manaChargeSpeed: number expected";
                if (!$util.isInteger(message.reloadTime))
                    return "reloadTime: integer expected";
                if (!$util.isInteger(message.actionsPerRound))
                    return "actionsPerRound: integer expected";
                if (!$util.isInteger(message.deckCapacity))
                    return "deckCapacity: integer expected";
                if (typeof message.shuffleDeckWhenEmpty !== "boolean")
                    return "shuffleDeckWhenEmpty: boolean expected";
                if (typeof message.spreadDegrees !== "number")
                    return "spreadDegrees: number expected";
                if (typeof message.speedMultiplier !== "number")
                    return "speedMultiplier: number expected";
                if (!$util.isInteger(message.fireRateWait))
                    return "fireRateWait: integer expected";
                if (typeof message.tipX !== "number")
                    return "tipX: number expected";
                if (typeof message.tipY !== "number")
                    return "tipY: number expected";
                if (typeof message.gripX !== "number")
                    return "gripX: number expected";
                if (typeof message.gripY !== "number")
                    return "gripY: number expected";
                return null;
            };

            WandStats.fromObject = function fromObject(object) {
                if (object instanceof $root.NT.Wand.WandStats)
                    return object;
                let message = new $root.NT.Wand.WandStats();
                if (object.sprite != null)
                    message.sprite = String(object.sprite);
                if (object.named != null)
                    message.named = Boolean(object.named);
                if (object.uiName != null)
                    message.uiName = String(object.uiName);
                if (object.manaMax != null)
                    message.manaMax = Number(object.manaMax);
                if (object.manaChargeSpeed != null)
                    message.manaChargeSpeed = Number(object.manaChargeSpeed);
                if (object.reloadTime != null)
                    message.reloadTime = object.reloadTime | 0;
                if (object.actionsPerRound != null)
                    message.actionsPerRound = object.actionsPerRound >>> 0;
                if (object.deckCapacity != null)
                    message.deckCapacity = object.deckCapacity >>> 0;
                if (object.shuffleDeckWhenEmpty != null)
                    message.shuffleDeckWhenEmpty = Boolean(object.shuffleDeckWhenEmpty);
                if (object.spreadDegrees != null)
                    message.spreadDegrees = Number(object.spreadDegrees);
                if (object.speedMultiplier != null)
                    message.speedMultiplier = Number(object.speedMultiplier);
                if (object.fireRateWait != null)
                    message.fireRateWait = object.fireRateWait | 0;
                if (object.tipX != null)
                    message.tipX = Number(object.tipX);
                if (object.tipY != null)
                    message.tipY = Number(object.tipY);
                if (object.gripX != null)
                    message.gripX = Number(object.gripX);
                if (object.gripY != null)
                    message.gripY = Number(object.gripY);
                return message;
            };

            WandStats.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.sprite = "";
                    object.named = false;
                    object.uiName = "";
                    object.manaMax = 0;
                    object.manaChargeSpeed = 0;
                    object.reloadTime = 0;
                    object.actionsPerRound = 0;
                    object.deckCapacity = 0;
                    object.shuffleDeckWhenEmpty = false;
                    object.spreadDegrees = 0;
                    object.speedMultiplier = 0;
                    object.fireRateWait = 0;
                    object.tipX = 0;
                    object.tipY = 0;
                    object.gripX = 0;
                    object.gripY = 0;
                }
                if (message.sprite != null && message.hasOwnProperty("sprite"))
                    object.sprite = message.sprite;
                if (message.named != null && message.hasOwnProperty("named"))
                    object.named = message.named;
                if (message.uiName != null && message.hasOwnProperty("uiName"))
                    object.uiName = message.uiName;
                if (message.manaMax != null && message.hasOwnProperty("manaMax"))
                    object.manaMax = options.json && !isFinite(message.manaMax) ? String(message.manaMax) : message.manaMax;
                if (message.manaChargeSpeed != null && message.hasOwnProperty("manaChargeSpeed"))
                    object.manaChargeSpeed = options.json && !isFinite(message.manaChargeSpeed) ? String(message.manaChargeSpeed) : message.manaChargeSpeed;
                if (message.reloadTime != null && message.hasOwnProperty("reloadTime"))
                    object.reloadTime = message.reloadTime;
                if (message.actionsPerRound != null && message.hasOwnProperty("actionsPerRound"))
                    object.actionsPerRound = message.actionsPerRound;
                if (message.deckCapacity != null && message.hasOwnProperty("deckCapacity"))
                    object.deckCapacity = message.deckCapacity;
                if (message.shuffleDeckWhenEmpty != null && message.hasOwnProperty("shuffleDeckWhenEmpty"))
                    object.shuffleDeckWhenEmpty = message.shuffleDeckWhenEmpty;
                if (message.spreadDegrees != null && message.hasOwnProperty("spreadDegrees"))
                    object.spreadDegrees = options.json && !isFinite(message.spreadDegrees) ? String(message.spreadDegrees) : message.spreadDegrees;
                if (message.speedMultiplier != null && message.hasOwnProperty("speedMultiplier"))
                    object.speedMultiplier = options.json && !isFinite(message.speedMultiplier) ? String(message.speedMultiplier) : message.speedMultiplier;
                if (message.fireRateWait != null && message.hasOwnProperty("fireRateWait"))
                    object.fireRateWait = message.fireRateWait;
                if (message.tipX != null && message.hasOwnProperty("tipX"))
                    object.tipX = options.json && !isFinite(message.tipX) ? String(message.tipX) : message.tipX;
                if (message.tipY != null && message.hasOwnProperty("tipY"))
                    object.tipY = options.json && !isFinite(message.tipY) ? String(message.tipY) : message.tipY;
                if (message.gripX != null && message.hasOwnProperty("gripX"))
                    object.gripX = options.json && !isFinite(message.gripX) ? String(message.gripX) : message.gripX;
                if (message.gripY != null && message.hasOwnProperty("gripY"))
                    object.gripY = options.json && !isFinite(message.gripY) ? String(message.gripY) : message.gripY;
                return object;
            };

            WandStats.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            WandStats.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/NT.Wand.WandStats";
            };

            return WandStats;
        })();

        return Wand;
    })();

    NT.Spell = (function() {

        function Spell(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Spell.prototype.id = "";
        Spell.prototype.gameId = "";
        Spell.prototype.sentBy = null;
        Spell.prototype.contributedBy = null;
        Spell.prototype.usesRemaining = 0;

        let $oneOfFields;

        Object.defineProperty(Spell.prototype, "_sentBy", {
            get: $util.oneOfGetter($oneOfFields = ["sentBy"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Object.defineProperty(Spell.prototype, "_contributedBy", {
            get: $util.oneOfGetter($oneOfFields = ["contributedBy"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Spell.create = function create(properties) {
            return new Spell(properties);
        };

        Spell.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.id);
            writer.uint32(10).string(message.gameId);
            if (message.sentBy != null && Object.hasOwnProperty.call(message, "sentBy"))
                writer.uint32(18).string(message.sentBy);
            if (message.contributedBy != null && Object.hasOwnProperty.call(message, "contributedBy"))
                writer.uint32(26).string(message.contributedBy);
            writer.uint32(32).int32(message.usesRemaining);
            return writer;
        };

        Spell.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.Spell();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.id = reader.string();
                        break;
                    }
                case 1: {
                        message.gameId = reader.string();
                        break;
                    }
                case 2: {
                        message.sentBy = reader.string();
                        break;
                    }
                case 3: {
                        message.contributedBy = reader.string();
                        break;
                    }
                case 4: {
                        message.usesRemaining = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("gameId"))
                throw $util.ProtocolError("missing required 'gameId'", { instance: message });
            if (!message.hasOwnProperty("usesRemaining"))
                throw $util.ProtocolError("missing required 'usesRemaining'", { instance: message });
            return message;
        };

        Spell.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (!$util.isString(message.id))
                return "id: string expected";
            if (!$util.isString(message.gameId))
                return "gameId: string expected";
            if (message.sentBy != null && message.hasOwnProperty("sentBy")) {
                properties._sentBy = 1;
                if (!$util.isString(message.sentBy))
                    return "sentBy: string expected";
            }
            if (message.contributedBy != null && message.hasOwnProperty("contributedBy")) {
                properties._contributedBy = 1;
                if (!$util.isString(message.contributedBy))
                    return "contributedBy: string expected";
            }
            if (!$util.isInteger(message.usesRemaining))
                return "usesRemaining: integer expected";
            return null;
        };

        Spell.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.Spell)
                return object;
            let message = new $root.NT.Spell();
            if (object.id != null)
                message.id = String(object.id);
            if (object.gameId != null)
                message.gameId = String(object.gameId);
            if (object.sentBy != null)
                message.sentBy = String(object.sentBy);
            if (object.contributedBy != null)
                message.contributedBy = String(object.contributedBy);
            if (object.usesRemaining != null)
                message.usesRemaining = object.usesRemaining | 0;
            return message;
        };

        Spell.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.gameId = "";
                object.usesRemaining = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.sentBy != null && message.hasOwnProperty("sentBy")) {
                object.sentBy = message.sentBy;
                if (options.oneofs)
                    object._sentBy = "sentBy";
            }
            if (message.contributedBy != null && message.hasOwnProperty("contributedBy")) {
                object.contributedBy = message.contributedBy;
                if (options.oneofs)
                    object._contributedBy = "contributedBy";
            }
            if (message.usesRemaining != null && message.hasOwnProperty("usesRemaining"))
                object.usesRemaining = message.usesRemaining;
            return object;
        };

        Spell.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Spell.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.Spell";
        };

        return Spell;
    })();

    NT.Item = (function() {

        function Item(properties) {
            this.content = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        Item.prototype.id = "";
        Item.prototype.color = null;
        Item.prototype.content = $util.emptyArray;
        Item.prototype.sentBy = null;
        Item.prototype.contributedBy = null;
        Item.prototype.isChest = false;

        let $oneOfFields;

        Object.defineProperty(Item.prototype, "_sentBy", {
            get: $util.oneOfGetter($oneOfFields = ["sentBy"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Object.defineProperty(Item.prototype, "_contributedBy", {
            get: $util.oneOfGetter($oneOfFields = ["contributedBy"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Item.create = function create(properties) {
            return new Item(properties);
        };

        Item.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.id);
            $root.NT.Item.Color.encode(message.color, writer.uint32(10).fork()).ldelim();
            if (message.content != null && message.content.length)
                for (let i = 0; i < message.content.length; ++i)
                    $root.NT.Item.Material.encode(message.content[i], writer.uint32(18).fork()).ldelim();
            if (message.sentBy != null && Object.hasOwnProperty.call(message, "sentBy"))
                writer.uint32(26).string(message.sentBy);
            if (message.contributedBy != null && Object.hasOwnProperty.call(message, "contributedBy"))
                writer.uint32(34).string(message.contributedBy);
            writer.uint32(40).bool(message.isChest);
            return writer;
        };

        Item.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.Item();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.id = reader.string();
                        break;
                    }
                case 1: {
                        message.color = $root.NT.Item.Color.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.content && message.content.length))
                            message.content = [];
                        message.content.push($root.NT.Item.Material.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.sentBy = reader.string();
                        break;
                    }
                case 4: {
                        message.contributedBy = reader.string();
                        break;
                    }
                case 5: {
                        message.isChest = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("color"))
                throw $util.ProtocolError("missing required 'color'", { instance: message });
            if (!message.hasOwnProperty("isChest"))
                throw $util.ProtocolError("missing required 'isChest'", { instance: message });
            return message;
        };

        Item.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (!$util.isString(message.id))
                return "id: string expected";
            {
                let error = $root.NT.Item.Color.verify(message.color);
                if (error)
                    return "color." + error;
            }
            if (message.content != null && message.hasOwnProperty("content")) {
                if (!Array.isArray(message.content))
                    return "content: array expected";
                for (let i = 0; i < message.content.length; ++i) {
                    let error = $root.NT.Item.Material.verify(message.content[i]);
                    if (error)
                        return "content." + error;
                }
            }
            if (message.sentBy != null && message.hasOwnProperty("sentBy")) {
                properties._sentBy = 1;
                if (!$util.isString(message.sentBy))
                    return "sentBy: string expected";
            }
            if (message.contributedBy != null && message.hasOwnProperty("contributedBy")) {
                properties._contributedBy = 1;
                if (!$util.isString(message.contributedBy))
                    return "contributedBy: string expected";
            }
            if (typeof message.isChest !== "boolean")
                return "isChest: boolean expected";
            return null;
        };

        Item.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.Item)
                return object;
            let message = new $root.NT.Item();
            if (object.id != null)
                message.id = String(object.id);
            if (object.color != null) {
                if (typeof object.color !== "object")
                    throw TypeError(".NT.Item.color: object expected");
                message.color = $root.NT.Item.Color.fromObject(object.color);
            }
            if (object.content) {
                if (!Array.isArray(object.content))
                    throw TypeError(".NT.Item.content: array expected");
                message.content = [];
                for (let i = 0; i < object.content.length; ++i) {
                    if (typeof object.content[i] !== "object")
                        throw TypeError(".NT.Item.content: object expected");
                    message.content[i] = $root.NT.Item.Material.fromObject(object.content[i]);
                }
            }
            if (object.sentBy != null)
                message.sentBy = String(object.sentBy);
            if (object.contributedBy != null)
                message.contributedBy = String(object.contributedBy);
            if (object.isChest != null)
                message.isChest = Boolean(object.isChest);
            return message;
        };

        Item.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.content = [];
            if (options.defaults) {
                object.id = "";
                object.color = null;
                object.isChest = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.color != null && message.hasOwnProperty("color"))
                object.color = $root.NT.Item.Color.toObject(message.color, options);
            if (message.content && message.content.length) {
                object.content = [];
                for (let j = 0; j < message.content.length; ++j)
                    object.content[j] = $root.NT.Item.Material.toObject(message.content[j], options);
            }
            if (message.sentBy != null && message.hasOwnProperty("sentBy")) {
                object.sentBy = message.sentBy;
                if (options.oneofs)
                    object._sentBy = "sentBy";
            }
            if (message.contributedBy != null && message.hasOwnProperty("contributedBy")) {
                object.contributedBy = message.contributedBy;
                if (options.oneofs)
                    object._contributedBy = "contributedBy";
            }
            if (message.isChest != null && message.hasOwnProperty("isChest"))
                object.isChest = message.isChest;
            return object;
        };

        Item.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Item.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.Item";
        };

        Item.Color = (function() {

            function Color(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            Color.prototype.r = 0;
            Color.prototype.g = 0;
            Color.prototype.b = 0;

            Color.create = function create(properties) {
                return new Color(properties);
            };

            Color.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(5).float(message.r);
                writer.uint32(13).float(message.g);
                writer.uint32(21).float(message.b);
                return writer;
            };

            Color.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.Item.Color();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 0: {
                            message.r = reader.float();
                            break;
                        }
                    case 1: {
                            message.g = reader.float();
                            break;
                        }
                    case 2: {
                            message.b = reader.float();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("r"))
                    throw $util.ProtocolError("missing required 'r'", { instance: message });
                if (!message.hasOwnProperty("g"))
                    throw $util.ProtocolError("missing required 'g'", { instance: message });
                if (!message.hasOwnProperty("b"))
                    throw $util.ProtocolError("missing required 'b'", { instance: message });
                return message;
            };

            Color.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (typeof message.r !== "number")
                    return "r: number expected";
                if (typeof message.g !== "number")
                    return "g: number expected";
                if (typeof message.b !== "number")
                    return "b: number expected";
                return null;
            };

            Color.fromObject = function fromObject(object) {
                if (object instanceof $root.NT.Item.Color)
                    return object;
                let message = new $root.NT.Item.Color();
                if (object.r != null)
                    message.r = Number(object.r);
                if (object.g != null)
                    message.g = Number(object.g);
                if (object.b != null)
                    message.b = Number(object.b);
                return message;
            };

            Color.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.r = 0;
                    object.g = 0;
                    object.b = 0;
                }
                if (message.r != null && message.hasOwnProperty("r"))
                    object.r = options.json && !isFinite(message.r) ? String(message.r) : message.r;
                if (message.g != null && message.hasOwnProperty("g"))
                    object.g = options.json && !isFinite(message.g) ? String(message.g) : message.g;
                if (message.b != null && message.hasOwnProperty("b"))
                    object.b = options.json && !isFinite(message.b) ? String(message.b) : message.b;
                return object;
            };

            Color.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Color.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/NT.Item.Color";
            };

            return Color;
        })();

        Item.Material = (function() {

            function Material(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            Material.prototype.id = 0;
            Material.prototype.amount = 0;

            Material.create = function create(properties) {
                return new Material(properties);
            };

            Material.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(0).uint32(message.id);
                writer.uint32(8).uint32(message.amount);
                return writer;
            };

            Material.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.Item.Material();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 0: {
                            message.id = reader.uint32();
                            break;
                        }
                    case 1: {
                            message.amount = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("id"))
                    throw $util.ProtocolError("missing required 'id'", { instance: message });
                if (!message.hasOwnProperty("amount"))
                    throw $util.ProtocolError("missing required 'amount'", { instance: message });
                return message;
            };

            Material.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
                if (!$util.isInteger(message.amount))
                    return "amount: integer expected";
                return null;
            };

            Material.fromObject = function fromObject(object) {
                if (object instanceof $root.NT.Item.Material)
                    return object;
                let message = new $root.NT.Item.Material();
                if (object.id != null)
                    message.id = object.id >>> 0;
                if (object.amount != null)
                    message.amount = object.amount >>> 0;
                return message;
            };

            Material.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.amount = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.amount != null && message.hasOwnProperty("amount"))
                    object.amount = message.amount;
                return object;
            };

            Material.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Material.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/NT.Item.Material";
            };

            return Material;
        })();

        return Item;
    })();

    NT.EntityItem = (function() {

        function EntityItem(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        EntityItem.prototype.id = "";
        EntityItem.prototype.path = "";
        EntityItem.prototype.sprite = "";
        EntityItem.prototype.sentBy = null;

        let $oneOfFields;

        Object.defineProperty(EntityItem.prototype, "_sentBy", {
            get: $util.oneOfGetter($oneOfFields = ["sentBy"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        EntityItem.create = function create(properties) {
            return new EntityItem(properties);
        };

        EntityItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.id);
            writer.uint32(10).string(message.path);
            writer.uint32(18).string(message.sprite);
            if (message.sentBy != null && Object.hasOwnProperty.call(message, "sentBy"))
                writer.uint32(26).string(message.sentBy);
            return writer;
        };

        EntityItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.EntityItem();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.id = reader.string();
                        break;
                    }
                case 1: {
                        message.path = reader.string();
                        break;
                    }
                case 2: {
                        message.sprite = reader.string();
                        break;
                    }
                case 3: {
                        message.sentBy = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("path"))
                throw $util.ProtocolError("missing required 'path'", { instance: message });
            if (!message.hasOwnProperty("sprite"))
                throw $util.ProtocolError("missing required 'sprite'", { instance: message });
            return message;
        };

        EntityItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (!$util.isString(message.id))
                return "id: string expected";
            if (!$util.isString(message.path))
                return "path: string expected";
            if (!$util.isString(message.sprite))
                return "sprite: string expected";
            if (message.sentBy != null && message.hasOwnProperty("sentBy")) {
                properties._sentBy = 1;
                if (!$util.isString(message.sentBy))
                    return "sentBy: string expected";
            }
            return null;
        };

        EntityItem.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.EntityItem)
                return object;
            let message = new $root.NT.EntityItem();
            if (object.id != null)
                message.id = String(object.id);
            if (object.path != null)
                message.path = String(object.path);
            if (object.sprite != null)
                message.sprite = String(object.sprite);
            if (object.sentBy != null)
                message.sentBy = String(object.sentBy);
            return message;
        };

        EntityItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.path = "";
                object.sprite = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.path != null && message.hasOwnProperty("path"))
                object.path = message.path;
            if (message.sprite != null && message.hasOwnProperty("sprite"))
                object.sprite = message.sprite;
            if (message.sentBy != null && message.hasOwnProperty("sentBy")) {
                object.sentBy = message.sentBy;
                if (options.oneofs)
                    object._sentBy = "sentBy";
            }
            return object;
        };

        EntityItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        EntityItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.EntityItem";
        };

        return EntityItem;
    })();

    NT.LobbyAction = (function() {

        function LobbyAction(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        LobbyAction.prototype.cRoomCreate = null;
        LobbyAction.prototype.sRoomCreated = null;
        LobbyAction.prototype.sRoomCreateFailed = null;
        LobbyAction.prototype.cRoomUpdate = null;
        LobbyAction.prototype.sRoomUpdated = null;
        LobbyAction.prototype.sRoomUpdateFailed = null;
        LobbyAction.prototype.cRoomFlagsUpdate = null;
        LobbyAction.prototype.sRoomFlagsUpdated = null;
        LobbyAction.prototype.sRoomFlagsUpdateFailed = null;
        LobbyAction.prototype.cRoomDelete = null;
        LobbyAction.prototype.sRoomDeleted = null;
        LobbyAction.prototype.cJoinRoom = null;
        LobbyAction.prototype.sJoinRoomSuccess = null;
        LobbyAction.prototype.sJoinRoomFailed = null;
        LobbyAction.prototype.sUserJoinedRoom = null;
        LobbyAction.prototype.cLeaveRoom = null;
        LobbyAction.prototype.sUserLeftRoom = null;
        LobbyAction.prototype.cKickUser = null;
        LobbyAction.prototype.sUserKicked = null;
        LobbyAction.prototype.cBanUser = null;
        LobbyAction.prototype.sUserBanned = null;
        LobbyAction.prototype.cReadyState = null;
        LobbyAction.prototype.sUserReadyState = null;
        LobbyAction.prototype.cStartRun = null;
        LobbyAction.prototype.sHostStart = null;
        LobbyAction.prototype.cRequestRoomList = null;
        LobbyAction.prototype.sRoomList = null;
        LobbyAction.prototype.sDisconnected = null;
        LobbyAction.prototype.sRoomAddToList = null;
        LobbyAction.prototype.cRunOver = null;

        let $oneOfFields;

        Object.defineProperty(LobbyAction.prototype, "action", {
            get: $util.oneOfGetter($oneOfFields = ["cRoomCreate", "sRoomCreated", "sRoomCreateFailed", "cRoomUpdate", "sRoomUpdated", "sRoomUpdateFailed", "cRoomFlagsUpdate", "sRoomFlagsUpdated", "sRoomFlagsUpdateFailed", "cRoomDelete", "sRoomDeleted", "cJoinRoom", "sJoinRoomSuccess", "sJoinRoomFailed", "sUserJoinedRoom", "cLeaveRoom", "sUserLeftRoom", "cKickUser", "sUserKicked", "cBanUser", "sUserBanned", "cReadyState", "sUserReadyState", "cStartRun", "sHostStart", "cRequestRoomList", "sRoomList", "sDisconnected", "sRoomAddToList", "cRunOver"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        LobbyAction.create = function create(properties) {
            return new LobbyAction(properties);
        };

        LobbyAction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cRoomCreate != null && Object.hasOwnProperty.call(message, "cRoomCreate"))
                $root.NT.ClientRoomCreate.encode(message.cRoomCreate, writer.uint32(2).fork()).ldelim();
            if (message.sRoomCreated != null && Object.hasOwnProperty.call(message, "sRoomCreated"))
                $root.NT.ServerRoomCreated.encode(message.sRoomCreated, writer.uint32(10).fork()).ldelim();
            if (message.sRoomCreateFailed != null && Object.hasOwnProperty.call(message, "sRoomCreateFailed"))
                $root.NT.ServerRoomCreateFailed.encode(message.sRoomCreateFailed, writer.uint32(18).fork()).ldelim();
            if (message.cRoomUpdate != null && Object.hasOwnProperty.call(message, "cRoomUpdate"))
                $root.NT.ClientRoomUpdate.encode(message.cRoomUpdate, writer.uint32(26).fork()).ldelim();
            if (message.sRoomUpdated != null && Object.hasOwnProperty.call(message, "sRoomUpdated"))
                $root.NT.ServerRoomUpdated.encode(message.sRoomUpdated, writer.uint32(34).fork()).ldelim();
            if (message.sRoomUpdateFailed != null && Object.hasOwnProperty.call(message, "sRoomUpdateFailed"))
                $root.NT.ServerRoomUpdateFailed.encode(message.sRoomUpdateFailed, writer.uint32(42).fork()).ldelim();
            if (message.cRoomFlagsUpdate != null && Object.hasOwnProperty.call(message, "cRoomFlagsUpdate"))
                $root.NT.ClientRoomFlagsUpdate.encode(message.cRoomFlagsUpdate, writer.uint32(50).fork()).ldelim();
            if (message.sRoomFlagsUpdated != null && Object.hasOwnProperty.call(message, "sRoomFlagsUpdated"))
                $root.NT.ServerRoomFlagsUpdated.encode(message.sRoomFlagsUpdated, writer.uint32(58).fork()).ldelim();
            if (message.sRoomFlagsUpdateFailed != null && Object.hasOwnProperty.call(message, "sRoomFlagsUpdateFailed"))
                $root.NT.ServerRoomFlagsUpdateFailed.encode(message.sRoomFlagsUpdateFailed, writer.uint32(66).fork()).ldelim();
            if (message.cRoomDelete != null && Object.hasOwnProperty.call(message, "cRoomDelete"))
                $root.NT.ClientRoomDelete.encode(message.cRoomDelete, writer.uint32(74).fork()).ldelim();
            if (message.sRoomDeleted != null && Object.hasOwnProperty.call(message, "sRoomDeleted"))
                $root.NT.ServerRoomDeleted.encode(message.sRoomDeleted, writer.uint32(82).fork()).ldelim();
            if (message.cJoinRoom != null && Object.hasOwnProperty.call(message, "cJoinRoom"))
                $root.NT.ClientJoinRoom.encode(message.cJoinRoom, writer.uint32(90).fork()).ldelim();
            if (message.sJoinRoomSuccess != null && Object.hasOwnProperty.call(message, "sJoinRoomSuccess"))
                $root.NT.ServerJoinRoomSuccess.encode(message.sJoinRoomSuccess, writer.uint32(98).fork()).ldelim();
            if (message.sJoinRoomFailed != null && Object.hasOwnProperty.call(message, "sJoinRoomFailed"))
                $root.NT.ServerJoinRoomFailed.encode(message.sJoinRoomFailed, writer.uint32(106).fork()).ldelim();
            if (message.sUserJoinedRoom != null && Object.hasOwnProperty.call(message, "sUserJoinedRoom"))
                $root.NT.ServerUserJoinedRoom.encode(message.sUserJoinedRoom, writer.uint32(114).fork()).ldelim();
            if (message.cLeaveRoom != null && Object.hasOwnProperty.call(message, "cLeaveRoom"))
                $root.NT.ClientLeaveRoom.encode(message.cLeaveRoom, writer.uint32(122).fork()).ldelim();
            if (message.sUserLeftRoom != null && Object.hasOwnProperty.call(message, "sUserLeftRoom"))
                $root.NT.ServerUserLeftRoom.encode(message.sUserLeftRoom, writer.uint32(130).fork()).ldelim();
            if (message.cKickUser != null && Object.hasOwnProperty.call(message, "cKickUser"))
                $root.NT.ClientKickUser.encode(message.cKickUser, writer.uint32(138).fork()).ldelim();
            if (message.sUserKicked != null && Object.hasOwnProperty.call(message, "sUserKicked"))
                $root.NT.ServerUserKicked.encode(message.sUserKicked, writer.uint32(146).fork()).ldelim();
            if (message.cBanUser != null && Object.hasOwnProperty.call(message, "cBanUser"))
                $root.NT.ClientBanUser.encode(message.cBanUser, writer.uint32(154).fork()).ldelim();
            if (message.sUserBanned != null && Object.hasOwnProperty.call(message, "sUserBanned"))
                $root.NT.ServerUserBanned.encode(message.sUserBanned, writer.uint32(162).fork()).ldelim();
            if (message.cReadyState != null && Object.hasOwnProperty.call(message, "cReadyState"))
                $root.NT.ClientReadyState.encode(message.cReadyState, writer.uint32(170).fork()).ldelim();
            if (message.sUserReadyState != null && Object.hasOwnProperty.call(message, "sUserReadyState"))
                $root.NT.ServerUserReadyState.encode(message.sUserReadyState, writer.uint32(178).fork()).ldelim();
            if (message.cStartRun != null && Object.hasOwnProperty.call(message, "cStartRun"))
                $root.NT.ClientStartRun.encode(message.cStartRun, writer.uint32(186).fork()).ldelim();
            if (message.sHostStart != null && Object.hasOwnProperty.call(message, "sHostStart"))
                $root.NT.ServerHostStart.encode(message.sHostStart, writer.uint32(194).fork()).ldelim();
            if (message.cRequestRoomList != null && Object.hasOwnProperty.call(message, "cRequestRoomList"))
                $root.NT.ClientRequestRoomList.encode(message.cRequestRoomList, writer.uint32(210).fork()).ldelim();
            if (message.sRoomList != null && Object.hasOwnProperty.call(message, "sRoomList"))
                $root.NT.ServerRoomList.encode(message.sRoomList, writer.uint32(218).fork()).ldelim();
            if (message.sDisconnected != null && Object.hasOwnProperty.call(message, "sDisconnected"))
                $root.NT.ServerDisconnected.encode(message.sDisconnected, writer.uint32(242).fork()).ldelim();
            if (message.sRoomAddToList != null && Object.hasOwnProperty.call(message, "sRoomAddToList"))
                $root.NT.ServerRoomAddToList.encode(message.sRoomAddToList, writer.uint32(250).fork()).ldelim();
            if (message.cRunOver != null && Object.hasOwnProperty.call(message, "cRunOver"))
                $root.NT.ClientRunOver.encode(message.cRunOver, writer.uint32(258).fork()).ldelim();
            return writer;
        };

        LobbyAction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.LobbyAction();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.cRoomCreate = $root.NT.ClientRoomCreate.decode(reader, reader.uint32());
                        break;
                    }
                case 1: {
                        message.sRoomCreated = $root.NT.ServerRoomCreated.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.sRoomCreateFailed = $root.NT.ServerRoomCreateFailed.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.cRoomUpdate = $root.NT.ClientRoomUpdate.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.sRoomUpdated = $root.NT.ServerRoomUpdated.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.sRoomUpdateFailed = $root.NT.ServerRoomUpdateFailed.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.cRoomFlagsUpdate = $root.NT.ClientRoomFlagsUpdate.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.sRoomFlagsUpdated = $root.NT.ServerRoomFlagsUpdated.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.sRoomFlagsUpdateFailed = $root.NT.ServerRoomFlagsUpdateFailed.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.cRoomDelete = $root.NT.ClientRoomDelete.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.sRoomDeleted = $root.NT.ServerRoomDeleted.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.cJoinRoom = $root.NT.ClientJoinRoom.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.sJoinRoomSuccess = $root.NT.ServerJoinRoomSuccess.decode(reader, reader.uint32());
                        break;
                    }
                case 13: {
                        message.sJoinRoomFailed = $root.NT.ServerJoinRoomFailed.decode(reader, reader.uint32());
                        break;
                    }
                case 14: {
                        message.sUserJoinedRoom = $root.NT.ServerUserJoinedRoom.decode(reader, reader.uint32());
                        break;
                    }
                case 15: {
                        message.cLeaveRoom = $root.NT.ClientLeaveRoom.decode(reader, reader.uint32());
                        break;
                    }
                case 16: {
                        message.sUserLeftRoom = $root.NT.ServerUserLeftRoom.decode(reader, reader.uint32());
                        break;
                    }
                case 17: {
                        message.cKickUser = $root.NT.ClientKickUser.decode(reader, reader.uint32());
                        break;
                    }
                case 18: {
                        message.sUserKicked = $root.NT.ServerUserKicked.decode(reader, reader.uint32());
                        break;
                    }
                case 19: {
                        message.cBanUser = $root.NT.ClientBanUser.decode(reader, reader.uint32());
                        break;
                    }
                case 20: {
                        message.sUserBanned = $root.NT.ServerUserBanned.decode(reader, reader.uint32());
                        break;
                    }
                case 21: {
                        message.cReadyState = $root.NT.ClientReadyState.decode(reader, reader.uint32());
                        break;
                    }
                case 22: {
                        message.sUserReadyState = $root.NT.ServerUserReadyState.decode(reader, reader.uint32());
                        break;
                    }
                case 23: {
                        message.cStartRun = $root.NT.ClientStartRun.decode(reader, reader.uint32());
                        break;
                    }
                case 24: {
                        message.sHostStart = $root.NT.ServerHostStart.decode(reader, reader.uint32());
                        break;
                    }
                case 26: {
                        message.cRequestRoomList = $root.NT.ClientRequestRoomList.decode(reader, reader.uint32());
                        break;
                    }
                case 27: {
                        message.sRoomList = $root.NT.ServerRoomList.decode(reader, reader.uint32());
                        break;
                    }
                case 30: {
                        message.sDisconnected = $root.NT.ServerDisconnected.decode(reader, reader.uint32());
                        break;
                    }
                case 31: {
                        message.sRoomAddToList = $root.NT.ServerRoomAddToList.decode(reader, reader.uint32());
                        break;
                    }
                case 32: {
                        message.cRunOver = $root.NT.ClientRunOver.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        LobbyAction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.cRoomCreate != null && message.hasOwnProperty("cRoomCreate")) {
                properties.action = 1;
                {
                    let error = $root.NT.ClientRoomCreate.verify(message.cRoomCreate);
                    if (error)
                        return "cRoomCreate." + error;
                }
            }
            if (message.sRoomCreated != null && message.hasOwnProperty("sRoomCreated")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerRoomCreated.verify(message.sRoomCreated);
                    if (error)
                        return "sRoomCreated." + error;
                }
            }
            if (message.sRoomCreateFailed != null && message.hasOwnProperty("sRoomCreateFailed")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerRoomCreateFailed.verify(message.sRoomCreateFailed);
                    if (error)
                        return "sRoomCreateFailed." + error;
                }
            }
            if (message.cRoomUpdate != null && message.hasOwnProperty("cRoomUpdate")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientRoomUpdate.verify(message.cRoomUpdate);
                    if (error)
                        return "cRoomUpdate." + error;
                }
            }
            if (message.sRoomUpdated != null && message.hasOwnProperty("sRoomUpdated")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerRoomUpdated.verify(message.sRoomUpdated);
                    if (error)
                        return "sRoomUpdated." + error;
                }
            }
            if (message.sRoomUpdateFailed != null && message.hasOwnProperty("sRoomUpdateFailed")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerRoomUpdateFailed.verify(message.sRoomUpdateFailed);
                    if (error)
                        return "sRoomUpdateFailed." + error;
                }
            }
            if (message.cRoomFlagsUpdate != null && message.hasOwnProperty("cRoomFlagsUpdate")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientRoomFlagsUpdate.verify(message.cRoomFlagsUpdate);
                    if (error)
                        return "cRoomFlagsUpdate." + error;
                }
            }
            if (message.sRoomFlagsUpdated != null && message.hasOwnProperty("sRoomFlagsUpdated")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerRoomFlagsUpdated.verify(message.sRoomFlagsUpdated);
                    if (error)
                        return "sRoomFlagsUpdated." + error;
                }
            }
            if (message.sRoomFlagsUpdateFailed != null && message.hasOwnProperty("sRoomFlagsUpdateFailed")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerRoomFlagsUpdateFailed.verify(message.sRoomFlagsUpdateFailed);
                    if (error)
                        return "sRoomFlagsUpdateFailed." + error;
                }
            }
            if (message.cRoomDelete != null && message.hasOwnProperty("cRoomDelete")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientRoomDelete.verify(message.cRoomDelete);
                    if (error)
                        return "cRoomDelete." + error;
                }
            }
            if (message.sRoomDeleted != null && message.hasOwnProperty("sRoomDeleted")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerRoomDeleted.verify(message.sRoomDeleted);
                    if (error)
                        return "sRoomDeleted." + error;
                }
            }
            if (message.cJoinRoom != null && message.hasOwnProperty("cJoinRoom")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientJoinRoom.verify(message.cJoinRoom);
                    if (error)
                        return "cJoinRoom." + error;
                }
            }
            if (message.sJoinRoomSuccess != null && message.hasOwnProperty("sJoinRoomSuccess")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerJoinRoomSuccess.verify(message.sJoinRoomSuccess);
                    if (error)
                        return "sJoinRoomSuccess." + error;
                }
            }
            if (message.sJoinRoomFailed != null && message.hasOwnProperty("sJoinRoomFailed")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerJoinRoomFailed.verify(message.sJoinRoomFailed);
                    if (error)
                        return "sJoinRoomFailed." + error;
                }
            }
            if (message.sUserJoinedRoom != null && message.hasOwnProperty("sUserJoinedRoom")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerUserJoinedRoom.verify(message.sUserJoinedRoom);
                    if (error)
                        return "sUserJoinedRoom." + error;
                }
            }
            if (message.cLeaveRoom != null && message.hasOwnProperty("cLeaveRoom")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientLeaveRoom.verify(message.cLeaveRoom);
                    if (error)
                        return "cLeaveRoom." + error;
                }
            }
            if (message.sUserLeftRoom != null && message.hasOwnProperty("sUserLeftRoom")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerUserLeftRoom.verify(message.sUserLeftRoom);
                    if (error)
                        return "sUserLeftRoom." + error;
                }
            }
            if (message.cKickUser != null && message.hasOwnProperty("cKickUser")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientKickUser.verify(message.cKickUser);
                    if (error)
                        return "cKickUser." + error;
                }
            }
            if (message.sUserKicked != null && message.hasOwnProperty("sUserKicked")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerUserKicked.verify(message.sUserKicked);
                    if (error)
                        return "sUserKicked." + error;
                }
            }
            if (message.cBanUser != null && message.hasOwnProperty("cBanUser")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientBanUser.verify(message.cBanUser);
                    if (error)
                        return "cBanUser." + error;
                }
            }
            if (message.sUserBanned != null && message.hasOwnProperty("sUserBanned")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerUserBanned.verify(message.sUserBanned);
                    if (error)
                        return "sUserBanned." + error;
                }
            }
            if (message.cReadyState != null && message.hasOwnProperty("cReadyState")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientReadyState.verify(message.cReadyState);
                    if (error)
                        return "cReadyState." + error;
                }
            }
            if (message.sUserReadyState != null && message.hasOwnProperty("sUserReadyState")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerUserReadyState.verify(message.sUserReadyState);
                    if (error)
                        return "sUserReadyState." + error;
                }
            }
            if (message.cStartRun != null && message.hasOwnProperty("cStartRun")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientStartRun.verify(message.cStartRun);
                    if (error)
                        return "cStartRun." + error;
                }
            }
            if (message.sHostStart != null && message.hasOwnProperty("sHostStart")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerHostStart.verify(message.sHostStart);
                    if (error)
                        return "sHostStart." + error;
                }
            }
            if (message.cRequestRoomList != null && message.hasOwnProperty("cRequestRoomList")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientRequestRoomList.verify(message.cRequestRoomList);
                    if (error)
                        return "cRequestRoomList." + error;
                }
            }
            if (message.sRoomList != null && message.hasOwnProperty("sRoomList")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerRoomList.verify(message.sRoomList);
                    if (error)
                        return "sRoomList." + error;
                }
            }
            if (message.sDisconnected != null && message.hasOwnProperty("sDisconnected")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerDisconnected.verify(message.sDisconnected);
                    if (error)
                        return "sDisconnected." + error;
                }
            }
            if (message.sRoomAddToList != null && message.hasOwnProperty("sRoomAddToList")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ServerRoomAddToList.verify(message.sRoomAddToList);
                    if (error)
                        return "sRoomAddToList." + error;
                }
            }
            if (message.cRunOver != null && message.hasOwnProperty("cRunOver")) {
                if (properties.action === 1)
                    return "action: multiple values";
                properties.action = 1;
                {
                    let error = $root.NT.ClientRunOver.verify(message.cRunOver);
                    if (error)
                        return "cRunOver." + error;
                }
            }
            return null;
        };

        LobbyAction.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.LobbyAction)
                return object;
            let message = new $root.NT.LobbyAction();
            if (object.cRoomCreate != null) {
                if (typeof object.cRoomCreate !== "object")
                    throw TypeError(".NT.LobbyAction.cRoomCreate: object expected");
                message.cRoomCreate = $root.NT.ClientRoomCreate.fromObject(object.cRoomCreate);
            }
            if (object.sRoomCreated != null) {
                if (typeof object.sRoomCreated !== "object")
                    throw TypeError(".NT.LobbyAction.sRoomCreated: object expected");
                message.sRoomCreated = $root.NT.ServerRoomCreated.fromObject(object.sRoomCreated);
            }
            if (object.sRoomCreateFailed != null) {
                if (typeof object.sRoomCreateFailed !== "object")
                    throw TypeError(".NT.LobbyAction.sRoomCreateFailed: object expected");
                message.sRoomCreateFailed = $root.NT.ServerRoomCreateFailed.fromObject(object.sRoomCreateFailed);
            }
            if (object.cRoomUpdate != null) {
                if (typeof object.cRoomUpdate !== "object")
                    throw TypeError(".NT.LobbyAction.cRoomUpdate: object expected");
                message.cRoomUpdate = $root.NT.ClientRoomUpdate.fromObject(object.cRoomUpdate);
            }
            if (object.sRoomUpdated != null) {
                if (typeof object.sRoomUpdated !== "object")
                    throw TypeError(".NT.LobbyAction.sRoomUpdated: object expected");
                message.sRoomUpdated = $root.NT.ServerRoomUpdated.fromObject(object.sRoomUpdated);
            }
            if (object.sRoomUpdateFailed != null) {
                if (typeof object.sRoomUpdateFailed !== "object")
                    throw TypeError(".NT.LobbyAction.sRoomUpdateFailed: object expected");
                message.sRoomUpdateFailed = $root.NT.ServerRoomUpdateFailed.fromObject(object.sRoomUpdateFailed);
            }
            if (object.cRoomFlagsUpdate != null) {
                if (typeof object.cRoomFlagsUpdate !== "object")
                    throw TypeError(".NT.LobbyAction.cRoomFlagsUpdate: object expected");
                message.cRoomFlagsUpdate = $root.NT.ClientRoomFlagsUpdate.fromObject(object.cRoomFlagsUpdate);
            }
            if (object.sRoomFlagsUpdated != null) {
                if (typeof object.sRoomFlagsUpdated !== "object")
                    throw TypeError(".NT.LobbyAction.sRoomFlagsUpdated: object expected");
                message.sRoomFlagsUpdated = $root.NT.ServerRoomFlagsUpdated.fromObject(object.sRoomFlagsUpdated);
            }
            if (object.sRoomFlagsUpdateFailed != null) {
                if (typeof object.sRoomFlagsUpdateFailed !== "object")
                    throw TypeError(".NT.LobbyAction.sRoomFlagsUpdateFailed: object expected");
                message.sRoomFlagsUpdateFailed = $root.NT.ServerRoomFlagsUpdateFailed.fromObject(object.sRoomFlagsUpdateFailed);
            }
            if (object.cRoomDelete != null) {
                if (typeof object.cRoomDelete !== "object")
                    throw TypeError(".NT.LobbyAction.cRoomDelete: object expected");
                message.cRoomDelete = $root.NT.ClientRoomDelete.fromObject(object.cRoomDelete);
            }
            if (object.sRoomDeleted != null) {
                if (typeof object.sRoomDeleted !== "object")
                    throw TypeError(".NT.LobbyAction.sRoomDeleted: object expected");
                message.sRoomDeleted = $root.NT.ServerRoomDeleted.fromObject(object.sRoomDeleted);
            }
            if (object.cJoinRoom != null) {
                if (typeof object.cJoinRoom !== "object")
                    throw TypeError(".NT.LobbyAction.cJoinRoom: object expected");
                message.cJoinRoom = $root.NT.ClientJoinRoom.fromObject(object.cJoinRoom);
            }
            if (object.sJoinRoomSuccess != null) {
                if (typeof object.sJoinRoomSuccess !== "object")
                    throw TypeError(".NT.LobbyAction.sJoinRoomSuccess: object expected");
                message.sJoinRoomSuccess = $root.NT.ServerJoinRoomSuccess.fromObject(object.sJoinRoomSuccess);
            }
            if (object.sJoinRoomFailed != null) {
                if (typeof object.sJoinRoomFailed !== "object")
                    throw TypeError(".NT.LobbyAction.sJoinRoomFailed: object expected");
                message.sJoinRoomFailed = $root.NT.ServerJoinRoomFailed.fromObject(object.sJoinRoomFailed);
            }
            if (object.sUserJoinedRoom != null) {
                if (typeof object.sUserJoinedRoom !== "object")
                    throw TypeError(".NT.LobbyAction.sUserJoinedRoom: object expected");
                message.sUserJoinedRoom = $root.NT.ServerUserJoinedRoom.fromObject(object.sUserJoinedRoom);
            }
            if (object.cLeaveRoom != null) {
                if (typeof object.cLeaveRoom !== "object")
                    throw TypeError(".NT.LobbyAction.cLeaveRoom: object expected");
                message.cLeaveRoom = $root.NT.ClientLeaveRoom.fromObject(object.cLeaveRoom);
            }
            if (object.sUserLeftRoom != null) {
                if (typeof object.sUserLeftRoom !== "object")
                    throw TypeError(".NT.LobbyAction.sUserLeftRoom: object expected");
                message.sUserLeftRoom = $root.NT.ServerUserLeftRoom.fromObject(object.sUserLeftRoom);
            }
            if (object.cKickUser != null) {
                if (typeof object.cKickUser !== "object")
                    throw TypeError(".NT.LobbyAction.cKickUser: object expected");
                message.cKickUser = $root.NT.ClientKickUser.fromObject(object.cKickUser);
            }
            if (object.sUserKicked != null) {
                if (typeof object.sUserKicked !== "object")
                    throw TypeError(".NT.LobbyAction.sUserKicked: object expected");
                message.sUserKicked = $root.NT.ServerUserKicked.fromObject(object.sUserKicked);
            }
            if (object.cBanUser != null) {
                if (typeof object.cBanUser !== "object")
                    throw TypeError(".NT.LobbyAction.cBanUser: object expected");
                message.cBanUser = $root.NT.ClientBanUser.fromObject(object.cBanUser);
            }
            if (object.sUserBanned != null) {
                if (typeof object.sUserBanned !== "object")
                    throw TypeError(".NT.LobbyAction.sUserBanned: object expected");
                message.sUserBanned = $root.NT.ServerUserBanned.fromObject(object.sUserBanned);
            }
            if (object.cReadyState != null) {
                if (typeof object.cReadyState !== "object")
                    throw TypeError(".NT.LobbyAction.cReadyState: object expected");
                message.cReadyState = $root.NT.ClientReadyState.fromObject(object.cReadyState);
            }
            if (object.sUserReadyState != null) {
                if (typeof object.sUserReadyState !== "object")
                    throw TypeError(".NT.LobbyAction.sUserReadyState: object expected");
                message.sUserReadyState = $root.NT.ServerUserReadyState.fromObject(object.sUserReadyState);
            }
            if (object.cStartRun != null) {
                if (typeof object.cStartRun !== "object")
                    throw TypeError(".NT.LobbyAction.cStartRun: object expected");
                message.cStartRun = $root.NT.ClientStartRun.fromObject(object.cStartRun);
            }
            if (object.sHostStart != null) {
                if (typeof object.sHostStart !== "object")
                    throw TypeError(".NT.LobbyAction.sHostStart: object expected");
                message.sHostStart = $root.NT.ServerHostStart.fromObject(object.sHostStart);
            }
            if (object.cRequestRoomList != null) {
                if (typeof object.cRequestRoomList !== "object")
                    throw TypeError(".NT.LobbyAction.cRequestRoomList: object expected");
                message.cRequestRoomList = $root.NT.ClientRequestRoomList.fromObject(object.cRequestRoomList);
            }
            if (object.sRoomList != null) {
                if (typeof object.sRoomList !== "object")
                    throw TypeError(".NT.LobbyAction.sRoomList: object expected");
                message.sRoomList = $root.NT.ServerRoomList.fromObject(object.sRoomList);
            }
            if (object.sDisconnected != null) {
                if (typeof object.sDisconnected !== "object")
                    throw TypeError(".NT.LobbyAction.sDisconnected: object expected");
                message.sDisconnected = $root.NT.ServerDisconnected.fromObject(object.sDisconnected);
            }
            if (object.sRoomAddToList != null) {
                if (typeof object.sRoomAddToList !== "object")
                    throw TypeError(".NT.LobbyAction.sRoomAddToList: object expected");
                message.sRoomAddToList = $root.NT.ServerRoomAddToList.fromObject(object.sRoomAddToList);
            }
            if (object.cRunOver != null) {
                if (typeof object.cRunOver !== "object")
                    throw TypeError(".NT.LobbyAction.cRunOver: object expected");
                message.cRunOver = $root.NT.ClientRunOver.fromObject(object.cRunOver);
            }
            return message;
        };

        LobbyAction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.cRoomCreate != null && message.hasOwnProperty("cRoomCreate")) {
                object.cRoomCreate = $root.NT.ClientRoomCreate.toObject(message.cRoomCreate, options);
                if (options.oneofs)
                    object.action = "cRoomCreate";
            }
            if (message.sRoomCreated != null && message.hasOwnProperty("sRoomCreated")) {
                object.sRoomCreated = $root.NT.ServerRoomCreated.toObject(message.sRoomCreated, options);
                if (options.oneofs)
                    object.action = "sRoomCreated";
            }
            if (message.sRoomCreateFailed != null && message.hasOwnProperty("sRoomCreateFailed")) {
                object.sRoomCreateFailed = $root.NT.ServerRoomCreateFailed.toObject(message.sRoomCreateFailed, options);
                if (options.oneofs)
                    object.action = "sRoomCreateFailed";
            }
            if (message.cRoomUpdate != null && message.hasOwnProperty("cRoomUpdate")) {
                object.cRoomUpdate = $root.NT.ClientRoomUpdate.toObject(message.cRoomUpdate, options);
                if (options.oneofs)
                    object.action = "cRoomUpdate";
            }
            if (message.sRoomUpdated != null && message.hasOwnProperty("sRoomUpdated")) {
                object.sRoomUpdated = $root.NT.ServerRoomUpdated.toObject(message.sRoomUpdated, options);
                if (options.oneofs)
                    object.action = "sRoomUpdated";
            }
            if (message.sRoomUpdateFailed != null && message.hasOwnProperty("sRoomUpdateFailed")) {
                object.sRoomUpdateFailed = $root.NT.ServerRoomUpdateFailed.toObject(message.sRoomUpdateFailed, options);
                if (options.oneofs)
                    object.action = "sRoomUpdateFailed";
            }
            if (message.cRoomFlagsUpdate != null && message.hasOwnProperty("cRoomFlagsUpdate")) {
                object.cRoomFlagsUpdate = $root.NT.ClientRoomFlagsUpdate.toObject(message.cRoomFlagsUpdate, options);
                if (options.oneofs)
                    object.action = "cRoomFlagsUpdate";
            }
            if (message.sRoomFlagsUpdated != null && message.hasOwnProperty("sRoomFlagsUpdated")) {
                object.sRoomFlagsUpdated = $root.NT.ServerRoomFlagsUpdated.toObject(message.sRoomFlagsUpdated, options);
                if (options.oneofs)
                    object.action = "sRoomFlagsUpdated";
            }
            if (message.sRoomFlagsUpdateFailed != null && message.hasOwnProperty("sRoomFlagsUpdateFailed")) {
                object.sRoomFlagsUpdateFailed = $root.NT.ServerRoomFlagsUpdateFailed.toObject(message.sRoomFlagsUpdateFailed, options);
                if (options.oneofs)
                    object.action = "sRoomFlagsUpdateFailed";
            }
            if (message.cRoomDelete != null && message.hasOwnProperty("cRoomDelete")) {
                object.cRoomDelete = $root.NT.ClientRoomDelete.toObject(message.cRoomDelete, options);
                if (options.oneofs)
                    object.action = "cRoomDelete";
            }
            if (message.sRoomDeleted != null && message.hasOwnProperty("sRoomDeleted")) {
                object.sRoomDeleted = $root.NT.ServerRoomDeleted.toObject(message.sRoomDeleted, options);
                if (options.oneofs)
                    object.action = "sRoomDeleted";
            }
            if (message.cJoinRoom != null && message.hasOwnProperty("cJoinRoom")) {
                object.cJoinRoom = $root.NT.ClientJoinRoom.toObject(message.cJoinRoom, options);
                if (options.oneofs)
                    object.action = "cJoinRoom";
            }
            if (message.sJoinRoomSuccess != null && message.hasOwnProperty("sJoinRoomSuccess")) {
                object.sJoinRoomSuccess = $root.NT.ServerJoinRoomSuccess.toObject(message.sJoinRoomSuccess, options);
                if (options.oneofs)
                    object.action = "sJoinRoomSuccess";
            }
            if (message.sJoinRoomFailed != null && message.hasOwnProperty("sJoinRoomFailed")) {
                object.sJoinRoomFailed = $root.NT.ServerJoinRoomFailed.toObject(message.sJoinRoomFailed, options);
                if (options.oneofs)
                    object.action = "sJoinRoomFailed";
            }
            if (message.sUserJoinedRoom != null && message.hasOwnProperty("sUserJoinedRoom")) {
                object.sUserJoinedRoom = $root.NT.ServerUserJoinedRoom.toObject(message.sUserJoinedRoom, options);
                if (options.oneofs)
                    object.action = "sUserJoinedRoom";
            }
            if (message.cLeaveRoom != null && message.hasOwnProperty("cLeaveRoom")) {
                object.cLeaveRoom = $root.NT.ClientLeaveRoom.toObject(message.cLeaveRoom, options);
                if (options.oneofs)
                    object.action = "cLeaveRoom";
            }
            if (message.sUserLeftRoom != null && message.hasOwnProperty("sUserLeftRoom")) {
                object.sUserLeftRoom = $root.NT.ServerUserLeftRoom.toObject(message.sUserLeftRoom, options);
                if (options.oneofs)
                    object.action = "sUserLeftRoom";
            }
            if (message.cKickUser != null && message.hasOwnProperty("cKickUser")) {
                object.cKickUser = $root.NT.ClientKickUser.toObject(message.cKickUser, options);
                if (options.oneofs)
                    object.action = "cKickUser";
            }
            if (message.sUserKicked != null && message.hasOwnProperty("sUserKicked")) {
                object.sUserKicked = $root.NT.ServerUserKicked.toObject(message.sUserKicked, options);
                if (options.oneofs)
                    object.action = "sUserKicked";
            }
            if (message.cBanUser != null && message.hasOwnProperty("cBanUser")) {
                object.cBanUser = $root.NT.ClientBanUser.toObject(message.cBanUser, options);
                if (options.oneofs)
                    object.action = "cBanUser";
            }
            if (message.sUserBanned != null && message.hasOwnProperty("sUserBanned")) {
                object.sUserBanned = $root.NT.ServerUserBanned.toObject(message.sUserBanned, options);
                if (options.oneofs)
                    object.action = "sUserBanned";
            }
            if (message.cReadyState != null && message.hasOwnProperty("cReadyState")) {
                object.cReadyState = $root.NT.ClientReadyState.toObject(message.cReadyState, options);
                if (options.oneofs)
                    object.action = "cReadyState";
            }
            if (message.sUserReadyState != null && message.hasOwnProperty("sUserReadyState")) {
                object.sUserReadyState = $root.NT.ServerUserReadyState.toObject(message.sUserReadyState, options);
                if (options.oneofs)
                    object.action = "sUserReadyState";
            }
            if (message.cStartRun != null && message.hasOwnProperty("cStartRun")) {
                object.cStartRun = $root.NT.ClientStartRun.toObject(message.cStartRun, options);
                if (options.oneofs)
                    object.action = "cStartRun";
            }
            if (message.sHostStart != null && message.hasOwnProperty("sHostStart")) {
                object.sHostStart = $root.NT.ServerHostStart.toObject(message.sHostStart, options);
                if (options.oneofs)
                    object.action = "sHostStart";
            }
            if (message.cRequestRoomList != null && message.hasOwnProperty("cRequestRoomList")) {
                object.cRequestRoomList = $root.NT.ClientRequestRoomList.toObject(message.cRequestRoomList, options);
                if (options.oneofs)
                    object.action = "cRequestRoomList";
            }
            if (message.sRoomList != null && message.hasOwnProperty("sRoomList")) {
                object.sRoomList = $root.NT.ServerRoomList.toObject(message.sRoomList, options);
                if (options.oneofs)
                    object.action = "sRoomList";
            }
            if (message.sDisconnected != null && message.hasOwnProperty("sDisconnected")) {
                object.sDisconnected = $root.NT.ServerDisconnected.toObject(message.sDisconnected, options);
                if (options.oneofs)
                    object.action = "sDisconnected";
            }
            if (message.sRoomAddToList != null && message.hasOwnProperty("sRoomAddToList")) {
                object.sRoomAddToList = $root.NT.ServerRoomAddToList.toObject(message.sRoomAddToList, options);
                if (options.oneofs)
                    object.action = "sRoomAddToList";
            }
            if (message.cRunOver != null && message.hasOwnProperty("cRunOver")) {
                object.cRunOver = $root.NT.ClientRunOver.toObject(message.cRunOver, options);
                if (options.oneofs)
                    object.action = "cRunOver";
            }
            return object;
        };

        LobbyAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        LobbyAction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.LobbyAction";
        };

        return LobbyAction;
    })();

    NT.ClientRunOver = (function() {

        function ClientRunOver(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientRunOver.prototype.idk = null;

        let $oneOfFields;

        Object.defineProperty(ClientRunOver.prototype, "_idk", {
            get: $util.oneOfGetter($oneOfFields = ["idk"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ClientRunOver.create = function create(properties) {
            return new ClientRunOver(properties);
        };

        ClientRunOver.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.idk != null && Object.hasOwnProperty.call(message, "idk"))
                writer.uint32(8).bool(message.idk);
            return writer;
        };

        ClientRunOver.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientRunOver();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.idk = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ClientRunOver.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.idk != null && message.hasOwnProperty("idk")) {
                properties._idk = 1;
                if (typeof message.idk !== "boolean")
                    return "idk: boolean expected";
            }
            return null;
        };

        ClientRunOver.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientRunOver)
                return object;
            let message = new $root.NT.ClientRunOver();
            if (object.idk != null)
                message.idk = Boolean(object.idk);
            return message;
        };

        ClientRunOver.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.idk != null && message.hasOwnProperty("idk")) {
                object.idk = message.idk;
                if (options.oneofs)
                    object._idk = "idk";
            }
            return object;
        };

        ClientRunOver.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientRunOver.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientRunOver";
        };

        return ClientRunOver;
    })();

    NT.ServerDisconnected = (function() {

        function ServerDisconnected(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerDisconnected.prototype.reason = "";

        ServerDisconnected.create = function create(properties) {
            return new ServerDisconnected(properties);
        };

        ServerDisconnected.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(2).string(message.reason);
            return writer;
        };

        ServerDisconnected.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerDisconnected();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.reason = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ServerDisconnected.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isString(message.reason))
                    return "reason: string expected";
            return null;
        };

        ServerDisconnected.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerDisconnected)
                return object;
            let message = new $root.NT.ServerDisconnected();
            if (object.reason != null)
                message.reason = String(object.reason);
            return message;
        };

        ServerDisconnected.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.reason = "";
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            return object;
        };

        ServerDisconnected.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerDisconnected.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerDisconnected";
        };

        return ServerDisconnected;
    })();

    NT.ClientRoomDelete = (function() {

        function ClientRoomDelete(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientRoomDelete.prototype.id = "";

        ClientRoomDelete.create = function create(properties) {
            return new ClientRoomDelete(properties);
        };

        ClientRoomDelete.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.id);
            return writer;
        };

        ClientRoomDelete.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientRoomDelete();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        ClientRoomDelete.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            return null;
        };

        ClientRoomDelete.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientRoomDelete)
                return object;
            let message = new $root.NT.ClientRoomDelete();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        ClientRoomDelete.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        ClientRoomDelete.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientRoomDelete.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientRoomDelete";
        };

        return ClientRoomDelete;
    })();

    NT.ServerRoomDeleted = (function() {

        function ServerRoomDeleted(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerRoomDeleted.prototype.id = "";

        ServerRoomDeleted.create = function create(properties) {
            return new ServerRoomDeleted(properties);
        };

        ServerRoomDeleted.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.id);
            return writer;
        };

        ServerRoomDeleted.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerRoomDeleted();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.id = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        ServerRoomDeleted.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            return null;
        };

        ServerRoomDeleted.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerRoomDeleted)
                return object;
            let message = new $root.NT.ServerRoomDeleted();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        ServerRoomDeleted.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        ServerRoomDeleted.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerRoomDeleted.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerRoomDeleted";
        };

        return ServerRoomDeleted;
    })();

    NT.ClientRoomCreate = (function() {

        function ClientRoomCreate(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientRoomCreate.prototype.name = "";
        ClientRoomCreate.prototype.gamemode = 0;
        ClientRoomCreate.prototype.maxUsers = 0;
        ClientRoomCreate.prototype.password = null;

        let $oneOfFields;

        Object.defineProperty(ClientRoomCreate.prototype, "_password", {
            get: $util.oneOfGetter($oneOfFields = ["password"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ClientRoomCreate.create = function create(properties) {
            return new ClientRoomCreate(properties);
        };

        ClientRoomCreate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.name);
            writer.uint32(8).uint32(message.gamemode);
            writer.uint32(16).uint32(message.maxUsers);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(26).string(message.password);
            return writer;
        };

        ClientRoomCreate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientRoomCreate();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.name = reader.string();
                        break;
                    }
                case 1: {
                        message.gamemode = reader.uint32();
                        break;
                    }
                case 2: {
                        message.maxUsers = reader.uint32();
                        break;
                    }
                case 3: {
                        message.password = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("gamemode"))
                throw $util.ProtocolError("missing required 'gamemode'", { instance: message });
            if (!message.hasOwnProperty("maxUsers"))
                throw $util.ProtocolError("missing required 'maxUsers'", { instance: message });
            return message;
        };

        ClientRoomCreate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isInteger(message.gamemode))
                return "gamemode: integer expected";
            if (!$util.isInteger(message.maxUsers))
                return "maxUsers: integer expected";
            if (message.password != null && message.hasOwnProperty("password")) {
                properties._password = 1;
                if (!$util.isString(message.password))
                    return "password: string expected";
            }
            return null;
        };

        ClientRoomCreate.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientRoomCreate)
                return object;
            let message = new $root.NT.ClientRoomCreate();
            if (object.name != null)
                message.name = String(object.name);
            if (object.gamemode != null)
                message.gamemode = object.gamemode >>> 0;
            if (object.maxUsers != null)
                message.maxUsers = object.maxUsers >>> 0;
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        ClientRoomCreate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.gamemode = 0;
                object.maxUsers = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.gamemode != null && message.hasOwnProperty("gamemode"))
                object.gamemode = message.gamemode;
            if (message.maxUsers != null && message.hasOwnProperty("maxUsers"))
                object.maxUsers = message.maxUsers;
            if (message.password != null && message.hasOwnProperty("password")) {
                object.password = message.password;
                if (options.oneofs)
                    object._password = "password";
            }
            return object;
        };

        ClientRoomCreate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientRoomCreate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientRoomCreate";
        };

        return ClientRoomCreate;
    })();

    NT.ServerRoomCreated = (function() {

        function ServerRoomCreated(properties) {
            this.users = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerRoomCreated.prototype.id = "";
        ServerRoomCreated.prototype.name = "";
        ServerRoomCreated.prototype.gamemode = 0;
        ServerRoomCreated.prototype.maxUsers = 0;
        ServerRoomCreated.prototype.password = null;
        ServerRoomCreated.prototype.locked = false;
        ServerRoomCreated.prototype.users = $util.emptyArray;

        let $oneOfFields;

        Object.defineProperty(ServerRoomCreated.prototype, "_password", {
            get: $util.oneOfGetter($oneOfFields = ["password"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ServerRoomCreated.create = function create(properties) {
            return new ServerRoomCreated(properties);
        };

        ServerRoomCreated.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.id);
            writer.uint32(10).string(message.name);
            writer.uint32(16).uint32(message.gamemode);
            writer.uint32(24).uint32(message.maxUsers);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(34).string(message.password);
            writer.uint32(40).bool(message.locked);
            if (message.users != null && message.users.length)
                for (let i = 0; i < message.users.length; ++i)
                    $root.NT.ServerRoomCreated.User.encode(message.users[i], writer.uint32(50).fork()).ldelim();
            return writer;
        };

        ServerRoomCreated.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerRoomCreated();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.id = reader.string();
                        break;
                    }
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.gamemode = reader.uint32();
                        break;
                    }
                case 3: {
                        message.maxUsers = reader.uint32();
                        break;
                    }
                case 4: {
                        message.password = reader.string();
                        break;
                    }
                case 5: {
                        message.locked = reader.bool();
                        break;
                    }
                case 6: {
                        if (!(message.users && message.users.length))
                            message.users = [];
                        message.users.push($root.NT.ServerRoomCreated.User.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("gamemode"))
                throw $util.ProtocolError("missing required 'gamemode'", { instance: message });
            if (!message.hasOwnProperty("maxUsers"))
                throw $util.ProtocolError("missing required 'maxUsers'", { instance: message });
            if (!message.hasOwnProperty("locked"))
                throw $util.ProtocolError("missing required 'locked'", { instance: message });
            return message;
        };

        ServerRoomCreated.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (!$util.isString(message.id))
                return "id: string expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isInteger(message.gamemode))
                return "gamemode: integer expected";
            if (!$util.isInteger(message.maxUsers))
                return "maxUsers: integer expected";
            if (message.password != null && message.hasOwnProperty("password")) {
                properties._password = 1;
                if (!$util.isString(message.password))
                    return "password: string expected";
            }
            if (typeof message.locked !== "boolean")
                return "locked: boolean expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (let i = 0; i < message.users.length; ++i) {
                    let error = $root.NT.ServerRoomCreated.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        ServerRoomCreated.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerRoomCreated)
                return object;
            let message = new $root.NT.ServerRoomCreated();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.gamemode != null)
                message.gamemode = object.gamemode >>> 0;
            if (object.maxUsers != null)
                message.maxUsers = object.maxUsers >>> 0;
            if (object.password != null)
                message.password = String(object.password);
            if (object.locked != null)
                message.locked = Boolean(object.locked);
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".NT.ServerRoomCreated.users: array expected");
                message.users = [];
                for (let i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".NT.ServerRoomCreated.users: object expected");
                    message.users[i] = $root.NT.ServerRoomCreated.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        ServerRoomCreated.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.gamemode = 0;
                object.maxUsers = 0;
                object.locked = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.gamemode != null && message.hasOwnProperty("gamemode"))
                object.gamemode = message.gamemode;
            if (message.maxUsers != null && message.hasOwnProperty("maxUsers"))
                object.maxUsers = message.maxUsers;
            if (message.password != null && message.hasOwnProperty("password")) {
                object.password = message.password;
                if (options.oneofs)
                    object._password = "password";
            }
            if (message.locked != null && message.hasOwnProperty("locked"))
                object.locked = message.locked;
            if (message.users && message.users.length) {
                object.users = [];
                for (let j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.NT.ServerRoomCreated.User.toObject(message.users[j], options);
            }
            return object;
        };

        ServerRoomCreated.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerRoomCreated.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerRoomCreated";
        };

        ServerRoomCreated.User = (function() {

            function User(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            User.prototype.userId = "";
            User.prototype.name = "";
            User.prototype.ready = false;
            User.prototype.owner = false;

            User.create = function create(properties) {
                return new User(properties);
            };

            User.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(2).string(message.userId);
                writer.uint32(10).string(message.name);
                writer.uint32(16).bool(message.ready);
                writer.uint32(24).bool(message.owner);
                return writer;
            };

            User.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerRoomCreated.User();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 0: {
                            message.userId = reader.string();
                            break;
                        }
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.ready = reader.bool();
                            break;
                        }
                    case 3: {
                            message.owner = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("userId"))
                    throw $util.ProtocolError("missing required 'userId'", { instance: message });
                if (!message.hasOwnProperty("name"))
                    throw $util.ProtocolError("missing required 'name'", { instance: message });
                if (!message.hasOwnProperty("ready"))
                    throw $util.ProtocolError("missing required 'ready'", { instance: message });
                if (!message.hasOwnProperty("owner"))
                    throw $util.ProtocolError("missing required 'owner'", { instance: message });
                return message;
            };

            User.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.userId))
                    return "userId: string expected";
                if (!$util.isString(message.name))
                    return "name: string expected";
                if (typeof message.ready !== "boolean")
                    return "ready: boolean expected";
                if (typeof message.owner !== "boolean")
                    return "owner: boolean expected";
                return null;
            };

            User.fromObject = function fromObject(object) {
                if (object instanceof $root.NT.ServerRoomCreated.User)
                    return object;
                let message = new $root.NT.ServerRoomCreated.User();
                if (object.userId != null)
                    message.userId = String(object.userId);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.ready != null)
                    message.ready = Boolean(object.ready);
                if (object.owner != null)
                    message.owner = Boolean(object.owner);
                return message;
            };

            User.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.userId = "";
                    object.name = "";
                    object.ready = false;
                    object.owner = false;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.ready != null && message.hasOwnProperty("ready"))
                    object.ready = message.ready;
                if (message.owner != null && message.hasOwnProperty("owner"))
                    object.owner = message.owner;
                return object;
            };

            User.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            User.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/NT.ServerRoomCreated.User";
            };

            return User;
        })();

        return ServerRoomCreated;
    })();

    NT.ServerRoomCreateFailed = (function() {

        function ServerRoomCreateFailed(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerRoomCreateFailed.prototype.reason = "";

        ServerRoomCreateFailed.create = function create(properties) {
            return new ServerRoomCreateFailed(properties);
        };

        ServerRoomCreateFailed.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(2).string(message.reason);
            return writer;
        };

        ServerRoomCreateFailed.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerRoomCreateFailed();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.reason = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ServerRoomCreateFailed.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isString(message.reason))
                    return "reason: string expected";
            return null;
        };

        ServerRoomCreateFailed.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerRoomCreateFailed)
                return object;
            let message = new $root.NT.ServerRoomCreateFailed();
            if (object.reason != null)
                message.reason = String(object.reason);
            return message;
        };

        ServerRoomCreateFailed.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.reason = "";
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            return object;
        };

        ServerRoomCreateFailed.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerRoomCreateFailed.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerRoomCreateFailed";
        };

        return ServerRoomCreateFailed;
    })();

    NT.ClientRoomUpdate = (function() {

        function ClientRoomUpdate(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientRoomUpdate.prototype.name = null;
        ClientRoomUpdate.prototype.gamemode = null;
        ClientRoomUpdate.prototype.maxUsers = null;
        ClientRoomUpdate.prototype.password = null;
        ClientRoomUpdate.prototype.locked = null;

        let $oneOfFields;

        Object.defineProperty(ClientRoomUpdate.prototype, "_name", {
            get: $util.oneOfGetter($oneOfFields = ["name"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Object.defineProperty(ClientRoomUpdate.prototype, "_gamemode", {
            get: $util.oneOfGetter($oneOfFields = ["gamemode"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Object.defineProperty(ClientRoomUpdate.prototype, "_maxUsers", {
            get: $util.oneOfGetter($oneOfFields = ["maxUsers"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Object.defineProperty(ClientRoomUpdate.prototype, "_password", {
            get: $util.oneOfGetter($oneOfFields = ["password"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Object.defineProperty(ClientRoomUpdate.prototype, "_locked", {
            get: $util.oneOfGetter($oneOfFields = ["locked"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ClientRoomUpdate.create = function create(properties) {
            return new ClientRoomUpdate(properties);
        };

        ClientRoomUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(10).string(message.name);
            if (message.gamemode != null && Object.hasOwnProperty.call(message, "gamemode"))
                writer.uint32(16).uint32(message.gamemode);
            if (message.maxUsers != null && Object.hasOwnProperty.call(message, "maxUsers"))
                writer.uint32(24).uint32(message.maxUsers);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(34).string(message.password);
            if (message.locked != null && Object.hasOwnProperty.call(message, "locked"))
                writer.uint32(40).bool(message.locked);
            return writer;
        };

        ClientRoomUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientRoomUpdate();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.gamemode = reader.uint32();
                        break;
                    }
                case 3: {
                        message.maxUsers = reader.uint32();
                        break;
                    }
                case 4: {
                        message.password = reader.string();
                        break;
                    }
                case 5: {
                        message.locked = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ClientRoomUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.name != null && message.hasOwnProperty("name")) {
                properties._name = 1;
                if (!$util.isString(message.name))
                    return "name: string expected";
            }
            if (message.gamemode != null && message.hasOwnProperty("gamemode")) {
                properties._gamemode = 1;
                if (!$util.isInteger(message.gamemode))
                    return "gamemode: integer expected";
            }
            if (message.maxUsers != null && message.hasOwnProperty("maxUsers")) {
                properties._maxUsers = 1;
                if (!$util.isInteger(message.maxUsers))
                    return "maxUsers: integer expected";
            }
            if (message.password != null && message.hasOwnProperty("password")) {
                properties._password = 1;
                if (!$util.isString(message.password))
                    return "password: string expected";
            }
            if (message.locked != null && message.hasOwnProperty("locked")) {
                properties._locked = 1;
                if (typeof message.locked !== "boolean")
                    return "locked: boolean expected";
            }
            return null;
        };

        ClientRoomUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientRoomUpdate)
                return object;
            let message = new $root.NT.ClientRoomUpdate();
            if (object.name != null)
                message.name = String(object.name);
            if (object.gamemode != null)
                message.gamemode = object.gamemode >>> 0;
            if (object.maxUsers != null)
                message.maxUsers = object.maxUsers >>> 0;
            if (object.password != null)
                message.password = String(object.password);
            if (object.locked != null)
                message.locked = Boolean(object.locked);
            return message;
        };

        ClientRoomUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.name != null && message.hasOwnProperty("name")) {
                object.name = message.name;
                if (options.oneofs)
                    object._name = "name";
            }
            if (message.gamemode != null && message.hasOwnProperty("gamemode")) {
                object.gamemode = message.gamemode;
                if (options.oneofs)
                    object._gamemode = "gamemode";
            }
            if (message.maxUsers != null && message.hasOwnProperty("maxUsers")) {
                object.maxUsers = message.maxUsers;
                if (options.oneofs)
                    object._maxUsers = "maxUsers";
            }
            if (message.password != null && message.hasOwnProperty("password")) {
                object.password = message.password;
                if (options.oneofs)
                    object._password = "password";
            }
            if (message.locked != null && message.hasOwnProperty("locked")) {
                object.locked = message.locked;
                if (options.oneofs)
                    object._locked = "locked";
            }
            return object;
        };

        ClientRoomUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientRoomUpdate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientRoomUpdate";
        };

        return ClientRoomUpdate;
    })();

    NT.ServerRoomUpdated = (function() {

        function ServerRoomUpdated(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerRoomUpdated.prototype.name = null;
        ServerRoomUpdated.prototype.gamemode = null;
        ServerRoomUpdated.prototype.maxUsers = null;
        ServerRoomUpdated.prototype.password = null;
        ServerRoomUpdated.prototype.locked = null;

        let $oneOfFields;

        Object.defineProperty(ServerRoomUpdated.prototype, "_name", {
            get: $util.oneOfGetter($oneOfFields = ["name"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Object.defineProperty(ServerRoomUpdated.prototype, "_gamemode", {
            get: $util.oneOfGetter($oneOfFields = ["gamemode"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Object.defineProperty(ServerRoomUpdated.prototype, "_maxUsers", {
            get: $util.oneOfGetter($oneOfFields = ["maxUsers"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Object.defineProperty(ServerRoomUpdated.prototype, "_password", {
            get: $util.oneOfGetter($oneOfFields = ["password"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Object.defineProperty(ServerRoomUpdated.prototype, "_locked", {
            get: $util.oneOfGetter($oneOfFields = ["locked"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ServerRoomUpdated.create = function create(properties) {
            return new ServerRoomUpdated(properties);
        };

        ServerRoomUpdated.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(10).string(message.name);
            if (message.gamemode != null && Object.hasOwnProperty.call(message, "gamemode"))
                writer.uint32(16).uint32(message.gamemode);
            if (message.maxUsers != null && Object.hasOwnProperty.call(message, "maxUsers"))
                writer.uint32(24).uint32(message.maxUsers);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(34).string(message.password);
            if (message.locked != null && Object.hasOwnProperty.call(message, "locked"))
                writer.uint32(40).bool(message.locked);
            return writer;
        };

        ServerRoomUpdated.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerRoomUpdated();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.gamemode = reader.uint32();
                        break;
                    }
                case 3: {
                        message.maxUsers = reader.uint32();
                        break;
                    }
                case 4: {
                        message.password = reader.string();
                        break;
                    }
                case 5: {
                        message.locked = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ServerRoomUpdated.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.name != null && message.hasOwnProperty("name")) {
                properties._name = 1;
                if (!$util.isString(message.name))
                    return "name: string expected";
            }
            if (message.gamemode != null && message.hasOwnProperty("gamemode")) {
                properties._gamemode = 1;
                if (!$util.isInteger(message.gamemode))
                    return "gamemode: integer expected";
            }
            if (message.maxUsers != null && message.hasOwnProperty("maxUsers")) {
                properties._maxUsers = 1;
                if (!$util.isInteger(message.maxUsers))
                    return "maxUsers: integer expected";
            }
            if (message.password != null && message.hasOwnProperty("password")) {
                properties._password = 1;
                if (!$util.isString(message.password))
                    return "password: string expected";
            }
            if (message.locked != null && message.hasOwnProperty("locked")) {
                properties._locked = 1;
                if (typeof message.locked !== "boolean")
                    return "locked: boolean expected";
            }
            return null;
        };

        ServerRoomUpdated.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerRoomUpdated)
                return object;
            let message = new $root.NT.ServerRoomUpdated();
            if (object.name != null)
                message.name = String(object.name);
            if (object.gamemode != null)
                message.gamemode = object.gamemode >>> 0;
            if (object.maxUsers != null)
                message.maxUsers = object.maxUsers >>> 0;
            if (object.password != null)
                message.password = String(object.password);
            if (object.locked != null)
                message.locked = Boolean(object.locked);
            return message;
        };

        ServerRoomUpdated.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.name != null && message.hasOwnProperty("name")) {
                object.name = message.name;
                if (options.oneofs)
                    object._name = "name";
            }
            if (message.gamemode != null && message.hasOwnProperty("gamemode")) {
                object.gamemode = message.gamemode;
                if (options.oneofs)
                    object._gamemode = "gamemode";
            }
            if (message.maxUsers != null && message.hasOwnProperty("maxUsers")) {
                object.maxUsers = message.maxUsers;
                if (options.oneofs)
                    object._maxUsers = "maxUsers";
            }
            if (message.password != null && message.hasOwnProperty("password")) {
                object.password = message.password;
                if (options.oneofs)
                    object._password = "password";
            }
            if (message.locked != null && message.hasOwnProperty("locked")) {
                object.locked = message.locked;
                if (options.oneofs)
                    object._locked = "locked";
            }
            return object;
        };

        ServerRoomUpdated.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerRoomUpdated.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerRoomUpdated";
        };

        return ServerRoomUpdated;
    })();

    NT.ServerRoomUpdateFailed = (function() {

        function ServerRoomUpdateFailed(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerRoomUpdateFailed.prototype.reason = "";

        ServerRoomUpdateFailed.create = function create(properties) {
            return new ServerRoomUpdateFailed(properties);
        };

        ServerRoomUpdateFailed.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(2).string(message.reason);
            return writer;
        };

        ServerRoomUpdateFailed.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerRoomUpdateFailed();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.reason = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ServerRoomUpdateFailed.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isString(message.reason))
                    return "reason: string expected";
            return null;
        };

        ServerRoomUpdateFailed.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerRoomUpdateFailed)
                return object;
            let message = new $root.NT.ServerRoomUpdateFailed();
            if (object.reason != null)
                message.reason = String(object.reason);
            return message;
        };

        ServerRoomUpdateFailed.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.reason = "";
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            return object;
        };

        ServerRoomUpdateFailed.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerRoomUpdateFailed.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerRoomUpdateFailed";
        };

        return ServerRoomUpdateFailed;
    })();

    NT.ClientRoomFlagsUpdate = (function() {

        function ClientRoomFlagsUpdate(properties) {
            this.flags = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientRoomFlagsUpdate.prototype.flags = $util.emptyArray;

        ClientRoomFlagsUpdate.create = function create(properties) {
            return new ClientRoomFlagsUpdate(properties);
        };

        ClientRoomFlagsUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.flags != null && message.flags.length)
                for (let i = 0; i < message.flags.length; ++i)
                    $root.NT.ClientRoomFlagsUpdate.GameFlag.encode(message.flags[i], writer.uint32(2).fork()).ldelim();
            return writer;
        };

        ClientRoomFlagsUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientRoomFlagsUpdate();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        if (!(message.flags && message.flags.length))
                            message.flags = [];
                        message.flags.push($root.NT.ClientRoomFlagsUpdate.GameFlag.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ClientRoomFlagsUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.flags != null && message.hasOwnProperty("flags")) {
                if (!Array.isArray(message.flags))
                    return "flags: array expected";
                for (let i = 0; i < message.flags.length; ++i) {
                    let error = $root.NT.ClientRoomFlagsUpdate.GameFlag.verify(message.flags[i]);
                    if (error)
                        return "flags." + error;
                }
            }
            return null;
        };

        ClientRoomFlagsUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientRoomFlagsUpdate)
                return object;
            let message = new $root.NT.ClientRoomFlagsUpdate();
            if (object.flags) {
                if (!Array.isArray(object.flags))
                    throw TypeError(".NT.ClientRoomFlagsUpdate.flags: array expected");
                message.flags = [];
                for (let i = 0; i < object.flags.length; ++i) {
                    if (typeof object.flags[i] !== "object")
                        throw TypeError(".NT.ClientRoomFlagsUpdate.flags: object expected");
                    message.flags[i] = $root.NT.ClientRoomFlagsUpdate.GameFlag.fromObject(object.flags[i]);
                }
            }
            return message;
        };

        ClientRoomFlagsUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.flags = [];
            if (message.flags && message.flags.length) {
                object.flags = [];
                for (let j = 0; j < message.flags.length; ++j)
                    object.flags[j] = $root.NT.ClientRoomFlagsUpdate.GameFlag.toObject(message.flags[j], options);
            }
            return object;
        };

        ClientRoomFlagsUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientRoomFlagsUpdate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientRoomFlagsUpdate";
        };

        ClientRoomFlagsUpdate.GameFlag = (function() {

            function GameFlag(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            GameFlag.prototype.flag = "";
            GameFlag.prototype.intVal = null;
            GameFlag.prototype.strVal = null;
            GameFlag.prototype.floatVal = null;
            GameFlag.prototype.boolVal = null;
            GameFlag.prototype.uIntVal = null;

            let $oneOfFields;

            Object.defineProperty(GameFlag.prototype, "_intVal", {
                get: $util.oneOfGetter($oneOfFields = ["intVal"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            Object.defineProperty(GameFlag.prototype, "_strVal", {
                get: $util.oneOfGetter($oneOfFields = ["strVal"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            Object.defineProperty(GameFlag.prototype, "_floatVal", {
                get: $util.oneOfGetter($oneOfFields = ["floatVal"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            Object.defineProperty(GameFlag.prototype, "_boolVal", {
                get: $util.oneOfGetter($oneOfFields = ["boolVal"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            Object.defineProperty(GameFlag.prototype, "_uIntVal", {
                get: $util.oneOfGetter($oneOfFields = ["uIntVal"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            GameFlag.create = function create(properties) {
                return new GameFlag(properties);
            };

            GameFlag.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(2).string(message.flag);
                if (message.intVal != null && Object.hasOwnProperty.call(message, "intVal"))
                    writer.uint32(8).int32(message.intVal);
                if (message.strVal != null && Object.hasOwnProperty.call(message, "strVal"))
                    writer.uint32(18).string(message.strVal);
                if (message.floatVal != null && Object.hasOwnProperty.call(message, "floatVal"))
                    writer.uint32(29).float(message.floatVal);
                if (message.boolVal != null && Object.hasOwnProperty.call(message, "boolVal"))
                    writer.uint32(32).bool(message.boolVal);
                if (message.uIntVal != null && Object.hasOwnProperty.call(message, "uIntVal"))
                    writer.uint32(40).uint32(message.uIntVal);
                return writer;
            };

            GameFlag.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientRoomFlagsUpdate.GameFlag();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 0: {
                            message.flag = reader.string();
                            break;
                        }
                    case 1: {
                            message.intVal = reader.int32();
                            break;
                        }
                    case 2: {
                            message.strVal = reader.string();
                            break;
                        }
                    case 3: {
                            message.floatVal = reader.float();
                            break;
                        }
                    case 4: {
                            message.boolVal = reader.bool();
                            break;
                        }
                    case 5: {
                            message.uIntVal = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("flag"))
                    throw $util.ProtocolError("missing required 'flag'", { instance: message });
                return message;
            };

            GameFlag.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (!$util.isString(message.flag))
                    return "flag: string expected";
                if (message.intVal != null && message.hasOwnProperty("intVal")) {
                    properties._intVal = 1;
                    if (!$util.isInteger(message.intVal))
                        return "intVal: integer expected";
                }
                if (message.strVal != null && message.hasOwnProperty("strVal")) {
                    properties._strVal = 1;
                    if (!$util.isString(message.strVal))
                        return "strVal: string expected";
                }
                if (message.floatVal != null && message.hasOwnProperty("floatVal")) {
                    properties._floatVal = 1;
                    if (typeof message.floatVal !== "number")
                        return "floatVal: number expected";
                }
                if (message.boolVal != null && message.hasOwnProperty("boolVal")) {
                    properties._boolVal = 1;
                    if (typeof message.boolVal !== "boolean")
                        return "boolVal: boolean expected";
                }
                if (message.uIntVal != null && message.hasOwnProperty("uIntVal")) {
                    properties._uIntVal = 1;
                    if (!$util.isInteger(message.uIntVal))
                        return "uIntVal: integer expected";
                }
                return null;
            };

            GameFlag.fromObject = function fromObject(object) {
                if (object instanceof $root.NT.ClientRoomFlagsUpdate.GameFlag)
                    return object;
                let message = new $root.NT.ClientRoomFlagsUpdate.GameFlag();
                if (object.flag != null)
                    message.flag = String(object.flag);
                if (object.intVal != null)
                    message.intVal = object.intVal | 0;
                if (object.strVal != null)
                    message.strVal = String(object.strVal);
                if (object.floatVal != null)
                    message.floatVal = Number(object.floatVal);
                if (object.boolVal != null)
                    message.boolVal = Boolean(object.boolVal);
                if (object.uIntVal != null)
                    message.uIntVal = object.uIntVal >>> 0;
                return message;
            };

            GameFlag.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.flag = "";
                if (message.flag != null && message.hasOwnProperty("flag"))
                    object.flag = message.flag;
                if (message.intVal != null && message.hasOwnProperty("intVal")) {
                    object.intVal = message.intVal;
                    if (options.oneofs)
                        object._intVal = "intVal";
                }
                if (message.strVal != null && message.hasOwnProperty("strVal")) {
                    object.strVal = message.strVal;
                    if (options.oneofs)
                        object._strVal = "strVal";
                }
                if (message.floatVal != null && message.hasOwnProperty("floatVal")) {
                    object.floatVal = options.json && !isFinite(message.floatVal) ? String(message.floatVal) : message.floatVal;
                    if (options.oneofs)
                        object._floatVal = "floatVal";
                }
                if (message.boolVal != null && message.hasOwnProperty("boolVal")) {
                    object.boolVal = message.boolVal;
                    if (options.oneofs)
                        object._boolVal = "boolVal";
                }
                if (message.uIntVal != null && message.hasOwnProperty("uIntVal")) {
                    object.uIntVal = message.uIntVal;
                    if (options.oneofs)
                        object._uIntVal = "uIntVal";
                }
                return object;
            };

            GameFlag.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            GameFlag.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/NT.ClientRoomFlagsUpdate.GameFlag";
            };

            return GameFlag;
        })();

        return ClientRoomFlagsUpdate;
    })();

    NT.ServerRoomFlagsUpdated = (function() {

        function ServerRoomFlagsUpdated(properties) {
            this.flags = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerRoomFlagsUpdated.prototype.flags = $util.emptyArray;

        ServerRoomFlagsUpdated.create = function create(properties) {
            return new ServerRoomFlagsUpdated(properties);
        };

        ServerRoomFlagsUpdated.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.flags != null && message.flags.length)
                for (let i = 0; i < message.flags.length; ++i)
                    $root.NT.ServerRoomFlagsUpdated.GameFlag.encode(message.flags[i], writer.uint32(2).fork()).ldelim();
            return writer;
        };

        ServerRoomFlagsUpdated.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerRoomFlagsUpdated();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        if (!(message.flags && message.flags.length))
                            message.flags = [];
                        message.flags.push($root.NT.ServerRoomFlagsUpdated.GameFlag.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ServerRoomFlagsUpdated.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.flags != null && message.hasOwnProperty("flags")) {
                if (!Array.isArray(message.flags))
                    return "flags: array expected";
                for (let i = 0; i < message.flags.length; ++i) {
                    let error = $root.NT.ServerRoomFlagsUpdated.GameFlag.verify(message.flags[i]);
                    if (error)
                        return "flags." + error;
                }
            }
            return null;
        };

        ServerRoomFlagsUpdated.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerRoomFlagsUpdated)
                return object;
            let message = new $root.NT.ServerRoomFlagsUpdated();
            if (object.flags) {
                if (!Array.isArray(object.flags))
                    throw TypeError(".NT.ServerRoomFlagsUpdated.flags: array expected");
                message.flags = [];
                for (let i = 0; i < object.flags.length; ++i) {
                    if (typeof object.flags[i] !== "object")
                        throw TypeError(".NT.ServerRoomFlagsUpdated.flags: object expected");
                    message.flags[i] = $root.NT.ServerRoomFlagsUpdated.GameFlag.fromObject(object.flags[i]);
                }
            }
            return message;
        };

        ServerRoomFlagsUpdated.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.flags = [];
            if (message.flags && message.flags.length) {
                object.flags = [];
                for (let j = 0; j < message.flags.length; ++j)
                    object.flags[j] = $root.NT.ServerRoomFlagsUpdated.GameFlag.toObject(message.flags[j], options);
            }
            return object;
        };

        ServerRoomFlagsUpdated.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerRoomFlagsUpdated.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerRoomFlagsUpdated";
        };

        ServerRoomFlagsUpdated.GameFlag = (function() {

            function GameFlag(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            GameFlag.prototype.flag = "";
            GameFlag.prototype.intVal = null;
            GameFlag.prototype.strVal = null;
            GameFlag.prototype.floatVal = null;
            GameFlag.prototype.boolVal = null;
            GameFlag.prototype.uIntVal = null;

            let $oneOfFields;

            Object.defineProperty(GameFlag.prototype, "_intVal", {
                get: $util.oneOfGetter($oneOfFields = ["intVal"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            Object.defineProperty(GameFlag.prototype, "_strVal", {
                get: $util.oneOfGetter($oneOfFields = ["strVal"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            Object.defineProperty(GameFlag.prototype, "_floatVal", {
                get: $util.oneOfGetter($oneOfFields = ["floatVal"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            Object.defineProperty(GameFlag.prototype, "_boolVal", {
                get: $util.oneOfGetter($oneOfFields = ["boolVal"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            Object.defineProperty(GameFlag.prototype, "_uIntVal", {
                get: $util.oneOfGetter($oneOfFields = ["uIntVal"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            GameFlag.create = function create(properties) {
                return new GameFlag(properties);
            };

            GameFlag.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(2).string(message.flag);
                if (message.intVal != null && Object.hasOwnProperty.call(message, "intVal"))
                    writer.uint32(8).int32(message.intVal);
                if (message.strVal != null && Object.hasOwnProperty.call(message, "strVal"))
                    writer.uint32(18).string(message.strVal);
                if (message.floatVal != null && Object.hasOwnProperty.call(message, "floatVal"))
                    writer.uint32(29).float(message.floatVal);
                if (message.boolVal != null && Object.hasOwnProperty.call(message, "boolVal"))
                    writer.uint32(32).bool(message.boolVal);
                if (message.uIntVal != null && Object.hasOwnProperty.call(message, "uIntVal"))
                    writer.uint32(40).uint32(message.uIntVal);
                return writer;
            };

            GameFlag.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerRoomFlagsUpdated.GameFlag();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 0: {
                            message.flag = reader.string();
                            break;
                        }
                    case 1: {
                            message.intVal = reader.int32();
                            break;
                        }
                    case 2: {
                            message.strVal = reader.string();
                            break;
                        }
                    case 3: {
                            message.floatVal = reader.float();
                            break;
                        }
                    case 4: {
                            message.boolVal = reader.bool();
                            break;
                        }
                    case 5: {
                            message.uIntVal = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("flag"))
                    throw $util.ProtocolError("missing required 'flag'", { instance: message });
                return message;
            };

            GameFlag.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (!$util.isString(message.flag))
                    return "flag: string expected";
                if (message.intVal != null && message.hasOwnProperty("intVal")) {
                    properties._intVal = 1;
                    if (!$util.isInteger(message.intVal))
                        return "intVal: integer expected";
                }
                if (message.strVal != null && message.hasOwnProperty("strVal")) {
                    properties._strVal = 1;
                    if (!$util.isString(message.strVal))
                        return "strVal: string expected";
                }
                if (message.floatVal != null && message.hasOwnProperty("floatVal")) {
                    properties._floatVal = 1;
                    if (typeof message.floatVal !== "number")
                        return "floatVal: number expected";
                }
                if (message.boolVal != null && message.hasOwnProperty("boolVal")) {
                    properties._boolVal = 1;
                    if (typeof message.boolVal !== "boolean")
                        return "boolVal: boolean expected";
                }
                if (message.uIntVal != null && message.hasOwnProperty("uIntVal")) {
                    properties._uIntVal = 1;
                    if (!$util.isInteger(message.uIntVal))
                        return "uIntVal: integer expected";
                }
                return null;
            };

            GameFlag.fromObject = function fromObject(object) {
                if (object instanceof $root.NT.ServerRoomFlagsUpdated.GameFlag)
                    return object;
                let message = new $root.NT.ServerRoomFlagsUpdated.GameFlag();
                if (object.flag != null)
                    message.flag = String(object.flag);
                if (object.intVal != null)
                    message.intVal = object.intVal | 0;
                if (object.strVal != null)
                    message.strVal = String(object.strVal);
                if (object.floatVal != null)
                    message.floatVal = Number(object.floatVal);
                if (object.boolVal != null)
                    message.boolVal = Boolean(object.boolVal);
                if (object.uIntVal != null)
                    message.uIntVal = object.uIntVal >>> 0;
                return message;
            };

            GameFlag.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.flag = "";
                if (message.flag != null && message.hasOwnProperty("flag"))
                    object.flag = message.flag;
                if (message.intVal != null && message.hasOwnProperty("intVal")) {
                    object.intVal = message.intVal;
                    if (options.oneofs)
                        object._intVal = "intVal";
                }
                if (message.strVal != null && message.hasOwnProperty("strVal")) {
                    object.strVal = message.strVal;
                    if (options.oneofs)
                        object._strVal = "strVal";
                }
                if (message.floatVal != null && message.hasOwnProperty("floatVal")) {
                    object.floatVal = options.json && !isFinite(message.floatVal) ? String(message.floatVal) : message.floatVal;
                    if (options.oneofs)
                        object._floatVal = "floatVal";
                }
                if (message.boolVal != null && message.hasOwnProperty("boolVal")) {
                    object.boolVal = message.boolVal;
                    if (options.oneofs)
                        object._boolVal = "boolVal";
                }
                if (message.uIntVal != null && message.hasOwnProperty("uIntVal")) {
                    object.uIntVal = message.uIntVal;
                    if (options.oneofs)
                        object._uIntVal = "uIntVal";
                }
                return object;
            };

            GameFlag.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            GameFlag.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/NT.ServerRoomFlagsUpdated.GameFlag";
            };

            return GameFlag;
        })();

        return ServerRoomFlagsUpdated;
    })();

    NT.ServerRoomFlagsUpdateFailed = (function() {

        function ServerRoomFlagsUpdateFailed(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerRoomFlagsUpdateFailed.prototype.reason = "";

        ServerRoomFlagsUpdateFailed.create = function create(properties) {
            return new ServerRoomFlagsUpdateFailed(properties);
        };

        ServerRoomFlagsUpdateFailed.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(2).string(message.reason);
            return writer;
        };

        ServerRoomFlagsUpdateFailed.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerRoomFlagsUpdateFailed();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.reason = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ServerRoomFlagsUpdateFailed.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isString(message.reason))
                    return "reason: string expected";
            return null;
        };

        ServerRoomFlagsUpdateFailed.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerRoomFlagsUpdateFailed)
                return object;
            let message = new $root.NT.ServerRoomFlagsUpdateFailed();
            if (object.reason != null)
                message.reason = String(object.reason);
            return message;
        };

        ServerRoomFlagsUpdateFailed.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.reason = "";
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            return object;
        };

        ServerRoomFlagsUpdateFailed.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerRoomFlagsUpdateFailed.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerRoomFlagsUpdateFailed";
        };

        return ServerRoomFlagsUpdateFailed;
    })();

    NT.ClientJoinRoom = (function() {

        function ClientJoinRoom(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientJoinRoom.prototype.id = "";
        ClientJoinRoom.prototype.password = null;

        let $oneOfFields;

        Object.defineProperty(ClientJoinRoom.prototype, "_password", {
            get: $util.oneOfGetter($oneOfFields = ["password"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ClientJoinRoom.create = function create(properties) {
            return new ClientJoinRoom(properties);
        };

        ClientJoinRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.id);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(10).string(message.password);
            return writer;
        };

        ClientJoinRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientJoinRoom();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.id = reader.string();
                        break;
                    }
                case 1: {
                        message.password = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        ClientJoinRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (!$util.isString(message.id))
                return "id: string expected";
            if (message.password != null && message.hasOwnProperty("password")) {
                properties._password = 1;
                if (!$util.isString(message.password))
                    return "password: string expected";
            }
            return null;
        };

        ClientJoinRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientJoinRoom)
                return object;
            let message = new $root.NT.ClientJoinRoom();
            if (object.id != null)
                message.id = String(object.id);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        ClientJoinRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.password != null && message.hasOwnProperty("password")) {
                object.password = message.password;
                if (options.oneofs)
                    object._password = "password";
            }
            return object;
        };

        ClientJoinRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientJoinRoom.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientJoinRoom";
        };

        return ClientJoinRoom;
    })();

    NT.ServerJoinRoomSuccess = (function() {

        function ServerJoinRoomSuccess(properties) {
            this.users = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerJoinRoomSuccess.prototype.id = "";
        ServerJoinRoomSuccess.prototype.name = "";
        ServerJoinRoomSuccess.prototype.gamemode = 0;
        ServerJoinRoomSuccess.prototype.maxUsers = 0;
        ServerJoinRoomSuccess.prototype.password = null;
        ServerJoinRoomSuccess.prototype.locked = false;
        ServerJoinRoomSuccess.prototype.users = $util.emptyArray;

        let $oneOfFields;

        Object.defineProperty(ServerJoinRoomSuccess.prototype, "_password", {
            get: $util.oneOfGetter($oneOfFields = ["password"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ServerJoinRoomSuccess.create = function create(properties) {
            return new ServerJoinRoomSuccess(properties);
        };

        ServerJoinRoomSuccess.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.id);
            writer.uint32(10).string(message.name);
            writer.uint32(16).uint32(message.gamemode);
            writer.uint32(24).uint32(message.maxUsers);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(34).string(message.password);
            writer.uint32(40).bool(message.locked);
            if (message.users != null && message.users.length)
                for (let i = 0; i < message.users.length; ++i)
                    $root.NT.ServerJoinRoomSuccess.User.encode(message.users[i], writer.uint32(50).fork()).ldelim();
            return writer;
        };

        ServerJoinRoomSuccess.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerJoinRoomSuccess();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.id = reader.string();
                        break;
                    }
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.gamemode = reader.uint32();
                        break;
                    }
                case 3: {
                        message.maxUsers = reader.uint32();
                        break;
                    }
                case 4: {
                        message.password = reader.string();
                        break;
                    }
                case 5: {
                        message.locked = reader.bool();
                        break;
                    }
                case 6: {
                        if (!(message.users && message.users.length))
                            message.users = [];
                        message.users.push($root.NT.ServerJoinRoomSuccess.User.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("gamemode"))
                throw $util.ProtocolError("missing required 'gamemode'", { instance: message });
            if (!message.hasOwnProperty("maxUsers"))
                throw $util.ProtocolError("missing required 'maxUsers'", { instance: message });
            if (!message.hasOwnProperty("locked"))
                throw $util.ProtocolError("missing required 'locked'", { instance: message });
            return message;
        };

        ServerJoinRoomSuccess.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (!$util.isString(message.id))
                return "id: string expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isInteger(message.gamemode))
                return "gamemode: integer expected";
            if (!$util.isInteger(message.maxUsers))
                return "maxUsers: integer expected";
            if (message.password != null && message.hasOwnProperty("password")) {
                properties._password = 1;
                if (!$util.isString(message.password))
                    return "password: string expected";
            }
            if (typeof message.locked !== "boolean")
                return "locked: boolean expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (let i = 0; i < message.users.length; ++i) {
                    let error = $root.NT.ServerJoinRoomSuccess.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        ServerJoinRoomSuccess.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerJoinRoomSuccess)
                return object;
            let message = new $root.NT.ServerJoinRoomSuccess();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.gamemode != null)
                message.gamemode = object.gamemode >>> 0;
            if (object.maxUsers != null)
                message.maxUsers = object.maxUsers >>> 0;
            if (object.password != null)
                message.password = String(object.password);
            if (object.locked != null)
                message.locked = Boolean(object.locked);
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".NT.ServerJoinRoomSuccess.users: array expected");
                message.users = [];
                for (let i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".NT.ServerJoinRoomSuccess.users: object expected");
                    message.users[i] = $root.NT.ServerJoinRoomSuccess.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        ServerJoinRoomSuccess.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.gamemode = 0;
                object.maxUsers = 0;
                object.locked = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.gamemode != null && message.hasOwnProperty("gamemode"))
                object.gamemode = message.gamemode;
            if (message.maxUsers != null && message.hasOwnProperty("maxUsers"))
                object.maxUsers = message.maxUsers;
            if (message.password != null && message.hasOwnProperty("password")) {
                object.password = message.password;
                if (options.oneofs)
                    object._password = "password";
            }
            if (message.locked != null && message.hasOwnProperty("locked"))
                object.locked = message.locked;
            if (message.users && message.users.length) {
                object.users = [];
                for (let j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.NT.ServerJoinRoomSuccess.User.toObject(message.users[j], options);
            }
            return object;
        };

        ServerJoinRoomSuccess.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerJoinRoomSuccess.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerJoinRoomSuccess";
        };

        ServerJoinRoomSuccess.User = (function() {

            function User(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            User.prototype.userId = "";
            User.prototype.name = "";
            User.prototype.ready = false;
            User.prototype.owner = false;

            User.create = function create(properties) {
                return new User(properties);
            };

            User.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(2).string(message.userId);
                writer.uint32(10).string(message.name);
                writer.uint32(16).bool(message.ready);
                writer.uint32(24).bool(message.owner);
                return writer;
            };

            User.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerJoinRoomSuccess.User();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 0: {
                            message.userId = reader.string();
                            break;
                        }
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.ready = reader.bool();
                            break;
                        }
                    case 3: {
                            message.owner = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("userId"))
                    throw $util.ProtocolError("missing required 'userId'", { instance: message });
                if (!message.hasOwnProperty("name"))
                    throw $util.ProtocolError("missing required 'name'", { instance: message });
                if (!message.hasOwnProperty("ready"))
                    throw $util.ProtocolError("missing required 'ready'", { instance: message });
                if (!message.hasOwnProperty("owner"))
                    throw $util.ProtocolError("missing required 'owner'", { instance: message });
                return message;
            };

            User.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.userId))
                    return "userId: string expected";
                if (!$util.isString(message.name))
                    return "name: string expected";
                if (typeof message.ready !== "boolean")
                    return "ready: boolean expected";
                if (typeof message.owner !== "boolean")
                    return "owner: boolean expected";
                return null;
            };

            User.fromObject = function fromObject(object) {
                if (object instanceof $root.NT.ServerJoinRoomSuccess.User)
                    return object;
                let message = new $root.NT.ServerJoinRoomSuccess.User();
                if (object.userId != null)
                    message.userId = String(object.userId);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.ready != null)
                    message.ready = Boolean(object.ready);
                if (object.owner != null)
                    message.owner = Boolean(object.owner);
                return message;
            };

            User.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.userId = "";
                    object.name = "";
                    object.ready = false;
                    object.owner = false;
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.ready != null && message.hasOwnProperty("ready"))
                    object.ready = message.ready;
                if (message.owner != null && message.hasOwnProperty("owner"))
                    object.owner = message.owner;
                return object;
            };

            User.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            User.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/NT.ServerJoinRoomSuccess.User";
            };

            return User;
        })();

        return ServerJoinRoomSuccess;
    })();

    NT.ServerJoinRoomFailed = (function() {

        function ServerJoinRoomFailed(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerJoinRoomFailed.prototype.reason = "";

        ServerJoinRoomFailed.create = function create(properties) {
            return new ServerJoinRoomFailed(properties);
        };

        ServerJoinRoomFailed.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(2).string(message.reason);
            return writer;
        };

        ServerJoinRoomFailed.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerJoinRoomFailed();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.reason = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ServerJoinRoomFailed.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isString(message.reason))
                    return "reason: string expected";
            return null;
        };

        ServerJoinRoomFailed.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerJoinRoomFailed)
                return object;
            let message = new $root.NT.ServerJoinRoomFailed();
            if (object.reason != null)
                message.reason = String(object.reason);
            return message;
        };

        ServerJoinRoomFailed.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.reason = "";
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            return object;
        };

        ServerJoinRoomFailed.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerJoinRoomFailed.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerJoinRoomFailed";
        };

        return ServerJoinRoomFailed;
    })();

    NT.ServerUserJoinedRoom = (function() {

        function ServerUserJoinedRoom(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerUserJoinedRoom.prototype.userId = "";
        ServerUserJoinedRoom.prototype.name = "";

        ServerUserJoinedRoom.create = function create(properties) {
            return new ServerUserJoinedRoom(properties);
        };

        ServerUserJoinedRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.userId);
            writer.uint32(18).string(message.name);
            return writer;
        };

        ServerUserJoinedRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerUserJoinedRoom();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            return message;
        };

        ServerUserJoinedRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userId))
                return "userId: string expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            return null;
        };

        ServerUserJoinedRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerUserJoinedRoom)
                return object;
            let message = new $root.NT.ServerUserJoinedRoom();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        ServerUserJoinedRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = "";
                object.name = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        ServerUserJoinedRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerUserJoinedRoom.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerUserJoinedRoom";
        };

        return ServerUserJoinedRoom;
    })();

    NT.ClientLeaveRoom = (function() {

        function ClientLeaveRoom(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientLeaveRoom.prototype.userId = "";

        ClientLeaveRoom.create = function create(properties) {
            return new ClientLeaveRoom(properties);
        };

        ClientLeaveRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.userId);
            return writer;
        };

        ClientLeaveRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientLeaveRoom();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            return message;
        };

        ClientLeaveRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userId))
                return "userId: string expected";
            return null;
        };

        ClientLeaveRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientLeaveRoom)
                return object;
            let message = new $root.NT.ClientLeaveRoom();
            if (object.userId != null)
                message.userId = String(object.userId);
            return message;
        };

        ClientLeaveRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.userId = "";
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        ClientLeaveRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientLeaveRoom.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientLeaveRoom";
        };

        return ClientLeaveRoom;
    })();

    NT.ServerUserLeftRoom = (function() {

        function ServerUserLeftRoom(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerUserLeftRoom.prototype.userId = "";

        ServerUserLeftRoom.create = function create(properties) {
            return new ServerUserLeftRoom(properties);
        };

        ServerUserLeftRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.userId);
            return writer;
        };

        ServerUserLeftRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerUserLeftRoom();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            return message;
        };

        ServerUserLeftRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userId))
                return "userId: string expected";
            return null;
        };

        ServerUserLeftRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerUserLeftRoom)
                return object;
            let message = new $root.NT.ServerUserLeftRoom();
            if (object.userId != null)
                message.userId = String(object.userId);
            return message;
        };

        ServerUserLeftRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.userId = "";
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        ServerUserLeftRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerUserLeftRoom.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerUserLeftRoom";
        };

        return ServerUserLeftRoom;
    })();

    NT.ClientKickUser = (function() {

        function ClientKickUser(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientKickUser.prototype.userId = "";

        ClientKickUser.create = function create(properties) {
            return new ClientKickUser(properties);
        };

        ClientKickUser.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.userId);
            return writer;
        };

        ClientKickUser.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientKickUser();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            return message;
        };

        ClientKickUser.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userId))
                return "userId: string expected";
            return null;
        };

        ClientKickUser.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientKickUser)
                return object;
            let message = new $root.NT.ClientKickUser();
            if (object.userId != null)
                message.userId = String(object.userId);
            return message;
        };

        ClientKickUser.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.userId = "";
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        ClientKickUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientKickUser.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientKickUser";
        };

        return ClientKickUser;
    })();

    NT.ServerUserKicked = (function() {

        function ServerUserKicked(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerUserKicked.prototype.userId = "";

        ServerUserKicked.create = function create(properties) {
            return new ServerUserKicked(properties);
        };

        ServerUserKicked.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.userId);
            return writer;
        };

        ServerUserKicked.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerUserKicked();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            return message;
        };

        ServerUserKicked.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userId))
                return "userId: string expected";
            return null;
        };

        ServerUserKicked.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerUserKicked)
                return object;
            let message = new $root.NT.ServerUserKicked();
            if (object.userId != null)
                message.userId = String(object.userId);
            return message;
        };

        ServerUserKicked.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.userId = "";
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        ServerUserKicked.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerUserKicked.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerUserKicked";
        };

        return ServerUserKicked;
    })();

    NT.ClientBanUser = (function() {

        function ClientBanUser(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientBanUser.prototype.userId = "";

        ClientBanUser.create = function create(properties) {
            return new ClientBanUser(properties);
        };

        ClientBanUser.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.userId);
            return writer;
        };

        ClientBanUser.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientBanUser();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            return message;
        };

        ClientBanUser.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userId))
                return "userId: string expected";
            return null;
        };

        ClientBanUser.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientBanUser)
                return object;
            let message = new $root.NT.ClientBanUser();
            if (object.userId != null)
                message.userId = String(object.userId);
            return message;
        };

        ClientBanUser.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.userId = "";
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        ClientBanUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientBanUser.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientBanUser";
        };

        return ClientBanUser;
    })();

    NT.ServerUserBanned = (function() {

        function ServerUserBanned(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerUserBanned.prototype.userId = "";

        ServerUserBanned.create = function create(properties) {
            return new ServerUserBanned(properties);
        };

        ServerUserBanned.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(10).string(message.userId);
            return writer;
        };

        ServerUserBanned.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerUserBanned();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            return message;
        };

        ServerUserBanned.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userId))
                return "userId: string expected";
            return null;
        };

        ServerUserBanned.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerUserBanned)
                return object;
            let message = new $root.NT.ServerUserBanned();
            if (object.userId != null)
                message.userId = String(object.userId);
            return message;
        };

        ServerUserBanned.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.userId = "";
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        ServerUserBanned.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerUserBanned.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerUserBanned";
        };

        return ServerUserBanned;
    })();

    NT.ClientReadyState = (function() {

        function ClientReadyState(properties) {
            this.mods = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientReadyState.prototype.ready = false;
        ClientReadyState.prototype.seed = null;
        ClientReadyState.prototype.mods = $util.emptyArray;
        ClientReadyState.prototype.version = null;
        ClientReadyState.prototype.beta = null;

        let $oneOfFields;

        Object.defineProperty(ClientReadyState.prototype, "_seed", {
            get: $util.oneOfGetter($oneOfFields = ["seed"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Object.defineProperty(ClientReadyState.prototype, "_version", {
            get: $util.oneOfGetter($oneOfFields = ["version"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Object.defineProperty(ClientReadyState.prototype, "_beta", {
            get: $util.oneOfGetter($oneOfFields = ["beta"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ClientReadyState.create = function create(properties) {
            return new ClientReadyState(properties);
        };

        ClientReadyState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(0).bool(message.ready);
            if (message.seed != null && Object.hasOwnProperty.call(message, "seed"))
                writer.uint32(10).string(message.seed);
            if (message.mods != null && message.mods.length)
                for (let i = 0; i < message.mods.length; ++i)
                    writer.uint32(18).string(message.mods[i]);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(26).string(message.version);
            if (message.beta != null && Object.hasOwnProperty.call(message, "beta"))
                writer.uint32(32).bool(message.beta);
            return writer;
        };

        ClientReadyState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientReadyState();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.ready = reader.bool();
                        break;
                    }
                case 1: {
                        message.seed = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.mods && message.mods.length))
                            message.mods = [];
                        message.mods.push(reader.string());
                        break;
                    }
                case 3: {
                        message.version = reader.string();
                        break;
                    }
                case 4: {
                        message.beta = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ready"))
                throw $util.ProtocolError("missing required 'ready'", { instance: message });
            return message;
        };

        ClientReadyState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (typeof message.ready !== "boolean")
                return "ready: boolean expected";
            if (message.seed != null && message.hasOwnProperty("seed")) {
                properties._seed = 1;
                if (!$util.isString(message.seed))
                    return "seed: string expected";
            }
            if (message.mods != null && message.hasOwnProperty("mods")) {
                if (!Array.isArray(message.mods))
                    return "mods: array expected";
                for (let i = 0; i < message.mods.length; ++i)
                    if (!$util.isString(message.mods[i]))
                        return "mods: string[] expected";
            }
            if (message.version != null && message.hasOwnProperty("version")) {
                properties._version = 1;
                if (!$util.isString(message.version))
                    return "version: string expected";
            }
            if (message.beta != null && message.hasOwnProperty("beta")) {
                properties._beta = 1;
                if (typeof message.beta !== "boolean")
                    return "beta: boolean expected";
            }
            return null;
        };

        ClientReadyState.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientReadyState)
                return object;
            let message = new $root.NT.ClientReadyState();
            if (object.ready != null)
                message.ready = Boolean(object.ready);
            if (object.seed != null)
                message.seed = String(object.seed);
            if (object.mods) {
                if (!Array.isArray(object.mods))
                    throw TypeError(".NT.ClientReadyState.mods: array expected");
                message.mods = [];
                for (let i = 0; i < object.mods.length; ++i)
                    message.mods[i] = String(object.mods[i]);
            }
            if (object.version != null)
                message.version = String(object.version);
            if (object.beta != null)
                message.beta = Boolean(object.beta);
            return message;
        };

        ClientReadyState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.mods = [];
            if (options.defaults)
                object.ready = false;
            if (message.ready != null && message.hasOwnProperty("ready"))
                object.ready = message.ready;
            if (message.seed != null && message.hasOwnProperty("seed")) {
                object.seed = message.seed;
                if (options.oneofs)
                    object._seed = "seed";
            }
            if (message.mods && message.mods.length) {
                object.mods = [];
                for (let j = 0; j < message.mods.length; ++j)
                    object.mods[j] = message.mods[j];
            }
            if (message.version != null && message.hasOwnProperty("version")) {
                object.version = message.version;
                if (options.oneofs)
                    object._version = "version";
            }
            if (message.beta != null && message.hasOwnProperty("beta")) {
                object.beta = message.beta;
                if (options.oneofs)
                    object._beta = "beta";
            }
            return object;
        };

        ClientReadyState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientReadyState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientReadyState";
        };

        return ClientReadyState;
    })();

    NT.ServerUserReadyState = (function() {

        function ServerUserReadyState(properties) {
            this.mods = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerUserReadyState.prototype.userId = "";
        ServerUserReadyState.prototype.ready = false;
        ServerUserReadyState.prototype.seed = null;
        ServerUserReadyState.prototype.mods = $util.emptyArray;
        ServerUserReadyState.prototype.version = null;
        ServerUserReadyState.prototype.beta = null;

        let $oneOfFields;

        Object.defineProperty(ServerUserReadyState.prototype, "_seed", {
            get: $util.oneOfGetter($oneOfFields = ["seed"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Object.defineProperty(ServerUserReadyState.prototype, "_version", {
            get: $util.oneOfGetter($oneOfFields = ["version"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Object.defineProperty(ServerUserReadyState.prototype, "_beta", {
            get: $util.oneOfGetter($oneOfFields = ["beta"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ServerUserReadyState.create = function create(properties) {
            return new ServerUserReadyState(properties);
        };

        ServerUserReadyState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(2).string(message.userId);
            writer.uint32(8).bool(message.ready);
            if (message.seed != null && Object.hasOwnProperty.call(message, "seed"))
                writer.uint32(18).string(message.seed);
            if (message.mods != null && message.mods.length)
                for (let i = 0; i < message.mods.length; ++i)
                    writer.uint32(26).string(message.mods[i]);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(34).string(message.version);
            if (message.beta != null && Object.hasOwnProperty.call(message, "beta"))
                writer.uint32(40).bool(message.beta);
            return writer;
        };

        ServerUserReadyState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerUserReadyState();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.userId = reader.string();
                        break;
                    }
                case 1: {
                        message.ready = reader.bool();
                        break;
                    }
                case 2: {
                        message.seed = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.mods && message.mods.length))
                            message.mods = [];
                        message.mods.push(reader.string());
                        break;
                    }
                case 4: {
                        message.version = reader.string();
                        break;
                    }
                case 5: {
                        message.beta = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("ready"))
                throw $util.ProtocolError("missing required 'ready'", { instance: message });
            return message;
        };

        ServerUserReadyState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (!$util.isString(message.userId))
                return "userId: string expected";
            if (typeof message.ready !== "boolean")
                return "ready: boolean expected";
            if (message.seed != null && message.hasOwnProperty("seed")) {
                properties._seed = 1;
                if (!$util.isString(message.seed))
                    return "seed: string expected";
            }
            if (message.mods != null && message.hasOwnProperty("mods")) {
                if (!Array.isArray(message.mods))
                    return "mods: array expected";
                for (let i = 0; i < message.mods.length; ++i)
                    if (!$util.isString(message.mods[i]))
                        return "mods: string[] expected";
            }
            if (message.version != null && message.hasOwnProperty("version")) {
                properties._version = 1;
                if (!$util.isString(message.version))
                    return "version: string expected";
            }
            if (message.beta != null && message.hasOwnProperty("beta")) {
                properties._beta = 1;
                if (typeof message.beta !== "boolean")
                    return "beta: boolean expected";
            }
            return null;
        };

        ServerUserReadyState.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerUserReadyState)
                return object;
            let message = new $root.NT.ServerUserReadyState();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.ready != null)
                message.ready = Boolean(object.ready);
            if (object.seed != null)
                message.seed = String(object.seed);
            if (object.mods) {
                if (!Array.isArray(object.mods))
                    throw TypeError(".NT.ServerUserReadyState.mods: array expected");
                message.mods = [];
                for (let i = 0; i < object.mods.length; ++i)
                    message.mods[i] = String(object.mods[i]);
            }
            if (object.version != null)
                message.version = String(object.version);
            if (object.beta != null)
                message.beta = Boolean(object.beta);
            return message;
        };

        ServerUserReadyState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.mods = [];
            if (options.defaults) {
                object.userId = "";
                object.ready = false;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.ready != null && message.hasOwnProperty("ready"))
                object.ready = message.ready;
            if (message.seed != null && message.hasOwnProperty("seed")) {
                object.seed = message.seed;
                if (options.oneofs)
                    object._seed = "seed";
            }
            if (message.mods && message.mods.length) {
                object.mods = [];
                for (let j = 0; j < message.mods.length; ++j)
                    object.mods[j] = message.mods[j];
            }
            if (message.version != null && message.hasOwnProperty("version")) {
                object.version = message.version;
                if (options.oneofs)
                    object._version = "version";
            }
            if (message.beta != null && message.hasOwnProperty("beta")) {
                object.beta = message.beta;
                if (options.oneofs)
                    object._beta = "beta";
            }
            return object;
        };

        ServerUserReadyState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerUserReadyState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerUserReadyState";
        };

        return ServerUserReadyState;
    })();

    NT.ClientStartRun = (function() {

        function ClientStartRun(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientStartRun.prototype.forced = false;

        ClientStartRun.create = function create(properties) {
            return new ClientStartRun(properties);
        };

        ClientStartRun.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(0).bool(message.forced);
            return writer;
        };

        ClientStartRun.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientStartRun();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.forced = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("forced"))
                throw $util.ProtocolError("missing required 'forced'", { instance: message });
            return message;
        };

        ClientStartRun.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.forced !== "boolean")
                return "forced: boolean expected";
            return null;
        };

        ClientStartRun.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientStartRun)
                return object;
            let message = new $root.NT.ClientStartRun();
            if (object.forced != null)
                message.forced = Boolean(object.forced);
            return message;
        };

        ClientStartRun.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.forced = false;
            if (message.forced != null && message.hasOwnProperty("forced"))
                object.forced = message.forced;
            return object;
        };

        ClientStartRun.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientStartRun.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientStartRun";
        };

        return ClientStartRun;
    })();

    NT.ServerHostStart = (function() {

        function ServerHostStart(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerHostStart.prototype.forced = false;

        ServerHostStart.create = function create(properties) {
            return new ServerHostStart(properties);
        };

        ServerHostStart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(0).bool(message.forced);
            return writer;
        };

        ServerHostStart.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerHostStart();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.forced = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("forced"))
                throw $util.ProtocolError("missing required 'forced'", { instance: message });
            return message;
        };

        ServerHostStart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.forced !== "boolean")
                return "forced: boolean expected";
            return null;
        };

        ServerHostStart.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerHostStart)
                return object;
            let message = new $root.NT.ServerHostStart();
            if (object.forced != null)
                message.forced = Boolean(object.forced);
            return message;
        };

        ServerHostStart.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.forced = false;
            if (message.forced != null && message.hasOwnProperty("forced"))
                object.forced = message.forced;
            return object;
        };

        ServerHostStart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerHostStart.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerHostStart";
        };

        return ServerHostStart;
    })();

    NT.ClientRequestRoomList = (function() {

        function ClientRequestRoomList(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ClientRequestRoomList.prototype.page = 0;

        ClientRequestRoomList.create = function create(properties) {
            return new ClientRequestRoomList(properties);
        };

        ClientRequestRoomList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(0).uint32(message.page);
            return writer;
        };

        ClientRequestRoomList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ClientRequestRoomList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.page = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("page"))
                throw $util.ProtocolError("missing required 'page'", { instance: message });
            return message;
        };

        ClientRequestRoomList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.page))
                return "page: integer expected";
            return null;
        };

        ClientRequestRoomList.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ClientRequestRoomList)
                return object;
            let message = new $root.NT.ClientRequestRoomList();
            if (object.page != null)
                message.page = object.page >>> 0;
            return message;
        };

        ClientRequestRoomList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.page = 0;
            if (message.page != null && message.hasOwnProperty("page"))
                object.page = message.page;
            return object;
        };

        ClientRequestRoomList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientRequestRoomList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ClientRequestRoomList";
        };

        return ClientRequestRoomList;
    })();

    NT.ServerRoomList = (function() {

        function ServerRoomList(properties) {
            this.rooms = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerRoomList.prototype.rooms = $util.emptyArray;
        ServerRoomList.prototype.pages = null;

        let $oneOfFields;

        Object.defineProperty(ServerRoomList.prototype, "_pages", {
            get: $util.oneOfGetter($oneOfFields = ["pages"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        ServerRoomList.create = function create(properties) {
            return new ServerRoomList(properties);
        };

        ServerRoomList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rooms != null && message.rooms.length)
                for (let i = 0; i < message.rooms.length; ++i)
                    $root.NT.ServerRoomList.Room.encode(message.rooms[i], writer.uint32(2).fork()).ldelim();
            if (message.pages != null && Object.hasOwnProperty.call(message, "pages"))
                writer.uint32(8).uint32(message.pages);
            return writer;
        };

        ServerRoomList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerRoomList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        if (!(message.rooms && message.rooms.length))
                            message.rooms = [];
                        message.rooms.push($root.NT.ServerRoomList.Room.decode(reader, reader.uint32()));
                        break;
                    }
                case 1: {
                        message.pages = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ServerRoomList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.rooms != null && message.hasOwnProperty("rooms")) {
                if (!Array.isArray(message.rooms))
                    return "rooms: array expected";
                for (let i = 0; i < message.rooms.length; ++i) {
                    let error = $root.NT.ServerRoomList.Room.verify(message.rooms[i]);
                    if (error)
                        return "rooms." + error;
                }
            }
            if (message.pages != null && message.hasOwnProperty("pages")) {
                properties._pages = 1;
                if (!$util.isInteger(message.pages))
                    return "pages: integer expected";
            }
            return null;
        };

        ServerRoomList.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerRoomList)
                return object;
            let message = new $root.NT.ServerRoomList();
            if (object.rooms) {
                if (!Array.isArray(object.rooms))
                    throw TypeError(".NT.ServerRoomList.rooms: array expected");
                message.rooms = [];
                for (let i = 0; i < object.rooms.length; ++i) {
                    if (typeof object.rooms[i] !== "object")
                        throw TypeError(".NT.ServerRoomList.rooms: object expected");
                    message.rooms[i] = $root.NT.ServerRoomList.Room.fromObject(object.rooms[i]);
                }
            }
            if (object.pages != null)
                message.pages = object.pages >>> 0;
            return message;
        };

        ServerRoomList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.rooms = [];
            if (message.rooms && message.rooms.length) {
                object.rooms = [];
                for (let j = 0; j < message.rooms.length; ++j)
                    object.rooms[j] = $root.NT.ServerRoomList.Room.toObject(message.rooms[j], options);
            }
            if (message.pages != null && message.hasOwnProperty("pages")) {
                object.pages = message.pages;
                if (options.oneofs)
                    object._pages = "pages";
            }
            return object;
        };

        ServerRoomList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerRoomList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerRoomList";
        };

        ServerRoomList.Room = (function() {

            function Room(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            Room.prototype.id = "";
            Room.prototype.name = "";
            Room.prototype.gamemode = 0;
            Room.prototype.curUsers = 0;
            Room.prototype.maxUsers = 0;
            Room.prototype["protected"] = false;
            Room.prototype.owner = "";
            Room.prototype.locked = false;

            Room.create = function create(properties) {
                return new Room(properties);
            };

            Room.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(2).string(message.id);
                writer.uint32(10).string(message.name);
                writer.uint32(16).uint32(message.gamemode);
                writer.uint32(24).uint32(message.curUsers);
                writer.uint32(32).uint32(message.maxUsers);
                writer.uint32(40).bool(message["protected"]);
                writer.uint32(50).string(message.owner);
                writer.uint32(56).bool(message.locked);
                return writer;
            };

            Room.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerRoomList.Room();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 0: {
                            message.id = reader.string();
                            break;
                        }
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.gamemode = reader.uint32();
                            break;
                        }
                    case 3: {
                            message.curUsers = reader.uint32();
                            break;
                        }
                    case 4: {
                            message.maxUsers = reader.uint32();
                            break;
                        }
                    case 5: {
                            message["protected"] = reader.bool();
                            break;
                        }
                    case 6: {
                            message.owner = reader.string();
                            break;
                        }
                    case 7: {
                            message.locked = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("id"))
                    throw $util.ProtocolError("missing required 'id'", { instance: message });
                if (!message.hasOwnProperty("name"))
                    throw $util.ProtocolError("missing required 'name'", { instance: message });
                if (!message.hasOwnProperty("gamemode"))
                    throw $util.ProtocolError("missing required 'gamemode'", { instance: message });
                if (!message.hasOwnProperty("curUsers"))
                    throw $util.ProtocolError("missing required 'curUsers'", { instance: message });
                if (!message.hasOwnProperty("maxUsers"))
                    throw $util.ProtocolError("missing required 'maxUsers'", { instance: message });
                if (!message.hasOwnProperty("protected"))
                    throw $util.ProtocolError("missing required 'protected'", { instance: message });
                if (!message.hasOwnProperty("owner"))
                    throw $util.ProtocolError("missing required 'owner'", { instance: message });
                if (!message.hasOwnProperty("locked"))
                    throw $util.ProtocolError("missing required 'locked'", { instance: message });
                return message;
            };

            Room.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.id))
                    return "id: string expected";
                if (!$util.isString(message.name))
                    return "name: string expected";
                if (!$util.isInteger(message.gamemode))
                    return "gamemode: integer expected";
                if (!$util.isInteger(message.curUsers))
                    return "curUsers: integer expected";
                if (!$util.isInteger(message.maxUsers))
                    return "maxUsers: integer expected";
                if (typeof message["protected"] !== "boolean")
                    return "protected: boolean expected";
                if (!$util.isString(message.owner))
                    return "owner: string expected";
                if (typeof message.locked !== "boolean")
                    return "locked: boolean expected";
                return null;
            };

            Room.fromObject = function fromObject(object) {
                if (object instanceof $root.NT.ServerRoomList.Room)
                    return object;
                let message = new $root.NT.ServerRoomList.Room();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.gamemode != null)
                    message.gamemode = object.gamemode >>> 0;
                if (object.curUsers != null)
                    message.curUsers = object.curUsers >>> 0;
                if (object.maxUsers != null)
                    message.maxUsers = object.maxUsers >>> 0;
                if (object["protected"] != null)
                    message["protected"] = Boolean(object["protected"]);
                if (object.owner != null)
                    message.owner = String(object.owner);
                if (object.locked != null)
                    message.locked = Boolean(object.locked);
                return message;
            };

            Room.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                    object.gamemode = 0;
                    object.curUsers = 0;
                    object.maxUsers = 0;
                    object["protected"] = false;
                    object.owner = "";
                    object.locked = false;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.gamemode != null && message.hasOwnProperty("gamemode"))
                    object.gamemode = message.gamemode;
                if (message.curUsers != null && message.hasOwnProperty("curUsers"))
                    object.curUsers = message.curUsers;
                if (message.maxUsers != null && message.hasOwnProperty("maxUsers"))
                    object.maxUsers = message.maxUsers;
                if (message["protected"] != null && message.hasOwnProperty("protected"))
                    object["protected"] = message["protected"];
                if (message.owner != null && message.hasOwnProperty("owner"))
                    object.owner = message.owner;
                if (message.locked != null && message.hasOwnProperty("locked"))
                    object.locked = message.locked;
                return object;
            };

            Room.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Room.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/NT.ServerRoomList.Room";
            };

            return Room;
        })();

        return ServerRoomList;
    })();

    NT.ServerRoomAddToList = (function() {

        function ServerRoomAddToList(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ServerRoomAddToList.prototype.room = null;

        ServerRoomAddToList.create = function create(properties) {
            return new ServerRoomAddToList(properties);
        };

        ServerRoomAddToList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.NT.ServerRoomAddToList.Room.encode(message.room, writer.uint32(2).fork()).ldelim();
            return writer;
        };

        ServerRoomAddToList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerRoomAddToList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 0: {
                        message.room = $root.NT.ServerRoomAddToList.Room.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("room"))
                throw $util.ProtocolError("missing required 'room'", { instance: message });
            return message;
        };

        ServerRoomAddToList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                let error = $root.NT.ServerRoomAddToList.Room.verify(message.room);
                if (error)
                    return "room." + error;
            }
            return null;
        };

        ServerRoomAddToList.fromObject = function fromObject(object) {
            if (object instanceof $root.NT.ServerRoomAddToList)
                return object;
            let message = new $root.NT.ServerRoomAddToList();
            if (object.room != null) {
                if (typeof object.room !== "object")
                    throw TypeError(".NT.ServerRoomAddToList.room: object expected");
                message.room = $root.NT.ServerRoomAddToList.Room.fromObject(object.room);
            }
            return message;
        };

        ServerRoomAddToList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.room = null;
            if (message.room != null && message.hasOwnProperty("room"))
                object.room = $root.NT.ServerRoomAddToList.Room.toObject(message.room, options);
            return object;
        };

        ServerRoomAddToList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerRoomAddToList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NT.ServerRoomAddToList";
        };

        ServerRoomAddToList.Room = (function() {

            function Room(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            Room.prototype.id = "";
            Room.prototype.name = "";
            Room.prototype.gamemode = 0;
            Room.prototype.curUsers = 0;
            Room.prototype.maxUsers = 0;
            Room.prototype["protected"] = false;
            Room.prototype.owner = "";
            Room.prototype.locked = false;

            Room.create = function create(properties) {
                return new Room(properties);
            };

            Room.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(2).string(message.id);
                writer.uint32(10).string(message.name);
                writer.uint32(16).uint32(message.gamemode);
                writer.uint32(24).uint32(message.curUsers);
                writer.uint32(32).uint32(message.maxUsers);
                writer.uint32(40).bool(message["protected"]);
                writer.uint32(50).string(message.owner);
                writer.uint32(56).bool(message.locked);
                return writer;
            };

            Room.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NT.ServerRoomAddToList.Room();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 0: {
                            message.id = reader.string();
                            break;
                        }
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.gamemode = reader.uint32();
                            break;
                        }
                    case 3: {
                            message.curUsers = reader.uint32();
                            break;
                        }
                    case 4: {
                            message.maxUsers = reader.uint32();
                            break;
                        }
                    case 5: {
                            message["protected"] = reader.bool();
                            break;
                        }
                    case 6: {
                            message.owner = reader.string();
                            break;
                        }
                    case 7: {
                            message.locked = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("id"))
                    throw $util.ProtocolError("missing required 'id'", { instance: message });
                if (!message.hasOwnProperty("name"))
                    throw $util.ProtocolError("missing required 'name'", { instance: message });
                if (!message.hasOwnProperty("gamemode"))
                    throw $util.ProtocolError("missing required 'gamemode'", { instance: message });
                if (!message.hasOwnProperty("curUsers"))
                    throw $util.ProtocolError("missing required 'curUsers'", { instance: message });
                if (!message.hasOwnProperty("maxUsers"))
                    throw $util.ProtocolError("missing required 'maxUsers'", { instance: message });
                if (!message.hasOwnProperty("protected"))
                    throw $util.ProtocolError("missing required 'protected'", { instance: message });
                if (!message.hasOwnProperty("owner"))
                    throw $util.ProtocolError("missing required 'owner'", { instance: message });
                if (!message.hasOwnProperty("locked"))
                    throw $util.ProtocolError("missing required 'locked'", { instance: message });
                return message;
            };

            Room.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.id))
                    return "id: string expected";
                if (!$util.isString(message.name))
                    return "name: string expected";
                if (!$util.isInteger(message.gamemode))
                    return "gamemode: integer expected";
                if (!$util.isInteger(message.curUsers))
                    return "curUsers: integer expected";
                if (!$util.isInteger(message.maxUsers))
                    return "maxUsers: integer expected";
                if (typeof message["protected"] !== "boolean")
                    return "protected: boolean expected";
                if (!$util.isString(message.owner))
                    return "owner: string expected";
                if (typeof message.locked !== "boolean")
                    return "locked: boolean expected";
                return null;
            };

            Room.fromObject = function fromObject(object) {
                if (object instanceof $root.NT.ServerRoomAddToList.Room)
                    return object;
                let message = new $root.NT.ServerRoomAddToList.Room();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.gamemode != null)
                    message.gamemode = object.gamemode >>> 0;
                if (object.curUsers != null)
                    message.curUsers = object.curUsers >>> 0;
                if (object.maxUsers != null)
                    message.maxUsers = object.maxUsers >>> 0;
                if (object["protected"] != null)
                    message["protected"] = Boolean(object["protected"]);
                if (object.owner != null)
                    message.owner = String(object.owner);
                if (object.locked != null)
                    message.locked = Boolean(object.locked);
                return message;
            };

            Room.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                    object.gamemode = 0;
                    object.curUsers = 0;
                    object.maxUsers = 0;
                    object["protected"] = false;
                    object.owner = "";
                    object.locked = false;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.gamemode != null && message.hasOwnProperty("gamemode"))
                    object.gamemode = message.gamemode;
                if (message.curUsers != null && message.hasOwnProperty("curUsers"))
                    object.curUsers = message.curUsers;
                if (message.maxUsers != null && message.hasOwnProperty("maxUsers"))
                    object.maxUsers = message.maxUsers;
                if (message["protected"] != null && message.hasOwnProperty("protected"))
                    object["protected"] = message["protected"];
                if (message.owner != null && message.hasOwnProperty("owner"))
                    object.owner = message.owner;
                if (message.locked != null && message.hasOwnProperty("locked"))
                    object.locked = message.locked;
                return object;
            };

            Room.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Room.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/NT.ServerRoomAddToList.Room";
            };

            return Room;
        })();

        return ServerRoomAddToList;
    })();

    return NT;
})();

export { $root as default };
