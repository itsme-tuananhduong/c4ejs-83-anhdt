let lst = document.getElementById("player-list");
let p1 = `<li>Ronaldo</li>`,
  p2 = `<li>Messi</li>`,
  p3 = `<li>Neymar</li>`;
lst.innerHTML += p1;
lst.innerHTML += p2;
lst.innerHTML += p3;

p3.remove();
