function preload(){
  img=loadImage("YYuntech_map_E.jpg");
 
  user1=window.localStorage.getItem('manager');
 if(user1==1){
     document.getElementById("mm").style.display='';
     document.getElementById("login").style.display='none';
    }else{
     document.getElementById("mm").style.display='none';
     document.getElementById("login").style.display='show'; 
  }
  console.log(window.localStorage.getItem('manager'));
}
function setup() {  
}

function draw() {  
}
