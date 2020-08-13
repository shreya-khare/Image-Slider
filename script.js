var imagesUrl = [
    "https://images.unsplash.com/photo-1533208705114-4f6b97d68ab1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1507388412350-cb43abdebced?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1523897056079-5553b57112d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1506057213367-028a17ec52e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=500&q=60"
];
var image = document.querySelector("IMG");
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");
prev.addEventListener('click', slidePrev);
next.addEventListener('click', slideNext);
let count = -1;
function checkCountForEnd() {
    if (count == imagesUrl.length) {
        count = 0;
    }
}
function checkCountForStart() {
    if (count == -1) {
        count = imagesUrl.length - 1;
    }
    if (count == 0) {
        count = imagesUrl.length;
    }
}

function slidePrev() {
    checkCountForStart();
    count--;
    image.setAttribute("src", imagesUrl[count]);
}

function slideNext() {
    count++;
    checkCountForEnd();
    image.setAttribute("src", imagesUrl[count]);
}