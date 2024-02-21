var newPalette = document.querySelector(".new-palette-button");
var boxes = [
    {box: document.querySelector('#box1'), label: document.querySelector('#label1')},
    {box: document.querySelector('#box2'), label: document.querySelector('#label2')},
    {box: document.querySelector('#box3'), label: document.querySelector('#label3')},
    {box: document.querySelector('#box4'), label: document.querySelector('#label4')},
    {box: document.querySelector('#box5'), label: document.querySelector('#label5')}
];

var currentPalette = [];

addEventListener("load", showRandomColors);

newPalette.addEventListener("click", function(){
    showRandomColors();
})

function showRandomColors() {
    currentPalette = [];
    boxes.forEach(function(item) {
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        item.box.style.backgroundColor = randomColor;
        item.label.innerText = randomColor;
        currentPalette.push(randomColor);
    });
};


