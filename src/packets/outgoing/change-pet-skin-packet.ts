import { Packet, PacketType, PetUpgradePaymentType, Writer, Reader } from "../..";

/**
 * Sent to change skin of a pet.
 */
export class ChangePetSkinPacket implements Packet {

    readonly type = PacketType.CHANGE_PET_SKIN;
    
    /**
     * The id of the pet whose skin is changing.
     */
    petId: number;
    /**
     * The id of the new skin for the pet.
     */
    skinType: number;
    /**
     * The type of currency to use when changing the pet skin.
     */
    currency: PetUpgradePaymentType;
    
    constructor() {
        this.petId = 0;
        this.skinType = 0;
        this.currency = 0;
    }

    write(writer: Writer): void {
        writer.writeInt32(this.petId);
        writer.writeInt32(this.skinType);
        writer.writeInt32(this.currency);
    }

    read(reader: Reader): void {
        this.petId = reader.readInt32();
        this.skinType = reader.readInt32();
        this.currency = reader.readInt32();
    }
}
