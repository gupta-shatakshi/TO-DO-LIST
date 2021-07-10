var btn = document.getElementById("add");
btn.addEventListener('click',addingList);

function addingList(e){
    e.preventDefault();

    var newli = document.createElement("li");
    newli.className = "new-list-item";

    var newspan = document.createElement("span");

    newspan.style.width = "80%";
    newli.appendChild(newspan);

    var newbtn = document.createElement("button");
    newbtn.className = "fa fa-trash";
   
    newli.appendChild(newbtn);

    var text = document.createTextNode(document.getElementById("input-work").value);
    newspan.appendChild(text);

    if(document.getElementById("input-work").value != ""){
        document.getElementById("ul-list").appendChild(newli);
    }
    else{
        alert("You must enter something");
    }
    document.getElementById("input-work").value = "";
}

// deleting a list
document.querySelector('body').addEventListener('click', function(event) {
    if (event.target.className === 'fa fa-trash') {
        var li = event.target.parentElement.parentElement;
        li.removeChild(event.target.parentElement);
    }
  });

// clear all
var allList = document.getElementById("ul-list");

delAll.addEventListener('click', function(){
    while(allList.firstChild){
        allList.removeChild(allList.firstChild);
    }
    document.getElementById("input-work").value = "";
    document.getElementById("search").value = "";

})

//search box
var searchbox = document.getElementById("search");
searchbox.addEventListener('input', function(){
    
    var searchVal = document.getElementById("search").value;
    searchVal = searchVal.toLowerCase();
    var newliItemArr = document.getElementsByClassName("new-list-item");
    for(let i=0; i<newliItemArr.length; i++){
        
        if(newliItemArr[i].innerText.toLowerCase().includes(searchVal)){
            newliItemArr[i].style.display = "";
        }
        else{
            newliItemArr[i].style.display = "none";
        } 
}
});
