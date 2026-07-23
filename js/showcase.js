"use strict";

/*
==========================================
Lux Christi Promotional Showcase
==========================================
*/

const slides = document.querySelectorAll(".showcase-slide");
const dots = document.querySelectorAll(".dot");

const prev = document.getElementById("prevSlide");
const next = document.getElementById("nextSlide");

let current = 0;
let interval;

/* ------------------------- */

function showSlide(index){

    slides.forEach(slide=>slide.classList.remove("active"));

    dots.forEach(dot=>dot.classList.remove("active"));

    slides[index].classList.add("active");

    dots[index].classList.add("active");

}

/* ------------------------- */

function nextSlide(){

    current++;

    if(current>=slides.length){

        current=0;

    }

    showSlide(current);

}

/* ------------------------- */

function previousSlide(){

    current--;

    if(current<0){

        current=slides.length-1;

    }

    showSlide(current);

}

/* ------------------------- */

function autoPlay(){

    interval=setInterval(nextSlide,5000);

}

/* ------------------------- */

next.addEventListener("click",()=>{

    nextSlide();

});

prev.addEventListener("click",()=>{

    previousSlide();

});

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        current=index;

        showSlide(current);

    });

});

autoPlay();