import { PacketMap } from "../../../models/packet-map";
import { Packet } from "../../../packet";

/**
 * Sent to cancel the current active trade.
 */
export class CancelTradePacket implements Packet {

    readonly id = PacketMap.CANCELTRADE

    //#region packet-specific members

    //#endregion

    write(): void {
        //
    }

    read(): void {
        //
    }
}
