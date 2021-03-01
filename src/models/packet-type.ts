/**
 * A strongly typed representation of the packet types.
 */
export const PacketType = {
    FAILURE: "FAILURE",
    HELLO: "HELLO",
    CLAIM_LOGIN_REWARD_MSG: "CLAIM_LOGIN_REWARD_MSG",
    DELETE_PET: "DELETE_PET",
    REQUESTTRADE: "REQUESTTRADE",
    QUEST_FETCH_RESPONSE: "QUEST_FETCH_RESPONSE",
    JOINGUILD: "JOINGUILD",
    PING: "PING",
    NEWTICK: "NEWTICK",
    PLAYERTEXT: "PLAYERTEXT",
    USEITEM: "USEITEM",
    SERVERPLAYERSHOOT: "SERVERPLAYERSHOOT",
    SHOWEFFECT: "SHOWEFFECT",
    TRADEACCEPTED: "TRADEACCEPTED",
    GUILDREMOVE: "GUILDREMOVE",
    PETUPGRADEREQUEST: "PETUPGRADEREQUEST",
    GOTO: "GOTO",
    INVSWAP: "INVSWAP",
    OTHERHIT: "OTHERHIT",
    NAMERESULT: "NAMERESULT",
    BUYRESULT: "BUYRESULT",
    HATCH_PET: "HATCH_PET",
    ACTIVE_PET_UPDATE_REQUEST: "ACTIVE_PET_UPDATE_REQUEST",
    ENEMYHIT: "ENEMYHIT",
    GUILDRESULT: "GUILDRESULT",
    EDITACCOUNTLIST: "EDITACCOUNTLIST",
    TRADECHANGED: "TRADECHANGED",
    PLAYERSHOOT: "PLAYERSHOOT",
    PONG: "PONG",
    PET_CHANGE_SKIN_MSG: "PET_CHANGE_SKIN_MSG",
    TRADEDONE: "TRADEDONE",
    ENEMYSHOOT: "ENEMYSHOOT",
    ACCEPTTRADE: "ACCEPTTRADE",
    CHANGEGUILDRANK: "CHANGEGUILDRANK",
    PLAYSOUND: "PLAYSOUND",
    VERIFY_EMAIL: "VERIFY_EMAIL",
    SQUAREHIT: "SQUAREHIT",
    NEW_ABILITY: "NEW_ABILITY",
    MOVE: "MOVE",
    TEXT: "TEXT",
    RECONNECT: "RECONNECT",
    DEATH: "DEATH",
    USEPORTAL: "USEPORTAL",
    QUEST_ROOM_MSG: "QUEST_ROOM_MSG",
    ALLYSHOOT: "ALLYSHOOT",
    RESKIN: "RESKIN",
    RESET_DAILY_QUESTS: "RESET_DAILY_QUESTS",
    PET_CHANGE_FORM_MSG: "PET_CHANGE_FORM_MSG",
    INVDROP: "INVDROP",
    CHANGETRADE: "CHANGETRADE",
    LOAD: "LOAD",
    CREATEGUILD: "CREATEGUILD",
    SETCONDITION: "SETCONDITION",
    CREATE: "CREATE",
    UPDATE: "UPDATE",
    KEY_INFO_RESPONSE: "KEY_INFO_RESPONSE",
    AOE: "AOE",
    GOTOACK: "GOTOACK",
    GLOBAL_NOTIFICATION: "GLOBAL_NOTIFICATION",
    NOTIFICATION: "NOTIFICATION",
    CLIENTSTAT: "CLIENTSTAT",
    TELEPORT: "TELEPORT",
    DAMAGE: "DAMAGE",
    ACTIVEPETUPDATE: "ACTIVEPETUPDATE",
    INVITEDTOGUILD: "INVITEDTOGUILD",
    PETYARDUPDATE: "PETYARDUPDATE",
    PASSWORD_PROMPT: "PASSWORD_PROMPT",
    UPDATEACK: "UPDATEACK",
    QUESTOBJID: "QUESTOBJID",
    PIC: "PIC",
    REALM_HERO_LEFT_MSG: "REALM_HERO_LEFT_MSG",
    BUY: "BUY",
    TRADESTART: "TRADESTART",
    EVOLVE_PET: "EVOLVE_PET",
    TRADEREQUESTED: "TRADEREQUESTED",
    AOEACK: "AOEACK",
    PLAYERHIT: "PLAYERHIT",
    CANCELTRADE: "CANCELTRADE",
    MAPINFO: "MAPINFO",
    LOGIN_REWARD_MSG: "LOGIN_REWARD_MSG",
    KEY_INFO_REQUEST: "KEY_INFO_REQUEST",
    INVRESULT: "INVRESULT",
    QUEST_REDEEM_RESPONSE: "QUEST_REDEEM_RESPONSE",
    CHOOSENAME: "CHOOSENAME",
    QUEST_FETCH_ASK: "QUEST_FETCH_ASK",
    ACCOUNTLIST: "ACCOUNTLIST",
    SHOOTACK: "SHOOTACK",
    CREATE_SUCCESS: "CREATE_SUCCESS",
    CHECKCREDITS: "CHECKCREDITS",
    GROUNDDAMAGE: "GROUNDDAMAGE",
    GUILDINVITE: "GUILDINVITE",
    ESCAPE: "ESCAPE",
    FILE: "FILE",
    RESKIN_UNLOCK: "RESKIN_UNLOCK",
    NEW_CHARACTER_INFORMATION: "NEW_CHARACTER_INFORMATION",
    UNLOCK_INFORMATION: "UNLOCK_INFORMATION",
    QUEUE_INFO: "QUEUE_INFO",
    EXALTATION_UPDATE: "EXALTATION_UPDATE",
    VAULT_UPDATE: "VAULT_UPDATE",
    CHATHELLO: "CHATHELLO",
    CHATTOKEN: "CHATTOKEN",
    CHATLOGOUT: "CHATLOGOUT"
};

// generate PacketType from PacketMap
/*
import { PacketMap } from ".";

let PacketType = {};

for (const packet in PacketMap) {
    // ignore reverse mappings
    if (parseInt(packet, 10) >= 0) {
        continue;
    }

    PacketType[packet] = packet;
}

console.log(PacketType);
*/
