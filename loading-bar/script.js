let loader = document.querySelector(".loader");
let btn = document.querySelector("button");
let width = 0;
btn.addEventListener('click',(e)=>{
    btn.removeEventListener('click');
    width = 0;
    let w = setInterval((e)=>{
        ++width;
        console.log(width)
        loader.style.width = width + "%";

        if(width > 100){
            clearInterval(w);
        }
    },10)
})