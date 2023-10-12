"use strict";

const array = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  ",",
  " ",
  ".",
  "!",
  "?",
];

let key = ["S", "A", "L"];
let text = ["D","A","S"];

let w = [];

for (let i = 0; i < key.length; i++) {
  let index = array.indexOf(key[i]);
  // console.log(key[i]);

  let a = [];

  for (let i = 0; i < 31; i++) {
    if (index < 30) {
      a.push(array[index]);
    } else {
      a.push(array[index - 30]);
    }
    index++;
  }
  w.push(a);

}

console.log(w);

let b = [];

for(let i=0; i<text.length; i++){
  let r = array.indexOf(text[i]);
  b.push(r);
}

console.log(b);

let shifr = [];

for(let i=0; i<b.length; i++){
  let z = w[i][b[i]];
  shifr.push(z);
}

console.log(shifr)