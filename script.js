
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número para somar\n', (num) => {
    if (isNaN(num))
        console.log(`${num} não é um número válido`);
    else {
        var b = num
        rl.question('Digite um número para somar\n', (numb) => {
            if (isNaN(numb))
                console.log(`${numb} não é um número válido`);
            else
            var a = numb
            var res = b+a
                console.log(`resultado da soma: ${res}`);
            rl.close();
        })
    }
});

rl.question('Digite um número\n', (num) => {
    if (isNaN(num))
        console.log(`${num} não é um número válido`);
    else
        console.log(`Você digitou o número ${num}`);
    rl.close();
});