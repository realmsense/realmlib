import { Packet, PacketType } from "../..";

/**
 * Sent to acknowledge an `UpdatePacket`.
 * Class: `ELDCHOHIMNN`
 */
export class UpdateAckPacket implements Packet {

    readonly type = PacketType.UPDATE_ACK;

    write(): void {
        //
    }

    read(): void {
        //
    }
}
