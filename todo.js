let inp=document.querySelector("input");
let btn=document.querySelector("button");
let prt=document.querySelector("ul");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    let delbtn=document.createElement("button");
   
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
  
    item.appendChild(delbtn);
    prt.appendChild(item);
    inp.value=" ";
    let delbtns=document.getElementsByClassName("delete");
    for( let btns of delbtns){
    btns.addEventListener("click",function(){
       let parent=btns.parentElement;
        parent.remove();
       
      }  );} 
});
