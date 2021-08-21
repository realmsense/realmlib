import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * > Unknown.
 */
export class InventoryResultPacket implements Packet {

    readonly type = PacketType.INVENTORY_RESULT;

    /**
     * > Unknown.
     */
    result: number;
    
    constructor() {
        this.result = 0;
    }

    read(reader: Reader): void {
        this.result = reader.readInt32();
    }

    write(writer: Writer): void {
        writer.writeInt32(this.result);
    }
}
