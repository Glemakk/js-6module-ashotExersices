/*
--- Сортировка примитивов ---
1.Выполнить сортировку массива цен по убыванию и возрастанию.
*/

// -------------------

/* 
--- Сортировка строк ---
2. Выполнить сортировку массива названий мониторов в алфавитном и обратном алфавитном порядке.
*/

// const monitors = ["SAMSUNG", "LG", "ASUS", "DELL", "BENQ"];

// const ascendinigSort = monitors => monitors.sort((a, b) => a.localeCompare(b));
// const descendinigSort = monitors => monitors.sort((a, b) => b.localeCompare(a));
// console.log(ascendinigSort(monitors));
// console.log(descendinigSort(monitors));

// // -------------------

// /*
// --- Сортировка сложных типов ---
// 3. Выполнить сортировку массива объектов:
// a. по возрастанию и убыванию значения свойства price.
// b. по имени в алфавитном и обратном алфавитном порядке. 
// */

// const items = [
//   { name: "SAMSUNG", price: 15000 },
//   { name: "LG", price: 9000 },
//   { name: "ASUS", price: 27000 },
//   { name: "DELL", price: 12000 },
//   { name: "BENQ", price: 7000 }
// ];

// const ascItemsPrice = [...items].sort((a, b) => a.price - b.price);
// console.table(ascItemsPrice);
// const descItemsPrice = [...items].sort((a, b) => b.price - a.price);
// console.table(descItemsPrice);

// const ascItemsName = [...items].sort((a, b) => a.name.localeCompare(b.name));
// console.table(ascItemsName);

// const descItemsName = [...items].sort((a, b) => b.name.localeCompare(a.name));
// console.table(descItemsName);


// // -------------------

// /*
// --- Метод Array.prototype.flatMap ---
// 4.Собрать в allTopics массив всех предметов всех курсов используя flatMap.
// Используя Array.prototype.filter выполнить фильтрацию, 
// оставив в uniqueTopics только уникальные элементы.
// */



// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub Desktop", "GitHub"]
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "Terminal", "Git", "GitHub", "HTML", "CSS"]
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Functions",
//       "Conditions",
//       "Classes",
//       "DOM",
//       "Git",
//       "GitHub"
//     ]
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Promises",
//       "AJAX",
//       "Git",
//       "GitHub"
//     ]
//   }
// ];
// const allTopics = courses => courses.flatMap(course => course.topics);
// console.log(allTopics(courses));

// const uniqueTopics = allTopics => allTopics.filter((topic, index, array) => array.indexOf(topic) === index);
// console.log(uniqueTopics(allTopics(courses)));



// // -------------------

// /* 
// --- Чейнинг методов ---
// 5. Выполнить рефакторинг используя цепочку методов flatMap и filter.
// */
// const allUniqueTopics = courses => courses.flatMap(course => course.topics).filter((topic, index, self) => self.indexOf(topic) === index);
// console.log(allUniqueTopics(courses));


// -------------------

/* 
--- Метод Array.prototype.map ---
6. Используя функцию map назначить скидку 20% на фрукты в масиве, 
назначить id для каждого продукта
*/
// const fruits = [
//   { name: 'apple', price: 200 },
//   { name: 'orange', price: 230 },
//   { name: 'grapes', price: 320 },
// ];

// // const discounted = fruits.map(fruit =>  ({ name: fruit.name, price: fruit.price * 0.8 })
// // );

// // const discounted = fruits.map((fruit) => {
// //   return { name: fruit.name, price: fruit.price * 0.8 };
// // });
// const discounted = fruits.map((fruit, index) =>  (
//           {...fruit, id: index +1,  price: fruit.price*0.8})
//       );
// console.table(discounted);
// -------------------

/* 
--- Метод Array.prototype.reduce ---
7. Используя функцию reduce узнать общие годы практики в объекте workers
*/

// const workers = [
//   {
//     id: 10,
//     name: "Poe Dameron",
//     years: 14
//   },
//   {
//     id: 2,
//     name: "Temmin 'Snap' Wexley",
//     years: 30
//   },
//   {
//     id: 41,
//     name: "Tallissan Lintra",
//     years: 16
//   },
//   {
//     id: 99,
//     name: "Ello Asty",
//     years: 22
//   }
// ];

// const sumOfYears = workers.reduce((prevVal, year) => prevVal + year.years, 0);
// console.log(sumOfYears);

// const totalYears = workers.flatMap(worker => worker.years).reduce((prevVal, year) => prevVal + year);
// console.log(totalYears);



/*-----------доп задачки от Ашота----------------------*/
const users = [
  { name: "Игорь", sex: "male", age: 29 },
  { name: "Михаил", sex: "male", age: 21 },
  { name: "Ирина", sex: "female", age: 25 },
  { name: "Олег", sex: "male", age: 14 },
  { name: "Марина", sex: "female", age: 23 },
  { name: "Оксана", sex: "female", age: 17 },
  { name: "Алексей", sex: "male", age: 8 },
  { name: "Антон", sex: "male", age: 47 },
  { name: "Валерия", sex: "female", age: 50 },
  { name: "Екатерина", sex: "female", age: 12 },
  { name: "Вахтанг", sex: "female", age: 4 },
];

/* 
  1. В массиве users отфильтровать пользователей по возрасту так чтобы получить всех выше 18 лет.
     Найти самого младшего из них и в консоль написать сообщение: User самый молодой и ему/ей years лет
     !!!Важно понимать пол пользователя и определить в сообщении "ему" или "ей"
*/

// const filteredUsers = (ages, sex) => allAges.filter(age => {
//   return users.find(user => {
//     if (user.sex === 'male') {
//       return age.age >= 18;
//     }
//     user.sex === 'female' {
//       return age.age >= 18;

//     }
//   }
// });





// console.table(filteredUsers(users, 'male'));

// const filtered = users.filter(user => user.age >= 18);
// console.table(filtered);

// const ascAge = filtered.sort((a, b) => a.age - b.age);
// console.table(ascAge);

// const theSmallestUser = (ascAge) => ascAge.find(age => {
//   return age.sex === 'male'
//     ? `${age.name} самый молодой и ему ${age.age} лет`
//     : `${age.name} самая молодая и ей ${age.name} лет`;
// });




const theYoungestUserMsg = users => {
  const youngestUser = users
    .filter(user => user.age >= 18)
    .sort((a, b) => a.age - b.age)
    .find(user => user.sex);
  return youngestUser.sex === 'male'
    ? `${youngestUser.name} самый молодой и ему ${youngestUser.age}`
    : `${youngestUser.name} самая молодая и ей ${youngestUser.age}`;
};



console.log(theYoungestUserMsg(users));


// const theSmallestUser1 = switch(ascAge.sex) {
//   case 'male':
//   user.sex === 'male',
//     console.log(`${user.name} самый молодой и ему ${user.age} `);
//     break;
//   case 'female':
//   user.sex === 'female',
//   console.log(`${user.name} самая молодая и ей ${user.age} `);
//   break;
// };

// const theSmallestUser1 = (sex) => ascAge.find(user => {
  
//   if (user.sex === 'male') {
//     console.log(`${user.name} самый молодой и ему ${user.age} `);
//     return;
//   }
//   sex === 'female' 
//   console.log(`User самая молодая и ей years лет`);
//   return;
// }

// );
// console.log(theSmallestUser1);

// const theSmallestUser = (user, sex) => ascAge.find(function (user) {
//   if (user.age <= minAge) {
//     user.sex === "male";
//     return console.log(`User самая молодая и ей years лет`)
//   }
//   user.sex === "male";
//   return console.log(`User самый молодой и ему/ей years лет`)

// });
// console.log(theSmallestUser(ascAge, 'female'));

/* 
  2. В массиве users отфильтровать всех по полу, сначала female потом male 
*/


// const filteredFemale = users => users.filter(user => user.sex === 'female' 
// );
// console.table(filteredFemale(users));

// const filteredMale = users => users.filter(user => user.sex === 'male' 
// );
// console.table(filteredMale(users));

// const filteredSex = (users, sex) => users.filter(user => user.sex === sex );
// console.table(filteredSex(users, 'male'));



/* 
  3. В массиве users найти пользователя по имени Марина
*/

// const findName = (users, name) => users.find(user => user.name === name);
// console.log(findName(users, 'Марина'));

// const checkUserName = (users, name) => users.some(user => user.name === name);
// console.log(checkUserName(users, 'Марина'));

/* 
  4. Пробежаться по массиву users, если пользователь мужчина добавить 10 лет к возрасту, 
  если женщина снять 5 лет
  !!! Важно проверять что возраст не отрицательное число :)
*/

const ageSex = users => users.filter(user => user.age > 0).map(user => {
  if (user.sex === 'male') {
    user.age += 10;
    return user;
  } (user.sex === 'female') 
    return user.age -= 5
  } 
    
);
console.table(ageSex(users));


/*=============================РЕШЕНИЕ========================
// 1. В массиве users отфильтровать пользователей по возрасту так чтобы получить всех выше 18 лет.
//      Найти самого младшего из них и в консоль написать сообщение: User самый молодой и ему/ей years лет
//      !!!Важно понимать пол пользователя и определить в сообщении "ему" или "ей"
// */

// // const findJrUser = users => {
// //   const filteredUsers = users
// //     .filter(user => user.age >= 18)
// //     .sort((a, b) => a.age - b.age);

// //   const jrUser = filteredUsers[0];

// //   switch (jrUser.sex) {
// //     case 'male':
// //       console.log(`${jrUser.name} самый молодой и ему ${jrUser.age} лет`);
// //       break;

// //     case 'female':
// //       console.log(`${jrUser.name} самая молодая и ей ${jrUser.age} лет`);
// //       break;

// //     default:
// //       console.log(`${jrUser.name} самый молодой и ему/ей ${jrUser.age} лет`);
// //       break;
// //   }
// //   //   return jrUser.sex === 'male'
// //   //     ? `${jrUser.name} самый молодой и ему ${jrUser.age} лет`
// //   //     : `${jrUser.name} самый молодой и ей ${jrUser.age} лет`;
// // };

// // // findJrUser(users);

// // // =======================================================================

// // /* 
// //   2. В массиве users отфильтровать всех по полу, сначала female потом male 
// // */

// // const filterBySex = (users, sex) => {
// //   return users.filter(user => user.sex === sex);
// // };

// // // console.log(filterBySex(users, 'female'));
// // // console.log(filterBySex(users, 'male'));

// // // =======================================================================

// // /* 
// // 3. В массиве users найти пользователя по имени Марина
// // */

// // const findUserByName = (users, name) => {
// //   return users.find(user => user.name === name);
// // };

// // // console.log(findUserByName(users, 'Ирина'));

// // // =======================================================================

// // /* 
// // 4. Пробежаться по массиву users, если пользователь мужчина добавить 10 лет к возрасту, 
// // если женщина снять 5 лет
// // !!! Важно проверять что возраст не отрицательное число :)
// // */

// // const changeAge = users => {
// //   return users.map(user => {
// //     if (user.age >= 0 && user.sex === 'male') {
// //       return { name: user.name, sex: user.sex, age: user.age + 10 };
// //     } else if (user.age >= 0 && user.sex === 'female') {
// //       return { name: user.name, sex: user.sex, age: user.age - 5 };
// //     }
// //   });
// // };

// // // console.log('~ changeAge', changeAge(users));
// /*=======================================================================*/

// /*------------Вариант №2-------------
// /* 
//   1. В массиве users отфильтровать пользователей по возрасту так чтобы получить всех выше 18 лет.
//      Найти самого младшего из них и в консоль написать сообщение: User самый молодой и ему/ей years лет
//      !!!Важно понимать пол пользователя и определить в сообщении "ему" или "ей"
// */

const youngestUserMsg = (users) => {
  const youngestUser = users
    .filter((user) => user.age >= 18)
    .reduce((currUser, nexUser) =>
      currUser.age < nexUser.age ? currUser : nexUser
    );
  return youngestUser.sex === "male"
    ? `${youngestUser.name} самый молодой и ему ${youngestUser.age} лет`
    : `${youngestUser.name} самая молодая и ей ${youngestUser.age} лет`;
};
console.log(youngestUserMsg(users));

// /* 
//   2. В массиве users отфильтровать всех по полу, сначала female потом male 
// */
// const filteredUsersBySex = (users, sex) =>
//   users.filter((user) => user.sex === sex);
// // console.log(filteredUsersBySex(users, "male"));

// const filteredMaleUsers = (users) => users.filter(({ sex }) => sex === "male");
// // console.log(filteredMaleUsers(users));

// const filteredFemaleUsers = (users) =>
//   users.filter(({ sex }) => sex === "female");
// // console.log(filteredFemaleUsers(users));

// /* 
//   3. В массиве users найти пользователя по имени Марина
// */
// const findUserByName = (users, name) =>
//   users.find((user) => user.name === name);
// // console.log(findUserByName(users, "Марина"));

// const checkUserByName = (users, name) =>
//   users.some((user) => user.name === name);
// // console.log(checkUserByName(users, "Марина"));

// /* 
//   4. Пробежаться по массиву users, если пользователь мужчина добавить 10 лет к возрасту, 
//   если женщина снять 5 лет
//   !!! Важно проверять что возраст не отрицательное число :)
// */

// const changeUserAge = (users) => {
//   return users.map((user) => {
//     if (user.sex === "male" && user.age > 0) {
//       user.age = user.age + 10;
//       return user;
//     }
//     if (user.sex === "female" && user.age > 0) {
//       user.age = user.age - 5;
//       return user;
//     }
//   });
// };
// // console.log(changeUserAge(users));

const changeUsersAge = (users) => {
  return users
    .filter((user) => user.age > 0)
    .map((user) => {
      if (user.sex === "male") {
        user.age = user.age + 10;
        return user;
      }
      user.age = user.age - 5;
      return user;
    });
};
console.table(changeUsersAge(users));