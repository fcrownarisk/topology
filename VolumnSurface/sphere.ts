class Sphere {
    private center: number;
    private radius: number;
    constructor(center: Number, radius: number) {
        this.center = center;
        this.radius = radius;
    }
    SurfaceArea(): number {
        return 4 * Math.PI * Math.pow(this.radius, 2);
    }
    Volume(): number {
        return 4.0 / 3.0 * Math.PI * Math.pow(this.radius, 3);
    }
}
console.log(`{sphere.SurfaceArea()},{sphere.Volume()})
