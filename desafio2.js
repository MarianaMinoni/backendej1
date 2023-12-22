// hacer una clase productManager

const fs = require('fs');

class ProductManager {
    constructor(path){
        this.productos = [];
        this.id = 0;
        this.path = path;

    }
  


    getProductos(){
        return this.productos;
    }

    getProductbyId(productId){
        let producto = this.productos.find(producto => producto.id === productId);
        
        if (producto) {
            return producto
        } else {
            console.log('Not found');
        }
    }

// metodo agregar producto con las validaciones
   async addproduct(title, description, price, thumbnail, code, stock){

        if (!title || !description || !price || !thumbnail || !code || !stock){
            console.log('todos los datos son obligatorios');
        }

        let codeExist = this.productos.some(producto => producto.code === code);

        if(codeExist){
            console.log('el codigo ingresado es incorrecto');
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

        await fs.promises.writeFile(this.path, JSON.stringify(this.productos))
        .then(()=> console.log('Producto agregado y archivo actualizado correctamente'))
        .catch((err)=>console.log(err))

       
        

    }
    }
    deleteProduct(id){
        let idExist = this.productos.some(producto => producto.id === id);

        if(idExist){
            this.productos = this.productos.filter(producto => producto.id != id);
            console.log(`el producto con id:  ${id} se eliminó exitosamente`);

        } else{
            console.log(`el id: ${id} no existe`);
        }



    }

upDateProduct(id, prop, cambio){
    let producto = this.productos.find(producto => producto.id === id);
    if(producto){
        if(campo in producto){
            producto[campo]= nuevoCampo;
        }
    }

}

}



const productManager = new ProductManager('./productos.txt');



productManager.addproduct('t-shirt', 'white t-shirt', '100', 'img1.jpeg','1100', '10');
productManager.addproduct('shoe', 'sports shoes', '250', 'img2.jpeg','1101', '5');
productManager.addproduct('jeans', 'fashion white jeans', '200', 'img3.jpeg','1102', '3');



//console.log(productManager.getProductos());
//console.log(productManager.getProductbyId(0));
//productManager.deleteProduct(0)
console.log(productManager.productos);