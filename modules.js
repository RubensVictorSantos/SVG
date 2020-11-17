    const svgstroke = document.getElementById('svg-str');
    const svgfill = document.getElementById('svg-fill');
    const svgstrokew = document.getElementById('svg-str-w');
    const svgwidth = document.getElementById('svg-width');
    const bgcolor = document.getElementById('svg-bg-color')

    const pstroke = document.getElementById('p-str');
    const pfill = document.getElementById('p-fill');
    const pstrokew = document.getElementById('p-str-w');
    const plcap = document.getElementById('p-str-lcap');
    const pfillrule = document.getElementById('p-fill-rule');
    const pljoin = document.getElementById('p-str-ljoin');

    const rx = document.getElementById('r-x');
    const ry = document.getElementById('r-y');
    const rry = document.getElementById('r-rx');
    const rrx = document.getElementById('r-ry');
    const rstr = document.getElementById('r-str');
    const rstrw = document.getElementById('r-str-w');
    const rfill = document.getElementById('r-fill');

    const cx = document.getElementById('c-cx');
    const cy = document.getElementById('c-cy');
    const cr = document.getElementById('c-r');
    const cstr = document.getElementById('c-str');
    const cstrw = document.getElementById('c-str-w');
    const cfill = document.getElementById('c-fill');

    const lstr = document.getElementById('l-str');
    const lstrw = document.getElementById('l-str-w');
    const lfill = document.getElementById('l-fill');
    const llcap = document.getElementById('l-str-lcap');
    const lljoin = document.getElementById('l-str-ljoin');

    window.onload = console.log(svgstroke)

    function svg(e) {

        let input = e.target

        if (input.id == 'svg-str') {
            document.querySelectorAll("path, circle, line , rect").forEach(function (path) {
                path.style.stroke = input.value;
            });

        } else if (input.id == 'svg-str-w') {
            document.querySelectorAll("path, circle, line, rect").forEach(function (path) {
                path.style.strokeWidth = input.value;
            });

        } else if (input.id == 'svg-fill') {
            document.querySelectorAll("path, circle, line, rect").forEach(function (path) {
                path.style.fill = input.value;
            });

        } else if (input.id == 'svg-width') {
            document.querySelectorAll(".box").forEach(function (path) {
                path.style.width = input.value + 'px';
                path.style.height = input.value + 'px';
            });

        } else if (input.id = 'svg-bg-color') {
            document.querySelectorAll(".box").forEach(function (path) {
                path.style.backgroundColor = input.value;
            });

        }
    }

    function svgPath(e) {

        if (e.target.id == 'p-str') {
            document.querySelectorAll("path").forEach(function (path) {
                path.style.stroke = event.target.value;
            });

        } else if (e.target.id == 'p-str-w') {
            document.querySelectorAll("path").forEach(function (path) {
                path.style.strokeWidth = event.target.value;
            });

        } else if (e.target.id == 'p-fill') {
            document.querySelectorAll("path").forEach(function (path) {
                path.style.fill = event.target.value;
            });

        } else if (e.target.id == 'p-fill-rule') {
            document.querySelectorAll("path").forEach(function (path) {
                path.style.fillRule = pfillrule.options[pfillrule.selectedIndex].text;
            });

        } else if (e.target.id == 'p-str-lcap') {
            document.querySelectorAll("path").forEach(function (path) {
                path.style.strokeLinecap = plcap.options[plcap.selectedIndex].text;
            });

        } else if (e.target.id == 'p-str-ljoin') {
            document.querySelectorAll("path").forEach(function (path) {
                path.style.strokeLinejoin = pljoin.options[pljoin.selectedIndex].text;
            });

        }
    }

    function svgRect(e) {

        if (e.target.id == 'r-str') {
            document.querySelectorAll("rect").forEach(function (path) {
                path.style.stroke = event.target.value;
            });

        } else if (e.target.id == 'r-str-w') {

            document.querySelectorAll("rect").forEach(function (path) {
                path.style.strokeWidth = event.target.value;
            });

        } else if (e.target.id == 'r-fill') {
            document.querySelectorAll("rect").forEach(function (path) {
                path.style.fill = event.target.value;
            });

        } else if (e.target.id == 'r-rx') {
            document.querySelectorAll("rect").forEach(function (path) {
                path.style.rx = e.target.value;
            });

        } else if (e.target.id == 'r-ry') {
            document.querySelectorAll("rect").forEach(function (path) {
                path.style.ry = e.target.value;
            });

        }
    }

    function svgCircle(e) {

        if (e.target.id == 'c-str') {
            document.querySelectorAll("circle").forEach(function (path) {
                path.style.stroke = event.target.value;
            });

        } else if (e.target.id == 'c-str-w') {

            document.querySelectorAll("circle").forEach(function (path) {
                path.style.strokeWidth = event.target.value;
            });

        } else if (e.target.id == 'c-fill') {
            document.querySelectorAll("circle").forEach(function (path) {
                path.style.fill = event.target.value;
            });

        } else if (e.target.id == 'c-r') {
            document.querySelectorAll("circle").forEach(function (path) {
                path.style.r = e.target.value;
            });

        }
    }

    function svgLine(e) {

        if (e.target.id == 'l-str') {
            document.querySelectorAll("line").forEach(function (path) {
                path.style.stroke = event.target.value;
            });

        } else if (e.target.id == 'l-str-w') {

            document.querySelectorAll("line").forEach(function (path) {
                path.style.strokeWidth = event.target.value;
            });

        } else if (e.target.id == 'l-fill') {
            document.querySelectorAll("line").forEach(function (path) {
                path.style.fill = event.target.value;
            });

        } else if (e.target.id == 'l-str-lcap') {
            document.querySelectorAll("line").forEach(function (path) {
                path.style.strokeLinecap = llcap.options[llcap.selectedIndex].text;
            });

        } else if (e.target.id == 'l-str-ljoin') {
            document.querySelectorAll("line").forEach(function (path) {
                path.style.strokeLinejoin = lljoin.options[lljoin.selectedIndex].text;
            });

        }
    }

    svgstroke.addEventListener('input', svg, false);
    svgfill.addEventListener('input', svg, false);
    svgstrokew.addEventListener('change', svg, false);
    svgwidth.addEventListener('input', svg, false);
    svgfill.addEventListener('input', svg, false)
    bgcolor.addEventListener('input', svg, false);

    pstroke.addEventListener('input', svgPath, false);
    pfill.addEventListener('input', svgPath, false);
    pstrokew.addEventListener('change', svgPath, false);
    pfillrule.addEventListener('input', svgPath, false);
    plcap.addEventListener('change', svgPath, false);
    pljoin.addEventListener('change', svgPath, false);

    rstr.addEventListener('input', svgRect, false);
    rfill.addEventListener('input', svgRect, false);
    rstrw.addEventListener('input', svgRect, false);
    rrx.addEventListener('input', svgRect, false);
    rry.addEventListener('input', svgRect, false);

    cstr.addEventListener('input', svgCircle, false);
    cfill.addEventListener('input', svgCircle, false);
    cstrw.addEventListener('input', svgCircle, false);
    cr.addEventListener('input', svgCircle, false);

    lstr.addEventListener('input', svgLine, false);
    lfill.addEventListener('input', svgLine, false);
    lstrw.addEventListener('input', svgLine, false);
    llcap.addEventListener('change', svgLine, false);
    lljoin.addEventListener('change', svgLine, false);