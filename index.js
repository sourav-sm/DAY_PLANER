const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-cointer")

function addtask(){
    if(inputbox.value===''){
        alert("You Must Enter Something!");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML=".\u00d7";
        li.appendChild(span);
    }
    inputbox.value=" ";
    savedata();
}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }else if(e.target.tagName==="SPAN"){
            e.target.parentElement.remove();
            savedata()
    }
},false);

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showtask(){
    listcontainer.innerHTML=localStorage.getItem("data");
    // const savedData = localStorage.getItem("data");
    // if (savedData) {
    //     listcontainer.innerHTML = savedData;
    // }
    // const listItems = listcontainer.getElementsByTagName("li");
    // for (let i = 0; i < listItems.length; i++) {
    //     listItems[i].addEventListener("click", function () {
    //         this.classList.toggle("checked");
    //         savedata();
    //     });
    // }

    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    document.getElementById('date').innerHTML = date;
}
showtask();

//const q=document.getElementById("p");
  