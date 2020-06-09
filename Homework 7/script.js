// let person = {
//   myName: "Duong Tuan Anh",
//   myClass: "C4EJS83"
// };
// console.log(person.myName);
// console.log(person.myClass);

// // bai 1
// let pList = document.getElementById("playername-1");
// let p1 = `<li>Ronaldo</li>`,
//     p2 = `<li>Messi</li>`,
//     p3 = `<li id="li-3">Neymar</li>`;
// pList.innerHTML += p1;
// pList.innerHTML += p2;
// pList.innerHTML += p3;
// let p = document.getElementById("li-3");
// p.remove();

// bai 2
let button = document.getElementById("button");
button.addEventListener('click', function() {
    let pList = document.getElementById("playername-2");
    let p = `<li>Kante</li>`
    pList.innerHTML += p;
})
    
// bai 3
let input = document.getElementById("input");
input.addEventListener('keypress', function(data) {
    if (data.key == "Enter") {
        let pList = document.getElementById("playername-2");
        let p = `<li>${input.value}</li>`;
        pList.innerHTML += p;
        input.value = "";
    }
})
