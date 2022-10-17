let modal = document.getElementById('modal-window');
let btn = document.getElementById('open-modal-window');
let span = document.getElementsByClassName("close-modal-window")[0];

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


let heart = document.querySelector('.button-like');
let likesNumber = document.querySelector('.likes-number');

heart.onclick = function() {
    if (heart.classList.contains('added')) {
        likesNumber.textContent--;
    } else {
        likesNumber.textContent++;
    }
    heart.classList.toggle('added');
}
