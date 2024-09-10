class Pyramid {
    baseWidth: number;
    baseLength: number;
    positionX: number;
    positionZ: number;
    height: number;
constructor(baseWidth: number, baseLength: number, positionX: number, positionZ: number, height: number) {
        this.baseWidth = baseWidth;
        this.baseLength = baseLength;
        this.positionX = positionX;
        this.positionZ = positionZ;
        this.height = height;
    }
    Volume(): number {
        return (1 / 3) * this.baseWidth * this.baseLength * this.height;
    }
    SurfaceArea(): number {
        const slantHeight = Math.sqrt((2 * this.baseWidth) ** 2 + this.height ** 2);
        return (1 / 2) * this.baseWidth * this.baseLength + this.baseWidth * slantHeight;
    }
    
}
export const pyramid = new Pyramid(1, 1, 0, 0, 1);
console.log(`{pyramid.Volume()} cubic units),{pyramid.SurfaceArea()} square units`);
