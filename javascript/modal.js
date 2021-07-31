// create references to the modal...
const modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
const images = document.querySelectorAll('[data-index]');
// the image in the modal
const modalImg = document.getElementById("img01");
// and the caption in the modal
const captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (let i = 0; i < images.length; i++) {
  let img = images[i];
  // images[i].index = i;
  // and attach our click listener for this image.
  img.addEventListener("click", event => {
    index = img.dataset.index;
    // console.log(index)
    openModal(index)
  });
}

// Function to open modal
function openModal(index) {
  modal.dataset.index = index
  modal.style.display = "block";
  modalImg.src = images[index].src;
  captionText.innerHTML = images[index].alt;
}


document.querySelector(".prev").addEventListener('click', event => {
  // console.log(this)
  const index = modal.dataset.index === '0' ? images.length - 1 : +modal.dataset.index - 1
  openModal(index);
})


document.querySelector(".next").addEventListener('click', event => {
  // console.log(this)
  openModal((+modal.dataset.index + 1) % images.length);
})


window.addEventListener('keydown', function(event) {
  if (modal.style.display!=='none') {
    const key = event.key;
    switch (key) {
        case "ArrowLeft":
            str = 'Left';
            const index = modal.dataset.index === '0' ? images.length - 1 : +modal.dataset.index - 1;
            openModal(index);
            break;
        case "ArrowRight":
            str = 'Right';
            openModal((+modal.dataset.index + 1) % images.length);
            break;
        case "Escape": // IE/Edge specific value
            str = 'Escape';
            modal.style.display='none';
            break;
    }
  }
});

const span = document.getElementsByClassName("close")[0];