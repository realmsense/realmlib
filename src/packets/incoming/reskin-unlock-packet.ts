import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * Received to notify the player that a new skin has been unlocked.
 */
export class ReskinUnlockPacket implements Packet {

    readonly type = PacketType.RESKIN_UNLOCK;

    /**
     * The id of the skin that was unlocked.
     */
    skinId: number;
    
    constructor() {
        this.skinId = 0;
    }

    read(reader: Reader): void {
        this.skinId = reader.readInt32();
    }

    write(writer: Writer): void {
        writer.writeInt32(this.skinId);
    }
}
