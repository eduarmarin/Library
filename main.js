let myLibrary = [];//read inputs and add to the new object and array the real code library!
    
function protobook(tittle, author, pages, read) {
this.tittle = tittle;
this.author = author;
this.pages = pages;
this.read = read;
}

function Book() {
  let tittle = document.getElementById('tittle').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('read').value; 
  
  if(tittle == '' || author == ''  || pages == ''  || read == ''){
    alert("Some datas are missed!");
    Book;
  }else{
    const newbook = new protobook(tittle, author, pages, read); 
    myLibrary.push(newbook);
    document.getElementById("lenarray").innerHTML = myLibrary.length;
    showData () ;
  }
  // deletebook ();
  console.log("after book");
  return (myLibrary.length);
}
function deletebook(){
  const nodes = document.getElementsByClassName("deleteb");//find the index from the book to delete end in the 'bind'
  console.log("nodes " + nodes.length);
  for (let i = 0; i < myLibrary.length; i++) {
    console.log("inside also")
    nodes[i].addEventListener('click', function (index) {
      console.log('index ' + index);
      myLibrary.splice( index, 1);
      console.log("Mylibrary new length " + myLibrary.length);
      showData ();
    }.bind(null, i)); 
  }
}
function showData () {
  text = '<ul class="outul">';  
  for (let i = 0; i < myLibrary.length; i++) {// this loop and the next inside put the information to display it
    text += '<li class="outli">' + '<ul class="insideul">';
    for (let x in myLibrary[i]) { 
      text += '<li class="inli">' + '<div class="cell">' + myLibrary[i][x] + '</div>' + "</li>";
    }
    text += '<li class="inli">' +'<button class="deleteb">Delete</button>' + "</li>" + "</ul>" + "</li>";//add delete button
  }
  text += "</ul>";
  document.getElementById("demoobject").innerHTML = text; // display the information
  document.getElementById("myForm").reset();//reset form imputs to get ready to the new book
  console.log("after showData");
  deletebook();
}



