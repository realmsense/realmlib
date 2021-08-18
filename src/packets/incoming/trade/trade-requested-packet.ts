import { PacketMap } from "../../../models/packet-map";
import { Packet } from "../../../models/packet";
import { Reader } from "../../../reader";
import { Writer } from "../../../writer";

/**
 * Received when a trade is requested.
 */
export class TradeRequestedPacket implements Packet {

    readonly id = PacketMap.TRADE_REQUESTED

    //#region packet-specific members
    /**
     * The name of the player who requested the trade.
     */
    name: string;
    //#endregion

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
