
let property= document.querySelector("#nav>div:nth-child(2)>button:nth-child(2)");
property.addEventListener("click",propFun);

function propFun(){
    window.location.href="propertyList.html";
    
}

let espanol= document.querySelector("#nav>div:nth-child(2)>button:nth-child(1)");
espanol.addEventListener("click",espanolFun);

function espanolFun(){
    window.location.href="Espanol.html";
    
}
let trips=document.querySelector("#nav>div:nth-child(2)>button:nth-child(4)");
trips.addEventListener("click", tripsfun);
function tripsfun(){
    window.location.href="trips.html"
}

