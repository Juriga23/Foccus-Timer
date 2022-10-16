export default function Audios ({
    Floresta,
    Chuva,
    Cafeteria,
    Lareira,
    LareiraUse,
    ChuvaUse,
    FlorestaUse,
    CafeteriaUse
}){
    const ChuvaSound = new Audio('./Audios/Chuva.wav')
    const FlorestaSound = new Audio ('./Audios/Floresta.wav')
    const CafeteriaSound = new Audio ('./Audios/Cafeteria.wav')
    const LareiraSound = new Audio ('./Audios/Lareira.wav')

    const ChuvaAudio = {
        On() {
            ChuvaSound.loop = true
            ChuvaSound.play()
            Chuva.classList.add("Hide")
            ChuvaUse.classList.add("On")
        },
        Off() {
            ChuvaSound.pause()
            Chuva.classList.remove("Hide")
            ChuvaUse.classList.remove("On")
        }
    }

    const FlorestaAudio = {
        On() {
            FlorestaSound.loop = true
            FlorestaSound.play()
            Floresta.classList.add("Hide")
            FlorestaUse.classList.add("On")
        },
        Off() {
            FlorestaSound.pause()
            Floresta.classList.remove("Hide")
            FlorestaUse.classList.remove("On")
        }
    }

    const CafeteriaAudio = {
        On() {
            CafeteriaSound.loop = true
            CafeteriaSound.play()
            Cafeteria.classList.add("Hide")
            CafeteriaUse.classList.add("On")
        },
        Off() {
            CafeteriaSound.pause()
            Cafeteria.classList.remove("Hide")
            CafeteriaUse.classList.remove("On")
        }
    }

    const LareiraAudio = {
        On() {
            LareiraSound.loop = true
            LareiraSound.play()
            Lareira.classList.add("Hide")
            LareiraUse.classList.add("On")
        },
        Off() {
            LareiraSound.pause()
            Lareira.classList.remove("Hide")
            LareiraUse.classList.remove("On")
        }
    }

    return {
        ChuvaAudio,
        FlorestaAudio,
        CafeteriaAudio,
        LareiraAudio
    }
}
