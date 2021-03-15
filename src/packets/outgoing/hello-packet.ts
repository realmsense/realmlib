import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Sent to prompt the server to accept the connection of an account
 * and reply with a `MapInfoPacket`.
 */
export class HelloPacket implements Packet {

    readonly id = PacketMap.HELLO;

    /**
     * The current RotMG Exalt Version (e.g. 1.3.3.1.0)
     */
    buildVersion: string;

    /**
     * The ID of the map to connect to.
     */
    gameId: number;

    /**
     * The accessToken of the client.
     */
    accessToken: string;

    /**
     * The key time of the `key` being used.
     */
    keyTime: number;

    /**
     * The key of the map to connect to.
     */
    key: number[];

    /**
     * Unknown. Seems to be unused
     */
    mapJSON: string;

    /**
     * Unknown. Seems to always be "rotmg"
     */
    gameNet: string;

    /**
     * Unknown. Seems to always be "rotmg"
     */
    playPlatform: string;

    /**
     * The clientToken of the client.
     */
    clientToken: string;

    /**
     * The token for this platform
     * Exalt: `8bV53M5ysJdVjU4M97fh2g7BnPXhefnc`
     * Flash: `XTeP7hERdchV5jrBZEYNebAqDPU6tKU6`
     */
    platformToken: string;

    constructor() {
        this.buildVersion = "";
        this.gameId = 0;
        this.accessToken = "";
        this.keyTime = 0;
        this.key = [];
        this.mapJSON = "";
        this.gameNet = "";
        this.playPlatform = "";
        this.clientToken = "";
        this.platformToken = "";
    }

    write(writer: Writer): void {
        writer.writeString(this.buildVersion);
        writer.writeInt32(this.gameId);
        writer.writeString(this.accessToken);
        writer.writeInt32(this.keyTime);
        writer.writeByteArray(this.key);
        writer.writeStringUTF32(this.mapJSON);
        writer.writeStringUTF32(this.gameNet);
        writer.writeStringUTF32(this.playPlatform);
        writer.writeStringUTF32(this.clientToken);
        writer.writeString(this.platformToken);
    }

    read(reader: Reader): void {
        this.buildVersion = reader.readString();
        this.gameId = reader.readInt32();
        this.accessToken = reader.readString();
        this.keyTime = reader.readInt32();
        this.key = reader.readByteArray();
        this.mapJSON = reader.readStringUTF32();
        this.gameNet = reader.readStringUTF32();
        this.playPlatform = reader.readStringUTF32();
        this.clientToken = reader.readStringUTF32();
        this.platformToken = reader.readString();
    }
}
