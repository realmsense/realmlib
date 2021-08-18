import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../models/packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Sent to change the guild rank of a member in the player"s guild.
 */
export class ChangeGuildRankPacket implements Packet {

    readonly id = PacketMap.CHANGE_GUILD_RANK

    //#region packet-specific members
    /**
     * The name of the player whose rank will change.
     */
    name: string;
    /**
     * The new rank of the player.
     */
    guildRank: number;
    //#endregion

    constructor() {
        this.name = "";
        this.guildRank = 0;
    }

    write(writer: Writer): void {
        writer.writeString(this.name);
        writer.writeInt32(this.guildRank);
    }

    read(reader: Reader): void {
        this.name = reader.readString();
        this.guildRank = reader.readInt32();
    }
}
