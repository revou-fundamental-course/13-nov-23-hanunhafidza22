const imageSlider = document.getElementById('slider')
var i = 0
const images = [
    "assets/kelingking-beach.jpg",
    "assets/kuta-beach.jpeg",
    "assets/sanur-beach.jpg",
    "assets/uluwatu-beach.jpg",
]
function bannerSlide() {
    i += 1
    if (i === images.length) {
        i = 0
    }
    imageSlider.src = images[i]
}
setInterval(bannerSlide, 2000)