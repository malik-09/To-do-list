let Tasks = [];
let DTasks = [];
const inputEl = document.getElementById("input-el");
const addBtn = document.getElementById("add-el");
const TodoEL = document.getElementById("todo-el");
const doneEL = document.getElementById("done-el");
const deleteBtn = document.getElementById("btn");


let taskSfromlocalstorage = JSON.parse(localStorage.getItem("Tasks"));
let taskSfromlocalstorage2 = JSON.parse(localStorage.getItem("done"));

if (taskSfromlocalstorage) {
  Tasks = taskSfromlocalstorage;
  renderTasks(Tasks);
}
if (taskSfromlocalstorage2) {
  DTasks = taskSfromlocalstorage2;
  renderDone(DTasks);
}
//console.log(Tasks[0]);

function renderTasks(tasks) {
  let sumTasks = "";
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] != null) {
      sumTasks += `
        <div  class='Texts'>
        
            <p id='line${i}'>${tasks[i]}</p>
          <img  class='bin done hand' id='taskCheck${i}' id_translate2='${tasks[i]}' onclick="doneTasks(${i})" src='done.png'  alt='' />
          <img  class='bin hand ' src='bin.png'  id='product${i}' id_translate='${tasks[i]}' onclick="deleted(${i})" alt='' />
        </div>`;
      // Task.id=`'${i}'`
      // var Task=document.getElementById(`'${i}'`)
    }
  }
  TodoEL.innerHTML = sumTasks;
}


function deleted(i) {
  let delete_product = document.getElementById("product" + i);
  console.log(delete_product);
  let value = delete_product.getAttribute("id_translate");
  console.log(value);
  let index;

  for (let i = 0; i < Tasks.length; i++) {
    if (Tasks[i] === value) {
      index = i;
    }
  }

  console.log(index);

  let swap;
  for (let i = index; i < Tasks.length - 1; i++) {
    swap = Tasks[i];
    Tasks[i] = Tasks[i + 1];
    Tasks[i + 1] = swap;
  }

  Tasks.pop();

  for (let i = 0; i < Tasks.length; i++) {
    console.log(Tasks[i]);
  }

  localStorage.setItem("Tasks", JSON.stringify(Tasks));

  renderTasks(Tasks);
}

addBtn.addEventListener("click", function () {
  if(inputEl.value===""){
    alert("the action can not be done please add somethings")
  }
  else{
  Tasks.push(inputEl.value);
  inputEl.value = "";

  localStorage.setItem("Tasks", JSON.stringify(Tasks));

  renderTasks(Tasks);
}});

function doneTasks(i) {
  let doneList = document.getElementById("taskCheck" + i);
  DTasks.push(doneList.getAttribute("id_translate2"));
  localStorage.setItem("done", JSON.stringify(DTasks));
  renderDone(DTasks);
}
function renderDone(DTasks2) {
  let donesum = "";
  for (let i = 0; i < DTasks2.length; i++) {
    donesum += `
        <div  class='Texts'>
        
            <p id='line${i}'>${DTasks2[i]}</p>
          
           <img  class='bin1 ' src='9069 [Converted]-01.png'  id='product${i}' id_translate='${i}}'  alt='' />
        </div>`;
  }
  doneEL.innerHTML= donesum;

}



deleteBtn.addEventListener("click", function () {
  localStorage.removeItem("done")
  doneEL.innerHTML=""
});
