import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../models/packet";

/**
 * Sent to reset the daily quests currently available.
 */
export class ResetDailyQuestsPacket implements Packet {

    readonly id = PacketMap.RESET_DAILY_QUESTS

    //#region packet-specific members

    //#endregion

    write(): void {
        //
    }

    read(): void {
        //
    }
}
