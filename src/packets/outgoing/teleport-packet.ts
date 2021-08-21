import { Packet, PacketType, Writer, Reader } from "../..";

/**
 * Sent to teleport to another player.
 */
export class TeleportPacket implements Packet {

    readonly type = PacketType.TELEPORT;

    /**
     * The object id of the player to teleport to.
     */
    objectId: number;
    
    constructor() {
        this.objectId = 0;
    }

    write(writer: Writer): void {
        writer.writeInt32(this.objectId);
    }

    read(reader: Reader): void {
        this.objectId = reader.readInt32();
    }
}
