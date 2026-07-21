class Product {
    static productCount :number=0;
    public readonly id:number;
    public  name:string;
    public price:number;

    constructor (name:string, price:number){
     this.name=name;
     Product.productCount++;
     this.id= Product.productCount;
      this.price=price;
    }

    	getDetails():string{

        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}`;    
    }
}

class Inventory {

    private products: Product[];

    constructor(products:Product[]=[]){
    this.products=products;
    }

    addProduct(product: Product): void{
        this.products.push(product);
    };
     listProducts(): string {
        return `Total products created: ${Product.productCount}`;
    }

    public AllProducts():Product[]{
        return this.products;
    }
}
const inventory = new Inventory();
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);
const product3 = new Product("Tablet", 400);

inventory.addProduct(product1);
inventory.addProduct(product2);

console.log(inventory.listProducts());
console.log(inventory.AllProducts());
