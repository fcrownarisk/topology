void function calculateDodecahedronVertices(size: number): number[] {
    const r = Math.sqrt(3) / 2 * size;
    return [
        r, 0, 0, // 1
        -r, 0, 0, // 2
        0, r, 0, // 3
        0, -r, 0, // 4
        0, 0, r, // 5
        0, 0, -r, // 6
        r / Math.sqrt(2), r / Math.sqrt(2), // 7
        -r / Math.sqrt(2), r / Math.sqrt(2), // 8
        r / Math.sqrt(2), -r / Math.sqrt(2), // 9
        -r / Math.sqrt(2), -r / Math.sqrt(2), // 10
        r * (3 - Math.sqrt(5)) / 2, 0, r * (Math.sqrt(5) - 1) / 2, // 11
        -r * (3 - Math.sqrt(5)) / 2, 0, r * (Math.sqrt(5) - 1) / 2, // 12
        0, r, -r, // 13
        0, -r, -r, // 14
        r, 0, -r, // 15
        -r, 0, -r, // 16
    ];
}
export function calculateIcosahedronface(edge: number) {
    // Formula for the edge length
    // Create an array of vertices for an icosahedron
    return [
        // Vertex 1
        0, 0, -edge,
        // Vertex 2
        0, 0, edge,
        // Vertices 3, 4, 5, 6, 7, 8 are the midpoints of the edges around vertex 1
        edge * Math.cos(Math.PI * 15 / 180), edge * Math.sin(Math.PI * 15 / 180), -edge / 2,
        -edge * Math.cos(Math.PI * 15 / 180), edge * Math.sin(Math.PI * 15 / 180), -edge / 2,
        edge * Math.cos(Math.PI * 75 / 180), -edge * Math.sin(Math.PI * 75 / 180), -edge / 2,
        -edge * Math.cos(Math.PI * 75 / 180), -edge * Math.sin(Math.PI * 75 / 180), -edge / 2,
        edge * Math.cos(Math.PI * 165 / 180), edge * Math.sin(Math.PI * 165 / 180), edge / 2,
        -edge * Math.cos(Math.PI * 165 / 180), edge * Math.sin(Math.PI * 165 / 180), edge / 2,
        edge * Math.cos(Math.PI * 195 / 180), -edge * Math.sin(Math.PI * 195 / 180), edge / 2,
        -edge * Math.cos(Math.PI * 195 / 180), -edge * Math.sin(Math.PI * 195 / 180), edge / 2,
        // Vertices 9, 10, 11, 12, 13, 14, 15 are the midpoints of the edges around vertex 2
        edge * Math.cos(Math.PI * 90 / 180), -edge * Math.sin(Math.PI * 90 / 180), -edge / 2,
        -edge * Math.cos(Math.PI * 90 / 180), -edge * Math.sin(Math.PI * 90 / 180), -edge / 2,
        edge * Math.cos(Math.PI * 210 / 180), edge * Math.sin(Math.PI * 210 / 180), edge / 2,
        -edge * Math.cos(Math.PI * 210 / 180), edge * Math.sin(Math.PI * 210 / 180), edge / 2,
        edge * Math.cos(Math.PI * 240 / 180), -edge * Math.sin(Math.PI * 240 / 180), edge / 2,
        -edge * Math.cos(Math.PI * 240 / 180), -edge * Math.sin(Math.PI * 240 / 180), edge / 2,
        edge * Math.cos(Math.PI * 300 / 180), edge * Math.sin(Math.PI * 300 / 180), -edge / 2,
        -edge * Math.cos(Math.PI * 300 / 180), edge * Math.sin(Math.PI * 300 / 180), -edge / 2
    ];
}
export const dodecahedronVertices = calculateIcosahedronface;
console.log('Dodecahedron Vertices:', dodecahedronVertices)
