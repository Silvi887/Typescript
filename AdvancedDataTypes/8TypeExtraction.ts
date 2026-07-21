type getPersonInfo=(fName:string,lName:string, age:number)=> string
type getAddressInfo=(city:string, street:string,number:number, postalCode:number)
=> string

type Name={fName:string,
        lName:string,
        age:number , 
     getPersonInfo():string
    }
 
    type Address={
        city:string,
         street:string,
         number:number,
          postalCode:number,
          getAddressInfo():string
    }

type Combined = Name & Address;


function TypeExtraction(name:Name , adress:Address) {
 return function() {
        console.log( `Hello, ${name.getPersonInfo()} from ${adress.getAddressInfo()}}`);
}
}
/*
function TypeExtraction(name: Name) {
    return function(person: Combined) {
        console.log(`Hello, ${person.getPersonInfo()}`);
    };
}
*/
let names = { fName: 'John', lName: 'Doe', age: 22, 
    getPersonInfo() { return `${this.fName} ${this.lName}, age ${this.age}` } };

let location = { city:'Boston', street: 'Nowhere street', number: 13, postalCode: 51225, 
    getAddressInfo() { return `${this.street} ${this.number}, ${this.city} ${this.postalCode}`} };

const result=TypeExtraction(names,location);
result();

