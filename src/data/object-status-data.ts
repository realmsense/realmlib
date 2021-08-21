import { Writer } from "../writer";
import { Reader } from "../reader";
import { DataPacket } from "../models/packet";
import { WorldPosData } from "./world-pos-data";
import { StatData } from "./stat-data";

/**
 * Class: `LCNFOAPGNNJ`
 */
export class ObjectStatusData implements DataPacket {

    /**
     * The object id of the object which this status is for.
     * Property: `LADFHJEFKEC`
     */
    objectId: number;

    /**
     * The position of the object which this status is for.
     * Property: `CBLBGAHHEHF`
     */
    pos: WorldPosData;
    
    /**
     * A list of stats for the object which this status is for.
     * Property: `EJKLDLMHEJH`
     */
    stats: StatData[];

    constructor() {
        this.objectId = 0;
        this.pos = new WorldPosData();
        this.stats = [];
    }

    read(reader: Reader): void {
        this.objectId = reader.readCompressedInt();
        this.pos.read(reader);
        const statLen = reader.readCompressedInt();
        this.stats = new Array(statLen);
        for (let i = 0; i < statLen; i++) {
            const stat = new StatData();
            stat.read(reader);
            this.stats[i] = stat;
        }
    }

    write(writer: Writer): void {
        writer.writeInt32(this.objectId);
        this.pos.write(writer);
        writer.writeInt16(this.stats.length);
        for (const stat of this.stats) {
            stat.write(writer);
        }
    }
}
