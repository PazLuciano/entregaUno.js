let idProductos = 1;
class ProductManager{
    static listaProductos = []
    
    static addProduct = (product) => { // recibe un objeto con la informacion
        
        if(product.hasOwnProperty("title") && product.hasOwnProperty("description") && product.hasOwnProperty("price")
        && product.hasOwnProperty("thumbnail") && product.hasOwnProperty("code") && product.hasOwnProperty("stock")){            
            if(ProductManager.listaProductos.length == 0){
                // console.log(typeof(idProductos));

                ProductManager.listaProductos.push({ idProductos : product });
                idProductos = idProductos + 1;
                return "Elemento añadido correctamente!"
            }else{
                // let numero = Object.values(ProductManager.listaProductos)
                
                let valores = Object.values(ProductManager.listaProductos);
                
                valores.forEach(objeto => {
                    if (objeto.idProductos.code == product.code){
                        // console.log("Elemento agregado anteriormente2Intento");
                        // let retorno = "Elemento agregado anteriormente2intento!";
                        return "Elemento agregado anteriormente2intento!"
                    }else{                      
                        ProductManager.listaProductos.push( { idProductos : product } )
                        idProductos = idProductos + 1;
                        // console.log("Elemento añandido correctaente!2 intento LOG");
                        // let retorno = "Elemento añadido correctamente!2 intento";
                        return "Elemento añadido correctamente!2 intento"
                    }
                })            
            }
        }else{
            console.log("campos incorrectos");
            return "Campos incorrectos"
        }
    }
    static getProducts = () =>{
        return ProductManager.listaProductos
    }

    static getProductById = (id) =>{
        
        ProductManager.listaProductos.forEach(element => {
            
            console.log(element.key);
            if(element.key() == id){
                return element.value;
            }
            return "not found";
        })
    }
}


objetoPrueba = {
    title : "Prueba",
    description : "Estamos probando",
    price : 1000,
    thumbnail : "estoEsUnaImagen",
    code : 20,
    stock : 200
}
objetoPrueba2 = {
    title : "Prueba2",
    description : "Estamos probando2",
    price : 10002,
    thumbnail : "estoEsUnaImagen2",
    code : 202,
    stock : 2002
}
// console.log(objetoPrueba.hasOwnProperty("title"));
console.log(ProductManager.addProduct(objetoPrueba));
console.log(ProductManager.addProduct(objetoPrueba2));
// console.log(ProductManager.listaProductos);
// console.log("Otra funcion");
// console.log(ProductManager.getProducts());
// console.log(ProductManager.getProductById(1));

// console.log(ProductManager.listaProductos);

// let pruebas = 
// [
//    { 1 : {"hola": "chau"} }
// ]


// console.log(Object.values(pruebas[0]));