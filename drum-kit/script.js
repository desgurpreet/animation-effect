
let containerEl = document.querySelector(".container");

// create array of source
const arraySource = ["crash", "kick", "snare", "tom"];

function createTag() {
  let i = 0;
  //apply loop on array element
  for (const audioSrc of arraySource) {
    //in loop
    let btnEl1 = document.createElement("button");
    btnEl1.classList.add("btn");
    btnEl1.innerHTML = audioSrc;
    btnEl1.style.backgroundImage = `url(image/${audioSrc}.png)`;
    containerEl.appendChild(btnEl1);
    // create audio
    let audioEl1 = document.createElement("audio");
    //set id
    audioEl1.id = `audio${i + 1}`;
    // add source
    audioEl1.src = `audio/${audioSrc}.mp3`;
    //add control
    audioEl1.controls = false;
    //append
    containerEl.appendChild(audioEl1);
    i++;
    btnEl1.addEventListener("click", () => {
      audioEl1.play();
    });
  }
}
createTag();
// const audioName=["audio1","audio2"]
// function playAudio(){
//   audioName.forEach((audioText)=>{
//     const audioEl = document.querySelector(`#${audioText}`);
//     audioEl.play();
//   })
// }
// const btnTexts = ["shape", "control"];
// function createBtnTag() {
//   btnTexts.forEach((btnText) => {

//     });
//   });
// }
// createBtnTag();

// let btnEl2 = document.createElement("button");
// btnEl2.classList.add("btn");
// btnEl2.innerHTML = "control";
// containerEl.appendChild(btnEl2);

// containerEl.appendChild(audioEl2);
// audioEl2.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3";
// audioEl2.controls = true;

// const audioBtn = document.querySelector(".btn");
// const audioVoice = document.querySelector(".audio1");
// const audioVoice1 = document.querySelector(".audio2");
// const audioVoice2 = document.querySelector(".audio3");
// audioBtn.addEventListener("click", function () {
//   audioVoice.play();
//   setTimeout(function () {
//     audioVoice1.play();
//   }, 5000);
//   setTimeout(function () {
//     audioVoice2.play();
//   }, 10000);
// });
//   containerEl.appendChild(audioEl1);
//   audioEl1.src =
//     "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
//   audioEl1.controls = true;
//   containerEl.appendChild(audioEl2);
//   audioEl2.src =
//     "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3";
//   audioEl2.controls = true;
