function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
      const hash = args.join(","); 
      let idx = cache.findIndex((item) => item.hash == hash); 
      if (idx !== -1 ) { 
        console.log("Из кэша: " + cache[idx].value); 
        return "Из кэша: " + cache[idx].value;
      }
      let result = func(...args); 
      cache.push({hash, value: result}) ; 
      if (cache.length > 5) { 
        cache.shift(); 
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
  }
  return wrapper;
}


function debounceDecoratorNew(func,ms) {
  let flag, timeout;
   return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
      flag = false;
    }, ms);
    if(!flag) {
      func.apply(this, args);
      flag = true;
    }
  };
}

function debounceDecorator2(func, ms) {
  let flag, timeout;
  wrapper.count = 0;
  function wrapper(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
      wrapper.count++;
      flag = false;
    }, ms);
    if(!flag) {
      func.apply(this, args);
      wrapper.count++;
      flag = true;
    }
  }
  return wrapper;
}
