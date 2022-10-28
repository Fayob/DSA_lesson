const numbers = [5, 64, 2, 0, 7, 99, 240, 54, 1, 8]

const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr
  }

  //Split Array into right and left
  const len = arr.length
  const middle = Math.floor(len / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  // console.log('left', left);
  // console.log('right', right);

  return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
  const result = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }
  console.log(left, right);
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

console.log(mergeSort(numbers));
