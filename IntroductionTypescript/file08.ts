
function CustomTypeGuard(param1:unknown): param1 is string[]{
  

    return(
        Array.isArray(param1) &&
        param1.length>0 &&

    param1.every(el => { typeof el== "string";
})
    );

         
}

console.log(CustomTypeGuard(['a', 'b', 'c']));

     /* if(isNonEmptyStringArray(param1)) {
        console.log(param1.length);    // allowed
    }
    
   /* if (param1 === string[]){
        return true;
    }  */


