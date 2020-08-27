(function (window){
  var speakWord = "Hello";
  var hell={};
  hell.speak=function(name) {
      console.log(speakWord + " " + name);
  }
  window.hellobj=hell;
})(window);

