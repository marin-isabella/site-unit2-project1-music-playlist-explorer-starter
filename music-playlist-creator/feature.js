window.addEventListener('DOMContentLoaded', () => {
    // validation for if playlists is empty
    if (playlists.length === 0) {
        playlistContainer.innerHTML = `<h2>No Playlists Added</h2>`;
    } else {
        // randomly generate featured playlist on page refresh
        const featuredPlaylist = playlists[Math.floor(Math.random() * playlists.length)];

        document.getElementById('feature-image').src = featuredPlaylist.playlist_art;
        document.getElementById('feature-title').innerHTML = featuredPlaylist.playlist_name;

        const songsContainer = document.getElementById('feature-song-list');
        featuredPlaylist.songs.forEach(song => {
            const songElement = document.createElement('div');
            songElement.classList.add('song');
            songElement.innerHTML = `
               <img src="${song.song_cover}" alt="${song.title} cover" width="50">
               <div class="song-info">
                  <h4>${song.title}</h4>
                  <p>${song.artist}</p>
                  <p>${song.duration}</p>
               </div>`;
            songsContainer.appendChild(songElement);
         });

    }
});
