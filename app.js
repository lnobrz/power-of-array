// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

const productOfArray = (arr) => {
  let index = arr.length;

  const recursion = () => {
    if (index === 0) {
      return arr[0];
    }

    --index;
    return arr[index] * recursion(arr[index - 1]);
  };

  return recursion(arr);
};
