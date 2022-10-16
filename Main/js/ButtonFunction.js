export default function ButtonControls ({
    Play,
    cron,
    Seconds,
    Minutes,
    SecondsDisplay,
    Sum,
    Less,
    Stop,
    UpdateDisplay
}) {
    
function countTime () {
cron = setTimeout(() => {
        Check()
        Seconds = SecondsDisplay.textContent
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
    Check()
    UpdateDisplay(Minutes, Seconds)
}
function Check() {
    if(Minutes <= 0) {
        Minutes = 0
        Seconds = 0
        StopFunction()
        return UpdateDisplay(Minutes, Seconds)
    }
}

function StopFunction () {
    clearInterval(cron)
}

    return {
        countTime,
        LessFunction,
        StopFunction,
        Check,
        SumFunction
    }
} 