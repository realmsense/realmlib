import { SlotObjectData } from "../../../data";
import { PacketMap } from "../../../models/packet-map";
import { Packet } from "../../../packet";
import { Reader } from "../../../reader";
import { Writer } from "../../../writer";

/**
 * Sent to make an update to the pet currently following the player.
 */
export class ReskinPetPacket implements Packet {

    readonly id = PacketMap.PET_CHANGE_FORM_MSG
    propagate = true;

    //#region packet-specific members
    /**
     * The instance id of the pet to update.
     */
    instanceId: number;
    /**
     * The pet type that the pet will become after the form change.
     */
    newPetType: number;
    item: SlotObjectData;
    //#endregion

    constructor() {
        this.instanceId = 0;
        this.newPetType = 0;
        this.item = new SlotObjectData();
    }

    write(writer: Writer): void {
        writer.writeInt32(this.instanceId);
        writer.writeInt32(this.newPetType);
        this.item.write(writer);
    }

    read(reader: Reader): void {
        this.instanceId = reader.readInt32();
        this.newPetType = reader.readInt32();
        this.item.read(reader);
    }
}
