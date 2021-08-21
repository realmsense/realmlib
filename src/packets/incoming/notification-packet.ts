import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * Received when a notification is received by the player.
 */
export class NotificationPacket implements Packet {

    readonly type = PacketType.NOTIFICATION;

    /**
     * The object id of the entity which the notification is for.
     */
    objectId: number;
    /**
     * The notification message.
     */
    message: string;
    /**
     * The color of the notification text.
     */
    color: number;
    
    constructor() {
        this.objectId = 0;
        this.message = "";
        this.color = 0;
    }

    read(reader: Reader): void {
        this.objectId = reader.readInt32();
        this.message = reader.readString();
        this.color = reader.readInt32();
    }

    write(writer: Writer): void {
        writer.writeInt32(this.objectId);
        writer.writeString(this.message);
        writer.writeInt32(this.color);
    }
}
