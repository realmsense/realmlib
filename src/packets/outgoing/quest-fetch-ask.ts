import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";

/**
 * Sent to request the latest quests.
 */
export class QuestFetchAskPacket implements Packet {

  readonly id = PacketMap.QUEST_FETCH_ASK

  write(): void {
    //
  }

  read(): void {
    //
  }
}
