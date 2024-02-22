var newPaletteButton = document.querySelector(".new-palette-button");
var saveButton = document.querySelector(".save-palette-button")
var lock1 = document.querySelector('#lock1');
var lock2 = document.querySelector('#lock2');
var lock3 = document.querySelector('#lock3');
var lock4 = document.querySelector('#lock4');
var lock5 = document.querySelector('#lock5');

var savedStatus = document.querySelector(".saved-palettes-status")

var boxes = [
    {box: document.querySelector('#box1'), label: document.querySelector('#label1'), locked: false},
    {box: document.querySelector('#box2'), label: document.querySelector('#label2'), locked: false},
    {box: document.querySelector('#box3'), label: document.querySelector('#label3'), locked: false},
    {box: document.querySelector('#box4'), label: document.querySelector('#label4'), locked: false},
    {box: document.querySelector('#box5'), label: document.querySelector('#label5'), locked: false}
];

var currentPalette = [];
var lockedColors = [];
var savedPalettes = [];

addEventListener("load", showRandomColors);

newPaletteButton.addEventListener("click", showRandomColors);
saveButton.addEventListener("click", saveCurrentPalette);

function showRandomColors() {
    currentPalette = [];
    boxes.forEach(function(item, index) {
        var randomColor = null
        if (!lockedColors[index]){
            var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        }
        else {
            randomColor = lockedColors[index]
        }
        item.box.style.backgroundColor = randomColor;
        item.label.innerText = randomColor;
        currentPalette.push(randomColor);
    });
};

function saveCurrentPalette() {
    savedStatus.classList.add("hidden")
    if (!savedPalettes.includes(currentPalette)){
        savedPalettes.push(currentPalette);
        return savedPalettes
    }
};

lock1.addEventListener('click', function() {
  console.log('here');
  handleLockIcon(lock1, 0);
});

lock2.addEventListener('click', function() {
  console.log('here');
  handleLockIcon(lock2, 1);
});

lock3.addEventListener('click', function() {
    console.log('here');
    handleLockIcon(lock3, 2);
});

lock4.addEventListener('click', function() {
    console.log('here');
    handleLockIcon(lock4, 3);
});

lock5.addEventListener('click', function() {
    console.log('here');
    handleLockIcon(lock5, 4);
});


function handleLockIcon(lock, index) {
  var isLocked = lock.src.includes("unlocked");
  if (isLocked) {
        lockedColors[index] = boxes[index].label.innerText
        lock.src = "assets/locked.png";    
  } else {
        lockedColors[index] = null
      lock.src = "assets/unlocked.png";
  }
};


