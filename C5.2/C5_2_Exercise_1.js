const s = '<list>' +
  '<student>' +
    '<name lang="en">' +
      '<first>Ivan</first>' +
      '<second>Ivanov</second>' +
    '</name>' +
    '<age>35</age>' +
    '<prof>teacher</prof>' +
  '</student>' +
  '<student>' +
    '<name lang="ru">' +
      '<first>Петр</first>' +
      '<second>Петров</second>' +
    '</name>' +
    '<age>58</age>' +
    '<prof>driver</prof>' +
  '</student>' +
'</list>';

const parser = new DOMParser();
const xml = parser.parseFromString(s, 'text/xml');

const m = xml.documentElement;
const students = xml.documentElement.childNodes;
const list = [];
for (let i = 0; i < students.length; i++) {
  let student = students[i];
  // Name
  let nameEl = student.getElementsByTagName('name')[0];
  let firstEl = nameEl.getElementsByTagName('first')[0];
  let secondEl = nameEl.getElementsByTagName('second')[0];
  let first = firstEl.textContent;
  let second = secondEl.textContent;
  let name = first + ' ' + second;
  // Language
  let lang = nameEl.getAttribute('lang');
  // Age
  let age = parseInt(student.getElementsByTagName('age')[0].textContent);
  // Profession
  let prof = student.getElementsByTagName('prof')[0].textContent;

  list.push({
    name: name,
    age: age,
    prof: prof,
    lang: lang
  });
}

const result = {
  list: list
};

console.log(result);