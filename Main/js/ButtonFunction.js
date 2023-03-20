import Audios from './Audio.js'
const Audio = Audios()

export default function ButtonControls ({
    Play,
    Stop,
    Seconds,
    Minutes,
    SecondsDisplay,
    MinutesDisplay
}) {

let cron;

function UpdateDisplay (Minutes, Seconds) {
    MinutesDisplay.textContent = String(Minutes).padStart(2, '0')
    SecondsDisplay.textContent = String(Seconds).padStart(2, '0')
}
    
function countTime () {

    Play.classList.add("On")
    Play.setAttribute('disabled', true)
    Stop.classList.remove("On")

    cron = setTimeout(() => {
        Seconds = SecondsDisplay.textContent

        if(Minutes == 0 && Seconds == 0) {
            Audio.TimeFinishAudio.On()
            return clearInterval(cron)
        }

        if(Seconds == 0) {
            Seconds = 60
            Minutes--
        }

        UpdateDisplay(Minutes, Seconds - 1)

        countTime()
    }, 1000);
}

function SumFunction () {
    Minutes += 5
    Seconds = 0
    UpdateDisplay(Minutes, Seconds)
}

function LessFunction() {
    Minutes -= 5
    Seconds = 0

    if(Minutes < 0) {
        Minutes = 0
        Seconds = 0
        Play.classList.remove('On')
        Play.removeAttribute('disabled')
        clearInterval(cron)
    }
    
    UpdateDisplay(Minutes, Seconds)
}

function Check() {
    if(Minutes < 0) {
        Minutes = 0
        Seconds = 0
        

        UpdateDisplay(Minutes, Seconds)
        clearInterval(cron)
    }
}

function StopFunction(){
    Stop.classList.add("On")

    Play.classList.remove("On")
    Play.removeAttribute('disabled')

    clearInterval(cron)
}

    return {
        countTime,
        LessFunction,
        Check,
        SumFunction,
        StopFunction,
        UpdateDisplay
    }
} 