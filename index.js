// Your code here

function mapToNegativize(array) {
  let newArray = [];
  
  for (let i = 0; i < array.length; i++) {
    newArray.push(-array[i]);
  }
  
  return newArray;
}
