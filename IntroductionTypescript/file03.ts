function ConvertArray(arr:string[]):[res1:string,res2:number]{
    return [arr.join(""), arr.length];

}

console.log(ConvertArray(['Marry','Peter']))