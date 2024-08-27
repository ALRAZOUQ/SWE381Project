let question_page_numbers = document.getElementsByClassName("a-question-page-number");
let answer_page_numbers = document.getElementsByClassName("an-answer-page-number");

[...question_page_numbers].forEach(i => {
    i.addEventListener('click', changeTheHighlitedQuestionPageNumber);
});

function changeTheHighlitedQuestionPageNumber(event) {
    Array.from(question_page_numbers).forEach(i => i.classList.remove("selected-question-page"));
    event.target.classList.add("selected-question-page");
}


[...answer_page_numbers].forEach(i => {
    i.addEventListener('click', changeTheHighlitedAnswerPageNumber);
});


function changeTheHighlitedAnswerPageNumber(event) {
    Array.from(answer_page_numbers).forEach(i => i.classList.remove("selected-answer-page"));
    event.target.classList.add("selected-answer-page");
}




document.getElementsByClassName("prev-question-page")[0].addEventListener("click", () => prev_func("question", question_page_numbers));;
document.getElementsByClassName("next-question-page")[0].addEventListener("click", () => next_func("question", question_page_numbers));



document.getElementsByClassName("prev-answer-page")[0].addEventListener("click", () => prev_func("answer", answer_page_numbers));
document.getElementsByClassName("next-answer-page")[0].addEventListener("click", () => next_func("answer", answer_page_numbers));






// we must prevent user from clicking next when he is in the last page DFTD
function next_func(QorA, theElementsCollection) {
    let current_q_page = parseInt(document.getElementsByClassName(`selected-${QorA}-page`)[0].textContent) + 1;
    document.getElementsByClassName(`selected-${QorA}-page`)[0].classList.remove(`selected-${QorA}-page`)
    for (let i of theElementsCollection) {
        if (parseInt(i.textContent) == current_q_page) {
            i.classList.add(`selected-${QorA}-page`);
            break
        }
    }

}


// we must prevent user from clicking prev when he is in the first page DFTD
function prev_func(QorA, theElementsCollection) {

    let current_page = parseInt(document.getElementsByClassName(`selected-${QorA}-page`)[0].textContent) - 1;
    document.getElementsByClassName(`selected-${QorA}-page`)[0].classList.remove(`selected-${QorA}-page`)
    for (let i of theElementsCollection) {
        if (parseInt(i.textContent) == current_page) {
            i.classList.add(`selected-${QorA}-page`);
            break

        }
    }

}