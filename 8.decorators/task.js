function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
      const hash = args[0] + "," + args[1] + "," + args[2]; 
      let idx = cache.findIndex((item) => item.hash == hash); 
      if (idx !== -1 ) { 
        console.log("Из кэша: " + cache[idx].value); 
        return "Из кэша: " + cache[idx].value;
      }
      let result = func(...args); 
      cache.push({hash: hash, value: result}) ; 
      if (cache.length > 5) { 
        cache.shift(); 
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
  }
  return wrapper;
}


function debounceDecoratorNew(func,ms) {
  let flag;
   return function (...args) {
    if (flag) return;
    func.apply(this, args);
    flag = true;
    setTimeout(() => {
      func.apply(this, args);
      flag = false;
    }, ms);
  };
}

function debounceDecorator2(func, ms) {
  let flag = false;
  wrapper.count = 0;
  function wrapper(...args) {
    wrapper.count++;
    if (flag) return;
    func.apply(this,args);
    flag = true;
    setTimeout(() => {
      flag = false;
      func.apply(this, args);
    }, ms);
  }
  return wrapper;
}
