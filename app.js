let NewYear = "1 jan 2021"
let dayel = document.getElementById("days")
let hourel = document.getElementById("hour")
let minutesel = document.getElementById("minute")
let secondsel = document.getElementById("second")

function GettingDate() {
    let NewYearDate = new Date(NewYear)
    let currentDate = new Date()

    let difference = Math.floor(NewYearDate-currentDate)
    let days = Math.floor(difference/1000/3600/24)
    let hours = Math.floor(difference/1000/3600)%24
    let minute = Math.floor(difference/1000/60)% 60
    let second = Math.floor(difference/1000)%60
    dayel.innerHTML = days;
    hourel.innerHTML = hours;
    minutesel.innerHTML = minute;
    secondsel.innerHTML = second;
    
}
GettingDate()
setInterval(GettingDate,1000)