document.addEventListener("DOMContentLoaded", function () {

    const addNewFaq  = document.getElementById('add-new-question');
    const faqContainer = document.querySelector(".faq-container");

    function activeTogle(event) {
       const question = event.currentTarget;
       question.parentElement.classList.toggle('active');
    // this.parentElement.classList.toggle('active');
    }
    function removeQuestion() {
        this.parentElement.parentElement.remove();
    }
    const faqToggles = document.querySelectorAll('.faq-toggle');
    faqToggles.forEach(function(faqToggle) {
        faqToggle.addEventListener('click', activeTogle);

        const crossIcon = faqToggle.querySelector(".fa-times");
        crossIcon.addEventListener("click", removeQuestion);
    });
    
    addNewFaq.addEventListener('click', function () {
    const newQuestionTitleInput = document.getElementById("enter-new-question");
    const newQuestionAnswerInput = document.getElementById("add-question-answer");

    const question = newQuestionTitleInput.value;
    const answer = newQuestionAnswerInput.value;

    const faq = document.createElement('div');
    faq.classList.add('faq');

    const faqTitle = document.createElement('h3');
    faqTitle.classList.add('faq-title');
    faqTitle.textContent = question;

    const faqText = document.createElement('p');
    faqText.classList.add('faq-text');
    faqText.textContent = answer;

    const faqToggle = document.createElement('button');
    faqToggle.classList.add('faq-toggle');

    const faqChevronDown = document.createElement('i');
    faqChevronDown.classList.add('fas', 'fa-chevron-down');

    const faqTimes = document.createElement('i');
    faqTimes.classList.add('fas', 'fa-times');

    faqToggle.appendChild(faqChevronDown);
    faqToggle.appendChild(faqTimes);

    faq.appendChild(faqTitle);
    faq.appendChild(faqText);
    faq.appendChild(faqToggle);

    faqContainer.appendChild(faq);

    newQuestionTitleInput.value = "";
    newQuestionAnswerInput.value = "";
    
    faqToggle.addEventListener('click', activeTogle);
    faqTimes.addEventListener('click', removeQuestion);
     
    });


});