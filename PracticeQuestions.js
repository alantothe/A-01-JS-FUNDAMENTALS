
////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////


const x = 6

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.
function sumPlusX(a, b) {

  result = a + b + x

  return result ;
}
console.log('1)')
console.log(sumPlusX(2,3))

// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.
const arrowSumPlusX = (a, b) => a + b + x;
console.log('2)')
console.log(arrowSumPlusX(5,6))

// 3. Write a function that returns another function. (use arrow functions please)

const fullNameGenerator = (firstName) => {
  return (lastName) => {
    return `${firstName} ${lastName}`;
  }
}
console.log('3)')
console.log(fullNameGenerator('Jon')('Snow'))



// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.
console.log('4)')
console.log('because its inside the getFunction and everything in that block is avaliable to inner functions')

const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

// console.log(getFunction()(2))

// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.
console.log('5)')

const couldThrowError = () => {
  if (Math.ceil(Math.random() * 2) < 2) {
    throw new Error("Error was thrown");
  }

  return "success";
};

const callWithErrorHandler = (callback) => {
  try {
    const result = callback();
    console.log(result);
  } catch (error) {
    console.log("Sorry, there was an error.");
  }
};

callWithErrorHandler(couldThrowError)

////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////


const userData = [
  {
    id: '111',
    name: 'Peter',
    favorites: {
      food: ['burgers', 'pizza'],
      activites: ['basketball', "baseball"]
    },
  },
  {
    id: '222',
    name: 'John',
    favorites: {
      food: ['burgers', 'tacos'],
      activites: ['football', "golf"]
    },
  },
  {
    id: '333',
    name: 'Mary',
    favorites: {
      food: ['pizza', 'tacos', 'fried chicken'],
      activites: ['volleyball', "softball"]
    },
  }
];

// 6. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const favoriteFoods = userData.map(user => ({ id: user.id, favoriteFoods: user.favorites.food.length }));
console.log('6)')
console.log(favoriteFoods)


// 7. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

const pizzaLovers = userData.reduce((accumulator, currentValue) => {
  if (currentValue.favorites.food.includes('pizza')) {
    accumulator.push(currentValue.name);
  }
  return accumulator;
}, []);
console.log('7)')
console.log(pizzaLovers); // Output: ['Peter', 'Mary']






// 8. Show an an example of a switch statement being used
console.log('8)')
const dragon = "Meleys";
switch (dragon) {
  case "Meleys":
    console.log("Meleys is a fast dragon");
    break;
  case "Sunfyre":
    console.log("Sunfyre is gold");
    break;
  case "Caraxes":
    console.log("Prince Daemon Targaryens dragon");
    break;
  default:
    console.log("There are no dragons of that name");
}



////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////


const userPersonalData = {
  name: 'peter',
  age: '56',
  birthday: 'jan 1st',
 };
 const userGameData = {
  score: 4546,
  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
 };


// 9. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }

console.log('9)')
const userSpread = { ...userPersonalData, ...userGameData };

console.log(userSpread)




// 10. Make a copy of your new user object but override the birthday to december 31st

console.log('10)')

const newUser = { ...userSpread, birthday: "December 31st" };

console.log(newUser)


// 11. Use the spread operator to make a copy of the accomplishments array and store it in a new variable

console.log('11)')

const accomplishmentsCopy = [...userGameData.accomplishments];

console.log(accomplishmentsCopy)





//  12.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food
console.log('12)')
var user = {
  name: 'pete',
  age: '32',
  favoriteThings: {
    food: ['pizza', 'tacos', 'burgers', 'italian'],
    movies: [],
  },
 };

const food = [...user.favoriteThings.food]

console.log(food)





// 13. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //
console.log('13)')

const [first, second] = food;

console.log(first, second);





// 14. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food.
//    the food variable should have all the array items starting from the third one.
console.log('14)');

const data = ['peter', '34', 'apple', 'oranges', 'pizza', 'tacos'];

const [name, age, ...foods] = data;

console.log(name, age, foods);




// 15. use object destructuring to grab the following from the userInfo object:
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing
console.log('15)')
const userInfo = {
  name: 'Peter',
  favorites: {
    needs: {
      food:  ['burger', 'pizza', 'tacos', 'fried chicken', 'sushi'],
    },
    wants: {
      things: ['cars', 'jewelry'],
    },
  },
};

const {
  name: userName,
  favorites: {
    needs: { food: favoriteFood },
    wants: { things: [favoriteThing, secondfavoriteThing] },
  },
} = userInfo;

console.log(userName);
console.log(favoriteFood);
console.log(favoriteThing);
console.log(secondfavoriteThing);

var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
});


module.exports =  fetchData;


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
});


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 17. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
