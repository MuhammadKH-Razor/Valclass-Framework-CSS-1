// pengkondisian

setTimeout(() => {
    document.querySelector('button.v-sosmed-wa').addEventListener('click', () => {
        window.open(document.querySelector('button.v-sosmed-wa').getAttribute('url'))
    })
    document.querySelector('button.v-sosmed-fb').addEventListener('click', () => {
        window.open(document.querySelector('button.v-sosmed-fb').getAttribute('url'))
    })
    document.querySelector('button.v-sosmed-ig').addEventListener('click', () => {
        window.open(document.querySelector('button.v-sosmed-ig').getAttribute('url'))
    })
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda