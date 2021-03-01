import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Sent when the client sends a chat message.
 */
export class PlayerTextPacket implements Packet {

    readonly id = PacketMap.PLAYER_TEXT

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
