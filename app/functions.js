exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction : function(str) {
    return function(str2) {
      return str +', ' + str2;
    };
  },

  makeClosures : function(arr, fn) {
    var newArr = [];
    arr.forEach(function(item) {
      newArr.push(fn.bind(this, item));
    });
    return newArr;
  },

  partial : function(fn, str1, str2) {
    return fn.bind(this, str1, str2);
  },

  useArguments : function() {
    var argsArray = Array.prototype.slice.call(arguments);
    return argsArray.reduce(function(a, b) {
      return a + b;
    });
  },

  callIt : function(fn) {
    var argsArray = Array.prototype.slice.call(arguments).slice(1);
    return fn.apply(this, argsArray);
  },

  partialUsingArguments : function(fn) {
    
  },

  curryIt : function(fn) {

  }
};
