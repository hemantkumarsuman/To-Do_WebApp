const inputBox=document.getElementById("box");
const listContainer=document.querySelector('#list-container')

function addTask()
{
    if(inputBox.value==='')
    {
        alert("Bewkoof");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        //Now we need to add X mark at end of each task to delete the task from list
        let span = document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    inputBox.value='';
    
    saveData();
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'LI')
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
},false);

///We need to store the task in browser
function saveData()
{
    localStorage.setItem("data",listContainer.innerHTML);//Store all data in list-Container

}
function showTask()
{
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();

