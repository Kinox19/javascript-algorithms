/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 *
*/

function primes(num) {
    const numbers = [];
    const result = [];
    for (let i = 2; i <= num; i++){
            numbers.push(i)
    }

    for (let i = 0; i < numbers.length; i++){
        for (let j = 2; j < numbers[i]; j++){
            if (!(numbers[i] % j === 0)){
                result.push(numbers[i])
            }
        }
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]