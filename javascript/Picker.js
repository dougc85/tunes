class Picker {
  constructor(newList, medList, knowList, fullKnow) {
    self.newList = [...newList];
    self.medList = [...medList];
    self.knowList = [...knowList];
    self.fullKnow = fullKnow;

    self.currentList = self.newList;
    self.choices = ['new', 'new', 'new', 'new', 'med', 'med', 'know'];
  }

  //Sets self.currentList to the list that will be selected from
  _chooseList() {

    //If new lists are depleted, always return knowList
    if (self.newList.length == 0 && self.medList.length == 0) {
      if (self.knowList.length == 0) {
        self._resetKnowList();
        window.localStorage.setItem('tuneStorageKnow', JSON.stringify(self.knowList));
      }
      self.currentList = knowList;
      return;
    }

    //Reset choices if necessary
    if (self.choices.length == 0) {
      self.choices = ['new', 'new', 'new', 'new', 'med', 'med', 'know'];
    }

    const choicePosition = Math.floor(Math.rand * self.choices.length)
    const choice = self.choices[choicePosition];
    self.choices.splice(choicePosition, 1);

    switch (choice) {
      case 'new':
        if (newList.length == 0) {
          self.chooseList();
          break;
        }
        self.currentList = self.newList;
        break;
      case 'med':
        if (medList.length == 0) {
          self.chooseList();
          break;
        }
        self.currentList = self.medList;
        break;
      default:
        if (self.knowList.length == 0) {
          self._resetKnowList();
        }
        self.currentList = self.knowList;
    }
  }

  _resetKnowList() {
    self.knowList = [...self.fullKnow];
  }

  pickTune() {

    self._chooseList();

    const choicePosition = Math.floor(Math.random() * self.currentList.length);
    const choice = self.currentList[choicePosition];
    self.currentList.splice(choicePosition, 1);

    //Update localStorage
    if (self.currentList == self.newList) {
      window.localStorage.setItem('tuneStorageNew', JSON.stringify(self.newList));
    } else if (self.currentList == self.medList) {
      window.localStorage.setItem('tuneStorageMed', JSON.stringify(self.medList));
    } else {
      window.localStorage.setItem('tuneStorageKnow', JSON.stringify(self.knowList));
    }

    return choice;
  }
}