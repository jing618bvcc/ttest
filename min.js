function preload(){
  img=loadImage("YYuntech_map_E.jpg");
  user2=window.localStorage.getItem('username');
  user1=window.localStorage.getItem('manager');
 if(user1==1){
     document.getElementById("mm").style.display='';
   }else{
     document.getElementById("mm").style.display='none';
  }
  if(user2==1){
         document.getElementById("login").style.display='none';
   }else{
     document.getElementById("login").style.display='show'; 
  }    
}
function setup() {  
}

function draw() {  
}
