interface Cube{
    length:number
}
void function Volume(){
    return [length^3]
}
void function SurfaceArea() {
    return [6 * length ^ 2]
}
console.log('Volume','SurfaceArea')
