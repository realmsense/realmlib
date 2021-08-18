import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../models/packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Received when the client connects to a server with a queue.
 */
export class QueueMessagePacket implements Packet {
    readonly id = PacketMap.QUEUE_MESSAGE

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
        this.currentPosition = reader.readUnsignedShort();
        this.maxPosition = reader.readUnsignedShort();
    }

    write(writer: Writer): void {
        writer.writeUnsignedShort(this.currentPosition);
        writer.writeUnsignedShort(this.maxPosition);
    }
}