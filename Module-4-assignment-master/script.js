var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim","jarod"];
for (let name in names) {
  var firstLetter =names[name].charAt(0);
  if (firstLetter==='j' || firstLetter==='J') {
      byeobj.speak(names[name]);
  } else {
      hellobj.speak(names[name]);
  }
}