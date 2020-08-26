exports.msgTypes = Object.freeze({
    hostAccept: "0", //host: #0;username/id
    hostStart: "1", //host: #1;flags;user1,user2...
    userDeath: "2", //user: #2;lose/win
    userSendSpells: "3", //user: #3;receiving_user;1,2,3...
    userJoin: "4", //user: #4... wait for hostAccept
    userReadyState: "5", //user: #5;state
    userAngerGods: "6",
    userSendOrb: "7",
    userSendItem: "8",
    userSendWand: "9",
    userSendHpPlus: "10",
    userSendLocation: "11",
    userSendGold: "12",
    hostKick: "13" //host: #13;user_to_kick
})

exports.eventTypes = Object.freeze({
    modList: "0",
    endRun: "1",
    sendSpells: "2",
    sendItem: "3",
    sendWand: "4",
    angerGods: "5",
    sendOrb: "6",
    sendEvil_heart: "7",
    sendLocation: "8",
    sendHpPlus: "9",
    sendGold: "10"
})

exports.gameFlags = Object.freeze({
    "0": "sync_gods_mood",
    "1": "sync_orbs",
    "2": "can_send_gold",
    "3": "can_send_items",
    "4": "can_send_wands",
    "5": "share_hp_plus",
    "6": "NT_GAMEMODE_CO_OP",
    "7": "NT_GAMEMODE_VS"
})