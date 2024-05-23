interface Cone{
    radius: number
    height: number
}
void function Volume(){
    return [(1/3) * Math.PI * Math.pow(this.radius, 2) * this.height]
}
void function SurfaceArea(){
    return [Math.PI * this.radius * this.radius + 2 * Math.PI * this.radius * this.height]
}
console.log(`Volume`,`SurfaceArea`)
