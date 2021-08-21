import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * > Unknown.
 */
export class QuestRedeemResponsePacket implements Packet {

    readonly type = PacketType.QUEST_REDEEM_RESPONSE;

    /**
     * > Unknown.
     */
    ok: boolean;
    /**
     * > Unknown.
     */
    message: string;
    
    constructor() {
        this.ok = false;
        this.message = "";
    }

    read(reader: Reader): void {
        this.ok = reader.readBoolean();
        this.message = reader.readString();
    }

    write(writer: Writer): void {
        writer.writeBoolean(this.ok);
        writer.writeString(this.message);
    }
}
