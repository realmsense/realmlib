import { PacketMap } from '../../models/packet-map';
import { Packet } from '../../packet';
import { Reader } from '../../reader';
import { Writer } from '../../writer';

/**
 * Received to provide lists of accounts ids which are
 * those of players who have been locked, ignored, etc.
 */
export class AccountListPacket implements Packet {

  readonly id = PacketMap.ACCOUNTLIST

  //#region packet-specific members
  /**
   * The id of the account id list.
   */
  accountListId: number;
  /**
   * The account ids included in the list.
   */
  accountIds: string[];
  /**
   * > Unknown.
   */
  lockAction: number;
  //#endregion

  constructor() {
    this.accountListId = 0;
    this.accountIds = [];
    this.lockAction = 0;
  }

  read(reader: Reader): void {
    this.accountListId = reader.readInt32();
    const accountIdsLen = reader.readShort();
    this.accountIds = new Array<string>(accountIdsLen);
    for (let i = 0; i < accountIdsLen; i++) {
      this.accountIds[i] = reader.readString();
    }
    this.lockAction = reader.readInt32();
  }

  write(writer: Writer): void {
    writer.writeInt32(this.accountListId);
    writer.writeShort(this.accountIds.length);
    for (const id of this.accountIds) {
      writer.writeString(id);
    }
    writer.writeInt32(this.lockAction);
  }
}
