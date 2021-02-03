import { PacketMap } from '../../models/packet-map';
import { Packet } from '../../packet';
import { Reader } from '../../reader';
import { Writer } from '../../writer';

/**
 * Sent to acknowledge the `PingPacket.`
 */
export class PongPacket implements Packet {

  readonly id = PacketMap.PONG

  //#region packet-specific members
  /**
   * The serial value received in the `PingPacket` which this acknowledges.
   */
  serial: number;
  /**
   * The current client time.
   */
  time: number;
  //#endregion

  constructor() {
    this.serial = 0;
    this.time = 0;
  }

  write(writer: Writer): void {
    writer.writeInt32(this.serial);
    writer.writeInt32(this.time);
  }

  read(reader: Reader): void {
    this.serial = reader.readInt32();
    this.time = reader.readInt32();
  }
}
