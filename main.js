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
  //console.log(read);
  return(read);
}

function deletebook(){
  const nodes = document.getElementsByClassName("deleteb");//find the index from the book to delete end in the 'bind'
  console.log("nodes " + nodes);
  for (let i = 0; i < myLibrary.length; i++) {
    console.log("inside delete")
    nodes[i].addEventListener('click', function (index) {
      console.log('index ' + index);
      myLibrary.splice( index, 1);
      console.log("Mylibrary new length " + myLibrary.length);
      showData ();
    }.bind(null, i)); 
  }
}
function toggleyesnot () {
  var read2 = document.getElementsByClassName("readdiv"); 
  console.log("toggle list " + read2.length)
  for (let i = 0; i < read2.length ; i++) {  // myLibrary.length
    console.log("inside toggle")
    read2[i].addEventListener('click', function (event) {
      console.log("this this " + myLibrary[i]["read"]);
      if(myLibrary[i]["read"] == "yes"){
        myLibrary[i]["read"] = "Not" ;
      } else if (myLibrary[i]["read"] == "Not"){
        myLibrary[i]["read"] = "Yes" ;
      } else {
        myLibrary[i]["read"] = "Not" ;
      }
      showData ();
    }); //.bind(null, i)
  }
}
function showData () {
  text = '<div class="divcell">' + '<ul class="outul">';  
  for (let i = 0; i < myLibrary.length; i++) {// this loop and the next inside put the information to display it
    text += '<li class="outli">' + '<ul class="inul">';
    for (let x in myLibrary[i]) { 
      if (x == "tittle") {
        text += '<li class="inlitittle">' + '<div class="cell">' + myLibrary[i][x] + '</div>' + "</li>";  
      } else if (x == "author"){
        text += '<li class="inliauthor">' + '<div class="cell">' + myLibrary[i][x] + '</div>' + "</li>";  
      } else if (x == "read"){
        text += '<li class="inli">' + '<div class="cell readdiv" >' + myLibrary[i][x] + '</div>' + "</li>";  
      } else {
        text += '<li class="inli">' + '<div class="cell">' + myLibrary[i][x] + '</div>' + "</li>";
      }
    }
    text += '<li class="inli">' +'<button class="deleteb">Delete</button>' + "</li>" + "</ul>" + "</li>";//add delete button
  }
  text += '</ul>' + '</div>';
  document.getElementById("demoobject").innerHTML = text; // display the information
  document.getElementById("myForm").reset();//reset form imputs to get ready to the new book
  console.log("after showData");
  deletebook();
  toggleyesnot();
}

// onclick="toggleyesnot()"