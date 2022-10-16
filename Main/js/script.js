import Audios from './Audio.js'
import ButtonControls from './ButtonFunction.js'
let MinutesDisplay = document.querySelector('.Minute')
let SecondsDisplay = document.querySelector('.Second')
let Play = document.querySelector('.Play')
let Stop = document.querySelector('.Stop')
let Sum = document.querySelector('.Sum')
let Less = document.querySelector('.Less')
let Floresta = document.querySelector('.Floresta')
let Chuva = document.querySelector('.Chuva')
let Cafeteria = document.querySelector('.Cafeteria')
let Lareira = document.querySelector('.Lareira')
let FlorestaUse = document.querySelector('.FlorestaUse')
let ChuvaUse = document.querySelector('.ChuvaUse')
let CafeteriaUse = document.querySelector('.CafeteriaUse')
let LareiraUse = document.querySelector('.LareiraUse')
let Minutes = 0
let Seconds = 0
let cron;

const Audio = Audios({
    Floresta,
    Chuva,
    Cafeteria,
    Lareira,
    LareiraUse,
    ChuvaUse,
    FlorestaUse,
    CafeteriaUse
})

const Buttons = ButtonControls({
    Play,
    cron,
    Seconds,
    Minutes,
    SecondsDisplay,
    Sum,
    Less,
    Stop,
    UpdateDisplay
})

UpdateDisplay(Minutes, Seconds)
function UpdateDisplay (Minutes, Seconds) {
    MinutesDisplay.textContent = String(Minutes).padStart(2, '0')
    SecondsDisplay.textContent = String(Seconds).padStart(2, '0')
}


Sum.onclick = () => Buttons.SumFunction()

Less.onclick = () => Buttons.LessFunction()

Play.onclick = () => Buttons.countTime()

Stop.onclick = () => Buttons.StopFunction()

Floresta.onclick = () => Audio.FlorestaAudio.On()

Chuva.onclick = () => Audio.ChuvaAudio.On()

Cafeteria.onclick = () => Audio.CafeteriaAudio.On()

Lareira.onclick = () => Audio.LareiraAudio.On()

LareiraUse.onclick = () => Audio.LareiraAudio.Off()

CafeteriaUse.onclick = () => Audio.CafeteriaAudio.Off()

ChuvaUse.onclick = () => Audio.ChuvaAudio.Off()

FlorestaUse.onclick = () => Audio.FlorestaAudio.Off()

