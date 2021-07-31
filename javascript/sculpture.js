document.querySelector(".sculpture-grid").classList.add("remove")

setTimeout(function(){ 
  document.querySelector(".sculpture-grid").classList.remove("remove"); 
}, 200);

setTimeout(function(){ 
  var sculptureColc = new Colcade( '.sculpture-grid', {
    columns: '.sculpture-grid-col',
    items: '.sculpture-grid-item'
  });
}, 100);
