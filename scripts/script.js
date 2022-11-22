var buttons = document.getElementsByClassName(" car-button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("price").scrollIntoView( {behavior: "smooth"});
    }
}