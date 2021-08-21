import { Packet, PacketType, TradeItem, Reader, Writer } from "../../..";

/**
 * Received when a new active trade has been initiated.
 */
export class TradeStartPacket implements Packet {

    readonly type = PacketType.TRADE_START;

    /**
     * A description of the player"s inventory. Items 0-3 are the hotbar items,
     * and 4-12 are the 8 inventory slots.
     */
    clientItems: TradeItem[];
    /**
     * The trade partner"s name.
     */
    partnerName: string;
    /**
     * A description of the trade partner"s inventory. Items 0-3 are the
     * hotbar items, and 4-12 are the 8 inventory slots.
     */
    partnerItems: TradeItem[];
    
    constructor() {
        this.clientItems = [];
        this.partnerName = "";
        this.partnerItems = [];
    }

    read(reader: Reader): void {
        const clientItemsLen = reader.readInt16();
        this.clientItems = new Array(clientItemsLen);
        for (let i = 0; i < clientItemsLen; i++) {
            const item = new TradeItem();
            item.read(reader);
            this.clientItems[i] = item;
        }
        this.partnerName = reader.readString();
        const partnerItemsLen = reader.readInt16();
        this.partnerItems = new Array(partnerItemsLen);
        for (let i = 0; i < partnerItemsLen; i++) {
            const item = new TradeItem();
            item.read(reader);
            this.partnerItems[i] = item;
        }
    }

    write(writer: Writer): void {
        writer.writeInt16(this.clientItems.length);
        for (const item of this.clientItems) {
            item.write(writer);
        }
        writer.writeString(this.partnerName);
        writer.writeInt16(this.partnerItems.length);
        for (const item of this.partnerItems) {
            item.write(writer);
        }
    }
}
