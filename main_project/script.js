// script.js

// Function to toggle the visibility of the drawer
function toggleDrawer() {
    var drawer = document.getElementById("drawer");
    drawer.classList.toggle("open");
}

function openCardPage() {
    location.href = "../card/index.html";
}
function openGamePage() {
  location.href = "../game/index.html";
}

function toggleDarkMode() {
    var body = document.body;
    var modeSwitch = document.getElementById("modeSwitch");

    if (modeSwitch.checked) {
        // Light mode
        body.style.setProperty('--background-color', '#fff');
        body.style.setProperty('--background-color-level-two', '#9b9999d2');
        body.style.setProperty('--background-color-level-three', '#ccc');
        body.style.setProperty('--font-color', '#000');
    } else {
        // Dark mode
        body.style.setProperty('--background-color', '#222');
        body.style.setProperty('--background-color-level-two', '#030303');
        body.style.setProperty('--background-color-level-three', '#141414');
        body.style.setProperty('--font-color', '#fff');
    }
}

$(document).ready(function() {
    var text = "❤ hope u like this 💕 hadeel 💞 .";
    var index = 0;
    var isDeleting = false;
  
    function animateText() {
      var currentText = text.substring(0, index);
      $('.message').text(currentText);
  
      if (isDeleting) {
        index--;
      } else {
        index++;
      }
  
      if (index === text.length + 1) {
        isDeleting = true;
      }
  
      if (index === 1 && isDeleting) {
        isDeleting = false;
      }
    }
  
    setInterval(animateText, 90);
  });
  