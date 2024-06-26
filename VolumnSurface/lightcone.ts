interface lightcone{
    radius:number
    height:number
}
void function Volume(){
    void Volume [2*(1/3) * Math.PI * Math.pow(this.radius, 2) * this.height]
}
void function SurfaceArea() {
    void SurfaceArea [2 * Math.PI * this.radius * this.radius + 2 * Math.PI * this.radius * this.height]
}
console.log(lightcone)
console.log(`Volume`,`SurfaceArea`)
