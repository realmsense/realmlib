import { Packet, PacketType, SlotObjectData, WorldPosData, Writer, Reader } from "../..";

/**
 * Sent to use an item, such as an ability or consumable.
 */
export class UseItemPacket implements Packet {

    readonly type = PacketType.USE_ITEM;

    /**
     * The current client time.
     */
    time: number;
    /**
     * The slot of the item being used.
     */
    slotObject: SlotObjectData;
    /**
     * The position at which the item was used.
     */
    itemUsePos: WorldPosData;
    /**
     * The type of item usage.
     */
    useType: number;
    
    constructor() {
        this.time = 0;
        this.slotObject = new SlotObjectData();
        this.itemUsePos = new WorldPosData();
        this.useType = 0;
    }

    write(writer: Writer): void {
        writer.writeInt32(this.time);
        this.slotObject.write(writer);
        this.itemUsePos.write(writer);
        writer.writeByte(this.useType);
    }

    read(reader: Reader): void {
        this.time = reader.readInt32();
        this.slotObject.read(reader);
        this.itemUsePos.read(reader);
        this.useType = reader.readByte();
    }
}
