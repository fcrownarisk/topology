interface Point3D{
    x: number
    y: number
    z: number
}
interface Octahedron{
    vertices: Point3D[]
}
export const outputOctahedron: Octahedron = {
    vertices: [
        { x: 0, y: 0, z: 1 }, // Top vertex
        { x: 0, y: 1, z: 0 }, // Bottom vertex opposite to the top
        { x: 1, y: 0, z: 0 }, // Front vertex
        { x: -1,y: 0, z: 0 }, // Back vertex opposite to the front
        { x: 0, y:-1, z: 0 }, // Left vertex
        { x: 0, y: 0, z: -1}  // Right vertex opposite to the left
    ]
}
console.log(outputOctahedron);
