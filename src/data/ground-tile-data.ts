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
        this.x = reader.readShort();
        this.y = reader.readShort();
        this.type = reader.readUnsignedShort();
    }

    write(writer: Writer): void {
        writer.writeShort(this.x);
        writer.writeShort(this.y);
        writer.writeUnsignedShort(this.type);
    }
}
