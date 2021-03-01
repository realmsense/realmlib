import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Sent when the player is hit.
 */
export class PlayerHitPacket implements Packet {

    readonly id = PacketMap.PLAYER_HIT

    //#region packet-specific members
    /**
     * The id of the bullet which hit the player.
     */
    bulletId: number;
    /**
     * The object id of the enemy that hit the player.
     */
    objectId: number;
    //#endregion

    constructor() {
        this.bulletId = 0;
        this.objectId = 0;
    }

    write(writer: Writer): void {
        writer.writeUnsignedByte(this.bulletId);
        writer.writeInt32(this.objectId);
    }

    read(reader: Reader): void {
        this.bulletId = reader.readUnsignedByte();
        this.objectId = reader.readInt32();
    }
}
