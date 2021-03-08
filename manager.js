let data2;
let data1;
let data3;
let jo=[];
let ini=[];
let ev=[];
let date=[];
let i=0;
let event1=[];
function preload(){
  data3=loadJSON('https://spreadsheets.google.com/feeds/list/1_MXWO5Iz-fHN6Gp7uby4fpIbOgIK_bMpT9ZvfkktsHs/od6/public/values?alt=json')
  data2=loadJSON('https://spreadsheets.google.com/feeds/list/1ahCsxN9NJ5kCurS6WRCXBNzhjq_29_1yMMTOr0BnZrQ/od6/public/values?alt=json')
  
}
function setup() {
   data3.feed.entry.forEach((b)=>{
    jo.push([ b.gsx$你想參加何時的共食呢.$t]);
   })
  data2.feed.entry.forEach((b)=>{
    ev.push([ b.gsx$subject.$t]);
    date.push([ b.gsx$startdate.$t]);
   })
  let fj=jo.flat(Infinity);
  let fev=ev.flat(Infinity);
  let fdate=date.flat(Infinity);
  console.log(fj);
  a=fj.length;
  b=fev.length;
  console.log(fdate);
  for(i=0;i<b;i++){
   ini.push(date[i])
  }  
  for(j=0;j<b;j++){
    for(k=0;k<a;k++){
      if(fj[k].includes(fdate[j])==true){
       console.log(fj[k].includes(fdate[j]));
        ini[j].push(fdate[j]);
    }}
  
  for(l=0;l<b;l++){
    c=ini[l].length-1
    event1.push("<h3>活動:"+fev[l]+"目前參加人數:"+c+"人"+"</h3><br>");
  }
   document.getElementById("event").innerHTML = event1;
}
  
} 


