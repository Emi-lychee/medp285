let questions = 10;
let questionsLeft = ' [' + questions + ' questions left]';

let noun1 = prompt('Please type a noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

let name = prompt('Please type a name that rhymes with "ee"' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

let verb1 = prompt('Please type a verb in the past tense' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

let food = prompt('Please type a food' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

let noun2 = prompt('Please type a noun that rhymes with "ee"' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

let noun3 = prompt('Please type a noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

let verb2 = prompt('Please type a verb in the past tense' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

let noun4 = prompt('Please type a noun that rhymes with "bed"' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

let verb3 = prompt('Please type a verb in the past tense' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

let adj2 = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

alert('All done. Ready for the message?');

let sentence = '<h2>There once was a ' + noun1 + ' named ' + name + '<br>';
sentence += 'Who ' + verb1 + ' a ' + food + ' and turned into a ' + noun2 + '<br>';
sentence += 'They thought this to be a ' + noun3 + ' and ' + verb2 + ' their ' + noun4 + '<br>';
sentence += 'Then ' + verb3 + ' and went to bed <br>';
sentence += 'Oh, how ' + adj2 + ' of the ' + noun1 + ' named ' + name + '</h2>';

document.write(sentence);