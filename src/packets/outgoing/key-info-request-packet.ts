import { Packet, PacketType, Writer, Reader } from "../..";

/**
 * > Unknown.
 */
export class KeyInfoRequestPacket implements Packet {

    readonly type = PacketType.KEY_INFO_REQUEST;

    /**
     * > Unknown.
     */
    itemType: number;
    
    constructor() {
        this.itemType = 0;
    }

    write(writer: Writer): void {
        writer.writeInt32(this.itemType);
    }

    read(reader: Reader): void {
        this.itemType = reader.readInt32();
    }
}
