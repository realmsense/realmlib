import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Received when the player is invited to a guild.
 */
export class InvitedToGuildPacket implements Packet {

    readonly id = PacketMap.INVITEDTOGUILD

    //#region packet-specific members
    /**
     * The name of the player who sent the invite.
     */
    name: string;
    /**
     * The name of the guild which the invite is for.
     */
    guildName: string;
    //#endregion

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
