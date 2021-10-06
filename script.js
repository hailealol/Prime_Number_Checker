function begin() {
    var num, isPrime, check, divisible;
    num = document.getElementById("num").value;
    isPrime = document.getElementById("isPrime");
    check = true;
    divisible = [];

    if (num < 2) {
        check = false;
    };

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            check = false;
            if (Number.isInteger(num % 3)) {
                divisible.push(i);
            };
            break;
        };
    };

    if (check) {
        isPrime.innerHTML = `${num} is a prime number.`;
    } else if (num < 2) {
        isPrime.innerHTML = `${num} is not a prime number.`;
    } else {
        isPrime.innerHTML = `${num} is not a prime number. It is divisible by ${divisible}.`;        
    };
};