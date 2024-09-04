function calculateIcosahedronVerticesEdges(radius: number): { vertices: [number, number, number][], edges: [number, number][] } {
    const phi = (1 + Math.sqrt(5)) / 2;
    const edge = 2 * radius * Math.sqrt(5) / 10;
    const vertices: [number, number, number][] = [];
    for (let i = 0; i < 12; ++i) {
        const theta = (i < 5) ? 2 * Math.PI / 5 : 0;
        const phi = ((i < 5) ? 1 : -1) * (i % 2 === 0 ? (i / 10) : (i / 10 - 1)) * Math.PI;
        vertices.push([radius * Math.sin(theta) * Math.cos(phi), radius * Math.sin(theta) * Math.sin(phi), radius * Math.cos(theta)]);
    }
    const edges: [number, number][] = [];
    for (let i = 0; i < 12; ++i) {
        edges.push([i, (i + 1) % 12]);
    }
    return { vertices, edges };
}
console.log(`phi,edge`)
