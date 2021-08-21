import { Writer, Reader, PacketType } from "../..";
import { Packet } from "../../models/packet";

/**
 * Sent to change the guild rank of a member in the player"s guild.
 */
export class ChangeGuildRankPacket implements Packet {

    readonly type = PacketType.CHANGE_GUILD_RANK;

    /**
     * The name of the player whose rank will change.
     */
    name: string;
    /**
     * The new rank of the player.
     */
    guildRank: number;
    
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
