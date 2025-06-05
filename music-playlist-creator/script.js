// JavaScript for Opening and Closing the Modal
const modal = document.getElementById("modal-overlay");
const span = document.getElementsByClassName("close")[0];

function openModal(playlist) {
   console.log("hi");
   document.getElementById('playlistTitle').innerText = playlist.name;
   document.getElementById('playlistImage').src = playlist.imageUrl;
   document.getElementById('creatorName').innerText = `Creator Name: ${playlist.creator}`;
   document.getElementById('songList').innerHTML = `<strong>List of Songs:</strong> ${playlist.songs.join(', ')}`;
   modal.style.display = "block";
}

span.onclick = function() {
   modal.style.display = "none";
}
window.onclick = function(event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}
