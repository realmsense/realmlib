import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * Received when the players exaltation stats update
 */
export class ExaltationBonusChangedPacket implements Packet {

    readonly type = PacketType.EXALTATION_BONUS_CHANGED;

    objType: number;
    attackProgress: number;
    defenseProgress: number;
    speedProgress: number;
    dexterityProgress: number;
    vitalityProgress: number;
    wisdomProgress: number;
    healthProgress: number;
    manaProgress: number;

    constructor() {
        this.objType = 0;
        this.attackProgress = 0;
        this.defenseProgress = 0;
        this.speedProgress = 0;
        this.dexterityProgress = 0;
        this.vitalityProgress = 0;
        this.wisdomProgress = 0;
        this.healthProgress = 0;
        this.manaProgress = 0;
    }

    read(reader: Reader): void {
        this.objType = reader.readInt16();
        this.dexterityProgress = reader.readByte();
        this.speedProgress = reader.readByte();
        this.vitalityProgress = reader.readByte();
        this.wisdomProgress = reader.readByte();
        this.defenseProgress = reader.readByte();
        this.attackProgress = reader.readByte();
        this.manaProgress = reader.readByte();
        this.healthProgress = reader.readByte();
    }

    write(writer: Writer): void {
        writer.writeInt16(this.objType);
        writer.writeByte(this.dexterityProgress);
        writer.writeByte(this.speedProgress);
        writer.writeByte(this.vitalityProgress);
        writer.writeByte(this.wisdomProgress);
        writer.writeByte(this.defenseProgress);
        writer.writeByte(this.attackProgress);
        writer.writeByte(this.manaProgress);
        writer.writeByte(this.healthProgress);
    }
}
