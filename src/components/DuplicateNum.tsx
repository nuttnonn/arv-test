import React from 'react'

const DuplicateNum = () => {
  const arr1: number[] = [1, 1, 2, 3, 4, 5, 6, 7, 8, 6, 6, 7, 7, 7, 10, 10];
  const arr2: number[] = [2, 2, 1, 6, 8, 10, 6, 4, 3, 9, 9, 4, 10, 10];

  const returnMultipleDupesArray = (arr: number[]) => {
    const numCounts: { [key: number]: number } = {};
    const duplicates: number[] = [];

    arr.forEach(num => {
      numCounts[num] = (numCounts[num] || 0) + 1;
      // console.log(numCounts)
    });

    // console.log(numCounts)

    for (const num in numCounts) {
      if (numCounts[num] > 1) {
        duplicates.push(parseInt(num));
      }
    }

    return duplicates;
  };

  console.log(returnMultipleDupesArray(arr1));
  console.log(returnMultipleDupesArray(arr2));

  return (
    <div>
      Duplicate Number
    </div>
  )
}

export default DuplicateNum

// Find all duplicate numbers in an array with multiple duplicates
// Return: array — containing all duplicates found or empty array if none are found
// const returnMultipleDupesArray = (arr) => { // // }; // const arr = [1, 1, 2, 3, 4, 5, 6, 7, 8, 6, 6, 7, 7, 7, 10, 10];
// console.log(returnMultipleDupesArray(arr)); // prints [1, 6, 7, 10]