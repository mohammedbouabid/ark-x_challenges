/* Loops */

// Task 1
    let fact = 1;
    let n = 5
    for (let i = n; i >= 1; i--) {
        fact *= i;
    }
    console.log(fact);

// Task 2
    let count = 0;
    let number = 123
    while (number > 0) {
        number = Math.floor(number / 10);
        count++;
    }
    console.log(count);

// Task 3
for (let i = 1; i <= 4; i++){
    let y = " ".repeat(4-i);
    let x = "*".repeat(i == 1 ? i : (i*2-1));
    console.log(y + x);
}

/* Functions & Reusability */

// Task 1
function factorial(n) {
    let fact = 1;
    for (let i = n; i >= 1; i--) {
        fact *= i;
    }
    return fact;
}
console.log(factorial(5));

function nDigits(number) {
    let count = 0;
    while (number > 0) {
        number = Math.floor(number / 10);
        count++;
    }
    console.log(count);
}
nDigits(123);

// Task 2
function combinator(a, b){
    let n = factorial(a);
    let p = factorial(b);
    let comb = n / (p * factorial(a - b))
    return comb;
}

function calculator(num1, opr, num2){
    let result = 0;
    switch(opr){
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
        case "%":
            return num1 % num2;
            break;
        case "c":
            return combinator(num1, num2);
            break;
        default:
            return "No such this Operator we have!";
            break
    }
}

console.log(calculator(5,"c",2));