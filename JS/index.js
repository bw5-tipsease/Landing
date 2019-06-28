const buttons = document.querySelectorAll('.cta');

// making an array from the buttons Node List and applying a function to each one.
Array.from(buttons).forEach(button => button.addEventListener('click', () => {
    if (button.classList.contains('white')){
        button.classList.remove('white');
        button.classList.add('blue');
    }
    else if (button.classList.contains('blue')){
        button.classList.remove('blue');
        button.classList.add('white');
    }
    console.log('clicked');
}));