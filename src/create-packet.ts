import { PacketMap } from './models/packet-map';
import { Packet } from './packet';

import * as IncomingPackets from './packets/incoming';
import * as OutgoingPackets from './packets/outgoing';

/**
 * Creates the correct packet object for the given type.
 * @param type The type of packet to create.
 * @throws {Error} if the packet cannot be created.
 */
export function createPacket(type: string): Packet {
  
  if (typeof type !== 'string') {
    throw new TypeError(`Parameter "type" must be a string, not ${typeof type}`);
  }

  if (PacketMap[type] == undefined) {
    throw new Error(`Parameter "type" must be a valid packet type, not "${type}"`);
  }

  switch (PacketMap[type]) {
    case PacketMap.FAILURE:
      return new IncomingPackets.FailurePacket();
    case PacketMap.LOAD:
      return new OutgoingPackets.LoadPacket();
    case PacketMap.QUEST_REDEEM_RESPONSE:
      return new IncomingPackets.QuestRedeemResponsePacket();
    case PacketMap.TRADEACCEPTED:
      return new IncomingPackets.TradeAcceptedPacket();
    case PacketMap.GOTOACK:
      return new OutgoingPackets.GotoAckPacket();
    case PacketMap.PET_CHANGE_FORM_MSG:
      return new OutgoingPackets.ReskinPetPacket();
    case PacketMap.GUILDREMOVE:
      return new OutgoingPackets.GuildRemovePacket();
    case PacketMap.TRADEDONE:
      return new IncomingPackets.TradeDonePacket();
    case PacketMap.HELLO:
      return new OutgoingPackets.HelloPacket();
    case PacketMap.MOVE:
      return new OutgoingPackets.MovePacket();
    case PacketMap.SETCONDITION:
      return new OutgoingPackets.SetConditionPacket();
    case PacketMap.ACTIVEPETUPDATE:
      return new IncomingPackets.ActivePetPacket();
    case PacketMap.PONG:
      return new OutgoingPackets.PongPacket();
    case PacketMap.CANCELTRADE:
      return new OutgoingPackets.CancelTradePacket();
    case PacketMap.OTHERHIT:
      return new OutgoingPackets.OtherHitPacket();
    case PacketMap.GLOBAL_NOTIFICATION:
      return new IncomingPackets.GlobalNotificationPacket();
    case PacketMap.TRADECHANGED:
      return new IncomingPackets.TradeChangedPacket();
    case PacketMap.PETYARDUPDATE:
      return new IncomingPackets.PetYardUpdate();
    case PacketMap.DAMAGE:
      return new IncomingPackets.DamagePacket();
    case PacketMap.CREATE_SUCCESS:
      return new IncomingPackets.CreateSuccessPacket();
    case PacketMap.QUEST_FETCH_ASK:
      return new OutgoingPackets.QuestFetchAskPacket();
    case PacketMap.TELEPORT:
      return new OutgoingPackets.TeleportPacket();
    case PacketMap.EVOLVE_PET:
      return new IncomingPackets.EvolvedPetMessage();
    case PacketMap.UPDATEACK:
      return new OutgoingPackets.UpdateAckPacket();
    case PacketMap.UPDATE:
      return new IncomingPackets.UpdatePacket();
    case PacketMap.INVITEDTOGUILD:
      return new IncomingPackets.InvitedToGuildPacket();
    case PacketMap.USEITEM:
      return new OutgoingPackets.UseItemPacket();
    case PacketMap.TRADESTART:
      return new IncomingPackets.TradeStartPacket();
    case PacketMap.CLAIM_LOGIN_REWARD_MSG:
      return new OutgoingPackets.ClaimDailyRewardMessage();
    case PacketMap.SHOWEFFECT:
      return new IncomingPackets.ShowEffectPacket();
    case PacketMap.DEATH:
      return new IncomingPackets.DeathPacket();
    case PacketMap.RESKIN:
      return new OutgoingPackets.ReskinPacket();
    case PacketMap.PLAYERTEXT:
      return new OutgoingPackets.PlayerTextPacket();
    case PacketMap.DELETE_PET:
      return new IncomingPackets.DeletePetMessage();
    case PacketMap.USEPORTAL:
      return new OutgoingPackets.UsePortalPacket();
    case PacketMap.KEY_INFO_RESPONSE:
      return new IncomingPackets.KeyInfoResponsePacket();
    case PacketMap.ACCEPTTRADE:
      return new OutgoingPackets.AcceptTradePacket();
    case PacketMap.RECONNECT:
      return new IncomingPackets.ReconnectPacket();
    case PacketMap.BUYRESULT:
      return new IncomingPackets.BuyResultPacket();
    case PacketMap.REQUESTTRADE:
      return new OutgoingPackets.RequestTradePacket();
    case PacketMap.PETUPGRADEREQUEST:
      return new OutgoingPackets.PetUpgradeRequestPacket();
    case PacketMap.SHOOTACK:
      return new OutgoingPackets.ShootAckPacket();
    case PacketMap.PLAYERHIT:
      return new OutgoingPackets.PlayerHitPacket();
    case PacketMap.ACTIVE_PET_UPDATE_REQUEST:
      return new OutgoingPackets.ActivePetUpdateRequestPacket();
    case PacketMap.PLAYSOUND:
      return new IncomingPackets.PlaySoundPacket();
    case PacketMap.PLAYERSHOOT:
      return new OutgoingPackets.PlayerShootPacket();
    case PacketMap.ESCAPE:
      return new OutgoingPackets.EscapePacket();
    case PacketMap.GUILDRESULT:
      return new IncomingPackets.GuildResultPacket();
    case PacketMap.NOTIFICATION:
      return new IncomingPackets.NotificationPacket();
    case PacketMap.VERIFY_EMAIL:
      return new IncomingPackets.VerifyEmailPacket();
    case PacketMap.GOTO:
      return new IncomingPackets.GotoPacket();
    case PacketMap.MAPINFO:
      return new IncomingPackets.MapInfoPacket();
    case PacketMap.INVDROP:
      return new OutgoingPackets.InvDropPacket();
    case PacketMap.ALLYSHOOT:
      return new IncomingPackets.AllyShootPacket();
    case PacketMap.SERVERPLAYERSHOOT:
      return new IncomingPackets.ServerPlayerShootPacket();
    case PacketMap.PASSWORD_PROMPT:
      return new IncomingPackets.PasswordPromptPacket();
    case PacketMap.FILE:
      return new IncomingPackets.FilePacket();
    case PacketMap.KEY_INFO_REQUEST:
      return new OutgoingPackets.KeyInfoRequestPacket();
    case PacketMap.QUEST_ROOM_MSG:
      return new OutgoingPackets.GoToQuestRoomPacket();
    case PacketMap.CHECKCREDITS:
      return new OutgoingPackets.CheckCreditsPacket();
    case PacketMap.ENEMYHIT:
      return new OutgoingPackets.EnemyHitPacket();
    case PacketMap.CREATE:
      return new OutgoingPackets.CreatePacket();
    case PacketMap.GUILDINVITE:
      return new OutgoingPackets.GuildInvitePacket();
    case PacketMap.PING:
      return new IncomingPackets.PingPacket();
    case PacketMap.EDITACCOUNTLIST:
      return new OutgoingPackets.EditAccountListPacket();
    case PacketMap.AOE:
      return new IncomingPackets.AoePacket();
    case PacketMap.ACCOUNTLIST:
      return new IncomingPackets.AccountListPacket();
    case PacketMap.BUY:
      return new OutgoingPackets.BuyPacket();
    case PacketMap.INVSWAP:
      return new OutgoingPackets.InvSwapPacket();
    case PacketMap.AOEACK:
      return new OutgoingPackets.AoeAckPacket();
    case PacketMap.PIC:
      return new IncomingPackets.PicPacket();
    case PacketMap.INVRESULT:
      return new IncomingPackets.InvResultPacket();
    case PacketMap.LOGIN_REWARD_MSG:
      return new IncomingPackets.ClaimDailyRewardResponse();
    case PacketMap.CHANGETRADE:
      return new OutgoingPackets.ChangeTradePacket();
    case PacketMap.TEXT:
      return new IncomingPackets.TextPacket();
    case PacketMap.QUESTOBJID:
      return new IncomingPackets.QuestObjectIdPacket();
    case PacketMap.QUEST_FETCH_RESPONSE:
      return new IncomingPackets.QuestFetchResponsePacket();
    case PacketMap.TRADEREQUESTED:
      return new IncomingPackets.TradeRequestedPacket();
    case PacketMap.HATCH_PET:
      return new IncomingPackets.HatchPetMessage();
    case PacketMap.GROUNDDAMAGE:
      return new OutgoingPackets.GroundDamagePacket();
    case PacketMap.ENEMYSHOOT:
      return new IncomingPackets.EnemyShootPacket();
    case PacketMap.CHOOSENAME:
      return new OutgoingPackets.ChooseNamePacket();
    case PacketMap.CLIENTSTAT:
      return new IncomingPackets.ClientStatPacket();
    case PacketMap.RESKIN_UNLOCK:
      return new IncomingPackets.ReskinUnlockPacket();
    case PacketMap.NAMERESULT:
      return new IncomingPackets.NameResultPacket();
    case PacketMap.JOINGUILD:
      return new OutgoingPackets.JoinGuildPacket();
    case PacketMap.NEWTICK:
      return new IncomingPackets.NewTickPacket();
    case PacketMap.SQUAREHIT:
      return new OutgoingPackets.SquareHitPacket();
    case PacketMap.CHANGEGUILDRANK:
      return new OutgoingPackets.ChangeGuildRankPacket();
    case PacketMap.NEW_ABILITY:
      return new IncomingPackets.NewAbilityMessage();
    case PacketMap.CREATEGUILD:
      return new OutgoingPackets.CreateGuildPacket();
    case PacketMap.PET_CHANGE_SKIN_MSG:
      return new OutgoingPackets.ChangePetSkinPacket();
    case PacketMap.REALM_HERO_LEFT_MSG:
      return new IncomingPackets.RealmHeroesLeftPacket();
    case PacketMap.RESET_DAILY_QUESTS:
      return new OutgoingPackets.ResetDailyQuestsPacket();
    case PacketMap.NEW_CHARACTER_INFORMATION:
      return new IncomingPackets.NewCharacterInfoPacket();
    case PacketMap.QUEUE_INFO:
      return new IncomingPackets.QueueInfoPacket();
    case PacketMap.EXALTATION_UPDATE:
      return new IncomingPackets.ExaltationUpdatePacket();
    case PacketMap.VAULT_UPDATE:
      return new IncomingPackets.VaultUpdatePacket();
  }
  throw new Error(`Unknown packet type: ${type}`);
}
