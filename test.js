(function(){

  function fib(n){
      if(n <= 1) {
            return n;
          }
     return fib(n - 1) + fib(n - 2);
  }
  global.x = fib(23);
})();
