let body = document.querySelector('body')

let work = document.getElementById('work')
let rest = document.getElementById('break')

let timeWork = 25
let timeBreak = 5

let isBreak = false

let seconds = "00"

let black = "100"
let purple = "100"

window.onload = () => {
    document.getElementById('minutes').innerHTML = timeWork;
    document.getElementById('seconds').innerHTML = seconds;
}

function start() {
    document.getElementById('start').style.visibility = "collapse";

    seconds = 59

    let minutesWork = timeWork - 1;
    let breakMinutes = timeBreak - 1;

    let time = () => {
        document.getElementById('minutes').innerHTML = minutesWork;
        document.getElementById('seconds').innerHTML = seconds;

        seconds -= 1;
        if (seconds === 0){
            seconds = 59
            minutesWork -= 1
            if(minutesWork === -1) {
                if(isBreak == false) {
                    isBreak = true
                    minutesWork = breakMinutes

                    black = 0
                    purple = 0

                    work.classList.add('later')
                    work.classList.remove('now')
                    rest.classList.add('now')
                    rest.classList.remove('later')
                } else {
                    isBreak = false
                    minutesWork = timeWork - 1

                    black = 100
                    purple = 100

                    work.classList.add('now')
                    work.classList.remove('later')
                    rest.classList.add('later')
                    rest.classList.remove('now')
                }
            }
        }
        if (isBreak == false){
            black -= (100 / 737);
        } else{
            purple += (100 / 147);
        }
        body.style.background = `linear-gradient(45deg, rgba(4, 28, 50, 1) ${black}%, rgba(95, 30, 148, 1) ${purple}%)`
    }
    setInterval(time, 1000) 
}