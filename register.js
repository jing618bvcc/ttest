function run(){
  id=document.getElementById("id").value.length;
  password=document.getElementById("password").value.length;
  if(id>5){
        if(password>5){    alert("註冊成功");
                           window.location.href='https://jing618bvcc.github.io/ttest/';
                           return true; 
        }else{             alert("密碼至少6個字元");
                           return false;
             }
  }else{alert("帳號至少6個字元");
         return false;}
}
function setup(){

}

