import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";

/**
 * Sent to prompt the server to send a `ReconnectPacket` which
 * contains the reconnect information for the Quest Room.
 */
export class GoToQuestRoomPacket implements Packet {

    readonly id = PacketMap.GO_TO_QUEST_ROOM

    //#region packet-specific members

    //#endregion

    write(): void {
        //
    }

    read(): void {
        //
    }
}
