/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    const newArr = str.split(' ');
    let result = [];
    for (let i = 0; i < newArr.length; i++){
        const firstLetter = newArr[i].slice(0,1).toUpperCase();
        const restOfWord = newArr[i].slice(1);
        const finalWord = firstLetter + restOfWord;
        result.push(finalWord);
    }
    return result.join(' ');
}

// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"

//готово