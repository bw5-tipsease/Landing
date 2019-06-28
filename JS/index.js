//buttons Node List
const buttons = document.querySelectorAll('.cta');

// meaning 'Media Query Desktop' and 'Media Query Mobile respectively
const mqDesktop = window.matchMedia(('(min-width: 1000px)'));
const mqMobile = window.matchMedia(('(max-width: 500px)'));

// making an array from the buttons Node List and applying a function to each one,
// and storing this creation of an array and forEach loop inside a function
function buttonSwapWhiteTop() {
    Array.from(buttons).forEach(button => {
        if (button.classList.contains('top')){
            button.classList.remove('white');
            button.classList.add('blue');
        }
        else if (button.classList.contains('bottom')){
            button.classList.remove('blue');
            button.classList.add('white');
        }
    console.log('clicked');
    });
};

// I know there is a much more elegant way to do this but I do not have time
// to refactor the code right now so I am doubling up 

function buttonSwapBlueTop() {
    Array.from(buttons).forEach(button => {
        if (button.classList.contains('bottom')){
            button.classList.remove('white');
            button.classList.add('blue');
        }
        else if (button.classList.contains('top')){
            button.classList.remove('blue');
            button.classList.add('white');
        }
    console.log('clicked');
    });
};


function isDesktop(width){
    if (width.matches){
        buttonSwapWhiteTop();
    }
}

function isMobile(width){
    if (width.matches){
        buttonSwapBlueTop();
    }
}

window.onload = mqDesktop.addListener(isDesktop);
window.onload = mqMobile.addListener(isMobile);
