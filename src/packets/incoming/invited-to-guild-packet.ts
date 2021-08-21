import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * Received when the player is invited to a guild.
 */
export class InvitedToGuildPacket implements Packet {

    readonly type = PacketType.INVITED_TO_GUILD;

    /**
     * The name of the player who sent the invite.
     */
    name: string;
    /**
     * The name of the guild which the invite is for.
     */
    guildName: string;
    
    constructor() {
        this.name = "";
        this.guildName = "";
    }

    read(reader: Reader): void {
        this.name = reader.readString();
        this.guildName = reader.readString();
    }

    write(writer: Writer): void {
        writer.writeString(this.name);
        writer.writeString(this.guildName);
    }
}
