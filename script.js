window.onload = function(){
    const HOURHAND = document.querySelector("#hour");
    const MINUTEHAND = document.querySelector("#minute");
    const SECONDHAND = document.querySelector("#second");

    let date = new Date();
    var hour = date.getHours() - 12
    var minute = date.getMinutes();
    var seconds = date.getSeconds();

    let degHour = (360 / 12) * hour;
    let degMinute = (360 / 30) * minute / 2;
    let degSecond = (360 / 30) * seconds / 2;
    let startHour = 360 + (degMinute * 0.5)

    SECONDHAND.style.transform = "rotate(" + degSecond + "deg)"
    MINUTEHAND.style.transform = "rotate(" + degMinute + "deg)"

    degMinute < 1 
    ? HOURHAND.style.transform = "rotate(" + startHour + "deg)"
    : HOURHAND.style.transform = "rotate(" + degHour + "deg)"
    

         setInterval(function(){
            degSecond+=6;
            

            SECONDHAND.style.transform = "rotate(" + degSecond+ "deg)"

            if (degSecond % 360 == 0 ) {
                degMinute+=6;
                console.log(degHour)
                MINUTEHAND.style.transform = "rotate(" + degMinute + "deg)"
                degHour+=0.5;
                HOURHAND.style.transform = "rotate(" + degHour + "deg)"

                
            }
        },1000)

}


