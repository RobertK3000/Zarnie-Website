document.querySelector(".drawing-grid").classList.add("remove");

setTimeout(function(){ 
  document.querySelector(".drawing-grid").classList.remove("remove"); 
}, 200);

setTimeout(function(){ 
  var drawingColc = new Colcade( '.drawing-grid', {
    columns: '.drawing-grid-col',
    items: '.drawing-grid-item'
  });  
}, 100);


