import { WorldPosData } from "../../data/world-pos-data";
import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Received when another player shoots.
 */
export class ServerPlayerShootPacket implements Packet {

    readonly id = PacketMap.SERVER_PLAYER_SHOOT

    //#region packet-specific members
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
    //#endregion

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
        this.damage = reader.readShort();
    }

    write(writer: Writer): void {
        writer.writeUnsignedByte(this.bulletId);
        writer.writeInt32(this.ownerId);
        writer.writeInt32(this.containerType);
        this.startingPos.write(writer);
        writer.writeFloat(this.angle);
        writer.writeShort(this.damage);
    }
}
