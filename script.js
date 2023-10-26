 
 
    //  add new faq to the faq container using form data
    const form = document.getElementById('form');
    const questionInput = document.getElementById('question');
    const answerInput = document.getElementById('answer');
    const faqContainer = document.querySelector('.faq-container');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const question = questionInput.value;
        const answer = answerInput.value;

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

        questionInput.value = '';
        answerInput.value = '';

        
    
       // 
    });
    const faqToggles = document.querySelectorAll('.faq-toggle');
    faqToggles.forEach(function(faqToggle) {
     faqToggle.addEventListener('click', function() {
         this.parentElement.classList.toggle('active');
     });
    });

