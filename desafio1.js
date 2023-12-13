// hacer una clase ticketmanager.. la misma es una "coleccion" 

class ProductManager {
    eventos = [];
    precioBaseDeGanancia = 500;
    id = 0;


    getEventos(){
        return this.eventos
    }

    //algoritmo mas básico

    agregarEvento(nombre, lugar, precio, capacidad){
        let evento = {
            id:this.id,
            nombre:nombre,
            lugar:lugar,
            precio:precio,
            capacidad:capacidad,
            fecha:fecha,
            participantes:[]
    
        }
        this.eventos.push(evento)
        this.id = this.id ++;


    }



}

ProductManager()

