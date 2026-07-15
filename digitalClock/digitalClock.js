const clock = document.querySelector("#clock");

function time() {
    const presentTime = new Date();

    let hours = presentTime.getHours();
    let minutes = presentTime.getMinutes();
    let seconds = presentTime.getSeconds();
     const amPm = hours >= 12 ? 'PM' : 'AM';
     // Convert hours from 24-hour system to 12-hour system.
     hours = hours % 12;
     //Handle midnight (0 hours should display as 12 AM)
     hours = hours ? hours : 12;
    
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (hours < 10) {
      hours = '0' + hours;
    }
    // console.log(hours);
    // console.log(minutes);
    // console.log(seconds);
    // console.log(presentTime);
    clock.innerText = `${hours}:${minutes}:${seconds} ${amPm} `;
}
time()
setInterval(time,1000);