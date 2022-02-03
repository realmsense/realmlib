import { Packet, PacketType, Writer, Reader } from "../..";

/**
 * Sent to buy an item.
 */
export class BuyPacket implements Packet {

    readonly type = PacketType.BUY;

    /**
     * The object id of the item being purchased.
     */
    objectID: number;
    /**
     * The number of items being purchased.
     */
    quantity: number;
    
    constructor() {
        this.objectID = 0;
        this.quantity = 0;
    }

    write(writer: Writer): void {
        writer.writeInt32(this.objectID);
        writer.writeInt32(this.quantity);
    }

    read(reader: Reader): void {
        this.objectID = reader.readInt32();
        this.quantity = reader.readInt32();
    }
}
