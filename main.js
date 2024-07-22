/*
Task
1- Create a "Foods"  class or constructor  that will take  two arguements: a root element and data object (foodData).
2-Render all of this items in the data object into the DOM with the root element as parent .
3-If the user click a food items, it should be removed from list. 
*/

const root = document.querySelector(".food");

const FoodData = [
  {
    id: 1,
    img: "🍕",
    name: "pizza",
  },
  {
    id: 2,
    img: "🍔",
    name: "hamburger",
  },
  {
    id: 3,
    img: "🥩",
    name: "meet",
  },
  {
    id: 4,
    img: "🍞",
    name: "bread",
  },
  {
    id: 5,
    img: "🧀",
    name: "cheese",
  },
];

//My Soluation
class Food {
  constructor(root, data) {
    (this.root = root), (this.data = data);
  }

  pushElements() {
    this.data.forEach((food) => {
      let childEle = document.createElement("div");
      childEle.innerHTML = `${food.id} .${food.img}  ${food.name}`;
      childEle.style.cursor = "pointer";
      this.root.appendChild(childEle);
    });
  }
  removeElement() {
    [...this.root.children].forEach((chlid) => {
      chlid.addEventListener("click", () => {
        chlid.remove();
      });
    });
  }
}
// Jem Solution
class Foods {
  constructor(el, foodData) {
    (this._root = el), (this._data = foodData);
  }
  rendderList() {
    this._root.addEventListener("click", (e) => {
      const { target } = e;
      target.remove();
    });
    const fragment = document.createDocumentFragment;
    this._data.forEach((i) => {
      fragment.appendChild(this.createFoodItem(i));
    });
    this._root.appendChild(fragment);
  }

  createFoodItem(item) {
    const itemEL = document.createElement("div");
    itemEL.innerText = item.img;
    itemEL.classList.add(item.name);
    return itemEL;
  }
}
/*/////////////////////////////////////////////////////////////////////////////*/
// Create a function that takes a string and returns a
// new string with duplicates removed

/*
 const str = 'This is is a test test string';
 removeDuplicates(str); // 'This is a test string'
 */
// My Solution
function removeDuplication(str) {
  let newString = [];
  [...str].forEach((char) => {
    if (!newString.includes(char)) {
      newString.push(char);
    }
  });
  newString = newString.join("");
  return newString;
}

//My TeamLead Solution
function removeDuplication(str) {
  let charCount = {};

  for (let char of str) {
    if (charCount[char]) {
      charCount[char] += 1;
    } else {
      charCount[char] = 1;
    }
  }

  return Object.keys(charCount).join("");
}

// Jem Solution
function removeDuplicates(str) {
  const arr = str.split(" ");
  return [...new Set(arr)].join(" ");
}

//*///////////////////////////////////////////////////////////////////////*/
// Without using .flat(), create a function to flatten an array

// const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10];
// flatten(exampleArray); // [1,2,3,4,5,6,7,8,9,10]

// My Solution
let newArr = [];
function flatten(arr) {
  arr.filter((num) => {
    if (Array.isArray(num)) {
      flatten(num);
    } else {
      newArr.push(num);
    }
  });
  return newArr;
}

// Jem Solution
function flatten(arr) {
  let x = arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flatten(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
  return x;
}
/*/////////////////////////////////////////////////////////////////////////////////////////////*/
// Implement Function.prototype.bind()

/*
    const foo = function() {
        console.log(this.bar);
    }

    let baz = foo.bind({bar: 'hello'})

    baz(); // Hello
*/
Function.prototype.testBind = function (context) {
  const fn = this;
  return function () {
    fn.call(context);
  };
};
function foo() {
  console.log(this.bar);
}
let baz = foo.testBind({ bar: "hello" });
//  baz()

/*////////////////////////////////////////////////////*/
/**
 * Debounce invokes `fn()` once `time` has elapsed. The timer is reset if any debounce calls take place
 * before time has elapsed.
 */

//My Solution
function getData() {
  console.log("Data Fetched");
}

function debounce(callback, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, delay);
  };
}
const betterFunction = debounce(getData, 1000);

//Jem Solution
function debounce(fn, time) {
  let timeoutId;

  return function () {
    // Check for existing calls
    if (timeoutId) {
      // Reset timer
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      // Invoke fn
      fn.apply(this, arguments);
    }, time);
  };
}
/////////////////////////////////////////////////////////////////////////////////////////////////
// We have two identical DOM trees, A and B. For DOM tree A, we have
// the location of an element. Create a function to find that same element
// in tree B.

//Jem Solution
function FindElement(ele, root) {
  const path = [];
  let pointer = ele;
  while (ele.parent) {
    const index = pointer.parent.children.indexOf(pointer);
    path.push(index);
    pointer = pointer.parent;
  }

  pointer = root;
  while (path.length) {
    pointer = pointer.children[path.pop()];
    console.log(pointer);
  }
}
////////////////////////////////////////////////////////////////////////////////
// Create a function to move an element. The function arguments are,
// distance, duration, and the element to move.

/*
    function moveElement(duration, distance, element) {}
*/
//my Soluation
// function moveElement(duration, distance, element) {
//   let PostionX = element.getBoundingClientRect().left + window.scrollX;
//   let PostionY = element.getBoundingClientRect().top + window.scrollY;
//   setTimeout(() => {
//     element.style.position = "absolute";
//     let y = PostionY + distance;
//     let x = PostionX + distance;
//     element.style.top = `${y}px`;
//     element.style.left = `${x}px`;
//   }, duration);
// }
// moveElement(1000, 100, document.getElementById("test"));

//JEM Soluation
function moveElement(duration, distance, element) {
  const start = performance.now();

  function move(currentTime) {
    const elapsed = currentTime - start;
    const progress = elapsed / duration;
    const amountToMove = progress * distance;
    element.style.transfrom = `translateX(${amountToMove}px)`;
    if (amountToMove < distance) {
      requestAnimationFrame(move);
    }
  }
  requestAnimationFrame(move);
}
moveElement(1000, 800, document.getElementById("test"));
