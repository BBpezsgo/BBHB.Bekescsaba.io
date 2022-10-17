fetch('./background-images.json')
.then(async (res) => {
    /** @type {string[]} */
    const bgs = await res.json()

    var images = []
    function preload() {
        for (var i = 0; i < arguments.length; i++) {
            images[i] = new Image()
            images[i].src = preload.arguments[i]
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