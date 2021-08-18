import { PacketMap } from "../../models/packet-map";
import { PetYardType } from "../../constants/pet-yard-type";
import { Packet } from "../../models/packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Received when the pet yard is updated to a new type of yard.
 */
export class PetYardUpdatePacket implements Packet {

    readonly id = PacketMap.PET_YARD_UPDATE
    propagate = true;

    //#region packet-specific members
    /**
     * The type of the new yard.
     */
    yardType: PetYardType;
    //#endregion

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
