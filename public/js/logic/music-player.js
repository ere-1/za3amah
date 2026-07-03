

let isPlaying = true;
const musicPlayer = () => {
    const audio = document.querySelector("audio");
    const progress = document.getElementById("progress");
    const playBtn = document.querySelector(".control button:nth-child(2) i");
    const information = document.getElementById("information");
    information.addEventListener("mousemove", (e) => {
      const rect = information.getBoundingClientRect();
    
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
    
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
    
      const rotateX = ((y - centerY) / centerY) * -20;
      const rotateY = ((x - centerX) / centerX) * -20;
    
      information.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;
    });
    information.addEventListener("mouseleave", () => {
      information.style.transform = "rotateX(0) rotateY(0)";
    });
    
    document
      .querySelector(".control button:nth-child(2)")
      .addEventListener("click", () => {
        if (!isPlaying) {
          audio.play();
          playBtn.classList.add("fa-pause");
          playBtn.classList.remove("fa-play");
          isPlaying = true;
        } else {
          audio.pause();
          playBtn.classList.add("fa-play");
          playBtn.classList.remove("fa-pause");
          isPlaying = false;
        }
      });
    
    audio.addEventListener("timeupdate", () => {
      const percent = (audio.currentTime / audio.duration) * 100;
      progress.value = percent || 0;
    });
    
    progress.addEventListener("input", () => {
      audio.currentTime = (progress.value / 100) * audio.duration;
    });
}

export default musicPlayer;





