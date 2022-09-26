const buttonLed1ON =  document.querySelector('#led1on');
const buttonLed1OFF = document.querySelector('#led1off');
const buttonLed2ON  = document.querySelector('#led2on');
const buttonLed2OFF = document.querySelector('#led2off');
const bgled1        = document.querySelector('#bgled1');
const bgled2        = document.querySelector('#bgled2');
// console.log(buttonLed2OFF);
// console.log(bgled1);
// console.log(buttonLed1OFF);
// console.log(buttonLed1ON);
// console.log(buttonLed1ON.style);
buttonLed1ON.onclick = function(){
    const a = confirm('Xác nhận bật');
    if(a== true){
    buttonLed1ON.style.backgroundColor = '#1565c0';
    buttonLed1ON.style.color = 'white';
    buttonLed1OFF.style.backgroundColor = 'white';
    buttonLed1OFF.style.color = 'black';
    bgled1.style.backgroundColor = '#f7797d';
    }
}
buttonLed1OFF.onclick = function(){
    const a = confirm('Xác nhận tắt');
    if(a == true){
    buttonLed1OFF.style.backgroundColor = '#1565c0';
    buttonLed1OFF.style.color = 'white';
    buttonLed1ON.style.backgroundColor = 'white';
    buttonLed1ON.style.color = 'black';
    bgled1.style.backgroundColor = 'white';
    }
}
buttonLed2ON.onclick = function(){
    const a = confirm('Xác nhận bật');
    if(a == true){
        buttonLed2ON.style.backgroundColor = '#1565c0';
        buttonLed2ON.style.color = 'white';
        buttonLed2OFF.style.backgroundColor = 'white';
        buttonLed2OFF.style.color = 'black';
        bgled2.style.backgroundColor = 'red';
    }
}
buttonLed2OFF.onclick = function(){
    const a = confirm('Xác nhận tắt');
    if(a == true){
        buttonLed2OFF.style.backgroundColor = '#1565c0';
        buttonLed2OFF.style.color = 'white';
        buttonLed2ON.style.backgroundColor = 'white';
        buttonLed2ON.style.color = 'black';
        bgled2.style.backgroundColor = 'white';
    }
}
function timechange(){
// // thay đổi nhiệt độ
const nhietdo = document.getElementById('nhietdo');
const changeN1 = Math.floor(Math.floor(Math.random()*45));
// console.log(nhietdo.innerText);
const changeN  = nhietdo.innerText = `${changeN1} \xB0C` ;
if(changeN1 >= 33){
    document.getElementById('cotNhietdo').style.backgroundColor  = 'red';
}
else{
    document.getElementById('cotNhietdo').style.backgroundColor = 'gray';
}
// thay đổi độ ẩm
const doam = document.getElementById('doam');
const changeD1 = Math.floor(Math.floor(Math.random()*100));
const changeD = doam.innerText = changeD1 + '%';

// console.log(changeD.length);

if(changeD1 >= 40){
    document.getElementById('cotDoam').style.backgroundColor = 'green';
}
else{
    document.getElementById('cotDoam').style.backgroundColor = 'orange';
}
// thay đổi ánh sáng

const anhsang = document.getElementById('anhsang');
// console.log(anhsang);
const changeA  = Math.floor(Math.random()*188);
anhsang.innerText =`${changeA} lux`
if(changeA >= 50){
    document.getElementById('cotAnhsang').style.backgroundColor = 'blue';
}
else{
    document.getElementById('cotAnhsang').style.backgroundColor = 'purple';
}
}
setInterval(timechange,1000);