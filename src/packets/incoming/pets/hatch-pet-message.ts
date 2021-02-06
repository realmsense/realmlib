import { PacketMap } from "../../../models/packet-map";
import { Packet } from "../../../packet";
import { Reader } from "../../../reader";
import { Writer } from "../../../writer";

/**
 * Received to give the player information about a newly hatched pet.
 */
export class HatchPetMessage implements Packet {

    readonly id = PacketMap.HATCH_PET
    propagate = true;

    //#region packet-specific members
    /**
     * The name of the hatched pet.
     */
    petName: string;
    /**
     * The skin id of the hatched pet.
     */
    petSkin: number;
    //#endregion

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
