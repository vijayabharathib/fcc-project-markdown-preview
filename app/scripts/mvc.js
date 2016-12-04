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
