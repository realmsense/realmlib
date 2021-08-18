import { PacketMap } from "../../../models/packet-map";
import { Packet } from "../../../models/packet";

/**
 * Sent to cancel the current active trade.
 */
export class CancelTradePacket implements Packet {

    readonly id = PacketMap.CANCEL_TRADE

    //#region packet-specific members

    //#endregion

    write(): void {
        //
    }

    read(): void {
        //
    }
}
