import { Packet, PacketType } from "../..";

/**
 * Sent to prompt the server to send a `ReconnectPacket` which
 * contains the reconnect information for the Nexus.
 */
export class EscapePacket implements Packet {

    readonly type = PacketType.ESCAPE;
    
    write(): void {
        //
    }

    read(): void {
        //
    }
}
