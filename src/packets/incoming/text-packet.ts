import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * Received when a chat message is sent by another player or NPC.
 * Il2Cpp: `ICNNNAEMONK`
 */
export class TextPacket implements Packet {

    readonly type = PacketType.TEXT;

    /**
     * The name of the sender
     * Il2Cpp: `NCADAPAJGCH`
     */
    author: string;

    /**
     * The object id of the sender
     * Il2Cpp: `LADFHJEFKEC`
     */
    objectID: number;

    /**
     * The number of stars of the sender
     * Il2Cpp: `MAIGGIHDDFN`
     */
    numStars: number;

    /**
     * The length of time (seconds) to display the chat bubble for
     * Il2Cpp: `JJPKLOAEEKF`
     */
    bubbleTime: number;

    /**
     * The recipient of the message. (for private messages, this is the name of the client receiving the message)
     * Il2Cpp: `LMICPNFEPPM`
     */
    recipient: string;

    /**
     * The content of the message
     * Il2Cpp: `OBEFKMANGCK`
     */
    text: string;

    /**
     * Unknown, seems to always be the same as `text`
     * Il2Cpp: `CPFDLKNEMGM`
     */
    cleanText: string;

    /**
     * Whether the sender of the message is a supporter
     * Il2Cpp: `PPHDCKCMDAJ`
     */
    isSupporter: boolean;

    /**
     * The star background of the player
     * Il2Cpp: `NAMFPEBLBNI`
     */
    starBackground: number;

    constructor() {
        this.author = "";
        this.objectID = 0;
        this.numStars = 0;
        this.bubbleTime = 0;
        this.recipient = "";
        this.text = "";
        this.cleanText = "";
        this.isSupporter = false;
        this.starBackground = 0;
    }

    read(reader: Reader): void {
        this.author = reader.readString();
        this.objectID = reader.readInt32();
        this.numStars = reader.readInt16();
        this.bubbleTime = reader.readUnsignedByte();
        this.recipient = reader.readString();
        this.text = reader.readString();
        this.cleanText = reader.readString();
        this.isSupporter = reader.readBoolean();
        this.starBackground = reader.readInt32();
    }

    write(writer: Writer): void {
        writer.writeString(this.author);
        writer.writeInt32(this.objectID);
        writer.writeInt16(this.numStars);
        writer.writeUnsignedByte(this.bubbleTime);
        writer.writeString(this.recipient);
        writer.writeString(this.text);
        writer.writeString(this.cleanText);
        writer.writeBoolean(this.isSupporter);
        writer.writeInt32(this.starBackground);
    }
}
