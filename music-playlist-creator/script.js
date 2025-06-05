document.addEventListener('DOMContentLoaded', () => {
   loadPlaylists();
})

function loadPlaylists() {
   const playlistContainer = document.querySelector(".playlist-cards");
   // input validation for if playlists is empty
   if (playlists.length === 0) {
      playlistContainer.innerHTML = `<h2>No Playlists Added</h2>`;
   }
   playlists.forEach((playlist) => {

      const element = createPlaylistsElement(playlist);
      playlistContainer.appendChild(element);
   })
}

function createPlaylistsElement(playlist) {
   const div = document.createElement('div');
   div.className = 'card';
   div.innerHTML = `
      <img src=${playlist.playlist_art} alt="song image" width="200">
       <h3>${playlist.playlist_name}</h3>
       <p>${playlist.playlist_author}</p>
       <button class="like-button">Likes: ${playlist.like}</button>
   `;
   return div;
}

// JavaScript for Opening and Closing the Modal
// const modal = document.getElementById("modal-overlay");
// const span = document.getElementsByClassName("close")[0];

// function openModal(playlist) {
//    document.getElementById('playlistTitle').innerText = playlist.name;
//    document.getElementById('playlistImage').src = playlist.imageUrl;
//    document.getElementById('creatorName').innerText = `Creator Name: ${playlist.creator}`;
//    document.getElementById('songList').innerHTML = `<strong>List of Songs:</strong> ${playlist.songs.join(', ')}`;
//    modal.style.display = "block";
// }

// span.onclick = function() {
//    modal.style.display = "none";
// }
// window.onclick = function(event) {
//    if (event.target == modal) {
//       modal.style.display = "none";
//    }
// }
