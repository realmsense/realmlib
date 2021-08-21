import { DataPacket, Reader, Writer } from "..";

/**
 * Used for receiving new tiles in `UpdatePacket`
 * Class: `KADGIIPCDNH`
 */
export class GroundTileData implements DataPacket {

    /**
     * The X coordinate of this tile.
     * Property: `EOOJAMLJAOM`
     */
    x: number;
    
    /**
     * The Y coordinate of this tile.
     * Property: `JDEKCEFBJFP`
     */
    y: number;
    
    /**
     * The tile type of this tile.
     * Property: `PBDBCHKPMDP`
     */
    type: number;

    constructor() {
        this.x = 0;
        this.y = 0;
        this.type = 0;
    }

    read(reader: Reader): void {
        this.x = reader.readInt16();
        this.y = reader.readInt16();
        this.type = reader.readUInt16();
    }

    write(writer: Writer): void {
        writer.writeInt16(this.x);
        writer.writeInt16(this.y);
        writer.writeUInt16(this.type);
    }
}
