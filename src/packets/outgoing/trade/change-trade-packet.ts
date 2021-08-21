import { Packet, PacketType, Writer, Reader } from "../../..";

/**
 * Sent to change the client"s offer in the current active trade.
 */
export class ChangeTradePacket implements Packet {

    readonly type = PacketType.CHANGE_TRADE;

    /**
     * A description of which items in the client"s inventory are selected.
     * Items 0-3 are the hotbar items, and 4-12 are the 8 inventory slots.
     *
     * If a value is `true`, then the item is selected.
     */
    offer: boolean[];
    
    constructor() {
        this.offer = [];
    }

    write(writer: Writer): void {
        writer.writeInt16(this.offer.length);
        for (const slot of this.offer) {
            writer.writeBoolean(slot);
        }
    }

    read(reader: Reader): void {
        this.offer = new Array(reader.readInt16());
        for (let i = 0; i < this.offer.length; i++) {
            this.offer[i] = reader.readBoolean();
        }
    }
}
