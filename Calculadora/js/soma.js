
    var a = parseFloat(prompt("Digite o valor de a"));
    var b = parseFloat(prompt("Digite o valor de b"));
   
    function somar(a, b ){  
        return a + b;
    }

 function subtração(a, b ){  
        return a - b;
    }

     function multiplicação(a, b ){  
        return a * b;
    }

     function divisão(a, b ){  
        return a / b;
    }

     function areadoquadrado(a, b ){  
        return a * 2;
    }
    
     function areadotriangulo(a, b ){  
        return a * b /2;
    }

     function areadoretangulo(a, b){  
        return a * b;
    }

    
var opcao = parseInt (prompt("1 - somar 2 - subtracao 3 - multiplicacao 4 - divisao 5 - areadoquadrado 6 - areadotriangulo 7 - area do retangulo "));
if (opcao == 1) { 
   
    console.log (somar(a, b));
} else if (opcao == 2) {    
   
        console.log(subtracao(a, b));
    } else if (opcao == 3){

      console.log(multiplicação(a, b));
    } else if (opcao == 4)

     console.log(divisão(a, b));{
    } if (opcao == 5) {
 
     console.log(areadoquadrado (a, b));
    }else if (opcao == 6){

      console.log(areadotriangulo(a, b));
    }else if (opcao == 7){

    }
    
    
    