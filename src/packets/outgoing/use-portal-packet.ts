import { Packet, PacketType, Writer, Reader } from "../..";

/**
 * Sent to prompt the server to send a `ReconnectPacket` which
 * contains the reconnect information for the used portal.
 */
export class UsePortalPacket implements Packet {

    readonly type = PacketType.USE_PORTAL;

    /**
     * The object id of the portal to enter.
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
