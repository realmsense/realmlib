import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../models/packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Received in response to `MapInfoPacket`.
 */
export class ForgeUnlockedBlueprintsPacket implements Packet {

    readonly id = PacketMap.FORGE_UNLOCKED_BLUEPRINTS;

    /**
     * An array of blueprint IDs that the player has unlocked.
     */
    unlockedBlueprints: number[];

    constructor() {
        this.unlockedBlueprints = [];    
    }

    read(reader: Reader): void {
        const count = reader.readByte();
        for (let i = 0; i < count; i++) {
            this.unlockedBlueprints.push(reader.readCompressedInt());
        }
    }

    write(writer: Writer): void {
        writer.writeByte(this.unlockedBlueprints.length);
        for (let i = 0; i < this.unlockedBlueprints.length; i++) {
            writer.writeInt32(this.unlockedBlueprints[i]);
        }
    }
}
