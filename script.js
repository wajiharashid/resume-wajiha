const text = " Developer";
const typingText = document.querySelector('.typing-text');
let index = 0;

function type() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 150);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    type();
});
