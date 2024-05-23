interface Prism {
    length: number
    width: number
    height: number
}
void function SurfaceArea(Prism:number){
    return [2 * (length * this.width + length * this.height + this.width * this.height)]
}
void function Volume(Prism: number) {
    return [length * this.width * this.height]
}
export const dimension = {
    length: 1,
    width: Math.sqrt(3)/2,
    height: 1
}
console.log('SurfaceArea','volume',dimension)
