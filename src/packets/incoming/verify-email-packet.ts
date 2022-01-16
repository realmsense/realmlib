import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * Received to prompt the player to verify their email.
 */
export class VerifyEmailPacket implements Packet {

    readonly type = PacketType.ACTIVE_PET;
    
    constructor() {
    }

    read(reader: Reader): void {
        //
    }

    write(writer: Writer): void {
        //
    }
}
