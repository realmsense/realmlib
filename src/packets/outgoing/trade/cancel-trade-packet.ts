import { Packet, PacketType } from "../../..";

/**
 * Sent to cancel the current active trade.
 */
export class CancelTradePacket implements Packet {

    readonly type = PacketType.CANCEL_TRADE;
    
    write(): void {
        //
    }

    read(): void {
        //
    }
}
