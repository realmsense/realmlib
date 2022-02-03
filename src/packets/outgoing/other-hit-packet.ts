import { Packet, PacketType, Writer, Reader } from "../..";

/**
 * Sent when an object or other player has been hit by an enemy projectile.
 */
export class OtherHitPacket implements Packet {

    readonly type = PacketType.OTHER_HIT;

    /**
     * The current client time.
     */
    time: number;
    /**
     * The id of the bullet which hit the object.
     */
    bulletId: number;
    /**
     * The object id of player who fired the projectile which hit the object.
     */
    objectID: number;
    /**
     * The object id of the object which was hit.
     */
    targetId: number;
    
    constructor() {
        this.time = 0;
        this.bulletId = 0;
        this.objectID = 0;
        this.targetId = 0;
    }

    write(writer: Writer): void {
        writer.writeInt32(this.time);
        writer.writeUnsignedByte(this.bulletId);
        writer.writeInt32(this.objectID);
        writer.writeInt32(this.targetId);
    }

    read(reader: Reader): void {
        this.time = reader.readInt32();
        this.bulletId = reader.readUnsignedByte();
        this.objectID = reader.readInt32();
        this.targetId = reader.readInt32();
    }
}
