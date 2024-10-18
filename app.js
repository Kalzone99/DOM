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
console.log(words);

/*const hallRed = words.pop();
console.log(hallRed);
console.log(typeof hallRed);*/
//found this on the net but i get the id of the innerHTML now
words[1] = `<span style="color: red;">${words[1]}</span>`;

AnnieHall.innerHTML = words.join(" ");
