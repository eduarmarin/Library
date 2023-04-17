
let myLibrary = [];//read inputs and add to the new object and array the real code library!
    
function protobook(tittle, author, pages, read) {
this.tittle = tittle
this.author = author
this.pages = pages
this.read = read
}

function Book() {
    // the constructor...
  let tittle = document.getElementById('tittle').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('read').value; 

  const newbook = new protobook(tittle, author, pages, read); 
  myLibrary.push(newbook);
  document.getElementById("demoarray").innerHTML = myLibrary.length;
  fLen = myLibrary.length;

  for (let i = 0; i < fLen; i++) {

  }
  text = "<ul>";
  for (let x in newbook) { 
      text += "<li>" + "<div>" + newbook[x] + " " + "</div>" + "</li>";
  }
  text += "</ul>";
  document.getElementById("demoobject").innerHTML = text;
  document.getElementById("myForm").reset();
}// end function Book