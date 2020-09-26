
function quickSort1(array) {
  if (array.length === 0 || array.length === 1) return array;
  
  let pivot = array.shift();
  let left = [];
  let right = [];

  for ( let i = 0; i < array.length; i++) {
    let x = array[i]
      if (x < pivot) {
        left.push(x);
      } else {
        right.push(x);
      }
  }

  let sortedLeft = quickSort1(left);
  let sortedRight = quickSort1(right);

  return [...sortedLeft, pivot, ...sortedRight]

}
 

function quickSort2(array) {
  if (array.length <= 1) return array;

  let pivot = array.shift()
  let left = array.filter(x => x <= pivot)
  let right = array.filter(x => x > pivot)

  let sortedLeft = quickSort2(left)
  let sortedRight = quickSort2(right)

  return [...sortedLeft, pivot, ...sortedRight]
}


function quickSort3(array){ 
  if(array.length <= 1) return array; 

  let left = []; 
  let right = []; 
  let pivotIdx = Math.floor(array.length / 2); 
  let pivot = array[pivotIdx]; 

  for(let i = 0; i < array.length; i++){
    let x = array[i]
      if(i === pivotIdx) continue; 
      if(x < pivot){
          left.push(x); 
      } else if (x > pivot) {
          right.push(x); 
      }
  }
  
  return quickSort3(left).concat(pivot).concat(quickSort3(right)); 
}

let array = [2, -1, 4, 3, 7, 3];

// console.log(quickSort1(array))

// console.log(quickSort2(array));
// console.log(quickSort2(array));
// console.log(quickSort2(array));
// console.log(quickSort2(array));
// console.log(quickSort2(array));
// console.log(quickSort2(array));

// console.log(quickSort3(array))


// Psuedo code from a/A readme:
 // if the length of the array is 0 or 1, return the array

  // set the pivot to the first element of the array
  // remove the first element of the array

  // put all values less than the pivot value into an array called left
  // put all values greater than the pivot value into an array called right

  // call quick sort on left and assign the return value to sortedLeft
  // call quick sort on right and assign the return value to sortedRight

  // return the concatenation of sortedLeft, the pivot value, and sortedRight