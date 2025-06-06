// JavaScript for Opening and Closing the Modal
const modal = document.getElementById("modal-overlay");
const span = document.getElementsByClassName("close")[0];

span.addEventListener('click', closeModal);
function openModal(playlist) {
   document.getElementById('playlistTitle').innerText = playlist.playlist_name;
   document.getElementById('playlistImage').src = playlist.playlist_art;
   document.getElementById('creatorName').innerText = `Created by ${playlist.playlist_author}`;

   const songListElement = document.getElementById('songList');
   songListElement.innerHTML = '<h3>Songs:</h3>';

   const songsContainer = document.createElement('div');
   songsContainer.classList.add('songs-container');

   playlist.songs.forEach(song => {
      const songElement = document.createElement('div');
      songElement.classList.add('song');
      songElement.innerHTML = `
         <img src="${song.song_cover}" alt="${song.title} cover" width="50">
         <div class="song-info">
            <h4>${song.title}</h4>
            <p>${song.artist}</p>
            <p>${song.duration}</p>
         </div>
      `;
      songsContainer.appendChild(songElement);
   });

   songListElement.appendChild(songsContainer);

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
       <div class="like-container">
         <button class="like-button">
           <img src="./assets/img/heart.png" alt="Like" width="20">
         </button>
         <span class="like-count">${playlist.like}</span>
       </div>
   `;

   div.addEventListener('click', () => {
      openModal(playlist);
   });

   const likeButton = div.querySelector('.like-button');

   likeButton.addEventListener('click', (event) => {
      // Prevents the click on the like button from opening the modal
      event.stopPropagation();
      if (playlist.like === 0) {
         playlist.like++;
      } else {
         playlist.like--;
      }

      const likeCountElement = div.querySelector('.like-count');
      likeCountElement.textContent = playlist.like;

   });

   return div;
}
