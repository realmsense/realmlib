import { PacketType } from "./models";
import { Packet } from "./packet";

import * as IncomingPackets from "./packets/incoming";
import * as OutgoingPackets from "./packets/outgoing";

/**
 * Creates the correct packet object for the given type.
 * @param type The type of packet to create.
 * @throws {Error} if the packet cannot be created.
 */
export function createPacket(type: string): Packet {

    if (typeof type !== "string") {
        throw new TypeError(`Parameter "type" must be a string, not ${typeof type}`);
    }

    if (PacketType[type] === undefined) {
        throw new Error(`Parameter "type" must be a valid packet type, not "${type}"`);
    }

    switch (type) {
        case PacketType.FAILURE:
            return new IncomingPackets.FailurePacket();
        case PacketType.HELLO:
            return new OutgoingPackets.HelloPacket();
        case PacketType.CLAIM_DAILY_REWARD_MESSAGE:
            return new OutgoingPackets.ClaimDailyRewardMessagePacket();
        case PacketType.DELETE_PET_MESSAGE:
            return new IncomingPackets.DeletePetMessagePacket();
        case PacketType.REQUEST_TRADE:
            return new OutgoingPackets.RequestTradePacket();
        case PacketType.QUEST_FETCH_RESPONSE:
            return new IncomingPackets.QuestFetchResponsePacket();
        case PacketType.JOIN_GUILD:
            return new OutgoingPackets.JoinGuildPacket();
        case PacketType.PING:
            return new IncomingPackets.PingPacket();
        case PacketType.NEW_TICK:
            return new IncomingPackets.NewTickPacket();
        case PacketType.PLAYER_TEXT:
            return new OutgoingPackets.PlayerTextPacket();
        case PacketType.USE_ITEM:
            return new OutgoingPackets.UseItemPacket();
        case PacketType.SERVER_PLAYER_SHOOT:
            return new IncomingPackets.ServerPlayerShootPacket();
        case PacketType.SHOW_EFFECT:
            return new IncomingPackets.ShowEffectPacket();
        case PacketType.TRADE_ACCEPTED:
            return new IncomingPackets.TradeAcceptedPacket();
        case PacketType.GUILD_REMOVE:
            return new OutgoingPackets.GuildRemovePacket();
        case PacketType.PET_UPGRADE_REQUEST:
            return new OutgoingPackets.PetUpgradeRequestPacket();
        case PacketType.GOTO:
            return new IncomingPackets.GotoPacket();
        case PacketType.INVENTORY_SWAP:
            return new OutgoingPackets.InventorySwapPacket();
        case PacketType.OTHER_HIT:
            return new OutgoingPackets.OtherHitPacket();
        case PacketType.NAME_RESULT:
            return new IncomingPackets.NameResultPacket();
        case PacketType.BUY_RESULT:
            return new IncomingPackets.BuyResultPacket();
        case PacketType.HATCH_PET:
            return new IncomingPackets.HatchPetPacket();
        case PacketType.ACTIVE_PET_UPDATE_REQUEST:
            return new OutgoingPackets.ActivePetUpdateRequestPacket();
        case PacketType.ENEMY_HIT:
            return new OutgoingPackets.EnemyHitPacket();
        case PacketType.GUILD_RESULT:
            return new IncomingPackets.GuildResultPacket();
        case PacketType.EDIT_ACCOUNT_LIST:
            return new OutgoingPackets.EditAccountListPacket();
        case PacketType.TRADE_CHANGED:
            return new IncomingPackets.TradeChangedPacket();
        case PacketType.PLAYER_SHOOT:
            return new OutgoingPackets.PlayerShootPacket();
        case PacketType.PONG:
            return new OutgoingPackets.PongPacket();
        case PacketType.CHANGE_PET_SKIN:
            return new OutgoingPackets.ChangePetSkinPacket();
        case PacketType.TRADE_DONE:
            return new IncomingPackets.TradeDonePacket();
        case PacketType.ENEMY_SHOOT:
            return new IncomingPackets.EnemyShootPacket();
        case PacketType.ACCEPT_TRADE:
            return new OutgoingPackets.AcceptTradePacket();
        case PacketType.CHANGE_GUILD_RANK:
            return new OutgoingPackets.ChangeGuildRankPacket();
        case PacketType.PLAY_SOUND:
            return new IncomingPackets.PlaySoundPacket();
        case PacketType.SQUARE_HIT:
            return new OutgoingPackets.SquareHitPacket();
        case PacketType.NEW_ABILITY_MESSAGE:
            return new IncomingPackets.NewAbilityMessagePacket();
        case PacketType.MOVE:
            return new OutgoingPackets.MovePacket();
        case PacketType.TEXT:
            return new IncomingPackets.TextPacket();
        case PacketType.RECONNECT:
            return new IncomingPackets.ReconnectPacket();
        case PacketType.DEATH:
            return new IncomingPackets.DeathPacket();
        case PacketType.USE_PORTAL:
            return new OutgoingPackets.UsePortalPacket();
        case PacketType.GO_TO_QUEST_ROOM:
            return new OutgoingPackets.GoToQuestRoomPacket();
        case PacketType.ALLY_SHOOT:
            return new IncomingPackets.AllyShootPacket();
        case PacketType.RESKIN:
            return new OutgoingPackets.ReskinPacket();
        case PacketType.RESET_DAILY_QUESTS:
            return new OutgoingPackets.ResetDailyQuestsPacket();
        case PacketType.INVENTORY_DROP:
            return new OutgoingPackets.InventoryDropPacket();
        case PacketType.CHANGE_TRADE:
            return new OutgoingPackets.ChangeTradePacket();
        case PacketType.LOAD:
            return new OutgoingPackets.LoadPacket();
        case PacketType.CREATE_GUILD:
            return new OutgoingPackets.CreateGuildPacket();
        case PacketType.SET_CONDITION:
            return new OutgoingPackets.SetConditionPacket();
        case PacketType.CREATE:
            return new OutgoingPackets.CreatePacket();
        case PacketType.UPDATE:
            return new IncomingPackets.UpdatePacket();
        case PacketType.KEY_INFO_RESPONSE:
            return new IncomingPackets.KeyInfoResponsePacket();
        case PacketType.AOE:
            return new IncomingPackets.AoePacket();
        case PacketType.GOTO_ACK:
            return new OutgoingPackets.GotoAckPacket();
        case PacketType.GLOBAL_NOTIFICATION:
            return new IncomingPackets.GlobalNotificationPacket();
        case PacketType.NOTIFICATION:
            return new IncomingPackets.NotificationPacket();
        case PacketType.CLIENT_STAT:
            return new IncomingPackets.ClientStatPacket();
        case PacketType.TELEPORT:
            return new OutgoingPackets.TeleportPacket();
        case PacketType.DAMAGE:
            return new IncomingPackets.DamagePacket();
        case PacketType.ACTIVE_PET:
            return new IncomingPackets.ActivePetPacket();
        case PacketType.INVITED_TO_GUILD:
            return new IncomingPackets.InvitedToGuildPacket();
        case PacketType.PET_YARD_UPDATE:
            return new IncomingPackets.PetYardUpdatePacket();
        case PacketType.PASSWORD_PROMPT:
            return new IncomingPackets.PasswordPromptPacket();
        case PacketType.UPDATE_ACK:
            return new OutgoingPackets.UpdateAckPacket();
        case PacketType.QUEST_OBJECT_ID:
            return new IncomingPackets.QuestObjectIdPacket();
        case PacketType.PIC:
            return new IncomingPackets.PicPacket();
        case PacketType.HERO_LEFT:
            return new IncomingPackets.HeroLeftPacket();
        case PacketType.BUY:
            return new OutgoingPackets.BuyPacket();
        case PacketType.TRADE_START:
            return new IncomingPackets.TradeStartPacket();
        case PacketType.EVOLVED_PET_MESSAGE:
            return new IncomingPackets.EvolvedPetMessagePacket();
        case PacketType.TRADE_REQUESTED:
            return new IncomingPackets.TradeRequestedPacket();
        case PacketType.AOE_ACK:
            return new OutgoingPackets.AoeAckPacket();
        case PacketType.PLAYER_HIT:
            return new OutgoingPackets.PlayerHitPacket();
        case PacketType.CANCEL_TRADE:
            return new OutgoingPackets.CancelTradePacket();
        case PacketType.MAP_INFO:
            return new IncomingPackets.MapInfoPacket();
        case PacketType.KEY_INFO_REQUEST:
            return new OutgoingPackets.KeyInfoRequestPacket();
        case PacketType.INVENTORY_RESULT:
            return new IncomingPackets.InventoryResultPacket();
        case PacketType.QUEST_REDEEM_RESPONSE:
            return new IncomingPackets.QuestRedeemResponsePacket();
        case PacketType.CHOOSE_NAME:
            return new OutgoingPackets.ChooseNamePacket();
        case PacketType.QUEST_FETCH_ASK:
            return new OutgoingPackets.QuestFetchAskPacket();
        case PacketType.ACCOUNT_LIST:
            return new IncomingPackets.AccountListPacket();
        case PacketType.CREATE_SUCCESS:
            return new IncomingPackets.CreateSuccessPacket();
        case PacketType.CHECK_CREDITS:
            return new OutgoingPackets.CheckCreditsPacket();
        case PacketType.GROUND_DAMAGE:
            return new OutgoingPackets.GroundDamagePacket();
        case PacketType.GUILD_INVITE:
            return new OutgoingPackets.GuildInvitePacket();
        case PacketType.ESCAPE:
            return new OutgoingPackets.EscapePacket();
        case PacketType.FILE:
            return new IncomingPackets.FilePacket();
        case PacketType.RESKIN_UNLOCK:
            return new IncomingPackets.ReskinUnlockPacket();
        case PacketType.NEW_CHARACTER_INFORMATION:
            return new IncomingPackets.NewCharacterInformationPacket();
        case PacketType.QUEUE_MESSAGE:
            return new IncomingPackets.QueueMessagePacket();
        case PacketType.EXALTATION_BONUS_CHANGED:
            return new IncomingPackets.ExaltationBonusChangedPacket();
        case PacketType.VAULT_CONTENT:
            return new IncomingPackets.VaultContentPacket();
        case PacketType.FORGE_UNLOCKED_BLUEPRINTS:
            return new IncomingPackets.ForgeUnlockedBlueprintsPacket();
    }

    throw new Error(`Unknown packet type: ${type}`);
}
