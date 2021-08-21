import { Packet, PacketType, Writer, Reader } from "../..";

/**
 * Sent when the player inflicts a condition effect.
 */
export class SetConditionPacket implements Packet {

    readonly type = PacketType.SET_CONDITION;

    /**
     * The condition effect being conflicted.
     */
    conditionEffect: number;
    /**
     * The duration of the conditin effect.
     */
    conditionDuration: number;
    
    constructor() {
        this.conditionEffect = 0;
        this.conditionDuration = 0;
    }

    write(writer: Writer): void {
        writer.writeByte(this.conditionEffect);
        writer.writeFloat(this.conditionDuration);
    }

    read(reader: Reader): void {
        this.conditionEffect = reader.readByte();
        this.conditionDuration = reader.readFloat();
    }
}
