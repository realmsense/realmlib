import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * Received when another player shoots a projectile.
 */
export class AllyShootPacket implements Packet {

    readonly type = PacketType.ALLY_SHOOT;

    /**
     * The bullet id of the projectile which was produced.
     */
    bulletId: number;
    /**
     * The object id of the player who fired the projectile.
     */
    ownerId: number;
    /**
     * The item id of the weapon used to fire the projectile.
     */
    containerType: number;
    /**
     * The angle at which the projectile was fired.
     */
    angle: number;

    /**
     * Whether or not the shot is affected by the "Inspired" buff (presumably).
     */
    bard: boolean;
    
    constructor() {
        this.bulletId = 0;
        this.ownerId = 0;
        this.containerType = 0;
        this.angle = 0;
        this.bard = false;
    }

    read(reader: Reader): void {
        this.bulletId = reader.readUnsignedByte();
        this.ownerId = reader.readInt32();
        this.containerType = reader.readInt16();
        this.angle = reader.readFloat();
        this.bard = reader.readBoolean();
    }

    write(writer: Writer): void {
        writer.writeUnsignedByte(this.bulletId);
        writer.writeInt32(this.ownerId);
        writer.writeInt16(this.containerType);
        writer.writeFloat(this.angle);
        writer.writeBoolean(this.bard);
    }
}
