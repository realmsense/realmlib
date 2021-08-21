import { LoadPacket, FailurePacket, HelloPacket, AcceptArenaDeathPacket, AcceptTradePacket, AccountListPacket, ActivePetPacket, ActivePetUpdateRequestPacket, AllyShootPacket, AoeAckPacket, AoePacket, BuyPacket, BuyResultPacket, CancelTradePacket, ChangeGuildRankPacket, ChangePetSkinPacket, ChangeTradePacket, CheckCreditsPacket, ChooseNamePacket, ClaimDailyRewardPacket, ClientStatPacket, CreateGuildPacket, CreatePacket, CreateSuccessPacket, DamagePacket, DeathPacket, DeletePetMessagePacket, EditAccountListPacket, EnemyHitPacket, EscapePacket, EvolvedPetMessagePacket, ExaltationBonusChangedPacket, FilePacket, ForgeUnlockedBlueprintsPacket, GlobalNotificationPacket, GotoAckPacket, GotoPacket, GoToQuestRoomPacket, GroundDamagePacket, GuildInvitePacket, GuildRemovePacket, GuildResultPacket, HatchPetPacket, HeroLeftPacket, InventoryDropPacket, InventoryResultPacket, InventorySwapPacket, InvitedToGuildPacket, JoinGuildPacket, KeyInfoRequestPacket, MovePacket, NameResultPacket, NewAbilityMessagePacket, NewCharacterInformationPacket, NewTickPacket, NotificationPacket, OtherHitPacket, PasswordPromptPacket, PetUpgradeRequestPacket, PetYardUpdatePacket, PicPacket, PingPacket, PlayerHitPacket, PlayerShootPacket, PlayerTextPacket, PlaySoundPacket, PongPacket, QuestFetchResponsePacket, QuestObjectIdPacket, QuestRedeemResponsePacket, QueueMessagePacket, ReconnectPacket, RequestTradePacket, ResetDailyQuestsPacket, ReskinPacket, ReskinUnlockPacket, ServerPlayerShootPacket, SetConditionPacket, ShowEffectPacket, SquareHitPacket, TeleportPacket, TextPacket, TradeAcceptedPacket, TradeChangedPacket, TradeDonePacket, TradeRequestedPacket, TradeStartPacket, UpdateAckPacket, UpdatePacket, UseItemPacket, UsePortalPacket, VaultContentPacket, MapInfoPacket } from "../packets";
import { Packet } from ".";

const packetIds = new Map<number, PacketType>();

export class PacketType {

    public static readonly FAILURE                    = new PacketType("FAILURE", 0, FailurePacket);
    public static readonly HELLO                      = new PacketType("HELLO", 1, HelloPacket);
    public static readonly CLAIM_DAILY_REWARD_MESSAGE = new PacketType("CLAIM_DAILY_REWARD_MESSAGE", 3, ClaimDailyRewardPacket);
    public static readonly DELETE_PET_MESSAGE         = new PacketType("DELETE_PET_MESSAGE", 4, DeletePetMessagePacket);
    public static readonly REQUEST_TRADE              = new PacketType("REQUEST_TRADE", 5, RequestTradePacket);
    public static readonly QUEST_FETCH_RESPONSE       = new PacketType("QUEST_FETCH_RESPONSE", 6, QuestFetchResponsePacket);
    public static readonly JOIN_GUILD                 = new PacketType("JOIN_GUILD", 7, JoinGuildPacket);
    public static readonly PING                       = new PacketType("PING", 8, PingPacket);
    public static readonly NEW_TICK                   = new PacketType("NEW_TICK", 9, NewTickPacket);
    public static readonly PLAYER_TEXT                = new PacketType("PLAYER_TEXT", 10, PlayerTextPacket);
    public static readonly USE_ITEM                   = new PacketType("USE_ITEM", 11, UseItemPacket);
    public static readonly SERVER_PLAYER_SHOOT        = new PacketType("SERVER_PLAYER_SHOOT", 12, ServerPlayerShootPacket);
    public static readonly SHOW_EFFECT                = new PacketType("SHOW_EFFECT", 13, ShowEffectPacket);
    public static readonly TRADE_ACCEPTED             = new PacketType("TRADE_ACCEPTED", 14, TradeAcceptedPacket);
    public static readonly GUILD_REMOVE               = new PacketType("GUILD_REMOVE", 15, GuildRemovePacket);
    public static readonly PET_UPGRADE_REQUEST        = new PacketType("PET_UPGRADE_REQUEST", 16, PetUpgradeRequestPacket);
    public static readonly GOTO                       = new PacketType("GOTO", 18, GotoPacket);
    public static readonly INVENTORY_SWAP             = new PacketType("INVENTORY_SWAP", 19, InventorySwapPacket);
    public static readonly OTHER_HIT                  = new PacketType("OTHER_HIT", 20, OtherHitPacket);
    public static readonly NAME_RESULT                = new PacketType("NAME_RESULT", 21, NameResultPacket);
    public static readonly BUY_RESULT                 = new PacketType("BUY_RESULT", 22, BuyResultPacket);
    public static readonly HATCH_PET                  = new PacketType("HATCH_PET", 23, HatchPetPacket);
    public static readonly ACTIVE_PET_UPDATE_REQUEST  = new PacketType("ACTIVE_PET_UPDATE_REQUEST", 24, ActivePetUpdateRequestPacket);
    public static readonly ENEMY_HIT                  = new PacketType("ENEMY_HIT", 25, EnemyHitPacket);
    public static readonly GUILD_RESULT               = new PacketType("GUILD_RESULT", 26, GuildResultPacket);
    public static readonly EDIT_ACCOUNT_LIST          = new PacketType("EDIT_ACCOUNT_LIST", 27, EditAccountListPacket);
    public static readonly TRADE_CHANGED              = new PacketType("TRADE_CHANGED", 28, TradeChangedPacket);
    public static readonly PLAYER_SHOOT               = new PacketType("PLAYER_SHOOT", 30, PlayerShootPacket);
    public static readonly PONG                       = new PacketType("PONG", 31, PongPacket);
    public static readonly CHANGE_PET_SKIN            = new PacketType("CHANGE_PET_SKIN", 33, ChangePetSkinPacket);
    public static readonly TRADE_DONE                 = new PacketType("TRADE_DONE", 34, TradeDonePacket);
    public static readonly ENEMY_SHOOT                = new PacketType("ENEMY_SHOOT", 35, EnemyHitPacket);
    public static readonly ACCEPT_TRADE               = new PacketType("ACCEPT_TRADE", 36, AcceptTradePacket);
    public static readonly CHANGE_GUILD_RANK          = new PacketType("CHANGE_GUILD_RANK", 37, ChangeGuildRankPacket);
    public static readonly PLAY_SOUND                 = new PacketType("PLAY_SOUND", 38, PlaySoundPacket);
    public static readonly SQUARE_HIT                 = new PacketType("SQUARE_HIT", 40, SquareHitPacket);
    public static readonly NEW_ABILITY_MESSAGE        = new PacketType("NEW_ABILITY_MESSAGE", 41, NewAbilityMessagePacket);
    public static readonly MOVE                       = new PacketType("MOVE", 42, MovePacket);
    public static readonly TEXT                       = new PacketType("TEXT", 44, TextPacket);
    public static readonly RECONNECT                  = new PacketType("RECONNECT", 45, ReconnectPacket);
    public static readonly DEATH                      = new PacketType("DEATH", 46, DeathPacket);
    public static readonly USE_PORTAL                 = new PacketType("USE_PORTAL", 47, UsePortalPacket);
    public static readonly GO_TO_QUEST_ROOM           = new PacketType("GO_TO_QUEST_ROOM", 48, GoToQuestRoomPacket);
    public static readonly ALLY_SHOOT                 = new PacketType("ALLY_SHOOT", 49, AllyShootPacket);
    public static readonly RESKIN                     = new PacketType("RESKIN", 51, ReskinPacket);
    public static readonly RESET_DAILY_QUESTS         = new PacketType("RESET_DAILY_QUESTS", 52, ResetDailyQuestsPacket);
    public static readonly INVENTORY_DROP             = new PacketType("INVENTORY_DROP", 55, InventoryDropPacket);
    public static readonly CHANGE_TRADE               = new PacketType("CHANGE_TRADE", 56, ChangeTradePacket);
    public static readonly LOAD                       = new PacketType("LOAD", 57, LoadPacket);
    public static readonly CREATE_GUILD               = new PacketType("CREATE_GUILD", 59, CreateGuildPacket);
    public static readonly SET_CONDITION              = new PacketType("SET_CONDITION", 60, SetConditionPacket);
    public static readonly CREATE                     = new PacketType("CREATE", 61, CreatePacket);
    public static readonly UPDATE                     = new PacketType("UPDATE", 62, UpdatePacket);
    public static readonly KEY_INFO_RESPONSE          = new PacketType("KEY_INFO_RESPONSE", 63, KeyInfoRequestPacket);
    public static readonly AOE                        = new PacketType("AOE", 64, AoePacket);
    public static readonly GOTO_ACK                   = new PacketType("GOTO_ACK", 65, GotoAckPacket);
    public static readonly GLOBAL_NOTIFICATION        = new PacketType("GLOBAL_NOTIFICATION", 66, GlobalNotificationPacket);
    public static readonly NOTIFICATION               = new PacketType("NOTIFICATION", 67, NotificationPacket);
    public static readonly CLIENT_STAT                = new PacketType("CLIENT_STAT", 69, ClientStatPacket);
    public static readonly TELEPORT                   = new PacketType("TELEPORT", 74, TeleportPacket);
    public static readonly DAMAGE                     = new PacketType("DAMAGE", 75, DamagePacket);
    public static readonly ACTIVE_PET                 = new PacketType("ACTIVE_PET", 76, ActivePetPacket);
    public static readonly INVITED_TO_GUILD           = new PacketType("INVITED_TO_GUILD", 77, InvitedToGuildPacket);
    public static readonly PET_YARD_UPDATE            = new PacketType("PET_YARD_UPDATE", 78, PetYardUpdatePacket);
    public static readonly PASSWORD_PROMPT            = new PacketType("PASSWORD_PROMPT", 79, PasswordPromptPacket);
    public static readonly ACCEPT_ARENA_DEATH         = new PacketType("ACCEPT_ARENA_DEATH", 80, AcceptArenaDeathPacket);
    public static readonly UPDATE_ACK                 = new PacketType("UPDATE_ACK", 81, UpdateAckPacket);
    public static readonly QUEST_OBJECT_ID            = new PacketType("QUEST_OBJECT_ID", 82, QuestObjectIdPacket);
    public static readonly PIC                        = new PacketType("PIC", 83, PicPacket);
    public static readonly HERO_LEFT                  = new PacketType("HERO_LEFT", 84, HeroLeftPacket);
    public static readonly BUY                        = new PacketType("BUY", 85, BuyPacket);
    public static readonly TRADE_START                = new PacketType("TRADE_START", 86, TradeStartPacket);
    public static readonly EVOLVED_PET_MESSAGE        = new PacketType("EVOLVED_PET_MESSAGE", 87, EvolvedPetMessagePacket);
    public static readonly TRADE_REQUESTED            = new PacketType("TRADE_REQUESTED", 88, TradeRequestedPacket);
    public static readonly AOE_ACK                    = new PacketType("AOE_ACK", 89, AoeAckPacket);
    public static readonly PLAYER_HIT                 = new PacketType("PLAYER_HIT", 90, PlayerHitPacket);
    public static readonly CANCEL_TRADE               = new PacketType("CANCEL_TRADE", 91, CancelTradePacket);
    public static readonly MAP_INFO                   = new PacketType("MAP_INFO", 92, MapInfoPacket);
    public static readonly KEY_INFO_REQUEST           = new PacketType("KEY_INFO_REQUEST", 94, KeyInfoRequestPacket);
    public static readonly INVENTORY_RESULT           = new PacketType("INVENTORY_RESULT", 95, InventoryResultPacket);
    public static readonly QUEST_REDEEM_RESPONSE      = new PacketType("QUEST_REDEEM_RESPONSE", 96, QuestRedeemResponsePacket);
    public static readonly CHOOSE_NAME                = new PacketType("CHOOSE_NAME", 97, ChooseNamePacket);
    public static readonly QUEST_FETCH_ASK            = new PacketType("QUEST_FETCH_ASK", 98, QuestFetchResponsePacket);
    public static readonly ACCOUNT_LIST               = new PacketType("ACCOUNT_LIST", 99, AccountListPacket);
    public static readonly CREATE_SUCCESS             = new PacketType("CREATE_SUCCESS", 101, CreateSuccessPacket);
    public static readonly CHECK_CREDITS              = new PacketType("CHECK_CREDITS", 102, CheckCreditsPacket);
    public static readonly GROUND_DAMAGE              = new PacketType("GROUND_DAMAGE", 103, GroundDamagePacket);
    public static readonly GUILD_INVITE               = new PacketType("GUILD_INVITE", 104, GuildInvitePacket);
    public static readonly ESCAPE                     = new PacketType("ESCAPE", 105, EscapePacket);
    public static readonly FILE                       = new PacketType("FILE", 106, FilePacket);
    public static readonly RESKIN_UNLOCK              = new PacketType("RESKIN_UNLOCK", 107, ReskinUnlockPacket);
    public static readonly NEW_CHARACTER_INFORMATION  = new PacketType("NEW_CHARACTER_INFORMATION", 108, NewCharacterInformationPacket);
    public static readonly QUEUE_MESSAGE              = new PacketType("QUEUE_MESSAGE", 112, QueueMessagePacket);
    public static readonly EXALTATION_BONUS_CHANGED   = new PacketType("EXALTATION_BONUS_CHANGED", 114, ExaltationBonusChangedPacket);
    public static readonly VAULT_CONTENT              = new PacketType("VAULT_CONTENT", 117, VaultContentPacket);
    public static readonly FORGE_UNLOCKED_BLUEPRINTS  = new PacketType("FORGE_UNLOCKED_BLUEPRINTS", 120, ForgeUnlockedBlueprintsPacket);

    private constructor(
        public readonly name: string,
        public readonly id: number,
        public readonly type: new () => Packet
    ) {
        packetIds.set(id, this);
    }

    public static get(id: number): PacketType | undefined {
        return packetIds.get(id);
    }

    private toString(): string {
        return this.name;
    }
}