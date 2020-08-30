
var imgs = document.getElementsByClassName("item-img");
var lightboxcontainer = document.querySelector(".lightbox-container");
var lightboxitem = document.querySelector(".lightbox-item");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var close = document.getElementById("close");
var imgsArray = [];
var currentIndex = 0;
for (let i = 0; i < imgs.length; i++) {
  imgsArray.push(imgs[i]);
  imgs[i].addEventListener("click", function(e) {
    lightboxcontainer.classList.add("show");
    let imgSrc = e.target.src;
    lightboxitem.style.backgroundImage = `url(${imgSrc})`;
    currentIndex = imgsArray.indexOf(e.target);
  })
}

prev.addEventListener("click", function() {
  prevPic();
})

function prevPic() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imgsArray.length - 1;
  }
  lightboxitem.style.backgroundImage = `url(${imgsArray[currentIndex].src})`;
}
function nextPic() {
  currentIndex++;
  if (currentIndex == imgsArray.length) {
    currentIndex = 0;
  }
  lightboxitem.style.backgroundImage = `url(${imgsArray[currentIndex].src})`;
}
next.addEventListener("click", function() {
  nextPic();
})

close.addEventListener("click", function() {
  lightboxcontainer.classList.remove("show");
})

document.addEventListener("keydown", function(e) {
  if (e.keyCode == 27) // escape
  {
    lightboxcontainer.classList.remove("show");
  } else if (e.keyCode == 37) // Prev
  {
    prevPic()
  } else if (e.keyCode == 39) // next
  {
    nextPic();
  }
})

lightboxcontainer.addEventListener("click", function(e) {
  if (e.target == lightboxcontainer) {
    lightboxcontainer.classList.remove("show");
  }
})
