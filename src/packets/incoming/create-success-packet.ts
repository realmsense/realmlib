import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * Received in response to a `CreatePacket`.
 */
export class CreateSuccessPacket implements Packet {

    readonly type = PacketType.CREATE_SUCCESS;

    /**
     * The object id of the player"s character.
     */
    objectID: number;
    /**
     * The character id of the player"s character.
     */
    charId: number;
    
    constructor() {
        this.objectID = 0;
        this.charId = 0;
    }

    read(reader: Reader): void {
        this.objectID = reader.readInt32();
        this.charId = reader.readInt32();
    }

    write(writer: Writer): void {
        writer.writeInt32(this.objectID);
        writer.writeInt32(this.charId);
    }
}
