import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * > Unknown
 */
export class NewCharacterInfoPacket implements Packet {

  readonly id = PacketMap.NEW_CHARACTER_INFORMATION

  charXML: string;
  //#endregion

  constructor() {
    this.charXML = "";
  }

  read(reader: Reader): void {
    this.charXML = reader.readString();
  }

  write(writer: Writer): void {
    writer.writeString(this.charXML);
  }
}
