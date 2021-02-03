import { WorldPosData } from '../../data/world-pos-data';
import { PacketMap } from '../../models/packet-map';
import { Packet } from '../../packet';
import { Reader } from '../../reader';
import { Writer } from '../../writer';

/**
 * Sent when the client takes damage from a ground source, such as lava.
 */
export class GroundDamagePacket implements Packet {

  readonly id = PacketMap.GROUNDDAMAGE

  //#region packet-specific members
  /**
   * The current client time.
   */
  time: number;
  /**
   * The current client position.
   */
  position: WorldPosData;
  //#endregion

  constructor() {
    this.time = 0;
    this.position = new WorldPosData();
  }

  write(writer: Writer): void {
    writer.writeInt32(this.time);
    this.position.write(writer);
  }

  read(reader: Reader): void {
    this.time = reader.readInt32();
    this.position.read(reader);
  }
}
