abstract class Shape{
   protected color:string;

   constructor(color:string){
    this.color=color;
   }
   abstract getArea():number;
      
}

class Circle extends Shape{

    /*protected radius: number;*/

    constructor(color:string,protected radius:number,){
        super(color);
        // this.radius=radius;
       
    }

    getArea(): number {
        
        return (Math.PI* Math.pow(this.radius,2))
    }
}

class Rectangle extends Shape{

    /*protected radius: number;*/

    constructor(color:string,protected sideA:number, protected sideB:number){
        super(color);
        // this.radius=radius;
       
    }

    getArea(): number {
        
        return (this.sideA* this.sideB);
    }
}



const circle = new Circle("red", 5);
console.log(circle.getArea());
const rectangle = new Rectangle("blue", 4, 6);
console.log(rectangle.getArea());

