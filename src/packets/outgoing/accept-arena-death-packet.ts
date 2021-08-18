import { Packet } from "../../models/packet";
import { PacketMap } from "../../models/packet-map";

/**
 * Sent to accept a death in the arena.
 */
export class AcceptArenaDeathPacket implements Packet {

    readonly id = PacketMap.ACCEPT_ARENA_DEATH;
    propagate = true;

    //#region packet-specific members

    //#endregion

    write(): void {
        //
    }

    read(): void {
        //
    }
}