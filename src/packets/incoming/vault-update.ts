import { Packet } from "../../packet";
import { Reader } from "../../reader";
import { read as compressedRead } from "../../data/compressed-int";
import { Writer } from "../../writer";
import { PacketMap } from "../../models/packet-map";

/**
 * Received for information when the player enters the new vault
 */
export class VaultUpdatePacket implements Packet {

    readonly id = PacketMap.VAULT_UPDATE;

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
        this.vaultItemCount = compressedRead(reader);
        this.giftItemCount = compressedRead(reader);
        this.potionItemCount = compressedRead(reader);

        let counter = 0;
        const itemCount = compressedRead(reader);
        while (counter < itemCount) {
            this.vaultContents.push(compressedRead(reader));
            counter++;
        }

        const giftItemCount = compressedRead(reader);
        counter = 0;
        while (counter < giftItemCount) {
            this.giftContents.push(compressedRead(reader));
            counter++;
        }

        const potionCount = compressedRead(reader);
        counter = 0;
        while (counter < potionCount) {
            this.potionContents.push(compressedRead(reader));
            counter++;
        }

        this.vaultUpgradeCost = reader.readShort();
        this.potionUpgradeCost = reader.readShort();
        this.currentPotionMax = reader.readShort();
        this.nextPotionMax = reader.readShort();
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
        writer.writeShort(this.vaultUpgradeCost);
        writer.writeShort(this.potionUpgradeCost);
        writer.writeShort(this.currentPotionMax);
        writer.writeShort(this.nextPotionMax);
    }
}
