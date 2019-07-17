
class Phrase {
    constructor(phrase){
       this.phrase = phrase.toLowerCase();
    }

addPhraseToDisplay() {//this adds letter placeholders to dislay
    let square = this.phrase.split('');
    let ul = '<ul>';
    for (let i = 0; i < square.length; i++) {
      if (square[i] !== " ") {
        ul += `<li class="hide letter ${square[i]}">${square[i]}</li>`;
      } else {
        ul += "<li class='space'> </li>";
      }
    }
    ul += '</ul>';
   document.querySelector('#phrase').innerHTML = ul;
  }
// Check if letter is in the phrase
   checkLetter(letter) {
       if(this.phrase.includes(letter)) {
           return true;
       } else {
           return false;
       }
   };
   //Search through the list for a matching letter
   showMatchedLetter(letter) {
       const letterLis = document.querySelectorAll('li');
       letterLis.forEach(function(li) {
           if (li.textContent === letter) {
               li.classList.remove('hide');
               li.classList.add('show');
           }
       })
   };}