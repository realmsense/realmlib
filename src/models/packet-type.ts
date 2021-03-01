/**
 * A strongly typed representation of the packet types.
 */
export const PacketType = {
    FAILURE: "FAILURE",
    HELLO: "HELLO",
    CLAIM_DAILY_REWARD_MESSAGE: "CLAIM_DAILY_REWARD_MESSAGE",
    DELETE_PET_MESSAGE: "DELETE_PET_MESSAGE",
    REQUEST_TRADE: "REQUEST_TRADE",
    QUEST_FETCH_RESPONSE: "QUEST_FETCH_RESPONSE",
    JOIN_GUILD: "JOIN_GUILD",
    PING: "PING",
    NEW_TICK: "NEW_TICK",
    PLAYER_TEXT: "PLAYER_TEXT",
    USE_ITEM: "USE_ITEM",
    SERVER_PLAYER_SHOOT: "SERVER_PLAYER_SHOOT",
    SHOW_EFFECT: "SHOW_EFFECT",
    TRADE_ACCEPTED: "TRADE_ACCEPTED",
    GUILD_REMOVE: "GUILD_REMOVE",
    PET_UPGRADE_REQUEST: "PET_UPGRADE_REQUEST",
    GOTO: "GOTO",
    INVENTORY_SWAP: "INVENTORY_SWAP",
    OTHER_HIT: "OTHER_HIT",
    NAME_RESULT: "NAME_RESULT",
    BUY_RESULT: "BUY_RESULT",
    HATCH_PET: "HATCH_PET",
    ACTIVE_PET_UPDATE_REQUEST: "ACTIVE_PET_UPDATE_REQUEST",
    ENEMY_HIT: "ENEMY_HIT",
    GUILD_RESULT: "GUILD_RESULT",
    EDIT_ACCOUNT_LIST: "EDIT_ACCOUNT_LIST",
    TRADE_CHANGED: "TRADE_CHANGED",
    PLAYER_SHOOT: "PLAYER_SHOOT",
    PONG: "PONG",
    CHANGE_PET_SKIN: "CHANGE_PET_SKIN",
    TRADE_DONE: "TRADE_DONE",
    ENEMY_SHOOT: "ENEMY_SHOOT",
    ACCEPT_TRADE: "ACCEPT_TRADE",
    CHANGE_GUILD_RANK: "CHANGE_GUILD_RANK",
    PLAY_SOUND: "PLAY_SOUND",
    SQUARE_HIT: "SQUARE_HIT",
    NEW_ABILITY_MESSAGE: "NEW_ABILITY_MESSAGE",
    MOVE: "MOVE",
    TEXT: "TEXT",
    RECONNECT: "RECONNECT",
    DEATH: "DEATH",
    USE_PORTAL: "USE_PORTAL",
    GO_TO_QUEST_ROOM: "GO_TO_QUEST_ROOM",
    ALLY_SHOOT: "ALLY_SHOOT",
    RESKIN: "RESKIN",
    RESET_DAILY_QUESTS: "RESET_DAILY_QUESTS",
    INVENTORY_DROP: "INVENTORY_DROP",
    CHANGE_TRADE: "CHANGE_TRADE",
    LOAD: "LOAD",
    CREATE_GUILD: "CREATE_GUILD",
    SET_CONDITION: "SET_CONDITION",
    CREATE: "CREATE",
    UPDATE: "UPDATE",
    KEY_INFO_RESPONSE: "KEY_INFO_RESPONSE",
    AOE: "AOE",
    GOTO_ACK: "GOTO_ACK",
    GLOBAL_NOTIFICATION: "GLOBAL_NOTIFICATION",
    NOTIFICATION: "NOTIFICATION",
    CLIENT_STAT: "CLIENT_STAT",
    TELEPORT: "TELEPORT",
    DAMAGE: "DAMAGE",
    ACTIVE_PET: "ACTIVE_PET",
    INVITED_TO_GUILD: "INVITED_TO_GUILD",
    PET_YARD_UPDATE: "PET_YARD_UPDATE",
    PASSWORD_PROMPT: "PASSWORD_PROMPT",
    ACCEPT_ARENA_DEATH: "ACCEPT_ARENA_DEATH",
    UPDATE_ACK: "UPDATE_ACK",
    QUEST_OBJECT_ID: "QUEST_OBJECT_ID",
    PIC: "PIC",
    HERO_LEFT: "HERO_LEFT",
    BUY: "BUY",
    TRADE_START: "TRADE_START",
    EVOLVED_PET_MESSAGE: "EVOLVED_PET_MESSAGE",
    TRADE_REQUESTED: "TRADE_REQUESTED",
    AOE_ACK: "AOE_ACK",
    PLAYER_HIT: "PLAYER_HIT",
    CANCEL_TRADE: "CANCEL_TRADE",
    MAP_INFO: "MAP_INFO",
    KEY_INFO_REQUEST: "KEY_INFO_REQUEST",
    INVENTORY_RESULT: "INVENTORY_RESULT",
    QUEST_REDEEM_RESPONSE: "QUEST_REDEEM_RESPONSE",
    CHOOSE_NAME: "CHOOSE_NAME",
    QUEST_FETCH_ASK: "QUEST_FETCH_ASK",
    ACCOUNT_LIST: "ACCOUNT_LIST",
    CREATE_SUCCESS: "CREATE_SUCCESS",
    CHECK_CREDITS: "CHECK_CREDITS",
    GROUND_DAMAGE: "GROUND_DAMAGE",
    GUILD_INVITE: "GUILD_INVITE",
    ESCAPE: "ESCAPE",
    FILE: "FILE",
    RESKIN_UNLOCK: "RESKIN_UNLOCK",
    NEW_CHARACTER_INFORMATION: "NEW_CHARACTER_INFORMATION",
    QUEUE_MESSAGE: "QUEUE_MESSAGE",
    EXALTATION_BONUS_CHANGED: "EXALTATION_BONUS_CHANGED",
    VAULT_CONTENT: "VAULT_CONTENT",
    FORGE_UNLOCKED_BLUEPRINTS: "FORGE_UNLOCKED_BLUEPRINTS"
};

// // generate PacketType from PacketMap
// import { PacketMap } from ".";
// const PacketType2 = {};
// for (const packet in PacketMap) {
//     // ignore reverse mappings
//     if (parseInt(packet, 10) >= 0) {
//         continue;
//     }
//     PacketType2[packet] = packet;
// }
// console.log(PacketType2);