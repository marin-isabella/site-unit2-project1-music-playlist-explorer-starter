// JavaScript for Opening and Closing the Modal
const modal = document.getElementById("modal-overlay");
const span = document.getElementsByClassName("close")[0];

span.addEventListener('click', closeModal);

let openPlaylist = null;
function openModal(playlist) {
   openPlaylist = playlist;
   document.getElementById('playlist-title').innerText = playlist.playlist_name;
   document.getElementById('playlist-image').src = playlist.playlist_art;
   document.getElementById('creator-name').innerText = `Created by ${playlist.playlist_author}`;

   const songListElement = document.getElementById('song-list');
   songListElement.innerHTML = '<h3>Songs:</h3>';

   const songsContainer = document.createElement('div');
   songsContainer.classList.add('songs-container');
   makeSongsList(playlist.songs);

   modal.style.display = "block";
}

function closeModal() {
   modal.style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
   loadPlaylists();
})

function makeSongsList(songs) {
   const songListElement = document.getElementById('song-list');
   songListElement.innerHTML = '<h3>Songs:</h3>';

   const songsContainer = document.createElement('div');
   songsContainer.classList.add('songs-container');

   songs.forEach(song => {
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

   songListElement.appendChild(songsContainer);
}

function shuffleSongs(arr) {
   // Copy of array
   const shuffledArr = [...arr];

   // Fisher-Yates shuffle algorithm
   // Reference: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
   for (let i = shuffledArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = shuffledArr[i];
      shuffledArr[i] = shuffledArr[j];
      shuffledArr[j] = temp;
   }

   return shuffledArr;
}

const shuffleSongsButton = document.getElementById('shuffle-button');
shuffleSongsButton.addEventListener('click', () => {
   if (openPlaylist) {
      const shuffledSongs = shuffleSongs(openPlaylist.songs);
      makeSongsList(shuffledSongs);
   }
});

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
   } else {
      playlists.forEach((playlist) => {
         const element = createPlaylistsElement(playlist);
         playlistContainer.appendChild(element);
      })
   }

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
           <img src="./assets/img/heart.png" alt="Like" width=20px>
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

      const likeImage = likeButton.querySelector('img');
      // toggles heart image color between red and blue (red for not liked, blue for liked)
      likeImage.src = playlist.like === 0 ? './assets/img/heart.png' : './assets/img/blue_heart.png';

   });

   return div;
}
