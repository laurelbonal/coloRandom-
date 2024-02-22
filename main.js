var newPalette = document.querySelector(".new-palette-button");
var lock1 = document.querySelector('#lock1');
var lock2 = document.querySelector('#lock2');
// var lock3 = document.querySelector('#lock3');
// var lock4 = document.querySelector('#lock4');
// var lock5 = document.querySelector('#lock5');

var boxes = [
    {box: document.querySelector('#box1'), label: document.querySelector('#label1'), locked: false, lockIcon: document.querySelector('#lock1')},
    {box: document.querySelector('#box2'), label: document.querySelector('#label2'), locked: false, lockIcon: document.querySelector('#lock2')},
    {box: document.querySelector('#box3'), label: document.querySelector('#label3'), locked: false, lockIcon: document.querySelector('#lock3')},
    {box: document.querySelector('#box4'), label: document.querySelector('#label4'), locked: false, lockIcon: document.querySelector('#lock4')},
    {box: document.querySelector('#box5'), label: document.querySelector('#label5'), locked: false, lockIcon: document.querySelector('#lock5')}
];

var currentPalette = [];

addEventListener("load", showRandomColors);

newPalette.addEventListener("click", function(){
    showRandomColors();
})

function showRandomColors() {
    currentPalette = [];
    boxes.forEach(function(item) {
        if (!item.locked){
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        item.box.style.backgroundColor = randomColor;
        item.label.innerText = randomColor;
        currentPalette.push(randomColor);
        }
    });
};

// function handleLock() { 
//     boxes.forEach(function(item) {
//         item.lockIcon.addEventListener("click", function() {
//             toggleLock(item);
//         });
//     });
// }
    

// function toggleLock(item) {
//   item.locked = !item.locked
//   if (item.locked){
//     item.lockIcon.src = "assets/locked.png"
//   }
// }

lock1.addEventListener('click', function() {
  console.log('here');
  handleLock(lock1);
})

lock2.addEventListener('click', function() {
  console.log('here');
  handleLock(lock2);
})

// var isLocked = false;

// function handleLock(lock) {
//   if (!isLocked) {
//     lock.src="assets/locked.png";
//     console.log('isLocked', isLocked)
//     isLocked = true
//     console.log(isLocked, 'true???')
//   } else if (isLocked) {
//     lock.src="assets/unlocked.png";
//     isLocked = false
//   }  
// }

function handleLock(lock) {
  var isLocked = lock.src.includes("unlocked");
  if (isLocked) {
      lock.src = "assets/locked.png";
  } else {
      lock.src = "assets/unlocked.png";
  }
}

