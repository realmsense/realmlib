import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * Received to tell the client how many heroes are left in the current realm.
 */
export class HeroLeftPacket implements Packet {

    readonly type = PacketType.HERO_LEFT;

    /**
     * The number of heroes remaining.
     */
    realmHeroesLeft: number;
    
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
