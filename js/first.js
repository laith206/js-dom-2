// container
var lite = document.getElementById("lightbox-container");
// all img in body
var img1 = Array.from(document.getElementsByTagName("img"));
var close = document.getElementById("close");
var litephoto = document.getElementById("lightbox-item");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

// cunter for next and prev img
var caunter = 0;

// click to show img 
for (let i = 0; i < img1.length; i++) {
    img1[i].addEventListener("click", function(eventInfo) {
        var imgsrc = eventInfo.target.src;
        console.log(imgsrc);
        lite.style.display = "flex";
        litephoto.style.cssText = `background-image: url(${imgsrc});`
    });
}


// close //  img
close.addEventListener("click", function() {
    lite.style.display = "none"
});


// next img
next.addEventListener("click", nextphoto);

function nextphoto() {
    if (caunter == img1.length - 1) {
        caunter = -1;
    }
    caunter++;
    var imgsrc = img1[caunter].src;
    litephoto.style.cssText = `background-image: url(${imgsrc});`
}

//  preview img
prev.addEventListener("click", prevphoto);

function prevphoto() {
    if (caunter == 0) {
        caunter = img1.length;
    }
    caunter--;
    var imgsrc = img1[caunter].src;
    litephoto.style.cssText = `background-image: url(${imgsrc});`
}


close.addEventListener("keydown", function(e) {
    if (e.keyCode === 27) {
        console.log(e.keyCode)
    }
});


document.addEventListener("keydown", event => {
    if (event.keyCode == 27) {
        lite.style.display = "none"
    } else if (event.keyCode == 39) {
        nextphoto();
    } else if (event.keyCode == 37) {
        prevphoto();
    }

    // do something
});