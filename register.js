function run(){
  id=document.getElementById("id").value.length;
  password=document.getElementById("password").value.length;
  if(id>5){
        if(password>5){    alert("註冊成功");
                   
                           window.location.href='https://jing618bvcc.github.io/ttest/';
                            
        }else{             alert("密碼至少6個字元");
                           event.stopPropagation()}
  }else{alert("帳號至少6個字元");
         event.stopPropagation();}
}
function setup(){

}

/*
let exeurl = 'https://script.google.com/macros/s/AKfycbzjxE18xRZiZyzSmNwVAo8RVVN4Ecjn3XAFTxnHhlD_o6geRWPkj9K55But98f8ny04mA/exec';
let postData = {method:"write",id:"id", name:"name", mail_address:"mail_address"};

function setup() {
  //createCanvas(400, 400);
  postBtn = createButton("Post Request");
  postBtn.position(30, 60);
  postBtn.mouseClicked(postRequest);
}

function postRequest() {
  $.post(exeurl, postData,(data)=>{
    console.log(data)
  });
}


function draw() {
  background(220);
}
*/
