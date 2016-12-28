function getText(){
  return document.body.innerText;
}
function getHTML(){
  return document.body.outerHTML;
}
//debugger;
console.log(document.title);
console.log(getText());             //Gives you all the text on the page
console.log(getHTML());             //Gives you the whole HTML of the page
