//1.
let a = add(2, 4);

//console.log(add);

function add(a, b) {
    return a + b;
}

console.log(add(2, 4));
//console.log(a);



//2.
let m = multiply(6, 4);

function multiply(a, b) {
    let m = 0;
    let count = 0;

    while (count < b) {
        //m += add(a, 0)
        m = add(a, m)
        count++;
    }

    return m;
}

console.log(multiply(6, 4));


//3.
let p = power(2, 8);

function power(x, n) {
    let p = 1;
    let count = 0;

    while (count < n) {
        p = multiply(x, p);
        count++;
    }

    return p;

}

console.log(p);



//4.
let result = factorial(5);

function factorial(num) {
    let result = num;
    //if (num === 0 || num === 1)
    //return 1;

    while (num > 1) {
        num--;
        result = multiply(num, result);
    }

    return result;

}

factorial(5);
console.log(factorial(5));




//BONUS (will do)