var hours = document.querySelectorAll(".hour p");



var time = moment();
console.log(time);
document.getElementById("currentDay").innerHTML = time.format('MMMM Do YYYY, h:mm:ss a');





if (localStorage["time1"]){
    var time1 = localStorage["time1"];
    document.getElementById("time1").value = time1; 
}
else{
    document.getElementById("time1").placeholder = "Description";
}
document.getElementById("butt1").addEventListener("click", function ()
    {
    var time1 = document.getElementById("time1").value; 
    localStorage.setItem("time1", time1); 
    alert("Event Saved")
} , false);

if (localStorage["time2"]){
    var time2 = localStorage["time2"];
    document.getElementById("time2").value = time2; 
}
else{
    document.getElementById("time2").placeholder = "Description";
}
document.getElementById("butt2").addEventListener("click", function ()
{
    var time2 = document.getElementById("time2").value; 
    localStorage.setItem("time2", time2); 
    alert("Event Saved")
} , false);

if (localStorage["time3"]){
    var time3 = localStorage["time3"];
    document.getElementById("time3").value = time3; 
}
else{
    document.getElementById("time3").placeholder = "Description";
}
document.getElementById("butt3").addEventListener("click", function ()
{
    var time3 = document.getElementById("time3").value; 
    localStorage.setItem("time3", time3); 
    alert("Event Saved")
} , false);

if (localStorage["time4"]){
    var time4 = localStorage["time4"];
    document.getElementById("time4").value = time4; 
}
else{
    document.getElementById("time4").placeholder = "Description";
}
document.getElementById("butt4").addEventListener("click", function ()
{
    var time4 = document.getElementById("time4").value; 
    localStorage.setItem("time4", time4); 
    alert("Event Saved")
} , false);
    
if (localStorage["time5"]){
    var time5 = localStorage["time5"];
    document.getElementById("time5").value = time5; 
}
else{
    document.getElementById("time5").placeholder = "Description";
}
document.getElementById("butt5").addEventListener("click", function ()
{
    var time5 = document.getElementById("time5").value; 
    localStorage.setItem("time5", time5); 
    alert("Event Saved")
} , false);
    
if (localStorage["time6"]){
    var time6 = localStorage["time6"];
    document.getElementById("time6").value = time6; 
}
else{
    document.getElementById("time6").placeholder = "Description";
}
document.getElementById("butt6").addEventListener("click", function ()
{
    var time6 = document.getElementById("time6").value; 
    localStorage.setItem("time6", time6); 
    alert("Event Saved")
} , false);

if (localStorage["time7"]){
    var time7 = localStorage["time7"];
    document.getElementById("time7").value = time7; 
}
else{
    document.getElementById("time7").placeholder = "Description";
}
document.getElementById("butt7").addEventListener("click", function ()
{
    var time7 = document.getElementById("time7").value; 
    localStorage.setItem("time7", time7); 
    alert("Event Saved")
} , false);
    
if (localStorage["time8"]){
    var time8 = localStorage["time8"];
    document.getElementById("time8").value = time8; 
}
else{
    document.getElementById("time8").placeholder = "Description";
}
document.getElementById("butt8").addEventListener("click", function ()
{
    var time8 = document.getElementById("time8").value; 
    localStorage.setItem("time8", time8); 
    alert("Event Saved")
} , false);
    
if (localStorage["time9"]){
    var time9 = localStorage["time9"];
    document.getElementById("time9").value = time9; 
}
else{
    document.getElementById("time9").placeholder = "Event Description";
}
document.getElementById("butt9").addEventListener("click", function ()
{
    var time9 = document.getElementById("time9").value; 
    localStorage.setItem("time9", time9); 
    alert("Event Saved")
} , false);

for (let index = 0; index < hours.length; index++) {
    const element = hours[index].textContent;
    var hourMoment = moment(element, "ha");
    console.log(moment(element, "ha"));
    hourMoment.isBefore(time)
    console.log(hourMoment.isBefore(time));

    if(hourMoment.isBefore(time)){
        hours[index].classList.add("past");
    }

    if(hourMoment.isSame(time)){
        hours[index].classList.add("present");
    }

    if(hourMoment.isAfter(time)){
        hours[index].classList.add("future");
    }
    
}



