import { Packet, PacketMap, GameId, Reader, Writer } from "../..";

/**
 * Sent whenever the Client connects to a new map.
 * The server should reply with a `MapInfoPacket`
 * Il2Cpp: `PJMBFLNIANG_HHOIFDMKBBE`
 */
export class HelloPacket implements Packet {

    readonly id = PacketMap.HELLO;

    /**
     * The current Exalt Version
     * Example: `1.6.3.0.0`
     * Il2Cpp: `DNMIONOEGIB`
     */
    exaltVer: string;

    /**
     * The ID of the map we are connecting to, see `GameId`
     * Example: See `GameId`
     * Il2Cpp: `AAGKKBIKJH`
     */
    gameId: GameId;

    /**
     * The access token of the client
     * Example: `fwr/t/R4KS7fv0tIcaqbEJNfibtI2UyudI7YXO7WQ1z0AQ9R+ILze29SV0rDIXXvEhSTUglNHnEr0C4oC0R59JE2FkyQd9KS+cuAvxdvcFc9qnwOR0N2vAHJ000pRyAAnGKkQMKTMSVtDI8V65f83+arwtwPnTwS9gmoosQregHFEynIaLoLz+CSsgZV/UDozFDO5R0jyZ83IwOSfKOrJomcO6wEb0vlcYlRYOhkAPElTP7BT5bTTMPaooVIXjctATxJmWghEvmSgmiBQ/TFp/jzF7294LHl+NKTLcyxUdthp9GZ7AQicYW8qa1W4tN+bpY+fv7JxYcxApDiI7X5iA==`
     * Il2Cpp: `JMKMFPOENEF`
     */
    accessToken: string;

    /**
     * The time the key was created / issued to the client?
     * Example: `1626902014`
     * Il2Cpp: `OAAAFEAAGCC`
     */
    keyTime: number;

    /**
     * The key for the map we are connecting to
     * Example: `[172, 19, 213, 22, 128, 42, 141, 63, 187, 153, 185, 62, 13, 95, 69, 252, 90, 64, 23, 141, 71, 12, 72, 214, 248, 134, 123, 81, 63, 211, 85, 215]`
     * Il2Cpp: `JPFOFOPNFEI`
     */
    key: number[];

    /**
     * Unknown. Seems to always be blank
     * Il2Cpp: `BGCCNHMJOOJ`
     */
    var6: string;

    /**
     * Unknown. Seems to always be blank
     * Il2Cpp: `CELBPAJCPDF`
     */
    var7: string;

    /**
     * Either `rotmg` or `steam`
     * Il2Cpp: `KMKKAMPFFHH`
     */
    gameNet: string;

    /**
     * Unknown. Seems to always be blank
     * Il2Cpp: `ONGAMPFEICJ`
     */
    var9: string;

    /**
     * Either `rotmg` or `steam`
     * Il2Cpp: `KHNOLHAJBIG`
     */
    playPlatform: string;

    /**
     * Unknown. Seems to always be blank
     * Il2Cpp: `LBFNIPNHDNC`
     */
    var11: string;

    /**
     * The clientToken (HWID) of the client
     * Example: `7238c4130e3c8fae1e468c07698b01b228e3fadf` (SHA-1 hash)
     * Il2Cpp: `PPIDJKLKMEM`
     */
    clientToken: string;

    /**
     * The token for this platform
     * Exalt: `8bV53M5ysJdVjU4M97fh2g7BnPXhefnc`
     * Flash: `XTeP7hERdchV5jrBZEYNebAqDPU6tKU6`
     * Il2cpp: `StringLiteral__8bV53M5ysJdVjU4M97fh2g7BnPXhefnc` 
     */
    public platformToken: string;

    constructor() {
        this.exaltVer = "";
        this.gameId = 0;
        this.accessToken = "";
        this.keyTime = 0;
        this.key = [];
        this.var6 = "";
        this.var7 = "";
        this.gameNet = "";
        this.var9 = "";
        this.playPlatform = "";
        this.var11 = "";
        this.clientToken = "";
        this.platformToken = "";
    }

    read(reader: Reader): void {
        this.exaltVer = reader.readString();
        this.gameId = reader.readInt32();
        this.accessToken = reader.readString();
        this.keyTime = reader.readInt32();
        this.key = reader.readByteArray();
        this.var6 = reader.readStringUTF32();
        this.var7 = reader.readString();
        this.gameNet = reader.readString();
        this.var9 = reader.readString();
        this.playPlatform = reader.readString();
        this.var11 = reader.readString();
        this.clientToken = reader.readString();
        this.platformToken = reader.readString();
    }

    write(writer: Writer): void {
        writer.writeString(this.exaltVer);
        writer.writeInt32(this.gameId);
        writer.writeString(this.accessToken);
        writer.writeInt32(this.keyTime);
        writer.writeByteArray(this.key);
        writer.writeStringUTF32(this.var6);
        writer.writeString(this.var7);
        writer.writeString(this.gameNet);
        writer.writeString(this.var9);
        writer.writeString(this.playPlatform);
        writer.writeString(this.var11);
        writer.writeString(this.clientToken);
        writer.writeString(this.platformToken);
    }
}
