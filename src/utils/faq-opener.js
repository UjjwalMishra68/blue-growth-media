function faqOpener() {
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq__question');
        const answer = item.querySelector('.faq__answer');
        const icon = item.querySelector('.plus__icon i');

        question.addEventListener('click', () => {
            // Check if the clicked item is already visible
            const isVisible = answer.classList.toggle('visible');
            icon.classList.toggle('open');

            // Close other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherAnswer = otherItem.querySelector('.faq__answer');
                    const otherIcon = otherItem.querySelector('.plus__icon i');

                    // Close other items if they're open
                    if (otherAnswer.classList.contains('visible')) {
                        otherAnswer.classList.remove('visible');
                        otherAnswer.style.height = '0'; // Collapse to 0
                        otherIcon.classList.remove('open');
                    }
                }
            });

            // Adjust the height of the clicked answer
            if (isVisible) {
                answer.style.height = `${answer.scrollHeight}px`; // Set to full height
            } else {
                answer.style.height = '0'; // Collapse to 0
            }

            console.log("FAQ toggled:", question.textContent); // Debugging line
        });
    });
}

export default faqOpener;
