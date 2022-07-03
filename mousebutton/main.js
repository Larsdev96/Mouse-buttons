document.addEventListener("mouseup", (event) => {
    if (event.button == 0) { //left
      document.getElementById('rightclick').style.visibility = 'hidden';
      document.getElementById('middleclick').style.visibility = 'hidden';
      document.getElementById('leftclick').style.visibility = 'visible';
    } else if (event.button == 1) { //middle
      document.getElementById('leftclick').style.visibility = 'hidden';
      document.getElementById('rightclick').style.visibility = 'hidden';
      document.getElementById('middleclick').style.visibility = 'visible';
    } else if (event.button == 2) { //right
      document.getElementById('leftclick').style.visibility = 'hidden';
      document.getElementById('middleclick').style.visibility = 'hidden';
      document.getElementById('rightclick').style.visibility = 'visible';
    }
  });

  