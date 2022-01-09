/**
 * A coordinate.
 */
export class Point {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public static fromArray([x, y]: number[]): Point {
        return new Point(x, y);
    }
    
    /**
     * @returns The square distance between this point and another point.
     */
    public squareDistanceTo(point: Point): number {
        const x = this.x - point.x;
        const y = this.y - point.y;
        return x ** 2 + y ** 2;
    }

    /**
     * @returns The distance between this point and another point.
     */
    public distanceTo(point: Point): number {
        return Math.sqrt(this.squareDistanceTo(point));
    }

    /**
     * @returns The angle to another point in radians
     */
    public angleTo(point: Point): number {
        const y = point.y - this.y;
        const x = point.x - this.x;
        return Math.atan2(y, x);
    }

    public equalTo(point: Point): boolean {
        return this.x == point.x && this.y == point.y;
    }

    public isDiagonal(point: Point): boolean {
        return this.x - point.x == 0 || this.y - point.y == 0;
    }

    /**
     * Returns a new `Point` object which has the same coordinates.
     */
    public clone(): Point {
        return new Point(this.x, this.y);
    }

    /**
     * Returns a new `Point` object with floored cooridinates.
     */
    public floor(): Point {
        return new Point(Math.floor(this.x), Math.floor(this.y));
    }

    public toString(): string {
        return `${this.x}, ${this.y}`;
    }
}
