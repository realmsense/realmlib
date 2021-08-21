import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * Received when a new ability has been unlocked by the player.
 */
export class NewAbilityMessagePacket implements Packet {

    readonly type = PacketType.NEW_ABILITY_MESSAGE;

    /**
     * The type of ability which has been unlocked.
     */
    abilityType: number;
    
    constructor() {
        this.abilityType = 0;
    }

    read(reader: Reader): void {
        this.abilityType = reader.readInt32();
    }

    write(writer: Writer): void {
        writer.writeInt32(this.abilityType);
    }
}
