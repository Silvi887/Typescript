function Operator(param :string | number | string[],
                  operation: 'Index' | 'Length' | 'Add',
                  operand: number
){
 if (operation === "Index") {
        if (typeof param === "string" || Array.isArray(param)) {
            return param[operand];
        }
    }

    if (operation === "Length") {
        if (typeof param === "string" || Array.isArray(param)) {
            return param.length % operand;
        }
    }

    if (operation === "Add") {
        if (typeof param !== "object") {
            return Number(param) + operand;
        }
    }

}
console.log(Operator('string', 'Index', 1));