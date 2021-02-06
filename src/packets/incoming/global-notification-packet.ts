import { PacketMap } from "../../models/packet-map";
import { Packet } from "../../packet";
import { Reader } from "../../reader";
import { Writer } from "../../writer";

/**
 * Received when a global notification is sent out to all players.
 */
export class GlobalNotificationPacket implements Packet {

  readonly id = PacketMap.GLOBAL_NOTIFICATION

  //#region packet-specific members
  /**
   * The type of notification received.
   */
  notificationType: number;
  /**
   * The notification message.
   */
  text: string;
  //#endregion

  constructor() {
    this.notificationType = 0;
    this.text = "";
  }

  read(reader: Reader): void {
    this.notificationType = reader.readInt32();
    this.text = reader.readString();
  }

  write(writer: Writer): void {
    writer.writeInt32(this.notificationType);
    writer.writeString(this.text);
  }
}
