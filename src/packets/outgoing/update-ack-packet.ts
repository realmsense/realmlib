import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";

/**
 * Sent to acknowledge an `UpdatePacket`.
 * Class: `ELDCHOHIMNN`
 */
export class UpdateAckPacket implements Packet {

    readonly id = PacketMap.UPDATE_ACK

    write(): void {
        //
    }

    read(): void {
        //
    }
}
