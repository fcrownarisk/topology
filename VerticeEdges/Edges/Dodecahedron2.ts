void function calculateDodecahedronVerticesAndEdges(radius: number): { vertices: [number, number, number][], edges: [number, number][] } {
    const phi = (1 + Math.sqrt(5)) / 2;
    const Radius = radius / Math.sqrt(3);
    const Length = 2 * radius / Math.sqrt(5);
    const theta = 2 * Math.PI / 5;
    const vertices: [number, number, number][] = [];
    for (let i = 0; i < 12; ++i) {
        vertices.push([
            Radius * (5 + phi) * Math.cos(theta * i),
            Radius * (5 - phi) * Math.sin(theta * i),
            Radius * Math.cos(theta * i)
        ]);
    }
    const edges: [number, number][] = [];
    for (let i = 0; i < 12; ++i) {
        edges.push([i, (i + 1) % 12]);
    }
    return { vertices, edges };
}

