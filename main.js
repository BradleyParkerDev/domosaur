// Warmup Challanges
let messWithMe = document.querySelector('span.mess-with-me');
messWithMe.style.fontSize = "40px";

let pMessWithMe = document.querySelector('p.mess-with-me');
pMessWithMe.style.background = "green";

let hiddenImage = document.querySelector('img#hide-me');
hiddenImage.style.display = "none"; 

let firstImage = document.querySelector('img#triceratops');
firstImage.style.width = "324px";

// Event Listener Challenges
messWithMe.addEventListener('click', function(){
    messWithMe.style.color = "orange";
});

firstImage.addEventListener('click', function(){
    firstImage.style.border = "thick solid red";
});

let featheredDinosaur = document.querySelector('img#feathers');
featheredDinosaur.addEventListener('click', function(){
    featheredDinosaur.style.opacity = ".5";
});

let row = document.querySelector('section#row');
let button = document.querySelector('button#toggle');

button.addEventListener('click', function(){
    row.style.background = "purple";
});
