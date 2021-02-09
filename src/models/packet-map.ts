/**
 * A bidirectional map of packet types and their IDs.
 */
export enum PacketMap {
    FAILURE = 0,
    HELLO = 1,
    CLAIM_LOGIN_REWARD_MSG = 3,
    DELETE_PET = 4,
    REQUESTTRADE = 5,
    QUEST_FETCH_RESPONSE = 6,
    JOINGUILD = 7,
    PING = 8,
    NEWTICK = 9,
    PLAYERTEXT = 10,
    USEITEM = 11,
    SERVERPLAYERSHOOT = 12,
    SHOWEFFECT = 13,
    TRADEACCEPTED = 14,
    GUILDREMOVE = 15,
    PETUPGRADEREQUEST = 16,
    GOTO = 18,
    INVSWAP = 19,
    OTHERHIT = 20,
    NAMERESULT = 21,
    BUYRESULT = 22,
    HATCH_PET = 23,
    ACTIVE_PET_UPDATE_REQUEST = 24,
    ENEMYHIT = 25,
    GUILDRESULT = 26,
    EDITACCOUNTLIST = 27,
    TRADECHANGED = 28,
    PLAYERSHOOT = 30,
    PONG = 31,
    PET_CHANGE_SKIN_MSG = 33,
    TRADEDONE = 34,
    ENEMYSHOOT = 35,
    ACCEPTTRADE = 36,
    CHANGEGUILDRANK = 37,
    PLAYSOUND = 38,
    VERIFY_EMAIL = 39,
    SQUAREHIT = 40,
    NEW_ABILITY = 41,
    MOVE = 42,
    TEXT = 44,
    RECONNECT = 45,
    DEATH = 46,
    USEPORTAL = 47,
    QUEST_ROOM_MSG = 48,
    ALLYSHOOT = 49,
    RESKIN = 51,
    RESET_DAILY_QUESTS = 52,
    PET_CHANGE_FORM_MSG = 53,
    INVDROP = 55,
    CHANGETRADE = 56,
    LOAD = 57,
    CREATEGUILD = 59,
    SETCONDITION = 60,
    CREATE = 61,
    UPDATE = 62,
    KEY_INFO_RESPONSE = 63,
    AOE = 64,
    GOTOACK = 65,
    GLOBAL_NOTIFICATION = 66,
    NOTIFICATION = 67,
    CLIENTSTAT = 69,
    TELEPORT = 74,
    DAMAGE = 75,
    ACTIVEPETUPDATE = 76,
    INVITEDTOGUILD = 77,
    PETYARDUPDATE = 78,
    PASSWORD_PROMPT = 79,
    UPDATEACK = 81,
    QUESTOBJID = 82,
    PIC = 83,
    REALM_HERO_LEFT_MSG = 84,
    BUY = 85,
    TRADESTART = 86,
    EVOLVE_PET = 87,
    TRADEREQUESTED = 88,
    AOEACK = 89,
    PLAYERHIT = 90,
    CANCELTRADE = 91,
    MAPINFO = 92,
    LOGIN_REWARD_MSG = 93,
    KEY_INFO_REQUEST = 94,
    INVRESULT = 95,
    QUEST_REDEEM_RESPONSE = 96,
    CHOOSENAME = 97,
    QUEST_FETCH_ASK = 98,
    ACCOUNTLIST = 99,
    SHOOTACK = 100,
    CREATE_SUCCESS = 101,
    CHECKCREDITS = 102,
    GROUNDDAMAGE = 103,
    GUILDINVITE = 104,
    ESCAPE = 105,
    FILE = 106,
    RESKIN_UNLOCK = 107,
    NEW_CHARACTER_INFORMATION = 108,
    UNLOCK_INFORMATION = 109,
    QUEUE_INFO = 112,
    EXALTATION_UPDATE = 114,
    VAULT_UPDATE = 117,
    UNLOCKED_BLUEPRINTS = 120,
    CHATHELLO = 206,
    CHATTOKEN = 207,
    CHATLOGOUT = 208
}