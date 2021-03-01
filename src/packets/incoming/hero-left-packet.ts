import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Received to tell the client how many heroes are left in the current realm.
 */
export class HeroLeftPacket implements Packet {

    readonly id = PacketMap.HERO_LEFT

    //#region packet-specific members
    /**
     * The number of heroes remaining.
     */
    realmHeroesLeft: number;
    //#endregion

    constructor() {
        this.realmHeroesLeft = 0;
    }

    read(reader: Reader): void {
        this.realmHeroesLeft = reader.readInt32();
    }

    write(writer: Writer): void {
        writer.writeInt32(this.realmHeroesLeft);
    }
}
