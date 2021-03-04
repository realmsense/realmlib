import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Received in response to the `HelloPacket`.
 */
export class MapInfoPacket implements Packet {

    readonly id = PacketMap.MAP_INFO

    /**
     * The width of the map.
     */
    width: number;

    /**
     * The height of the map.
     */
    height: number;

    /**
     * The name of the map. (Nexus)
     */
    name: string;

    /**
     * Used for displaying the map's correct name in the client.
     * Either simply the map's `name` or in the format: `{server.nexus}` 
     */
    displayName: string;

    /**
     * The name of the realm. (Nexus)
     */
    realmName: string;
    
    /**
     * The seed value for the client's PRNG.
     */
    fp: number;

    /**
     * > Unkown.
     */
    background: number;

    /**
     * The difficulty rating of the map.
     */
    difficulty: number;

    /**
     * Whether or not players can teleport in the map.
     */
    allowPlayerTeleport: boolean;

    /**
     * > Unkown.
     */
    showDisplays: boolean;

    /**
     * The number of players allowed in this map.
     */
    maxPlayers: number;

    /**
     * Unknown.
     */
    gameOpenedTime: number;

    /**
     * The current RotMG Exalt Version (e.g. 1.3.3.1.0)
     */
    exaltVersion: string;

    constructor() {
        this.width = 0;
        this.height = 0;
        this.name = "";
        this.displayName = "";
        this.realmName = "";
        this.fp = 0;
        this.background = 0;
        this.difficulty = 0;
        this.allowPlayerTeleport = false;
        this.showDisplays = false;
        this.maxPlayers = 0;
        this.gameOpenedTime = 0;
        this.exaltVersion = ""
    }

    read(reader: Reader): void {
        this.width = reader.readInt32();
        this.height = reader.readInt32();
        this.name = reader.readString();
        this.displayName = reader.readString();
        this.realmName = reader.readString();
        this.fp = reader.readUInt32();
        this.background = reader.readInt32();
        this.difficulty = reader.readInt32();
        this.allowPlayerTeleport = reader.readBoolean();
        this.showDisplays = reader.readBoolean();
        this.maxPlayers = reader.readShort();
        this.gameOpenedTime = reader.readUInt32();
        this.exaltVersion = reader.readString();
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
        writer.writeBoolean(this.allowPlayerTeleport);
        writer.writeBoolean(this.showDisplays);
        writer.writeShort(this.maxPlayers);
        writer.writeUInt32(this.gameOpenedTime);
        writer.writeString(this.exaltVersion);
    }
}
