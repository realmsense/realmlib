import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * Received in response to a `ChooseNamePacket`.
 */
export class NameResultPacket implements Packet {

    readonly type = PacketType.NAME_RESULT;

    /**
     * Whether or not the name change was successful.
     */
    success: boolean;
    /**
     * The error which occurred, if the result was not successful.
     */
    errorText: string;
    
    constructor() {
        this.success = false;
        this.errorText = "";
    }

    read(reader: Reader): void {
        this.success = reader.readBoolean();
        this.errorText = reader.readString();
    }

    write(writer: Writer): void {
        writer.writeBoolean(this.success);
        writer.writeString(this.errorText);
    }
}
