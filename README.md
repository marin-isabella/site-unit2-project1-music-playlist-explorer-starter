## Unit Assignment: Music Playlist Explorer

Submitted by: **Isabella Marin**

Estimated time spent: **20** hours spent in total

Deployed Application (**required**): [Music Playlist Explorer Deployed Site](https://site-unit2-project1-music-playlist-vzwy.onrender.com)

### How to Run this Application
1. Fork the repository.
2. Clone the forked repository.
3. Step into the folder:
    ```
    site-unit2-project1-music-playlist-explorer-starter/music-playlist-creator
    ```
4. Open the index.html in a web browser.


### Application Features

#### CORE FEATURES

- [X] **Display Playlists**
  - [X] Dynamically render playlists on the homepage using JavaScript.
    - [X] Playlists should be shown in grid view.
    - [X] Playlist images should be reasonably sized (at least 6 playlists on your laptop when full screen; large enough that the playlist components detailed in the next feature are legible).
  - [X] Fetch data from a provided Javascript file and use it to create interactive playlist tiles.

- [X] **Playlist Components**
  - [X] Each tile should display the playlist's:
    - [X] Cover image
    - [X] Name
    - [X] Author
    - [X] Like count

- [X] **Playlist Details**
  - [X] Create a modal pop-up view that displays detailed information about a playlist when a user clicks on a playlist tile.
  - [X] The modal should show the playlist's:
    - [X] Cover image
    - [X] Name
    - [X] Author
    - [X] List of songs, including each song's:
      - [X] Title
      - [X] Artist
      - [X] Duration
  - [X] The modal itself should:
    - [X] Not occupy the entire screen.
    - [X] Have a shadow to show that it is a pop-up.
    - [X] Appear floating on the screen.
    - [X] The backdrop should appear darker or in a different shade.

- [X] **Like Playlists**
  - [X] Implement functionality to allow users to like playlists by clicking a heart icon on each playlist tile.
  - [X] When the heart icon is clicked:
    - [X] If previously unliked:
      - [X] The like count on the playlist tile should increase by 1.
      - [X] There should be visual feedback (such as the heart turning a different color) to show that the playlist has been liked by the user.
    - [X] If previously liked:
      - [X] The like count on the playlist tile should decrease by 1.
      - [X] There should be visual feedback (such as the heart turning a different color) to show that the playlist has been unliked by the user.
    - [X] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** In addition to showcasing the above features, for ease of grading, please film yourself liking and unliking:
      - [X] a playlist with a like count of 0
      - [X] a playlist with a non-zero like count

- [X] **Shuffle Songs**
  - [X] Enable users to shuffle the songs within a playlist using a shuffle button in the playlist's detail modal.
  - [X] When the shuffle button is clicked, the playlist's songs should display in a different order.
  - [X] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** In addition to showcasing the above features, for ease of grading, please show yourself shuffling the same playlist more than once.

- [X] **Featured Page**
  - [X] Application includes a dedicated page that randomly selects and displays a playlist, showing the playlist’s:
    - [X] Playlist Image
    - [X] Playlist Name
    - [X] List of songs, including each song's:
      - [X] Title
      - [X] Artist
      - [X] Duration
  - [X] When the page is refreshed or reloaded, a new random playlist is displayed
    - For example, navigating to the all playlists page and then back to the featured playlist page should result in a new random playlist being displayed
    - Note that because your algorithm will not be truly random, it is possible that the same playlist will feature twice in a row.
    - [X] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** In addition to showcasing the above features, for ease of grading, please show yourself refreshing the featured page more than once.
  - [X] Application includes a navigation bar or some other mechanism such that users can navigate to the page with all playlists from the featured page and vice versa without using the browser's back and forward buttons.

#### STRETCH FEATURES

- [ ] **Add New Playlists**
  - [ ] Allow users to create new playlists.
  - [ ] Using a form, users can input playlist:
    - [ ] Name
    - [ ] Author
    - [ ] Cover image
    - [ ] Add one or more songs to the playlist, specifying the song's:
      - [ ] Title
      - [ ] Artist
  - [ ] The resulting playlist should display in the grid view.
  - [ ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** For ease of grading, please show yourself adding at least two songs to the playlist.

- [ ] **Edit Existing Playlists**
  - [ ] Enable users to modify the details of existing playlists.
  - [ ] Add an edit button to each playlist tile.
  - [ ] Users can update the playlist:
    - [ ] Name
    - [ ] Author
    - [ ] Songs
  - [ ] The playlist grid view and playlist detail modal should update to display any changes (see Required Features, Criterion 1 & 2).
  - [ ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** For ease of grading, please show yourself:
    - [ ] Editing all of a playlist's features (name, creator, AND songs)
    - [ ] Editing some of a playlist's features (name, creator, OR songs)

- [X] **Delete Playlists**
  - [X] Add a delete button to each playlist tile within the grid view.
  - [X] When clicked, the playlist is removed from the playlist grid view.

- [ ] **Search Functionality**
  - [ ] Implement a search bar that allows users to filter playlists by:
    - [ ] Name
    - [ ] Author
  - [ ] The search bar should include:
    - [ ] Text input field
    - [ ] Submit/Search Button
    - [ ] Clear Button
  - [ ] Playlists matching the search query in the text input are displayed in a grid view when the user:
    - [ ] Presses the Enter Key
    - [ ] Clicks the Submit/Search Button
  - [ ] User can click the clear button. When clicked:
    - [ ] All text in the text input field is deleted
    - [ ] All playlists in the `data.json` file are displayed in a grid view
    - [ ] **Optional:** If the Add Playlist, Edit Existing Playlist, or Delete Playlist stretch features were implemented:
      - [ ] If users can add a playlist, added playlists should be included in search results.
      - [ ] If users can edit a playlist, search results should reflect the latest edits to each playlist.
      - [ ] If users can delete a playlist, deleted playlists should no longer be included in search results.
      - **Note:** You will not be graded on the implementation of this optional subfeature to keep your grade of this stretch feature independent of your implementation of other stretch features. However, we highly suggest including this in your implementation to model realistic behavior of real applications.

- [ ] **Sorting Options**
  - [ ] Implement a drop-down or button options that allow users to sort the playlist by:
    - [ ] Name (A-Z alphabetically)
    - [ ] Number of likes (descending order)
    - [ ] Date added (most recent to oldest, chronologically)
  - [ ] Selecting a sort option should result in a reordering based on the selected sort while maintaining a grid view.

### Walkthrough Video

<div>
    <a href="https://www.loom.com/share/bc88b275179f4cb08b6935d7f21087b4">
      <p>Music Playlist Explorer Project 🎶 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/bc88b275179f4cb08b6935d7f21087b4">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/bc88b275179f4cb08b6935d7f21087b4-a01e272f668d5608-full-play.gif">
    </a>
</div>

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

The topics discusssed in the labs prepared me very well to complete this assignment. All of the core features had been briefly gone over in one of the four labs throughout the week. For instance, the labs taught important concepts such as DOM manipulation, event listeners, and fetching data from a data.js file. Additionally, the labs provided a good understanding on how to use flexbox to create a responsive app. However, the stretch goals did contain some features that were not covered within the labs. Still, the stretch goals seemed feasible to complete given sufficient time to independently research how to implement some of the stretch goal features.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.

If I had more time, I would prioritize completing more of the stretch goals. I was able to implement the delete playlist functionality, however, I wish I had the time to additionally implement the add new playlists feature, edit exisiting playlists, the search functionality feature, and the sorting option feature. Furthermore, I also would have further refined the styling of the application, to include real song covers for the song images, and a different playlist image for each playlist.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

My project demo went well in that I was able to demonstrate all of the core features. Something my peer did that I would like to try next time is improving the UI of the project significantly. While my UI is visually appealing, it is still quite simple compared to other projects that were demoed. For the next time, I hope to accomplish more stretch goals to build a more technically challenging application, as well.

### Open-source libraries used

- No open-source libraries were used in this project.

### Shout out

I want to give a shout out to the CodePath instructors for their help throughout this project! Special thanks to Tabitha Hsia and Danny Burrow for their continued support in helping me with errors related to CSS!
