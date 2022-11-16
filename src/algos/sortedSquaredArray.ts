// Sorted Squared Array:
// Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of 
// the same length with the squares of the original integers also sorted in ascending order

// Solution Explanation:
// The trick here is that the array can also contain negative numbers, which will be at the start of the array but when squared, there position in the 
// output array is not so straight forward given that there are postive integers in the array as well.
// So put a pointer on the start element and the last element. Take the absolute value of the both the values and compare them. Whichever is larger, put 
// it at the end of the output array and move the pointers accordingly (start pointer ++ forward if the left most pointer contains the highest value, end pointer --
// if the right most pointer contains the largest value).

export function sortedSquaredArray(array: number[]) {
  console.log("Incoming Array: ", array);
  const returned_array = Array(array.length);
  let start_index: number = 0;
  let end_index: number = array.length - 1;
  
  for (let x = 0; x < array.length; x++) {
    const left_most_node = Math.abs(array[start_index]);
    const right_most_node = Math.abs(array[end_index]);

    if (left_most_node <= right_most_node) {
      returned_array[array.length - 1 - x] = Math.pow(right_most_node, 2);
      console.log("Saving Right most node in the array: ", right_most_node);
      
      end_index--;
    } else if (left_most_node > right_most_node) {
      returned_array[array.length - 1 - x] = Math.pow(left_most_node, 2);
      console.log("Saving left most node in the array: ", left_most_node);
      start_index++;
    }
    console.log("Current Array: ", returned_array);
  }
  console.log("Final Array: ", returned_array);
  return returned_array;
}
