import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * > Unknown.
 */
export class KeyInfoResponsePacket implements Packet {

    readonly type = PacketType.KEY_INFO_RESPONSE;

    /**
     * > Unknown.
     */
    name: string;
    /**
     * > Unknown.
     */
    description: string;
    /**
     * > Unknown.
     */
    creator: string;
    
    constructor() {
        this.name = "";
        this.description = "";
        this.creator = "";
    }

    read(reader: Reader): void {
        this.name = reader.readString();
        this.description = reader.readString();
        this.creator = reader.readString();
    }

    write(writer: Writer): void {
        writer.writeString(this.name);
        writer.writeString(this.description);
        writer.writeString(this.creator);
    }
}
