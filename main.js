let contenedor = document.getElementById('track-list')

axios.get('https://api.institutoalfa.org/api/songs').then((res) => {
    console.log(res.data.songs)

    res.data.songs.map((song) => {
        let div = document.createElement('div')

        div.setAttribute('class', 'cancion')

        div.innerHTML =
        `<img src="https://api.institutoalfa.org/api/songs/image/${song.image.filename}">
        <div>
            <h3>${song.title}</h3>
            <p>${song.author}</p>
        </div>`


        div.addEventListener("click", () => {
           document.getElementById("current-song-image").setAttribute("src", `https://api.institutoalfa.org/api/songs/image/${song.image.filename}`)
           document.getElementById("current-song-title").innerHTML = song.title
           document.getElementById("current-song-artista").innerHTML = song.author

           document.getElementById("audio").setAttribute("src", `https://api.institutoalfa.org/api/songs/audio/${song.audio.filename}`)
        })

        contenedor.appendChild(div)
    })
})