/*1. Рекурсия 
У любого числа N чётность такая же, как у N - 2.
Напишите рекурсивную функцию isEven согласно этим правилам. Она должна принимать число и возвращать булевское значение. 
Протестируйте её на 50 и 75. Попробуйте задать ей - 1
*/

function isEven(N)
{
    if(0 === N) 
        return true;
    else if(1 === N)
        return false;
    
    return isEven(N-2);
}

console.log(`N = 75 ${isEven(75)}`);
console.log(`N = 50 ${isEven(50)}`);
console.log(`N = -1 ${isEven(-1)}`);


/*2. Считаем бобы
Напишите функцию countBs, которая принимает строку в качестве аргумента, и возвращает количество символов “B”, содержащихся в строке.
Затем напишите функцию countChar, которая работает примерно как countBs, только принимает второй параметр — символ, который мы будем искать в строке
*/

const str = "FGBGHFGBDGFHBFF";
console.log(countBs(str));
console.log(countChar(str, 'F'));

function countBs(str)
{
    let countB = 0;
    for (let i =0 ; i < str.length; ++i)
    {
        if('B' === str.charAt(i))
            countB++;
    }
    
    return countB;
}

function countChar(str, char)
{
    let count_char = 0;
    for (let i =0 ; i < str.length; ++i)
    {
        if(char === str.charAt(i))
            count_char++;
    }
    
    return count_char;
}


/*3. Сумма диапазона
Напишите функцию range, принимающую два аргумента (начало и конец диапазона) и возвращающую массив, который содержит все числа из него, включая начальное
и конечное.
Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. 
*/

let array = range(20, 30);

console.log(sum(array));

function range(min, max)
{
    let array = [];
    for(min; min<=max; ++min)
    {
        array.push(min);
    }

    return array;
}

function sum(array)
{
    return array.reduce((sum, item) => 
    {
        return sum + item;
    }, 0);
}


/*
4. Обращаем вспять массив
У массивов есть метод reverse, меняющий порядок элементов в массиве на обратный. В качестве упражнения напишите две функции, reverseArray и reverseArrayInPlace. 
Первая получает массив как входной параметр и выдаёт новый массив – с обратным порядком элементов. 
Вторая работает как оригинальный метод reverse – она меняет порядок на обратный в том массиве, который был ей передан в качестве аргумента. 
Не используйте стандартный метод reverse. 
*/

let charArray = ['A','B','C','D','E','F','G','H','I','J','.','?',',','!'];

console.log(reverseArray(charArray));

reverseArrayInPlace(charArray);

console.log(charArray);

function reverseArray(array)
{
    let revArray = [];

    for(let i = 0; i < array.length; ++i)
    {
        revArray.unshift(array[i])
    }

    return revArray;
}

function reverseArrayInPlace(array)
{
    let len = array.length;

    for(let i =0; i < len/2; ++i)
    {
        [array[i], array[len-1-i]] = [array[len-1-i], array[i]];
    }
}