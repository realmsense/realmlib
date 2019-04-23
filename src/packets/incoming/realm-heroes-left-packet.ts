import { Writer } from '../../writer';
import { Reader } from '../../reader';
import { PacketType } from '../../packet-type';
import { Packet } from '../../packet';

/**
 * Received to tell the client how many heroes are left in the current realm.
 */
export class RealmHeroesLeftPacket implements Packet {

  type = PacketType.REALM_HERO_LEFT_MSG;
  propagate = true;

  //#region packet-specific members
  /**
   * The number of heroes remaining.
   */
  realmHeroesLeft: number;
  //#endregion

  read(reader: Reader): void {
    this.realmHeroesLeft = reader.readInt32();
  }

  write(writer: Writer): void {
    writer.writeInt32(this.realmHeroesLeft);
  }
}