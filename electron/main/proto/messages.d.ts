import * as $protobuf from "protobufjs";
/** Namespace NT. */
export namespace NT {

    /** Properties of an Envelope. */
    interface IEnvelope {

        /** Envelope gameAction */
        gameAction?: (NT.IGameAction|null);

        /** Envelope lobbyAction */
        lobbyAction?: (NT.ILobbyAction|null);
    }

    /** Represents an Envelope. */
    class Envelope implements IEnvelope {

        /**
         * Constructs a new Envelope.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IEnvelope);

        /** Envelope gameAction. */
        public gameAction?: (NT.IGameAction|null);

        /** Envelope lobbyAction. */
        public lobbyAction?: (NT.ILobbyAction|null);

        /** Envelope kind. */
        public kind?: ("gameAction"|"lobbyAction");

        /**
         * Creates a new Envelope instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Envelope instance
         */
        public static create(properties?: NT.IEnvelope): NT.Envelope;

        /**
         * Encodes the specified Envelope message. Does not implicitly {@link NT.Envelope.verify|verify} messages.
         * @param message Envelope message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Envelope message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Envelope
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.Envelope;

        /**
         * Verifies an Envelope message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Envelope message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Envelope
         */
        public static fromObject(object: { [k: string]: any }): NT.Envelope;

        /**
         * Creates a plain object from an Envelope message. Also converts values to other types if specified.
         * @param message Envelope
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.Envelope, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Envelope to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Envelope
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GameAction. */
    interface IGameAction {

        /** GameAction cPlayerMove */
        cPlayerMove?: (NT.IClientPlayerMove|null);

        /** GameAction sPlayerMove */
        sPlayerMove?: (NT.IServerPlayerMove|null);

        /** GameAction cPlayerUpdate */
        cPlayerUpdate?: (NT.IClientPlayerUpdate|null);

        /** GameAction sPlayerUpdate */
        sPlayerUpdate?: (NT.IServerPlayerUpdate|null);

        /** GameAction cPlayerUpdateInventory */
        cPlayerUpdateInventory?: (NT.IClientPlayerUpdateInventory|null);

        /** GameAction sPlayerUpdateInventory */
        sPlayerUpdateInventory?: (NT.IServerPlayerUpdateInventory|null);

        /** GameAction cHostItemBank */
        cHostItemBank?: (NT.IClientHostItemBank|null);

        /** GameAction sHostItemBank */
        sHostItemBank?: (NT.IServerHostItemBank|null);

        /** GameAction cHostUserTake */
        cHostUserTake?: (NT.IClientHostUserTake|null);

        /** GameAction sHostUserTake */
        sHostUserTake?: (NT.IServerHostUserTake|null);

        /** GameAction cHostUserTakeGold */
        cHostUserTakeGold?: (NT.IClientHostUserTakeGold|null);

        /** GameAction sHostUserTakeGold */
        sHostUserTakeGold?: (NT.IServerHostUserTakeGold|null);

        /** GameAction cPlayerAddGold */
        cPlayerAddGold?: (NT.IClientPlayerAddGold|null);

        /** GameAction sPlayerAddGold */
        sPlayerAddGold?: (NT.IServerPlayerAddGold|null);

        /** GameAction cPlayerTakeGold */
        cPlayerTakeGold?: (NT.IClientPlayerTakeGold|null);

        /** GameAction sPlayerTakeGold */
        sPlayerTakeGold?: (NT.IServerPlayerTakeGold|null);

        /** GameAction cPlayerAddItem */
        cPlayerAddItem?: (NT.IClientPlayerAddItem|null);

        /** GameAction sPlayerAddItem */
        sPlayerAddItem?: (NT.IServerPlayerAddItem|null);

        /** GameAction cPlayerTakeItem */
        cPlayerTakeItem?: (NT.IClientPlayerTakeItem|null);

        /** GameAction sPlayerTakeItem */
        sPlayerTakeItem?: (NT.IServerPlayerTakeItem|null);

        /** GameAction cPlayerPickup */
        cPlayerPickup?: (NT.IClientPlayerPickup|null);

        /** GameAction sPlayerPickup */
        sPlayerPickup?: (NT.IServerPlayerPickup|null);

        /** GameAction cNemesisAbility */
        cNemesisAbility?: (NT.IClientNemesisAbility|null);

        /** GameAction sNemesisAbility */
        sNemesisAbility?: (NT.IServerNemesisAbility|null);

        /** GameAction cNemesisPickupItem */
        cNemesisPickupItem?: (NT.IClientNemesisPickupItem|null);

        /** GameAction sNemesisPickupItem */
        sNemesisPickupItem?: (NT.IServerNemesisPickupItem|null);

        /** GameAction cChat */
        cChat?: (NT.IClientChat|null);

        /** GameAction sChat */
        sChat?: (NT.IServerChat|null);

        /** GameAction cPlayerDeath */
        cPlayerDeath?: (NT.IClientPlayerDeath|null);

        /** GameAction sPlayerDeath */
        sPlayerDeath?: (NT.IServerPlayerDeath|null);

        /** GameAction cPlayerNewGamePlus */
        cPlayerNewGamePlus?: (NT.IClientPlayerNewGamePlus|null);

        /** GameAction sPlayerNewGamePlus */
        sPlayerNewGamePlus?: (NT.IServerPlayerNewGamePlus|null);

        /** GameAction cPlayerSecretHourglass */
        cPlayerSecretHourglass?: (NT.IClientPlayerSecretHourglass|null);

        /** GameAction SPlayerSecretHourglass */
        SPlayerSecretHourglass?: (NT.IServerPlayerSecretHourglass|null);

        /** GameAction cCustomModEvent */
        cCustomModEvent?: (NT.IClientCustomModEvent|null);

        /** GameAction sCustomModEvent */
        sCustomModEvent?: (NT.IServerCustomModEvent|null);

        /** GameAction cRespawnPenalty */
        cRespawnPenalty?: (NT.IClientRespawnPenalty|null);

        /** GameAction sRespawnPenalty */
        sRespawnPenalty?: (NT.IServerRespawnPenalty|null);

        /** GameAction cAngerySteve */
        cAngerySteve?: (NT.IClientAngerySteve|null);

        /** GameAction sAngerySteve */
        sAngerySteve?: (NT.IServerAngerySteve|null);

        /** GameAction sPlayerPos */
        sPlayerPos?: (NT.IServerPlayerPos|null);
    }

    /** Represents a GameAction. */
    class GameAction implements IGameAction {

        /**
         * Constructs a new GameAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IGameAction);

        /** GameAction cPlayerMove. */
        public cPlayerMove?: (NT.IClientPlayerMove|null);

        /** GameAction sPlayerMove. */
        public sPlayerMove?: (NT.IServerPlayerMove|null);

        /** GameAction cPlayerUpdate. */
        public cPlayerUpdate?: (NT.IClientPlayerUpdate|null);

        /** GameAction sPlayerUpdate. */
        public sPlayerUpdate?: (NT.IServerPlayerUpdate|null);

        /** GameAction cPlayerUpdateInventory. */
        public cPlayerUpdateInventory?: (NT.IClientPlayerUpdateInventory|null);

        /** GameAction sPlayerUpdateInventory. */
        public sPlayerUpdateInventory?: (NT.IServerPlayerUpdateInventory|null);

        /** GameAction cHostItemBank. */
        public cHostItemBank?: (NT.IClientHostItemBank|null);

        /** GameAction sHostItemBank. */
        public sHostItemBank?: (NT.IServerHostItemBank|null);

        /** GameAction cHostUserTake. */
        public cHostUserTake?: (NT.IClientHostUserTake|null);

        /** GameAction sHostUserTake. */
        public sHostUserTake?: (NT.IServerHostUserTake|null);

        /** GameAction cHostUserTakeGold. */
        public cHostUserTakeGold?: (NT.IClientHostUserTakeGold|null);

        /** GameAction sHostUserTakeGold. */
        public sHostUserTakeGold?: (NT.IServerHostUserTakeGold|null);

        /** GameAction cPlayerAddGold. */
        public cPlayerAddGold?: (NT.IClientPlayerAddGold|null);

        /** GameAction sPlayerAddGold. */
        public sPlayerAddGold?: (NT.IServerPlayerAddGold|null);

        /** GameAction cPlayerTakeGold. */
        public cPlayerTakeGold?: (NT.IClientPlayerTakeGold|null);

        /** GameAction sPlayerTakeGold. */
        public sPlayerTakeGold?: (NT.IServerPlayerTakeGold|null);

        /** GameAction cPlayerAddItem. */
        public cPlayerAddItem?: (NT.IClientPlayerAddItem|null);

        /** GameAction sPlayerAddItem. */
        public sPlayerAddItem?: (NT.IServerPlayerAddItem|null);

        /** GameAction cPlayerTakeItem. */
        public cPlayerTakeItem?: (NT.IClientPlayerTakeItem|null);

        /** GameAction sPlayerTakeItem. */
        public sPlayerTakeItem?: (NT.IServerPlayerTakeItem|null);

        /** GameAction cPlayerPickup. */
        public cPlayerPickup?: (NT.IClientPlayerPickup|null);

        /** GameAction sPlayerPickup. */
        public sPlayerPickup?: (NT.IServerPlayerPickup|null);

        /** GameAction cNemesisAbility. */
        public cNemesisAbility?: (NT.IClientNemesisAbility|null);

        /** GameAction sNemesisAbility. */
        public sNemesisAbility?: (NT.IServerNemesisAbility|null);

        /** GameAction cNemesisPickupItem. */
        public cNemesisPickupItem?: (NT.IClientNemesisPickupItem|null);

        /** GameAction sNemesisPickupItem. */
        public sNemesisPickupItem?: (NT.IServerNemesisPickupItem|null);

        /** GameAction cChat. */
        public cChat?: (NT.IClientChat|null);

        /** GameAction sChat. */
        public sChat?: (NT.IServerChat|null);

        /** GameAction cPlayerDeath. */
        public cPlayerDeath?: (NT.IClientPlayerDeath|null);

        /** GameAction sPlayerDeath. */
        public sPlayerDeath?: (NT.IServerPlayerDeath|null);

        /** GameAction cPlayerNewGamePlus. */
        public cPlayerNewGamePlus?: (NT.IClientPlayerNewGamePlus|null);

        /** GameAction sPlayerNewGamePlus. */
        public sPlayerNewGamePlus?: (NT.IServerPlayerNewGamePlus|null);

        /** GameAction cPlayerSecretHourglass. */
        public cPlayerSecretHourglass?: (NT.IClientPlayerSecretHourglass|null);

        /** GameAction SPlayerSecretHourglass. */
        public SPlayerSecretHourglass?: (NT.IServerPlayerSecretHourglass|null);

        /** GameAction cCustomModEvent. */
        public cCustomModEvent?: (NT.IClientCustomModEvent|null);

        /** GameAction sCustomModEvent. */
        public sCustomModEvent?: (NT.IServerCustomModEvent|null);

        /** GameAction cRespawnPenalty. */
        public cRespawnPenalty?: (NT.IClientRespawnPenalty|null);

        /** GameAction sRespawnPenalty. */
        public sRespawnPenalty?: (NT.IServerRespawnPenalty|null);

        /** GameAction cAngerySteve. */
        public cAngerySteve?: (NT.IClientAngerySteve|null);

        /** GameAction sAngerySteve. */
        public sAngerySteve?: (NT.IServerAngerySteve|null);

        /** GameAction sPlayerPos. */
        public sPlayerPos?: (NT.IServerPlayerPos|null);

        /** GameAction action. */
        public action?: ("cPlayerMove"|"sPlayerMove"|"cPlayerUpdate"|"sPlayerUpdate"|"cPlayerUpdateInventory"|"sPlayerUpdateInventory"|"cHostItemBank"|"sHostItemBank"|"cHostUserTake"|"sHostUserTake"|"cHostUserTakeGold"|"sHostUserTakeGold"|"cPlayerAddGold"|"sPlayerAddGold"|"cPlayerTakeGold"|"sPlayerTakeGold"|"cPlayerAddItem"|"sPlayerAddItem"|"cPlayerTakeItem"|"sPlayerTakeItem"|"cPlayerPickup"|"sPlayerPickup"|"cNemesisAbility"|"sNemesisAbility"|"cNemesisPickupItem"|"sNemesisPickupItem"|"cChat"|"sChat"|"cPlayerDeath"|"sPlayerDeath"|"cPlayerNewGamePlus"|"sPlayerNewGamePlus"|"cPlayerSecretHourglass"|"SPlayerSecretHourglass"|"cCustomModEvent"|"sCustomModEvent"|"cRespawnPenalty"|"sRespawnPenalty"|"cAngerySteve"|"sAngerySteve"|"sPlayerPos");

        /**
         * Creates a new GameAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameAction instance
         */
        public static create(properties?: NT.IGameAction): NT.GameAction;

        /**
         * Encodes the specified GameAction message. Does not implicitly {@link NT.GameAction.verify|verify} messages.
         * @param message GameAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IGameAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.GameAction;

        /**
         * Verifies a GameAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameAction
         */
        public static fromObject(object: { [k: string]: any }): NT.GameAction;

        /**
         * Creates a plain object from a GameAction message. Also converts values to other types if specified.
         * @param message GameAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.GameAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GameAction
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PlayerFrame. */
    interface IPlayerFrame {

        /** PlayerFrame x */
        x?: (number|null);

        /** PlayerFrame y */
        y?: (number|null);

        /** PlayerFrame armR */
        armR?: (number|null);

        /** PlayerFrame armScaleY */
        armScaleY?: (number|null);

        /** PlayerFrame scaleX */
        scaleX?: (number|null);

        /** PlayerFrame anim */
        anim?: (number|null);

        /** PlayerFrame held */
        held?: (number|null);
    }

    /** Represents a PlayerFrame. */
    class PlayerFrame implements IPlayerFrame {

        /**
         * Constructs a new PlayerFrame.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IPlayerFrame);

        /** PlayerFrame x. */
        public x?: (number|null);

        /** PlayerFrame y. */
        public y?: (number|null);

        /** PlayerFrame armR. */
        public armR?: (number|null);

        /** PlayerFrame armScaleY. */
        public armScaleY?: (number|null);

        /** PlayerFrame scaleX. */
        public scaleX?: (number|null);

        /** PlayerFrame anim. */
        public anim?: (number|null);

        /** PlayerFrame held. */
        public held?: (number|null);

        /** PlayerFrame _x. */
        public _x?: "x";

        /** PlayerFrame _y. */
        public _y?: "y";

        /** PlayerFrame _armR. */
        public _armR?: "armR";

        /** PlayerFrame _armScaleY. */
        public _armScaleY?: "armScaleY";

        /** PlayerFrame _scaleX. */
        public _scaleX?: "scaleX";

        /** PlayerFrame _anim. */
        public _anim?: "anim";

        /** PlayerFrame _held. */
        public _held?: "held";

        /**
         * Creates a new PlayerFrame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerFrame instance
         */
        public static create(properties?: NT.IPlayerFrame): NT.PlayerFrame;

        /**
         * Encodes the specified PlayerFrame message. Does not implicitly {@link NT.PlayerFrame.verify|verify} messages.
         * @param message PlayerFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IPlayerFrame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerFrame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.PlayerFrame;

        /**
         * Verifies a PlayerFrame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerFrame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerFrame
         */
        public static fromObject(object: { [k: string]: any }): NT.PlayerFrame;

        /**
         * Creates a plain object from a PlayerFrame message. Also converts values to other types if specified.
         * @param message PlayerFrame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.PlayerFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerFrame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PlayerFrame
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerPlayerPos. */
    interface IServerPlayerPos {

        /** ServerPlayerPos userId */
        userId: string;

        /** ServerPlayerPos x */
        x: number;

        /** ServerPlayerPos y */
        y: number;
    }

    /** Represents a ServerPlayerPos. */
    class ServerPlayerPos implements IServerPlayerPos {

        /**
         * Constructs a new ServerPlayerPos.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerPlayerPos);

        /** ServerPlayerPos userId. */
        public userId: string;

        /** ServerPlayerPos x. */
        public x: number;

        /** ServerPlayerPos y. */
        public y: number;

        /**
         * Creates a new ServerPlayerPos instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerPlayerPos instance
         */
        public static create(properties?: NT.IServerPlayerPos): NT.ServerPlayerPos;

        /**
         * Encodes the specified ServerPlayerPos message. Does not implicitly {@link NT.ServerPlayerPos.verify|verify} messages.
         * @param message ServerPlayerPos message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerPlayerPos, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerPlayerPos message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerPlayerPos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerPlayerPos;

        /**
         * Verifies a ServerPlayerPos message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerPlayerPos message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerPlayerPos
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerPlayerPos;

        /**
         * Creates a plain object from a ServerPlayerPos message. Also converts values to other types if specified.
         * @param message ServerPlayerPos
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerPlayerPos, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerPlayerPos to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerPlayerPos
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientPlayerMove. */
    interface IClientPlayerMove {

        /** ClientPlayerMove frames */
        frames?: (NT.IPlayerFrame[]|null);
    }

    /** Represents a ClientPlayerMove. */
    class ClientPlayerMove implements IClientPlayerMove {

        /**
         * Constructs a new ClientPlayerMove.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientPlayerMove);

        /** ClientPlayerMove frames. */
        public frames: NT.IPlayerFrame[];

        /**
         * Creates a new ClientPlayerMove instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientPlayerMove instance
         */
        public static create(properties?: NT.IClientPlayerMove): NT.ClientPlayerMove;

        /**
         * Encodes the specified ClientPlayerMove message. Does not implicitly {@link NT.ClientPlayerMove.verify|verify} messages.
         * @param message ClientPlayerMove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientPlayerMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientPlayerMove message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientPlayerMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientPlayerMove;

        /**
         * Verifies a ClientPlayerMove message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientPlayerMove message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientPlayerMove
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientPlayerMove;

        /**
         * Creates a plain object from a ClientPlayerMove message. Also converts values to other types if specified.
         * @param message ClientPlayerMove
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientPlayerMove, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientPlayerMove to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientPlayerMove
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerPlayerMove. */
    interface IServerPlayerMove {

        /** ServerPlayerMove userId */
        userId: string;

        /** ServerPlayerMove frames */
        frames?: (NT.IPlayerFrame[]|null);
    }

    /** Represents a ServerPlayerMove. */
    class ServerPlayerMove implements IServerPlayerMove {

        /**
         * Constructs a new ServerPlayerMove.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerPlayerMove);

        /** ServerPlayerMove userId. */
        public userId: string;

        /** ServerPlayerMove frames. */
        public frames: NT.IPlayerFrame[];

        /**
         * Creates a new ServerPlayerMove instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerPlayerMove instance
         */
        public static create(properties?: NT.IServerPlayerMove): NT.ServerPlayerMove;

        /**
         * Encodes the specified ServerPlayerMove message. Does not implicitly {@link NT.ServerPlayerMove.verify|verify} messages.
         * @param message ServerPlayerMove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerPlayerMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerPlayerMove message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerPlayerMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerPlayerMove;

        /**
         * Verifies a ServerPlayerMove message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerPlayerMove message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerPlayerMove
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerPlayerMove;

        /**
         * Creates a plain object from a ServerPlayerMove message. Also converts values to other types if specified.
         * @param message ServerPlayerMove
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerPlayerMove, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerPlayerMove to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerPlayerMove
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientPlayerUpdate. */
    interface IClientPlayerUpdate {

        /** ClientPlayerUpdate curHp */
        curHp?: (number|null);

        /** ClientPlayerUpdate maxHp */
        maxHp?: (number|null);

        /** ClientPlayerUpdate location */
        location?: (string|null);

        /** ClientPlayerUpdate sampo */
        sampo?: (boolean|null);
    }

    /** Represents a ClientPlayerUpdate. */
    class ClientPlayerUpdate implements IClientPlayerUpdate {

        /**
         * Constructs a new ClientPlayerUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientPlayerUpdate);

        /** ClientPlayerUpdate curHp. */
        public curHp?: (number|null);

        /** ClientPlayerUpdate maxHp. */
        public maxHp?: (number|null);

        /** ClientPlayerUpdate location. */
        public location?: (string|null);

        /** ClientPlayerUpdate sampo. */
        public sampo?: (boolean|null);

        /** ClientPlayerUpdate _curHp. */
        public _curHp?: "curHp";

        /** ClientPlayerUpdate _maxHp. */
        public _maxHp?: "maxHp";

        /** ClientPlayerUpdate _location. */
        public _location?: "location";

        /** ClientPlayerUpdate _sampo. */
        public _sampo?: "sampo";

        /**
         * Creates a new ClientPlayerUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientPlayerUpdate instance
         */
        public static create(properties?: NT.IClientPlayerUpdate): NT.ClientPlayerUpdate;

        /**
         * Encodes the specified ClientPlayerUpdate message. Does not implicitly {@link NT.ClientPlayerUpdate.verify|verify} messages.
         * @param message ClientPlayerUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientPlayerUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientPlayerUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientPlayerUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientPlayerUpdate;

        /**
         * Verifies a ClientPlayerUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientPlayerUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientPlayerUpdate
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientPlayerUpdate;

        /**
         * Creates a plain object from a ClientPlayerUpdate message. Also converts values to other types if specified.
         * @param message ClientPlayerUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientPlayerUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientPlayerUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientPlayerUpdate
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerPlayerUpdate. */
    interface IServerPlayerUpdate {

        /** ServerPlayerUpdate userId */
        userId: string;

        /** ServerPlayerUpdate curHp */
        curHp?: (number|null);

        /** ServerPlayerUpdate maxHp */
        maxHp?: (number|null);

        /** ServerPlayerUpdate location */
        location?: (string|null);

        /** ServerPlayerUpdate sampo */
        sampo?: (boolean|null);
    }

    /** Represents a ServerPlayerUpdate. */
    class ServerPlayerUpdate implements IServerPlayerUpdate {

        /**
         * Constructs a new ServerPlayerUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerPlayerUpdate);

        /** ServerPlayerUpdate userId. */
        public userId: string;

        /** ServerPlayerUpdate curHp. */
        public curHp?: (number|null);

        /** ServerPlayerUpdate maxHp. */
        public maxHp?: (number|null);

        /** ServerPlayerUpdate location. */
        public location?: (string|null);

        /** ServerPlayerUpdate sampo. */
        public sampo?: (boolean|null);

        /** ServerPlayerUpdate _curHp. */
        public _curHp?: "curHp";

        /** ServerPlayerUpdate _maxHp. */
        public _maxHp?: "maxHp";

        /** ServerPlayerUpdate _location. */
        public _location?: "location";

        /** ServerPlayerUpdate _sampo. */
        public _sampo?: "sampo";

        /**
         * Creates a new ServerPlayerUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerPlayerUpdate instance
         */
        public static create(properties?: NT.IServerPlayerUpdate): NT.ServerPlayerUpdate;

        /**
         * Encodes the specified ServerPlayerUpdate message. Does not implicitly {@link NT.ServerPlayerUpdate.verify|verify} messages.
         * @param message ServerPlayerUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerPlayerUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerPlayerUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerPlayerUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerPlayerUpdate;

        /**
         * Verifies a ServerPlayerUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerPlayerUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerPlayerUpdate
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerPlayerUpdate;

        /**
         * Creates a plain object from a ServerPlayerUpdate message. Also converts values to other types if specified.
         * @param message ServerPlayerUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerPlayerUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerPlayerUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerPlayerUpdate
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientPlayerUpdateInventory. */
    interface IClientPlayerUpdateInventory {

        /** ClientPlayerUpdateInventory wands */
        wands?: (NT.ClientPlayerUpdateInventory.IInventoryWand[]|null);

        /** ClientPlayerUpdateInventory items */
        items?: (NT.ClientPlayerUpdateInventory.IInventoryItem[]|null);

        /** ClientPlayerUpdateInventory spells */
        spells?: (NT.ClientPlayerUpdateInventory.IInventorySpell[]|null);
    }

    /** Represents a ClientPlayerUpdateInventory. */
    class ClientPlayerUpdateInventory implements IClientPlayerUpdateInventory {

        /**
         * Constructs a new ClientPlayerUpdateInventory.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientPlayerUpdateInventory);

        /** ClientPlayerUpdateInventory wands. */
        public wands: NT.ClientPlayerUpdateInventory.IInventoryWand[];

        /** ClientPlayerUpdateInventory items. */
        public items: NT.ClientPlayerUpdateInventory.IInventoryItem[];

        /** ClientPlayerUpdateInventory spells. */
        public spells: NT.ClientPlayerUpdateInventory.IInventorySpell[];

        /**
         * Creates a new ClientPlayerUpdateInventory instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientPlayerUpdateInventory instance
         */
        public static create(properties?: NT.IClientPlayerUpdateInventory): NT.ClientPlayerUpdateInventory;

        /**
         * Encodes the specified ClientPlayerUpdateInventory message. Does not implicitly {@link NT.ClientPlayerUpdateInventory.verify|verify} messages.
         * @param message ClientPlayerUpdateInventory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientPlayerUpdateInventory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientPlayerUpdateInventory message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientPlayerUpdateInventory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientPlayerUpdateInventory;

        /**
         * Verifies a ClientPlayerUpdateInventory message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientPlayerUpdateInventory message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientPlayerUpdateInventory
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientPlayerUpdateInventory;

        /**
         * Creates a plain object from a ClientPlayerUpdateInventory message. Also converts values to other types if specified.
         * @param message ClientPlayerUpdateInventory
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientPlayerUpdateInventory, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientPlayerUpdateInventory to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientPlayerUpdateInventory
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ClientPlayerUpdateInventory {

        /** Properties of an InventoryWand. */
        interface IInventoryWand {

            /** InventoryWand index */
            index: number;

            /** InventoryWand wand */
            wand: NT.IWand;
        }

        /** Represents an InventoryWand. */
        class InventoryWand implements IInventoryWand {

            /**
             * Constructs a new InventoryWand.
             * @param [properties] Properties to set
             */
            constructor(properties?: NT.ClientPlayerUpdateInventory.IInventoryWand);

            /** InventoryWand index. */
            public index: number;

            /** InventoryWand wand. */
            public wand: NT.IWand;

            /**
             * Creates a new InventoryWand instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InventoryWand instance
             */
            public static create(properties?: NT.ClientPlayerUpdateInventory.IInventoryWand): NT.ClientPlayerUpdateInventory.InventoryWand;

            /**
             * Encodes the specified InventoryWand message. Does not implicitly {@link NT.ClientPlayerUpdateInventory.InventoryWand.verify|verify} messages.
             * @param message InventoryWand message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NT.ClientPlayerUpdateInventory.IInventoryWand, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InventoryWand message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InventoryWand
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientPlayerUpdateInventory.InventoryWand;

            /**
             * Verifies an InventoryWand message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InventoryWand message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InventoryWand
             */
            public static fromObject(object: { [k: string]: any }): NT.ClientPlayerUpdateInventory.InventoryWand;

            /**
             * Creates a plain object from an InventoryWand message. Also converts values to other types if specified.
             * @param message InventoryWand
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: NT.ClientPlayerUpdateInventory.InventoryWand, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InventoryWand to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for InventoryWand
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an InventoryItem. */
        interface IInventoryItem {

            /** InventoryItem index */
            index: number;

            /** InventoryItem item */
            item: NT.IItem;
        }

        /** Represents an InventoryItem. */
        class InventoryItem implements IInventoryItem {

            /**
             * Constructs a new InventoryItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: NT.ClientPlayerUpdateInventory.IInventoryItem);

            /** InventoryItem index. */
            public index: number;

            /** InventoryItem item. */
            public item: NT.IItem;

            /**
             * Creates a new InventoryItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InventoryItem instance
             */
            public static create(properties?: NT.ClientPlayerUpdateInventory.IInventoryItem): NT.ClientPlayerUpdateInventory.InventoryItem;

            /**
             * Encodes the specified InventoryItem message. Does not implicitly {@link NT.ClientPlayerUpdateInventory.InventoryItem.verify|verify} messages.
             * @param message InventoryItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NT.ClientPlayerUpdateInventory.IInventoryItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InventoryItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InventoryItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientPlayerUpdateInventory.InventoryItem;

            /**
             * Verifies an InventoryItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InventoryItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InventoryItem
             */
            public static fromObject(object: { [k: string]: any }): NT.ClientPlayerUpdateInventory.InventoryItem;

            /**
             * Creates a plain object from an InventoryItem message. Also converts values to other types if specified.
             * @param message InventoryItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: NT.ClientPlayerUpdateInventory.InventoryItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InventoryItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for InventoryItem
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an InventorySpell. */
        interface IInventorySpell {

            /** InventorySpell index */
            index: number;

            /** InventorySpell spell */
            spell: NT.ISpell;
        }

        /** Represents an InventorySpell. */
        class InventorySpell implements IInventorySpell {

            /**
             * Constructs a new InventorySpell.
             * @param [properties] Properties to set
             */
            constructor(properties?: NT.ClientPlayerUpdateInventory.IInventorySpell);

            /** InventorySpell index. */
            public index: number;

            /** InventorySpell spell. */
            public spell: NT.ISpell;

            /**
             * Creates a new InventorySpell instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InventorySpell instance
             */
            public static create(properties?: NT.ClientPlayerUpdateInventory.IInventorySpell): NT.ClientPlayerUpdateInventory.InventorySpell;

            /**
             * Encodes the specified InventorySpell message. Does not implicitly {@link NT.ClientPlayerUpdateInventory.InventorySpell.verify|verify} messages.
             * @param message InventorySpell message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NT.ClientPlayerUpdateInventory.IInventorySpell, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InventorySpell message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InventorySpell
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientPlayerUpdateInventory.InventorySpell;

            /**
             * Verifies an InventorySpell message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InventorySpell message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InventorySpell
             */
            public static fromObject(object: { [k: string]: any }): NT.ClientPlayerUpdateInventory.InventorySpell;

            /**
             * Creates a plain object from an InventorySpell message. Also converts values to other types if specified.
             * @param message InventorySpell
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: NT.ClientPlayerUpdateInventory.InventorySpell, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InventorySpell to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for InventorySpell
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a ServerPlayerUpdateInventory. */
    interface IServerPlayerUpdateInventory {

        /** ServerPlayerUpdateInventory userId */
        userId: string;

        /** ServerPlayerUpdateInventory wands */
        wands?: (NT.ServerPlayerUpdateInventory.IInventoryWand[]|null);

        /** ServerPlayerUpdateInventory items */
        items?: (NT.ServerPlayerUpdateInventory.IInventoryItem[]|null);

        /** ServerPlayerUpdateInventory spells */
        spells?: (NT.ServerPlayerUpdateInventory.IInventorySpell[]|null);
    }

    /** Represents a ServerPlayerUpdateInventory. */
    class ServerPlayerUpdateInventory implements IServerPlayerUpdateInventory {

        /**
         * Constructs a new ServerPlayerUpdateInventory.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerPlayerUpdateInventory);

        /** ServerPlayerUpdateInventory userId. */
        public userId: string;

        /** ServerPlayerUpdateInventory wands. */
        public wands: NT.ServerPlayerUpdateInventory.IInventoryWand[];

        /** ServerPlayerUpdateInventory items. */
        public items: NT.ServerPlayerUpdateInventory.IInventoryItem[];

        /** ServerPlayerUpdateInventory spells. */
        public spells: NT.ServerPlayerUpdateInventory.IInventorySpell[];

        /**
         * Creates a new ServerPlayerUpdateInventory instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerPlayerUpdateInventory instance
         */
        public static create(properties?: NT.IServerPlayerUpdateInventory): NT.ServerPlayerUpdateInventory;

        /**
         * Encodes the specified ServerPlayerUpdateInventory message. Does not implicitly {@link NT.ServerPlayerUpdateInventory.verify|verify} messages.
         * @param message ServerPlayerUpdateInventory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerPlayerUpdateInventory, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerPlayerUpdateInventory message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerPlayerUpdateInventory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerPlayerUpdateInventory;

        /**
         * Verifies a ServerPlayerUpdateInventory message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerPlayerUpdateInventory message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerPlayerUpdateInventory
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerPlayerUpdateInventory;

        /**
         * Creates a plain object from a ServerPlayerUpdateInventory message. Also converts values to other types if specified.
         * @param message ServerPlayerUpdateInventory
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerPlayerUpdateInventory, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerPlayerUpdateInventory to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerPlayerUpdateInventory
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ServerPlayerUpdateInventory {

        /** Properties of an InventoryWand. */
        interface IInventoryWand {

            /** InventoryWand index */
            index: number;

            /** InventoryWand wand */
            wand: NT.IWand;
        }

        /** Represents an InventoryWand. */
        class InventoryWand implements IInventoryWand {

            /**
             * Constructs a new InventoryWand.
             * @param [properties] Properties to set
             */
            constructor(properties?: NT.ServerPlayerUpdateInventory.IInventoryWand);

            /** InventoryWand index. */
            public index: number;

            /** InventoryWand wand. */
            public wand: NT.IWand;

            /**
             * Creates a new InventoryWand instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InventoryWand instance
             */
            public static create(properties?: NT.ServerPlayerUpdateInventory.IInventoryWand): NT.ServerPlayerUpdateInventory.InventoryWand;

            /**
             * Encodes the specified InventoryWand message. Does not implicitly {@link NT.ServerPlayerUpdateInventory.InventoryWand.verify|verify} messages.
             * @param message InventoryWand message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NT.ServerPlayerUpdateInventory.IInventoryWand, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InventoryWand message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InventoryWand
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerPlayerUpdateInventory.InventoryWand;

            /**
             * Verifies an InventoryWand message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InventoryWand message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InventoryWand
             */
            public static fromObject(object: { [k: string]: any }): NT.ServerPlayerUpdateInventory.InventoryWand;

            /**
             * Creates a plain object from an InventoryWand message. Also converts values to other types if specified.
             * @param message InventoryWand
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: NT.ServerPlayerUpdateInventory.InventoryWand, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InventoryWand to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for InventoryWand
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an InventoryItem. */
        interface IInventoryItem {

            /** InventoryItem index */
            index: number;

            /** InventoryItem item */
            item: NT.IItem;
        }

        /** Represents an InventoryItem. */
        class InventoryItem implements IInventoryItem {

            /**
             * Constructs a new InventoryItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: NT.ServerPlayerUpdateInventory.IInventoryItem);

            /** InventoryItem index. */
            public index: number;

            /** InventoryItem item. */
            public item: NT.IItem;

            /**
             * Creates a new InventoryItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InventoryItem instance
             */
            public static create(properties?: NT.ServerPlayerUpdateInventory.IInventoryItem): NT.ServerPlayerUpdateInventory.InventoryItem;

            /**
             * Encodes the specified InventoryItem message. Does not implicitly {@link NT.ServerPlayerUpdateInventory.InventoryItem.verify|verify} messages.
             * @param message InventoryItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NT.ServerPlayerUpdateInventory.IInventoryItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InventoryItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InventoryItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerPlayerUpdateInventory.InventoryItem;

            /**
             * Verifies an InventoryItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InventoryItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InventoryItem
             */
            public static fromObject(object: { [k: string]: any }): NT.ServerPlayerUpdateInventory.InventoryItem;

            /**
             * Creates a plain object from an InventoryItem message. Also converts values to other types if specified.
             * @param message InventoryItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: NT.ServerPlayerUpdateInventory.InventoryItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InventoryItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for InventoryItem
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an InventorySpell. */
        interface IInventorySpell {

            /** InventorySpell index */
            index: number;

            /** InventorySpell spell */
            spell: NT.ISpell;
        }

        /** Represents an InventorySpell. */
        class InventorySpell implements IInventorySpell {

            /**
             * Constructs a new InventorySpell.
             * @param [properties] Properties to set
             */
            constructor(properties?: NT.ServerPlayerUpdateInventory.IInventorySpell);

            /** InventorySpell index. */
            public index: number;

            /** InventorySpell spell. */
            public spell: NT.ISpell;

            /**
             * Creates a new InventorySpell instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InventorySpell instance
             */
            public static create(properties?: NT.ServerPlayerUpdateInventory.IInventorySpell): NT.ServerPlayerUpdateInventory.InventorySpell;

            /**
             * Encodes the specified InventorySpell message. Does not implicitly {@link NT.ServerPlayerUpdateInventory.InventorySpell.verify|verify} messages.
             * @param message InventorySpell message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NT.ServerPlayerUpdateInventory.IInventorySpell, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InventorySpell message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InventorySpell
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerPlayerUpdateInventory.InventorySpell;

            /**
             * Verifies an InventorySpell message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InventorySpell message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InventorySpell
             */
            public static fromObject(object: { [k: string]: any }): NT.ServerPlayerUpdateInventory.InventorySpell;

            /**
             * Creates a plain object from an InventorySpell message. Also converts values to other types if specified.
             * @param message InventorySpell
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: NT.ServerPlayerUpdateInventory.InventorySpell, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InventorySpell to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for InventorySpell
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a ClientHostItemBank. */
    interface IClientHostItemBank {

        /** ClientHostItemBank wands */
        wands?: (NT.IWand[]|null);

        /** ClientHostItemBank spells */
        spells?: (NT.ISpell[]|null);

        /** ClientHostItemBank items */
        items?: (NT.IItem[]|null);

        /** ClientHostItemBank gold */
        gold?: (number|null);

        /** ClientHostItemBank objects */
        objects?: (NT.IEntityItem[]|null);
    }

    /** Represents a ClientHostItemBank. */
    class ClientHostItemBank implements IClientHostItemBank {

        /**
         * Constructs a new ClientHostItemBank.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientHostItemBank);

        /** ClientHostItemBank wands. */
        public wands: NT.IWand[];

        /** ClientHostItemBank spells. */
        public spells: NT.ISpell[];

        /** ClientHostItemBank items. */
        public items: NT.IItem[];

        /** ClientHostItemBank gold. */
        public gold: number;

        /** ClientHostItemBank objects. */
        public objects: NT.IEntityItem[];

        /**
         * Creates a new ClientHostItemBank instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientHostItemBank instance
         */
        public static create(properties?: NT.IClientHostItemBank): NT.ClientHostItemBank;

        /**
         * Encodes the specified ClientHostItemBank message. Does not implicitly {@link NT.ClientHostItemBank.verify|verify} messages.
         * @param message ClientHostItemBank message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientHostItemBank, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientHostItemBank message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientHostItemBank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientHostItemBank;

        /**
         * Verifies a ClientHostItemBank message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientHostItemBank message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientHostItemBank
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientHostItemBank;

        /**
         * Creates a plain object from a ClientHostItemBank message. Also converts values to other types if specified.
         * @param message ClientHostItemBank
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientHostItemBank, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientHostItemBank to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientHostItemBank
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerHostItemBank. */
    interface IServerHostItemBank {

        /** ServerHostItemBank wands */
        wands?: (NT.IWand[]|null);

        /** ServerHostItemBank spells */
        spells?: (NT.ISpell[]|null);

        /** ServerHostItemBank items */
        items?: (NT.IItem[]|null);

        /** ServerHostItemBank gold */
        gold?: (number|null);

        /** ServerHostItemBank objects */
        objects?: (NT.IEntityItem[]|null);
    }

    /** Represents a ServerHostItemBank. */
    class ServerHostItemBank implements IServerHostItemBank {

        /**
         * Constructs a new ServerHostItemBank.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerHostItemBank);

        /** ServerHostItemBank wands. */
        public wands: NT.IWand[];

        /** ServerHostItemBank spells. */
        public spells: NT.ISpell[];

        /** ServerHostItemBank items. */
        public items: NT.IItem[];

        /** ServerHostItemBank gold. */
        public gold: number;

        /** ServerHostItemBank objects. */
        public objects: NT.IEntityItem[];

        /**
         * Creates a new ServerHostItemBank instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerHostItemBank instance
         */
        public static create(properties?: NT.IServerHostItemBank): NT.ServerHostItemBank;

        /**
         * Encodes the specified ServerHostItemBank message. Does not implicitly {@link NT.ServerHostItemBank.verify|verify} messages.
         * @param message ServerHostItemBank message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerHostItemBank, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerHostItemBank message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerHostItemBank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerHostItemBank;

        /**
         * Verifies a ServerHostItemBank message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerHostItemBank message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerHostItemBank
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerHostItemBank;

        /**
         * Creates a plain object from a ServerHostItemBank message. Also converts values to other types if specified.
         * @param message ServerHostItemBank
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerHostItemBank, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerHostItemBank to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerHostItemBank
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientHostUserTake. */
    interface IClientHostUserTake {

        /** ClientHostUserTake userId */
        userId: string;

        /** ClientHostUserTake id */
        id: string;

        /** ClientHostUserTake success */
        success: boolean;
    }

    /** Represents a ClientHostUserTake. */
    class ClientHostUserTake implements IClientHostUserTake {

        /**
         * Constructs a new ClientHostUserTake.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientHostUserTake);

        /** ClientHostUserTake userId. */
        public userId: string;

        /** ClientHostUserTake id. */
        public id: string;

        /** ClientHostUserTake success. */
        public success: boolean;

        /**
         * Creates a new ClientHostUserTake instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientHostUserTake instance
         */
        public static create(properties?: NT.IClientHostUserTake): NT.ClientHostUserTake;

        /**
         * Encodes the specified ClientHostUserTake message. Does not implicitly {@link NT.ClientHostUserTake.verify|verify} messages.
         * @param message ClientHostUserTake message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientHostUserTake, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientHostUserTake message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientHostUserTake
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientHostUserTake;

        /**
         * Verifies a ClientHostUserTake message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientHostUserTake message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientHostUserTake
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientHostUserTake;

        /**
         * Creates a plain object from a ClientHostUserTake message. Also converts values to other types if specified.
         * @param message ClientHostUserTake
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientHostUserTake, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientHostUserTake to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientHostUserTake
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerHostUserTake. */
    interface IServerHostUserTake {

        /** ServerHostUserTake userId */
        userId: string;

        /** ServerHostUserTake id */
        id: string;

        /** ServerHostUserTake success */
        success: boolean;
    }

    /** Represents a ServerHostUserTake. */
    class ServerHostUserTake implements IServerHostUserTake {

        /**
         * Constructs a new ServerHostUserTake.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerHostUserTake);

        /** ServerHostUserTake userId. */
        public userId: string;

        /** ServerHostUserTake id. */
        public id: string;

        /** ServerHostUserTake success. */
        public success: boolean;

        /**
         * Creates a new ServerHostUserTake instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerHostUserTake instance
         */
        public static create(properties?: NT.IServerHostUserTake): NT.ServerHostUserTake;

        /**
         * Encodes the specified ServerHostUserTake message. Does not implicitly {@link NT.ServerHostUserTake.verify|verify} messages.
         * @param message ServerHostUserTake message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerHostUserTake, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerHostUserTake message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerHostUserTake
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerHostUserTake;

        /**
         * Verifies a ServerHostUserTake message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerHostUserTake message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerHostUserTake
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerHostUserTake;

        /**
         * Creates a plain object from a ServerHostUserTake message. Also converts values to other types if specified.
         * @param message ServerHostUserTake
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerHostUserTake, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerHostUserTake to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerHostUserTake
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientHostUserTakeGold. */
    interface IClientHostUserTakeGold {

        /** ClientHostUserTakeGold userId */
        userId: string;

        /** ClientHostUserTakeGold amount */
        amount: number;

        /** ClientHostUserTakeGold success */
        success: boolean;
    }

    /** Represents a ClientHostUserTakeGold. */
    class ClientHostUserTakeGold implements IClientHostUserTakeGold {

        /**
         * Constructs a new ClientHostUserTakeGold.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientHostUserTakeGold);

        /** ClientHostUserTakeGold userId. */
        public userId: string;

        /** ClientHostUserTakeGold amount. */
        public amount: number;

        /** ClientHostUserTakeGold success. */
        public success: boolean;

        /**
         * Creates a new ClientHostUserTakeGold instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientHostUserTakeGold instance
         */
        public static create(properties?: NT.IClientHostUserTakeGold): NT.ClientHostUserTakeGold;

        /**
         * Encodes the specified ClientHostUserTakeGold message. Does not implicitly {@link NT.ClientHostUserTakeGold.verify|verify} messages.
         * @param message ClientHostUserTakeGold message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientHostUserTakeGold, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientHostUserTakeGold message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientHostUserTakeGold
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientHostUserTakeGold;

        /**
         * Verifies a ClientHostUserTakeGold message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientHostUserTakeGold message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientHostUserTakeGold
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientHostUserTakeGold;

        /**
         * Creates a plain object from a ClientHostUserTakeGold message. Also converts values to other types if specified.
         * @param message ClientHostUserTakeGold
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientHostUserTakeGold, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientHostUserTakeGold to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientHostUserTakeGold
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerHostUserTakeGold. */
    interface IServerHostUserTakeGold {

        /** ServerHostUserTakeGold userId */
        userId: string;

        /** ServerHostUserTakeGold amount */
        amount: number;

        /** ServerHostUserTakeGold success */
        success: boolean;
    }

    /** Represents a ServerHostUserTakeGold. */
    class ServerHostUserTakeGold implements IServerHostUserTakeGold {

        /**
         * Constructs a new ServerHostUserTakeGold.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerHostUserTakeGold);

        /** ServerHostUserTakeGold userId. */
        public userId: string;

        /** ServerHostUserTakeGold amount. */
        public amount: number;

        /** ServerHostUserTakeGold success. */
        public success: boolean;

        /**
         * Creates a new ServerHostUserTakeGold instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerHostUserTakeGold instance
         */
        public static create(properties?: NT.IServerHostUserTakeGold): NT.ServerHostUserTakeGold;

        /**
         * Encodes the specified ServerHostUserTakeGold message. Does not implicitly {@link NT.ServerHostUserTakeGold.verify|verify} messages.
         * @param message ServerHostUserTakeGold message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerHostUserTakeGold, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerHostUserTakeGold message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerHostUserTakeGold
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerHostUserTakeGold;

        /**
         * Verifies a ServerHostUserTakeGold message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerHostUserTakeGold message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerHostUserTakeGold
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerHostUserTakeGold;

        /**
         * Creates a plain object from a ServerHostUserTakeGold message. Also converts values to other types if specified.
         * @param message ServerHostUserTakeGold
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerHostUserTakeGold, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerHostUserTakeGold to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerHostUserTakeGold
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientPlayerAddGold. */
    interface IClientPlayerAddGold {

        /** ClientPlayerAddGold amount */
        amount: number;
    }

    /** Represents a ClientPlayerAddGold. */
    class ClientPlayerAddGold implements IClientPlayerAddGold {

        /**
         * Constructs a new ClientPlayerAddGold.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientPlayerAddGold);

        /** ClientPlayerAddGold amount. */
        public amount: number;

        /**
         * Creates a new ClientPlayerAddGold instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientPlayerAddGold instance
         */
        public static create(properties?: NT.IClientPlayerAddGold): NT.ClientPlayerAddGold;

        /**
         * Encodes the specified ClientPlayerAddGold message. Does not implicitly {@link NT.ClientPlayerAddGold.verify|verify} messages.
         * @param message ClientPlayerAddGold message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientPlayerAddGold, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientPlayerAddGold message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientPlayerAddGold
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientPlayerAddGold;

        /**
         * Verifies a ClientPlayerAddGold message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientPlayerAddGold message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientPlayerAddGold
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientPlayerAddGold;

        /**
         * Creates a plain object from a ClientPlayerAddGold message. Also converts values to other types if specified.
         * @param message ClientPlayerAddGold
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientPlayerAddGold, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientPlayerAddGold to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientPlayerAddGold
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerPlayerAddGold. */
    interface IServerPlayerAddGold {

        /** ServerPlayerAddGold userId */
        userId: string;

        /** ServerPlayerAddGold amount */
        amount: number;
    }

    /** Represents a ServerPlayerAddGold. */
    class ServerPlayerAddGold implements IServerPlayerAddGold {

        /**
         * Constructs a new ServerPlayerAddGold.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerPlayerAddGold);

        /** ServerPlayerAddGold userId. */
        public userId: string;

        /** ServerPlayerAddGold amount. */
        public amount: number;

        /**
         * Creates a new ServerPlayerAddGold instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerPlayerAddGold instance
         */
        public static create(properties?: NT.IServerPlayerAddGold): NT.ServerPlayerAddGold;

        /**
         * Encodes the specified ServerPlayerAddGold message. Does not implicitly {@link NT.ServerPlayerAddGold.verify|verify} messages.
         * @param message ServerPlayerAddGold message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerPlayerAddGold, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerPlayerAddGold message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerPlayerAddGold
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerPlayerAddGold;

        /**
         * Verifies a ServerPlayerAddGold message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerPlayerAddGold message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerPlayerAddGold
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerPlayerAddGold;

        /**
         * Creates a plain object from a ServerPlayerAddGold message. Also converts values to other types if specified.
         * @param message ServerPlayerAddGold
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerPlayerAddGold, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerPlayerAddGold to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerPlayerAddGold
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientPlayerTakeGold. */
    interface IClientPlayerTakeGold {

        /** ClientPlayerTakeGold amount */
        amount: number;
    }

    /** Represents a ClientPlayerTakeGold. */
    class ClientPlayerTakeGold implements IClientPlayerTakeGold {

        /**
         * Constructs a new ClientPlayerTakeGold.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientPlayerTakeGold);

        /** ClientPlayerTakeGold amount. */
        public amount: number;

        /**
         * Creates a new ClientPlayerTakeGold instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientPlayerTakeGold instance
         */
        public static create(properties?: NT.IClientPlayerTakeGold): NT.ClientPlayerTakeGold;

        /**
         * Encodes the specified ClientPlayerTakeGold message. Does not implicitly {@link NT.ClientPlayerTakeGold.verify|verify} messages.
         * @param message ClientPlayerTakeGold message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientPlayerTakeGold, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientPlayerTakeGold message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientPlayerTakeGold
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientPlayerTakeGold;

        /**
         * Verifies a ClientPlayerTakeGold message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientPlayerTakeGold message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientPlayerTakeGold
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientPlayerTakeGold;

        /**
         * Creates a plain object from a ClientPlayerTakeGold message. Also converts values to other types if specified.
         * @param message ClientPlayerTakeGold
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientPlayerTakeGold, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientPlayerTakeGold to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientPlayerTakeGold
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerPlayerTakeGold. */
    interface IServerPlayerTakeGold {

        /** ServerPlayerTakeGold userId */
        userId: string;

        /** ServerPlayerTakeGold amount */
        amount: number;
    }

    /** Represents a ServerPlayerTakeGold. */
    class ServerPlayerTakeGold implements IServerPlayerTakeGold {

        /**
         * Constructs a new ServerPlayerTakeGold.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerPlayerTakeGold);

        /** ServerPlayerTakeGold userId. */
        public userId: string;

        /** ServerPlayerTakeGold amount. */
        public amount: number;

        /**
         * Creates a new ServerPlayerTakeGold instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerPlayerTakeGold instance
         */
        public static create(properties?: NT.IServerPlayerTakeGold): NT.ServerPlayerTakeGold;

        /**
         * Encodes the specified ServerPlayerTakeGold message. Does not implicitly {@link NT.ServerPlayerTakeGold.verify|verify} messages.
         * @param message ServerPlayerTakeGold message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerPlayerTakeGold, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerPlayerTakeGold message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerPlayerTakeGold
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerPlayerTakeGold;

        /**
         * Verifies a ServerPlayerTakeGold message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerPlayerTakeGold message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerPlayerTakeGold
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerPlayerTakeGold;

        /**
         * Creates a plain object from a ServerPlayerTakeGold message. Also converts values to other types if specified.
         * @param message ServerPlayerTakeGold
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerPlayerTakeGold, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerPlayerTakeGold to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerPlayerTakeGold
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientPlayerAddItem. */
    interface IClientPlayerAddItem {

        /** ClientPlayerAddItem spells */
        spells?: (NT.ClientPlayerAddItem.ISpells|null);

        /** ClientPlayerAddItem wands */
        wands?: (NT.ClientPlayerAddItem.IWands|null);

        /** ClientPlayerAddItem flasks */
        flasks?: (NT.ClientPlayerAddItem.IItems|null);

        /** ClientPlayerAddItem objects */
        objects?: (NT.ClientPlayerAddItem.IEntities|null);
    }

    /** Represents a ClientPlayerAddItem. */
    class ClientPlayerAddItem implements IClientPlayerAddItem {

        /**
         * Constructs a new ClientPlayerAddItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientPlayerAddItem);

        /** ClientPlayerAddItem spells. */
        public spells?: (NT.ClientPlayerAddItem.ISpells|null);

        /** ClientPlayerAddItem wands. */
        public wands?: (NT.ClientPlayerAddItem.IWands|null);

        /** ClientPlayerAddItem flasks. */
        public flasks?: (NT.ClientPlayerAddItem.IItems|null);

        /** ClientPlayerAddItem objects. */
        public objects?: (NT.ClientPlayerAddItem.IEntities|null);

        /** ClientPlayerAddItem item. */
        public item?: ("spells"|"wands"|"flasks"|"objects");

        /**
         * Creates a new ClientPlayerAddItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientPlayerAddItem instance
         */
        public static create(properties?: NT.IClientPlayerAddItem): NT.ClientPlayerAddItem;

        /**
         * Encodes the specified ClientPlayerAddItem message. Does not implicitly {@link NT.ClientPlayerAddItem.verify|verify} messages.
         * @param message ClientPlayerAddItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientPlayerAddItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientPlayerAddItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientPlayerAddItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientPlayerAddItem;

        /**
         * Verifies a ClientPlayerAddItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientPlayerAddItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientPlayerAddItem
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientPlayerAddItem;

        /**
         * Creates a plain object from a ClientPlayerAddItem message. Also converts values to other types if specified.
         * @param message ClientPlayerAddItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientPlayerAddItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientPlayerAddItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientPlayerAddItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ClientPlayerAddItem {

        /** Properties of a Spells. */
        interface ISpells {

            /** Spells list */
            list?: (NT.ISpell[]|null);
        }

        /** Represents a Spells. */
        class Spells implements ISpells {

            /**
             * Constructs a new Spells.
             * @param [properties] Properties to set
             */
            constructor(properties?: NT.ClientPlayerAddItem.ISpells);

            /** Spells list. */
            public list: NT.ISpell[];

            /**
             * Creates a new Spells instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Spells instance
             */
            public static create(properties?: NT.ClientPlayerAddItem.ISpells): NT.ClientPlayerAddItem.Spells;

            /**
             * Encodes the specified Spells message. Does not implicitly {@link NT.ClientPlayerAddItem.Spells.verify|verify} messages.
             * @param message Spells message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NT.ClientPlayerAddItem.ISpells, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Spells message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Spells
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientPlayerAddItem.Spells;

            /**
             * Verifies a Spells message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Spells message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Spells
             */
            public static fromObject(object: { [k: string]: any }): NT.ClientPlayerAddItem.Spells;

            /**
             * Creates a plain object from a Spells message. Also converts values to other types if specified.
             * @param message Spells
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: NT.ClientPlayerAddItem.Spells, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Spells to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Spells
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Wands. */
        interface IWands {

            /** Wands list */
            list?: (NT.IWand[]|null);
        }

        /** Represents a Wands. */
        class Wands implements IWands {

            /**
             * Constructs a new Wands.
             * @param [properties] Properties to set
             */
            constructor(properties?: NT.ClientPlayerAddItem.IWands);

            /** Wands list. */
            public list: NT.IWand[];

            /**
             * Creates a new Wands instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Wands instance
             */
            public static create(properties?: NT.ClientPlayerAddItem.IWands): NT.ClientPlayerAddItem.Wands;

            /**
             * Encodes the specified Wands message. Does not implicitly {@link NT.ClientPlayerAddItem.Wands.verify|verify} messages.
             * @param message Wands message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NT.ClientPlayerAddItem.IWands, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Wands message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Wands
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientPlayerAddItem.Wands;

            /**
             * Verifies a Wands message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Wands message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Wands
             */
            public static fromObject(object: { [k: string]: any }): NT.ClientPlayerAddItem.Wands;

            /**
             * Creates a plain object from a Wands message. Also converts values to other types if specified.
             * @param message Wands
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: NT.ClientPlayerAddItem.Wands, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Wands to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Wands
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Items. */
        interface IItems {

            /** Items list */
            list?: (NT.IItem[]|null);
        }

        /** Represents an Items. */
        class Items implements IItems {

            /**
             * Constructs a new Items.
             * @param [properties] Properties to set
             */
            constructor(properties?: NT.ClientPlayerAddItem.IItems);

            /** Items list. */
            public list: NT.IItem[];

            /**
             * Creates a new Items instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Items instance
             */
            public static create(properties?: NT.ClientPlayerAddItem.IItems): NT.ClientPlayerAddItem.Items;

            /**
             * Encodes the specified Items message. Does not implicitly {@link NT.ClientPlayerAddItem.Items.verify|verify} messages.
             * @param message Items message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NT.ClientPlayerAddItem.IItems, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Items message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Items
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientPlayerAddItem.Items;

            /**
             * Verifies an Items message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Items message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Items
             */
            public static fromObject(object: { [k: string]: any }): NT.ClientPlayerAddItem.Items;

            /**
             * Creates a plain object from an Items message. Also converts values to other types if specified.
             * @param message Items
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: NT.ClientPlayerAddItem.Items, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Items to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Items
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Entities. */
        interface IEntities {

            /** Entities list */
            list?: (NT.IEntityItem[]|null);
        }

        /** Represents an Entities. */
        class Entities implements IEntities {

            /**
             * Constructs a new Entities.
             * @param [properties] Properties to set
             */
            constructor(properties?: NT.ClientPlayerAddItem.IEntities);

            /** Entities list. */
            public list: NT.IEntityItem[];

            /**
             * Creates a new Entities instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Entities instance
             */
            public static create(properties?: NT.ClientPlayerAddItem.IEntities): NT.ClientPlayerAddItem.Entities;

            /**
             * Encodes the specified Entities message. Does not implicitly {@link NT.ClientPlayerAddItem.Entities.verify|verify} messages.
             * @param message Entities message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NT.ClientPlayerAddItem.IEntities, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Entities message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Entities
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientPlayerAddItem.Entities;

            /**
             * Verifies an Entities message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Entities message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Entities
             */
            public static fromObject(object: { [k: string]: any }): NT.ClientPlayerAddItem.Entities;

            /**
             * Creates a plain object from an Entities message. Also converts values to other types if specified.
             * @param message Entities
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: NT.ClientPlayerAddItem.Entities, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Entities to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Entities
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a ServerPlayerAddItem. */
    interface IServerPlayerAddItem {

        /** ServerPlayerAddItem userId */
        userId: string;

        /** ServerPlayerAddItem spells */
        spells?: (NT.ServerPlayerAddItem.ISpells|null);

        /** ServerPlayerAddItem wands */
        wands?: (NT.ServerPlayerAddItem.IWands|null);

        /** ServerPlayerAddItem flasks */
        flasks?: (NT.ServerPlayerAddItem.IItems|null);

        /** ServerPlayerAddItem objects */
        objects?: (NT.ServerPlayerAddItem.IEntities|null);
    }

    /** Represents a ServerPlayerAddItem. */
    class ServerPlayerAddItem implements IServerPlayerAddItem {

        /**
         * Constructs a new ServerPlayerAddItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerPlayerAddItem);

        /** ServerPlayerAddItem userId. */
        public userId: string;

        /** ServerPlayerAddItem spells. */
        public spells?: (NT.ServerPlayerAddItem.ISpells|null);

        /** ServerPlayerAddItem wands. */
        public wands?: (NT.ServerPlayerAddItem.IWands|null);

        /** ServerPlayerAddItem flasks. */
        public flasks?: (NT.ServerPlayerAddItem.IItems|null);

        /** ServerPlayerAddItem objects. */
        public objects?: (NT.ServerPlayerAddItem.IEntities|null);

        /** ServerPlayerAddItem item. */
        public item?: ("spells"|"wands"|"flasks"|"objects");

        /**
         * Creates a new ServerPlayerAddItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerPlayerAddItem instance
         */
        public static create(properties?: NT.IServerPlayerAddItem): NT.ServerPlayerAddItem;

        /**
         * Encodes the specified ServerPlayerAddItem message. Does not implicitly {@link NT.ServerPlayerAddItem.verify|verify} messages.
         * @param message ServerPlayerAddItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerPlayerAddItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerPlayerAddItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerPlayerAddItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerPlayerAddItem;

        /**
         * Verifies a ServerPlayerAddItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerPlayerAddItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerPlayerAddItem
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerPlayerAddItem;

        /**
         * Creates a plain object from a ServerPlayerAddItem message. Also converts values to other types if specified.
         * @param message ServerPlayerAddItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerPlayerAddItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerPlayerAddItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerPlayerAddItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ServerPlayerAddItem {

        /** Properties of a Spells. */
        interface ISpells {

            /** Spells list */
            list?: (NT.ISpell[]|null);
        }

        /** Represents a Spells. */
        class Spells implements ISpells {

            /**
             * Constructs a new Spells.
             * @param [properties] Properties to set
             */
            constructor(properties?: NT.ServerPlayerAddItem.ISpells);

            /** Spells list. */
            public list: NT.ISpell[];

            /**
             * Creates a new Spells instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Spells instance
             */
            public static create(properties?: NT.ServerPlayerAddItem.ISpells): NT.ServerPlayerAddItem.Spells;

            /**
             * Encodes the specified Spells message. Does not implicitly {@link NT.ServerPlayerAddItem.Spells.verify|verify} messages.
             * @param message Spells message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NT.ServerPlayerAddItem.ISpells, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Spells message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Spells
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerPlayerAddItem.Spells;

            /**
             * Verifies a Spells message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Spells message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Spells
             */
            public static fromObject(object: { [k: string]: any }): NT.ServerPlayerAddItem.Spells;

            /**
             * Creates a plain object from a Spells message. Also converts values to other types if specified.
             * @param message Spells
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: NT.ServerPlayerAddItem.Spells, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Spells to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Spells
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Wands. */
        interface IWands {

            /** Wands list */
            list?: (NT.IWand[]|null);
        }

        /** Represents a Wands. */
        class Wands implements IWands {

            /**
             * Constructs a new Wands.
             * @param [properties] Properties to set
             */
            constructor(properties?: NT.ServerPlayerAddItem.IWands);

            /** Wands list. */
            public list: NT.IWand[];

            /**
             * Creates a new Wands instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Wands instance
             */
            public static create(properties?: NT.ServerPlayerAddItem.IWands): NT.ServerPlayerAddItem.Wands;

            /**
             * Encodes the specified Wands message. Does not implicitly {@link NT.ServerPlayerAddItem.Wands.verify|verify} messages.
             * @param message Wands message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NT.ServerPlayerAddItem.IWands, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Wands message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Wands
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerPlayerAddItem.Wands;

            /**
             * Verifies a Wands message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Wands message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Wands
             */
            public static fromObject(object: { [k: string]: any }): NT.ServerPlayerAddItem.Wands;

            /**
             * Creates a plain object from a Wands message. Also converts values to other types if specified.
             * @param message Wands
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: NT.ServerPlayerAddItem.Wands, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Wands to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Wands
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Items. */
        interface IItems {

            /** Items list */
            list?: (NT.IItem[]|null);
        }

        /** Represents an Items. */
        class Items implements IItems {

            /**
             * Constructs a new Items.
             * @param [properties] Properties to set
             */
            constructor(properties?: NT.ServerPlayerAddItem.IItems);

            /** Items list. */
            public list: NT.IItem[];

            /**
             * Creates a new Items instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Items instance
             */
            public static create(properties?: NT.ServerPlayerAddItem.IItems): NT.ServerPlayerAddItem.Items;

            /**
             * Encodes the specified Items message. Does not implicitly {@link NT.ServerPlayerAddItem.Items.verify|verify} messages.
             * @param message Items message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NT.ServerPlayerAddItem.IItems, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Items message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Items
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerPlayerAddItem.Items;

            /**
             * Verifies an Items message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Items message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Items
             */
            public static fromObject(object: { [k: string]: any }): NT.ServerPlayerAddItem.Items;

            /**
             * Creates a plain object from an Items message. Also converts values to other types if specified.
             * @param message Items
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: NT.ServerPlayerAddItem.Items, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Items to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Items
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Entities. */
        interface IEntities {

            /** Entities list */
            list?: (NT.IEntityItem[]|null);
        }

        /** Represents an Entities. */
        class Entities implements IEntities {

            /**
             * Constructs a new Entities.
             * @param [properties] Properties to set
             */
            constructor(properties?: NT.ServerPlayerAddItem.IEntities);

            /** Entities list. */
            public list: NT.IEntityItem[];

            /**
             * Creates a new Entities instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Entities instance
             */
            public static create(properties?: NT.ServerPlayerAddItem.IEntities): NT.ServerPlayerAddItem.Entities;

            /**
             * Encodes the specified Entities message. Does not implicitly {@link NT.ServerPlayerAddItem.Entities.verify|verify} messages.
             * @param message Entities message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NT.ServerPlayerAddItem.IEntities, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Entities message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Entities
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerPlayerAddItem.Entities;

            /**
             * Verifies an Entities message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Entities message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Entities
             */
            public static fromObject(object: { [k: string]: any }): NT.ServerPlayerAddItem.Entities;

            /**
             * Creates a plain object from an Entities message. Also converts values to other types if specified.
             * @param message Entities
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: NT.ServerPlayerAddItem.Entities, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Entities to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Entities
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a ClientPlayerTakeItem. */
    interface IClientPlayerTakeItem {

        /** ClientPlayerTakeItem id */
        id: string;
    }

    /** Represents a ClientPlayerTakeItem. */
    class ClientPlayerTakeItem implements IClientPlayerTakeItem {

        /**
         * Constructs a new ClientPlayerTakeItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientPlayerTakeItem);

        /** ClientPlayerTakeItem id. */
        public id: string;

        /**
         * Creates a new ClientPlayerTakeItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientPlayerTakeItem instance
         */
        public static create(properties?: NT.IClientPlayerTakeItem): NT.ClientPlayerTakeItem;

        /**
         * Encodes the specified ClientPlayerTakeItem message. Does not implicitly {@link NT.ClientPlayerTakeItem.verify|verify} messages.
         * @param message ClientPlayerTakeItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientPlayerTakeItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientPlayerTakeItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientPlayerTakeItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientPlayerTakeItem;

        /**
         * Verifies a ClientPlayerTakeItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientPlayerTakeItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientPlayerTakeItem
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientPlayerTakeItem;

        /**
         * Creates a plain object from a ClientPlayerTakeItem message. Also converts values to other types if specified.
         * @param message ClientPlayerTakeItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientPlayerTakeItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientPlayerTakeItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientPlayerTakeItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerPlayerTakeItem. */
    interface IServerPlayerTakeItem {

        /** ServerPlayerTakeItem userId */
        userId: string;

        /** ServerPlayerTakeItem id */
        id: string;
    }

    /** Represents a ServerPlayerTakeItem. */
    class ServerPlayerTakeItem implements IServerPlayerTakeItem {

        /**
         * Constructs a new ServerPlayerTakeItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerPlayerTakeItem);

        /** ServerPlayerTakeItem userId. */
        public userId: string;

        /** ServerPlayerTakeItem id. */
        public id: string;

        /**
         * Creates a new ServerPlayerTakeItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerPlayerTakeItem instance
         */
        public static create(properties?: NT.IServerPlayerTakeItem): NT.ServerPlayerTakeItem;

        /**
         * Encodes the specified ServerPlayerTakeItem message. Does not implicitly {@link NT.ServerPlayerTakeItem.verify|verify} messages.
         * @param message ServerPlayerTakeItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerPlayerTakeItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerPlayerTakeItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerPlayerTakeItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerPlayerTakeItem;

        /**
         * Verifies a ServerPlayerTakeItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerPlayerTakeItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerPlayerTakeItem
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerPlayerTakeItem;

        /**
         * Creates a plain object from a ServerPlayerTakeItem message. Also converts values to other types if specified.
         * @param message ServerPlayerTakeItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerPlayerTakeItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerPlayerTakeItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerPlayerTakeItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientChat. */
    interface IClientChat {

        /** ClientChat message */
        message: string;
    }

    /** Represents a ClientChat. */
    class ClientChat implements IClientChat {

        /**
         * Constructs a new ClientChat.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientChat);

        /** ClientChat message. */
        public message: string;

        /**
         * Creates a new ClientChat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientChat instance
         */
        public static create(properties?: NT.IClientChat): NT.ClientChat;

        /**
         * Encodes the specified ClientChat message. Does not implicitly {@link NT.ClientChat.verify|verify} messages.
         * @param message ClientChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientChat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientChat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientChat;

        /**
         * Verifies a ClientChat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientChat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientChat
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientChat;

        /**
         * Creates a plain object from a ClientChat message. Also converts values to other types if specified.
         * @param message ClientChat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientChat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientChat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientChat
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerChat. */
    interface IServerChat {

        /** ServerChat id */
        id: string;

        /** ServerChat userId */
        userId: string;

        /** ServerChat name */
        name: string;

        /** ServerChat message */
        message: string;
    }

    /** Represents a ServerChat. */
    class ServerChat implements IServerChat {

        /**
         * Constructs a new ServerChat.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerChat);

        /** ServerChat id. */
        public id: string;

        /** ServerChat userId. */
        public userId: string;

        /** ServerChat name. */
        public name: string;

        /** ServerChat message. */
        public message: string;

        /**
         * Creates a new ServerChat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerChat instance
         */
        public static create(properties?: NT.IServerChat): NT.ServerChat;

        /**
         * Encodes the specified ServerChat message. Does not implicitly {@link NT.ServerChat.verify|verify} messages.
         * @param message ServerChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerChat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerChat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerChat;

        /**
         * Verifies a ServerChat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerChat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerChat
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerChat;

        /**
         * Creates a plain object from a ServerChat message. Also converts values to other types if specified.
         * @param message ServerChat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerChat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerChat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerChat
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientPlayerPickup. */
    interface IClientPlayerPickup {

        /** ClientPlayerPickup heart */
        heart?: (NT.ClientPlayerPickup.IHeartPickup|null);

        /** ClientPlayerPickup orb */
        orb?: (NT.ClientPlayerPickup.IOrbPickup|null);
    }

    /** Represents a ClientPlayerPickup. */
    class ClientPlayerPickup implements IClientPlayerPickup {

        /**
         * Constructs a new ClientPlayerPickup.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientPlayerPickup);

        /** ClientPlayerPickup heart. */
        public heart?: (NT.ClientPlayerPickup.IHeartPickup|null);

        /** ClientPlayerPickup orb. */
        public orb?: (NT.ClientPlayerPickup.IOrbPickup|null);

        /** ClientPlayerPickup kind. */
        public kind?: ("heart"|"orb");

        /**
         * Creates a new ClientPlayerPickup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientPlayerPickup instance
         */
        public static create(properties?: NT.IClientPlayerPickup): NT.ClientPlayerPickup;

        /**
         * Encodes the specified ClientPlayerPickup message. Does not implicitly {@link NT.ClientPlayerPickup.verify|verify} messages.
         * @param message ClientPlayerPickup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientPlayerPickup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientPlayerPickup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientPlayerPickup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientPlayerPickup;

        /**
         * Verifies a ClientPlayerPickup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientPlayerPickup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientPlayerPickup
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientPlayerPickup;

        /**
         * Creates a plain object from a ClientPlayerPickup message. Also converts values to other types if specified.
         * @param message ClientPlayerPickup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientPlayerPickup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientPlayerPickup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientPlayerPickup
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ClientPlayerPickup {

        /** Properties of a HeartPickup. */
        interface IHeartPickup {

            /** HeartPickup hpPerk */
            hpPerk: boolean;
        }

        /** Represents a HeartPickup. */
        class HeartPickup implements IHeartPickup {

            /**
             * Constructs a new HeartPickup.
             * @param [properties] Properties to set
             */
            constructor(properties?: NT.ClientPlayerPickup.IHeartPickup);

            /** HeartPickup hpPerk. */
            public hpPerk: boolean;

            /**
             * Creates a new HeartPickup instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HeartPickup instance
             */
            public static create(properties?: NT.ClientPlayerPickup.IHeartPickup): NT.ClientPlayerPickup.HeartPickup;

            /**
             * Encodes the specified HeartPickup message. Does not implicitly {@link NT.ClientPlayerPickup.HeartPickup.verify|verify} messages.
             * @param message HeartPickup message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NT.ClientPlayerPickup.IHeartPickup, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HeartPickup message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HeartPickup
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientPlayerPickup.HeartPickup;

            /**
             * Verifies a HeartPickup message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HeartPickup message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HeartPickup
             */
            public static fromObject(object: { [k: string]: any }): NT.ClientPlayerPickup.HeartPickup;

            /**
             * Creates a plain object from a HeartPickup message. Also converts values to other types if specified.
             * @param message HeartPickup
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: NT.ClientPlayerPickup.HeartPickup, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HeartPickup to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for HeartPickup
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OrbPickup. */
        interface IOrbPickup {

            /** OrbPickup id */
            id: number;
        }

        /** Represents an OrbPickup. */
        class OrbPickup implements IOrbPickup {

            /**
             * Constructs a new OrbPickup.
             * @param [properties] Properties to set
             */
            constructor(properties?: NT.ClientPlayerPickup.IOrbPickup);

            /** OrbPickup id. */
            public id: number;

            /**
             * Creates a new OrbPickup instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OrbPickup instance
             */
            public static create(properties?: NT.ClientPlayerPickup.IOrbPickup): NT.ClientPlayerPickup.OrbPickup;

            /**
             * Encodes the specified OrbPickup message. Does not implicitly {@link NT.ClientPlayerPickup.OrbPickup.verify|verify} messages.
             * @param message OrbPickup message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NT.ClientPlayerPickup.IOrbPickup, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OrbPickup message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OrbPickup
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientPlayerPickup.OrbPickup;

            /**
             * Verifies an OrbPickup message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OrbPickup message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OrbPickup
             */
            public static fromObject(object: { [k: string]: any }): NT.ClientPlayerPickup.OrbPickup;

            /**
             * Creates a plain object from an OrbPickup message. Also converts values to other types if specified.
             * @param message OrbPickup
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: NT.ClientPlayerPickup.OrbPickup, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OrbPickup to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OrbPickup
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a ServerPlayerPickup. */
    interface IServerPlayerPickup {

        /** ServerPlayerPickup userId */
        userId?: (string|null);

        /** ServerPlayerPickup heart */
        heart?: (NT.ServerPlayerPickup.IHeartPickup|null);

        /** ServerPlayerPickup orb */
        orb?: (NT.ServerPlayerPickup.IOrbPickup|null);
    }

    /** Represents a ServerPlayerPickup. */
    class ServerPlayerPickup implements IServerPlayerPickup {

        /**
         * Constructs a new ServerPlayerPickup.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerPlayerPickup);

        /** ServerPlayerPickup userId. */
        public userId: string;

        /** ServerPlayerPickup heart. */
        public heart?: (NT.ServerPlayerPickup.IHeartPickup|null);

        /** ServerPlayerPickup orb. */
        public orb?: (NT.ServerPlayerPickup.IOrbPickup|null);

        /** ServerPlayerPickup kind. */
        public kind?: ("heart"|"orb");

        /**
         * Creates a new ServerPlayerPickup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerPlayerPickup instance
         */
        public static create(properties?: NT.IServerPlayerPickup): NT.ServerPlayerPickup;

        /**
         * Encodes the specified ServerPlayerPickup message. Does not implicitly {@link NT.ServerPlayerPickup.verify|verify} messages.
         * @param message ServerPlayerPickup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerPlayerPickup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerPlayerPickup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerPlayerPickup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerPlayerPickup;

        /**
         * Verifies a ServerPlayerPickup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerPlayerPickup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerPlayerPickup
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerPlayerPickup;

        /**
         * Creates a plain object from a ServerPlayerPickup message. Also converts values to other types if specified.
         * @param message ServerPlayerPickup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerPlayerPickup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerPlayerPickup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerPlayerPickup
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ServerPlayerPickup {

        /** Properties of a HeartPickup. */
        interface IHeartPickup {

            /** HeartPickup hpPerk */
            hpPerk: boolean;
        }

        /** Represents a HeartPickup. */
        class HeartPickup implements IHeartPickup {

            /**
             * Constructs a new HeartPickup.
             * @param [properties] Properties to set
             */
            constructor(properties?: NT.ServerPlayerPickup.IHeartPickup);

            /** HeartPickup hpPerk. */
            public hpPerk: boolean;

            /**
             * Creates a new HeartPickup instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HeartPickup instance
             */
            public static create(properties?: NT.ServerPlayerPickup.IHeartPickup): NT.ServerPlayerPickup.HeartPickup;

            /**
             * Encodes the specified HeartPickup message. Does not implicitly {@link NT.ServerPlayerPickup.HeartPickup.verify|verify} messages.
             * @param message HeartPickup message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NT.ServerPlayerPickup.IHeartPickup, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HeartPickup message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HeartPickup
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerPlayerPickup.HeartPickup;

            /**
             * Verifies a HeartPickup message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HeartPickup message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HeartPickup
             */
            public static fromObject(object: { [k: string]: any }): NT.ServerPlayerPickup.HeartPickup;

            /**
             * Creates a plain object from a HeartPickup message. Also converts values to other types if specified.
             * @param message HeartPickup
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: NT.ServerPlayerPickup.HeartPickup, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HeartPickup to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for HeartPickup
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OrbPickup. */
        interface IOrbPickup {

            /** OrbPickup id */
            id: number;
        }

        /** Represents an OrbPickup. */
        class OrbPickup implements IOrbPickup {

            /**
             * Constructs a new OrbPickup.
             * @param [properties] Properties to set
             */
            constructor(properties?: NT.ServerPlayerPickup.IOrbPickup);

            /** OrbPickup id. */
            public id: number;

            /**
             * Creates a new OrbPickup instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OrbPickup instance
             */
            public static create(properties?: NT.ServerPlayerPickup.IOrbPickup): NT.ServerPlayerPickup.OrbPickup;

            /**
             * Encodes the specified OrbPickup message. Does not implicitly {@link NT.ServerPlayerPickup.OrbPickup.verify|verify} messages.
             * @param message OrbPickup message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NT.ServerPlayerPickup.IOrbPickup, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OrbPickup message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OrbPickup
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerPlayerPickup.OrbPickup;

            /**
             * Verifies an OrbPickup message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OrbPickup message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OrbPickup
             */
            public static fromObject(object: { [k: string]: any }): NT.ServerPlayerPickup.OrbPickup;

            /**
             * Creates a plain object from an OrbPickup message. Also converts values to other types if specified.
             * @param message OrbPickup
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: NT.ServerPlayerPickup.OrbPickup, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OrbPickup to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OrbPickup
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a ClientNemesisPickupItem. */
    interface IClientNemesisPickupItem {

        /** ClientNemesisPickupItem gameId */
        gameId: string;
    }

    /** Represents a ClientNemesisPickupItem. */
    class ClientNemesisPickupItem implements IClientNemesisPickupItem {

        /**
         * Constructs a new ClientNemesisPickupItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientNemesisPickupItem);

        /** ClientNemesisPickupItem gameId. */
        public gameId: string;

        /**
         * Creates a new ClientNemesisPickupItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientNemesisPickupItem instance
         */
        public static create(properties?: NT.IClientNemesisPickupItem): NT.ClientNemesisPickupItem;

        /**
         * Encodes the specified ClientNemesisPickupItem message. Does not implicitly {@link NT.ClientNemesisPickupItem.verify|verify} messages.
         * @param message ClientNemesisPickupItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientNemesisPickupItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientNemesisPickupItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientNemesisPickupItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientNemesisPickupItem;

        /**
         * Verifies a ClientNemesisPickupItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientNemesisPickupItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientNemesisPickupItem
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientNemesisPickupItem;

        /**
         * Creates a plain object from a ClientNemesisPickupItem message. Also converts values to other types if specified.
         * @param message ClientNemesisPickupItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientNemesisPickupItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientNemesisPickupItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientNemesisPickupItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerNemesisPickupItem. */
    interface IServerNemesisPickupItem {

        /** ServerNemesisPickupItem userId */
        userId: string;

        /** ServerNemesisPickupItem gameId */
        gameId: string;
    }

    /** Represents a ServerNemesisPickupItem. */
    class ServerNemesisPickupItem implements IServerNemesisPickupItem {

        /**
         * Constructs a new ServerNemesisPickupItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerNemesisPickupItem);

        /** ServerNemesisPickupItem userId. */
        public userId: string;

        /** ServerNemesisPickupItem gameId. */
        public gameId: string;

        /**
         * Creates a new ServerNemesisPickupItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerNemesisPickupItem instance
         */
        public static create(properties?: NT.IServerNemesisPickupItem): NT.ServerNemesisPickupItem;

        /**
         * Encodes the specified ServerNemesisPickupItem message. Does not implicitly {@link NT.ServerNemesisPickupItem.verify|verify} messages.
         * @param message ServerNemesisPickupItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerNemesisPickupItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerNemesisPickupItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerNemesisPickupItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerNemesisPickupItem;

        /**
         * Verifies a ServerNemesisPickupItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerNemesisPickupItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerNemesisPickupItem
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerNemesisPickupItem;

        /**
         * Creates a plain object from a ServerNemesisPickupItem message. Also converts values to other types if specified.
         * @param message ServerNemesisPickupItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerNemesisPickupItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerNemesisPickupItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerNemesisPickupItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientNemesisAbility. */
    interface IClientNemesisAbility {

        /** ClientNemesisAbility gameId */
        gameId: string;
    }

    /** Represents a ClientNemesisAbility. */
    class ClientNemesisAbility implements IClientNemesisAbility {

        /**
         * Constructs a new ClientNemesisAbility.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientNemesisAbility);

        /** ClientNemesisAbility gameId. */
        public gameId: string;

        /**
         * Creates a new ClientNemesisAbility instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientNemesisAbility instance
         */
        public static create(properties?: NT.IClientNemesisAbility): NT.ClientNemesisAbility;

        /**
         * Encodes the specified ClientNemesisAbility message. Does not implicitly {@link NT.ClientNemesisAbility.verify|verify} messages.
         * @param message ClientNemesisAbility message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientNemesisAbility, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientNemesisAbility message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientNemesisAbility
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientNemesisAbility;

        /**
         * Verifies a ClientNemesisAbility message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientNemesisAbility message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientNemesisAbility
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientNemesisAbility;

        /**
         * Creates a plain object from a ClientNemesisAbility message. Also converts values to other types if specified.
         * @param message ClientNemesisAbility
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientNemesisAbility, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientNemesisAbility to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientNemesisAbility
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerNemesisAbility. */
    interface IServerNemesisAbility {

        /** ServerNemesisAbility userId */
        userId: string;

        /** ServerNemesisAbility gameId */
        gameId: string;
    }

    /** Represents a ServerNemesisAbility. */
    class ServerNemesisAbility implements IServerNemesisAbility {

        /**
         * Constructs a new ServerNemesisAbility.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerNemesisAbility);

        /** ServerNemesisAbility userId. */
        public userId: string;

        /** ServerNemesisAbility gameId. */
        public gameId: string;

        /**
         * Creates a new ServerNemesisAbility instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerNemesisAbility instance
         */
        public static create(properties?: NT.IServerNemesisAbility): NT.ServerNemesisAbility;

        /**
         * Encodes the specified ServerNemesisAbility message. Does not implicitly {@link NT.ServerNemesisAbility.verify|verify} messages.
         * @param message ServerNemesisAbility message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerNemesisAbility, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerNemesisAbility message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerNemesisAbility
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerNemesisAbility;

        /**
         * Verifies a ServerNemesisAbility message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerNemesisAbility message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerNemesisAbility
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerNemesisAbility;

        /**
         * Creates a plain object from a ServerNemesisAbility message. Also converts values to other types if specified.
         * @param message ServerNemesisAbility
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerNemesisAbility, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerNemesisAbility to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerNemesisAbility
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientPlayerDeath. */
    interface IClientPlayerDeath {

        /** ClientPlayerDeath isWin */
        isWin: boolean;

        /** ClientPlayerDeath gameTime */
        gameTime?: (number|null);
    }

    /** Represents a ClientPlayerDeath. */
    class ClientPlayerDeath implements IClientPlayerDeath {

        /**
         * Constructs a new ClientPlayerDeath.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientPlayerDeath);

        /** ClientPlayerDeath isWin. */
        public isWin: boolean;

        /** ClientPlayerDeath gameTime. */
        public gameTime?: (number|null);

        /** ClientPlayerDeath _gameTime. */
        public _gameTime?: "gameTime";

        /**
         * Creates a new ClientPlayerDeath instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientPlayerDeath instance
         */
        public static create(properties?: NT.IClientPlayerDeath): NT.ClientPlayerDeath;

        /**
         * Encodes the specified ClientPlayerDeath message. Does not implicitly {@link NT.ClientPlayerDeath.verify|verify} messages.
         * @param message ClientPlayerDeath message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientPlayerDeath, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientPlayerDeath message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientPlayerDeath
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientPlayerDeath;

        /**
         * Verifies a ClientPlayerDeath message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientPlayerDeath message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientPlayerDeath
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientPlayerDeath;

        /**
         * Creates a plain object from a ClientPlayerDeath message. Also converts values to other types if specified.
         * @param message ClientPlayerDeath
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientPlayerDeath, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientPlayerDeath to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientPlayerDeath
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerPlayerDeath. */
    interface IServerPlayerDeath {

        /** ServerPlayerDeath userId */
        userId: string;

        /** ServerPlayerDeath isWin */
        isWin: boolean;

        /** ServerPlayerDeath gameTime */
        gameTime?: (number|null);
    }

    /** Represents a ServerPlayerDeath. */
    class ServerPlayerDeath implements IServerPlayerDeath {

        /**
         * Constructs a new ServerPlayerDeath.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerPlayerDeath);

        /** ServerPlayerDeath userId. */
        public userId: string;

        /** ServerPlayerDeath isWin. */
        public isWin: boolean;

        /** ServerPlayerDeath gameTime. */
        public gameTime?: (number|null);

        /** ServerPlayerDeath _gameTime. */
        public _gameTime?: "gameTime";

        /**
         * Creates a new ServerPlayerDeath instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerPlayerDeath instance
         */
        public static create(properties?: NT.IServerPlayerDeath): NT.ServerPlayerDeath;

        /**
         * Encodes the specified ServerPlayerDeath message. Does not implicitly {@link NT.ServerPlayerDeath.verify|verify} messages.
         * @param message ServerPlayerDeath message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerPlayerDeath, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerPlayerDeath message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerPlayerDeath
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerPlayerDeath;

        /**
         * Verifies a ServerPlayerDeath message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerPlayerDeath message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerPlayerDeath
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerPlayerDeath;

        /**
         * Creates a plain object from a ServerPlayerDeath message. Also converts values to other types if specified.
         * @param message ServerPlayerDeath
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerPlayerDeath, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerPlayerDeath to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerPlayerDeath
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientPlayerNewGamePlus. */
    interface IClientPlayerNewGamePlus {

        /** ClientPlayerNewGamePlus amount */
        amount: number;
    }

    /** Represents a ClientPlayerNewGamePlus. */
    class ClientPlayerNewGamePlus implements IClientPlayerNewGamePlus {

        /**
         * Constructs a new ClientPlayerNewGamePlus.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientPlayerNewGamePlus);

        /** ClientPlayerNewGamePlus amount. */
        public amount: number;

        /**
         * Creates a new ClientPlayerNewGamePlus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientPlayerNewGamePlus instance
         */
        public static create(properties?: NT.IClientPlayerNewGamePlus): NT.ClientPlayerNewGamePlus;

        /**
         * Encodes the specified ClientPlayerNewGamePlus message. Does not implicitly {@link NT.ClientPlayerNewGamePlus.verify|verify} messages.
         * @param message ClientPlayerNewGamePlus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientPlayerNewGamePlus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientPlayerNewGamePlus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientPlayerNewGamePlus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientPlayerNewGamePlus;

        /**
         * Verifies a ClientPlayerNewGamePlus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientPlayerNewGamePlus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientPlayerNewGamePlus
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientPlayerNewGamePlus;

        /**
         * Creates a plain object from a ClientPlayerNewGamePlus message. Also converts values to other types if specified.
         * @param message ClientPlayerNewGamePlus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientPlayerNewGamePlus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientPlayerNewGamePlus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientPlayerNewGamePlus
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerPlayerNewGamePlus. */
    interface IServerPlayerNewGamePlus {

        /** ServerPlayerNewGamePlus userId */
        userId?: (string|null);

        /** ServerPlayerNewGamePlus amount */
        amount: number;
    }

    /** Represents a ServerPlayerNewGamePlus. */
    class ServerPlayerNewGamePlus implements IServerPlayerNewGamePlus {

        /**
         * Constructs a new ServerPlayerNewGamePlus.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerPlayerNewGamePlus);

        /** ServerPlayerNewGamePlus userId. */
        public userId: string;

        /** ServerPlayerNewGamePlus amount. */
        public amount: number;

        /**
         * Creates a new ServerPlayerNewGamePlus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerPlayerNewGamePlus instance
         */
        public static create(properties?: NT.IServerPlayerNewGamePlus): NT.ServerPlayerNewGamePlus;

        /**
         * Encodes the specified ServerPlayerNewGamePlus message. Does not implicitly {@link NT.ServerPlayerNewGamePlus.verify|verify} messages.
         * @param message ServerPlayerNewGamePlus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerPlayerNewGamePlus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerPlayerNewGamePlus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerPlayerNewGamePlus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerPlayerNewGamePlus;

        /**
         * Verifies a ServerPlayerNewGamePlus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerPlayerNewGamePlus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerPlayerNewGamePlus
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerPlayerNewGamePlus;

        /**
         * Creates a plain object from a ServerPlayerNewGamePlus message. Also converts values to other types if specified.
         * @param message ServerPlayerNewGamePlus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerPlayerNewGamePlus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerPlayerNewGamePlus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerPlayerNewGamePlus
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientPlayerSecretHourglass. */
    interface IClientPlayerSecretHourglass {

        /** ClientPlayerSecretHourglass material */
        material: string;
    }

    /** Represents a ClientPlayerSecretHourglass. */
    class ClientPlayerSecretHourglass implements IClientPlayerSecretHourglass {

        /**
         * Constructs a new ClientPlayerSecretHourglass.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientPlayerSecretHourglass);

        /** ClientPlayerSecretHourglass material. */
        public material: string;

        /**
         * Creates a new ClientPlayerSecretHourglass instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientPlayerSecretHourglass instance
         */
        public static create(properties?: NT.IClientPlayerSecretHourglass): NT.ClientPlayerSecretHourglass;

        /**
         * Encodes the specified ClientPlayerSecretHourglass message. Does not implicitly {@link NT.ClientPlayerSecretHourglass.verify|verify} messages.
         * @param message ClientPlayerSecretHourglass message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientPlayerSecretHourglass, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientPlayerSecretHourglass message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientPlayerSecretHourglass
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientPlayerSecretHourglass;

        /**
         * Verifies a ClientPlayerSecretHourglass message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientPlayerSecretHourglass message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientPlayerSecretHourglass
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientPlayerSecretHourglass;

        /**
         * Creates a plain object from a ClientPlayerSecretHourglass message. Also converts values to other types if specified.
         * @param message ClientPlayerSecretHourglass
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientPlayerSecretHourglass, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientPlayerSecretHourglass to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientPlayerSecretHourglass
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerPlayerSecretHourglass. */
    interface IServerPlayerSecretHourglass {

        /** ServerPlayerSecretHourglass userId */
        userId: string;

        /** ServerPlayerSecretHourglass material */
        material: string;
    }

    /** Represents a ServerPlayerSecretHourglass. */
    class ServerPlayerSecretHourglass implements IServerPlayerSecretHourglass {

        /**
         * Constructs a new ServerPlayerSecretHourglass.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerPlayerSecretHourglass);

        /** ServerPlayerSecretHourglass userId. */
        public userId: string;

        /** ServerPlayerSecretHourglass material. */
        public material: string;

        /**
         * Creates a new ServerPlayerSecretHourglass instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerPlayerSecretHourglass instance
         */
        public static create(properties?: NT.IServerPlayerSecretHourglass): NT.ServerPlayerSecretHourglass;

        /**
         * Encodes the specified ServerPlayerSecretHourglass message. Does not implicitly {@link NT.ServerPlayerSecretHourglass.verify|verify} messages.
         * @param message ServerPlayerSecretHourglass message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerPlayerSecretHourglass, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerPlayerSecretHourglass message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerPlayerSecretHourglass
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerPlayerSecretHourglass;

        /**
         * Verifies a ServerPlayerSecretHourglass message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerPlayerSecretHourglass message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerPlayerSecretHourglass
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerPlayerSecretHourglass;

        /**
         * Creates a plain object from a ServerPlayerSecretHourglass message. Also converts values to other types if specified.
         * @param message ServerPlayerSecretHourglass
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerPlayerSecretHourglass, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerPlayerSecretHourglass to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerPlayerSecretHourglass
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientCustomModEvent. */
    interface IClientCustomModEvent {

        /** ClientCustomModEvent payload */
        payload: string;
    }

    /** Represents a ClientCustomModEvent. */
    class ClientCustomModEvent implements IClientCustomModEvent {

        /**
         * Constructs a new ClientCustomModEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientCustomModEvent);

        /** ClientCustomModEvent payload. */
        public payload: string;

        /**
         * Creates a new ClientCustomModEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientCustomModEvent instance
         */
        public static create(properties?: NT.IClientCustomModEvent): NT.ClientCustomModEvent;

        /**
         * Encodes the specified ClientCustomModEvent message. Does not implicitly {@link NT.ClientCustomModEvent.verify|verify} messages.
         * @param message ClientCustomModEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientCustomModEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientCustomModEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientCustomModEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientCustomModEvent;

        /**
         * Verifies a ClientCustomModEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientCustomModEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientCustomModEvent
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientCustomModEvent;

        /**
         * Creates a plain object from a ClientCustomModEvent message. Also converts values to other types if specified.
         * @param message ClientCustomModEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientCustomModEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientCustomModEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientCustomModEvent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerCustomModEvent. */
    interface IServerCustomModEvent {

        /** ServerCustomModEvent userId */
        userId: string;

        /** ServerCustomModEvent payload */
        payload: string;
    }

    /** Represents a ServerCustomModEvent. */
    class ServerCustomModEvent implements IServerCustomModEvent {

        /**
         * Constructs a new ServerCustomModEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerCustomModEvent);

        /** ServerCustomModEvent userId. */
        public userId: string;

        /** ServerCustomModEvent payload. */
        public payload: string;

        /**
         * Creates a new ServerCustomModEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerCustomModEvent instance
         */
        public static create(properties?: NT.IServerCustomModEvent): NT.ServerCustomModEvent;

        /**
         * Encodes the specified ServerCustomModEvent message. Does not implicitly {@link NT.ServerCustomModEvent.verify|verify} messages.
         * @param message ServerCustomModEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerCustomModEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerCustomModEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerCustomModEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerCustomModEvent;

        /**
         * Verifies a ServerCustomModEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerCustomModEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerCustomModEvent
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerCustomModEvent;

        /**
         * Creates a plain object from a ServerCustomModEvent message. Also converts values to other types if specified.
         * @param message ServerCustomModEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerCustomModEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerCustomModEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerCustomModEvent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientRespawnPenalty. */
    interface IClientRespawnPenalty {

        /** ClientRespawnPenalty deaths */
        deaths: number;
    }

    /** Represents a ClientRespawnPenalty. */
    class ClientRespawnPenalty implements IClientRespawnPenalty {

        /**
         * Constructs a new ClientRespawnPenalty.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientRespawnPenalty);

        /** ClientRespawnPenalty deaths. */
        public deaths: number;

        /**
         * Creates a new ClientRespawnPenalty instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientRespawnPenalty instance
         */
        public static create(properties?: NT.IClientRespawnPenalty): NT.ClientRespawnPenalty;

        /**
         * Encodes the specified ClientRespawnPenalty message. Does not implicitly {@link NT.ClientRespawnPenalty.verify|verify} messages.
         * @param message ClientRespawnPenalty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientRespawnPenalty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientRespawnPenalty message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientRespawnPenalty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientRespawnPenalty;

        /**
         * Verifies a ClientRespawnPenalty message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientRespawnPenalty message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientRespawnPenalty
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientRespawnPenalty;

        /**
         * Creates a plain object from a ClientRespawnPenalty message. Also converts values to other types if specified.
         * @param message ClientRespawnPenalty
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientRespawnPenalty, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientRespawnPenalty to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientRespawnPenalty
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerRespawnPenalty. */
    interface IServerRespawnPenalty {

        /** ServerRespawnPenalty userId */
        userId: string;

        /** ServerRespawnPenalty deaths */
        deaths: number;
    }

    /** Represents a ServerRespawnPenalty. */
    class ServerRespawnPenalty implements IServerRespawnPenalty {

        /**
         * Constructs a new ServerRespawnPenalty.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerRespawnPenalty);

        /** ServerRespawnPenalty userId. */
        public userId: string;

        /** ServerRespawnPenalty deaths. */
        public deaths: number;

        /**
         * Creates a new ServerRespawnPenalty instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerRespawnPenalty instance
         */
        public static create(properties?: NT.IServerRespawnPenalty): NT.ServerRespawnPenalty;

        /**
         * Encodes the specified ServerRespawnPenalty message. Does not implicitly {@link NT.ServerRespawnPenalty.verify|verify} messages.
         * @param message ServerRespawnPenalty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerRespawnPenalty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerRespawnPenalty message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerRespawnPenalty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerRespawnPenalty;

        /**
         * Verifies a ServerRespawnPenalty message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerRespawnPenalty message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerRespawnPenalty
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerRespawnPenalty;

        /**
         * Creates a plain object from a ServerRespawnPenalty message. Also converts values to other types if specified.
         * @param message ServerRespawnPenalty
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerRespawnPenalty, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerRespawnPenalty to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerRespawnPenalty
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientAngerySteve. */
    interface IClientAngerySteve {

        /** ClientAngerySteve idk */
        idk: boolean;
    }

    /** Represents a ClientAngerySteve. */
    class ClientAngerySteve implements IClientAngerySteve {

        /**
         * Constructs a new ClientAngerySteve.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientAngerySteve);

        /** ClientAngerySteve idk. */
        public idk: boolean;

        /**
         * Creates a new ClientAngerySteve instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientAngerySteve instance
         */
        public static create(properties?: NT.IClientAngerySteve): NT.ClientAngerySteve;

        /**
         * Encodes the specified ClientAngerySteve message. Does not implicitly {@link NT.ClientAngerySteve.verify|verify} messages.
         * @param message ClientAngerySteve message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientAngerySteve, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientAngerySteve message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientAngerySteve
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientAngerySteve;

        /**
         * Verifies a ClientAngerySteve message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientAngerySteve message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientAngerySteve
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientAngerySteve;

        /**
         * Creates a plain object from a ClientAngerySteve message. Also converts values to other types if specified.
         * @param message ClientAngerySteve
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientAngerySteve, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientAngerySteve to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientAngerySteve
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerAngerySteve. */
    interface IServerAngerySteve {

        /** ServerAngerySteve userId */
        userId: string;
    }

    /** Represents a ServerAngerySteve. */
    class ServerAngerySteve implements IServerAngerySteve {

        /**
         * Constructs a new ServerAngerySteve.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerAngerySteve);

        /** ServerAngerySteve userId. */
        public userId: string;

        /**
         * Creates a new ServerAngerySteve instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerAngerySteve instance
         */
        public static create(properties?: NT.IServerAngerySteve): NT.ServerAngerySteve;

        /**
         * Encodes the specified ServerAngerySteve message. Does not implicitly {@link NT.ServerAngerySteve.verify|verify} messages.
         * @param message ServerAngerySteve message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerAngerySteve, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerAngerySteve message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerAngerySteve
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerAngerySteve;

        /**
         * Verifies a ServerAngerySteve message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerAngerySteve message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerAngerySteve
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerAngerySteve;

        /**
         * Creates a plain object from a ServerAngerySteve message. Also converts values to other types if specified.
         * @param message ServerAngerySteve
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerAngerySteve, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerAngerySteve to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerAngerySteve
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Wand. */
    interface IWand {

        /** Wand id */
        id: string;

        /** Wand stats */
        stats?: (NT.Wand.IWandStats|null);

        /** Wand alwaysCast */
        alwaysCast?: (NT.ISpell[]|null);

        /** Wand deck */
        deck?: (NT.ISpell[]|null);

        /** Wand sentBy */
        sentBy?: (string|null);

        /** Wand contributedBy */
        contributedBy?: (string|null);
    }

    /** Represents a Wand. */
    class Wand implements IWand {

        /**
         * Constructs a new Wand.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IWand);

        /** Wand id. */
        public id: string;

        /** Wand stats. */
        public stats?: (NT.Wand.IWandStats|null);

        /** Wand alwaysCast. */
        public alwaysCast: NT.ISpell[];

        /** Wand deck. */
        public deck: NT.ISpell[];

        /** Wand sentBy. */
        public sentBy?: (string|null);

        /** Wand contributedBy. */
        public contributedBy?: (string|null);

        /** Wand _sentBy. */
        public _sentBy?: "sentBy";

        /** Wand _contributedBy. */
        public _contributedBy?: "contributedBy";

        /**
         * Creates a new Wand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Wand instance
         */
        public static create(properties?: NT.IWand): NT.Wand;

        /**
         * Encodes the specified Wand message. Does not implicitly {@link NT.Wand.verify|verify} messages.
         * @param message Wand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IWand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Wand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Wand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.Wand;

        /**
         * Verifies a Wand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Wand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Wand
         */
        public static fromObject(object: { [k: string]: any }): NT.Wand;

        /**
         * Creates a plain object from a Wand message. Also converts values to other types if specified.
         * @param message Wand
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.Wand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Wand to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Wand
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Wand {

        /** Properties of a WandStats. */
        interface IWandStats {

            /** WandStats sprite */
            sprite: string;

            /** WandStats named */
            named: boolean;

            /** WandStats uiName */
            uiName: string;

            /** WandStats manaMax */
            manaMax: number;

            /** WandStats manaChargeSpeed */
            manaChargeSpeed: number;

            /** WandStats reloadTime */
            reloadTime: number;

            /** WandStats actionsPerRound */
            actionsPerRound: number;

            /** WandStats deckCapacity */
            deckCapacity: number;

            /** WandStats shuffleDeckWhenEmpty */
            shuffleDeckWhenEmpty: boolean;

            /** WandStats spreadDegrees */
            spreadDegrees: number;

            /** WandStats speedMultiplier */
            speedMultiplier: number;

            /** WandStats fireRateWait */
            fireRateWait: number;

            /** WandStats tipX */
            tipX: number;

            /** WandStats tipY */
            tipY: number;

            /** WandStats gripX */
            gripX: number;

            /** WandStats gripY */
            gripY: number;
        }

        /** Represents a WandStats. */
        class WandStats implements IWandStats {

            /**
             * Constructs a new WandStats.
             * @param [properties] Properties to set
             */
            constructor(properties?: NT.Wand.IWandStats);

            /** WandStats sprite. */
            public sprite: string;

            /** WandStats named. */
            public named: boolean;

            /** WandStats uiName. */
            public uiName: string;

            /** WandStats manaMax. */
            public manaMax: number;

            /** WandStats manaChargeSpeed. */
            public manaChargeSpeed: number;

            /** WandStats reloadTime. */
            public reloadTime: number;

            /** WandStats actionsPerRound. */
            public actionsPerRound: number;

            /** WandStats deckCapacity. */
            public deckCapacity: number;

            /** WandStats shuffleDeckWhenEmpty. */
            public shuffleDeckWhenEmpty: boolean;

            /** WandStats spreadDegrees. */
            public spreadDegrees: number;

            /** WandStats speedMultiplier. */
            public speedMultiplier: number;

            /** WandStats fireRateWait. */
            public fireRateWait: number;

            /** WandStats tipX. */
            public tipX: number;

            /** WandStats tipY. */
            public tipY: number;

            /** WandStats gripX. */
            public gripX: number;

            /** WandStats gripY. */
            public gripY: number;

            /**
             * Creates a new WandStats instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WandStats instance
             */
            public static create(properties?: NT.Wand.IWandStats): NT.Wand.WandStats;

            /**
             * Encodes the specified WandStats message. Does not implicitly {@link NT.Wand.WandStats.verify|verify} messages.
             * @param message WandStats message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NT.Wand.IWandStats, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WandStats message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WandStats
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.Wand.WandStats;

            /**
             * Verifies a WandStats message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WandStats message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WandStats
             */
            public static fromObject(object: { [k: string]: any }): NT.Wand.WandStats;

            /**
             * Creates a plain object from a WandStats message. Also converts values to other types if specified.
             * @param message WandStats
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: NT.Wand.WandStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WandStats to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for WandStats
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a Spell. */
    interface ISpell {

        /** Spell id */
        id: string;

        /** Spell gameId */
        gameId: string;

        /** Spell sentBy */
        sentBy?: (string|null);

        /** Spell contributedBy */
        contributedBy?: (string|null);

        /** Spell usesRemaining */
        usesRemaining: number;
    }

    /** Represents a Spell. */
    class Spell implements ISpell {

        /**
         * Constructs a new Spell.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.ISpell);

        /** Spell id. */
        public id: string;

        /** Spell gameId. */
        public gameId: string;

        /** Spell sentBy. */
        public sentBy?: (string|null);

        /** Spell contributedBy. */
        public contributedBy?: (string|null);

        /** Spell usesRemaining. */
        public usesRemaining: number;

        /** Spell _sentBy. */
        public _sentBy?: "sentBy";

        /** Spell _contributedBy. */
        public _contributedBy?: "contributedBy";

        /**
         * Creates a new Spell instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Spell instance
         */
        public static create(properties?: NT.ISpell): NT.Spell;

        /**
         * Encodes the specified Spell message. Does not implicitly {@link NT.Spell.verify|verify} messages.
         * @param message Spell message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.ISpell, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Spell message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Spell
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.Spell;

        /**
         * Verifies a Spell message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Spell message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Spell
         */
        public static fromObject(object: { [k: string]: any }): NT.Spell;

        /**
         * Creates a plain object from a Spell message. Also converts values to other types if specified.
         * @param message Spell
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.Spell, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Spell to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Spell
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Item. */
    interface IItem {

        /** Item id */
        id: string;

        /** Item color */
        color: NT.Item.IColor;

        /** Item content */
        content?: (NT.Item.IMaterial[]|null);

        /** Item sentBy */
        sentBy?: (string|null);

        /** Item contributedBy */
        contributedBy?: (string|null);

        /** Item isChest */
        isChest: boolean;
    }

    /** Represents an Item. */
    class Item implements IItem {

        /**
         * Constructs a new Item.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IItem);

        /** Item id. */
        public id: string;

        /** Item color. */
        public color: NT.Item.IColor;

        /** Item content. */
        public content: NT.Item.IMaterial[];

        /** Item sentBy. */
        public sentBy?: (string|null);

        /** Item contributedBy. */
        public contributedBy?: (string|null);

        /** Item isChest. */
        public isChest: boolean;

        /** Item _sentBy. */
        public _sentBy?: "sentBy";

        /** Item _contributedBy. */
        public _contributedBy?: "contributedBy";

        /**
         * Creates a new Item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Item instance
         */
        public static create(properties?: NT.IItem): NT.Item;

        /**
         * Encodes the specified Item message. Does not implicitly {@link NT.Item.verify|verify} messages.
         * @param message Item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.Item;

        /**
         * Verifies an Item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Item
         */
        public static fromObject(object: { [k: string]: any }): NT.Item;

        /**
         * Creates a plain object from an Item message. Also converts values to other types if specified.
         * @param message Item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.Item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Item
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Item {

        /** Properties of a Color. */
        interface IColor {

            /** Color r */
            r: number;

            /** Color g */
            g: number;

            /** Color b */
            b: number;
        }

        /** Represents a Color. */
        class Color implements IColor {

            /**
             * Constructs a new Color.
             * @param [properties] Properties to set
             */
            constructor(properties?: NT.Item.IColor);

            /** Color r. */
            public r: number;

            /** Color g. */
            public g: number;

            /** Color b. */
            public b: number;

            /**
             * Creates a new Color instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Color instance
             */
            public static create(properties?: NT.Item.IColor): NT.Item.Color;

            /**
             * Encodes the specified Color message. Does not implicitly {@link NT.Item.Color.verify|verify} messages.
             * @param message Color message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NT.Item.IColor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Color message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Color
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.Item.Color;

            /**
             * Verifies a Color message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Color message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Color
             */
            public static fromObject(object: { [k: string]: any }): NT.Item.Color;

            /**
             * Creates a plain object from a Color message. Also converts values to other types if specified.
             * @param message Color
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: NT.Item.Color, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Color to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Color
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Material. */
        interface IMaterial {

            /** Material id */
            id: number;

            /** Material amount */
            amount: number;
        }

        /** Represents a Material. */
        class Material implements IMaterial {

            /**
             * Constructs a new Material.
             * @param [properties] Properties to set
             */
            constructor(properties?: NT.Item.IMaterial);

            /** Material id. */
            public id: number;

            /** Material amount. */
            public amount: number;

            /**
             * Creates a new Material instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Material instance
             */
            public static create(properties?: NT.Item.IMaterial): NT.Item.Material;

            /**
             * Encodes the specified Material message. Does not implicitly {@link NT.Item.Material.verify|verify} messages.
             * @param message Material message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NT.Item.IMaterial, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Material message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Material
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.Item.Material;

            /**
             * Verifies a Material message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Material message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Material
             */
            public static fromObject(object: { [k: string]: any }): NT.Item.Material;

            /**
             * Creates a plain object from a Material message. Also converts values to other types if specified.
             * @param message Material
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: NT.Item.Material, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Material to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Material
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of an EntityItem. */
    interface IEntityItem {

        /** EntityItem id */
        id: string;

        /** EntityItem path */
        path: string;

        /** EntityItem sprite */
        sprite: string;

        /** EntityItem sentBy */
        sentBy?: (string|null);
    }

    /** Represents an EntityItem. */
    class EntityItem implements IEntityItem {

        /**
         * Constructs a new EntityItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IEntityItem);

        /** EntityItem id. */
        public id: string;

        /** EntityItem path. */
        public path: string;

        /** EntityItem sprite. */
        public sprite: string;

        /** EntityItem sentBy. */
        public sentBy?: (string|null);

        /** EntityItem _sentBy. */
        public _sentBy?: "sentBy";

        /**
         * Creates a new EntityItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EntityItem instance
         */
        public static create(properties?: NT.IEntityItem): NT.EntityItem;

        /**
         * Encodes the specified EntityItem message. Does not implicitly {@link NT.EntityItem.verify|verify} messages.
         * @param message EntityItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IEntityItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EntityItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EntityItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.EntityItem;

        /**
         * Verifies an EntityItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EntityItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EntityItem
         */
        public static fromObject(object: { [k: string]: any }): NT.EntityItem;

        /**
         * Creates a plain object from an EntityItem message. Also converts values to other types if specified.
         * @param message EntityItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.EntityItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EntityItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EntityItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LobbyAction. */
    interface ILobbyAction {

        /** LobbyAction cRoomCreate */
        cRoomCreate?: (NT.IClientRoomCreate|null);

        /** LobbyAction sRoomCreated */
        sRoomCreated?: (NT.IServerRoomCreated|null);

        /** LobbyAction sRoomCreateFailed */
        sRoomCreateFailed?: (NT.IServerRoomCreateFailed|null);

        /** LobbyAction cRoomUpdate */
        cRoomUpdate?: (NT.IClientRoomUpdate|null);

        /** LobbyAction sRoomUpdated */
        sRoomUpdated?: (NT.IServerRoomUpdated|null);

        /** LobbyAction sRoomUpdateFailed */
        sRoomUpdateFailed?: (NT.IServerRoomUpdateFailed|null);

        /** LobbyAction cRoomFlagsUpdate */
        cRoomFlagsUpdate?: (NT.IClientRoomFlagsUpdate|null);

        /** LobbyAction sRoomFlagsUpdated */
        sRoomFlagsUpdated?: (NT.IServerRoomFlagsUpdated|null);

        /** LobbyAction sRoomFlagsUpdateFailed */
        sRoomFlagsUpdateFailed?: (NT.IServerRoomFlagsUpdateFailed|null);

        /** LobbyAction cRoomDelete */
        cRoomDelete?: (NT.IClientRoomDelete|null);

        /** LobbyAction sRoomDeleted */
        sRoomDeleted?: (NT.IServerRoomDeleted|null);

        /** LobbyAction cJoinRoom */
        cJoinRoom?: (NT.IClientJoinRoom|null);

        /** LobbyAction sJoinRoomSuccess */
        sJoinRoomSuccess?: (NT.IServerJoinRoomSuccess|null);

        /** LobbyAction sJoinRoomFailed */
        sJoinRoomFailed?: (NT.IServerJoinRoomFailed|null);

        /** LobbyAction sUserJoinedRoom */
        sUserJoinedRoom?: (NT.IServerUserJoinedRoom|null);

        /** LobbyAction cLeaveRoom */
        cLeaveRoom?: (NT.IClientLeaveRoom|null);

        /** LobbyAction sUserLeftRoom */
        sUserLeftRoom?: (NT.IServerUserLeftRoom|null);

        /** LobbyAction cKickUser */
        cKickUser?: (NT.IClientKickUser|null);

        /** LobbyAction sUserKicked */
        sUserKicked?: (NT.IServerUserKicked|null);

        /** LobbyAction cBanUser */
        cBanUser?: (NT.IClientBanUser|null);

        /** LobbyAction sUserBanned */
        sUserBanned?: (NT.IServerUserBanned|null);

        /** LobbyAction cReadyState */
        cReadyState?: (NT.IClientReadyState|null);

        /** LobbyAction sUserReadyState */
        sUserReadyState?: (NT.IServerUserReadyState|null);

        /** LobbyAction cStartRun */
        cStartRun?: (NT.IClientStartRun|null);

        /** LobbyAction sHostStart */
        sHostStart?: (NT.IServerHostStart|null);

        /** LobbyAction cRequestRoomList */
        cRequestRoomList?: (NT.IClientRequestRoomList|null);

        /** LobbyAction sRoomList */
        sRoomList?: (NT.IServerRoomList|null);

        /** LobbyAction sDisconnected */
        sDisconnected?: (NT.IServerDisconnected|null);

        /** LobbyAction sRoomAddToList */
        sRoomAddToList?: (NT.IServerRoomAddToList|null);

        /** LobbyAction cRunOver */
        cRunOver?: (NT.IClientRunOver|null);
    }

    /** Represents a LobbyAction. */
    class LobbyAction implements ILobbyAction {

        /**
         * Constructs a new LobbyAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.ILobbyAction);

        /** LobbyAction cRoomCreate. */
        public cRoomCreate?: (NT.IClientRoomCreate|null);

        /** LobbyAction sRoomCreated. */
        public sRoomCreated?: (NT.IServerRoomCreated|null);

        /** LobbyAction sRoomCreateFailed. */
        public sRoomCreateFailed?: (NT.IServerRoomCreateFailed|null);

        /** LobbyAction cRoomUpdate. */
        public cRoomUpdate?: (NT.IClientRoomUpdate|null);

        /** LobbyAction sRoomUpdated. */
        public sRoomUpdated?: (NT.IServerRoomUpdated|null);

        /** LobbyAction sRoomUpdateFailed. */
        public sRoomUpdateFailed?: (NT.IServerRoomUpdateFailed|null);

        /** LobbyAction cRoomFlagsUpdate. */
        public cRoomFlagsUpdate?: (NT.IClientRoomFlagsUpdate|null);

        /** LobbyAction sRoomFlagsUpdated. */
        public sRoomFlagsUpdated?: (NT.IServerRoomFlagsUpdated|null);

        /** LobbyAction sRoomFlagsUpdateFailed. */
        public sRoomFlagsUpdateFailed?: (NT.IServerRoomFlagsUpdateFailed|null);

        /** LobbyAction cRoomDelete. */
        public cRoomDelete?: (NT.IClientRoomDelete|null);

        /** LobbyAction sRoomDeleted. */
        public sRoomDeleted?: (NT.IServerRoomDeleted|null);

        /** LobbyAction cJoinRoom. */
        public cJoinRoom?: (NT.IClientJoinRoom|null);

        /** LobbyAction sJoinRoomSuccess. */
        public sJoinRoomSuccess?: (NT.IServerJoinRoomSuccess|null);

        /** LobbyAction sJoinRoomFailed. */
        public sJoinRoomFailed?: (NT.IServerJoinRoomFailed|null);

        /** LobbyAction sUserJoinedRoom. */
        public sUserJoinedRoom?: (NT.IServerUserJoinedRoom|null);

        /** LobbyAction cLeaveRoom. */
        public cLeaveRoom?: (NT.IClientLeaveRoom|null);

        /** LobbyAction sUserLeftRoom. */
        public sUserLeftRoom?: (NT.IServerUserLeftRoom|null);

        /** LobbyAction cKickUser. */
        public cKickUser?: (NT.IClientKickUser|null);

        /** LobbyAction sUserKicked. */
        public sUserKicked?: (NT.IServerUserKicked|null);

        /** LobbyAction cBanUser. */
        public cBanUser?: (NT.IClientBanUser|null);

        /** LobbyAction sUserBanned. */
        public sUserBanned?: (NT.IServerUserBanned|null);

        /** LobbyAction cReadyState. */
        public cReadyState?: (NT.IClientReadyState|null);

        /** LobbyAction sUserReadyState. */
        public sUserReadyState?: (NT.IServerUserReadyState|null);

        /** LobbyAction cStartRun. */
        public cStartRun?: (NT.IClientStartRun|null);

        /** LobbyAction sHostStart. */
        public sHostStart?: (NT.IServerHostStart|null);

        /** LobbyAction cRequestRoomList. */
        public cRequestRoomList?: (NT.IClientRequestRoomList|null);

        /** LobbyAction sRoomList. */
        public sRoomList?: (NT.IServerRoomList|null);

        /** LobbyAction sDisconnected. */
        public sDisconnected?: (NT.IServerDisconnected|null);

        /** LobbyAction sRoomAddToList. */
        public sRoomAddToList?: (NT.IServerRoomAddToList|null);

        /** LobbyAction cRunOver. */
        public cRunOver?: (NT.IClientRunOver|null);

        /** LobbyAction action. */
        public action?: ("cRoomCreate"|"sRoomCreated"|"sRoomCreateFailed"|"cRoomUpdate"|"sRoomUpdated"|"sRoomUpdateFailed"|"cRoomFlagsUpdate"|"sRoomFlagsUpdated"|"sRoomFlagsUpdateFailed"|"cRoomDelete"|"sRoomDeleted"|"cJoinRoom"|"sJoinRoomSuccess"|"sJoinRoomFailed"|"sUserJoinedRoom"|"cLeaveRoom"|"sUserLeftRoom"|"cKickUser"|"sUserKicked"|"cBanUser"|"sUserBanned"|"cReadyState"|"sUserReadyState"|"cStartRun"|"sHostStart"|"cRequestRoomList"|"sRoomList"|"sDisconnected"|"sRoomAddToList"|"cRunOver");

        /**
         * Creates a new LobbyAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LobbyAction instance
         */
        public static create(properties?: NT.ILobbyAction): NT.LobbyAction;

        /**
         * Encodes the specified LobbyAction message. Does not implicitly {@link NT.LobbyAction.verify|verify} messages.
         * @param message LobbyAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.ILobbyAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LobbyAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LobbyAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.LobbyAction;

        /**
         * Verifies a LobbyAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LobbyAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LobbyAction
         */
        public static fromObject(object: { [k: string]: any }): NT.LobbyAction;

        /**
         * Creates a plain object from a LobbyAction message. Also converts values to other types if specified.
         * @param message LobbyAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.LobbyAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LobbyAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LobbyAction
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientRunOver. */
    interface IClientRunOver {

        /** ClientRunOver idk */
        idk?: (boolean|null);
    }

    /** Represents a ClientRunOver. */
    class ClientRunOver implements IClientRunOver {

        /**
         * Constructs a new ClientRunOver.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientRunOver);

        /** ClientRunOver idk. */
        public idk?: (boolean|null);

        /** ClientRunOver _idk. */
        public _idk?: "idk";

        /**
         * Creates a new ClientRunOver instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientRunOver instance
         */
        public static create(properties?: NT.IClientRunOver): NT.ClientRunOver;

        /**
         * Encodes the specified ClientRunOver message. Does not implicitly {@link NT.ClientRunOver.verify|verify} messages.
         * @param message ClientRunOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientRunOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientRunOver message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientRunOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientRunOver;

        /**
         * Verifies a ClientRunOver message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientRunOver message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientRunOver
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientRunOver;

        /**
         * Creates a plain object from a ClientRunOver message. Also converts values to other types if specified.
         * @param message ClientRunOver
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientRunOver, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientRunOver to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientRunOver
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerDisconnected. */
    interface IServerDisconnected {

        /** ServerDisconnected reason */
        reason?: (string|null);
    }

    /** Represents a ServerDisconnected. */
    class ServerDisconnected implements IServerDisconnected {

        /**
         * Constructs a new ServerDisconnected.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerDisconnected);

        /** ServerDisconnected reason. */
        public reason: string;

        /**
         * Creates a new ServerDisconnected instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerDisconnected instance
         */
        public static create(properties?: NT.IServerDisconnected): NT.ServerDisconnected;

        /**
         * Encodes the specified ServerDisconnected message. Does not implicitly {@link NT.ServerDisconnected.verify|verify} messages.
         * @param message ServerDisconnected message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerDisconnected, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerDisconnected message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerDisconnected
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerDisconnected;

        /**
         * Verifies a ServerDisconnected message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerDisconnected message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerDisconnected
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerDisconnected;

        /**
         * Creates a plain object from a ServerDisconnected message. Also converts values to other types if specified.
         * @param message ServerDisconnected
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerDisconnected, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerDisconnected to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerDisconnected
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientRoomDelete. */
    interface IClientRoomDelete {

        /** ClientRoomDelete id */
        id: string;
    }

    /** Represents a ClientRoomDelete. */
    class ClientRoomDelete implements IClientRoomDelete {

        /**
         * Constructs a new ClientRoomDelete.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientRoomDelete);

        /** ClientRoomDelete id. */
        public id: string;

        /**
         * Creates a new ClientRoomDelete instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientRoomDelete instance
         */
        public static create(properties?: NT.IClientRoomDelete): NT.ClientRoomDelete;

        /**
         * Encodes the specified ClientRoomDelete message. Does not implicitly {@link NT.ClientRoomDelete.verify|verify} messages.
         * @param message ClientRoomDelete message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientRoomDelete, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientRoomDelete message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientRoomDelete
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientRoomDelete;

        /**
         * Verifies a ClientRoomDelete message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientRoomDelete message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientRoomDelete
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientRoomDelete;

        /**
         * Creates a plain object from a ClientRoomDelete message. Also converts values to other types if specified.
         * @param message ClientRoomDelete
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientRoomDelete, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientRoomDelete to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientRoomDelete
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerRoomDeleted. */
    interface IServerRoomDeleted {

        /** ServerRoomDeleted id */
        id: string;
    }

    /** Represents a ServerRoomDeleted. */
    class ServerRoomDeleted implements IServerRoomDeleted {

        /**
         * Constructs a new ServerRoomDeleted.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerRoomDeleted);

        /** ServerRoomDeleted id. */
        public id: string;

        /**
         * Creates a new ServerRoomDeleted instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerRoomDeleted instance
         */
        public static create(properties?: NT.IServerRoomDeleted): NT.ServerRoomDeleted;

        /**
         * Encodes the specified ServerRoomDeleted message. Does not implicitly {@link NT.ServerRoomDeleted.verify|verify} messages.
         * @param message ServerRoomDeleted message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerRoomDeleted, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerRoomDeleted message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerRoomDeleted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerRoomDeleted;

        /**
         * Verifies a ServerRoomDeleted message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerRoomDeleted message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerRoomDeleted
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerRoomDeleted;

        /**
         * Creates a plain object from a ServerRoomDeleted message. Also converts values to other types if specified.
         * @param message ServerRoomDeleted
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerRoomDeleted, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerRoomDeleted to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerRoomDeleted
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientRoomCreate. */
    interface IClientRoomCreate {

        /** ClientRoomCreate name */
        name: string;

        /** ClientRoomCreate gamemode */
        gamemode: number;

        /** ClientRoomCreate maxUsers */
        maxUsers: number;

        /** ClientRoomCreate password */
        password?: (string|null);
    }

    /** Represents a ClientRoomCreate. */
    class ClientRoomCreate implements IClientRoomCreate {

        /**
         * Constructs a new ClientRoomCreate.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientRoomCreate);

        /** ClientRoomCreate name. */
        public name: string;

        /** ClientRoomCreate gamemode. */
        public gamemode: number;

        /** ClientRoomCreate maxUsers. */
        public maxUsers: number;

        /** ClientRoomCreate password. */
        public password?: (string|null);

        /** ClientRoomCreate _password. */
        public _password?: "password";

        /**
         * Creates a new ClientRoomCreate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientRoomCreate instance
         */
        public static create(properties?: NT.IClientRoomCreate): NT.ClientRoomCreate;

        /**
         * Encodes the specified ClientRoomCreate message. Does not implicitly {@link NT.ClientRoomCreate.verify|verify} messages.
         * @param message ClientRoomCreate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientRoomCreate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientRoomCreate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientRoomCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientRoomCreate;

        /**
         * Verifies a ClientRoomCreate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientRoomCreate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientRoomCreate
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientRoomCreate;

        /**
         * Creates a plain object from a ClientRoomCreate message. Also converts values to other types if specified.
         * @param message ClientRoomCreate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientRoomCreate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientRoomCreate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientRoomCreate
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerRoomCreated. */
    interface IServerRoomCreated {

        /** ServerRoomCreated id */
        id: string;

        /** ServerRoomCreated name */
        name: string;

        /** ServerRoomCreated gamemode */
        gamemode: number;

        /** ServerRoomCreated maxUsers */
        maxUsers: number;

        /** ServerRoomCreated password */
        password?: (string|null);

        /** ServerRoomCreated locked */
        locked: boolean;

        /** ServerRoomCreated users */
        users?: (NT.ServerRoomCreated.IUser[]|null);
    }

    /** Represents a ServerRoomCreated. */
    class ServerRoomCreated implements IServerRoomCreated {

        /**
         * Constructs a new ServerRoomCreated.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerRoomCreated);

        /** ServerRoomCreated id. */
        public id: string;

        /** ServerRoomCreated name. */
        public name: string;

        /** ServerRoomCreated gamemode. */
        public gamemode: number;

        /** ServerRoomCreated maxUsers. */
        public maxUsers: number;

        /** ServerRoomCreated password. */
        public password?: (string|null);

        /** ServerRoomCreated locked. */
        public locked: boolean;

        /** ServerRoomCreated users. */
        public users: NT.ServerRoomCreated.IUser[];

        /** ServerRoomCreated _password. */
        public _password?: "password";

        /**
         * Creates a new ServerRoomCreated instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerRoomCreated instance
         */
        public static create(properties?: NT.IServerRoomCreated): NT.ServerRoomCreated;

        /**
         * Encodes the specified ServerRoomCreated message. Does not implicitly {@link NT.ServerRoomCreated.verify|verify} messages.
         * @param message ServerRoomCreated message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerRoomCreated, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerRoomCreated message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerRoomCreated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerRoomCreated;

        /**
         * Verifies a ServerRoomCreated message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerRoomCreated message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerRoomCreated
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerRoomCreated;

        /**
         * Creates a plain object from a ServerRoomCreated message. Also converts values to other types if specified.
         * @param message ServerRoomCreated
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerRoomCreated, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerRoomCreated to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerRoomCreated
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ServerRoomCreated {

        /** Properties of a User. */
        interface IUser {

            /** User userId */
            userId: string;

            /** User name */
            name: string;

            /** User ready */
            ready: boolean;

            /** User owner */
            owner: boolean;
        }

        /** Represents a User. */
        class User implements IUser {

            /**
             * Constructs a new User.
             * @param [properties] Properties to set
             */
            constructor(properties?: NT.ServerRoomCreated.IUser);

            /** User userId. */
            public userId: string;

            /** User name. */
            public name: string;

            /** User ready. */
            public ready: boolean;

            /** User owner. */
            public owner: boolean;

            /**
             * Creates a new User instance using the specified properties.
             * @param [properties] Properties to set
             * @returns User instance
             */
            public static create(properties?: NT.ServerRoomCreated.IUser): NT.ServerRoomCreated.User;

            /**
             * Encodes the specified User message. Does not implicitly {@link NT.ServerRoomCreated.User.verify|verify} messages.
             * @param message User message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NT.ServerRoomCreated.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a User message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerRoomCreated.User;

            /**
             * Verifies a User message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns User
             */
            public static fromObject(object: { [k: string]: any }): NT.ServerRoomCreated.User;

            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @param message User
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: NT.ServerRoomCreated.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this User to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for User
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a ServerRoomCreateFailed. */
    interface IServerRoomCreateFailed {

        /** ServerRoomCreateFailed reason */
        reason?: (string|null);
    }

    /** Represents a ServerRoomCreateFailed. */
    class ServerRoomCreateFailed implements IServerRoomCreateFailed {

        /**
         * Constructs a new ServerRoomCreateFailed.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerRoomCreateFailed);

        /** ServerRoomCreateFailed reason. */
        public reason: string;

        /**
         * Creates a new ServerRoomCreateFailed instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerRoomCreateFailed instance
         */
        public static create(properties?: NT.IServerRoomCreateFailed): NT.ServerRoomCreateFailed;

        /**
         * Encodes the specified ServerRoomCreateFailed message. Does not implicitly {@link NT.ServerRoomCreateFailed.verify|verify} messages.
         * @param message ServerRoomCreateFailed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerRoomCreateFailed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerRoomCreateFailed message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerRoomCreateFailed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerRoomCreateFailed;

        /**
         * Verifies a ServerRoomCreateFailed message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerRoomCreateFailed message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerRoomCreateFailed
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerRoomCreateFailed;

        /**
         * Creates a plain object from a ServerRoomCreateFailed message. Also converts values to other types if specified.
         * @param message ServerRoomCreateFailed
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerRoomCreateFailed, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerRoomCreateFailed to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerRoomCreateFailed
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientRoomUpdate. */
    interface IClientRoomUpdate {

        /** ClientRoomUpdate name */
        name?: (string|null);

        /** ClientRoomUpdate gamemode */
        gamemode?: (number|null);

        /** ClientRoomUpdate maxUsers */
        maxUsers?: (number|null);

        /** ClientRoomUpdate password */
        password?: (string|null);

        /** ClientRoomUpdate locked */
        locked?: (boolean|null);
    }

    /** Represents a ClientRoomUpdate. */
    class ClientRoomUpdate implements IClientRoomUpdate {

        /**
         * Constructs a new ClientRoomUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientRoomUpdate);

        /** ClientRoomUpdate name. */
        public name?: (string|null);

        /** ClientRoomUpdate gamemode. */
        public gamemode?: (number|null);

        /** ClientRoomUpdate maxUsers. */
        public maxUsers?: (number|null);

        /** ClientRoomUpdate password. */
        public password?: (string|null);

        /** ClientRoomUpdate locked. */
        public locked?: (boolean|null);

        /** ClientRoomUpdate _name. */
        public _name?: "name";

        /** ClientRoomUpdate _gamemode. */
        public _gamemode?: "gamemode";

        /** ClientRoomUpdate _maxUsers. */
        public _maxUsers?: "maxUsers";

        /** ClientRoomUpdate _password. */
        public _password?: "password";

        /** ClientRoomUpdate _locked. */
        public _locked?: "locked";

        /**
         * Creates a new ClientRoomUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientRoomUpdate instance
         */
        public static create(properties?: NT.IClientRoomUpdate): NT.ClientRoomUpdate;

        /**
         * Encodes the specified ClientRoomUpdate message. Does not implicitly {@link NT.ClientRoomUpdate.verify|verify} messages.
         * @param message ClientRoomUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientRoomUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientRoomUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientRoomUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientRoomUpdate;

        /**
         * Verifies a ClientRoomUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientRoomUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientRoomUpdate
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientRoomUpdate;

        /**
         * Creates a plain object from a ClientRoomUpdate message. Also converts values to other types if specified.
         * @param message ClientRoomUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientRoomUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientRoomUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientRoomUpdate
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerRoomUpdated. */
    interface IServerRoomUpdated {

        /** ServerRoomUpdated name */
        name?: (string|null);

        /** ServerRoomUpdated gamemode */
        gamemode?: (number|null);

        /** ServerRoomUpdated maxUsers */
        maxUsers?: (number|null);

        /** ServerRoomUpdated password */
        password?: (string|null);

        /** ServerRoomUpdated locked */
        locked?: (boolean|null);
    }

    /** Represents a ServerRoomUpdated. */
    class ServerRoomUpdated implements IServerRoomUpdated {

        /**
         * Constructs a new ServerRoomUpdated.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerRoomUpdated);

        /** ServerRoomUpdated name. */
        public name?: (string|null);

        /** ServerRoomUpdated gamemode. */
        public gamemode?: (number|null);

        /** ServerRoomUpdated maxUsers. */
        public maxUsers?: (number|null);

        /** ServerRoomUpdated password. */
        public password?: (string|null);

        /** ServerRoomUpdated locked. */
        public locked?: (boolean|null);

        /** ServerRoomUpdated _name. */
        public _name?: "name";

        /** ServerRoomUpdated _gamemode. */
        public _gamemode?: "gamemode";

        /** ServerRoomUpdated _maxUsers. */
        public _maxUsers?: "maxUsers";

        /** ServerRoomUpdated _password. */
        public _password?: "password";

        /** ServerRoomUpdated _locked. */
        public _locked?: "locked";

        /**
         * Creates a new ServerRoomUpdated instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerRoomUpdated instance
         */
        public static create(properties?: NT.IServerRoomUpdated): NT.ServerRoomUpdated;

        /**
         * Encodes the specified ServerRoomUpdated message. Does not implicitly {@link NT.ServerRoomUpdated.verify|verify} messages.
         * @param message ServerRoomUpdated message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerRoomUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerRoomUpdated message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerRoomUpdated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerRoomUpdated;

        /**
         * Verifies a ServerRoomUpdated message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerRoomUpdated message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerRoomUpdated
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerRoomUpdated;

        /**
         * Creates a plain object from a ServerRoomUpdated message. Also converts values to other types if specified.
         * @param message ServerRoomUpdated
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerRoomUpdated, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerRoomUpdated to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerRoomUpdated
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerRoomUpdateFailed. */
    interface IServerRoomUpdateFailed {

        /** ServerRoomUpdateFailed reason */
        reason?: (string|null);
    }

    /** Represents a ServerRoomUpdateFailed. */
    class ServerRoomUpdateFailed implements IServerRoomUpdateFailed {

        /**
         * Constructs a new ServerRoomUpdateFailed.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerRoomUpdateFailed);

        /** ServerRoomUpdateFailed reason. */
        public reason: string;

        /**
         * Creates a new ServerRoomUpdateFailed instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerRoomUpdateFailed instance
         */
        public static create(properties?: NT.IServerRoomUpdateFailed): NT.ServerRoomUpdateFailed;

        /**
         * Encodes the specified ServerRoomUpdateFailed message. Does not implicitly {@link NT.ServerRoomUpdateFailed.verify|verify} messages.
         * @param message ServerRoomUpdateFailed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerRoomUpdateFailed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerRoomUpdateFailed message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerRoomUpdateFailed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerRoomUpdateFailed;

        /**
         * Verifies a ServerRoomUpdateFailed message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerRoomUpdateFailed message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerRoomUpdateFailed
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerRoomUpdateFailed;

        /**
         * Creates a plain object from a ServerRoomUpdateFailed message. Also converts values to other types if specified.
         * @param message ServerRoomUpdateFailed
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerRoomUpdateFailed, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerRoomUpdateFailed to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerRoomUpdateFailed
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientRoomFlagsUpdate. */
    interface IClientRoomFlagsUpdate {

        /** ClientRoomFlagsUpdate flags */
        flags?: (NT.ClientRoomFlagsUpdate.IGameFlag[]|null);
    }

    /** Represents a ClientRoomFlagsUpdate. */
    class ClientRoomFlagsUpdate implements IClientRoomFlagsUpdate {

        /**
         * Constructs a new ClientRoomFlagsUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientRoomFlagsUpdate);

        /** ClientRoomFlagsUpdate flags. */
        public flags: NT.ClientRoomFlagsUpdate.IGameFlag[];

        /**
         * Creates a new ClientRoomFlagsUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientRoomFlagsUpdate instance
         */
        public static create(properties?: NT.IClientRoomFlagsUpdate): NT.ClientRoomFlagsUpdate;

        /**
         * Encodes the specified ClientRoomFlagsUpdate message. Does not implicitly {@link NT.ClientRoomFlagsUpdate.verify|verify} messages.
         * @param message ClientRoomFlagsUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientRoomFlagsUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientRoomFlagsUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientRoomFlagsUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientRoomFlagsUpdate;

        /**
         * Verifies a ClientRoomFlagsUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientRoomFlagsUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientRoomFlagsUpdate
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientRoomFlagsUpdate;

        /**
         * Creates a plain object from a ClientRoomFlagsUpdate message. Also converts values to other types if specified.
         * @param message ClientRoomFlagsUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientRoomFlagsUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientRoomFlagsUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientRoomFlagsUpdate
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ClientRoomFlagsUpdate {

        /** Properties of a GameFlag. */
        interface IGameFlag {

            /** GameFlag flag */
            flag: string;

            /** GameFlag intVal */
            intVal?: (number|null);

            /** GameFlag strVal */
            strVal?: (string|null);

            /** GameFlag floatVal */
            floatVal?: (number|null);

            /** GameFlag boolVal */
            boolVal?: (boolean|null);

            /** GameFlag uIntVal */
            uIntVal?: (number|null);
        }

        /** Represents a GameFlag. */
        class GameFlag implements IGameFlag {

            /**
             * Constructs a new GameFlag.
             * @param [properties] Properties to set
             */
            constructor(properties?: NT.ClientRoomFlagsUpdate.IGameFlag);

            /** GameFlag flag. */
            public flag: string;

            /** GameFlag intVal. */
            public intVal?: (number|null);

            /** GameFlag strVal. */
            public strVal?: (string|null);

            /** GameFlag floatVal. */
            public floatVal?: (number|null);

            /** GameFlag boolVal. */
            public boolVal?: (boolean|null);

            /** GameFlag uIntVal. */
            public uIntVal?: (number|null);

            /** GameFlag _intVal. */
            public _intVal?: "intVal";

            /** GameFlag _strVal. */
            public _strVal?: "strVal";

            /** GameFlag _floatVal. */
            public _floatVal?: "floatVal";

            /** GameFlag _boolVal. */
            public _boolVal?: "boolVal";

            /** GameFlag _uIntVal. */
            public _uIntVal?: "uIntVal";

            /**
             * Creates a new GameFlag instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GameFlag instance
             */
            public static create(properties?: NT.ClientRoomFlagsUpdate.IGameFlag): NT.ClientRoomFlagsUpdate.GameFlag;

            /**
             * Encodes the specified GameFlag message. Does not implicitly {@link NT.ClientRoomFlagsUpdate.GameFlag.verify|verify} messages.
             * @param message GameFlag message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NT.ClientRoomFlagsUpdate.IGameFlag, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GameFlag message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GameFlag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientRoomFlagsUpdate.GameFlag;

            /**
             * Verifies a GameFlag message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GameFlag message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GameFlag
             */
            public static fromObject(object: { [k: string]: any }): NT.ClientRoomFlagsUpdate.GameFlag;

            /**
             * Creates a plain object from a GameFlag message. Also converts values to other types if specified.
             * @param message GameFlag
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: NT.ClientRoomFlagsUpdate.GameFlag, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GameFlag to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GameFlag
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a ServerRoomFlagsUpdated. */
    interface IServerRoomFlagsUpdated {

        /** ServerRoomFlagsUpdated flags */
        flags?: (NT.ServerRoomFlagsUpdated.IGameFlag[]|null);
    }

    /** Represents a ServerRoomFlagsUpdated. */
    class ServerRoomFlagsUpdated implements IServerRoomFlagsUpdated {

        /**
         * Constructs a new ServerRoomFlagsUpdated.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerRoomFlagsUpdated);

        /** ServerRoomFlagsUpdated flags. */
        public flags: NT.ServerRoomFlagsUpdated.IGameFlag[];

        /**
         * Creates a new ServerRoomFlagsUpdated instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerRoomFlagsUpdated instance
         */
        public static create(properties?: NT.IServerRoomFlagsUpdated): NT.ServerRoomFlagsUpdated;

        /**
         * Encodes the specified ServerRoomFlagsUpdated message. Does not implicitly {@link NT.ServerRoomFlagsUpdated.verify|verify} messages.
         * @param message ServerRoomFlagsUpdated message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerRoomFlagsUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerRoomFlagsUpdated message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerRoomFlagsUpdated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerRoomFlagsUpdated;

        /**
         * Verifies a ServerRoomFlagsUpdated message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerRoomFlagsUpdated message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerRoomFlagsUpdated
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerRoomFlagsUpdated;

        /**
         * Creates a plain object from a ServerRoomFlagsUpdated message. Also converts values to other types if specified.
         * @param message ServerRoomFlagsUpdated
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerRoomFlagsUpdated, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerRoomFlagsUpdated to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerRoomFlagsUpdated
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ServerRoomFlagsUpdated {

        /** Properties of a GameFlag. */
        interface IGameFlag {

            /** GameFlag flag */
            flag: string;

            /** GameFlag intVal */
            intVal?: (number|null);

            /** GameFlag strVal */
            strVal?: (string|null);

            /** GameFlag floatVal */
            floatVal?: (number|null);

            /** GameFlag boolVal */
            boolVal?: (boolean|null);

            /** GameFlag uIntVal */
            uIntVal?: (number|null);
        }

        /** Represents a GameFlag. */
        class GameFlag implements IGameFlag {

            /**
             * Constructs a new GameFlag.
             * @param [properties] Properties to set
             */
            constructor(properties?: NT.ServerRoomFlagsUpdated.IGameFlag);

            /** GameFlag flag. */
            public flag: string;

            /** GameFlag intVal. */
            public intVal?: (number|null);

            /** GameFlag strVal. */
            public strVal?: (string|null);

            /** GameFlag floatVal. */
            public floatVal?: (number|null);

            /** GameFlag boolVal. */
            public boolVal?: (boolean|null);

            /** GameFlag uIntVal. */
            public uIntVal?: (number|null);

            /** GameFlag _intVal. */
            public _intVal?: "intVal";

            /** GameFlag _strVal. */
            public _strVal?: "strVal";

            /** GameFlag _floatVal. */
            public _floatVal?: "floatVal";

            /** GameFlag _boolVal. */
            public _boolVal?: "boolVal";

            /** GameFlag _uIntVal. */
            public _uIntVal?: "uIntVal";

            /**
             * Creates a new GameFlag instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GameFlag instance
             */
            public static create(properties?: NT.ServerRoomFlagsUpdated.IGameFlag): NT.ServerRoomFlagsUpdated.GameFlag;

            /**
             * Encodes the specified GameFlag message. Does not implicitly {@link NT.ServerRoomFlagsUpdated.GameFlag.verify|verify} messages.
             * @param message GameFlag message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NT.ServerRoomFlagsUpdated.IGameFlag, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GameFlag message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GameFlag
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerRoomFlagsUpdated.GameFlag;

            /**
             * Verifies a GameFlag message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GameFlag message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GameFlag
             */
            public static fromObject(object: { [k: string]: any }): NT.ServerRoomFlagsUpdated.GameFlag;

            /**
             * Creates a plain object from a GameFlag message. Also converts values to other types if specified.
             * @param message GameFlag
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: NT.ServerRoomFlagsUpdated.GameFlag, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GameFlag to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GameFlag
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a ServerRoomFlagsUpdateFailed. */
    interface IServerRoomFlagsUpdateFailed {

        /** ServerRoomFlagsUpdateFailed reason */
        reason?: (string|null);
    }

    /** Represents a ServerRoomFlagsUpdateFailed. */
    class ServerRoomFlagsUpdateFailed implements IServerRoomFlagsUpdateFailed {

        /**
         * Constructs a new ServerRoomFlagsUpdateFailed.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerRoomFlagsUpdateFailed);

        /** ServerRoomFlagsUpdateFailed reason. */
        public reason: string;

        /**
         * Creates a new ServerRoomFlagsUpdateFailed instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerRoomFlagsUpdateFailed instance
         */
        public static create(properties?: NT.IServerRoomFlagsUpdateFailed): NT.ServerRoomFlagsUpdateFailed;

        /**
         * Encodes the specified ServerRoomFlagsUpdateFailed message. Does not implicitly {@link NT.ServerRoomFlagsUpdateFailed.verify|verify} messages.
         * @param message ServerRoomFlagsUpdateFailed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerRoomFlagsUpdateFailed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerRoomFlagsUpdateFailed message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerRoomFlagsUpdateFailed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerRoomFlagsUpdateFailed;

        /**
         * Verifies a ServerRoomFlagsUpdateFailed message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerRoomFlagsUpdateFailed message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerRoomFlagsUpdateFailed
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerRoomFlagsUpdateFailed;

        /**
         * Creates a plain object from a ServerRoomFlagsUpdateFailed message. Also converts values to other types if specified.
         * @param message ServerRoomFlagsUpdateFailed
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerRoomFlagsUpdateFailed, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerRoomFlagsUpdateFailed to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerRoomFlagsUpdateFailed
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientJoinRoom. */
    interface IClientJoinRoom {

        /** ClientJoinRoom id */
        id: string;

        /** ClientJoinRoom password */
        password?: (string|null);
    }

    /** Represents a ClientJoinRoom. */
    class ClientJoinRoom implements IClientJoinRoom {

        /**
         * Constructs a new ClientJoinRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientJoinRoom);

        /** ClientJoinRoom id. */
        public id: string;

        /** ClientJoinRoom password. */
        public password?: (string|null);

        /** ClientJoinRoom _password. */
        public _password?: "password";

        /**
         * Creates a new ClientJoinRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientJoinRoom instance
         */
        public static create(properties?: NT.IClientJoinRoom): NT.ClientJoinRoom;

        /**
         * Encodes the specified ClientJoinRoom message. Does not implicitly {@link NT.ClientJoinRoom.verify|verify} messages.
         * @param message ClientJoinRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientJoinRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientJoinRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientJoinRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientJoinRoom;

        /**
         * Verifies a ClientJoinRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientJoinRoom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientJoinRoom
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientJoinRoom;

        /**
         * Creates a plain object from a ClientJoinRoom message. Also converts values to other types if specified.
         * @param message ClientJoinRoom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientJoinRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientJoinRoom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientJoinRoom
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerJoinRoomSuccess. */
    interface IServerJoinRoomSuccess {

        /** ServerJoinRoomSuccess id */
        id: string;

        /** ServerJoinRoomSuccess name */
        name: string;

        /** ServerJoinRoomSuccess gamemode */
        gamemode: number;

        /** ServerJoinRoomSuccess maxUsers */
        maxUsers: number;

        /** ServerJoinRoomSuccess password */
        password?: (string|null);

        /** ServerJoinRoomSuccess locked */
        locked: boolean;

        /** ServerJoinRoomSuccess users */
        users?: (NT.ServerJoinRoomSuccess.IUser[]|null);
    }

    /** Represents a ServerJoinRoomSuccess. */
    class ServerJoinRoomSuccess implements IServerJoinRoomSuccess {

        /**
         * Constructs a new ServerJoinRoomSuccess.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerJoinRoomSuccess);

        /** ServerJoinRoomSuccess id. */
        public id: string;

        /** ServerJoinRoomSuccess name. */
        public name: string;

        /** ServerJoinRoomSuccess gamemode. */
        public gamemode: number;

        /** ServerJoinRoomSuccess maxUsers. */
        public maxUsers: number;

        /** ServerJoinRoomSuccess password. */
        public password?: (string|null);

        /** ServerJoinRoomSuccess locked. */
        public locked: boolean;

        /** ServerJoinRoomSuccess users. */
        public users: NT.ServerJoinRoomSuccess.IUser[];

        /** ServerJoinRoomSuccess _password. */
        public _password?: "password";

        /**
         * Creates a new ServerJoinRoomSuccess instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerJoinRoomSuccess instance
         */
        public static create(properties?: NT.IServerJoinRoomSuccess): NT.ServerJoinRoomSuccess;

        /**
         * Encodes the specified ServerJoinRoomSuccess message. Does not implicitly {@link NT.ServerJoinRoomSuccess.verify|verify} messages.
         * @param message ServerJoinRoomSuccess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerJoinRoomSuccess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerJoinRoomSuccess message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerJoinRoomSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerJoinRoomSuccess;

        /**
         * Verifies a ServerJoinRoomSuccess message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerJoinRoomSuccess message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerJoinRoomSuccess
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerJoinRoomSuccess;

        /**
         * Creates a plain object from a ServerJoinRoomSuccess message. Also converts values to other types if specified.
         * @param message ServerJoinRoomSuccess
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerJoinRoomSuccess, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerJoinRoomSuccess to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerJoinRoomSuccess
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ServerJoinRoomSuccess {

        /** Properties of a User. */
        interface IUser {

            /** User userId */
            userId: string;

            /** User name */
            name: string;

            /** User ready */
            ready: boolean;

            /** User owner */
            owner: boolean;
        }

        /** Represents a User. */
        class User implements IUser {

            /**
             * Constructs a new User.
             * @param [properties] Properties to set
             */
            constructor(properties?: NT.ServerJoinRoomSuccess.IUser);

            /** User userId. */
            public userId: string;

            /** User name. */
            public name: string;

            /** User ready. */
            public ready: boolean;

            /** User owner. */
            public owner: boolean;

            /**
             * Creates a new User instance using the specified properties.
             * @param [properties] Properties to set
             * @returns User instance
             */
            public static create(properties?: NT.ServerJoinRoomSuccess.IUser): NT.ServerJoinRoomSuccess.User;

            /**
             * Encodes the specified User message. Does not implicitly {@link NT.ServerJoinRoomSuccess.User.verify|verify} messages.
             * @param message User message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NT.ServerJoinRoomSuccess.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a User message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerJoinRoomSuccess.User;

            /**
             * Verifies a User message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns User
             */
            public static fromObject(object: { [k: string]: any }): NT.ServerJoinRoomSuccess.User;

            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @param message User
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: NT.ServerJoinRoomSuccess.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this User to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for User
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a ServerJoinRoomFailed. */
    interface IServerJoinRoomFailed {

        /** ServerJoinRoomFailed reason */
        reason?: (string|null);
    }

    /** Represents a ServerJoinRoomFailed. */
    class ServerJoinRoomFailed implements IServerJoinRoomFailed {

        /**
         * Constructs a new ServerJoinRoomFailed.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerJoinRoomFailed);

        /** ServerJoinRoomFailed reason. */
        public reason: string;

        /**
         * Creates a new ServerJoinRoomFailed instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerJoinRoomFailed instance
         */
        public static create(properties?: NT.IServerJoinRoomFailed): NT.ServerJoinRoomFailed;

        /**
         * Encodes the specified ServerJoinRoomFailed message. Does not implicitly {@link NT.ServerJoinRoomFailed.verify|verify} messages.
         * @param message ServerJoinRoomFailed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerJoinRoomFailed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerJoinRoomFailed message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerJoinRoomFailed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerJoinRoomFailed;

        /**
         * Verifies a ServerJoinRoomFailed message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerJoinRoomFailed message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerJoinRoomFailed
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerJoinRoomFailed;

        /**
         * Creates a plain object from a ServerJoinRoomFailed message. Also converts values to other types if specified.
         * @param message ServerJoinRoomFailed
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerJoinRoomFailed, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerJoinRoomFailed to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerJoinRoomFailed
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerUserJoinedRoom. */
    interface IServerUserJoinedRoom {

        /** ServerUserJoinedRoom userId */
        userId: string;

        /** ServerUserJoinedRoom name */
        name: string;
    }

    /** Represents a ServerUserJoinedRoom. */
    class ServerUserJoinedRoom implements IServerUserJoinedRoom {

        /**
         * Constructs a new ServerUserJoinedRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerUserJoinedRoom);

        /** ServerUserJoinedRoom userId. */
        public userId: string;

        /** ServerUserJoinedRoom name. */
        public name: string;

        /**
         * Creates a new ServerUserJoinedRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerUserJoinedRoom instance
         */
        public static create(properties?: NT.IServerUserJoinedRoom): NT.ServerUserJoinedRoom;

        /**
         * Encodes the specified ServerUserJoinedRoom message. Does not implicitly {@link NT.ServerUserJoinedRoom.verify|verify} messages.
         * @param message ServerUserJoinedRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerUserJoinedRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerUserJoinedRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerUserJoinedRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerUserJoinedRoom;

        /**
         * Verifies a ServerUserJoinedRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerUserJoinedRoom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerUserJoinedRoom
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerUserJoinedRoom;

        /**
         * Creates a plain object from a ServerUserJoinedRoom message. Also converts values to other types if specified.
         * @param message ServerUserJoinedRoom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerUserJoinedRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerUserJoinedRoom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerUserJoinedRoom
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientLeaveRoom. */
    interface IClientLeaveRoom {

        /** ClientLeaveRoom userId */
        userId: string;
    }

    /** Represents a ClientLeaveRoom. */
    class ClientLeaveRoom implements IClientLeaveRoom {

        /**
         * Constructs a new ClientLeaveRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientLeaveRoom);

        /** ClientLeaveRoom userId. */
        public userId: string;

        /**
         * Creates a new ClientLeaveRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientLeaveRoom instance
         */
        public static create(properties?: NT.IClientLeaveRoom): NT.ClientLeaveRoom;

        /**
         * Encodes the specified ClientLeaveRoom message. Does not implicitly {@link NT.ClientLeaveRoom.verify|verify} messages.
         * @param message ClientLeaveRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientLeaveRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientLeaveRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientLeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientLeaveRoom;

        /**
         * Verifies a ClientLeaveRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientLeaveRoom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientLeaveRoom
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientLeaveRoom;

        /**
         * Creates a plain object from a ClientLeaveRoom message. Also converts values to other types if specified.
         * @param message ClientLeaveRoom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientLeaveRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientLeaveRoom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientLeaveRoom
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerUserLeftRoom. */
    interface IServerUserLeftRoom {

        /** ServerUserLeftRoom userId */
        userId: string;
    }

    /** Represents a ServerUserLeftRoom. */
    class ServerUserLeftRoom implements IServerUserLeftRoom {

        /**
         * Constructs a new ServerUserLeftRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerUserLeftRoom);

        /** ServerUserLeftRoom userId. */
        public userId: string;

        /**
         * Creates a new ServerUserLeftRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerUserLeftRoom instance
         */
        public static create(properties?: NT.IServerUserLeftRoom): NT.ServerUserLeftRoom;

        /**
         * Encodes the specified ServerUserLeftRoom message. Does not implicitly {@link NT.ServerUserLeftRoom.verify|verify} messages.
         * @param message ServerUserLeftRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerUserLeftRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerUserLeftRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerUserLeftRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerUserLeftRoom;

        /**
         * Verifies a ServerUserLeftRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerUserLeftRoom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerUserLeftRoom
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerUserLeftRoom;

        /**
         * Creates a plain object from a ServerUserLeftRoom message. Also converts values to other types if specified.
         * @param message ServerUserLeftRoom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerUserLeftRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerUserLeftRoom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerUserLeftRoom
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientKickUser. */
    interface IClientKickUser {

        /** ClientKickUser userId */
        userId: string;
    }

    /** Represents a ClientKickUser. */
    class ClientKickUser implements IClientKickUser {

        /**
         * Constructs a new ClientKickUser.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientKickUser);

        /** ClientKickUser userId. */
        public userId: string;

        /**
         * Creates a new ClientKickUser instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientKickUser instance
         */
        public static create(properties?: NT.IClientKickUser): NT.ClientKickUser;

        /**
         * Encodes the specified ClientKickUser message. Does not implicitly {@link NT.ClientKickUser.verify|verify} messages.
         * @param message ClientKickUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientKickUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientKickUser message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientKickUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientKickUser;

        /**
         * Verifies a ClientKickUser message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientKickUser message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientKickUser
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientKickUser;

        /**
         * Creates a plain object from a ClientKickUser message. Also converts values to other types if specified.
         * @param message ClientKickUser
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientKickUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientKickUser to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientKickUser
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerUserKicked. */
    interface IServerUserKicked {

        /** ServerUserKicked userId */
        userId: string;
    }

    /** Represents a ServerUserKicked. */
    class ServerUserKicked implements IServerUserKicked {

        /**
         * Constructs a new ServerUserKicked.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerUserKicked);

        /** ServerUserKicked userId. */
        public userId: string;

        /**
         * Creates a new ServerUserKicked instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerUserKicked instance
         */
        public static create(properties?: NT.IServerUserKicked): NT.ServerUserKicked;

        /**
         * Encodes the specified ServerUserKicked message. Does not implicitly {@link NT.ServerUserKicked.verify|verify} messages.
         * @param message ServerUserKicked message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerUserKicked, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerUserKicked message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerUserKicked
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerUserKicked;

        /**
         * Verifies a ServerUserKicked message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerUserKicked message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerUserKicked
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerUserKicked;

        /**
         * Creates a plain object from a ServerUserKicked message. Also converts values to other types if specified.
         * @param message ServerUserKicked
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerUserKicked, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerUserKicked to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerUserKicked
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientBanUser. */
    interface IClientBanUser {

        /** ClientBanUser userId */
        userId: string;
    }

    /** Represents a ClientBanUser. */
    class ClientBanUser implements IClientBanUser {

        /**
         * Constructs a new ClientBanUser.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientBanUser);

        /** ClientBanUser userId. */
        public userId: string;

        /**
         * Creates a new ClientBanUser instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientBanUser instance
         */
        public static create(properties?: NT.IClientBanUser): NT.ClientBanUser;

        /**
         * Encodes the specified ClientBanUser message. Does not implicitly {@link NT.ClientBanUser.verify|verify} messages.
         * @param message ClientBanUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientBanUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientBanUser message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientBanUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientBanUser;

        /**
         * Verifies a ClientBanUser message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientBanUser message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientBanUser
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientBanUser;

        /**
         * Creates a plain object from a ClientBanUser message. Also converts values to other types if specified.
         * @param message ClientBanUser
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientBanUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientBanUser to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientBanUser
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerUserBanned. */
    interface IServerUserBanned {

        /** ServerUserBanned userId */
        userId: string;
    }

    /** Represents a ServerUserBanned. */
    class ServerUserBanned implements IServerUserBanned {

        /**
         * Constructs a new ServerUserBanned.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerUserBanned);

        /** ServerUserBanned userId. */
        public userId: string;

        /**
         * Creates a new ServerUserBanned instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerUserBanned instance
         */
        public static create(properties?: NT.IServerUserBanned): NT.ServerUserBanned;

        /**
         * Encodes the specified ServerUserBanned message. Does not implicitly {@link NT.ServerUserBanned.verify|verify} messages.
         * @param message ServerUserBanned message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerUserBanned, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerUserBanned message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerUserBanned
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerUserBanned;

        /**
         * Verifies a ServerUserBanned message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerUserBanned message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerUserBanned
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerUserBanned;

        /**
         * Creates a plain object from a ServerUserBanned message. Also converts values to other types if specified.
         * @param message ServerUserBanned
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerUserBanned, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerUserBanned to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerUserBanned
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientReadyState. */
    interface IClientReadyState {

        /** ClientReadyState ready */
        ready: boolean;

        /** ClientReadyState seed */
        seed?: (string|null);

        /** ClientReadyState mods */
        mods?: (string[]|null);

        /** ClientReadyState version */
        version?: (string|null);

        /** ClientReadyState beta */
        beta?: (boolean|null);
    }

    /** Represents a ClientReadyState. */
    class ClientReadyState implements IClientReadyState {

        /**
         * Constructs a new ClientReadyState.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientReadyState);

        /** ClientReadyState ready. */
        public ready: boolean;

        /** ClientReadyState seed. */
        public seed?: (string|null);

        /** ClientReadyState mods. */
        public mods: string[];

        /** ClientReadyState version. */
        public version?: (string|null);

        /** ClientReadyState beta. */
        public beta?: (boolean|null);

        /** ClientReadyState _seed. */
        public _seed?: "seed";

        /** ClientReadyState _version. */
        public _version?: "version";

        /** ClientReadyState _beta. */
        public _beta?: "beta";

        /**
         * Creates a new ClientReadyState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientReadyState instance
         */
        public static create(properties?: NT.IClientReadyState): NT.ClientReadyState;

        /**
         * Encodes the specified ClientReadyState message. Does not implicitly {@link NT.ClientReadyState.verify|verify} messages.
         * @param message ClientReadyState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientReadyState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientReadyState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientReadyState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientReadyState;

        /**
         * Verifies a ClientReadyState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientReadyState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientReadyState
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientReadyState;

        /**
         * Creates a plain object from a ClientReadyState message. Also converts values to other types if specified.
         * @param message ClientReadyState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientReadyState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientReadyState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientReadyState
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerUserReadyState. */
    interface IServerUserReadyState {

        /** ServerUserReadyState userId */
        userId: string;

        /** ServerUserReadyState ready */
        ready: boolean;

        /** ServerUserReadyState seed */
        seed?: (string|null);

        /** ServerUserReadyState mods */
        mods?: (string[]|null);

        /** ServerUserReadyState version */
        version?: (string|null);

        /** ServerUserReadyState beta */
        beta?: (boolean|null);
    }

    /** Represents a ServerUserReadyState. */
    class ServerUserReadyState implements IServerUserReadyState {

        /**
         * Constructs a new ServerUserReadyState.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerUserReadyState);

        /** ServerUserReadyState userId. */
        public userId: string;

        /** ServerUserReadyState ready. */
        public ready: boolean;

        /** ServerUserReadyState seed. */
        public seed?: (string|null);

        /** ServerUserReadyState mods. */
        public mods: string[];

        /** ServerUserReadyState version. */
        public version?: (string|null);

        /** ServerUserReadyState beta. */
        public beta?: (boolean|null);

        /** ServerUserReadyState _seed. */
        public _seed?: "seed";

        /** ServerUserReadyState _version. */
        public _version?: "version";

        /** ServerUserReadyState _beta. */
        public _beta?: "beta";

        /**
         * Creates a new ServerUserReadyState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerUserReadyState instance
         */
        public static create(properties?: NT.IServerUserReadyState): NT.ServerUserReadyState;

        /**
         * Encodes the specified ServerUserReadyState message. Does not implicitly {@link NT.ServerUserReadyState.verify|verify} messages.
         * @param message ServerUserReadyState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerUserReadyState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerUserReadyState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerUserReadyState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerUserReadyState;

        /**
         * Verifies a ServerUserReadyState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerUserReadyState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerUserReadyState
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerUserReadyState;

        /**
         * Creates a plain object from a ServerUserReadyState message. Also converts values to other types if specified.
         * @param message ServerUserReadyState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerUserReadyState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerUserReadyState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerUserReadyState
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientStartRun. */
    interface IClientStartRun {

        /** ClientStartRun forced */
        forced: boolean;
    }

    /** Represents a ClientStartRun. */
    class ClientStartRun implements IClientStartRun {

        /**
         * Constructs a new ClientStartRun.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientStartRun);

        /** ClientStartRun forced. */
        public forced: boolean;

        /**
         * Creates a new ClientStartRun instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientStartRun instance
         */
        public static create(properties?: NT.IClientStartRun): NT.ClientStartRun;

        /**
         * Encodes the specified ClientStartRun message. Does not implicitly {@link NT.ClientStartRun.verify|verify} messages.
         * @param message ClientStartRun message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientStartRun, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientStartRun message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientStartRun
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientStartRun;

        /**
         * Verifies a ClientStartRun message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientStartRun message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientStartRun
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientStartRun;

        /**
         * Creates a plain object from a ClientStartRun message. Also converts values to other types if specified.
         * @param message ClientStartRun
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientStartRun, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientStartRun to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientStartRun
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerHostStart. */
    interface IServerHostStart {

        /** ServerHostStart forced */
        forced: boolean;
    }

    /** Represents a ServerHostStart. */
    class ServerHostStart implements IServerHostStart {

        /**
         * Constructs a new ServerHostStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerHostStart);

        /** ServerHostStart forced. */
        public forced: boolean;

        /**
         * Creates a new ServerHostStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerHostStart instance
         */
        public static create(properties?: NT.IServerHostStart): NT.ServerHostStart;

        /**
         * Encodes the specified ServerHostStart message. Does not implicitly {@link NT.ServerHostStart.verify|verify} messages.
         * @param message ServerHostStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerHostStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerHostStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerHostStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerHostStart;

        /**
         * Verifies a ServerHostStart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerHostStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerHostStart
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerHostStart;

        /**
         * Creates a plain object from a ServerHostStart message. Also converts values to other types if specified.
         * @param message ServerHostStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerHostStart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerHostStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerHostStart
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientRequestRoomList. */
    interface IClientRequestRoomList {

        /** ClientRequestRoomList page */
        page: number;
    }

    /** Represents a ClientRequestRoomList. */
    class ClientRequestRoomList implements IClientRequestRoomList {

        /**
         * Constructs a new ClientRequestRoomList.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IClientRequestRoomList);

        /** ClientRequestRoomList page. */
        public page: number;

        /**
         * Creates a new ClientRequestRoomList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientRequestRoomList instance
         */
        public static create(properties?: NT.IClientRequestRoomList): NT.ClientRequestRoomList;

        /**
         * Encodes the specified ClientRequestRoomList message. Does not implicitly {@link NT.ClientRequestRoomList.verify|verify} messages.
         * @param message ClientRequestRoomList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IClientRequestRoomList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientRequestRoomList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientRequestRoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ClientRequestRoomList;

        /**
         * Verifies a ClientRequestRoomList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientRequestRoomList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientRequestRoomList
         */
        public static fromObject(object: { [k: string]: any }): NT.ClientRequestRoomList;

        /**
         * Creates a plain object from a ClientRequestRoomList message. Also converts values to other types if specified.
         * @param message ClientRequestRoomList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ClientRequestRoomList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientRequestRoomList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientRequestRoomList
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerRoomList. */
    interface IServerRoomList {

        /** ServerRoomList rooms */
        rooms?: (NT.ServerRoomList.IRoom[]|null);

        /** ServerRoomList pages */
        pages?: (number|null);
    }

    /** Represents a ServerRoomList. */
    class ServerRoomList implements IServerRoomList {

        /**
         * Constructs a new ServerRoomList.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerRoomList);

        /** ServerRoomList rooms. */
        public rooms: NT.ServerRoomList.IRoom[];

        /** ServerRoomList pages. */
        public pages?: (number|null);

        /** ServerRoomList _pages. */
        public _pages?: "pages";

        /**
         * Creates a new ServerRoomList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerRoomList instance
         */
        public static create(properties?: NT.IServerRoomList): NT.ServerRoomList;

        /**
         * Encodes the specified ServerRoomList message. Does not implicitly {@link NT.ServerRoomList.verify|verify} messages.
         * @param message ServerRoomList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerRoomList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerRoomList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerRoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerRoomList;

        /**
         * Verifies a ServerRoomList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerRoomList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerRoomList
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerRoomList;

        /**
         * Creates a plain object from a ServerRoomList message. Also converts values to other types if specified.
         * @param message ServerRoomList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerRoomList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerRoomList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerRoomList
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ServerRoomList {

        /** Properties of a Room. */
        interface IRoom {

            /** Room id */
            id: string;

            /** Room name */
            name: string;

            /** Room gamemode */
            gamemode: number;

            /** Room curUsers */
            curUsers: number;

            /** Room maxUsers */
            maxUsers: number;

            /** Room protected */
            "protected": boolean;

            /** Room owner */
            owner: string;

            /** Room locked */
            locked: boolean;
        }

        /** Represents a Room. */
        class Room implements IRoom {

            /**
             * Constructs a new Room.
             * @param [properties] Properties to set
             */
            constructor(properties?: NT.ServerRoomList.IRoom);

            /** Room id. */
            public id: string;

            /** Room name. */
            public name: string;

            /** Room gamemode. */
            public gamemode: number;

            /** Room curUsers. */
            public curUsers: number;

            /** Room maxUsers. */
            public maxUsers: number;

            /** Room protected. */
            public protected: boolean;

            /** Room owner. */
            public owner: string;

            /** Room locked. */
            public locked: boolean;

            /**
             * Creates a new Room instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Room instance
             */
            public static create(properties?: NT.ServerRoomList.IRoom): NT.ServerRoomList.Room;

            /**
             * Encodes the specified Room message. Does not implicitly {@link NT.ServerRoomList.Room.verify|verify} messages.
             * @param message Room message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NT.ServerRoomList.IRoom, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Room message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Room
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerRoomList.Room;

            /**
             * Verifies a Room message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Room message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Room
             */
            public static fromObject(object: { [k: string]: any }): NT.ServerRoomList.Room;

            /**
             * Creates a plain object from a Room message. Also converts values to other types if specified.
             * @param message Room
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: NT.ServerRoomList.Room, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Room to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Room
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a ServerRoomAddToList. */
    interface IServerRoomAddToList {

        /** ServerRoomAddToList room */
        room: NT.ServerRoomAddToList.IRoom;
    }

    /** Represents a ServerRoomAddToList. */
    class ServerRoomAddToList implements IServerRoomAddToList {

        /**
         * Constructs a new ServerRoomAddToList.
         * @param [properties] Properties to set
         */
        constructor(properties?: NT.IServerRoomAddToList);

        /** ServerRoomAddToList room. */
        public room: NT.ServerRoomAddToList.IRoom;

        /**
         * Creates a new ServerRoomAddToList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerRoomAddToList instance
         */
        public static create(properties?: NT.IServerRoomAddToList): NT.ServerRoomAddToList;

        /**
         * Encodes the specified ServerRoomAddToList message. Does not implicitly {@link NT.ServerRoomAddToList.verify|verify} messages.
         * @param message ServerRoomAddToList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NT.IServerRoomAddToList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerRoomAddToList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerRoomAddToList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerRoomAddToList;

        /**
         * Verifies a ServerRoomAddToList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerRoomAddToList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerRoomAddToList
         */
        public static fromObject(object: { [k: string]: any }): NT.ServerRoomAddToList;

        /**
         * Creates a plain object from a ServerRoomAddToList message. Also converts values to other types if specified.
         * @param message ServerRoomAddToList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NT.ServerRoomAddToList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerRoomAddToList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerRoomAddToList
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ServerRoomAddToList {

        /** Properties of a Room. */
        interface IRoom {

            /** Room id */
            id: string;

            /** Room name */
            name: string;

            /** Room gamemode */
            gamemode: number;

            /** Room curUsers */
            curUsers: number;

            /** Room maxUsers */
            maxUsers: number;

            /** Room protected */
            "protected": boolean;

            /** Room owner */
            owner: string;

            /** Room locked */
            locked: boolean;
        }

        /** Represents a Room. */
        class Room implements IRoom {

            /**
             * Constructs a new Room.
             * @param [properties] Properties to set
             */
            constructor(properties?: NT.ServerRoomAddToList.IRoom);

            /** Room id. */
            public id: string;

            /** Room name. */
            public name: string;

            /** Room gamemode. */
            public gamemode: number;

            /** Room curUsers. */
            public curUsers: number;

            /** Room maxUsers. */
            public maxUsers: number;

            /** Room protected. */
            public protected: boolean;

            /** Room owner. */
            public owner: string;

            /** Room locked. */
            public locked: boolean;

            /**
             * Creates a new Room instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Room instance
             */
            public static create(properties?: NT.ServerRoomAddToList.IRoom): NT.ServerRoomAddToList.Room;

            /**
             * Encodes the specified Room message. Does not implicitly {@link NT.ServerRoomAddToList.Room.verify|verify} messages.
             * @param message Room message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NT.ServerRoomAddToList.IRoom, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Room message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Room
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NT.ServerRoomAddToList.Room;

            /**
             * Verifies a Room message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Room message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Room
             */
            public static fromObject(object: { [k: string]: any }): NT.ServerRoomAddToList.Room;

            /**
             * Creates a plain object from a Room message. Also converts values to other types if specified.
             * @param message Room
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: NT.ServerRoomAddToList.Room, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Room to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Room
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
