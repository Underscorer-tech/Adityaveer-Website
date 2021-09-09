setInterval(displayclock,500)
function displayclock(){

var time = new Date();
var hrs = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds(); 



if (sec <= 9){

    sec = "0" +  sec
    
    } 

if (hrs > 12){

hrs=hrs-12
sec = sec + " PM"

} else if (hrs < 12){

    sec = sec + " AM"


}

if (hrs == 0){

hrs=12

}

if (hrs < 10){
    hrs='0' + hrs
}

if (min < 9){

min = "0" +  min 

} 





document.getElementById("clock").innerHTML =hrs +':'+min+':'+sec

}