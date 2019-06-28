const buttons = document.querySelectorAll('.cta');

Array.from(buttons).forEach(button => button.addEventListener('click', () => {
    console.log('clicked');
}));