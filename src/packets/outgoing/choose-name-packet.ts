import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Sent to change the client"s account name.
 */
export class ChooseNamePacket implements Packet {

  readonly id = PacketMap.CHOOSENAME

  //#region packet-specific members
  /**
   * The name to change the account"s name to.
   */
  name: string;
  //#endregion

  constructor() {
    this.name = "";
  }

  write(writer: Writer): void {
    writer.writeString(this.name);
  }

  read(reader: Reader): void {
    this.name = reader.readString();
  }
}
