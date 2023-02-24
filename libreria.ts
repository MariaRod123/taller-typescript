//defino los atributos
interface Ilibro {
    titulo:string;
    autor:string; 
    precio:number; 
}

//debo crear la interface para definir los metodos 
interface IMetodosLibro {

    agregarLibro(libro: Ilibro): void;
    eliminarLibro(titulo:string):void;
    mostrarLibros():void;
    buscarPorAutor(autor:string):Ilibro;
    buscarPorPrecio(precio:number):Ilibro;
    ordenarPorPrecio():void;
    obtenerPromedioPrecios():number;
}

//en la clase voy a implementar los metodos definidos en la interface de metodos
class libreria implements IMetodosLibro  {
    private libros: Ilibro[] = []
   
    constructor() {
        this.libros = []                                                   
    }

    public agregarLibro(libro: Ilibro): void {
        this.libros.push(libro); 
      }
    
    public eliminarLibro(titulo: string): void {
        const index = this.libros.findIndex(libro => libro.titulo === titulo);
        if (index > -1) {
          this.libros.splice(index, 1); 
        }
        else  
         throw new Error('No existe el libro')
      }

    public mostrarLibros(): void {
        console.log(this.libros);
      }

    public buscarPorAutor(autor: string): Ilibro{
        const libro =  this.libros.find( libro => libro.autor === autor)
       if (!libro) throw new Error('El autor que está buscando no se encuentra')
       return libro;

    }

    public buscarPorPrecio( precio: number): Ilibro{
        const libro= this.libros.find(libro => libro.precio ===precio)
        if (!libro) throw new Error ('No hay libros con el precio que está buscando')
        return libro;
    }
    
    public ordenarPorPrecio(): void{
        this.libros.sort(function(a,b) {
            return a.precio - b.precio;
        });

    }

   public obtenerPromedioPrecios(): number{
    const totalPrecios = this.libros.reduce((suma, libro) => suma + libro.precio, 0);
    const promedioPrecios = totalPrecios / this.libros.length;
    return promedioPrecios;
    
    }
}

// datos de los libros 
const libro1: Ilibro ={
    titulo: "Cosmos",
    autor: "Carl Sagan",
    precio: 1200
}

const libro2: Ilibro ={
    titulo: "Cuentos de amor, de locura y de muerte",
    autor: "Horacio Quiroga",
    precio: 790
}

const libro3: Ilibro ={
    titulo: "El discurso del método",
    autor: "Descartes",
    precio: 320
}

const libro4: Ilibro ={
    titulo: "La división del trabajo social",
    autor: "Emile Durkheim",
    precio: 1870
}

const libro5: Ilibro = {
    titulo: "Bajo la misma estrella",
    autor:"John Green",
    precio: 959
}


const miLibreria = new libreria();
//debe ir agregando los libros que se especifican 
console.log("Libros agregados")
miLibreria.agregarLibro(libro1);
miLibreria.agregarLibro(libro2);
miLibreria.agregarLibro(libro3);
miLibreria.agregarLibro(libro4);
miLibreria.agregarLibro(libro5);
console.log(miLibreria.mostrarLibros());

//resultado esperado: debe eliminar el libro especificado de la lista de libros
console.log("Listado de libros luego de eliminar uno");
miLibreria.eliminarLibro("El discurso del método");
console.log(miLibreria.mostrarLibros());


//resultado esperado: mostrar que libro hay en la librería tiene por autor John Green
console.log("Busqueda de libro según el autor:", miLibreria.buscarPorAutor("John Green"));

//resultado esperado: mostrar los datos del libro que sale 1200
console.log("Busqueda del libros segun el precio:", miLibreria.buscarPorPrecio(1200));


//resultado esperado: mostrar los libros ordenados por precio:
console.log("Ordenamiento de libros desde el menor al mayor valor:")
miLibreria.ordenarPorPrecio();
console.log(miLibreria.mostrarLibros());

//resultado esperado: mostrar el promedio de los precios de los libros
console.log(miLibreria.obtenerPromedioPrecios());