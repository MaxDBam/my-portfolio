'use strict'

var gQuests = [
    {id: 1, opts: [], correctOptIndex: 0},
    {id: 2, opts: [], correctOptIndex: 1},
    {id: 3, opts: [], correctOptIndex: 1}
];

var gCurrQuestIdx = 0;

function initGame() {
    gCurrQuestIdx = 0;
    createQuests();
    renderQuests();
    var restartBtn = document.querySelector('.restart-button');
    restartBtn.style.display = 'none';
}

function createQuests() {
        gQuests[0].opts[0] = 'Tennis';
        gQuests[0].opts[1] = 'Soccer';
        gQuests[1].opts[0] = 'Handball';
        gQuests[1].opts[1] = 'Table Tennis';
        gQuests[2].opts[0] = 'Cricket';
        gQuests[2].opts[1] = 'Basketball';
    
}

function renderQuests() {
    var i = 0;
    var elQuest = document.querySelector('.quest');
    
    var strHTML = '<img src="img/' + gQuests[gCurrQuestIdx].id +'.jpg">' +
        '<button class="btn-one" onclick="checkAnswer(0)">' + gQuests[gCurrQuestIdx].opts[i] + '</button>' +
        '<button class="btn-two" onclick="checkAnswer(1)">' + gQuests[gCurrQuestIdx].opts[i + 1] + '</button>';       

    elQuest.innerHTML = strHTML;
   
}

function checkAnswer(optIdx) {
    if(gCurrQuestIdx >= gQuests.length) {
        return;
    }
    
    if (optIdx === gQuests[gCurrQuestIdx].correctOptIndex) {
        gCurrQuestIdx++;
        if (gCurrQuestIdx >= gQuests.length) {
            console.log('Victorious');
            var restartBtn = document.querySelector('.restart-button');
            restartBtn.innerText = 'Restart';
            restartBtn.style.display = 'block'
            return;
        } else {
            renderQuests();
        }
    } 
}
