let cel = document.getElementById("cel");
let fah = document.getElementById("fah");

cel.addEventListener('input', function () {
    fah.value =((cel.value * 9 / 5) + 32)
});
fah.addEventListener('input', function () {
    let g = (fah.value - 32) * 5 / 9;
    cel.value = g.toFixed(3);
});
