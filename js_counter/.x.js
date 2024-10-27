function createCounter(start){
  const count = start;
  return function(){
    return count++
  }
}
