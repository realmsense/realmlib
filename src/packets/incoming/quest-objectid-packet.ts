import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * Received to tell the player the object id of their current quest.
 */
export class QuestObjectIdPacket implements Packet {

    readonly type = PacketType.QUEST_OBJECT_ID;

    /**
     * The object id of the current quest.
     */
    objectId: number;
    
    constructor() {
        this.objectId = 0;
    }

    read(reader: Reader): void {
        this.objectId = reader.readInt32();
    }

    write(writer: Writer): void {
        writer.writeInt32(this.objectId);
    }
}
