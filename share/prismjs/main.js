document.addEventListener("DOMContentLoaded", function () {
    var codes = document.getElementsByTagName('code');

    for (var i = 0; i < codes.length; i++) {
        codes[i].className += ' line-numbers';
    }
});
