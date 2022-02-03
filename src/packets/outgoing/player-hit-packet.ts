import { Packet, PacketType, Writer, Reader } from "../..";

/**
 * Sent when the player is hit.
 */
export class PlayerHitPacket implements Packet {

    readonly type = PacketType.PLAYER_HIT;

    /**
     * The id of the bullet which hit the player.
     */
    bulletId: number;
    
    /**
     * The object id of the enemy that hit the player.
     */
    objectID: number;
    
    constructor() {
        this.bulletId = 0;
        this.objectID = 0;
    }

    write(writer: Writer): void {
        writer.writeUnsignedByte(this.bulletId);
        writer.writeInt32(this.objectID);
    }

    read(reader: Reader): void {
        this.bulletId = reader.readUnsignedByte();
        this.objectID = reader.readInt32();
    }
}
