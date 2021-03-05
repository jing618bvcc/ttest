let valnm,valem,valpw;
let data1;
let nm=[],em=[],pw=[],mn=[];
var i=0;
var o=document.getElementById("sign");
function preload(){
  btn= document.getElementById("submit");
data1=loadJSON('https://spreadsheets.google.com/feeds/list/18t2EPSZbO8YNYMfURJBci1M8qSj2X_DmkgE8m49Y6sw/od6/public/values?alt=json')
  }
function out(){
  var o=document.getElementById("sign");
  localStorage.removeItem('email');
  o.style.display='show';
}
function show(obj, id){
  var o=document.getElementById("sign");
  user1=window.localStorage.getItem('email');
  if(user1==null){
    o.style.display='show';
  }
  else{
    o.style.display='none';
  }
}
 function setup(){
    data1.feed.entry.forEach((b)=>{
    nm.push([b.gsx$username帳號.$t]);
    em.push([b.gsx$email.$t]);
    pw.push([b.gsx$password.$t]);
    mn.push([b.gsx$管理員積分.$t]);
   })
  let fn = nm.flat(Infinity);
  let fe = em.flat(Infinity);
  let fp = pw.flat(Infinity);
  let fm = mn.flat(Infinity);
  btn.addEventListener('click',()=>{
    valnm= document.getElementById("username").value;
    //valem= document.getElementById("email").value;
    valpw= document.getElementById("password").value;
    a=fn.indexOf(valnm) ;
    //b=fe.indexOf(valem);
    c=fp.indexOf(valpw); 
    if(a>-1){
      if (a==c){    
        console.log("輸入成功");
        window.localStorage.setItem('manager',fm[a]);
        window.localStorage.setItem('email',fe[a]);
        window.localStorage.setItem('password',valpw);
        window.localStorage.setItem('username',valnm);
      }
      else{
        console.log("密碼錯誤");
      }
    }
   if(a==-1){
     console.log("輸入錯誤");
   }
})}
  

function draw(){}
