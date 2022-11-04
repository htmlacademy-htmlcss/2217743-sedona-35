let watch = document.querySelector('.product-list');
let column = document.querySelector('.column');
let cards = document.querySelector('.cards');

column.onclick = function() {
    watch.style.display = 'flex';
    watch.style.flexDirection = 'column';
    watch.style.alignItems = 'center';
}

cards.onclick = function() {
    watch.style.display = 'grid';
}
