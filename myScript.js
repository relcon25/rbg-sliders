let body = document.body;
let circle = document.querySelector('#circle');

let    r = document.querySelector('#r');
let    g = document.querySelector('#g');
let    b = document.querySelector('#b');

const setColor = () => {
  let    r_hex = parseInt(r.value, 10).toString(16);
  let    g_hex = parseInt(g.value, 10).toString(16);
  let    b_hex = parseInt(b.value, 10).toString(16);
  let    hex = "#" + pad(r_hex) + pad(g_hex) + pad(b_hex);
  circle.style.fill = hex; 
}

const pad = (n) => (n.length == 1) ? "0" + n : n;

[r, g, b].forEach(color =>{
    color.addEventListener('change', () => {
        setColor();
      }, false);
      
      color.addEventListener('input', () => {
        setColor();
      }, false);
})

