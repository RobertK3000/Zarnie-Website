const dropdownIcon = document.querySelector(".fa-grip-lines");
const dropdownMenu = document.querySelector(".dropdown");

dropdownIcon.addEventListener("click", removeDropdown);

function removeDropdown() {
  dropdownMenu.classList.toggle("remove")
}

window.addEventListener('click', function(event) {
  if (event.target != dropdownIcon) {
      dropdownMenu.classList.add("remove");
  }
});


const dropdownMenuItems = document.querySelectorAll(".dropdown-menu-item");

for (let i = 0; i < dropdownMenuItems.length; i++) {
  let item = dropdownMenuItems[i];

  item.addEventListener("click", event => {
    collection = item.dataset.collection;
    // console.log(collection)
    filterImages(collection)
  });
}

function filterImages(collection) {
  const allImages= document.querySelectorAll('.myImages');

  for (var i = 0; i < allImages.length; i++) {
    
    if (collection == "All") {
      if (allImages[i].classList.contains("remove")) {
        allImages[i].classList.remove("remove");
      }
    } else if (allImages[i].dataset.collection == collection) {
      allImages[i].classList.remove("remove");
    } else {
      allImages[i].classList.add('remove');
    }
  }
}
