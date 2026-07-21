function unknowresponse(parameter:unknown) :string{
if(
parameter &&
typeof parameter ==="object" &&
"value" in parameter &&
typeof parameter.value ==="string"
)
{
    return parameter.value;
}
return "-";
}
console.log(unknowresponse({code: 500, text: 'Internal Server Error' }))