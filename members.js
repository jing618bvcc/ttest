let valnm,valem,valpw;
let data1;
let nm=[],em=[],pw=[],mn=[],unm=[];
var i=0;
var o=document.getElementById("sign");
function preload(){
  btn= document.getElementById("submit");
data1=loadJSON('https://spreadsheets.google.com/feeds/list/1LcYeY_pAKX4kyoUXDZjDA0-DFR5nDcpkuvbhy72JfnU/od6/public/values?alt=json')
  var o=document.getElementById("sign");
  user1=window.localStorage.getItem('email');
  if(user1==null){
    o.style.display='show';
  }
  else{
    o.style.display='none';
  }
  }
function out(){
  var o=document.getElementById("sign");
  localStorage.removeItem('email');
  localStorage.removeItem('manager');
  localStorage.removeItem('password');
  localStorage.removeItem('username');
  localStorage.removeItem('name');
  o.style.display='show';
  window.location.href='index.html';
}
 function setup(){
    data1.feed.entry.forEach((b)=>{
    unm.push([b.gsx$username.$t]);
    nm.push([b.gsx$name.$t]);
    em.push([b.gsx$email.$t]);
    pw.push([b.gsx$password.$t]);
    mn.push([b.gsx$管理員積分.$t]);
   })
  let fn = nm.flat(Infinity);
  let fun = unm.flat(Infinity);
  let fe = em.flat(Infinity);
  let fp = pw.flat(Infinity);
  let fm = mn.flat(Infinity);
  btn.addEventListener('click',()=>{
    valunm= document.getElementById("username").value;
    //valem= document.getElementById("email").value;
    valpw= document.getElementById("password").value;
    a=fn.indexOf(valunm) ;
    //b=fe.indexOf(valem);
    c=fp.indexOf(valpw); 
    if(a>-1){
      if (a==c){    
        console.log("輸入成功");
        window.localStorage.setItem('manager',fm[a]);
        window.localStorage.setItem('email',fe[a]);
        window.localStorage.setItem('name',fn[a]);
        window.localStorage.setItem('password',valpw);
        window.localStorage.setItem('username',valunm);
        console.log(window.localStorage.getItem('manager'));
        alert('登入成功');
        window.location.href='index.html';
      }
      else{
        alert('密碼錯誤');
      }
    }
   if(a==-1){
    alert('輸入錯誤');
   }
})}
  

function draw(){}
