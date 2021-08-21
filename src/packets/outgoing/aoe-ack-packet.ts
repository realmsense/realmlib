import { Packet, PacketType, WorldPosData, Writer, Reader } from "../..";

/**
 * Sent to acknowledge an `AoePacket`.
 */
export class AoeAckPacket implements Packet {

    readonly type = PacketType.AOE_ACK;

    /**
     * The current client time.
     */
    time: number;
    /**
     * The position of the AoE which this packet is acknowledging.
     */
    position: WorldPosData;
    
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
