////////////////////////////////////////////////
// Warmup Challanges
////////////////////////////////////////////////


let messWithMe = document.querySelector('span.mess-with-me');
messWithMe.style.fontSize = "40px";

let pMessWithMe = document.querySelector('p.mess-with-me');
pMessWithMe.style.background = "green";

let hiddenImage = document.querySelector('img#hide-me');
hiddenImage.style.display = "none"; 

let firstImage = document.querySelector('img#triceratops');
firstImage.style.width = "324px";





////////////////////////////////////////////////
// Event Listener Challenges
////////////////////////////////////////////////


// Text changes to orange when clicked
messWithMe.addEventListener('click', function(){
    messWithMe.style.color = "orange";
});

// Red border appears around first dinosaur image when clicked
firstImage.addEventListener('click', function(){
    firstImage.style.border = "thick solid red";
});
let featheredDinosaur = document.querySelector('img#feathers');
featheredDinosaur.addEventListener('click', function(){
    featheredDinosaur.style.opacity = ".5";
});

// Button click changes row color 
let row = document.querySelector('section#row');
let button = document.querySelector('button#toggle');
button.addEventListener('click', function(){
    if(row.style.background === ""){
        row.style.background = "purple";
    }
    else if(row.style.background !== ""){
        row.style.background = "";
    }
});

// resizing biggify image with 'mouseover'
let biggify = document.querySelector('img#biggify');
biggify.addEventListener('mouseover', function(){
    biggify.style.width = "200px";
});
biggify.addEventListener('mouseout', function(){
    biggify.style.width = "162px";
});