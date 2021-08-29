// let catNames = require("../public/catNames.json");

// console.log(catNames.cats);

// const getCatAge = Math.floor(Math.random() * 5);
// const getCatNinjaLevel = Math.floor(Math.random() * 10);

// for (let i = 0; i < catNames.cats.length; i++) {
//   catNames = {
//     ...catNames.cats[i],
//     age: getCatAge,
//     ninjaLevel: getCatNinjaLevel,
//   };
//   console.log(catNames);
// }

// const catWithAgeNinjaLevel = [];

// const count = catWithAgeNinjaLevel.push(catNames, getCatAge, getCatNinjaLevel);
// console.log(count);
// console.log(catWithAgeNinjaLevel);

// const aa = catNames.cats.sort((a, b) => a.localeCompare(b));

// console.log(aa);

export default sortingCats = (a, b) => {
  const catName = a;
  const ninjaLevel = b;
  ninjaLevel.sort();
  catName.sort();
};
