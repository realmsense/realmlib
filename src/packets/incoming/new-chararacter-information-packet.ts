import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * > Unknown
 */
export class NewCharacterInformationPacket implements Packet {

    readonly type = PacketType.NEW_CHARACTER_INFORMATION;

    charXML: string;
    
    constructor() {
        this.charXML = "";
    }

    read(reader: Reader): void {
        this.charXML = reader.readString();
    }

    write(writer: Writer): void {
        writer.writeString(this.charXML);
    }
}
