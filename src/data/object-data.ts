import { ObjectStatusData } from ".";
import { DataPacket, Reader, Writer } from "..";

/**
 * Used for receiving new objects in `UpdatePacket`
 * Class: `MIFLGAPPNJI`
 */
export class ObjectData implements DataPacket {

    /**
     * The type of this object.
     * Property: `LDGGOBCHABO`
     */
    objectType: number;

    /**
     * The status of this object.
     * Property: LBNLJFBLMJG
     */
    status: ObjectStatusData;

    constructor() {
        this.objectType = 0;
        this.status = new ObjectStatusData();
    }

    read(reader: Reader): void {
        this.objectType = reader.readUnsignedShort();
        this.status.read(reader);
    }

    write(writer: Writer): void {
        writer.writeUnsignedShort(this.objectType);
        this.status.write(writer);
    }
}
