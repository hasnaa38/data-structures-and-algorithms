# Insert to Middle of an Array

This is javascript-401d13 code challenge 02, it was to write a code that takes an array and a value as inputs and adds the value in the middle of the array.

## Whiteboard Process

![array-insert-shift](./array-insert-shift.png)

## Approach & Efficiency

Code:

```
function insertShiftArray(inputArray, value) {
  let midpoint = Math.ceil(inputArray.length/2);
  let beginning = inputArray.splice(0,midpoint);
  return([...beginning, num, ...inputArray]);
};
```

The function takes two parameters: an array and a value.
We find the midpoint of the input array by dividing the length of it by 2. If the array length was odd, we take the ceil (the next integer) of the answer. Then we store the value in a variable called midpoint.
To seprate the input array to two halfs at the midpoint, we use the .splice() method. This method creates a new array of the spliced one and changes the input array to be the other half. Therefore, now we have a new array that contains the values from index 0 to the midpoint, and the input array that has the rest of the original array.
To return the new output array, we use the spread syntax to add the first half's array, the value, and the second half's array.
 