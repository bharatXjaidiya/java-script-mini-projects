let body = document.body;
const motivationalQuotes = [
    "Discipline beats motivation every single day.",
    "Consistency is what turns average into excellence.",
    "Your future is created by what you do today, not tomorrow.",
    "Small progress is still progress.",
    "Don't wait for opportunity. Create it.",
    "Hard work compounds just like money.",
    "Dream big, start small, act daily.",
    "Focus on skills, money will follow.",
    "You are one decision away from a different life.",
    "Failure is data, not defeat.",
    "The grind you avoid today becomes the regret of tomorrow.",
    "Comfort is the enemy of growth.",
    "Action kills fear.",
    "Learn to suffer now so you can live easy later.",
    "No excuses. Just results.",
    "Build in silence, let success make noise.",
    "Your mindset decides your ceiling.",
    "Stay hungry. Stay dangerous.",
    "Execution matters more than ideas."
];
let img = document.querySelector("img");

body.addEventListener("click", (e) => {
    let q = Math.floor(Math.random() * 20);
    let x = Math.floor(Math.random() * 100);
    let y = Math.floor(Math.random() * 100);
    let r = Math.floor(Math.random() * (120)) + (-60);
    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);
    let h3 = document.createElement("h3");
    h3.innerHTML = motivationalQuotes[q];
    h3.style.position = "absolute";
    h3.style.left = x + "%";
    h3.style.top = y + "%";
    h3.style.rotate = r + "deg";
    h3.style.color = `rgb(${c1}, ${c2}, ${c3})`;
    body.append(h3);
}) 

body.addEventListener("mousemove",(e)=>{
    let x = e.x;
    let y = e.y;
    img.style.left = x + "px";
    img.style.top = y + "px";
})