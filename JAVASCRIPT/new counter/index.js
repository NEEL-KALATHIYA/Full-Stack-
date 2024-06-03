const sm = 10;
let time = sm * 60;

const cd = document.querySelector("#rc");
console.log(cd);

let ucd = () => {
  let min = Math.floor(time / 60);
  let sec = time % 60;

  sec = sec < 10 ? "0" + sec : sec;

  cd.innerHTML = `${min}: ${sec}`;
  time--;
};
setInterval(ucd, 1000);




let i=0   
setInterval(()=>{document.querySelector("#rc1").innerHTML=i++},10)
