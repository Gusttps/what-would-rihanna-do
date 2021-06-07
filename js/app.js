import {quoteList} from '../data/quotes.js';

// cache the DOM
const $initialScreen = document.querySelector(".initial-screen");
const $askQuestion = document.querySelector(".ask-question");
const $answerScreen = document.querySelector(".answer-screen")
const $goBack = document.querySelector(".answer-screen__go-back");
const $quote = document.querySelector(".answer-screen__answer");
const $anotherQuote = document.querySelector(".answer-screen__another-quote");

const StartApp = (_ => {

    // ask question
    $askQuestion.addEventListener("click", _ => {
        $initialScreen.style.display = "none";
        $answerScreen.style.display = "initial";
        GenerateQuote();
    })

    // go back
    $goBack.addEventListener("click", _ => {
        $initialScreen.style.display = "block";
        $answerScreen.style.display = "none";
    })

    // generate random quote
    const GenerateQuote = (_ => {
        let random = Math.floor(Math.random() * quoteList.length);
        $quote.innerHTML = quoteList[random].quote;
        $anotherQuote.addEventListener("click", _ => {
            GenerateQuote();
    });
});
})();

