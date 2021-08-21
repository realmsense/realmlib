import { Packet, PacketType, WorldPosData, Writer, Reader } from "../..";

/**
 * Sent when the client takes damage from a ground source, such as lava.
 */
export class GroundDamagePacket implements Packet {

    readonly type = PacketType.GROUND_DAMAGE;

    /**
     * The current client time.
     */
    time: number;
    /**
     * The current client position.
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
        this.position.read(reader);
    }
}
