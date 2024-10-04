const URL = 'https://v2.jokeapi.dev/joke/Dark?type=single';

let clickbtn = document.getElementById("clickbt");
let img = document.getElementById("image");
let hed = document.getElementById("text");
let container = document.getElementsByClassName("container");


 async function getjock(){
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    text.innerText = data.joke;
}

clickbtn.addEventListener("click",getjock);
