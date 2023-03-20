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

const Audio = Audios()

const Buttons = ButtonControls({
    Play,
    Stop,
    Seconds,
    Minutes,
    SecondsDisplay,
    MinutesDisplay
})


Sum.onclick = () => Buttons.SumFunction()

Less.onclick = () => Buttons.LessFunction()

Play.onclick = () => Buttons.countTime()

Stop.onclick = () => Buttons.StopFunction()


Floresta.onclick = () => {
    const SoundOn = Floresta.classList.contains('On')
    
    if(SoundOn) {
        Floresta.classList.remove('On')
        Audio.FlorestaAudio.Off()
    }else{
        Floresta.classList.add('On')
        Audio.FlorestaAudio.On()
    }
}

Chuva.onclick = () => {
    const SoundOn = Chuva.classList.contains('On')
    
    if(SoundOn) {
        Chuva.classList.remove('On')
        Audio.ChuvaAudio.Off()
    }else{
        Chuva.classList.add('On')
        Audio.ChuvaAudio.On()
    }
}

Cafeteria.onclick = () => {
    const SoundOn = Cafeteria.classList.contains('On')
    
    if(SoundOn) {
        Cafeteria.classList.remove('On')
        Audio.CafeteriaAudio.Off()
    }else{
        Cafeteria.classList.add('On')
        Audio.CafeteriaAudio.On()
    }
}

Lareira.onclick = () => {
    const SoundOn = Lareira.classList.contains('On')
    
    if(SoundOn) {
        Lareira.classList.remove('On')
        Audio.LareiraAudio.Off()
    }else{
        Lareira.classList.add('On')
        Audio.LareiraAudio.On()
    }
}

