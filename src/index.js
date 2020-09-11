
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let newArr = []
  if (!matrix || !matrix.length) {
      return newArr;
  } else {
      for (i = 0; i < matrix.length; i++){
          let el = matrix[i];
          if (el instanceof Array) {
              if ( i % 2 !== 0) {
                  el = el.reverse();
              }
              newArr.push(...el);
          } else {
              newArr.push(el);
          }
      }
      return newArr;
  }
}
