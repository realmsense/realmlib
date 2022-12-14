import { Writer } from "../writer";
import { Reader } from "../reader";
import { DataPacket } from "../models/packet";

export class SlotObjectData implements DataPacket {

    /**
     * The object id of the entity which owns the slot.
     */
    objectID: number;
    /**
     * The index of the slot. E.g. The 4th inventory slot has the slot id `3`.
     */
    slotId: number;
    /**
     * The item id of the item in the slot, or `-1` if it is empty.
     */
    objectType: number;

    constructor() {
        this.objectID = 0;
        this.slotId = 0;
        this.objectType = 0;
    }

    read(reader: Reader): void {
        this.objectID = reader.readInt32();
        this.slotId = reader.readInt32();
        this.objectType = reader.readUInt32();
    }

    write(writer: Writer): void {
        writer.writeInt32(this.objectID);
        writer.writeInt32(this.slotId);
        writer.writeInt32(this.objectType);
    }
}
