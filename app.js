// toglogchiin eeljiig hadgalah variable, player 1 = 0, player 2 = 1

var activePlayer = 1;


// togloogchdiin tsugluulsan onoog hadgalah variable

var scores = [0, 0];

// idevhtei toglochiin eeljiin onoog hadgalah variable

var roundScore = 0;

// shooonii ali talaaraa buusniig hadgalah variable 1-6 gesen utgagiig ene huvisagchid sanamsarguigeer uusgej ugnu

var dice = Math.floor(Math.random() * 6) + 1;

//  <div class="player-score" id="score-0">43</div>
window.document.querySelector('#score-0').textContent = dice;
// document.querySelector('#score-1').innerHTML = '<em>yes!</em>';

// programm ehlehed betlgeh
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;
document.querySelector('.dice').style.display = 'none';

console.log('shoo : ' + dice);