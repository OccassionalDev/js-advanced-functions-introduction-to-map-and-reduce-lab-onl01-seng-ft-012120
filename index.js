// Your code here

function mapToNegativize(array) {
  let newArray = [];
  
  for (let i = 0; i < array.length; i++) {
    newArray.push(-array[i]);
  }
  
  return newArray;
}

function mapToNoChange(array) {
  let newArray = array;
  
  return newArray;
}

function mapToDouble(array) {
  let newArray = [];
  
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]*2);
  }
  
  return newArray;
}

function mapToSquare(array) {
  let newArray = [];
  
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]*array[i]);
  }
  
  return newArray;
}

function reduceToTotal(array, start) {
  let total = 0;
  
  for (let i = start; i < array.length; i++) {
    total += array[i];
  }
  
  return total;
}