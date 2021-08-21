import { Packet, PacketType } from "../..";


/**
 * > Unknown.
 */
export class CheckCreditsPacket implements Packet {

    readonly type = PacketType.CHECK_CREDITS;

    write(): void {
        //
    }

    read(): void {
        //
    }
}
