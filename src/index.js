
// You should implement your task here.

module.exports = function towelSort (matrix) {
if (!matrix) {
  return [];
}
  let result = [];
  for (let i=0; i<matrix.length; i++) {
    if (i===0 || i%2===0)
    {
      matrix[i]=matrix[i].sort((a,b)=>a-b)
result.push(matrix[i]) 
    } else if ((i+1)%2===0){
      matrix[i]=matrix[i].sort((a,b)=>b-a)
      result.push(matrix[i])
    }
  }

return result.flat(1);
}
