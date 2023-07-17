const num_1 = Number.parseFloat(prompt('Введите градусы в Цельсиях'));
alert('Тогда фарингейт равен: ' + convert_c_f(num_1));
function convert_c_f(c) {
    let f = 0;
    f = c * 1.8 + 32;
    f = Math.round(f);
    document.getElementById("rezultat").innerHTML = 'Если цельсий равен ' + c + ', то фарингейт равен ' + f;
    return f;
}