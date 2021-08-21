import { Packet, PacketType, Writer, Reader } from "../..";

/**
 * Sent to invite a player to the client"s current guild.
 */
export class GuildInvitePacket implements Packet {

    readonly type = PacketType.GUILD_INVITE;

    /**
     * The name of the player to invite.
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
