import { Packet, PacketType, FailureCode, Reader, Writer } from "../..";

/**
 * Received when an error has occured.
 * Il2Cpp: `PGFHFIAAKOI`
 */
export class FailurePacket implements Packet {

    readonly type = PacketType.FAILURE;

    /**
     * The ID of the failure.
     * @see FailureCode
     * Il2Cpp: `ENBELELJMBC`
     */
    errorId: FailureCode;

    /**
     * The message associated with the error. Often a blank string
     * Example: `s.update_client`
     * Il2Cpp: `GDCKNNCIFNM`
     */
    message: string;

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
