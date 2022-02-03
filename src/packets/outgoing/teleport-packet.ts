import { Packet, PacketType, Writer, Reader } from "../..";

/**
 * Sent to teleport to another player.
 */
export class TeleportPacket implements Packet {

    readonly type = PacketType.TELEPORT;

    /**
     * The object id of the player to teleport to.
     */
    objectID: number;
    
    constructor() {
        this.objectID = 0;
    }

    write(writer: Writer): void {
        writer.writeInt32(this.objectID);
    }

    read(reader: Reader): void {
        this.objectID = reader.readInt32();
    }
}
