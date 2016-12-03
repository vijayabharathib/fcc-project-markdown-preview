/**
  * wait until the doc is ready to obey orders
  */
document.addEventListener("DOMContentLoaded",function(e){
  var editor=document.querySelector("#editor");
  editor.addEventListener("keyup",function(){
    var preview=document.querySelector("#preview");
    var htmlText=marked(editor.value);
    var e=React.createElement.apply('React',['div',{dangerouslySetInnerHTML:{__html: htmlText}}]);
    ReactDOM.render(e,preview);
  });
});
