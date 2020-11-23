    const painel = document.getElementById('painel');

    function svg(e) {

        let input = e.target
        let id = e.target.id

        if (id == 'svg-str') {
            document.querySelectorAll("path, circle, line , rect").forEach(function (path) {
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
                path.style.fillRule = pfillrule.options[pfillrule.selectedIndex].text;
            });

        } else
            if (id == 'p-str-lcap') {
            document.querySelectorAll("path").forEach(function (path) {
                path.style.strokeLinecap = plcap.options[plcap.selectedIndex].text;
            });

        } else
            if (id == 'p-str-ljoin') {
            document.querySelectorAll("path").forEach(function (path) {
                path.style.strokeLinejoin = pljoin.options[pljoin.selectedIndex].text;
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
                path.style.stroke = input.value;
            });

        } else
            if (id == 'c-str-w') {

            document.querySelectorAll("circle").forEach(function (path) {
                path.style.strokeWidth = input.value;
            });

        } else
            if (id == 'c-fill') {
            document.querySelectorAll("circle").forEach(function (path) {
                path.style.fill = input.value;
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
                path.style.strokeWidth = input.value;
            });

        } else
            if (id == 'l-fill') {
            document.querySelectorAll("line").forEach(function (path) {
                path.style.fill = input.value;
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

    painel.addEventListener('input', svg, false);