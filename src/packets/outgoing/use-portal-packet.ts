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
