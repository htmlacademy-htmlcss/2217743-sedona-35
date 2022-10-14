var modal = document.getElementById('modal-window');
var btn = document.getElementById('open-modal-window');
var span = document.getElementsByClassName("close-modal-window")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
