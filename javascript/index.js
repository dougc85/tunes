//Global Vars
const picker = new Picker(newList, medList, knowList, fullKnow);
let currentList = '';
let currentTune = '';

let targetList = '';

//DOM variables
const body = document.querySelector('body');

const tuneName = document.querySelector('.tune-name');
const tuneKey = document.querySelector('.key');

const nextButton = document.querySelector('.next-button');
const skipButton = document.querySelector('.skip-button');
const raiseButton = document.querySelector('.raise-button');
const lowerButton = document.querySelector('.lower-button');

const editsBackground = document.querySelector('.edits-background');
const edits = document.querySelector('.edits');
const seeEditsButton = document.querySelector('.see-edits-button');
const editsClose = document.querySelector('.edits-close');
const editsList = document.querySelector('.edits-list');

const levelChangePopup = document.querySelector('.level-change-popup');
const popupBackground = document.querySelector('.popup-background');
const warning = document.querySelector('.warning');
const cancelButton = document.querySelector('.cancel');
const confirmButton = document.querySelector('.confirm');
const okayButton = document.querySelector('.okay');
let clearButton = document.querySelector('.clear');

function nextHandler() {

  const newList = picker.chooseList();
  const newTune = picker.pickTune();
  const newKey = picker.pickKey();

  currentList = newList;
  currentTune = newTune;

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
      body.style.backgroundColor = 'hsl(26, 100%, 67%)';
      break;
    case 'med':
      body.style.backgroundColor = 'hsl(54, 98%, 66%)';
      break;
    case 'know':
      body.style.backgroundColor = 'hsl(145, 63%, 50%)';
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

function seeEditsHandler() {
  editsBackground.style.height = '80vh';
  editsBackground.style.opacity = '1';

  edits.classList.add('edits-onclick');
}

function editsCloseHandler() {
  edits.classList.remove('edits-onclick');
  setTimeout(() => {
    editsBackground.style.opacity = '0';
  }, 150);
  setTimeout(() => {
    editsBackground.style.height = '0vh';
  }, 400);
}

function raiseHandler() {
  levelChangePopup.classList.add('popped-popup');
  popupBackground.style.height = ('105vh');
  popupBackground.style.opacity = ('1');


  if (currentList == 'new') {
    levelChangePopup.style.backgroundColor = "hsl(54, 98%, 66%)";
    warning.textContent = 'Are you sure you want to move this song up to the "medium" level?'
    targetList = 'med';

  } else if (currentList == 'med') {
    levelChangePopup.style.backgroundColor = "hsl(145, 63%, 50%)";
    warning.textContent = 'Are you sure you want to move this song up to the "know" level?'
    targetList = 'know';

  } else if (currentList == 'know') {
    levelChangePopup.style.backgroundColor = "#eee";

    okayButton.style.display = 'inline-block';
    confirmButton.style.display = 'none';
    cancelButton.style.display = 'none';

    warning.textContent = 'Already at highest level'
  }
}

function lowerHandler() {
  levelChangePopup.classList.add('popped-popup');
  popupBackground.style.height = ('105vh');
  popupBackground.style.opacity = ('1');

  if (currentList == 'new') {
    levelChangePopup.style.backgroundColor = "#eee";
    warning.textContent = 'Already at lowest level';

    okayButton.style.display = 'inline-block';
    confirmButton.style.display = 'none';
    cancelButton.style.display = 'none';

  } else if (currentList == 'med') {
    levelChangePopup.style.backgroundColor = "hsl(26, 100%, 67%)";
    warning.textContent = 'Are you sure you want to move this song down to lowest level?';
    targetList = 'new';


  } else if (currentList == 'know') {
    levelChangePopup.style.backgroundColor = "hsl(26, 100%, 67%)";
    warning.textContent = 'Are you sure you want to move this song down to lowest level?';
    targetList = 'new';
  }
}

function removePopup() {
  levelChangePopup.classList.remove('popped-popup');
  setTimeout(() => {
    popupBackground.style.opacity = '0';
  }, 150);
  setTimeout(() => {
    popupBackground.style.height = '0vh';
  }, 400);
}

function cancelHandler() {

  removePopup();

}

function okayHandler() {

  removePopup();

  setTimeout(() => {
    okayButton.style.display = 'none';
    confirmButton.style.display = 'inline-block';
    cancelButton.style.display = 'inline-block';
  }, 400);
}

function confirmHandler() {

  removePopup();

  editsArray.push(`Add "${currentTune}" to ${targetList}`);
  renderEdits();
  window.localStorage.setItem('tuneStorageEdits', JSON.stringify(editsArray));
}

function createClearButton() {
  let clearContainer = document.createElement('div');
  clearContainer.classList.add('clear-container');
  let clearButtonNew = document.createElement('button');
  clearButtonNew.classList.add('clear');
  clearButtonNew.textContent = 'CLEAR';
  clearContainer.append(clearButtonNew);
  editsList.append(clearContainer);
  clearButton = clearButtonNew;
  clearButton.addEventListener('click', clearHandler);
}

function renderEdits() {

  editsList.innerHTML = '';

  for (let i = 0; i < editsArray.length; i++) {
    const newLi = document.createElement('li');
    newLi.classList.add('edits-list-item')
    newLi.textContent = editsArray[i];
    editsList.append(newLi);
  }

  createClearButton();
}

function clearHandler() {
  editsList.innerHTML = '';
  editsArray = [];
  window.localStorage.setItem('tuneStorageEdits', JSON.stringify(editsArray));

  createClearButton();
}


nextButton.addEventListener('click', nextHandler);
skipButton.addEventListener('click', skipHandler);
seeEditsButton.addEventListener('click', seeEditsHandler);
editsClose.addEventListener('click', editsCloseHandler);
raiseButton.addEventListener('click', raiseHandler);
lowerButton.addEventListener('click', lowerHandler);
cancelButton.addEventListener('click', cancelHandler);
confirmButton.addEventListener('click', confirmHandler);
okayButton.addEventListener('click', okayHandler);
clearButton.addEventListener('click', clearHandler);

renderEdits();
nextHandler();