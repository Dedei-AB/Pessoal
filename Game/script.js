// const cursorGlow = document.querySelector(".cursor-glow");

// document.addEventListener("mousemove", (e) => {
//   cursorGlow.style.left = `${e.clientX}px`;
//   cursorGlow.style.top = `${e.clientY}px`;
// });

const buttonNo = document.querySelector(".no");
const buttonYes = document.querySelector(".yes");
const song = document.getElementById("song");
const title = document.querySelector("h1");

function moveButton() {
  setTimeout(() => {
    buttonNo.style.position = "absolute";
    const heightWindow = window.innerHeight - buttonNo.clientHeight;
    const widthWindow = window.innerWidth - buttonNo.clientWidth;

    let yPosition = Math.random() * heightWindow;
    let xPosition = Math.random() * widthWindow;

    buttonNo.style.left = `${xPosition}px`;
    buttonNo.style.top = `${yPosition}px`;
  }, 1000);
}

function clickNoButton() {
  //toca o som de tristeza e vê se da erro ao tocar
  song.currentTime = 0;
  song.src = "./choro_de_bebe2.mp3";
  song.play().catch((error) => console.error("Erro ao tocar o som:", error));
  //muda o texto do título e a cor do fundo
  title.innerHTML = "Chato :(";
  //tira os botões
  buttonNo.style.display = "none";
  buttonYes.style.display = "none";
}

function buttonEba() {
  //toca o som de alegria e vê se da erro ao tocar
  song.currentTime = 0;
  song.src = "./happy-happy-happy-song.mp3";
  song.play().catch((error) => console.error("Erro ao tocar o som:", error));
  //muda o texto do título e a cor do fundo
  title.innerHTML = "Ebaaa!!!";
  title.style.color = "rgb(71, 66, 88)";
  document.querySelector("body").style.backgroundColor = "rgb(255,255,255)";
  //tira os botões
  buttonNo.style.display = "none";
  buttonYes.style.display = "none";
}

buttonYes.addEventListener("click", buttonEba);
buttonNo.addEventListener("click", clickNoButton);
buttonNo.addEventListener("mouseover", moveButton);
