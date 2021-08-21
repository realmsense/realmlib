import { Packet, PacketMap, Reader, Writer } from "../..";

/**
 * Received in response to the `HelloPacket`.
 * Il2Cpp: `ECMJOEBPKFH`
 */
export class MapInfoPacket implements Packet {

    readonly id = PacketMap.MAP_INFO;

    /**
     * The width of the map
     * Example: `256`
     * Il2Cpp: `NAJHAFAAFPK`
     */
    width: number;

    /**
     * The height of the map
     * Example: `256`
     * Il2Cpp: `IEOOAEECDOM`
     */
    height: number;

    /**
     * The name of the name
     * Example: `Nexus`
     * Il2Cpp: `NCADAPAJGCH`
     */
    name: string;

    /**
     * Used for display the map's correct name for the client.
     * Possibly used with getLanguageStrings however rotmg devs changed `{server.nexus}` to `{s.nexus}` without updating language strings soo 🤷🤷
     * Example: `{s.nexus}`
     * Il2Cpp: `LLGLFMAAOMM`
     */
    displayName: string;

    /**
     * The name of the map's realm (parent server). Defaults to `name` if this the parent map.
     * Example: `Nexus`
     * Il2Cpp: `NMMNFHJFDNA`
     */
    realmName: string;

    /**
     * The seed used for the client's pseudorandom number generator
     * Example: `833640993`
     * Il2Cpp: `HFLMBNOPFHB`
     */
    fp: number;

    /**
     * Used to display custom backgrounds for certain maps. (like in the new sprite worlds)
     * Il2Cpp: `CJODIDDGHED`
     */
    background: number;

    /**
     * The difficulty rating of the map. -1 for unrated maps
     * Il2Cpp: `FBGBLFGEPFO`
     */
    difficulty: number;

    /**
     * Whether players are allowed to teleport to each other or not
     * Il2Cpp: `LOCFIONPLJG`
     */
    blockPlayerTeleport: boolean;

    /**
     * Unknown, seems to always be `true`
     * Il2Cpp: `HHFAHKMEGGI`
     */
    showDisplays: boolean;

    /**
     * The maximum number of players for this map
     * Example: `300`
     * Il2Cpp: `BNPKHIHMFHE`
     */
    maxPlayers: number;

    /**
     * The timestamp 
     * Example: `1626773726`
     * Il2Cpp: `HJDJDCJBOJL`
     */
    gameOpenedTime: number;

    /**
     * The exalt version of the server sending the map. This is shown in top left in the actual game client
     * Example: `1.6.3.0.0`
     * Il2Cpp: `MGGKEKIHBHD`
     */
    exaltVersion: string;

    /**
     * Unknown. Seems to always be 0 (and sometimes not read?)
     * Il2Cpp: `HLEGONBABNF`
     */
    var14: number;

    constructor() {
        this.width = 0;
        this.height = 0;
        this.name = "";
        this.displayName = "";
        this.realmName = "";
        this.fp = 0;
        this.background = 0;
        this.difficulty = 0;
        this.blockPlayerTeleport = false;
        this.showDisplays = true;
        this.maxPlayers = 0;
        this.gameOpenedTime = 0;
        this.exaltVersion = "";
        this.var14 = 0;
    }

    read(reader: Reader): void {
        this.width = reader.readInt32();
        this.height = reader.readInt32();
        this.name = reader.readString();
        this.displayName = reader.readString();
        this.realmName = reader.readString();
        this.fp = reader.readInt32();
        this.background = reader.readInt32();
        this.difficulty = reader.readInt32();
        this.blockPlayerTeleport = reader.readBoolean();
        this.showDisplays = reader.readBoolean();
        this.maxPlayers = reader.readInt16();
        this.gameOpenedTime = reader.readInt32();
        this.exaltVersion = reader.readString();
        this.var14 = reader.readInt32();
    }

    write(writer: Writer): void {
        writer.writeInt32(this.width);
        writer.writeInt32(this.height);
        writer.writeString(this.name);
        writer.writeString(this.displayName);
        writer.writeString(this.realmName);
        writer.writeInt32(this.fp);
        writer.writeInt32(this.background);
        writer.writeInt32(this.difficulty);
        writer.writeBoolean(this.blockPlayerTeleport);
        writer.writeBoolean(this.showDisplays);
        writer.writeInt16(this.maxPlayers);
        writer.writeInt32(this.gameOpenedTime);
        writer.writeString(this.exaltVersion);
        writer.writeInt32(this.var14);
    }
}
