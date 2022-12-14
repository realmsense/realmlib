import { Packet, PacketType, Reader, Writer } from "../../..";

/**
 * Received when the active trade is accepted.
 */
export class TradeAcceptedPacket implements Packet {

    readonly type = PacketType.TRADE_ACCEPTED;

    /**
     * A description of which items in the client"s inventory are selected.
     * Items 0-3 are the hotbar items, and 4-12 are the 8 inventory slots.
     *
     * If a value is `true`, then the item is selected.
     */
    clientOffer: boolean[];
    /**
     * A description of which items in the trade partner"s inventory are selected.
     * Items 0-3 are the hotbar items, and 4-12 are the 8 inventory slots.
     *
     * If a value is `true`, then the item is selected.
     */
    partnerOffer: boolean[];
    
    constructor() {
        this.clientOffer = [];
        this.partnerOffer = [];
    }

    read(reader: Reader): void {
        const clientOfferLen = reader.readInt16();
        this.clientOffer = new Array<boolean>(clientOfferLen);
        for (let i = 0; i < clientOfferLen; i++) {
            this.clientOffer[i] = reader.readBoolean();
        }
        const partnerOfferLen = reader.readInt16();
        this.partnerOffer = new Array<boolean>(partnerOfferLen);
        for (let i = 0; i < partnerOfferLen; i++) {
            this.partnerOffer[i] = reader.readBoolean();
        }
    }

    write(writer: Writer): void {
        writer.writeInt16(this.clientOffer.length);
        for (const offer of this.clientOffer) {
            writer.writeBoolean(offer);
        }
        writer.writeInt16(this.partnerOffer.length);
        for (const offer of this.partnerOffer) {
            writer.writeBoolean(offer);
        }
    }
}
