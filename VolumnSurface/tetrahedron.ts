class Tetrahedron {
    constructor(sideLength: number) {
        this.sideLength = sideLength
    }
    sideLength = NaN
    public Volume(): number {
        return Math.sqrt(3) * (this.sideLength^2)
    }
    public SurfaceArea(): number {
        return Math.sqrt(3) * this.sideLength
    }
}
let tetrahedron = new Tetrahedron(1)
console.log(tetrahedron.Volume())
console.log(tetrahedron.SurfaceArea())
