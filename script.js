//https://edabit.com/user/7mRtS6mm92SaRPJuq


function getAbsSum(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      sum = sum - arr[i];} 
      else {
      sum = sum + arr[i];}}
  console.log(sum);
  return sum;}
var tab = [-3, -4, -10, -2, -3];
var x = getAbsSum(tab);
console.log(x);



function inkLevels(inks) {
    if (inks.yellow <= inks.magenta && inks.yellow <= inks.cyan) {
        minInkLevel = "yellow";}
else if (inks.magenta <= inks.yellow 
        && inks.magenta <= inks.cyan) {
    minInkLevel = "magenta";}
else { minInkLevel = "cyan";}
    return minInkLevel;}
var Level = { cyan: 1, magenta: 12, yellow: 10 };
var y = inkLevels(Level);
console.log(y);




function getBudgets(arr) {
    let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum+ arr[i].budget;}
  return sum;}
console.log(getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]))



  function objectToArray(obj) {
  var keys = Object.keys(obj);
  var values = Object.values(obj);  
  var R =[]
    for (var i = 0; i < keys.length; i++) {
    R.push([keys[i], values[i]]);}
  return R;}
console.log(objectToArray({
    D: 1,
    B: 2,
    C: 3}))



    function afterNYears(names, n) {
        if (n >= 0) {
        for (let person in names) {
          names[person] =  names[person]+ n;} } 
      else {for (let person in names) {
          names[person] = names[person] - n * 1;} }
      return names;}
    console.log(afterNYears({
        "Joel" : 32,
        "Fred" : 44,
        "Reginald" : 65,
        "Susan" : 33,
        "Julian" : 13}, 1))
        const GUEST_LIST = {
            Randy: "Germany",
            Karla: "France",
            Wendy: "Japan",
            Norman: "England",
            Sam: "Argentina"}
        


        function greeting(name) {
              if (GUEST_LIST[name] != undefined) {
            return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}`} 
              else {
            return "Hi! I'm a guest";}}
console.log(greeting("Randy"))







