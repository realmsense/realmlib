import { Packet, PacketType, Reader, Writer } from "../../..";

/**
 * Received when the active trade is changed.
 */
export class TradeChangedPacket implements Packet {

    readonly type = PacketType.TRADE_CHANGED;

    /**
     * A description of which items in the trade partner"s inventory are selected.
     * Items 0-3 are the hotbar items, and 4-12 are the 8 inventory slots.
     *
     * If a value is `true`, then the item is selected.
     */
    offer: boolean[];
    
    constructor() {
        this.offer = [];
    }

    read(reader: Reader): void {
        const offerLen = reader.readInt16();
        this.offer = new Array<boolean>(offerLen);
        for (let i = 0; i < offerLen; i++) {
            this.offer[i] = reader.readBoolean();
        }
    }

    write(writer: Writer): void {
        writer.writeInt16(this.offer.length);
        for (const offer of this.offer) {
            writer.writeBoolean(offer);
        }
    }
}
