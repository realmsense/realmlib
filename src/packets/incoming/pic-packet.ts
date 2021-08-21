import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * A packet which contains a bitmap image.
 */
export class PicPacket implements Packet {

    readonly type = PacketType.PIC;

    /**
     * The width of the image.
     */
    width: number;
    /**
     * The height of the image.
     */
    height: number;
    /**
     * The bitmap data of the image.
     */
    bitmapData: number[];
    
    constructor() {
        this.width = 0;
        this.height = 0;
        this.bitmapData = [];
    }

    read(reader: Reader): void {
        this.width = reader.readInt32();
        this.height = reader.readInt32();
        this.bitmapData = reader.readBytes(this.width * this.height * 4);
    }

    write(writer: Writer): void {
        writer.writeInt32(this.width);
        writer.writeInt32(this.height);
        writer.writeByteArray(this.bitmapData);
    }
}
