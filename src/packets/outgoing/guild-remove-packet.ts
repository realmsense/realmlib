import { Packet, PacketType, Writer, Reader } from "../..";

/**
 * Sent to remove a player from the client"s current guild.
 */
export class GuildRemovePacket implements Packet {

    readonly type = PacketType.GUILD_REMOVE;

    /**
     * The name of the player to remove.
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
