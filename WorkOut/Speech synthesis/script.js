const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

speechSynthesis.addEventListener('voiceschanged', loadVoices);
voicesDropdown.addEventListener('change', changeVoice);
options.forEach(option => option.addEventListener('change', setOptions));
stopButton.addEventListener('click', () => toggle(false));
speakButton.addEventListener('click', toggle);

function loadVoices() {
  voices = speechSynthesis.getVoices();

  voicesDropdown.innerHTML = voices
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}

function changeVoice() {
  msg.voice = voices.find(voice => voice.name === voicesDropdown.value);
  toggle();
}

function setOptions() {
  msg[this.name] = this.value;
  toggle();
}

function toggle(startOver = true) {
  console.log('startOver', startOver);
  speechSynthesis.cancel();
  if (startOver)
    speechSynthesis.speak(msg);
}
