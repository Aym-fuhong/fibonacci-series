'use strict';

function fibonacci_series(n) {
  var buf = [0,1];
      var res = null;
      if(n<2){
      	res = buf;
      }else{
      	for(var i=0;i<n-1;i++){
      		buf[i+2] = buf[i] + buf[i+1];
      	}
      	res = buf;
      }
      return res;
}

module.exports = fibonacci_series;
