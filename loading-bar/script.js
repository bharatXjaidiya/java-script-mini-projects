let loader = document.querySelector(".loader");
let btn = document.querySelector("button");
let width = 0;
btn.addEventListener('click', (e) => {
    let r = Math.floor(Math.random() * 14) + 7;
    let des = document.querySelector(".des");
    des.innerHTML = `your content will be downloaded in <b>${r}</b> sec...`
    width = 0;
    let w = setInterval((e) => {
        ++width;
        console.log(width)
        loader.style.width = width + "%";
        if (width >= 100) {
            clearInterval(w);
        }
    }, r * 10)
})