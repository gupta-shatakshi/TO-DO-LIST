var btn = document.getElementById("add");
btn.addEventListener('click',addingList);

function addingList(e){
    e.preventDefault();

    var newli = document.createElement("li");
    newli.className = "new-list-item";

    var newspan = document.createElement("span");

    // newspan.id = "span-id";
    newspan.style.width = "80%";
    newli.appendChild(newspan);

    var newbtn = document.createElement("button");
    newbtn.className = "fa fa-trash";
    
    // newbtn.appendChild(document.createTextNode(""));
   
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

document.querySelector('body').addEventListener('click', function(event) {
    if (event.target.className.toLowerCase() === 'fa fa-trash') {
        var li = event.target.parentElement.parentElement;
        li.removeChild(event.target.parentElement);
    }
  });


let allList = document.getElementById("ul-list");

delAll.addEventListener('click', function(){
    while(allList.firstChild){
        allList.removeChild(allList.firstChild);
    }
})