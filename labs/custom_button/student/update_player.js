const para = document.querySelector('button')

para.addEventListener('click', updateName)

function updateName() {
    const name = prompt('Enter a new drummer');
    para.textContent = `Drummer 1: ${name}`;
}
