//<><>QuerySelectors<><>
var newPaletteButton = document.querySelector(".new-palette-button");
var saveButton = document.querySelector(".save-palette-button");

var lock1 = document.querySelector("#lock1");
var lock2 = document.querySelector("#lock2");
var lock3 = document.querySelector("#lock3");
var lock4 = document.querySelector("#lock4");
var lock5 = document.querySelector("#lock5");

var savedSection = document.querySelector(".saved-section");
var savedPalettes = document.querySelector(".mini-palette");
var savedStatus = document.querySelector(".saved-palettes-status");
var miniPalettes = document.querySelector("#mini-palettes");

//<><>Data Model<><>
var boxes = [
  {
    box: document.querySelector("#box1"),
    label: document.querySelector("#label1"),
    locked: false,
  },
  {
    box: document.querySelector("#box2"),
    label: document.querySelector("#label2"),
    locked: false,
  },
  {
    box: document.querySelector("#box3"),
    label: document.querySelector("#label3"),
    locked: false,
  },
  {
    box: document.querySelector("#box4"),
    label: document.querySelector("#label4"),
    locked: false,
  },
  {
    box: document.querySelector("#box5"),
    label: document.querySelector("#label5"),
    locked: false,
  },
];

var hexCharacters = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var currentPalette = [];
var lockedColors = [];
var savedPalettes = [];

//<><>Event Listeners<><>
addEventListener("load", showRandomColors);

lock1.addEventListener("click", function () {
  handleLockIcon(lock1, 0);
});

lock2.addEventListener("click", function () {
  handleLockIcon(lock2, 1);
});

lock3.addEventListener("click", function () {
  handleLockIcon(lock3, 2);
});

lock4.addEventListener("click", function () {
  handleLockIcon(lock4, 3);
});

lock5.addEventListener("click", function () {
  handleLockIcon(lock5, 4);
});

newPaletteButton.addEventListener("click", showRandomColors);
saveButton.addEventListener("click", function () {
  saveCurrentPalette();
  showSavedPalettes(savedPalettes);
});

//<><>Functions<><>
function randomHexCode(){
    var hexCode = "#";
    for (var i = 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random() * hexCharacters.length);
        hexCode += hexCharacters[randomIndex];
    }
    return hexCode;
}

function showRandomColors() {
  currentPalette = [];
  boxes.forEach(function (item, index) {
    var randomColor = null;
    if (!lockedColors[index]) {
      var randomColor = randomHexCode()
    } else {
      randomColor = lockedColors[index];
    }
    item.box.style.backgroundColor = randomColor;
    item.label.innerText = randomColor;
    currentPalette.push(randomColor);
  });
}

function saveCurrentPalette() {
  savedStatus.classList.add("hidden");
  if (!savedPalettes.includes(currentPalette)) {
    savedPalettes.push(currentPalette);
  }
}

function handleLockIcon(lock, index) {
  var isLocked = lock.src.includes("unlocked");
  if (isLocked) {
    lockedColors[index] = boxes[index].label.innerText;
    lock.src = "assets/locked.png";
  } else {
    lockedColors[index] = null;
    lock.src = "assets/unlocked.png";
  }
}

function showSavedPalettes(savedPalettes) {
  var section = document.createElement("section");
  section.className = "saved-palettes";
  var lastIndex = savedPalettes[savedPalettes.length - 1];
  console.log(lastIndex)
  for (var i = 0; i < lastIndex.length; i++) {
    var div = document.createElement("div");
    div.className = "mini-palette";
    div.style.backgroundColor = lastIndex[i];
    section.appendChild(div);
    savedSection.appendChild(section);
    showRandomColors();
  }
  var deleteButton = document.createElement("img");
  deleteButton.src ='assets/delete.png'
  deleteButton.className = "delete-button";
  section.appendChild(deleteButton);
}


