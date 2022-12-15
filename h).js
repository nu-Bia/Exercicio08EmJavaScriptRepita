function soma(){

var area = 0;

var acumulo = 0;

var parar = "sim"
    
do {
var comodo = prompt("Digite o nome do cômodo que deseja calcular: ");
var largura = parseFloat(prompt("Digite a largura do cômodo: "));
var comprimento = parseFloat(prompt("Digite o valor do comprimento do  cômodo: "));
var area = largura * comprimento;
var acumulo = acumulo + area
var parar = prompt("Deseja acrescentar mais cômodos :  ");
document.write("As medidas dos comodos digitados foram: " + comodo + " "+ largura + "x" + comprimento + "</br>");
} while (parar == "sim");
    
document.write("O valor total da area da sua residencia é " + acumulo)B;   
}