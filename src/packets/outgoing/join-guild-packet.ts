import { Packet, PacketType, Writer, Reader } from "../..";

/**
 * Sent to accept a pending guild invite.
 */
export class JoinGuildPacket implements Packet {

    readonly type = PacketType.JOIN_GUILD;

    /**
     * The name of the guild for which there is a pending invite.
     */
    guildName: string;
    
    constructor() {
        this.guildName = "";
    }

    write(writer: Writer): void {
        writer.writeString(this.guildName);
    }

    read(reader: Reader): void {
        this.guildName = reader.readString();
    }
}
