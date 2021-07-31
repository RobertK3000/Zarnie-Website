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
