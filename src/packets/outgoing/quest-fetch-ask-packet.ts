import { Packet, PacketType } from "../..";

/**
 * Sent to request the latest quests.
 */
export class QuestFetchAskPacket implements Packet {

    readonly type = PacketType.QUEST_FETCH_ASK;

    write(): void {
        //
    }

    read(): void {
        //
    }
}
