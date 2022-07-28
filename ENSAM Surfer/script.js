
myelem = document.getElementById("dino");
let left= 0;
document.addEventListener("keydown",function(event){
    let key =event.keyCode;
    console.log(key)
    let dinotop= window.getComputedStyle(dino).getPropertyValue("left");

    
   if(key ==39)
   {
            left=left+4;
            myelem.style.left =`${left}px`;
            console.log(dinotop)
       
   }
    if(myelem.classList != "jump" && key == 38)
    {
        myelem.classList.add("jump") ;
    setTimeout(function(){
        myelem.classList.remove("jump") 
    },2000)
    }
    
})



