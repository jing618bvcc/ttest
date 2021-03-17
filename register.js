let exeurl = 'https://script.google.com/macros/s/AKfycbzjxE18xRZiZyzSmNwVAo8RVVN4Ecjn3XAFTxnHhlD_o6geRWPkj9K55But98f8ny04mA/exec';
let getID = document.getElementById("id");
let postData = {method:"write", };
let check;

function run(){
  password=document.getElementById("password").value.length;
  
  if(password>=6){
    $.post(exeurl, postData,(data)=>{
      alert(data),check=1
    })
  }
  setTimeout("javascript:location.href='index.html'", 3000);
}

function setup(){

}

