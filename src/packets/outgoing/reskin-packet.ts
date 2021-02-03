import { PacketMap } from '../../models/packet-map';
import { Packet } from '../../packet';
import { Reader } from '../../reader';
import { Writer } from '../../writer';

/**
 * Sent to activate a new skin for the current character.
 */
export class ReskinPacket implements Packet {

  readonly id = PacketMap.RESKIN

  //#region packet-specific members
  /**
   * The id of the skin to activate.
   */
  skinId: number;
  //#endregion

  constructor() {
    this.skinId = 0;
  }

  write(writer: Writer): void {
    writer.writeInt32(this.skinId);
  }

  read(reader: Reader): void {
    this.skinId = reader.readInt32();
  }
}
