import { Packet, PacketType, PetYardType, Reader, Writer } from "../..";

/**
 * Received when the pet yard is updated to a new type of yard.
 */
export class PetYardUpdatePacket implements Packet {

    readonly type = PacketType.PET_YARD_UPDATE;
    
    /**
     * The type of the new yard.
     */
    yardType: PetYardType;
    
    constructor() {
        this.yardType = 0;
    }

    read(reader: Reader): void {
        this.yardType = reader.readInt32();
    }

    write(writer: Writer): void {
        writer.writeInt32(this.yardType);
    }
}
