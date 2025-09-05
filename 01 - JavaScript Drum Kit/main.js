window.addEventListener('keydown', (event) => {
  const code = event.code;
  const [key, audio] = document.querySelectorAll(`[data-key="${code}"]`);
  if (!key) return;
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
});

function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
