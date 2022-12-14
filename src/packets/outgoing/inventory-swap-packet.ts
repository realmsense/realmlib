import { Packet, PacketType, WorldPosData, SlotObjectData, Writer, Reader } from "../..";

/**
 * Sent to swap the items of two slots.
 */
export class InventorySwapPacket implements Packet {

    readonly type = PacketType.INVENTORY_SWAP;

    /**
     * The current client time.
     */
    time: number;
    /**
     * The current client position.
     */
    position: WorldPosData;
    /**
     * The slot to swap from.
     */
    slotObject1: SlotObjectData;
    /**
     * The slot to swap to.
     */
    slotObject2: SlotObjectData;
    
    constructor() {
        this.time = 0;
        this.position = new WorldPosData();
        this.slotObject1 = new SlotObjectData();
        this.slotObject2 = new SlotObjectData();
    }

    write(writer: Writer): void {
        writer.writeInt32(this.time);
        this.position.write(writer);
        this.slotObject1.write(writer);
        this.slotObject2.write(writer);
    }

    read(reader: Reader): void {
        this.time = reader.readInt32();
        this.position.read(reader);
        this.slotObject1.read(reader);
        this.slotObject2.read(reader);
    }
}
