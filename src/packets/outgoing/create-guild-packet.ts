import { Packet, PacketType, Writer, Reader } from "../..";

/**
 * Sent to create a new guild.
 */
export class CreateGuildPacket implements Packet {

    readonly type = PacketType.CREATE_GUILD;

    /**
     * The name of the guild being created.
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
