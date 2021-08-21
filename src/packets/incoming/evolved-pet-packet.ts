import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * Received to give the player information about a newly evolved pet.
 */
export class EvolvedPetMessagePacket implements Packet {

    readonly type = PacketType.EVOLVED_PET_MESSAGE;
    
    /**
     * The id of the pet which has evolved.
     */
    petId: number;
    /**
     * The current skin id of the pet.
     */
    initialSkin: number;
    /**
     * The skin id of the pet after its evolution.
     */
    finalSkin: number;
    
    constructor() {
        this.petId = 0;
        this.initialSkin = 0;
        this.finalSkin = 0;
    }

    read(reader: Reader): void {
        this.petId = reader.readInt32();
        this.initialSkin = reader.readInt32();
        this.finalSkin = reader.readInt32();
    }

    write(writer: Writer): void {
        writer.writeInt32(this.petId);
        writer.writeInt32(this.initialSkin);
        writer.writeInt32(this.finalSkin);
    }
}
