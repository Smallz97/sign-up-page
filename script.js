const form = document.querySelector("form");
const formInput = document.querySelectorAll(".form-input");

formInput.forEach(input => {
    const errorIcon = input.nextElementSibling;
    const errorMessage = errorIcon.nextElementSibling;


    input.addEventListener('input', function() {
        if (!input.checkValidity()) {
            input.style.marginBottom = "2rem";
            errorIcon.style.display = 'block';
            errorMessage.style.display = 'block';

        } else {
            errorIcon.style.display = 'none';
            errorMessage.style.display = 'none';
            input.style.marginBottom = "1.2rem";
    
        }
    });

});


form.addEventListener('submit', function(event) {
    let formIsValid = true;

    formInput.forEach(input => {
        const errorIcon = input.nextElementSibling;
        const errorMessage = errorIcon.nextElementSibling;

        if (!input.checkValidity()) {
            formIsValid = false;
            input.style.marginBottom = "2rem";
            errorIcon.style.display = 'block';
            errorMessage.style.display = 'block';
        }
    });

    if (!formIsValid) {
        event.preventDefault();
    }
});

