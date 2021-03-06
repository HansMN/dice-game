var activePlayer, roundScore, scores;

// togloom duussan esehiig hadgalah tuluviin huvisagch
var isNewGame;

// shoonii zurgiig uzuuleh elementiig dom-s haij olood end hadgalana
var diceDom = document.querySelector('.dice');

inIt();
//togloomiig shineeer ehlehed beldene 
function inIt (){
    // togloom ehelsen tuluvt oruulna
    isNewGame = true;

    // toglogchiin eeljiig hadgalah variable, player 1 = 0, player 2 = 1
    activePlayer = 0;
    // togloogchdiin tsugluulsan onoog hadgalah variable
    scores = [0, 0];
    // idevhtei toglochiin eeljiin onoog hadgalah variable
    roundScore = 0;
    // shooonii ali talaaraa buusniig hadgalah variable 1-6 gesen utgagiig ene huvisagchid sanamsarguigeer uusgej ugnu

    //  <div class="player-score" id="score-0">43</div>
    // window.document.querySelector('#score-0').textContent = diceNumber;
    // document.querySelector('#score-1').innerHTML = '<em>yes!</em>';

    // programm ehlehed betlgeh
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    //toglogchdiin neriig butsaaj gargah
    document.getElementById('name-0').textContent = "プレーヤー １";
    document.getElementById('name-1').textContent = "プレーヤー ２";
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    diceDom.style.display = 'none';
}

//anonymous function shoog shideh event handler/listener
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(isNewGame){
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
        switchToNextPlayer();
    }
    }else{
        alert('ゲームは終了しました。リスタートを押して、ゲームをリスタートしてください。');
    }
});

//hold tovchnii event listener 
document.querySelector('.btn-hold').addEventListener('click', function () {
    if(isNewGame === true){
    // ug toglogchiin tsugluulsan eeljiin onoog global onoon deer nemj ugnu
    // if(activePlayer === 0){
    //     scores[0] += roundScore;
    // }else{
    //     scores[1] += roundScore;
    // }
    scores[activePlayer] += roundScore;
    // delgetsen deer onoog uurchluh
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    //tuhain toglogchiig hojson esehiig shalgah 100aas ih eseh
    if(scores[activePlayer] >= 100){
        //togloomiig duussan tuluvt oruulna
        isNewGame = false;

        document.getElementById('name-' + activePlayer).textContent = 'ウイナー！';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    } else{
        //toglochiin eeljiig solino
        switchToNextPlayer();
    }
    }else{
        alert('ゲームは終了しました。リスタートを押して、ゲームをリスタートしてください。');
    }
})

function switchToNextPlayer (){
        // elljiin onoog 0 bolgono
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = 0;
        //toglogchiin elljiig solino
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        diceDom.style.display = 'none';
}

// new game buyu shine togloom ehluuleh tovchnii event listener
document.querySelector('.btn-new').addEventListener('click', function(){
    inIt();
})
//version 2 document.querySelector('.btn-new').addEventListener('click', inIt)