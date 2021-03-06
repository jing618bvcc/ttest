/*
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/
function preload(){
    img=loadImage("YYuntech_map_E.jpg");
    var o = document.getElementById("mm");
    user1 = window.localStorage.getItem('manager');
    if(user1 ==1){
        o.style.display = '';
    }else{
        o.style.display = 'none';
    }
    console.log(window.localStorage.getItem('manager'));
}

function setup(){
    creatCanvas(1840/4,2039/4);
}

function draw(){
    image(img,0,0,1840/4,2039/4);
}
