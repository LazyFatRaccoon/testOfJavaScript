"use strict";

const persone = {
  name: "Alex",
  tel: "+74444444",
  parents: {
    mom: "Olga",
    dad: "Max",
  },
};

//console.log(JSON.parse(JSON.stringify(persone)));
const clone = JSON.parse(JSON.stringify(persone));
console.log(clone);
