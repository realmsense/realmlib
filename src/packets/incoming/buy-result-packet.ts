import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * Received in response to a `BuyPacket`.
 */
export class BuyResultPacket implements Packet {

    readonly type = PacketType.BUY_RESULT;

    /**
     * The result code.
     */
    result: number;
    /**
     * > Unknown.
     */
    resultString: string;
    
    constructor() {
        this.result = 0;
        this.resultString = "";
    }

    read(reader: Reader): void {
        this.result = reader.readInt32();
        this.resultString = reader.readString();
    }

    write(writer: Writer): void {
        writer.writeInt32(this.result);
        writer.writeString(this.resultString);
    }
}
