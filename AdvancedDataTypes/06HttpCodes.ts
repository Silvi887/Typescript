function PrinthttpCodes(
   response: {
    code:number,  /*това е тип на обект.*/
    text:string,
    printChars?:number
    }

){

    if(response.printChars != undefined){
    let arr1= response.text.split(' ');
        console.log(response.text.slice(0, response.printChars));
    }
    else{
        console.log(response.text);
    }

}
PrinthttpCodes({ code: 400, text: 'Bad Request', printChars: 4});