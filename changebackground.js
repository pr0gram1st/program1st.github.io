var images = [
  "https://wallpaperaccess.com/full/123346.jpg",
  "https://wallpaperaccess.com/full/1249519.jpg",
  "https://wallpaper.wiki/wp-content/uploads/2017/05/wallpaper.wiki-Beautiful-Full-HD-Wallpaper-Download-Free-PIC-WPE0010098.jpg"
]


var imageHead = document.getElementById("image-head");
var i = 0;

setInterval(function() {
      imageHead.style.backgroundImage = "url(" + images[i] + ")";
      if(i == 1){

      }
      i = i + 1;
      if (i == images.length) {
      	i =  0;
      }
}, 3000);