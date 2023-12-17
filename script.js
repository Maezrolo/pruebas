const input = document.querySelector(".input_field");
const inputIcon = document.querySelector(".material-symbols-outlined");

inputIcon.addEventListener("click", (e) => {
    e.preventDefault();

    inputIcon.setAttribute(
        'src',
        input.getAttribute('type') === 'password' ?
        'eye-off.svg'
        :
        'eye.svg'
    );
    input.setAttribute(
        'type',
        input.getAttribute('type') === 'password' ?
        'text'
        :
        'password'
    );
});
