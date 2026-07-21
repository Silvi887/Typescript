enum Daysofweek{
    Monday=1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function printDay(number: number): void {
    if (number >= 1 && number <= 7) {
        console.log(Daysofweek[number]);
    } else {
        console.log("Invalid day!");
    }
}

console.log(printDay(4));