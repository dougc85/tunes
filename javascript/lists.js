const fullNew = ['Four', 'You don’t know what love is', 'Sweet and Lovely', 'Spring Can Really Hang You Up the Most', 'You Stepped Out of a Dream', 'It had to be you', 'Tell Me a Bedtime Story', 'As Time Goes By', 'Sonny moon for two', 'Pent up House', 'Sidewinder', 'Without a Song', 'Eternal Triangle', 'I Didn’t Know About You', 'My Melancholy Baby', 'Dolphin Dance'];
const fullMed = [];
const fullKnow = ['Half Nelson', 'Embraceable You', 'September in the Rain', 'How Insensitive', 'I Hear a Rhapsody', 'Ceora', 'I Could Write a Book', 'Girl From Ipanema', 'Bolivia', 'Pennies From Heaven', 'Airegin', 'Nearness of You', 'Sleeping Bee', 'Come Fly With Me', 'Along Came Betty (w ending)', 'Come Rain Or Come Shine - Blakey', 'Cheek to Cheek', 'Change Partners', 'You’re Everything', 'Lady is a Tramp', 'Speak No Evil', 'Jitterbug Waltz', 'Joy Spring', 'Detour Ahead', 'I Let Song Go Out My Heart', 'Its Only a Paper Moon (w intro)', 'Darn That Dream', 'Hot House', 'I’ve got the world on a string', 'Yesterdays', 'Here’s that rainy Day', 'April in Paris w/ ending', 'Sweet Georgia Brown', 'Cheryl', 'Unforgettable', 'Almost Like Being in Love', 'I Mean You', 'I Thought About You', 'Moonlight in Vermont', 'Confirmation', 'Mean to Me', 'Well You Needn’t', 'My Foolish Heart', 'Con Alma', 'Body and Soul', 'Up Jumped Spring', 'It Don’t Mean a Thing', 'Prelude to a Kiss', 'You’d be so nice', 'Just Friends', 'Emily', 'Skylark', 'How Deep is the Ocean', 'Windows', 'Bloomdido', 'Blame it on my Youth', 'My Romance', 'Over the Rainbow', 'Jody Grind', 'Young at Heart', 'All or Nothing at all', 'Back at the Chicken Shack', 'Our Love is Here to Stay', 'No more blues', 'Wise One', 'On the Sunny Side of the Street', 'Sandu', 'Dat Dere', 'Donna Lee', 'Doxy', 'When it Rains', 'Night Train', 'Jeannine', 'Gloria’s Step', 'Whisper Not', 'When Sunny Gets Blue', 'Witchcraft', 'Black Nile', 'I’ve got you under my skin', 'Inner Urge', 'Stardust', 'Blue Train', '26-2', 'There is No Greater Love', 'Nica’s Dream', 'Isfahan', 'Cool Eyes', 'Yancey Special', 'L-o-v-e', 'Milestones', 'Moose the Mooche', 'The Very Thought if You', 'In Your Own Sweet Way', 'How about you', 'Recorda-Me', 'Ask Me Now', 'Yardbird suite', 'Round Midnight (intro &coda)', 'That Old Black Magic', 'Fee Fi Fo Fum', 'Samba de Orfeo', 'UMMG', 'Ornithology', 'Sleeping Dancer Sleep On', 'Dance of the Infidels', 'Pensativa', 'Conception', 'It never entered my mind', 'You make me feel so young', 'Moment’s Notice', 'Deed I do', 'Blues for Alice', 'Dindi W intro', 'Bye-Ya', 'Bouncing with Bud', 'Syeeda’s Song Flute', 'Sophisticated Lady', 'Valse Hot', 'Love For Sale', 'Wail', 'Sugar Ray'];


const tuneStorageNewJSON = window.localStorage.getItem('tuneStorageNew');
const tuneStorageMedJSON = window.localStorage.getItem('tuneStorageMed');
const tuneStorageKnowJSON = window.localStorage.getItem('tuneStorageKnow');


let newList = tuneStorageNewJSON ? JSON.parse(tuneStorageNewJSON) : [...fullNew];
let medList = tuneStorageMedJSON ? JSON.parse(tuneStorageMedJSON) : [...fullMed];
let knowList = tuneStorageKnowJSON ? JSON.parse(tuneStorageKnowJSON) : [...fullKnow];

// Store lists in storage and then do that in the Picker file, too
if (newList.length == 0) {
  newList = [...fullNew];
} else if (medList.length == 0) {
  medList = [fullMed];
} else if (knowList.length == 0) {
  knowList = [...fullKnow];
}

window.localStorage.setItem('tuneStorageNew', JSON.stringify(newList));
window.localStorage.setItem('tuneStorageMed', JSON.stringify(medList));
window.localStorage.setItem('tuneStorageKnow', JSON.stringify(knowList));