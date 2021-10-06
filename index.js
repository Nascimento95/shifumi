// variable qui stock le score du joueur et de l'IA plus la variable avec le texte de qui a gagnée
var resultOfVersusIa = 0
var resultOfVersusPlayer = 0
var winner = ""

// fonction pour le choix du joueur et ce qui s'en suit
function choicePlayer(choice) {
    var image = document.getElementById("image")
    var numberResultPlayer = 0
    
    if(choice == "pierre") {
        image.setAttribute("src", "https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/1-pierre.jpg") 
        numberResultPlayer = 1
    } else if (choice == 'feuille') {
        image.setAttribute("src", "https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/2-feuille.jpg")
        numberResultPlayer = 2
    } else if ( choice == "ciseaux") {
        image.setAttribute("src", "https://jerome-reaux-creations.fr/DVP/codepen/shifumi/3-ciseaux.jpg")
        numberResultPlayer = 3
    }
    // cett var serre a recupérer le résultat aléatoire de l'IA
    var iaChoice = choiceIa()
    console.log("les nombre aléatoir de l'IA", iaChoice);
    //la parti du code qui sert pour avoir le resultat 
    if (iaChoice == numberResultPlayer){
        // console.log("égaliter");
    } else if ( iaChoice == 2 && numberResultPlayer == 1){
        resultOfVersusIa = resultOfVersusIa + 1;
        // console.log("l'ordinateur gagne 1 point",resultOfVersusIa);
    } else if (iaChoice == 3 && numberResultPlayer == 2){
        resultOfVersusIa = resultOfVersusIa  + 1;
        // console.log("l'ordinateur gagne 1 point",resultOfVersusIa);
    } else if (iaChoice == 1 && numberResultPlayer == 3){
        resultOfVersusIa = resultOfVersusIa  + 1;
        // console.log("l'ordinateur gagne 1 point",resultOfVersusIa);
    } else if (numberResultPlayer == 2 && iaChoice == 1){
        resultOfVersusPlayer = resultOfVersusPlayer +1;
        // console.log(" player gagne 1 point", resultOfVersusPlayer);
    } else if (numberResultPlayer == 3 && iaChoice == 2){
        resultOfVersusPlayer = resultOfVersusPlayer +1;
        // console.log(" player gagne 1 point", resultOfVersusPlayer);
    } else if (numberResultPlayer == 1 && iaChoice == 3){
        resultOfVersusPlayer = resultOfVersusPlayer +1;
        // console.log(" player gagne 1 point", resultOfVersusPlayer);
    }
    console.log(`player point ${resultOfVersusPlayer} et ordinateur point ${resultOfVersusIa}`);
    
    // resultat de versus
    winner=""
    if(resultOfVersusPlayer === 5 ) {
        resultOfVersusPlayer = 0
        resultOfVersusIa = 0
        winner = "player win"
    } else if (resultOfVersusIa == 5 ) {
        resultOfVersusIa = 0
        resultOfVersusPlayer = 0
        winner = "Computer win"
    } 
    
    clearResult()
    
    // le texte qui montre le resultat
    var newParagraph = document.createElement("p")
    var textResult = document.createTextNode(`résultat de joueur  = ${resultOfVersusPlayer}    résultat de l'ordinateur  = ${resultOfVersusIa}`)
    newParagraph.appendChild(textResult);
    var element = document.getElementById("score");
    element.appendChild(newParagraph)

    
    // le texte qui dit qui a gagner
    clearResult2()
    var newParagraph = document.createElement("h3")
    var textResult2 = document.createTextNode(`${winner}`)
    newParagraph.appendChild(textResult2);
    var element = document.getElementById("winner");
    element.appendChild(newParagraph)
    
    return numberResultPlayer

}

// fonction pour effacer les resultats des scores et le texte du gagnant
function clearResult() {    
    document.getElementById("score").innerHTML = ''  
}
function clearResult2() {    
    document.getElementById("winner").innerHTML = ''  
}

// fonction du choix de l'ia
function choiceIa (){
    var min = 1
    var max = 3   
    var ram = Math.floor(Math.random() * (max - min + 1) + min);
    var imageIa = document.getElementById("image-ia")
    if (ram == 1) {
        imageIa.setAttribute("src", "https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/1-pierre.jpg") 
       
    } else if (ram == 2) {
        imageIa.setAttribute("src", "https://www.jerome-reaux-creations.fr/DVP/codepen/shifumi/2-feuille.jpg")
        
    } else if( ram == 3){
        imageIa.setAttribute("src", "https://jerome-reaux-creations.fr/DVP/codepen/shifumi/3-ciseaux.jpg") 
    } else{

    }
    return ram
}


var myVar = setInterval(setColor, 3000);

function setColor() {
  var x = document.body;
  x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow" ;
}

function stopColor() {
  clearInterval(myVar);
}






