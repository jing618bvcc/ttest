let exeurl = 'https://script.google.com/macros/s/AKfycbzjxE18xRZiZyzSmNwVAo8RVVN4Ecjn3XAFTxnHhlD_o6geRWPkj9K55But98f8ny04mA/exec';

function run(){
  password=document.getElementById("password").value.length;
  
  if(password>=6){
    $.post(exeurl,{
      "method":"write",
      "id":document.getElementById("id").value,
      "name":document.getElementById("name").value,
      "mail_address":document.getElementById("mail_address").value,
      "phone":document.getElementById("phone").value,
      "password":document.getElementById("password").value
    },
    function (data) {
      document.write(data+"<br>");
      document.write("3秒後跳轉......");
      setTimeout("javascript:location.href='index.html'", 3000);
    })
  }
  else{
    alert("密碼低於6位數，請補齊後再送出");
  }
}

function setup(){

}

