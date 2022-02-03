import { Packet, PacketType, Writer, Reader } from "../..";

/**
 * > Unknown.
 */
export class SquareHitPacket implements Packet {

    readonly type = PacketType.SQUARE_HIT;

    /**
     * The current client time.
     */
    time: number;
    
    /**
     * > Unknown.
     */
    bulletId: number;
    
    /**
     * > Unknown.
     */
    objectID: number;
    
    constructor() {
        this.time = 0;
        this.bulletId = 0;
        this.objectID = 0;
    }

    write(writer: Writer): void {
        writer.writeInt32(this.time);
        writer.writeByte(this.bulletId);
        writer.writeInt32(this.objectID);
    }

    read(reader: Reader): void {
        this.time = reader.readInt32();
        this.bulletId = reader.readByte();
        this.objectID = reader.readInt32();
    }
}
