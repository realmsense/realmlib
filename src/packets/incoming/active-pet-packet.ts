import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * Received to notify the player of a new pet.
 */
export class ActivePetPacket implements Packet {

    readonly type = PacketType.ACTIVE_PET;
    
    /**
     * The instance id of the active pet.
     */
    instanceId: number;
    
    constructor() {
        this.instanceId = 0;
    }

    read(reader: Reader): void {
        this.instanceId = reader.readInt32();
    }

    write(writer: Writer): void {
        writer.writeInt32(this.instanceId);
    }
}
