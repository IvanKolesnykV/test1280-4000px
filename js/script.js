let inp = document.querySelector('#tel');

// Проверяем фокус
inp.onclick = function() {
    inp.value = "+";
}

inp.addEventListener('keypress', e => {
    // Отменяем ввод не цифр
    if(!/\d/.test(e.key))
e.preventDefault();
});