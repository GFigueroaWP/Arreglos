/* 1. Siempre hambriento
Escribe una función a la que se le asigne un arreglo, y cada vez que el valor sea "comida" debería mostrar "delicioso"en la consola. Si "comida" no estaba presente en el arreglo, que la consola registre "Tengo hambre" una vez. */
console.log("1. Siempre hambriento");
function siempreHambriento(arr) {
    let comida = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "comida") {
            console.log("delicioso");
            comida = true;
        }
    }
    if (!comida) {
        console.log("Tengo hambre");
    }
}

siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"

/* 2. Filtro paso alto
Dado un arreglo y un valor cutoff, devuelve un nuevo arreglo que contenga solo los valores mayores a cutoff. */
console.log("2. Filtro paso alto");
function highPass(arr, cutoff) {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
console.log(highPass([6, 8, 3, 10, -2, 5, 9], 5));

/* 3. Mejor que el promedio
Dado un arreglo de números, devuelve un recuento de cuántos de los números son mayores que el promedio. */
console.log("3. Mejor que el promedio");
function betterThanAverage(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let avg = sum / arr.length;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>avg){
            count++;
        }
    }
    return count;
}
console.log(betterThanAverage([6, 8, 3, 10, -2, 5, 9]));

/* 4. Arreglo invertido
Escribe una función que invierta los valores de un arreglo y los devuelva. */
console.log("4. Arreglo invertido");
function reverse(arr) {
    let temp;
    for (let i = 0; i < arr.length/2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
console.log(reverse(["a", "b", "c", "d", "e"]));
/* 5. Arreglo de Fibonacci
Los números de Fibonacci se han estudiado durante años y aparecen a menudo en la naturaleza. Escribe una función que devuelva un arreglo de números de Fibonacci hasta una longitud dada n. Los números de Fibonacci se calculan sumando los dos últimos valores de la secuencia. Entonces, si el cuarto valor es 2 y el quinto valor es 3 entonces el siguiente valor en la secuencia es 5. */
console.log("5. Arreglo de Fibonacci");
function fibonacciArray(n) {
    let fibArr = [0,1];
    for (let i = 2; i < n; i++) {
        fibArr.push(fibArr[i-1]+fibArr[i-2]);
    }
    return fibArr;
}
console.log(fibonacciArray(10));