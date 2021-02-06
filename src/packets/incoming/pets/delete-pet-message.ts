import { PacketMap } from "../../../models/packet-map";
import { Packet } from "../../../packet";
import { Reader } from "../../../reader";
import { Writer } from "../../../writer";

/**
 * Received to notify the player that a pet has been deleted.
 */
export class DeletePetMessage implements Packet {

    readonly id = PacketMap.DELETE_PET
    propagate = true;

    //#region packet-specific members
    /**
     * The id of the pet which has been deleted.
     */
    petId: number;
    //#endregion

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
