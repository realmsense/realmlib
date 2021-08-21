import { Packet, PacketMap, GroundTileData, ObjectData, Reader, Writer } from "../..";

/**
 * Received when an update even occurs. Some events include
 * + One or more new objects have entered the map (become visible)
 * + One or more objects have left the map (become invisible)
 * + New tiles are visible
 * Class: `IEKOKOHCCDK`
 */
export class UpdatePacket implements Packet {

    readonly id = PacketMap.UPDATE

    /**
     * The new tiles which are visible.
     * Property: `OLILOJAALNJ`
     */
    tiles: GroundTileData[];

    /**
     * The new objects which have entered the map (become visible).
     * Property: `MFJMLMCLPCC`
     */
    newObjects: ObjectData[];

    /**
     * The visible objects which have left the map (become invisible).
     * Property: `LHBOGDNNELA`
     */
    drops: number[];

    constructor() {
        this.tiles = [];
        this.newObjects = [];
        this.drops = [];
    }

    read(reader: Reader): void {
        const tilesLen = reader.readCompressedInt();
        this.tiles = new Array<GroundTileData>(tilesLen);
        for (let i = 0; i < tilesLen; i++) {
            const tile = new GroundTileData();
            tile.read(reader);
            this.tiles[i] = tile;
        }

        const newObjectsLen = reader.readCompressedInt();
        this.newObjects = new Array<ObjectData>(newObjectsLen);
        for (let i = 0; i < newObjectsLen; i++) {
            const object = new ObjectData();
            object.read(reader);
            this.newObjects[i] = object;
        }

        const dropsLen = reader.readCompressedInt();
        this.drops = new Array<number>(dropsLen);
        for (let i = 0; i < dropsLen; i++) {
            this.drops[i] = reader.readCompressedInt();
        }
    }

    write(writer: Writer): void {
        writer.writeInt16(this.tiles.length);
        for (const tile of this.tiles) {
            tile.write(writer);
        }

        writer.writeInt16(this.newObjects.length);
        for (const object of this.newObjects) {
            object.write(writer);
        }

        writer.writeInt16(this.drops.length);
        for (const drop of this.drops) {
            writer.writeInt32(drop);
        }
    }
}
