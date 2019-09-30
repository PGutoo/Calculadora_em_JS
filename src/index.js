//Exercício de calculadora

let n1 = Number(prompt(`Digite um numero`));
let op = prompt(`Qual operador?(+ (soma), -(Subtração), /(Divisão), *(Multiplicação), V(Raiz Quadrada), **(Potenciação))`);
let n2 = Number(prompt(`Digite outro numero`));

switch (op) {
  case "*":
    let r = n1 * n2;
    document.write(
      `${n1} * ${n2} = ${r}<br/> A multiplicação consiste em uma adição sucessivas de um mesmo número produzindo um resultado que chamamos de produto.`
    );
    break;

  case "/":
    let e = n1 / n2;
    document.write(
      `${n1} / ${n2} = ${e}<br/> A divisão consiste em dividir dois números, o dividendo e o divisor, que produz dois resultados chamados de quociente e resto.`
    );
    break;

  case "-":
    let s = n1 - n2;
    document.write(
      `${n1} - ${n2} = ${s} <br/> A subtração consiste em subtrair dois ou mais números tendo um outro número como resultado. O sinal indicativo da subtração é o “sinal de menos” (–).`
    );
    break;

  case "+":
    let u = n1 + n2;
    document.write(
      `${n1} + ${n2} = ${u} <br/> A adição consiste em adicionar dois ou mais números naturais, conhecido como parcelas, que produz em todos os casos um único resultado que chamamos de soma ou total.`
    );
    break;

  case "**":
    let l = n1 ** n2;
    document.write(`${n1} ** ${n2} = ${l}<br/> Potenciação ou exponenciação é a forma de abreviar a multiplicação de uma sequência de fatores iguais.

    Dessa forma, quando multiplicamos um número sucessivas vezes, podemos abreviar elevando-o a quantidade de vezes que o número é multiplicado.`);
    break;
  case "V":
    let t = Math.sqrt(n1);
    document.write(
      `${t} <br/> Matematicamente, a raiz quadrada de um número real não negativo x é o número real não negativo que, quando multiplicado por si próprio, iguala x. A raiz quadrada de x é simbolizada por √x.`
    );
    break;
  default:
    document.write(`Você digitou errado`);
}
