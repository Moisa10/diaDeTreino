const nome = "Moises";
let treino;


console.log(nome);
let numeroAleatorio = Math.floor(Math.random() * 3);
function getEventoAleatorio(){

    if(numeroAleatorio == 0){
      treino = "Maratona";
    } else if( numeroAleatorio == 1){
      treino = "Triathlon";
    }else{
      treino = "Pentathlon";
    }
    return console.log(`Seu treino é: ${treino}`);
    
}

getEventoAleatorio()

     let dias;
function getDiasDeTreino(){

     
     if(numeroAleatorio == 0){
          dias = console.log("Você treinará 50 dias");
     } else if(numeroAleatorio == 1){
          dias = console.log("Você treinará 100 dias");
     } else{
          dias = console.log("Você treinará 200 dias");
     }
     return dias;
}

getDiasDeTreino();

