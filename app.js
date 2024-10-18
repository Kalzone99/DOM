//EXO DOM SELECTORS
//-------------------------------------------------------------------------------------
/*
const mainHeading = document.getElementById("main-heading");
const myList = document.querySelector("ul");
const myItem = document.createElement("li");

myList.appendChild(myItem);
myItem.remove();

mainHeading.style.color = "red";
mainHeading.style.background = "yellow";
mainHeading.style.textDecoration = "underline";

const item = document.querySelector("li.list-item");
console.log(item);
const newItem = document.createElement("li");
newItem.innerText = item.innerText;
myList.appendChild(newItem);
console.log(newItem);
const wholeList = document.querySelectorAll("li");
console.log(wholeList);
console.log(typeof wholelist);
for (let i = 0; i < wholeList.length; i++) {
  wholeList[i].style.color = "purple";
}
wholeList[5].style.color = "gold";

const AnnieHall = wholeList[3];
const text = AnnieHall.innerText;
console.log(text);
console.log(typeof text);

const words = text.split(" ");
console.log(words);*/

//found this on the net but i get the id of the innerHTML now
/*words[1] = `<span style="color: red;">${words[1]}</span>`;

AnnieHall.innerHTML = words.join(" ");*/
//---------------------------------------------------------------------------------
//06B.EXERCISE 1
//---------------------------------------------------------------------------------------
/*const bold = document.querySelector("b");
bold.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
  "body"
).style.background = "beige";
bold.style.color = "red";
console.log(bold);
bold.parentElement.parentElement.parentElement.parentElement.querySelector(
  ".part-2"
).style.background = "darkblue";
bold.parentElement.parentElement.parentElement.parentElement.querySelector(
  ".part-2"
).style.color = "white";
bold.parentElement.parentElement.parentElement.querySelector(
  ".myBtn"
).style.color = "pink";

bold.parentElement.parentElement.parentElement.parentElement
  .querySelectorAll("li")
  .forEach(function (element) {
    element.style.color = "orange";
  });
bold.parentElement.parentElement.parentElement.parentElement.children[0].children[0].children[2]
  .querySelectorAll("a")
  .forEach(function (x) {
    x.style.color = "green";
  });

bold.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
  "h1"
).style.textTransform = "uppercase";*/
//----------------------------------------------------------------------------------------------
//06B.EXERCISE 2
//----------------------------------------------------------------------------------------------
/*const myContainer = document.querySelector(".container");
let i = 1;
const createBtn = () => {
    if (i <= 100) { 
      let myBtn = document.createElement("button");
      myBtn.appendChild(document.createTextNode(`I am button ${i}`));
      myContainer.appendChild(myBtn);
      i++; 
      setTimeout(createBtn, 2000);
    }
  };
setTimeout(createBtn, 2000);
console.log("finally!!");*/

//----------------------------------------------------------------------------------------------
//06B.EXERCISE 3
//----------------------------------------------------------------------------------------------
/*const cyan = document.querySelectorAll(".highlight");
const list_items = document.querySelectorAll("li");
console.log(cyan);
console.log(list_items);
removeCyan = () => {
  for (let x = 0; x < list_items.length; x++) {
    if (list_items[x].classList.contains("highlight")) {
      list_items[x].classList.remove("highlight");
    } else {
      list_items[x].classList.add("highlight");
    }
  }
};
removeCyan();*/
//----------------------------------------------------------------------------------------------
//06B.EXERCISE4
//-----------------------------------------------------------------------------------------------

/*const myContainer = document.querySelector(".container");
createImg = () => {
  for (let i = 1; i <= 151; i++) {
    let myImg = document.createElement("img");
    myImg.setAttribute(
      "src",
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    );

    myContainer.appendChild(myImg);
  }
};
console.log("finally!!");
createImg();
*/
