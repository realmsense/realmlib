import { PacketMap } from '../../models/packet-map';
import { Packet } from '../../packet';
import { Reader } from '../../reader';
import { Writer } from '../../writer';

/**
 * > Unknown.
 */
export class KeyInfoResponsePacket implements Packet {

  readonly id = PacketMap.KEY_INFO_RESPONSE

  //#region packet-specific members
  /**
   * > Unknown.
   */
  name: string;
  /**
   * > Unknown.
   */
  description: string;
  /**
   * > Unknown.
   */
  creator: string;
  //#endregion

  constructor() {
    this.name = '';
    this.description = '';
    this.creator = '';
  }

  read(reader: Reader): void {
    this.name = reader.readString();
    this.description = reader.readString();
    this.creator = reader.readString();
  }

  write(writer: Writer): void {
    writer.writeString(this.name);
    writer.writeString(this.description);
    writer.writeString(this.creator);
  }
}
