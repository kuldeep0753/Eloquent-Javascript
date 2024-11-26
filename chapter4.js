/*Exercises
1.The sum of a range
The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
*/
//Solution:
// Your code here.
// const range = (a, b, c = 0) => {
//   const arr = [];
//   if (a < b) {
//     for (let i = a; i <= b; i++) {
//       arr.push(i + c);
//     }
//   } else {
//     for (let i = a + 1; i > b; i--) {
//       arr.push(i + c);
//     }
//   }
//   return arr;
// };
// const sum = (arr) => {
//   let add = 0;
//   for (let i = 0; i < arr.length; i++) {
//     add += arr[i];
//   }
//   return add;
// };
// console.log(range(1, 10));
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]
// console.log(sum(range(5, 2, -1)));
// → 14

//Optimise method
// function range(start, end, step = start < end ? 1 : -1) {
//     let array = [];
  
//     if (step > 0) {
//       for (let i = start; i <= end; i += step) array.push(i);
//     } else {
//       for (let i = start; i >= end; i += step) array.push(i);
//     }
//     return array;
//   }
  
//   function sum(array) {
//     let total = 0;
//     for (let value of array) {
//       total += value;
//     }
//     return total;
//   }

    /**
     * Another way :
     * // Your code here.
    const range=(a,b,c=1)=>{
      let i=1;
      const arr=[];
      arr[0]=a;
      let condition=a>b?a-b:b-a;
      console.log(condition);
      
      while(i<=condition){
        arr[i]=arr[i-1]+c;
        i++;
        }
      return arr;
      }

    const sum=(range)=>{
      let i=0,add=0;
      while(i<range.length){
        add=range[i]+add;
        i++;
        }
      return add;
      }

    console.log(range(1, 10));
    // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(range(5, 2, -1));
    // → [5, 4, 3, 2]
    console.log(sum(range(1, 10)));
    // → 55
    */
  /**
   * 2.Reversing an array
      Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, should take an array as its argument and produce a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, should do what the reverse method does: modify the array given as its argument by reversing its elements. Neither may use the standard reverse method. */
      // Your code here.
      // let myArray = ["A", "B", "C"];

      // const reverseArray=(a)=>{
      //     let b=[];
      //   for(i=a.length-1;i>=0;i--){
      //      b.push(a[i]);
      //     }
      //   return b;
      //   }
      // console.log(reverseArray(myArray));
      // // → ["C", "B", "A"];
      // console.log(myArray);
      // // → ["A", "B", "C"];
      // let arrayValue = [1, 2, 3, 4, 5];
      // function reverseArrayInPlace(array) {
      //     for (let i = 0; i < Math.floor(array.length / 2); i++) {
      //       let old = array[i];
      //       array[i] = array[array.length - 1 - i];
      //       array[array.length - 1 - i] = old;
      //     }
      //     return array;
      //   }
      // reverseArrayInPlace(arrayValue);
      // console.log(arrayValue);
      // → [5, 4, 3, 2, 1]


// 3.Object comparision
    /** 
    function deepEqual(a, b) {
        if (a === b) return true;
        
        if (a == null || typeof a != "object" ||
            b == null || typeof b != "object") return false;
      
        let keysA = Object.keys(a), keysB = Object.keys(b);
      
        if (keysA.length != keysB.length) return false;
      
        for (let key of keysA) {
          if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
        }
      
        return true;
      }
      
      let obj = {here: {is: "an"}, object: 2};
      console.log(deepEqual(obj, obj));
      // → true
      console.log(deepEqual(obj, {here: 1, object: 2}));
      // → false
      console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
      // → true
      */