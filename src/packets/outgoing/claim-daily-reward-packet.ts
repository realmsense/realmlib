import { Packet, PacketType, Writer, Reader } from "../..";

/**
 * Sent to claim rewards from the login calendar.
 */
export class ClaimDailyRewardPacket implements Packet {

    readonly type = PacketType.CLAIM_DAILY_REWARD_MESSAGE;

    /**
     * The key of the item being claimed.
     */
    claimKey: string;
    /**
     * The type of claim being made.
     */
    claimType: string;
    
    constructor() {
        this.claimKey = "";
        this.claimType = "";
    }

    write(writer: Writer): void {
        writer.writeString(this.claimKey);
        writer.writeString(this.claimType);
    }

    read(reader: Reader): void {
        this.claimKey = reader.readString();
        this.claimType = reader.readString();
    }
}
