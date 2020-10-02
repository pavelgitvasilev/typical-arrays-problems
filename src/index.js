
exports.min = function min (array) {
  let min;
  if (Array.isArray(array) && array != '') {
      min = Math.min.apply(null, array)

  } else {
    return 0;
  }
  return min

}


exports.max = function max (array) {
  let max;
  if (Array.isArray(array) && array != '') {
    max = Math.max.apply(null, array)

  } else {
    return 0;
  }
  return max

}

exports.avg = function avg (array) {
  let sum = 0;
  if (Array.isArray(array) && array != '') {
    
    for (let i = 0; i < array.length; i++) {
      sum += array[i]
    }

  } else {
    return 0;
  }
  return sum / (array.length)

}

