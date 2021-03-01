import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * > Unknown.
 */
export class InventoryResultPacket implements Packet {

    readonly id = PacketMap.INVENTORY_RESULT

    //#region packet-specific members
    /**
     * > Unknown.
     */
    result: number;
    //#endregion

    constructor() {
        this.result = 0;
    }

    read(reader: Reader): void {
        this.result = reader.readInt32();
    }

    write(writer: Writer): void {
        writer.writeInt32(this.result);
    }
}
