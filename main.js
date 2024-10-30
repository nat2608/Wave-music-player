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

        contenedor.appendChild(div)
    })
})