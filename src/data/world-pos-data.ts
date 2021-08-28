import { Writer } from "../writer";
import { Reader } from "../reader";
import { DataPacket } from "../models/packet";
import { Point } from "../models/point";

/**
 * Class: `OHPIBKLOFIN`
 */
export class WorldPosData extends Point implements DataPacket {

    /**
     * Property: `FEKAOEJOMJJ`
     */
    declare x: number;
    
    /**
     * Property: `CPDPNHKICLK`
     */
    declare y: number;

    /**
     * Creates a new point at the origin or at the provided, x, y.
     * @param x An x value for this point. Defaults to 0.
     * @param y A y value for this point. Defaults to 0.
     */
    constructor(x?: number, y?: number) {
        super(x ?? 0, y ?? 0);
    }

    read(reader: Reader): void {
        this.x = reader.readFloat();
        this.y = reader.readFloat();
    }

    write(writer: Writer): void {
        writer.writeFloat(this.x);
        writer.writeFloat(this.y);
    }

    /**
     * Returns a new `WorldPosData` object which has the same coordinates.
     */
    clone(): WorldPosData {
        return new WorldPosData(this.x, this.y);
    }
}
