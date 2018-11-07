const form = document.querySelector('.video-form');
const annouce = document.querySelector('#annouce');

let videoCount = localStorage.getItem('videoCount') || 0;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let video = {};
    for(let i = 0; i < form.length; i++) {
      if(form[i].type == 'text'){
          console.log(form[i]);
          video[`${form[i].name}`] = form[i].value;
      }
      if(form[i].type == 'radio' && form[i].checked){
          console.log(form[i]);
          video[`${form[i].name}`] = form[i].value;
      }
    }
    console.log(videoCount);
    console.log(video);
    addVideo(video);
    annouce.innerText = `Successfully added Video: ${video['video-name']}`;
    form.reset();
});


function updateVideoCount() {
  videoCount++;
  localStorage.setItem('videoCount', videoCount);
}

function addVideo(video) {
  updateVideoCount();
  localStorage.setItem(`video-${videoCount}`, JSON.stringify(video));
}
