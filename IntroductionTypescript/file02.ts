
function PersonData(person:[name:string, age: number]):string{
   
   return `Hello, my name is ${person[0]} and my age is ${person[1]}`;
}

console.log(PersonData(['Ivan', 20]));