import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * Received to give the player information about a newly hatched pet.
 */
export class HatchPetPacket implements Packet {

    readonly type = PacketType.HATCH_PET;
    
    /**
     * The name of the hatched pet.
     */
    petName: string;
    /**
     * The skin id of the hatched pet.
     */
    petSkin: number;
    
    constructor() {
        this.petName = "";
        this.petSkin = 0;
    }

    read(reader: Reader): void {
        this.petName = reader.readString();
        this.petSkin = reader.readInt32();
    }

    write(writer: Writer): void {
        writer.writeString(this.petName);
        writer.writeInt32(this.petSkin);
    }
}
