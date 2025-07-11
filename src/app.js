let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed on', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car', 'my sandwich'];
let when = [
  'before the class',
  'when I was sleeping',
  'while I was exercising',
  'during my lunch',
  'while I was praying'
];

function generarExcusa() {
  let parte1 = who[Math.floor(Math.random() * who.length)];
  let parte2 = action[Math.floor(Math.random() * action.length)];
  let parte3 = what[Math.floor(Math.random() * what.length)];
  let parte4 = when[Math.floor(Math.random() * when.length)];

  return `${parte1} ${parte2} ${parte3} ${parte4}.`;
}

window.onload = function() {
  document.getElementById("excuse").innerHTML = generarExcusa();
};