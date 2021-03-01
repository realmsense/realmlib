import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Sent to remove a player from the client"s current guild.
 */
export class GuildRemovePacket implements Packet {

    readonly id = PacketMap.GUILD_REMOVE

    //#region packet-specific members
    /**
     * The name of the player to remove.
     */
    name: string;
    //#endregion

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
