document.addEventListener('DOMContentLoaded', () => {
   loadPlaylists();
})

function loadPlaylists() {
   console.log("playlists loaded!");
   const playlistContainer = document.querySelector(".playlist-cards");
   console.log("hi");
   playlists.forEach((playlist) => {
      console.log("meow");
      console.log(playlist);
      const element = createPlaylistsElement(playlist);
      console.log(element);
      playlistContainer.appendChild(element);
   })
}

function createPlaylistsElement(playlist) {
   console.log("createPlaylistsElement called!")
   const div = document.createElement('div');
   div.className = 'card';
   div.innerHTML = `
      <img src=${playlist.playlist_art} alt="song image" width="200">
       <h3>${playlist.playlist_name}</h3>
       <p>${playlist.playlist_author}</p>
       <button>Likes: ${playlist.like}</button>
   `;
   return div;
}

// JavaScript for Opening and Closing the Modal
// const modal = document.getElementById("modal-overlay");
// const span = document.getElementsByClassName("close")[0];

// function openModal(playlist) {
//    console.log("hi");
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
