import { Packet } from '../../packet';
import { PacketType } from '../../packet-type';
import { Reader } from '../../reader';
import { Writer } from '../../writer';

/**
 * Sent when the client sends a chat message.
 */
export class PlayerTextPacket implements Packet {

  readonly type = PacketType.PLAYERTEXT;

  /**
   * The message to send.
   */
  text: string;

  constructor() {
    this.text = '';
  }

  write(writer: Writer): void {
    writer.writeString(this.text);
  }

  read(reader: Reader): void {
    this.text = reader.readString();
  }
}
