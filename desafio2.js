// hacer una clase productManager

const fs = require('fs');

class ProductManager {
    constructor(path){
        this.productos = [];
        this.id = 0;
        this.path = path;
        this.traerProductos();
        this.guardarProductos();

    }

    //funcion para pasar los datos a string
    guardarProductos() {
        fs.promises.writeFile(this.path, JSON.stringify(this.productos, null, 2))
            .then(() => console.log('Productos guardados correctamente.'))
            .catch((err) => console.log(err))
    }

    //funcion para parsear de nuevo los datos
    traerProductos(){
        fs.promises.readFile(this.path, 'utf-8')
        .then((data) => {
            this.productos = JSON.parse(data);
          return this.productos;

        })
        .catch((err) => console.log(err))
    }


  

// obtener los poductos
getProductos(){
  this.traerProductos()
    }






// obtener un producto por ID
    getProductbyId(productId){
        let producto = this.productos.find(producto => producto.id === productId);
        
        if (producto) {
            return producto
        } else {
            console.log('Not found');
        }
    }

// metodo agregar producto con las validaciones
   addproduct(title, description, price, thumbnail, code, stock){

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



         fs.promises.writeFile(this.path, JSON.stringify(this.productos))
        .then(()=> console.log('Producto agregado y archivo actualizado correctamente'))
        .catch((err)=>console.log(err))

       
        

    }
    }

    // borra un producto por id
    deleteProduct(id){
        let idExist = this.productos.some(producto => producto.id === id);

        if(idExist){
            this.productos = this.productos.filter(producto => producto.id != id);
            console.log(`el producto con id:  ${id} se eliminó exitosamente`);
            this.guardarProductos();

        } else{
            console.log(`el id: ${id} no existe`);
        }



    }

  //actualizar producto
upDateProduct(id, propAmodificar, cambio){
    let producto = this.productos.find(producto => producto.id === id);
    if(producto){
        if(propAmodificar in producto){
            producto[propAmodificar]= cambio;
            console.log('cambio realizado con exito');
            this.guardarProductos();
        }else{
            console.log('la propiedad a modificar no existe');

        }
    } else{
        console.log('el Id indicado no existe');
    }

}

}



const productManager = new ProductManager('./package-json/productos.json');



productManager.addproduct('t-shirt', 'white t-shirt', '100', 'img1.jpeg','1100', '10');
productManager.addproduct('shoe', 'sports shoes', '250', 'img2.jpeg','1101', '5');
productManager.addproduct('jeans', 'fashion white jeans', '200', 'img3.jpeg','1102', '3');
productManager.addproduct('skirt', 'long skirt', '150', 'img4.jpeg','1103', '16');



//console.log(productManager.getProductos());

//productManager.getProductbyId(0);
productManager.deleteProduct(1)
//console.log(productManager.productos);

