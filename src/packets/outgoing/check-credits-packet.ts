import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";

/**
 * > Unknown.
 */
export class CheckCreditsPacket implements Packet {

    readonly id = PacketMap.CHECK_CREDITS

    //#region packet-specific members

    //#endregion

    write(): void {
        //
    }

    read(): void {
        //
    }
}
