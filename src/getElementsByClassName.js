// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // create end result
  let endResult = [];
  var innerFunction = function(element) {
    // check to see if the element has a classList
    if (element.classList) {
      if (element.classList.contains(className)) {
        endResult.push(element);
      }
    }
    if
  };

  // return end result
  innerFunction(document.body);
  return endResult;
};
