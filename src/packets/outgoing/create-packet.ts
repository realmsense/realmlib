import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../models/packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Sent to create a new character.
 */
export class CreatePacket implements Packet {

    readonly id = PacketMap.CREATE

    //#region packet-specific members
    /**
     * The class to use for the new character.
     */
    classType: number;
    /**
     * The skin id to use for the new character.
     * The default skin id is `0`.
     */
    skinType: number;
    /**
     * Whether or not the character is in challenger mode.
     */
    isChallenger: boolean;
    //#endregion

    constructor() {
        this.classType = 0;
        this.skinType = 0;
        this.isChallenger = false;
    }

    write(writer: Writer): void {
        writer.writeInt16(this.classType);
        writer.writeInt16(this.skinType);
        writer.writeBoolean(this.isChallenger);
    }

    read(reader: Reader): void {
        this.classType = reader.readInt16();
        this.skinType = reader.readInt16();
        this.isChallenger = reader.readBoolean();
    }
}
