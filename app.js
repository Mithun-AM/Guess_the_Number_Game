let input1 = document.querySelector(".box1 input");
let input2 = document.querySelector(".box2 input");

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let scr = document.querySelector(".score");

let box2 = document.querySelector(".box2");
let box1 = document.querySelector(".box1");

box2.classList.add("hide");

let user;
let random;
let para1 = document.createElement('p');
let para2 = document.createElement('p');
let level = 0;

btn1.addEventListener("click", function () {
    btn1.classList.add("red");
    setTimeout(function(){
        btn1.classList.remove("red");
    },200);
    max = input1.value;
    console.log(max);
    box2.classList.remove("hide");
    box1.classList.add("hide");

    box2.prepend(para1);
    para1.innerText = `Guess the number between 1 and ${max}`;
    random = Math.floor(Math.random() * max) + 1;
    console.log(random);
});

btn2.addEventListener("click", function () {
    btn2.classList.add("red");
    setTimeout(function(){
        btn2.classList.remove("red");
    },200);
    level++;
    user = input2.value;
    console.log(user);
    if (user == "quit") {
        para1.innerText = "YOU QUIT";
    }else if (user == random){
        para1.innerText = `Right Guess.The number is ${random}`;
        box2.appendChild(para2);
        para2.innerText = `Number of guesses taken : ${level}`;
    }else if (user < random){
        // user = input2.value;
        para1.innerHTML = `<p style="font-size: 17px;">Guess was to small. Please try again between 1 and ${max}</p>`;
    }else {
        // user = input2.value;
        para1.innerHTML = `<p style="font-size: 17px;">Guess was to large. Please try again between 1 and ${max}</p>`;
    }
});

btn3.addEventListener("click",function(){
    box2.classList.add("hide");
    box1.classList.remove("hide");
    btn3.classList.add("red");
    input1.value="";
    input2.value="";
    setTimeout(function(){
        btn3.classList.remove("red");
    },200);
    level=0;
    box2.removeChild(para2);
})





