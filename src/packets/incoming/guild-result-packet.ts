import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * > Unknown.
 */
export class GuildResultPacket implements Packet {

    readonly type = PacketType.GUILD_RESULT;

    /**
     * > Unknown.
     */
    success: boolean;
    /**
     * > Unknown.
     */
    lineBuilderJSON: string;
    
    constructor() {
        this.success = false;
        this.lineBuilderJSON = "";
    }

    read(reader: Reader): void {
        this.success = reader.readBoolean();
        this.lineBuilderJSON = reader.readString();
    }

    write(writer: Writer): void {
        writer.writeBoolean(this.success);
        writer.writeString(this.lineBuilderJSON);
    }
}
