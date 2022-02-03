import { Packet, PacketType, Writer, Reader } from "../..";

/**
 * Sent to edit an account id list.
 */
export class EditAccountListPacket implements Packet {

    readonly type = PacketType.EDIT_ACCOUNT_LIST;

    /**
     * The id of the account id list being edited.
     */
    accountListId: number;
    /**
     * Whether the edit is to add to the list or remove from it.
     */
    add: boolean;
    /**
     * The object id of the player to add to the list.
     */
    objectID: number;
    
    constructor() {
        this.accountListId = 0;
        this.add = false;
        this.objectID = 0;
    }

    write(writer: Writer): void {
        writer.writeInt32(this.accountListId);
        writer.writeBoolean(this.add);
        writer.writeInt32(this.objectID);
    }

    read(reader: Reader): void {
        this.accountListId = reader.readInt32();
        this.add = reader.readBoolean();
        this.objectID = reader.readInt32();
    }
}
