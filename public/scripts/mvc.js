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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtdmMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gICogd2FpdCB1bnRpbCB0aGUgZG9jIGlzIHJlYWR5IHRvIG9iZXkgb3JkZXJzXG4gICovXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGZ1bmN0aW9uKGUpe1xuICB2YXIgZWRpdG9yPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdG9yXCIpO1xuICBlZGl0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsZnVuY3Rpb24oKXtcbiAgICB2YXIgcHJldmlldz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZpZXdcIik7XG4gICAgdmFyIGh0bWxUZXh0PW1hcmtlZChlZGl0b3IudmFsdWUpO1xuICAgIHZhciBlPVJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkoJ1JlYWN0JyxbJ2Rpdicse2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6IGh0bWxUZXh0fX1dKTtcbiAgICBSZWFjdERPTS5yZW5kZXIoZSxwcmV2aWV3KTtcbiAgfSk7XG59KTtcbiJdLCJmaWxlIjoibXZjLmpzIn0=
