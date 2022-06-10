const painel = document.getElementById('panel');

const btnPath = document.getElementById('btn-path');
const btnRect = document.getElementById('btn-rect');
const btnCircle = document.getElementById('btn-circle');
const btnLine = document.getElementById('btn-line');

const plcap = document.getElementById('p-str-lcap');
const pljoin = document.getElementById('p-str-ljoin');
const boxPainel = document.getElementById('container');
const boxcode = document.getElementById('box-code');
const textA = document.getElementById('textA');

let obj_img = {
    '1': 'bg_01.png',
    '2': 'bg_02.png',
    '3': 'bg_03.png',
    '4': 'bg_04.png',
    '5': 'bg_05.png',
    '6': 'bg_06.png',
    '7': 'bg_07.png',
    '8': 'bg_08.png',
    '9': 'bg_09.png',
    '10': 'bg_10.png',
    '11': 'bg_11.png',
    '12': 'bg_12.png',
    '13': 'bg_13.png',
    '14': 'bg_14.png',
}

// window.onload = chargeBg();

// function chargeBg() {

//     let c = 1;
//     let size = Object.keys(obj_img).length

//     setInterval(() => {
//         c = c + 1

//         document.body.style.backgroundImage = `url(./Background/bgcolorido/${obj_img[c]})`

//         if (c > size) {
//             c = 0;
//         }

//     }, 100000);
// }

// Pegar e mostrar o valor do input range
document.querySelectorAll("input[type=range]").forEach((rng) => {
    let span = rng.nextSibling
    span.textContent = rng.value + "px"

    rng.addEventListener('input', function (e) {
        let value = e.target.value
        span.textContent = value + "px";

    });
});

// Abrir campos do painel
function openBoxPainel(e) {
    let panelField = null;

    console.log(document.querySelectorAll("input[name=rdo-title]"));

    document.querySelectorAll("input[name=rdo-title]").forEach((rdo) => {

        if (rdo.checked) {
            panelField = rdo.parentElement.querySelector(".panel-group");
            panelField.classList.remove("close-panel-group");
            panelField.classList.add("open-panel-group");

        } else {
            panelField = rdo.parentElement.querySelector(".panel-group");
            panelField.classList.remove("open-panel-group");
            panelField.classList.add("close-panel-group");

        }
    });
}

btnPath.addEventListener('change', openBoxPainel);
btnRect.addEventListener('change', openBoxPainel);
btnCircle.addEventListener('change', openBoxPainel);
btnLine.addEventListener('change', openBoxPainel);

function svg(e) {
    let input = e.target;
    let id = input.id;

    switch (id) {
        case 'svg-str':
            document.querySelectorAll("path, circle, line , rect").forEach((path) => {
                path.style.stroke = input.value;
            });
            break;

        case 'svg-str-w':
            document.querySelectorAll("path, circle, line, rect").forEach(function (path) {
                path.style.strokeWidth = input.value;
            });
            break;

        case 'svg-fill':
            document.querySelectorAll("path, circle, line, rect").forEach(function (path) {
                path.style.fill = input.value;
            });
            break;

        case 'box-size':
            document.querySelectorAll(".box").forEach(function (path) {
                path.style.width = input.value + 'px';
                path.style.height = input.value + 'px';
            });
            break;

        case 'svg-bg-color':
            document.querySelectorAll(".box").forEach(function (path) {
                path.style.backgroundColor = input.value;
            });
            break;

        case 'p-str':
            document.querySelectorAll("path").forEach(function (path) {
                path.style.stroke = input.value;
            });
            break;

        case 'p-str-w':
            document.querySelectorAll("path").forEach(function (path) {
                path.style.strokeWidth = input.value;
            });
            break;

        case 'p-fill':
            document.querySelectorAll("path").forEach(function (path) {
                path.style.fill = input.value;
            });
            break;

        case 'p-fill-rule':
            document.querySelectorAll("path").forEach(function (path) {
                path.style.fillRule = input.options[input.selectedIndex].text;
            });
            break;

        case 'p-str-lcap':
            document.querySelectorAll("path").forEach(function (path) {
                path.style.strokeLinecap = input.options[input.selectedIndex].text;
            });
            break;

        case 'p-str-ljoin':
            document.querySelectorAll("path").forEach(function (path) {
                path.style.strokeLinejoin = input.options[input.selectedIndex].text;
            });
            break;

        case 'r-str':
            document.querySelectorAll("rect").forEach(function (path) {
                path.style.stroke = input.value;
            });
            break;

        case 'r-str-w':
            document.querySelectorAll("rect").forEach(function (path) {
                path.style.strokeWidth = input.value;
            });
            break;

        case 'r-fill':
            document.querySelectorAll("rect").forEach(function (path) {
                path.style.fill = input.value;
            });
            break;

        case 'r-rx':
            document.querySelectorAll("rect").forEach(function (path) {
                path.style.rx = e.target.value;
            });
            break;

        case 'r-ry':
            document.querySelectorAll("rect").forEach(function (path) {
                path.style.ry = e.target.value;
            });
            break;

        case 'c-str':
            document.querySelectorAll("circle").forEach(function (path) {
                path.style.stroke = e.target.value;

            });
            break;

        case 'c-str-w':
            document.querySelectorAll("circle").forEach(function (path) {
                path.style.strokeWidth = e.target.value;
            });
            break;

        case 'c-fill':
            document.querySelectorAll("circle").forEach(function (path) {
                path.style.fill = e.target.value;
            });
            break;

        case 'c-r':
            document.querySelectorAll("circle").forEach(function (path) {
                path.style.r = e.target.value;
            });
            break;

        case 'l-str':
            document.querySelectorAll("line").forEach(function (path) {
                path.style.stroke = input.value;
            });
            break;

        case 'l-str-w':
            document.querySelectorAll("line").forEach(function (path) {
                path.style.strokeWidth = e.target.value;
            });
            break;

        case 'l-fill':
            document.querySelectorAll("line").forEach(function (path) {
                path.style.fill = e.target.value;
            });
            break;

        case 'l-str-lcap':
            document.querySelectorAll("line").forEach(function (path) {
                path.style.strokeLinecap = llcap.options[llcap.selectedIndex].text;
            });

            break;
        
        case 'l-str-ljoin':
            document.querySelectorAll("line").forEach(function (path) {
                path.style.strokeLinejoin = lljoin.options[lljoin.selectedIndex].text;
            });
            break;

        default:
            break;
    }

}

/** Ver código do svg */
var viewCode = document.createElement('code');

function bgBody(e) {

    document.querySelectorAll(".box").forEach((box) => {
        box.addEventListener('click', (event) => {
            boxcode.append(viewCode)
            viewCode.innerText = event.target.innerHTML
            console.log(event);
        });
    });
}

painel.addEventListener('input', svg, false);
boxPainel.addEventListener('click', bgBody);
