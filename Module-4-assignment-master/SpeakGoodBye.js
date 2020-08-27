(function (window){
  var speakWord = "Good Bye";
  var hell={};
  hell.speak=function(name) {
      console.log(speakWord + " " + name);
  }
  window.byeobj=hell;
})(window);