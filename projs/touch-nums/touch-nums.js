'use strict'
var gEasyDifficultyArray = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10, 11, 12, 13, 14, 15, 16];
var gMediumDifficultyArray = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
var gHardDifficultyArray = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
// shuffleNums(gEasyDifficultyArray);
var gChosenArray = [];

var gNum = 1;
var gMilliseconds = 0;
var gSeconds = 0;
var gMinutes = 0;
var gTimer;

function initGame(array) {
    gNum = 1;
    var copyArray = array.slice();
    gChosenArray = copyArray.slice();
    shuffleNums(copyArray);
    renderBoard(copyArray);
    showNextNum();
    clearInterval(gTimer);
    gMilliseconds = 0;
    gSeconds = 0;
    gMinutes = 0;
    document.querySelector('.minutes').innerText = '00';
    document.querySelector('.seconds').innerText = '00';
    document.querySelector('.milliseconds').innerText = '000';
}

function showNextNum() {
    var nextNum = document.querySelector('h2 span');
    nextNum.innerText = gNum;
}

function renderBoard(numArray) {
    var board = document.querySelector('table');
    var strHTML = '';
    var rootSqOfArray = Math.sqrt(numArray.length);
    for (var i = 0; i < rootSqOfArray; i++) {
        // var newRow = board.insertRow();
        // strHTML += '<thead colspan="rootSqOfArray" rowspan="rootSqOfArray"></thead>'
        strHTML += '<tr>'
      for (var j = 0; j < rootSqOfArray; j++) {
          strHTML += '<td class="unclicked" onclick="cellClicked(this)">' + numArray.pop() +'</td>';
      }
      strHTML += '</tr>';
    //   var newCell = newRow.insertCell();
    }

    board.innerHTML = strHTML;
}

function cellClicked(clickedNum) {
    if (parseInt(clickedNum.innerText) === 1 && gNum === 1) {
        clearInterval(gTimer);
        gTimer = setInterval(function() {
            gameTimer();
        }, 10);
    }
    if (parseInt(clickedNum.innerText) === gNum) {
        clickedNum.classList.remove('unclicked');
        clickedNum.classList.add('clicked');
        gNum++;
        showNextNum();
        if (parseInt(clickedNum.innerText) === Math.max.apply(null, gChosenArray)) clearInterval(gTimer);
    } else return;

}

function gameTimer() {
    if ((gMilliseconds += 10) === 1000) {
        gMilliseconds = 0;
        gSeconds++;
    }

    if (gSeconds === 60) {
        gSeconds = 0;
        gMinutes++;
    }

    document.querySelector('.minutes').innerText = returnData(gMinutes);
    document.querySelector('.seconds').innerText = returnData(gSeconds);
    document.querySelector('.milliseconds').innerText = returnData(gMilliseconds);
}

function returnData(input) {
    return input > 10 ? input : `0${input}`;
}

function shuffleNums(arrayOfNums) {
    var j, x, i;
    for (i = arrayOfNums.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arrayOfNums[i];
        arrayOfNums[i] = arrayOfNums[j];
        arrayOfNums[j] = x;
    }
    return arrayOfNums;
}