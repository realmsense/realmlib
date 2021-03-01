import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";

/**
 * Sent to acknowledge an `UpdatePacket`.
 */
export class UpdateAckPacket implements Packet {

    readonly id = PacketMap.UPDATE_ACK

    //#region packet-specific members

    //#endregion

    write(): void {
        //
    }

    read(): void {
        //
    }
}
