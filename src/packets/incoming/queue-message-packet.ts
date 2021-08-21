import { Reader, Writer, PacketType } from "../..";
import { Packet } from "../../models/packet";

/**
 * Received when the client connects to a server with a queue.
 */
export class QueueMessagePacket implements Packet {

    readonly type = PacketType.QUEUE_MESSAGE;

    /**
     * The current position of the client in the queue
     */
    currentPosition: number;

    /**
     * The maximum amount of clients allowed in the queue
     */
    maxPosition: number;

    constructor() {
        this.currentPosition = 0;
        this.maxPosition = 0;
    }

    read(reader: Reader): void {
        this.currentPosition = reader.readUInt16();
        this.maxPosition = reader.readUInt16();
    }

    write(writer: Writer): void {
        writer.writeUInt16(this.currentPosition);
        writer.writeUInt16(this.maxPosition);
    }
}