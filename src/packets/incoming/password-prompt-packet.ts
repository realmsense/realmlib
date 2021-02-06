import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Received to prompt the player to enter their password.
 */
export class PasswordPromptPacket implements Packet {

    readonly id = PacketMap.PASSWORD_PROMPT

    //#region packet-specific members
    /**
     * > Unknown.
     */
    cleanPasswordStatus: number;
    //#endregion

    constructor() {
        this.cleanPasswordStatus = 0;
    }

    read(reader: Reader): void {
        this.cleanPasswordStatus = reader.readInt32();
    }

    write(writer: Writer): void {
        writer.writeInt32(this.cleanPasswordStatus);
    }
}
