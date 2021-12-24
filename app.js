// toglogchiin eeljiig hadgalah variable, player 1 = 0, player 2 = 1

var activePlayer = 1;


// togloogchdiin tsugluulsan onoog hadgalah variable

var scores = [0, 0];

// idevhtei toglochiin eeljiin onoog hadgalah variable

var roundScore = 0;

// shooonii ali talaaraa buusniig hadgalah variable 1-6 gesen utgagiig ene huvisagchid sanamsarguigeer uusgej ugnu


//  <div class="player-score" id="score-0">43</div>
// window.document.querySelector('#score-0').textContent = diceNumber;
// document.querySelector('#score-1').innerHTML = '<em>yes!</em>';

// programm ehlehed betlgeh
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;

document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

var diceDom = document.querySelector('.dice');
diceDom.style.display = 'none';

//anonymous function
document.querySelector('.btn-roll').addEventListener('click', function(){
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + diceNumber + '.png';
});