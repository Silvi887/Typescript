function MultiplyOption(num1?: string|number,
                        num2?:string|number,
                        num3?:string|number

):number{
 let result=1;
 
 if(num1 !=undefined && typeof num1 =="string"){
    result =result* (Number(num1))
 }
  else if (num1 !=undefined &&  typeof num1 == "number"){
        result *= num1;
    }

    
    if(num2 !=undefined && typeof num2 =="string"){
    result =result* (Number(num2))
 }
  else if (num2 !=undefined &&  typeof num2 == "number"){
        result *= num2;
    }


    if(num3 !=undefined && typeof num3 =="string"){
    result =result* (Number(num3))
 }
  else if (num3 !=undefined &&  typeof num3 == "number"){
        result *= num3;
    }
    
    if(num1 == undefined && num2 == undefined && num3 ==undefined){
        result=1;
    }
   
  
    return result;
}

console.log(MultiplyOption());