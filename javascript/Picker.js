class Picker {
  constructor(newList, medList, knowList, fullKnow) {
    this.newList = [...newList];
    this.medList = [...medList];
    this.knowList = [...knowList];
    this.fullKnow = fullKnow;

    this.currentList = this.newList;
    this.choices = ['new', 'new', 'new', 'new', 'med', 'med', 'know'];

    this.keys = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab'];
  }

  //Sets this.currentList to the list that will be selected from
  _chooseList() {

    //If new lists are depleted, always return knowList
    if (this.newList.length == 0 && this.medList.length == 0) {
      if (this.knowList.length == 0) {
        this._resetKnowList();
        window.localStorage.setItem('tuneStorageKnow', JSON.stringify(this.knowList));
      }
      this.currentList = knowList;
      return;
    }

    //Reset choices if necessary
    if (this.choices.length == 0) {
      this.choices = ['new', 'new', 'new', 'new', 'med', 'med', 'know'];
    }

    const choicePosition = Math.floor(Math.rand * this.choices.length)
    const choice = this.choices[choicePosition];
    this.choices.splice(choicePosition, 1);

    switch (choice) {
      case 'new':
        if (newList.length == 0) {
          this.chooseList();
          break;
        }
        this.currentList = this.newList;
        break;
      case 'med':
        if (medList.length == 0) {
          this.chooseList();
          break;
        }
        this.currentList = this.medList;
        break;
      default:
        if (this.knowList.length == 0) {
          this._resetKnowList();
        }
        this.currentList = this.knowList;
    }
  }

  _resetKnowList() {
    this.knowList = [...this.fullKnow];
  }

  pickTune() {

    this._chooseList();

    const choicePosition = Math.floor(Math.random() * this.currentList.length);
    const choice = this.currentList[choicePosition];
    this.currentList.splice(choicePosition, 1);

    //Update localStorage
    if (this.currentList == this.newList) {
      window.localStorage.setItem('tuneStorageNew', JSON.stringify(this.newList));
    } else if (this.currentList == this.medList) {
      window.localStorage.setItem('tuneStorageMed', JSON.stringify(this.medList));
    } else {
      window.localStorage.setItem('tuneStorageKnow', JSON.stringify(this.knowList));
    }

    return choice;
  }

  pickKey() {
    if (this.keys.length == 0) {
      this.keys = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab'];
    }

    const choicePosition = Math.floor(Math.random() * this.keys.length);
    const choice = this.keys[choicePosition];
    this.keys.splice(choicePosition, 1);

    return choice;
  }
}