import { PacketMap } from '../../models/packet-map';
import { Packet } from '../../packet';
import { Reader } from '../../reader';
import { Writer } from '../../writer';

/**
 * Received in response to a `BuyPacket`.
 */
export class BuyResultPacket implements Packet {

  readonly id = PacketMap.BUYRESULT

  //#region packet-specific members
  /**
   * The result code.
   */
  result: number;
  /**
   * > Unknown.
   */
  resultString: string;
  //#endregion

  constructor() {
    this.result = 0;
    this.resultString = '';
  }

  read(reader: Reader): void {
    this.result = reader.readInt32();
    this.resultString = reader.readString();
  }

  write(writer: Writer): void {
    writer.writeInt32(this.result);
    writer.writeString(this.resultString);
  }
}
