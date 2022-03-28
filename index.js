const btn = document.querySelector("button");

const comidas1 = document.querySelector(".comidas1");
const comidas2 = document.querySelector(".comidas2");

const comidas = [
    ["MILA", "POLLO", "COSTELETA", "HAMBURGUEZA"],
    ["ENZALADA", "PURE", "ARROZ", "FIDEOS", "PAPAS"],
    [
        "PIZZA",
        "HAMBURGUEZA",
        "FIDEOS",
        "RABIOLEZ",
        "SOPA",
        "SANDWICH",
        "PICADA",
    ],
];

let t;

function render() {
    comidas1.innerHTML = comidas2.innerHTML = "";
    t = setInterval(() => {
        if (Math.floor(Math.random()*2)) {
            comidas1.innerHTML = comidas[0][Math.floor(Math.random() * 4)];
            comidas2.innerHTML = comidas[1][Math.floor(Math.random() * 5)];
        }
        else {
            comidas1.innerHTML = comidas[2][Math.floor(Math.random() * 7)];
            comidas2.innerHTML = "-";
        }
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