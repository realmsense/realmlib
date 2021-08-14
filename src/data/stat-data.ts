import { Writer } from "../writer";
import { Reader } from "../reader";
import { DataPacket } from "../packet";
import { StatType } from "../models/stat-type";

/**
 * Class: `EALCAHFJEEN`
 */
export class StatData implements DataPacket {

    /**
     * The type of stat.
     * Property: `OCBDAMHCCMJ` 
     */
    statType: number;

    /**
     * The number value of this stat, if this is not a string stat.
     * Property: `NMJKAKHMCDA` 
     */
    statValue: number;

    /**
     * The string value of this stat, if this is a string stat.
     * Property: `LBMAFNDDCEP` 
     */
    stringStatValue: string;

    /**
     * Unknown
     * Property: `KMCOCGCHFOB`
     */
    unknownByte: number;

    constructor() {
        this.statType = 0;
        this.statValue = 0;
        this.stringStatValue = "";
        this.unknownByte = 0;
    }

    read(reader: Reader): void {
        this.statType = reader.readUnsignedByte();
        if (this.isStringStat()) {
            this.stringStatValue = reader.readString();
        } else {
            this.statValue = reader.readCompressedInt();
        }
        this.unknownByte = reader.readByte();
    }

    write(writer: Writer): void {
        writer.writeByte(this.statType);
        if (this.isStringStat()) {
            writer.writeString(this.stringStatValue);
        } else {
            writer.writeInt32(this.statValue);
        }
        writer.writeByte(this.unknownByte);
    }

    isStringStat(): boolean {
        switch (this.statType) {
            case StatType.NAME_STAT:
            case StatType.GUILD_NAME_STAT:
            case StatType.PET_NAME_STAT:
            case StatType.ACCOUNT_ID_STAT:
            case StatType.OWNER_ACCOUNT_ID_STAT:
            case StatType.GRAVE_ACCOUNT_ID:
                return true;
            default:
                return false;
        }
    }
}
