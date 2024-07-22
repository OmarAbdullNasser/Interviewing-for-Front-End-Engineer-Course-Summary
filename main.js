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
class Food {
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
