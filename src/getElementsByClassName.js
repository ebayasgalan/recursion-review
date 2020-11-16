// If life was easy, we could just do things the easy way:

// var getElementsByClassName = function (className) {
//   console.log(document.getElementsByClassName(className));
// };

// getElementsByClassName('targetClassName');

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // create end result
  let endResult = [];
  var innerFunction = function(element) {
    // base case
    if (element.classList) {
      if (element.classList.contains(className)) {
        endResult.push(element);
      }
    }
    if (!!element.childNodes.length) {
      var childrenNodes = element.childNodes;
      // iterate over the children Nodes and call recursion
      childrenNodes.forEach(child => {
        innerFunction(child);
      });
    }
  };

  // return end result
  innerFunction(document.body);
  return endResult;
};
