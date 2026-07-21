class Person{

  constructor(
   protected firstName:string,
   protected lastName:string,
   protected age :number
    ){}
      
   introduce():string{
        return `My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }

}

const person = new Person("Silvia", "Minova", 38);
console.log(person.introduce());
