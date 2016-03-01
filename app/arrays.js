exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum : function(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  },

  remove : function(arr, item) {
    var copy = arr.slice();
    for (var i = copy.length-1; i >= 0; i--) {
      if (copy[i] === item) {
        copy.splice(i, 1);
      }
    }
    return copy;
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = arr.length-1; i >= 0; i--) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    for (var i = 0; i < arr2.length; i++) {
      arr1.push(arr2[i]);
    }
    return arr1;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates : function(arr) {
    var dupes = [];
    var sorted = arr.sort();
    for (var i = 0; i < sorted.length; i++) {
      if (sorted[i] === sorted[i+1] && dupes.indexOf(sorted[i]) === -1) {
        dupes.push(sorted[i]);
      }
    }
    return dupes;
  },

  square : function(arr) {
    return arr.map(function(x) {
      return x*x;
    });
  },

  findAllOccurrences : function(arr, target) {
    var occurrences = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        occurrences.push(i);
      }
    }
    return occurrences;
  }
};
