import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * A packet which contains a file.
 */
export class FilePacket implements Packet {

    readonly type = PacketType.FILE;

    /**
     * The name of the received file.
     */
    fileName: string;
    /**
     * The bytes of the file. Don"t ask me why this is a string,
     * that"s just how it is in the source code of the game.
     */
    file: string;
    
    constructor() {
        this.fileName = "";
        this.file = "";
    }

    read(reader: Reader): void {
        this.fileName = reader.readString();
        this.file = reader.readStringUTF32();
    }

    write(writer: Writer): void {
        writer.writeString(this.fileName);
        writer.writeStringUTF32(this.file);
    }
}
