import { Packet, PacketMap, GameId, Reader, Writer } from "../..";

/**
 * Received to instruct the client to connect to a new host.
 * Il2Cpp: `GOJNAJGEICA`
 */
export class ReconnectPacket implements Packet {

    readonly id = PacketMap.RECONNECT

    /**
     * The name of the new host / map.
     * Il2Cpp: `NCADAPAJGCH`
     */
    name: string;
    
    /**
     * The address of the new host
     * Il2Cpp: `AKPFOLMJFAF`
     */
    host: string;

    /**
     * The port of the new host
     * Il2Cpp: `OKDEMCCMFAI`
     */
    port: number;

    /**
     * The `gameId` to send in the next `HelloPacket`
     * Il2Cpp: `NLKIJIIPGFB`
     */
    gameId: GameId;

    /**
     * The `keyTime` to send in the next `HelloPacket`
     * Il2Cpp: `HPKPIKODNEN`
     */
    keyTime: number;

    /**
     * Unused, always false.
     * Il2Cpp: `FKEOPOCCDEH`
     */
    fromArena: boolean;
    
    /**
     * The `key` to send in the next `HelloPacket`
     * Il2Cpp: `PEIBBDFDIFK`
     */
    key: number[];
    
    constructor() {
        this.name = "";
        this.host = "";
        this.port = 0;
        this.gameId = 0;
        this.keyTime = 0;
        this.fromArena = false;
        this.key = [];
    }

    read(reader: Reader): void {
        this.name = reader.readString();
        this.host = reader.readString();
        this.port = reader.readUInt16();
        this.gameId = reader.readInt32();
        this.keyTime = reader.readInt32();
        this.fromArena = reader.readBoolean();
        this.key = reader.readByteArray();
    }

    write(writer: Writer): void {
        writer.writeString(this.name);
        writer.writeString(this.host);
        writer.writeUInt16(this.port);
        writer.writeInt32(this.gameId);
        writer.writeInt32(this.keyTime);
        writer.writeBoolean(this.fromArena);
        writer.writeByteArray(this.key);
    }
}
