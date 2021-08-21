import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * Received occasionally by the server to prompt a response from the client.
 */
export class PingPacket implements Packet {

    readonly type = PacketType.PING;

    /**
     * A nonce value which is expected to be present in the reply.
     */
    serial: number;
    
    constructor() {
        this.serial = 0;
    }

    read(reader: Reader): void {
        this.serial = reader.readInt32();
    }

    write(writer: Writer): void {
        writer.writeInt32(this.serial);
    }
}
