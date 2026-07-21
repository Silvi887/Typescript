

function evenodd(num1:number, num2:number, num3:number):boolean{
    const sum=num1+num2+num3;

    if(sum % 2===0){
        return true;
    }
    else{
        return false;
    }
}

console.log(evenodd(5,1,3));