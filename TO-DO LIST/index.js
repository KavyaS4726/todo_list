

            let submit = document.getElementById('submit');
            let task = document.getElementById('task');
            let todo=document.getElementById('todolist');
            let completed_list=document.getElementById('completed_list')

            let list = new Array();

            submit.addEventListener('click',(event)=>{
                 if(task.value != ' '){
                list.push(task.value);
                todo.innerHTML += '<li id="'+(list.length-1)+ '"><button onclick="complete('+(list.length-1)+')" >'+task.value+'</button></li>';
                task.value=" ";
                 }
               
            });

        function complete(id){
            completed_list.innerHTML += '<li>'+list[id]+'</li>';
            document.getElementById(id).style.display="none";

        }
            
        