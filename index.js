let newbutton = document.createElement("button");
newbutton.innerText = "click me!";
let body = document.querySelector("body");
body.prepend(newbutton);
newbutton.style.backgroundColor = "red";
newbutton.style.color = "white";
newbutton.style.fontSize = "20px";
newbutton.style.padding = "10px 20px";
newbutton.style.border = "none";
newbutton.style.borderRadius = "5px";

let parag = document.querySelector(".para");
//parag.setAttribute("class", "new_class");
parag.classList.add("new_class");
// para.setAttribute("para_class");
let arr = [5, 8, 9];

let fn = (val) => {
  console.log(val);
};
const product = {
  name: "pen",
  price: 10,
  color: "blue",
  rating: 4.5,
  isAvailable: true,
};

const profile = {
  name: "rubab",
  posts: 10,
  followers: 100,
  following: 50,
  isVerified: true,
  isFollow: false,
};

let num1 = 45;
let num2 = 55;
if (num1 === num2) {
  console.log("equal");
} else if (num1 !== num2) console.log("not equal");

let num3 = num1 > num2 ? num1 : num2;
console.log(num3);

let num4 = prompt("Enter a number");
if (num4 % 5 === 0) {
  console.log(`${num4} is multiple of 5`);
} else {
  console.log(`${num4} is not multiple of 5`);
}
let score;
do {
  score = prompt("Enter your score");
} while (score < 0 || score > 100);
//let score = prompt("Enter your score");
let grade;
if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score <= 89 && score >= 80) {
  grade = "B";
} else if (score <= 79 && score >= 70) {
  grade = "C";
} else if (score <= 69 && score >= 60) {
  grade = "D";
} else grade = "F";

console.log(`Your grade is ${grade}`);

let arr1 = [1, 2, 3, 4, 5];
for (let i of arr1) {
  // provide value
  console.log(i);
}

for (let i in arr1) {
  // provide index
  console.log(i);
}
console.log("Product Details:");
for (let val in product) {
  console.log(`${val} : ${product[val]}`);
}
let str = "My name is Rubab";
for (let i of str) {
  console.log(i);
}

str = str.concat(" stydying at comsats university");
console.log(str);
console.log(str.length);
str = str.replaceAll("b", "B");
console.log(str);
console.log(str.slice(5, 14));
//console.log(str)

let arr2 = [500, 480, 756, 981, 56];
//offer = 10 * (10 / 100);
for (let i = 0; i < arr2.length; i++) {
  let disc = 0.01 * arr2[i];
  arr2[i] = arr2[i] - disc;
  console.log(`Price after discount: ${arr2[i]}`);
}
arr2.push(45);
console.log(arr2);
arr2.pop();
console.log(arr2);
//arr2.toString();
console.log(arr2.toString());
arr2.unshift(100);
console.log(arr2);
arr2.shift();
console.log(arr2);
arr2.splice(1, 0, 89);
console.log(arr2);

function sum(a, b) {
  return a + b;
}
console.log(sum(num1, num2));

let productt = (a, b) => {
  return a * b;
};
console.log(productt);
console.log(productt(5, 6));

arr1.forEach((val) => {
  console.log(val);
});
arr1.forEach((val, index) => {
  console.log(`Index: ${index}, Value: ${val}`);
});

let arr4 = arr1.filter((val) => {
  if (val % 2 === 0 || val % 5 === 0) {
    return val;
  }
});
arr4.forEach((val) => {
  console.log(val);
});
let arr5 = arr1.map((val) => {
  return val * 2;
});
arr5.forEach((val) => {
  console.log(val);
});
let arr6 = arr1.reduce((prev, next) => {
  prev += next;
  return prev;
});

console.log(arr6 / arr1.length);
let head1 = document.querySelector("#head1");

let h2 = document.createElement("h2");
h2.innerText = "my first ever js file";
document.querySelector("h1").after(h2);
h2.innerText =
  h2.innerText + " is all about learning and practising javascript";
h2.setAttribute("class", "head2");
console.log(h2.getAttribute("class"));
console.log(head1.getAttribute("id"));
let mode = "dark";
newbutton.addEventListener("click", () => {
  if (mode === "dark") {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    mode = "light";
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    mode = "dark";
  }
});

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let change = init;
  return {
    increment: (change) => {
      // let incer=init;
      return ++change;
      // return ++init;
    },
    reset: (init) => {
      let curr = init;
      return curr;
      // return init;
    },
    decrement: (change) => {
      //let decer=init;
      return --change;
      //return --init;
    },
  };
};

const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
