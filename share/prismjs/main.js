document.addEventListener("DOMContentLoaded", function () {
    var codes = document.getElementsByTagName('code');
    for (var i = 0; i < codes.length; i++) {
        if (document.documentElement.classList) {
            codes[i].classList.add("line-numbers");
        }
    }

    var tables = document.getElementsByTagName('table');
    for (var i = 0; i < tables.length; i++) {
        if (document.documentElement.classList) {
            tables[i].classList.add("table");
        }

        var oldHtml = tables[i].outerHTML;
        tables[i].outerHTML = "<div class='table-responsive'>" + oldHtml + "</div>";
    }
});
