var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var diceImg1 = 'images/dice' + randomNumber1 + '.png';
document.querySelector('.img1').setAttribute('src', diceImg1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceImg2 = 'images/dice' + randomNumber2 + '.png';
document.querySelector('.img2').setAttribute('src', diceImg2);

if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = 'Player 1 WINS!'
}else if(randomNumber1 < randomNumber2){
    document.querySelector('h1').innerHTML = 'Player 2 WINS!'
} else{
    document.querySelector('h1').innerHTML = 'Draw'
}
