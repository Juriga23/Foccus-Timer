export default function Audios (){
    const ChuvaSound = new Audio('./Audios/Chuva.wav')
    const FlorestaSound = new Audio ('./Audios/Floresta.wav')
    const CafeteriaSound = new Audio ('./Audios/Cafeteria.wav')
    const LareiraSound = new Audio ('./Audios/Lareira.wav')
    const TimeFinish = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    const ChuvaAudio = {
        On() {
            ChuvaSound.loop = true
            ChuvaSound.play()
        },
        Off() {
            ChuvaSound.pause()
        }
    }

    const FlorestaAudio = {
        On() {
            FlorestaSound.loop = true
            FlorestaSound.play()
        },
        Off() {
            FlorestaSound.pause()
        }
    }

    const CafeteriaAudio = {
        On() {
            CafeteriaSound.loop = true
            CafeteriaSound.play()
        },
        Off() {
            CafeteriaSound.pause()
        }
    }

    const LareiraAudio = {
        On() {
            LareiraSound.loop = true
            LareiraSound.play()
        },
        Off() {
            LareiraSound.pause()
        }
    }

    const TimeFinishAudio = {
        On(){
            TimeFinishAudio.loop = false
            TimeFinish.play()

        }
    }

    return {
        ChuvaAudio,
        FlorestaAudio,
        CafeteriaAudio,
        LareiraAudio,
        TimeFinishAudio
    }
}
