import { Packet, PacketType, Writer, Reader } from "../..";

/**
 * Sent to acknowledge a `GotoPacket`.
 */
export class GotoAckPacket implements Packet {

    readonly type = PacketType.GOTO_ACK;

    /**
     * The current client time.
     */
    time: number;
    
    constructor() {
        this.time = 0;
    }

    write(writer: Writer): void {
        writer.writeInt32(this.time);
    }

    read(reader: Reader): void {
        this.time = reader.readInt32();
    }
}
