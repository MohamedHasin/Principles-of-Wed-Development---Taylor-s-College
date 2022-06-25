//progress bar of languages spoken, will start once the page is loaded/refreshed
{var i = 0;
window.onload=function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("Languages");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
}
// alert function
{function hi() {
  alert('Hi! I am Hasin and this is my resume. This resume contains mostly dummy information. Enjoy reading and have a great day! :D');
}
setTimeout(hi, 1100);

}
