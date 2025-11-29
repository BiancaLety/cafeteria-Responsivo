const btn = document.getElementById('btn-mobile');
const itens = document.getElementById('itens');

btn.addEventListener('click', () => {
    itens.classList.toggle('ativo');
});