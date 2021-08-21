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
    objectId: number;
    
    constructor() {
        this.time = 0;
        this.bulletId = 0;
        this.objectId = 0;
    }

    write(writer: Writer): void {
        writer.writeInt32(this.time);
        writer.writeByte(this.bulletId);
        writer.writeInt32(this.objectId);
    }

    read(reader: Reader): void {
        this.time = reader.readInt32();
        this.bulletId = reader.readByte();
        this.objectId = reader.readInt32();
    }
}
