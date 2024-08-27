interface Hexahedron{
    length:number
}
function Volume(){
    return [length^3]
}
function SurfaceArea() {
    return [6 * length ^ 2]
}
console.log('Volume','SurfaceArea')
