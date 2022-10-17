fetch('./jsons/background-images.json')
.then(async (res) => {
    const bgsRaw = await res.text()
    /** @type {string[]} */
    const bgs = JSON.parse(bgsRaw)

    var images = []
    /** @param {string[]} imageLinks */
    function preload(imageLinks) {
        for (var i = 0; i < imageLinks.length; i++) {
            images[i] = new Image()
            images[i].src = imageLinks[i]
        }
    }

    var bgI = 0
    const bgStyle = document.getElementById('bgStyle')
    setInterval(() => {
        bgI = Math.round(Math.random() * (bgs.length - 1))
        bgStyle.innerHTML = `body::before {background-image: url('${bgs[bgI]}');}`
    }, 5000)

    preload(bgs)
})