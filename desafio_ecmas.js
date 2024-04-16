class ProductManager {
    constructor() {
      this.products = [];
      this.productIdCounter = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      // Valida que todos los campos sean obligatorios
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error("Todos los campos son obligatorios");
        return;
      }
  
      // Valida que no se repita el campo "code"
      if (this.products.some(product => product.code === code)) {
        console.error("Ya existe un producto con este código");
        return;
      }
  
      const newProduct = {
        id: this.productIdCounter++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
  
      this.products.push(newProduct);
      console.log("Producto agregado:", newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
      if (!product) {
        console.error("Producto no encontrado");
      }
      return product;
    }
  }

    // Ejemplo de uso
    // const productManager = new ProductManager();
  
    // productManager.addProduct("Camiseta", "Camiseta de algodón", 20, "camiseta.jpg", "CAM001", 50);
    // productManager.addProduct("Pantalón", "Pantalón vaquero", 30, "pantalon.jpg", "PAN001", 30);
    
    // console.log("Todos los productos:", productManager.getProducts());
    
    // const product = productManager.getProductById(1);
    // console.log("Producto con ID 1:", product);
    
    // const nonExistentProduct = productManager.getProductById(3);  