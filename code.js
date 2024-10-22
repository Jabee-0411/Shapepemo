let menu = document.querySelector(".nav > ul")
let flag = true

function HAM(){
    if(flag){
        menu.classList.add("active")
        flag = false
    }else{
        menu.classList.remove("active")
        flag = true
    }

}