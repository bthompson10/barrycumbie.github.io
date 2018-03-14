//PrintDom

$(document).ready(function() {
  var indexItems = document.getElementsByTagName("*");
  for(var i=0, max=indexItems.length; i < max; i++){
  console.log(indexItems[i].tagName);
  }
});
