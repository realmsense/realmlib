import { Packet, PacketType, TradeResult, Reader, Writer } from "../../..";

/**
 * Received when the active trade has completed, regardless of whether
 * it was accepted or cancelled.
 */
export class TradeDonePacket implements Packet {

    readonly type = PacketType.TRADE_DONE;

    /**
     * The result of the trade.
     */
    code: TradeResult;
    /**
     * > Unknown.
     */
    description: string;
    
    constructor() {
        this.code = 0;
        this.description = "";
    }

    read(reader: Reader): void {
        this.code = reader.readInt32();
        this.description = reader.readString();
    }

    write(writer: Writer): void {
        writer.writeInt32(this.code);
        writer.writeString(this.description);
    }
}
