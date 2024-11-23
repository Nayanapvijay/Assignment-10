document.getElementById('addtaskbtn').addEventListener('click', ()=>{
    const textinput = document.getElementById("taskinput")
    const task = textinput.value.trim();

    if(task==''){
        return alert("Enter a task")
    }

    const li=document.createElement('li')
    li.classList.add('list-group-item')

    const span = document.createElement('span')
    span.innerText=task;

    li.appendChild(span)

    const completed = document.createElement('i')
    completed.classList.add('bi','bi-check','fs-4','text-success')
    li.appendChild(completed)

    completed.addEventListener('click', ()=>{

        span.classList.toggle('completed')
    })
        const deleteicon=document.createElement('i')
        deleteicon.classList.add('bi', 'bi-trash' , 'fs-4', 'text-danger')
        li.appendChild(deleteicon)

        deleteicon.addEventListener('click',()=>{
            li.remove();
        })

   

    document.getElementById("taskList").appendChild(li)


textinput.value=''





})