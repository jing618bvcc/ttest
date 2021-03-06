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
}

function draw() {  
}
