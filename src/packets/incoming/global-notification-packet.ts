import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * Received when a global notification is sent out to all players.
 */
export class GlobalNotificationPacket implements Packet {

    readonly type = PacketType.GLOBAL_NOTIFICATION;

    /**
     * The type of notification received.
     */
    notificationType: number;
    /**
     * The notification message.
     */
    text: string;
    
    constructor() {
        this.notificationType = 0;
        this.text = "";
    }

    read(reader: Reader): void {
        this.notificationType = reader.readInt32();
        this.text = reader.readString();
    }

    write(writer: Writer): void {
        writer.writeInt32(this.notificationType);
        writer.writeString(this.text);
    }
}
