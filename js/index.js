// Your code goes here

const button1 = document.querySelector(".btn")

button1.addEventListener('click', () => {
    button1.textContent = 'The button works';
    TweenMax.to(".animationBtn1", 1, {
        rotation:360,
    })
})

const button2 = document.querySelectorAll('.btn')[1];

button2.addEventListener('dblclick', () => {
    button2.textContent = 'Wow double click';
    TweenMax.to(".animationBtn2", 1, {
        rotation:360,
    })
})

window.addEventListener('keypress', () => {
    alert("I didn't say you could press a button")
})

window.addEventListener('load', () => {
    console.log("All resources finished loading!");
})

window.addEventListener('resize', () => {
    alert("viewport resized")
})

const destinationContent = document.querySelector('.content-destination p')
destinationContent.addEventListener('select', () => {
    alert("You selected the text")
}, false)

window.addEventListener('scroll', () => {
    console.log("you scrolled")
})

const img1 = document.querySelector('img');
img1.addEventListener('drag', () => {
    console.log("Stop dragging my header")
})

const navLink = document.querySelector('.nav-link');
navLink.addEventListener('mouseover', () => {
    console.log('hovered')
})

const textSelect = document.querySelector('.text-content p');

textSelect.addEventListener('wheel', () => {
    console.log("you selected the text using wheel listener");
})

const destinationDiv3 = document.querySelectorAll('.destination')[2];
const button3 = document.querySelectorAll(".btn")[2];

destinationDiv3.addEventListener('click', (event) => {
    console.log("Div clicked!");
})

button3.addEventListener('click', function(event) {
    event.stopPropagation();
    console.log("Button clicked!");
    TweenMax.to(".animationBtn3", 1, {
        rotation: 360,
    })
})

const aTags = document.querySelectorAll('.nav-link');

for(let i=0; i<=3; i++){
    aTags[i].addEventListener('click', (event) => {
        event.preventDefault()
    })
}