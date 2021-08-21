import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * Received to prompt the player to enter their password.
 */
export class PasswordPromptPacket implements Packet {

    readonly type = PacketType.PASSWORD_PROMPT;

    /**
     * > Unknown.
     */
    cleanPasswordStatus: number;
    
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
