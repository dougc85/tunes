const picker = new Picker(newList, medList, knowList, fullKnow);

const body = document.querySelector('body');

const tuneName = document.querySelector('.tune-name');
const tuneKey = document.querySelector('.key');

const nextButton = document.querySelector('.next-button');
const skipButton = document.querySelector('.skip-button');
const raiseButton = document.querySelector('.raise-button');
const lowerButton = document.querySelector('.lower-button');

function nextHandler() {

  const newList = picker.chooseList();
  const newTune = picker.pickTune();
  const newKey = picker.pickKey();

  if (newTune.length > 20) {
    tuneName.style.fontSize = "4rem";
  } else if (newTune.length > 9) {
    tuneName.style.fontSize = "4.6rem";
  } else if (newTune.length > 7) {
    tuneName.style.fontSize = "5.3rem";
  } else if (newTune.length > 5) {
    tuneName.style.fontSize = "6.5rem";
  } else {
    tuneName.style.fontSize = "7.5rem";
  }
  tuneName.textContent = newTune;
  tuneKey.textContent = newKey;

  switch (newList) {
    case 'new':
      body.style.backgroundColor = '#f1c40f';
      break;
    case 'med':
      body.style.backgroundColor = '#f4a322';
      break;
    case 'know':
      body.style.backgroundColor = '#2ecc71';
      break;
  }
}

function skipHandler() {

  let currentTune = tuneName.textContent;

  picker.restoreTune();
  nextHandler();

  if (currentTune == tuneName.textContent) {
    skipHandler();
  }
}

nextButton.addEventListener('click', nextHandler);
skipButton.addEventListener('click', skipHandler);

nextHandler();