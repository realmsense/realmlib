import { Packet, PacketType, WorldPosData, MoveRecord, Writer, Reader } from "../..";

/**
 * Sent to acknowledge a `NewTickPacket`, and to notify the
 * server of the client"s current position and time.
 */
export class MovePacket implements Packet {

    readonly type = PacketType.MOVE;

    /**
     * The tick id of the `NewTickPacket` which this is acknowledging.
     */
    tickId: number;
    /**
     * The current client time.
     */
    time: number;
    /**
     * The current serer time in ms.
     */
    serverRealTimeMS: number;
    /**
     * The current client position.
     */
    newPosition: WorldPosData;
    /**
     * The move records of the client.
     *
     * This property can be an empty array.
     */
    records: MoveRecord[];
    
    constructor() {
        this.tickId = 0;
        this.time = 0;
        this.serverRealTimeMS = 0;
        this.newPosition = new WorldPosData();
        this.records = [];
    }

    write(writer: Writer): void {
        writer.writeInt32(this.tickId);
        writer.writeInt32(this.time);
        writer.writeUInt32(this.serverRealTimeMS);
        this.newPosition.write(writer);
        writer.writeInt16(this.records.length);
        for (const record of this.records) {
            record.write(writer);
        }
    }

    read(reader: Reader): void {
        this.tickId = reader.readInt32();
        this.time = reader.readInt32();
        this.newPosition.read(reader);
        this.records = new Array(reader.readInt16());
        for (let i = 0; i < this.records.length; i++) {
            this.records[i] = new MoveRecord();
            this.records[i].read(reader);
        }
    }
}
