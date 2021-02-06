import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Received when a player has died.
 */
export class DeathPacket implements Packet {

  readonly id = PacketMap.DEATH

  //#region packet-specific members
  /**
   * The account id of the player who died.
   */
  accountId: string;
  /**
   * The character id of the player who died.
   */
  charId: number;
  /**
   * The cause of death.
   */
  killedBy: string;
  /**
   * The object id of the zombie, if the player died wearing a cursed amulet.
   */
  zombieId: number;
  /**
   * The type of zombie, if the player died wearing a cursed amulet.
   */
  zombieType: number;
  /**
   * Whether or not a zombie was spawned.
   *
   * This is a derived property, and is the result of `zombieId !== -1`.
   */
  isZombie: boolean;
  /**
   * Unknown exalt stat type
   */
  unknown: number
  //#endregion

  constructor() {
    this.accountId = "";
    this.charId = 0;
    this.killedBy = "";
    this.zombieId = 0;
    this.zombieType = 0;
    this.unknown = 0;
    this.isZombie = false;
  }

  read(reader: Reader): void {
    this.accountId = reader.readString();
    this.charId = reader.readInt32();
    this.killedBy = reader.readString();
    this.zombieType = reader.readInt32();
    this.zombieId = reader.readInt32();
    this.unknown = reader.readInt32();
    this.isZombie = this.zombieId !== -1;
  }

  write(writer: Writer): void {
   writer.writeString(this.accountId);
   writer.writeInt32(this.charId);
   writer.writeString(this.killedBy);
   writer.writeInt32(this.zombieType);
   writer.writeInt32(this.zombieId);
  }
}
