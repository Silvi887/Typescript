function fridayThe13th(arr: unknown[]): string {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    let result=''
    for (const item of arr) {

        // Type narrowing
        if (!(item instanceof Date)) {
            continue;
        }

        // Проверка дали е валидна дата
        if (isNaN(item.getTime())) {
            continue;
        }

        // Петък ли е и 13-то число?
        if (item.getDate() === 13 && item.getDay() === 5) {
            
            result= `${item.getDate()}-${months[item.getMonth()]}-${item.getFullYear()}`
            
        }
    }
    return result;
}

console.log(fridayThe13th([
    {},
    new Date(2025, 4, 13),
    null,
    new Date(2025, 5, 13),
    '13-09-2023',
    new Date(2025, 6, 13),
])
)