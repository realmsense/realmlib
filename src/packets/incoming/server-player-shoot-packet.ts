import { Packet, PacketType, WorldPosData, Reader, Writer } from "../..";

/**
 * Received when another player shoots.
 */
export class ServerPlayerShootPacket implements Packet {

    readonly type = PacketType.SERVER_PLAYER_SHOOT;

    /**
     * The id of the bullet that was produced.
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
     * The starting position of the projectile.
     */
    startingPos: WorldPosData;
    /**
     * The angle at which the projectile was fired.
     */
    angle: number;
    /**
     * The damage which will be dealt by the projectile.
     */
    damage: number;
    
    constructor() {
        this.bulletId = 0;
        this.ownerId = 0;
        this.containerType = 0;
        this.startingPos = new WorldPosData();
        this.angle = 0;
        this.damage = 0;
    }

    read(reader: Reader): void {
        this.bulletId = reader.readUnsignedByte();
        this.ownerId = reader.readInt32();
        this.containerType = reader.readInt32();
        this.startingPos.read(reader);
        this.angle = reader.readFloat();
        this.damage = reader.readInt16();
    }

    write(writer: Writer): void {
        writer.writeUnsignedByte(this.bulletId);
        writer.writeInt32(this.ownerId);
        writer.writeInt32(this.containerType);
        this.startingPos.write(writer);
        writer.writeFloat(this.angle);
        writer.writeInt16(this.damage);
    }
}
