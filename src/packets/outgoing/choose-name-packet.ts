import { Packet, PacketType, Writer, Reader } from "../..";

/**
 * Sent to change the client"s account name.
 */
export class ChooseNamePacket implements Packet {

    readonly type = PacketType.CHOOSE_NAME;

    /**
     * The name to change the account"s name to.
     */
    name: string;
    
    constructor() {
        this.name = "";
    }

    write(writer: Writer): void {
        writer.writeString(this.name);
    }

    read(reader: Reader): void {
        this.name = reader.readString();
    }
}
