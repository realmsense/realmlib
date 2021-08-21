import { Packet, PacketType } from "../..";


/**
 * Sent to accept a death in the arena.
 */
export class AcceptArenaDeathPacket implements Packet {

    readonly type = PacketType.ACCEPT_ARENA_DEATH;
    
    write(): void {
        //
    }

    read(): void {
        //
    }
}