import { PacketMap } from "../../../models/packet-map";
import { Packet } from "../../../models/packet";
import { Reader } from "../../../reader";
import { Writer } from "../../../writer";

/**
 * Sent to accept the current active trade.
 */
export class AcceptTradePacket implements Packet {

    readonly id = PacketMap.ACCEPT_TRADE

    //#region packet-specific members
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
    //#endregion

    constructor() {
        this.clientOffer = [];
        this.partnerOffer = [];
    }

    write(writer: Writer): void {
        writer.writeInt16(this.clientOffer.length);
        for (const slot of this.clientOffer) {
            writer.writeBoolean(slot);
        }
        writer.writeInt16(this.partnerOffer.length);
        for (const slot of this.partnerOffer) {
            writer.writeBoolean(slot);
        }
    }

    read(reader: Reader): void {
        this.clientOffer = new Array(reader.readInt16());
        for (let i = 0; i < this.clientOffer.length; i++) {
            this.clientOffer[i] = reader.readBoolean();
        }
        this.partnerOffer = new Array(reader.readInt16());
        for (let i = 0; i < this.partnerOffer.length; i++) {
            this.partnerOffer[i] = reader.readBoolean();
        }
    }
}
