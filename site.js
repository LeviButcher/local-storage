const videoContainer = document.querySelector('#videos');

let videoCount = localStorage.getItem('videoCount') || 0;

function makeVideoHTML(video) {
    return `
      <div>
        <img src='${video['picture-url']}' alt='picture'/>
        <h4>${video['video-name']} <span>${video.rating}</span></h4>
      </div>
    `;
}

function populateVideoList(videos) {
  videoContainer.innerHTML = videos.map(video => makeVideoHTML(video)).join('');
}


document.onload = () => {
  let videos = getVideos();
  populateVideoList(videos);
}

document.onload();

function getVideos() {
  let videos = [];
  for(let i = 1; i <= videoCount; i++) {
    videos.push(JSON.parse(localStorage.getItem(`video-${i}`)));
  }
  return videos;
}
