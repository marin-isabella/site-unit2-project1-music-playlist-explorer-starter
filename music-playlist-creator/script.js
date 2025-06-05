// JavaScript for Opening and Closing the Modal
const modal = document.getElementById("modal-overlay");
const span = document.getElementsByClassName("close")[0];

span.addEventListener('click', closeModal);

function openModal(playlist) {
   document.getElementById('playlistTitle').innerText = playlist.playlist_name;
   document.getElementById('playlistImage').src = playlist.playlist_art;
   document.getElementById('creatorName').innerText = `Creator Name: ${playlist.playlist_author}`;
   document.getElementById('songList').innerHTML = `<strong>List of Songs:</strong> ${playlist.songs.join(', ')}`;
   modal.style.display = "block";
}

function closeModal() {
   modal.style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
   loadPlaylists();
})

window.addEventListener('click', (e) => {
   if (e.target == modal) {
      closeModal();
   }
});

// JavaScript for Creating Playlists
function loadPlaylists() {
   const playlistContainer = document.querySelector(".playlist-cards");
   // validation for if playlists is empty
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
   div.classList.add('card');
   div.innerHTML = `
      <img src=${playlist.playlist_art} alt="song image" width="200">
       <h3>${playlist.playlist_name}</h3>
       <p>${playlist.playlist_author}</p>
       <button class="like-button">Likes: ${playlist.like}</button>
   `;

   div.addEventListener('click', () => {
      openModal(playlist);
   });

   return div;
}
