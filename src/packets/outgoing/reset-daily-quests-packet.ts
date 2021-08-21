import { Packet, PacketType } from "../..";


/**
 * Sent to reset the daily quests currently available.
 */
export class ResetDailyQuestsPacket implements Packet {

    readonly type = PacketType.RESET_DAILY_QUESTS;
    
    write(): void {
        //
    }

    read(): void {
        //
    }
}
