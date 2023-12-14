// hacer una clase ticketmanager

class ProductManager {
    constructor(){
        this.productos = [];
        this.id = 0;

    }
  


    getProductos(){
        return this.productos;
    }

    getProductbyId(productId){
        let producto = this.productos.find(producto => producto.id === productId)
        
        if (producto) {
            return producto
        } else {
            console.log('Not found');
        }
    }

// metodo agregar producto con las validaciones
    addproduct(title, description, price, thumbnail, code, stock){

        if (!title || !description || !price || !thumbnail || !code || !stock){
            console.log('todos los datos son obligatorios')
        }

        let codeExist = this.productos.some(producto => producto.code === code);

        if(codeExist){
            console.log('el codigo ingresado es incorrecto')
        } else{

        
        let producto = {
            id:this.id,
            title:title,
            description:description,
            price:price,
            thumbnail: thumbnail,
            code:code,
            stock:stock,
    
        }
        this.productos.push(producto);
        this.id ++;

    }
    }



}

const productManager = new ProductManager();


productManager.addproduct('t-shirt', 'white t-shirt', '100', 'img1.jpeg','1100', '10');
productManager.addproduct('shoe', 'sports shoes', '250', 'img2.jpeg','1101', '5');


console.log(productManager.getProductos());
console.log(productManager.getProductbyId(4))