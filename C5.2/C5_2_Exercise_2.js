let s = '{' +
 '"list": [' +
  '{' +
   '"name": "Petr",' +
   '"age": "20",' +
   '"prof": "mechanic"' +
  '},' +
  '{' +
   '"name": "Vova",' +
   '"age": "60",' +
   '"prof": "pilot"' +
  '}' +
 ']' +
'}';

let result = JSON.parse(s);

console.log(result);