function init() {
    buffer = new Tone.Buffer("http://jerrylew.is/bach.mp3", function() {
        meme()
    })
}

function meme() {
    var player = new Tone.Player().toMaster()
    player.buffer = buffer
    player.start()
    setTimeout(meme, 9220)
}
