function anni(addition) {
    if (addition === 'plusOne') {
        age++;
    } else if (addition === 'plusThree') {
        age += 3;
    } else if (addition === 'plusFive') {
        age += 5;
    }
    //ho sbagliato a non aggiungere questo dettaglio del riportare il risultato direttamente finito e non volta per volta
    document.getElementById('modify').textContent = age;
    validOrNot(); // Aggiorna lo stato in base alla nuova età
}


function stato (status) {
    if (status === 'free') {
        freeOrNot = 'is';
        var open = document.getElementById('yesNo');
        open.textContent = freeOrNot;

        allMine = document.getElementById('possession');
        allMine.textContent = nothing;

    } else if (status === 'occuped') {
        freeOrNot = "isn't";
        var closed = document.getElementById('yesNo');
        closed.textContent = freeOrNot;

        var andThen = document.getElementById('so');
        andThen.textContent = allora;

        allOrNot = "haven't";
        nothingMine = document.getElementById('possession');
        nothingMine.textContent = allOrNot;
    }
}

function percentuale (percentage) {
    if (percentage === 'hundred') {
        allOrNot = 'have';
        var allMine = document.getElementById('possession');
        allMine.textContent = allOrNot;
        
        freeOrNot = 'is';
        var open = document.getElementById('yesNo');
        open.textContent = freeOrNot;

    } else if (percentage === 'zero') {
        allOrNot = "haven't";
        var nothingMine = document.getElementById('possession');
        nothingMine.textContent = allOrNot;
    }
}

function validOrNot() {
    //ho sbagliato a compilare questa funzione

    var realEstateStatus = document.getElementById('houses');
    var companyStatus = document.getElementById('inc');
    var universityStatus = document.getElementById('uni'); 

    if (age < 18) {
        realEstateStatus.textContent = "off";
        companyStatus.textContent = "off";
        universityStatus.textContent = "off";
        
    } else if (age < 25) {
        realEstateStatus.textContent = "on";
        companyStatus.textContent = "off";
        universityStatus.textContent = "on";

        var questionario = document.getElementById('question');
        questionario.textContent = question;

    } else {
        realEstateStatus.textContent = "on";
        companyStatus.textContent = "on";
        universityStatus.textContent = "off";
        
        var questionario = document.getElementById('question');
        questionario.textContent = question;
    }
}

function funziona (bottone) {
    if (bottone === 'yes') {
        done = 'Yes, it worked succesfully';
        var realEstateDone = document.getElementById('doneOrNot');
        realEstateDone.textContent = done;

        inOrOut = 'can';
        var inside = document.getElementById('possibility');
        inside.textContent = inOrOut;

        var quindi = document.getElementById('quindi');
        quindi.textContent = allora;
        
    } else if (bottone === 'no') {
        done = "No, it didn't work";
        var realEstateWork = document.getElementById('doneOrNot');
        realEstateWork.textContent = done;

        inOrOut = "can't";
        var outside = document.getElementById('possibility');
        outside.textContent = inOrOut;

        var quindi = document.getElementById('quindi');
        quindi.textContent = allora;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    validOrNot(); // Controllo iniziale dello stato
});

var age = 0;
var freeOrNot = 0;
var allOrNot = 0;
var nothing = "have/haven't";
var allora = 'So y'; //in questo modo non ho la y maiscola ma la sostituisco all'intoerno della sctringa in HTMl
var question = 'Real estate worked succesfully:';
var done = 0;
var inOrOut = 0;