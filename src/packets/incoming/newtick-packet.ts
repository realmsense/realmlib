import { Packet, PacketType, ObjectStatusData, Reader, Writer } from "../..";

/**
 * Received to notify the player of a new game tick.
 */
export class NewTickPacket implements Packet {

    readonly type = PacketType.NEW_TICK;

    /**
     * The id of the tick.
     */
    tickId: number;
    /**
     * The time between the last tick and this tick, in milliseconds.
     *
     * This is not always accurate, so it is better to calculate it manually
     * if millisecond-level accuracy is required.
     */
    tickTime: number;
    /**
     * Server realtime in ms
     */
    serverRealTimeMS: number;
    /**
     * Last server realtime in ms
     */
    serverLastTimeRTTMS: number;
    /**
     * An array of statuses for objects which are currently visible to the player.
     *
     * "visible" objects can include objects which would normally be off screen,
     * such as players, which are always at least visible on the minimap.
     */
    statuses: ObjectStatusData[];
    
    constructor() {
        this.tickId = 0;
        this.tickTime = 0;
        this.serverRealTimeMS = 0;
        this.serverLastTimeRTTMS = 0;
        this.statuses = [];
    }

    read(reader: Reader): void {
        this.tickId = reader.readInt32();
        this.tickTime = reader.readInt32();
        this.serverRealTimeMS = reader.readUInt32();
        this.serverLastTimeRTTMS = reader.readUInt16();
        const statusesLen = reader.readInt16();
        this.statuses = new Array<ObjectStatusData>(statusesLen);
        for (let i = 0; i < statusesLen; i++) {
            const osd = new ObjectStatusData();
            osd.read(reader);
            this.statuses[i] = osd;
        }
    }

    write(writer: Writer): void {
        writer.writeInt32(this.tickId);
        writer.writeInt32(this.tickTime);
        writer.writeInt16(this.statuses.length);
        for (const status of this.statuses) {
            status.write(writer);
        }
    }
}
