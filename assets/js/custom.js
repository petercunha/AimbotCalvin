
// Unhide contact form on page load
const contactForm = document.querySelector('#overlay')
$(document).ready(function () {
    contactForm.style.visibility = "visible";
})



// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
    constructor(el) {
        this.el = el
        this.chars = '!<>-_\\/[]{}—=+*^?#________'
        this.update = this.update.bind(this)
    }
    setText(newText) {
        const oldText = this.el.innerText
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise((resolve) => this.resolve = resolve)
        this.queue = []
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || ''
            const to = newText[i] || ''
            const start = Math.floor(Math.random() * 40)
            const end = start + Math.floor(Math.random() * 40)
            this.queue.push({ from, to, start, end })
        }
        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
    }
    update() {
        let output = ''
        let complete = 0
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i]
            if (this.frame >= end) {
                complete++
                output += to
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar()
                    this.queue[i].char = char
                }
                output += `<span class="dud">${char}</span>`
            } else {
                output += from
            }
        }
        this.el.innerHTML = output
        if (complete === this.queue.length) {
            this.resolve()
        } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
    'Twitch streamer',
    'Social influencer',
    'TSM member',
    'McCree God',
    'Twitch streamer'
]

const phraseLogo = [
    '',
    'AIMBOT CALVIN',
]

const el = document.querySelector('.text')
const el2 = document.querySelector('.custom-heading')
const fx = new TextScramble(el)
const fx2 = new TextScramble(el2)

let counter = 0
const next = () => {
    fx.setText(phrases[counter]).then(() => {
        if (counter < phrases.length - 1) {
            setTimeout(next, 2500)
            counter = (counter + 1) % phrases.length
        }
    })
}

let counter2 = 0
const next2 = () => {
    fx2.setText(phraseLogo[counter2]).then(() => {
        if (counter2 < phraseLogo.length - 1) {
            setTimeout(next2, 500)
            counter2 = (counter2 + 1) % phraseLogo.length
        }
    })
}

next()
next2()