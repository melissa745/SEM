class Libro {
    constructor(titulo, autor, editorial) {
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
    }

    clonar() {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
}

// crear un libro prototipo
let libroPrototipo = new Libro("El Principito", "Antoine de Saint-Exupery", "Reynal & Hitchcock");

// clonar el libro para crear una nueva instancia
let libroClonado = libroPrototipo.clonar();
libroClonado.titulo = "El Principito (Copia)";

console.log(libroPrototipo); // libro original
console.log(libroClonado);   //  libro clonado con el título modificado
