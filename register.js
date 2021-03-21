let exeurl = 'https://script.google.com/macros/s/AKfycbzjxE18xRZiZyzSmNwVAo8RVVN4Ecjn3XAFTxnHhlD_o6geRWPkj9K55But98f8ny04mA/exec';

function preload(){
  GoogleJSON = loadJSON("https://spreadsheets.google.com/feeds/list/1LcYeY_pAKX4kyoUXDZjDA0-DFR5nDcpkuvbhy72JfnU/od6/public/values?alt=json");
}

let nameCheck;
var Check = 0;

function setup(){
  var a = GoogleJSON.feed.entry.length;
}

function run(){
  var a = GoogleJSON.feed.entry.length;
  nameCheck = document.getElementById("id").value;
  for(var i = 0; i < a; i++){
    var b = GoogleJSON.feed.entry[i].gsx$username.$t;
    var c = GoogleJSON.feed.entry[i].gsx$name.$t;
    if(nameCheck == b){
      Check=1;
    }
  }
  if(Check==0){
    
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
  else{
    alert("帳號重複");
  }
}
