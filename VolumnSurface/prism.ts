class Prism{
    length: number;
    width: number;
    height: number;
    faces: number;
    constructor(length: number, width: number, height: number, faces: number) {
        this.length = length;
        this.width = width;
        this.height = height;
        this.faces = faces;
    }
}
export const ThePrism = new Prism(3, 4, 5, 5);
console.log(length,Prism.width,Prism.height,Prism.faces)
