const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = weekday[d.getDay()];

let n = d.getDay();

let sentence = '<p>It is now ' + d + '. ';
sentence += '<span class="white">Happy ' + day + '!';

if (n == 0) {
	sentence += ' (─‿‿─)</span> ';
} else if (n == 1) {
	sentence += ' ( ˘︹˘ )</span> ';
} else if (n == 2) {
	sentence += ' ᕙ(`▿´)ᕗ</span> ';
} else if (n == 3) {
	sentence += ' ᕙ(^▿^-ᕙ)</span> ';
} else if (n == 4) {
	sentence += ' ٩(˘◡˘)۶</span> ';
} else if (n == 5) {
	sentence += ' ≧◠‿◠≦</span> ';
} else if (n == 6) {
	sentence += ' (✿◠‿◠)</span> ';
}

sentence += 'Hope you have an amazing day!</p>';

document.write(sentence);