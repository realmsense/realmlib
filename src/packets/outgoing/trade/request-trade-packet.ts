import { Packet, PacketType, Writer, Reader } from "../../..";

/**
 * Sent to request a trade with a player, as well as
 * to accept a pending trade with a player.
 */
export class RequestTradePacket implements Packet {

    readonly type = PacketType.REQUEST_TRADE;

    /**
     * The name of the player to request the trade with.
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
