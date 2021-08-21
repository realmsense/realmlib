import { Packet, PacketType, Reader, Writer } from "../../..";

/**
 * Received when a trade is requested.
 */
export class TradeRequestedPacket implements Packet {

    readonly type = PacketType.TRADE_REQUESTED;

    /**
     * The name of the player who requested the trade.
     */
    name: string;
    
    constructor() {
        this.name = "";
    }

    read(reader: Reader): void {
        this.name = reader.readString();
    }

    write(writer: Writer): void {
        writer.writeString(this.name);
    }
}
