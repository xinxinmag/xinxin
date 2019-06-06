window.addEventListener('load',function () {
    let title = document.getElementsByTagName('ul')
    let neirong = document.querySelector('.neirong')
    let li1 = title[0].querySelectorAll('li')
    let pre = 0;
    let type = 'all';

    let forms = document.forms[0];
    let textbtn = forms.elements[0];
    let submitbtn = forms.elements[1];
/*    let str = localStorage.getItem('todolist');
    console.log(str);
    if(!str){
        saveData();
}
    todolist = JSON.parse(str);

    function saveData(){

    }*/
    submitbtn.onclick = function (e) {
        e.preventDefault();
        let obj = createObj();
        todolist.push(obj);
        render(filterData(type));
    }
    function createObj() {
        let id = todolist[todolist.length-1].id+1;
        let content = textbtn.value;
        let ctime = new Date().toLocaleDateString();
        let status =false;
        return {id,content,ctime,status}
    }



     /*for(let i=0;i<li1.length;i++){
         li1[i].onclick = function () {
             li1[pre].classList.remove('hot')
             li1[i].classList.add('hot');
             pre = i;
         }
     }*/
    /* let checkboxs = document.querySelectorAll('input[type=checkbox]');

        checkboxs.forEach(ele=>{
            ele.onclick = function () {
                let id = this.parentNode.id;
                let arr = todolist.filter(eles=>eles,id==id);
                todolist.splice(index,1);
                render( )
            }
        })*/
     let todolist = [
            {
                id:1, content:'端午要请假',ctime:'2019/6/4',status:true
            },
            {
               id:2, content:'端午不想请假',ctime:'2019/6/4',status:false
            },
            {
               id:3, content:'端午还是得请假',ctime:'2019/6/4',status:false
            },
            {
               id:4, content:'端午就请假吧',ctime:'2019/6/4',status:true
            }
     ]

    /*for(let i=0;i<li1.length;i++){
        li1[i].onclick = function () {
            li1[pre].classList.remove('hot')
            li1[i].classList.add('hot');
            pre = i;
            let type = this.getAttribute('type');
            let arr=[];
            render(filterData(type))
        }
    }*/

    li1.forEach(function (ele ,index) {
         ele.onclick = function () {
             li1[pre].classList.remove('hot');
             this.classList.add('hot');
             pre = index;
             type  = this.getAttribute('type');
             render(filterData(type));
         }
     });
     li1[0].onclick();

    neirong.onclick = function(e){
         let target = e.target;
         let id = target.parentNode.id;

        if(target.nodeName === 'INPUT'){
           let ele = todolist.filter(ele=>ele.id == id)[0];
           ele.status = target.checked;
        }else if(target.nodeName === 'DEL'){
            let index = todolist.findIndex(ele=>ele.id == id);

            todolist.splice(index,1)

        }
        render(filterData(type));
    }
    function filterData(type) {
        let arr = [ ];
        switch(type){
            case 'all':
                arr = todolist;
                break;
            case 'yes':
                arr = todolist.filter(function (ele) {return ele.status});
                break;
            case 'no':
                arr = todolist.filter(function (ele) {return !ele.status});
                break;

        }
        return arr;
     }

    function render(arr) {
        let html = '';
        arr.forEach(function (elem,index){
            if(elem.status == true){
                html += `
            <li id="${elem.id}"> 
            <input type="checkbox" checked>
            <span>${elem.content}</span>
            <del>X</del>
            <time>${elem.ctime}</time>
            </li>
            `;
            }else {
                html += `
            <li id="${elem.id}">
            <span>${elem.content}</span>
            <input type="checkbox">
            <del>X</del>
            <time>${elem.ctime}</time>
            </li>
            `;
            }

        })
            neirong.innerHTML = html;
    }



   /* let checkboxs = document.querySelectorAll('input[type=checkbox]');

    checkboxs.forEach(ele=>{
        ele.onclick = function () {
            let id = this.parentNode.id;
            let arr = todolist.filter(eles=>eles,id==id);
            todolist.splice(index,1);
            render( )
        }
    })*/




        let str = localStorage.getItem('todolist');
        if(!str){
         saveData();
 }
     todolist = JSON.parse(str);

     function saveData(){

     }


});