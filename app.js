// toglogchiin eeljiig hadgalah variable, player 1 = 0, player 2 = 1

var activePlayer = 0;


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

//anonymous function shoog shideh event handler/listener
document.querySelector('.btn-roll').addEventListener('click', function(){
    // 1-6 hurtel sanamsargui too gargaj avna
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    //shoonii zurgiig web deer gargaj irne
    diceDom.style.display = 'block';

    //buusan sanamsargui toond hargalzan shoonii zurgiig web deer gargaj irne
    diceDom.src = 'dice-' + diceNumber + '.png';

    // buusan too ni 1-ees yalgaatai bol idevhtei toglogchiin eeljiin onoog nemegduulne
    if(diceNumber !== 1){
        roundScore += diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }else {
        // activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

        //ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = 0;
        

        //toglogchiin eeljiin nuguu ruu shiljuulne
        if(activePlayer === 0){
            activePlayer = 1;
        }else{
            activePlayer = 0;
        } 

        //ulaan tsegiig shiljuuleh

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        // shoog tur alga bolgoh

        diceDom.style.display = 'none';
    }
});