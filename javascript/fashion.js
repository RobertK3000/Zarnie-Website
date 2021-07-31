document.querySelector(".fashion-grid").classList.add("remove")

setTimeout(function(){ 
  document.querySelector(".fashion-grid").classList.remove("remove"); 
}, 200);

setTimeout(function(){ 
  var sculptureColc = new Colcade( '.fashion-grid', {
    columns: '.fashion-grid-col',
    items: '.fashion-grid-item'
  });
}, 100);


