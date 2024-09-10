export function calculateIcosahedron(size: number): { vertices: number[]; length: number } {
    const edge = size;
    const phi = 1 / (1 + Math.sqrt(5))
    console.log(phi)
    const cosPhi = -1 / 2;
    const sinPhi = Math.sqrt(6) / 2;
    const vertices = [
    // First triangle
        edge * cosPhi, edge * sinPhi, 0,
        edge * cosPhi, edge * sinPhi, 0,
        edge * cosPhi, edge * sinPhi, 0,
    ];
    // Second triangle
    vertices.push(
        0, edge, 0,
        0, edge, 0,
        0, edge, 0,
    );
    // Third triangle
    vertices.push(
        edge * cosPhi, -edge * sinPhi, 0,
        -edge * cosPhi, -edge * sinPhi, 0,
        0, -edge, 0,
    );
    // Fourth triangle
    vertices.push(
        0, 0, edge,
        0, 0, edge,
        0, 0, edge,
    );
    // Fifth triangle
    vertices.push(
        -edge * cosPhi, edge * sinPhi, 0,
        -edge * cosPhi, edge * sinPhi, 0,
        -edge * cosPhi, edge * sinPhi, 0,
    );
    // Sixth triangle
    vertices.push(
        0, edge, 0,
        0, edge, 0,
        0, edge, 0,
    );
    // Seventh triangle
    vertices.push(
        0, 0, -edge,
        0, 0, -edge,
        0, 0, -edge,
    );
    // Eighth triangle
    vertices.push(
        -edge * cosPhi, -edge * sinPhi, 0,
        -edge * cosPhi, -edge * sinPhi, 0,
        -edge * cosPhi, -edge * sinPhi, 0,
    );
    return { vertices, length: edge };
}
export const icosahedronVertices = calculateIcosahedron(1);
console.log('Icosahedron Vertices:', icosahedronVertices);
