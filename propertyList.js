
let loge=document.querySelector("#lodging");
loge.addEventListener("click",logeFun);

function logeFun(){
    window.location.href="lodging.html"
}


let scrolUp= document.querySelector("#bot-1>button");
scrolUp.addEventListener("click",scrolFun);
function scrolFun(){
    window.scrollTo(0, 0);
}