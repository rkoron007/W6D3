Function.prototype.curry = function(numArgs){
  let numbers = [];
  const _mycurry = (num)=>{
    numbers.push(num);
    if (numbers.length < numArgs){
      return _mycurry;
    }else {
      return this.apply(null, numbers);
    }
  };
  return _mycurry;
};
