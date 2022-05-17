    const painel    = document.getElementById('painel');

    const btnPath   = document.getElementById('btn-path');
    const btnRect   = document.getElementById('btn-rect');
    const btnCircle = document.getElementById('btn-circle');
    const btnLine   = document.getElementById('btn-line');
    const plcap     = document.getElementById('p-str-lcap');
    const pljoin    = document.getElementById('p-str-ljoin');
    const boxPainel = document.getElementById('container');
    const boxcode   = document.getElementById('box-code');
    const textA     = document.getElementById('textA');

    let obj_img = {
        '1' : 'bg_01.png',
        '2' : 'bg_02.png',
        '3' : 'bg_03.png',
        '4' : 'bg_04.png',
        '5' : 'bg_05.png',
        '6' : 'bg_06.png',
        '7' : 'bg_07.png',
        '8' : 'bg_08.png',
        '9' : 'bg_09.png',
        '10' : 'bg_10.png',
        '11' : 'bg_11.png',
        '12' : 'bg_12.png',
        '13' : 'bg_13.png',
        '14' : 'bg_14.png',
    }

    window.onload = chargeBg();

    function chargeBg(){

        let c = 1;
        let size = Object.keys(obj_img).length

        setInterval(() =>{
            c = c + 1
            
            document.body.style.backgroundImage =  `url(./Background/bgcolorido/${obj_img[c]})`

            if(c > size){
                c = 0;
            }

        }, 100000);
    }

    function openBoxPainel(e){

        const btn = e.target

        const box = btn.nextSibling.nextSibling;

        if(box.style.display == 'none'){
            box.style.display = 'block';
            btn.innerHTML = '&#9652;';

        }else{
            box.style.display = 'none';
            btn.innerHTML = '&#9662;' ;

        }
    }    

    btnPath.addEventListener('click', openBoxPainel);
    btnRect.addEventListener('click', openBoxPainel);
    btnCircle.addEventListener('click', openBoxPainel);
    btnLine.addEventListener('click', openBoxPainel);

    function svg(e) {

        let input = e.target;
        let id = input.id;

        if (id == 'svg-str') {
                document.querySelectorAll("path, circle, line , rect").forEach((path) => {
                path.style.stroke = input.value;
            });

        } else
            if (id == 'svg-str-w') {
            document.querySelectorAll("path, circle, line, rect").forEach(function (path) {
                path.style.strokeWidth = input.value;
            });

        } else
            if (id == 'svg-fill') {
            document.querySelectorAll("path, circle, line, rect").forEach(function (path) {
                path.style.fill = input.value;
            });

        } else
            if (id == 'svg-width') {
            document.querySelectorAll(".box").forEach(function (path) {
                path.style.width = input.value + 'px';
                path.style.height = input.value + 'px';
            });
        
        } else
            if (id == 'svg-bg-color') {
            document.querySelectorAll(".box").forEach(function (path) {
                path.style.backgroundColor = input.value;
            });

        } else
            if (id == 'p-str') {
            document.querySelectorAll("path").forEach(function (path) {
                path.style.stroke = input.value;
            });

        } else
            if (id == 'p-str-w') {
            document.querySelectorAll("path").forEach(function (path) {
                path.style.strokeWidth = input.value;
            });

        } else
            if (id == 'p-fill') {
            document.querySelectorAll("path").forEach(function (path) {
                path.style.fill = input.value;
            });

        } else
            if (id == 'p-fill-rule') {
            document.querySelectorAll("path").forEach(function (path) {
                path.style.fillRule = input.options[input.selectedIndex].text;
            });

        } else
            if (id == 'p-str-lcap') {
            document.querySelectorAll("path").forEach(function (path) {
                path.style.strokeLinecap = input.options[input.selectedIndex].text;
            });

        } else
            if (id == 'p-str-ljoin') {
            document.querySelectorAll("path").forEach(function (path) {
                path.style.strokeLinejoin = input.options[input.selectedIndex].text;
            });

        } else
            if (id == 'r-str') {
            document.querySelectorAll("rect").forEach(function (path) {
                path.style.stroke = input.value;
            });

        } else
            if (id == 'r-str-w') {
            document.querySelectorAll("rect").forEach(function (path) {
                path.style.strokeWidth = input.value;
            });

        } else
            if (id == 'r-fill') {
            document.querySelectorAll("rect").forEach(function (path) {
                path.style.fill = input.value;
            });

        } else
            if (id == 'r-rx') {
            document.querySelectorAll("rect").forEach(function (path) {
                path.style.rx = e.target.value;
            });

        } else
            if (id == 'r-ry') {
            document.querySelectorAll("rect").forEach(function (path) {
                path.style.ry = e.target.value;
            });

        } else
            if (id == 'c-str') {
            document.querySelectorAll("circle").forEach(function (path) {
                path.style.stroke = e.target.value;

            });

        } else
            if (id == 'c-str-w') {
            document.querySelectorAll("circle").forEach(function (path) {
                path.style.strokeWidth = e.target.value;
            });

        } else
            if (id == 'c-fill') {
            document.querySelectorAll("circle").forEach(function (path) {
                path.style.fill = e.target.value;
            });

        } else
            if (id == 'c-r') {
            document.querySelectorAll("circle").forEach(function (path) {
                path.style.r = e.target.value;
            });

        } else
            if (id == 'l-str') {
            document.querySelectorAll("line").forEach(function (path) {
                path.style.stroke = input.value;
            });

        } else
            if (id == 'l-str-w') {

            document.querySelectorAll("line").forEach(function (path) {
                path.style.strokeWidth = e.target.value;
            });

        } else
            if (id == 'l-fill') {
            document.querySelectorAll("line").forEach(function (path) {
                path.style.fill = e.target.value;
            });

        } else
            if (id == 'l-str-lcap') {
            document.querySelectorAll("line").forEach(function (path) {
                path.style.strokeLinecap = llcap.options[llcap.selectedIndex].text;
            });

        } else
            if (id == 'l-str-ljoin') {
            document.querySelectorAll("line").forEach(function (path) {
                path.style.strokeLinejoin = lljoin.options[lljoin.selectedIndex].text;
            });

        }   

    }

    var viewCode = document.createElement('code');

    function bgBody(e){

        document.querySelectorAll(".box").forEach((box) => {

            box.addEventListener('click', (event) => {             
                boxcode.append(viewCode)
                viewCode.innerText = event.target.innerHTML
                
            });
        });
    }

    painel.addEventListener('input', svg, false);
    boxPainel.addEventListener('click', bgBody);
