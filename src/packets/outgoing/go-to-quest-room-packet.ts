import { Packet, PacketType } from "../..";


/**
 * Sent to prompt the server to send a `ReconnectPacket` which
 * contains the reconnect information for the Quest Room.
 */
export class GoToQuestRoomPacket implements Packet {

    readonly type = PacketType.GO_TO_QUEST_ROOM;
    
    write(): void {
        //
    }

    read(): void {
        //
    }
}
