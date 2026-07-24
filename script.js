// Birthday Website JavaScript ❤️


// Surprise Button

let button = document.getElementById("surpriseBtn");

button.addEventListener("click", function(){

    alert("Happy Birthday My Love Lisa ❤️\n\nForever Yours, Juman ❤️");

    createHearts();

});




// Gift Box Animation

let gift = document.getElementById("giftBox");

let giftMessage = document.getElementById("giftMessage");


gift.addEventListener("click", function(){

    gift.innerHTML="💖";

    giftMessage.innerHTML=
    "You are my biggest happiness ❤️";

    createHearts();

});





// Floating Hearts Generator

function createHearts(){


for(let i=0;i<20;i++){


let heart=document.createElement("div");


heart.innerHTML="❤️";


heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="0";

heart.style.fontSize=
(20+Math.random()*30)+"px";


heart.style.animation=
"heartFly 5s linear";


document.body.appendChild(heart);



setTimeout(function(){

heart.remove();

},5000);



}



}



// Heart Animation CSS Add

let style=document.createElement("style");


style.innerHTML=`

@keyframes heartFly{

from{

transform:translateY(0);

opacity:1;

}


to{

transform:translateY(-100vh);

opacity:0;

}


}

`;


document.head.appendChild(style);







// Birthday Countdown

let birthday = new Date("July 29, 2026 00:00:00").getTime();



let timer=setInterval(function(){


let now=new Date().getTime();


let distance=birthday-now;



let days=Math.floor(distance/(1000*60*60*24));

let hours=Math.floor(
(distance%(1000*60*60*24))/(1000*60*60)
);


let minutes=Math.floor(
(distance%(1000*60*60))/(1000*60)
);


let seconds=Math.floor(
(distance%(1000*60))/1000
);



document.getElementById("timer").innerHTML=

days+" Days "+
hours+" Hours "+
minutes+" Minutes "+
seconds+" Seconds";



},1000);






// Music Start After Click

let music=document.getElementById("music");


document.body.addEventListener("click",function(){

music.play().catch(()=>{});


},{once:true}); // Fireworks Effect 🎆

document.addEventListener("click", function(e){

    for(let i = 0; i < 20; i++){

        let fire = document.createElement("div");

        fire.innerHTML = "✨";

        fire.style.position = "fixed";
        fire.style.left = e.clientX + "px";
        fire.style.top = e.clientY + "px";
        fire.style.fontSize = "25px";

        let x = (Math.random()-0.5)*200;
        let y = (Math.random()-0.5)*200;

        fire.style.transform =
        `translate(${x}px, ${y}px)`;

        fire.style.transition="1s";

        document.body.appendChild(fire);


        setTimeout(()=>{

            fire.style.opacity="0";

        },100);



        setTimeout(()=>{

            fire.remove();

        },1200);


    }

});// Password Opening System 🔐❤️

function openWebsite(){

    let password =
    document.getElementById("passwordInput").value;


    if(password === "JUMANLISA"){

        document.getElementById("lockScreen")
        .style.opacity="0";


        setTimeout(function(){

            document.getElementById("lockScreen")
            .style.display="none";


        },1000);


    }


    else{

        document.getElementById("error")
        .innerHTML=
        "Wrong Password ❌ Try Again ❤️";

    }

}/* Rose Falling Effect 🌹 */

function createRose(){

    let rose = document.createElement("div");

    rose.className="rose";

    rose.innerHTML="🌹";


    rose.style.left =
    Math.random()*100 + "vw";


    rose.style.animationDuration =
    (3 + Math.random()*5) + "s";


    document.body.appendChild(rose);


    setTimeout(function(){

        rose.remove();

    },8000);


}


// Create roses continuously

setInterval(createRose,800);





/* Typewriter Love Letter 💌 */

let text = 
"Every moment with you is a beautiful memory. Your smile makes my world brighter. I am so lucky to have you in my life. ❤️";


let index = 0;


function typeWriter(){

    let element =
    document.getElementById("loveText");


    if(index < text.length){

        element.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,50);

    }

}


// Start after website loads

window.addEventListener("load",function(){

    setTimeout(typeWriter,2000);

});