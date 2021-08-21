import { Packet, PacketType, Writer, Reader } from "../..";

/**
 * Sent to activate a new skin for the current character.
 */
export class ReskinPacket implements Packet {

    readonly type = PacketType.RESKIN;

    /**
     * The id of the skin to activate.
     */
    skinId: number;
    
    constructor() {
        this.skinId = 0;
    }

    write(writer: Writer): void {
        writer.writeInt32(this.skinId);
    }

    read(reader: Reader): void {
        this.skinId = reader.readInt32();
    }
}
