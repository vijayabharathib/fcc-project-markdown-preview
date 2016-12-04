/**
  * wait until the doc is ready to obey orders
  */
document.addEventListener("DOMContentLoaded",function(e){
  //get hold of the editor text area
  var editor=document.querySelector("#editor");
  // set up sample text in the editor when the application starts
  editor.value="# Large title -feel free to edit\nYou can be **bold** and __strong__.\nYou can also add *emphasis* to _stress_.\n### Lists\n* Unordered 1\n\t* Unordered 1.1\n\t* Unordered 1.2\n\n### Links \n[Link to GitHub](https://github.com)\n### Programming\nInline code: `console.log('I am still here');`\n\nBlock of javascipt:\n```javascript\nfunction name(){\n\tDoSomethingWorthwhile();\n}\n```";
  //fill the preview pane with markdown converted to html
  previewMarkdown();

  //add event listener to editor so that preview pane is refreshed on each keyup
  editor.addEventListener("keyup",function(){
    previewMarkdown();
  });

  /**
  * core preview functionality
  * use markedjs to convert text from editor to html string
  * apply the string to preview pane as react element
  * since the output from marked has html string,
  * it can directly be applied through dangerouslySetInnerHTML
  */
  function previewMarkdown(){
    var htmlText=marked(editor.value); //convert markdown to html
    var preview=document.querySelector("#preview"); //get the preview pane handle
    //create a react element
    var e=React.createElement.apply('React',['div',{dangerouslySetInnerHTML:{__html: htmlText}}]);
    //render html
    ReactDOM.render(e,preview);
  }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtdmMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gICogd2FpdCB1bnRpbCB0aGUgZG9jIGlzIHJlYWR5IHRvIG9iZXkgb3JkZXJzXG4gICovXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGZ1bmN0aW9uKGUpe1xuICAvL2dldCBob2xkIG9mIHRoZSBlZGl0b3IgdGV4dCBhcmVhXG4gIHZhciBlZGl0b3I9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0b3JcIik7XG4gIC8vIHNldCB1cCBzYW1wbGUgdGV4dCBpbiB0aGUgZWRpdG9yIHdoZW4gdGhlIGFwcGxpY2F0aW9uIHN0YXJ0c1xuICBlZGl0b3IudmFsdWU9XCIjIExhcmdlIHRpdGxlIC1mZWVsIGZyZWUgdG8gZWRpdFxcbllvdSBjYW4gYmUgKipib2xkKiogYW5kIF9fc3Ryb25nX18uXFxuWW91IGNhbiBhbHNvIGFkZCAqZW1waGFzaXMqIHRvIF9zdHJlc3NfLlxcbiMjIyBMaXN0c1xcbiogVW5vcmRlcmVkIDFcXG5cXHQqIFVub3JkZXJlZCAxLjFcXG5cXHQqIFVub3JkZXJlZCAxLjJcXG5cXG4jIyMgTGlua3MgXFxuW0xpbmsgdG8gR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20pXFxuIyMjIFByb2dyYW1taW5nXFxuSW5saW5lIGNvZGU6IGBjb25zb2xlLmxvZygnSSBhbSBzdGlsbCBoZXJlJyk7YFxcblxcbkJsb2NrIG9mIGphdmFzY2lwdDpcXG5gYGBqYXZhc2NyaXB0XFxuZnVuY3Rpb24gbmFtZSgpe1xcblxcdERvU29tZXRoaW5nV29ydGh3aGlsZSgpO1xcbn1cXG5gYGBcIjtcbiAgLy9maWxsIHRoZSBwcmV2aWV3IHBhbmUgd2l0aCBtYXJrZG93biBjb252ZXJ0ZWQgdG8gaHRtbFxuICBwcmV2aWV3TWFya2Rvd24oKTtcblxuICAvL2FkZCBldmVudCBsaXN0ZW5lciB0byBlZGl0b3Igc28gdGhhdCBwcmV2aWV3IHBhbmUgaXMgcmVmcmVzaGVkIG9uIGVhY2gga2V5dXBcbiAgZWRpdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLGZ1bmN0aW9uKCl7XG4gICAgcHJldmlld01hcmtkb3duKCk7XG4gIH0pO1xuXG4gIC8qKlxuICAqIGNvcmUgcHJldmlldyBmdW5jdGlvbmFsaXR5XG4gICogdXNlIG1hcmtlZGpzIHRvIGNvbnZlcnQgdGV4dCBmcm9tIGVkaXRvciB0byBodG1sIHN0cmluZ1xuICAqIGFwcGx5IHRoZSBzdHJpbmcgdG8gcHJldmlldyBwYW5lIGFzIHJlYWN0IGVsZW1lbnRcbiAgKiBzaW5jZSB0aGUgb3V0cHV0IGZyb20gbWFya2VkIGhhcyBodG1sIHN0cmluZyxcbiAgKiBpdCBjYW4gZGlyZWN0bHkgYmUgYXBwbGllZCB0aHJvdWdoIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXG4gICovXG4gIGZ1bmN0aW9uIHByZXZpZXdNYXJrZG93bigpe1xuICAgIHZhciBodG1sVGV4dD1tYXJrZWQoZWRpdG9yLnZhbHVlKTsgLy9jb252ZXJ0IG1hcmtkb3duIHRvIGh0bWxcbiAgICB2YXIgcHJldmlldz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZpZXdcIik7IC8vZ2V0IHRoZSBwcmV2aWV3IHBhbmUgaGFuZGxlXG4gICAgLy9jcmVhdGUgYSByZWFjdCBlbGVtZW50XG4gICAgdmFyIGU9UmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSgnUmVhY3QnLFsnZGl2Jyx7ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDogaHRtbFRleHR9fV0pO1xuICAgIC8vcmVuZGVyIGh0bWxcbiAgICBSZWFjdERPTS5yZW5kZXIoZSxwcmV2aWV3KTtcbiAgfVxufSk7XG4iXSwiZmlsZSI6Im12Yy5qcyJ9
