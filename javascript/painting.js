document.querySelector(".painting-grid").classList.add("remove")

setTimeout(function(){ 
  document.querySelector(".painting-grid").classList.remove("remove"); 
}, 200);

setTimeout(function(){ 
  var paintingColc = new Colcade( '.painting-grid', {
    columns: '.painting-grid-col',
    items: '.painting-grid-item'
  });
}, 100);
