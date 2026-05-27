const x = 10;
const y = 20;

console.log(`The sum of ${x} and ${y} is ${x + y}.`);
console.log(x, y);

console.count(`O valor de x é ${x} e o valor de y é ${y}.`);


setTimeout(() => {
    console.clear();
    console.log('This message is delayed by 2 seconds.');
}, 2000);