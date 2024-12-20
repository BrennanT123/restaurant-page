import { onLoad } from "./onLoad";
import { home } from "./home";
import {menu } from "./menu";
import { about } from "./about";
import { reset } from "./reset";

let webpage = document.querySelector('#content');

let menuButton = document.querySelector('#menu');
let aboutButton = document.querySelector('#about');
let homeButton = document.querySelector('#home');

menuButton.addEventListener('click',()=> 
    {
        reset(webpage); 
        menu();
    }
)

aboutButton.addEventListener('click',()=> 
    {
        reset(webpage); 
        about();
    }
)

homeButton.addEventListener('click',()=> 
    {
        reset(webpage); 
        home();
    }
)





onLoad();