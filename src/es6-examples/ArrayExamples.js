/*
 * Array.from Example for Babel Convert Arguments
 * to a real array
 */
let func1 = function () {
  console.log(arguments);
  console.log(arguments.length);
  try {
    arguments.forEach(function(arg, index) {
      console.log("arg[" + index + "]: ", arg);
    });
  }
  catch (e) {
    console.error("Oops, we don't have forEach...");
  }

  // convert arguments to an actual array
  Array.from(arguments).forEach(function(arg, index) {
    console.log("arg[" + index + "]: ", arg);
  });
};

func1(1, 2, 3, 4);


/*
 * populate an array
 */
let myArray = new Array(5);
let count = 0;

let populatedArray = Array.from(myArray, () => count++);

console.log(populatedArray);

/*
 * Getting around the new Array() polymorphism
 */
let array1 = new Array(1,2,3,);
console.log(`array1 is [${array1}]`);

let array2 = new Array(3);
console.log(`array2 is [${array2}] with length of ${array2.length}`);

let array3 = Array.of(3);
console.log(`array3 is [${array3}] with length of ${array3.length}`);


/*
 * New Prototype methods on Array: keys, values, entries
 */
let myArray = ['a', 'b'];

console.log("keys: ", Array.from(myArray.keys())); // ordinals
console.log("values: ", Array.from(myArray.values())); // array values
console.log("entries: ", Array.from(myArray.entries())); // array of tuples

/* combining entries with destruction
 * For more on destructing see
 */   https://strongloop.com/strongblog/getting-started-with-javascript-es6-destructuring/
for (let [index, value] of myArray.entries()) {
  console.log(`index: ${index}, value: ${value}`);
}

/*
 * Replacement for lodash / underscore's find method
 *
 * Native Find support on Array.
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 */
let data = [
  {
    productId: 1111,
    productName: "Towels",
    price: 4.95
  },
  {
    productId: 2222,
    productName: "Queen Pillow",
    price: 14.95
  },
  {
    productId: 3333,
    productName: "Sheets",
    price: 29.95
  },
  {
    productId: 4444,
    productName: "Tooth Brush",
    price: 1.99
  },
  {
    productId: 5555,
    productName: "King Pillow",
    price: 19.95
  },
];

let item = data.find(item => item.productName === "Queen Pillow");
console.log(`Item[${item.productId}] is ${item.productName}`);

/*
 * FindIndex
 */
let itemIndex = data.findIndex(item => item.productName === "Queen Pillow");
console.log(`Index for [Queen Pillows] is ${itemIndex}`);


/*
 * ES5 Array Prototypes
 */

/*
 * Filter and Map usage
 */
let regex = /pillow/i;
let pillows = data.filter( item => regex.test(item.productName));

console.log(`Filtered pillows are ${pillows.map(p => p.productName).join(", ")}`);

/*
 * Reduce
 */
let cart = {};
cart.items = Array.from(pillows);
cart.total = cart.items.reduce((total, item) => {
  return total + item.price;
}, 0);

console.log(Number(cart.total).toFixed(2));


