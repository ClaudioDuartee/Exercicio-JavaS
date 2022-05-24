function CalcularImc(){
let nome = prompt("Digite Seu Nome:");
let peso = parseFloat(prompt("Digite Seu Peso"));
let altura = parseFloat(prompt("Digite Sua Altura"));
let imc = 0;
let resultado ; 

imc = peso / (altura * altura); 

if (imc <18.5){
resultado ="Abaixo Do Peso"
}
else if (imc < 25){
 resultado ="Peso Nomral"
    }
else if (imc <30){
 resultado ="SobrePeso"
        }

else if (imc <35){
resultado ="obesidade"
            }

 else if (imc <40){
resultado ="obesidade nivel 2"
                }

else{
 resultado ="obesidade nivel 3"
                    }

        Document.write(nome + "possui o imc" + imc + "e esta" + resultado);
     alert(nome + "possui o imc" + imc + "e esta" + resultado)



}

