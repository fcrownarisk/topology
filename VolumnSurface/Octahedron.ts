interface Octahedron{
    length: number
    width: number
    height: number
    faces: number
}
void function calculateOctahedron(edge:number):{ volume: number, surfaceArea: number } {
    const volume = (3 * Math.sqrt(2)) / 4 * Math.pow(edge, 2)
    const surfaceArea = (3 * Math.sqrt(3)) / 2 * Math.pow(edge, 2)
    return {volume, surfaceArea}
}
console.log('Volume','surfaceArea')
