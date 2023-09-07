class ProductManager {

    constuctor() {
        this.productos = []
    };

    getProduct = () => {
        return this.productos
    };

    getProductById = (id) => {
        const productById = this.products.find(product => product.id === id);

        if (!productById) {
            console.error('not found');
            return;
        }
        return productById;
    }

    agregarProductos = (title, description, price, thumbnail, code, stock) => {

        if (!tittle || !description || !price || !thumbnail || !code || !stock) {
            console.error('llenar todos los campos')
            return;
        }
        const producto = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        for (let i = 0; i < this.productos.length; i++) {
            const p = this.productos[i];
            const cod = p.code;

            if (cod === producto.code) {
                console.error('producto resgitrado')
                return;

            }
        }
        if(this.productos.length === 0){
            producto.id = 1;
        }else{
            producto.id = this.productos[this.productos.length - 1].id + 1
        };
        this.productos.push(producto)
    };
}

const addproducto = new ProductManager();

addproducto.agregarProductos('pollo', 'Fresco', 100, 1, 'prod-001', 100)
console.log(addproducto.agregarProductos());