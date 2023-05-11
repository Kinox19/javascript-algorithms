/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

function intersection(arr1, arr2) {
    const splittedArr1 = arr1.toString().split(',').sort();
    const splittedArr2 = arr2.toString().split(',').sort();
    let result = [];
    for (let i = 0; i<splittedArr1.length; i++){
        for (let j = 0; j<splittedArr2.length; j++){
            if (splittedArr1[i] === splittedArr2[j]){
                result.push(parseInt(splittedArr1[i]));
            }
        }
    } return result = [...new Set(result)]
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []

//готово