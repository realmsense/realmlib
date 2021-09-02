import { Writer } from "../writer";
import { Reader } from "../reader";
import { DataPacket } from "../models/packet";
import { StatType } from "../constants/stat-type";

/**
 * Class: `EALCAHFJEEN`
 */
export class StatData implements DataPacket {

    /**
     * The type of stat.
     * Property: `OCBDAMHCCMJ` 
     */
    type: StatType;

    /**
     * The number value of this stat, if this is not a string stat.
     * Property: `NMJKAKHMCDA` 
     */
    value: number;

    /**
     * The string value of this stat, if this is a string stat.
     * Property: `LBMAFNDDCEP` 
     */
    stringValue: string;

    /**
     * Unknown
     * Property: `KMCOCGCHFOB`
     */
    unknownByte: number;

    constructor() {
        this.type = 0;
        this.value = 0;
        this.stringValue = "";
        this.unknownByte = 0;
    }

    read(reader: Reader): void {
        this.type = reader.readUnsignedByte();
        if (this.isStringStat()) {
            this.stringValue = reader.readString();
        } else {
            this.value = reader.readCompressedInt();
        }
        this.unknownByte = reader.readCompressedInt();
    }

    write(writer: Writer): void {
        writer.writeByte(this.type);
        if (this.isStringStat()) {
            writer.writeString(this.stringValue);
        } else {
            writer.writeInt32(this.value);
        }
        writer.writeByte(this.unknownByte);
    }

    isStringStat(): boolean {
        switch (this.type) {
            case StatType.NAME_STAT:                // 31
            case StatType.GUILD_NAME_STAT:          // 62
            case StatType.PET_NAME_STAT:            // 82
            case StatType.ACCOUNT_ID_STAT:          // 38
            case StatType.OWNER_ACCOUNT_ID_STAT:    // 54
            case StatType.GRAVE_ACCOUNT_ID:         // 115
            case StatType.UNKNOWN_80:              // 80
            case StatType.UNKNOWN_121:              // 121
            case StatType.UNKNOWN_123:              // 123
                return true;
            default:
                return false;
        }
    }
}
