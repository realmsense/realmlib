import { Packet, PacketType, Writer, Reader } from "../..";

/**
 * Sent when the client sends a chat message.
 */
export class PlayerTextPacket implements Packet {

    readonly type = PacketType.PLAYER_TEXT;

    /**
     * The message to send.
     */
    text: string;

    constructor() {
        this.text = "";
    }

    write(writer: Writer): void {
        writer.writeString(this.text);
    }

    read(reader: Reader): void {
        this.text = reader.readString();
    }
}
