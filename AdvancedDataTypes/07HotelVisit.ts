
type simpl=(number:number)=> string;

type train=(number:number)=> string;
type dine=(number:number)=> string;
type sleep=(number:number)=> string;


type Floor =
    ({ hallway: 'A' | 'C' }&
        {pass?:string} & 
        (
        | { number: 1; train(): string}
        | { number: 2; dine(): string }
        | { number: 3; sleep(): string }
        ));

type simplified={
    number:number,
    train():string,
    dine():string,
    sleep():string
}

function visitFloor(floor: Floor) {
    switch (floor.number) {
        case 1: return floor.train(); 
        case 2: return floor.dine(); 
        case 3: return floor.sleep(); 
    }
}
console.log( visitFloor({ train() {return 'Training...' }, number: 1, hallway: 'A', pass: 'Guest' }));

/*visitFloor({ train() { }, number: 1, hallway: 'A', pass: 'Guest' }); */
