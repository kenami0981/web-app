document.addEventListener("DOMContentLoaded", () => {
  c1=1
  const sky = document.getElementById("sky");
  const cloudNum = 25;

  function createClouds() {
    const cloud = document.createElement("img");
    cloud.src = "images/clouds.png";
    cloud.classList.add("cloud");

    const randomSize = Math.random() * 400 + 800;
    cloud.style.width = randomSize + "px";

    const randomTop = Math.random() * window.innerHeight;
    cloud.style.top = randomTop + "px";

    const duration = Math.random() * 30 + 60;  // 40-70s
    if (c1==1) {
      delay = 1;
      c1++;
    } 
    else {
      delay = Math.random() * 90;           // 0-90s
    }
    

    cloud.style.animation = `moveLeft ${duration}s linear ${delay}s infinite`;

    sky.appendChild(cloud);
  }
  
  for (let i = 0; i < cloudNum; i++) {
    createClouds();
  }
});