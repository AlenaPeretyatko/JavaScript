const rawAge = prompt('Enter age:');
const lastChar = rawAge.length > 0
    ? rawAge[rawAge.length - 1]
    : '';
const lastAgeDigit = parseInt(lastChar);

if (isNaN(lastAgeDigit) || lastAgeDigit < 1 ) {
    console.log("Sorry, value is not correct. Please enter number wich will be 1 or greater than 1");
} else if (lastAgeDigit === 1) {
    console.log(`Тобі ${rawAge} рік`);
} else if (lastAgeDigit >= 2 && lastAgeDigit <= 4) {
    console.log(`Тобі ${rawAge} років`);
} else {
    console.log(`Тобі ${rawAge} роки`);
}