function preload(){
  img=loadImage("YYuntech_map_E.jpg");
 
  user1=window.localStorage.getItem('manager');
 if(user1==1){
     document.getElementById("mm").style.display='';
    }else{
     document.getElementById("mm").style.display='none';
  }
  console.log(window.localStorage.getItem('manager'));
}
function setup() {
 createCanvas(1840/4, 2039/4);
  
}

function draw() {
  image(img,0,0,1840/4,2039/4);
  
}
