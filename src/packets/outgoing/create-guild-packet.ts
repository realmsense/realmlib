import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Sent to create a new guild.
 */
export class CreateGuildPacket implements Packet {

  readonly id = PacketMap.CREATEGUILD

  //#region packet-specific members
  /**
   * The name of the guild being created.
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
