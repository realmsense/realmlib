import { WorldPosData } from "../../data/world-pos-data";
import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Sent to acknowledge an `AoePacket`.
 */
export class AoeAckPacket implements Packet {

    readonly id = PacketMap.AOE_ACK

    //#region packet-specific members
    /**
     * The current client time.
     */
    time: number;
    /**
     * The position of the AoE which this packet is acknowledging.
     */
    position: WorldPosData;
    //#endregion

    constructor() {
        this.time = 0;
        this.position = new WorldPosData();
    }

    write(writer: Writer): void {
        writer.writeInt32(this.time);
        this.position.write(writer);
    }

    read(reader: Reader): void {
        this.time = reader.readInt32();
        this.position = new WorldPosData();
        this.position.read(reader);
    }
}
