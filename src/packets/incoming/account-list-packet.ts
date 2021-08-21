import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * Received to provide lists of accounts ids which are
 * those of players who have been locked, ignored, etc.
 */
export class AccountListPacket implements Packet {

    readonly type = PacketType.ACCOUNT_LIST;

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
    
    constructor() {
        this.accountListId = 0;
        this.accountIds = [];
        this.lockAction = 0;
    }

    read(reader: Reader): void {
        this.accountListId = reader.readInt32();
        const accountIdsLen = reader.readInt16();
        this.accountIds = new Array<string>(accountIdsLen);
        for (let i = 0; i < accountIdsLen; i++) {
            this.accountIds[i] = reader.readString();
        }
        this.lockAction = reader.readInt32();
    }

    write(writer: Writer): void {
        writer.writeInt32(this.accountListId);
        writer.writeInt16(this.accountIds.length);
        for (const id of this.accountIds) {
            writer.writeString(id);
        }
        writer.writeInt32(this.lockAction);
    }
}
