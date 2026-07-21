
type Diagnostic ={
    partName:string;
    runDiagnostics(): string  

}

function CarDiagnostics(
    	carBody: { material: string, 
                  state: string}&Diagnostic,
    	tires: { airPressure: number, 
                 condition: string}&Diagnostic,
    	engine: { horsepower: number,
                   oilDensity: number }&Diagnostic

){
console.log(carBody.runDiagnostics());
console.log(tires.runDiagnostics());
console.log(engine.runDiagnostics());

}
CarDiagnostics(
{ material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics(){return this.partName}},
{ airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics(){return this.partName}},
{ horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics(){return this.partName}}
)