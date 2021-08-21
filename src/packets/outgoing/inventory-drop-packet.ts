import { Packet, PacketType, SlotObjectData, Writer, Reader } from "../..";

/**
 * Sent to drop an item from the client"s inventory.
 */
export class InventoryDropPacket implements Packet {

    readonly type = PacketType.INVENTORY_DROP;

    /**
     * The slot to drop the item from.
     */
    slotObject: SlotObjectData;
    
    constructor() {
        this.slotObject = new SlotObjectData();
    }

    write(writer: Writer): void {
        this.slotObject.write(writer);
    }

    read(reader: Reader): void {
        this.slotObject.read(reader);
    }
}
