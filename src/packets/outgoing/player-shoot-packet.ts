import { WorldPosData } from "../../data/world-pos-data";
import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../models/packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Sent when the player shoots a projectile.
 */
export class PlayerShootPacket implements Packet {

    readonly id = PacketMap.PLAYER_SHOOT

    //#region packet-specific members
    /**
     * The current client time.
     */
    time: number;
    /**
     * The id of the bullet which was fired.
     */
    bulletId: number;
    /**
     * The item id of the weapon used to fire the projectile.
     */
    containerType: number;
    /**
     * The position at which the projectile was fired.
     */
    startingPos: WorldPosData;
    /**
     * The angle at which the projectile was fired.
     */
    angle: number;
    /**
     * The speed multiplier for the projectile (affected by Inspired).
     */
    speedMult: number;
    /**
     * The lifetime MS multiplier for the projectile (affected by Inspired?)
     */
    lifeMult: number;
    /**
     * If the projectile is a burst
     */
    isBurst: boolean;
    //#endregion

    constructor() {
        this.time = 0;
        this.bulletId = 0;
        this.containerType = 0;
        this.startingPos = new WorldPosData();
        this.angle = 0;
        this.speedMult = 0;
        this.lifeMult = 0;
        this.isBurst = false;
    }

    write(writer: Writer): void {
        writer.writeInt32(this.time);
        writer.writeByte(this.bulletId);
        writer.writeInt16(this.containerType);
        this.startingPos.write(writer);
        writer.writeFloat(this.angle);
        // NB(thomas-crane): the client uses AS3"s `int` function which is
        // equivalent to `Math.floor` in JS.
        writer.writeInt16(Math.floor(this.speedMult * 1000));
        writer.writeInt16(Math.floor(this.lifeMult * 1000));
        writer.writeBoolean(this.isBurst);
    }

    read(reader: Reader): void {
        this.time = reader.readInt32();
        this.bulletId = reader.readByte();
        this.containerType = reader.readInt16();
        this.startingPos.read(reader);
        this.angle = reader.readFloat();
        this.speedMult = Math.floor(reader.readInt16() / 1000);
        this.lifeMult = Math.floor(reader.readInt16() / 1000);
        this.isBurst = reader.readBoolean();
    }
}
