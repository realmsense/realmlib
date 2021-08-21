import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * Received to notify the player that a pet has been deleted.
 */
export class DeletePetMessagePacket implements Packet {

    readonly type = PacketType.DELETE_PET_MESSAGE;

    /**
     * The id of the pet which has been deleted.
     */
    petId: number;

    constructor() {
        this.petId = 0;
    }

    read(reader: Reader): void {
        this.petId = reader.readInt32();
    }

    write(writer: Writer): void {
        writer.writeInt32(this.petId);
    }
}
