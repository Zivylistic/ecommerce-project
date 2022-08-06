$(function () {
    loadScript('includes/script.js');
    loadScript('includes/validation.js');
});

function loadScript (url, callback) {
    var head = document.head;
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.onreadystatechange = callback;
    script.onload = callback;
    head.appendChild(script);
}