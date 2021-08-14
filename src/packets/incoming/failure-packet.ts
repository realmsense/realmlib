import { Packet, PacketMap, FailureCode, Reader, Writer } from "../..";

/**
 * Received when an error has occured.
 * Il2Cpp: `PGFHFIAAKOI`
 */
export class FailurePacket implements Packet {

    readonly id = PacketMap.FAILURE

    /**
     * The ID of the failure.
     * @see FailureCode
     * Il2Cpp: `ENBELELJMBC`
     */
    public errorId: FailureCode;

    /**
     * The message associated with the error. Often a blank string
     * Example: `s.update_client`
     * Il2Cpp: `GDCKNNCIFNM`
     */
    public message: string;

    constructor() {
        this.errorId = 0;
        this.message = "";
    }

    read(reader: Reader): void {
        this.errorId = reader.readInt32();
        this.message = reader.readString();
    }

    write(writer: Writer): void {
        writer.writeInt32(this.errorId);
        writer.writeString(this.message);
    }
}
