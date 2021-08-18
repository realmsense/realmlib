import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../models/packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Received to notify the player of a new pet.
 */
export class ActivePetPacket implements Packet {

    readonly id = PacketMap.ACTIVE_PET;
    propagate = true;

    //#region packet-specific members
    /**
     * The instance id of the active pet.
     */
    instanceId: number;
    //#endregion

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
