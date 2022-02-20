const btn = document.querySelector("button");

const comidas1 = document.querySelector(".comidas1");
const comidas2 = document.querySelector(".comidas2");

const a_comidas1 = ["MILA", "POLLO", "COSTELETA", "HAMBURGUEZA"];
const a_comidas2 = ["ENZALADA", "PURE", "ARROZ", "FIDEOS"];

let t;

function render() {
    let T = a_comidas1.length;
    comidas1.innerHTML = comidas2.innerHTML = "";
    let I1 = Math.floor(Math.random() * (T-1));
    let I2 = Math.floor(Math.random() * (T-1));
    t = setInterval(() => {
        if (I1 == T) {
            I1 = 0;
        }
        if (I2 == T) {
            I2 = 0;
        }
        comidas1.innerHTML = `<div class="c1">${a_comidas1[I1]}</div>`;
        comidas2.innerHTML = `<div class="c2">${a_comidas2[I2]}</div>`;
        I1++;
        I2++;
    }, 100);
}

btn.addEventListener("click", () => {
    if (btn.innerHTML == "Comenzar") {
        btn.innerHTML = "Parar";
        render();
    } else {
        btn.innerHTML = "Comenzar";
        clearInterval(t);
    }
});
