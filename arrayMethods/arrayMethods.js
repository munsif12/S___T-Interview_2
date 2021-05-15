var empDetails = [
  { id: 1, address: "isb", name: "munsif", age: 22, prof: "mern" },
  { id: 2, address: "isb", name: "kazmii", age: 23, prof: "flutter" },
  { id: 3, address: "isb", name: "hamza", age: 24, prof: "mern" },
  { id: 4, address: "talagang", name: "arslan", age: 25, prof: "it" },
  { id: 5, address: "gb", name: "wahab", age: 21, prof: "student" },
];
var arr = [1, 2, 3, 33, 4, 6, 44, 55];

//using for
for (let i = 0; i < empDetails.length; i++) {
  console.log(empDetails[i].age * 2);
}
// using forEach foreach doesnot return us array like pervius method map,filter,find and reduces
empDetails.forEach((val) => console.log(val.age * 2));

// using map
const mapRes = empDetails.map((val) => val.age * 2);
console.log(mapRes);

//return employess who's ages are greate then 23 with map
const mapAge = empDetails.map((val) => {
  if (val.age > 23) return val; //this is not a good practice bcoz if values dont match it will return an empty object and we dont want that best option is to use filter method
});
console.log(mapAge);

//tryin map
const mapNew = empDetails.map(
  (val) => `${val.name}[id:${val.id} - age:${val.age}]`
);
console.log(mapNew);

//using filter
const filterRes = empDetails.filter((val) => val.age > 22);
console.log(filterRes);

//using find
const findRes = empDetails.find((val) => val.address === "gb");
console.log(findRes);

//to sort an array in descending order
console.log(arr.sort((a, b) => b - a));

//sum all values of array
const res = arr.reduce((initialVal, val) => {
  return (initialVal += val);
}, 0); //the third parameter of reduce function is the initalvalues
console.log("Sum = " + res);

//sort according to their ages
var sortedAges = empDetails.sort((a, b) => (a.age > b.age ? 1 : -1)); //both ways are corred -1 if value is false 1 if true use only (1,-1)
var sortedAges = empDetails.sort((a, b) => a.age - b.age); //the normal way of sorting an array
console.log(sortedAges);

//using all in one like method chaining
const allRes = empDetails
  .map((val) => val.age + 5) //[26,27,28,29,30]
  .filter((val) => val >= 27) //[27,28,29,30]
  .sort((a, b) => b - a) //[30,29,28,27]
  .reduce((initial, val) => (initial += val), 0); // 114 summing up all values
console.log(allRes);
