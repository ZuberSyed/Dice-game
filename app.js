
var scores,roundScore,activePlayer,gamePlaying;

init();

var lastDice;

//******************* Roll Dice Button******************************

document.querySelector('.btn-roll').addEventListener('click' , function(){
  if(gamePlaying){
 // Generate a random number
 var dice= Math.floor(Math.random()*6)+1;
 // Display the result
 document.querySelector('.dice').style.display ='block';
 document.querySelector('.dice').src = 'dice-'+dice+'.png';

 //******* losses the game if rolls six in a row*********************
   
   if(dice===6 && lastDice===6){
    scores[activePlayer]=0;
    document.querySelector('#score-'+activePlayer).textContent ='0'; 
    nextPlayer();
                     // ************  logic in Challenge*********
 }else if(dice !== 1){
  roundScore += dice;
  document.querySelector('#current-'+ activePlayer).textContent =roundScore;
}// Next Player turn
 else{
  nextPlayer();
  }
   lastDice=dice;
}

  });

//****************** Hold Button *****************************************

document.querySelector('.btn-hold').addEventListener('click', function(){
  if(gamePlaying){
 // update the Score
 scores[activePlayer] += roundScore;
 document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer]; 
 // If the Player Wins
 if(scores[activePlayer] >=100){
  document.querySelector('#name-'+activePlayer).textContent='Winner';
  document.querySelector('.dice').style.display='none';
  document.querySelector('.player-'+ activePlayer+'-panel').classList.add('winner');
  document.querySelector('.player-'+ activePlayer+'-panel').classList.remove('active');
   gamePlaying = false;
 }
  else{
   nextPlayer();
  }
 }
});

//************************ Newgame Button ***************************** 

document.querySelector('.btn-new').addEventListener('click', init);
   

//**************** NextPlayer Function *************************************** 

function nextPlayer(){
activePlayer===0? activePlayer =1 : activePlayer=0;
  roundScore = 0;
  document.querySelector('#current-1').textContent = '0';
  document.querySelector('#current-0').textContent = '0';  
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

   document.querySelector('.dice').style.display ='none';
  }

//************************ init Function *************************************
function init(){
scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying=true;

 document.querySelector('.dice').style.display = 'none';
 document.getElementById('score-0').textContent = '0';
 document.getElementById('score-1').textContent = '0';
 document.getElementById('current-0').textContent = '0';
 document.getElementById('current-1').textContent = '0';
 document.getElementById('name-0').textContent = 'Player-1';
 document.getElementById('name-1').textContent ='Player-2';
 document.querySelector('.player-0-panel').classList.remove('winner');
 document.querySelector('.player-1-panel').classList.remove('winner');
 document.querySelector('.player-0-panel').classList.remove('active');
 document.querySelector('.player-1-panel').classList.remove('active');
 document.querySelector('.player-0-panel').classList.add('active');

}
