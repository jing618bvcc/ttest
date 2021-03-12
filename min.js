function preload(){
  img=loadImage("YYuntech_map_E.jpg");
  user2=window.localStorage.getItem('username');
  user1=window.localStorage.getItem('manager');
 if(user1==1){
     document.getElementById("mm").style.display='';
   }else{
     document.getElementById("mm").style.display='none';
  }
  if(user2==null){
         document.getElementById("login").style.display='show';
   }else{
     document.getElementById("login").style.display='none'; 
  }    
}
function setup() {  
}

function draw() {  
}
