import { Packet, PacketType, Reader, Writer } from "../..";

/**
 * Received for information when the player enters the new vault
 */
export class VaultContentPacket implements Packet {

    readonly type = PacketType.VAULT_CONTENT;

    unknownBool: boolean;
    vaultItemCount: number;
    giftItemCount: number;
    potionItemCount: number;
    vaultContents: number[];
    giftContents: number[];
    potionContents: number[];
    vaultUpgradeCost: number;
    potionUpgradeCost: number;
    currentPotionMax: number;
    nextPotionMax: number;

    constructor() {
        this.unknownBool = false;
        this.vaultItemCount = 0;
        this.giftItemCount = 0;
        this.potionItemCount = 0;
        this.vaultContents = [];
        this.giftContents = [];
        this.potionContents = [];
        this.vaultUpgradeCost = 0;
        this.potionUpgradeCost = 0;
        this.currentPotionMax = 0;
        this.nextPotionMax = 0;
    }

    read(reader: Reader): void {
        this.unknownBool = reader.readBoolean();
        this.vaultItemCount = reader.readCompressedInt();
        this.giftItemCount = reader.readCompressedInt();
        this.potionItemCount = reader.readCompressedInt();

        let counter = 0;
        const itemCount = reader.readCompressedInt();
        while (counter < itemCount) {
            this.vaultContents.push(reader.readCompressedInt());
            counter++;
        }

        const giftItemCount = reader.readCompressedInt();
        counter = 0;
        while (counter < giftItemCount) {
            this.giftContents.push(reader.readCompressedInt());
            counter++;
        }

        const potionCount = reader.readCompressedInt();
        counter = 0;
        while (counter < potionCount) {
            this.potionContents.push(reader.readCompressedInt());
            counter++;
        }

        this.vaultUpgradeCost = reader.readInt16();
        this.potionUpgradeCost = reader.readInt16();
        this.currentPotionMax = reader.readInt16();
        this.nextPotionMax = reader.readInt16();
    }

    write(writer: Writer): void {
        writer.writeBoolean(true);
        writer.writeInt32(this.vaultItemCount);
        writer.writeInt32(this.giftItemCount);
        writer.writeInt32(this.potionItemCount);
        writer.writeInt32(this.vaultContents.length);
        for (const item of this.vaultContents) {
            writer.writeInt32(item);
        }
        writer.writeInt32(this.giftContents.length);
        for (const item of this.giftContents) {
            writer.writeInt32(item);
        }
        writer.writeInt32(this.potionContents.length);
        for (const item of this.potionContents) {
            writer.writeInt32(item);
        }
        writer.writeInt16(this.vaultUpgradeCost);
        writer.writeInt16(this.potionUpgradeCost);
        writer.writeInt16(this.currentPotionMax);
        writer.writeInt16(this.nextPotionMax);
    }
}
