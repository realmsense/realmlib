import { Packet, PacketType, Writer, Reader } from "../..";

/**
 * Sent in response to a `MapInfoPacket` to load a character into the map.
 * Il2Cpp: `MADFOFBKLAM`
 */
export class LoadPacket implements Packet {

    readonly type = PacketType.LOAD;

    /**
     * The id of the character to load.
     * Il2Cpp: `FALDIKKJBIK`
     */
    charId: number;

    /**
     * If the character is in challenger mode. (unused)
     * Il2Cpp: `KNJGHIJFLEM`
     */
    isChallenger: boolean;

    constructor() {
        this.charId = 0;
        this.isChallenger = false;
    }

    write(writer: Writer): void {
        writer.writeInt32(this.charId);
        writer.writeBoolean(this.isChallenger);
    }

    read(reader: Reader): void {
        this.charId = reader.readInt32();
        this.isChallenger = reader.readBoolean();
    }
}
