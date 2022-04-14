const allImage = document.getElementsByClassName("petite-image");
console.log(allImage);
let grandeImage = document.querySelector('.grande-image')
console.log(grandeImage)

Array.from(allImage).forEach(image => image.addEventListener(
  "click",()=>{
    grandeImage.classList.remove('grande-image')
    image.classList.add('grande-image')
    grandeImage = document.querySelector('.grande-image')
    // Array.from(image.classList).includes('grande-image') ? image.classList.remove('grande-image'):image.classList.add('grande-image')
  }
))
