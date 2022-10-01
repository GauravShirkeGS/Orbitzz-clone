let sign= document.querySelector("#trips>div>div>button");
sign.addEventListener("click", signfun);
function signfun(){
    window.location.href="Sign_in.html"
}

let log_in= document.querySelector("#trips>div>div>div");
log_in.addEventListener("click",loginfun);
function loginfun(){
    window.location.href="creatAcc.html";
}

let back= document.querySelector("#back");
back.addEventListener("click", backfun);
function backfun(){
    window.location.href="web_101_project.html"
}


