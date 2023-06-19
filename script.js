// const words = 'hellou';

// if (words[words.length - 1] === 'o') {
//   console.log(words[words.length - 2]);
// } else {
//   console.log(words[words.length - 1]);
// }

// const words1 = 'hello';
// const words2 = 'hello';

// if (words1[0] === words2[0]) {
//   console.log('Перший символ співпадає');
// } else {
//   console.log('Перший символ не співпадає');
// }

// const chislo = 3;

// if (chislo % 2) {
//   console.log('Число не парне');
// } else {
//   console.log('Число парне');
// }

// const stroka = 'hello';

// console.log(stroka[stroka.length - 1]);

// const stroka = "hello";

// console.log(stroka.length);

// const chislo = 7;

// if (chislo < 0) {
//   console.log('Число негативне');
// } else {
//   console.log('Число позитивне');
// }

// const vehicles = [
//   {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: 'Honda',
//     model: 'Accord',
//     type: 'sedan',
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: 'Mazda',
//     model: 'Mazda 6',
//     type: 'sedan',
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: 'Mazda',
//     model: 'CX-9',
//     type: 'suv',
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: 'Toyota',
//     model: '4Runner',
//     type: 'suv',
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: 'Toyota',
//     model: 'Sequoia',
//     type: 'suv',
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: 'Toyota',
//     model: 'Tacoma',
//     type: 'truck',
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'F-150',
//     type: 'truck',
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'Fusion',
//     type: 'sedan',
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

// const foo = (cars, amount) => cars.filter(car => car.amount > amount);

// console.log(foo(vehicles, 15));

// const models = vehicles.map(({ model }) => model);

// console.log(models);
//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль

// makeProduct(nameT, price, callback){
//   const product = {
//     nameT,
//     price,
//     id: Date.now(),
//   };
//   callback(product);
// }

// showProduct(product){
//   console.log(product);
// }

// makeProduct("IPhone", 35000, showProduct);

//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// const bookShelf = {};

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// // Пройдемо по всіх елементах колекції і додамо значення властивості tags
// // до акумулятора, початкове значення якого вкажемо порожнім масивом [].
// // На кожній ітерації пушимо в акумулятор усі елементи tweet.tags і повертаємо його.
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// // Мабуть, збирання тегів - не одиночна операція, тому напишемо функцію
// // для збирання тегів з колекції
// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));

// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);
// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total);

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// console.log(colorPickerOptions.findIndex(option => option.label === 'blue')); // 2
// console.log(colorPickerOptions.findIndex(option => option.label === 'pink')); // 3
// console.log(colorPickerOptions.findIndex(option => option.label === 'white')); //-1

// const students = [
//   { name: 'Манго', courses: ['математика', 'фізика'] },
//   { name: 'Полі', courses: ['інформатика', 'математика'] },
//   { name: 'Ківі', courses: ['фізика', 'біологія'] },
// ];

// const allCourses = students.flatMap(student => student.courses);

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );

// console.log(uniqueCourses);

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// // Оригінальний масив не змінився
// console.log(values);

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// console.log(students.map(student => student.courses));
// // [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']]

// console.log(students.flatMap(student => student.courses));

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Полі', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Ківі', score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names);

// const planets = ['Земля', 'Марс', 'Венера', 'Юпітер'];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПІТЕР']

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпітер']

// // Оригінальний масив не змінився
// console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпітер']

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 1);
// console.log(filteredNumbers); // [4, 5]

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage);

// const numbers = [5, 10, 15, 20, 25];

// // Оголошення функції
// numbers.forEach((number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// const add = (...args) => {
//   return args;
// };

// console.log(add(4, 9, 11));

// class Storage {
//   costructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     this.items = newItem;
//   }

//   removeItem(itemToRemove) {
//     const productIndex = this.items.indexOf(itemToRemove);
//     this.items.splice(productIndex, 1);
//   }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// const person = { name: 'Mango' };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 18));
// console.log(sayHi.bind(person, 18));

// const obj = {
//   name: 'Object name',
//   email: 'object@email.com'
// }
//
// const obj1 = Object.create(obj);
// //console.log('name' in obj1);
// //Object.keys(obj1).forEach((key) => console.log(key));
// // for (const key in obj1) {
// //   console.log(key);
// // }
//
// const obj2 = Object.create(obj);
// obj2.description = 'I\'m object 2';
// // console.log(obj2.email);
//
// const obj3 = Object.create(obj2);
// console.log(obj3.description);
// console.log(obj3.name);
// console.log(obj3.email);

// class User {
//   #permissions;
//   static userDescriptions = {
//     Admin: 'You can view data!',
//     Owner: 'You can change data!',
//     Default: 'You can view and add data!'
//   };
//   static userCounter = 0;
//   constructor({ name, email, actions, desc }) {
//     this.name = name;
//     this.email = email;
//     this.#permissions = actions;
//     this.desc = desc;
//     User.userCounter += 1;
//   }
//   sayHi(){
//     return `Hello ${this.name}!`;
//   }
//
//   get permissions() {
//     if (this.#checkPermission('view')) {
//       return this.#permissions;
//     } else {
//       return 'You don\'t have access!';
//     }
//   }
//
//   set permissions(value) {
//     if (this.#checkPermission('edit')) {
//       this.#permissions = value;
//     } else {
//       return 'You don\'t have access!';
//     }
//   }
//
//   #checkPermission(permission) {
//     return this.#permissions.includes(permission);
//   }
// }
//console.log(User.userDescriptions.Owner);

// const user1 = new User({
//   name: 'User-1',
//   email: 'user-1@email.com',
//   actions: ['add', 'edit', 'view'],
//   desc: User.userDescriptions.Owner
// });
//
// console.log(user1);

//console.log(user1.sayHi());
//console.log(user1.permissions);
// user1.permissions = ['add', 'edit', 'remove', 'view'];
// console.log(user1.permissions);
// console.log(user1);
// console.log(User.userCounter);

// const user2 = new User({
//   name: 'User-2',
//   email: 'user-2@email.com',
//   actions: ['add', 'edit', 'view'],
//   desc: User.userDescriptions.Admin
// })
// console.log(User.userCounter);
// console.log(user2.permissions);

//const arr = [1, 2, 3];
//console.log(arr);

//console.log(obj);

// # Модуль 5. Заняття 10. Прототипи та класи
//
// ## Example 1 - Блогер
//
// Напиши клас `Blogger` для створення об'єкта блогера з наступними властивостями:
//
// - `email` - пошта, рядок
// - `age` - вік, число
// - `numberOfPosts` - кількість постів, число
// - `topics` - масив тем на яких спеціалізується блогер
//
// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// class Blogger {
//   constructor({email, age, numberOfPosts, topics}) {
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }
//
//   getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }
//
//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
//
//   // get numberOfPosts() {
//   //   return this.#numberOfPosts;
//   // }
// }
//
// Додай метод `getInfo()`, який, повертає рядок:
//   `User ${пошта} is ${вік} years old and has ${кількість постів} posts`.
//
//     Додай метод `updatePostCount(value)`, який у параметрі `value` приймає
// кількість постів, які потрібно додати користувачеві.
//
// const mango = new Blogger({
//   email: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts
//
// const poly = new Blogger({
//   email: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts
//
// ## Example 2 - Сховище
//
// Напиши клас `Storage` який створює об'єкти для керування складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме
// його властивість `items`.
//
// class Storage {
//   constructor(productList) {
//     this.items = productList;
//   }
//
//   getItems() {
//     return this.items;
//   }
//
//   addItem(item) {
//     if (!this.items.includes(item)) {
//       this.items.push(item);
//     } else {
//       console.log('Product already exist!');
//     }
//   }
//
//   removeItem(item) {
//     if (this.items.includes(item)) {
//       const productIndex = this.items.indexOf(item);
//       this.items.splice(productIndex, 1);
//       // this.items.splice(this.items.indexOf(item), 1);
//       //!!~
//     } else {
//       console.log('Product not found!');
//     }
//   }
// }
//   Додай методи класу:
//
//   - `getItems()` - повертає масив товарів.
// - `addItem(item)` - отримує новий товар і додає його до поточних.
// - `removeItem(item)` - отримує товар і, якщо він є, видаляє його з поточних.
//
// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);
//
// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]
//
// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]
// //
// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
//
// ## Example 3 - User
//
// Напиши клас `User` який створює об'єкт із властивостями `login` та `email`.
// Оголоси приватні властивості `#login` та `#email`, доступ до яких зроби через
// гетер та сетер `login` та `email`.
//
// class User {
//   #login;
//   #email;
//
//   constructor({login, email}) {
//     // some code
//   }
//
//   get email() {
//     //
//   }
//   set email() {
//     //
//   }
//
//   get login() {
//     //
//   }
//   set login() {
//     //
//   }
// }
// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });
//
// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge
//
// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });
//
// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie
//
// ## Example 4 - Нотатки
//
// Напиши клас `Notes` який керує колекцією нотаток у властивості `items`.
//   Замітка це об'єкт із властивостями `text` та `priority`. Додай класу статичну
// властивість `Priority`, у якому зберігатиметься об'єкт із пріоритетами.
//
// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high'
//   };
//   constructor(noteData) {
//     this.items = noteData;
//   }
// }
//
// Додай методи `addNote(note)`, `removeNote(text)` та
//   `updatePriority(text, newPriority)`.
//
// const myNotes = new Notes([]);
//
// myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);
//
// myNotes.addNote({
//   text: 'Моя друга замітка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);
//
// myNotes.removeNote('Моя перша замітка');
// console.log(myNotes.items);
//
// myNotes.updatePriority('Моя друга замітка', Notes.Priority.HIGH);
// console.log(myNotes.items);
//
// ## Example 5 - Toggle
//
// Напишіть клас `Toggle` який приймає об'єкт налаштувань `{isOpen: boolean}` і
// оголошує одну властивість `on` - стан вкл/викл (true/false). За замовчуванням
// значення властивості `on` повинно бути `false`.

// class Toggle {
//   on = false;
//
//   constructor(settingsObj) {
//     if (settingsObj) {
//       this.on = settingsObj.isOpen
//     }
//   }
// }
//
// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');
//
// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');

// const object = {
//   message: 'Hello, World',
//   getMessage() {
//     const message = 'Hello, Earth';
//     return this.message;
//   },
// };
// console.log(object.getMessage());

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: [
//       'Jacklyn Lucas',
//       'Linda Chapman',
//       'Adrian Cross',
//       'Solomon Fokes',
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// // Change code below this line
// const getTotalBalanceByGender = (users, gender) => {
//   const useArray = [...users]
//     .filter(user => user.gender === gender)
//     .map(user => user.balance)
//     .reduce((acc, number) => (acc += number), 0);

//   return useArray;
// };

// console.log(getTotalBalanceByGender(users, 'female'));

// Change code above this line

// const arr = [2, 4, 6];
// const result = arr.filter(el => el * 2);
// console.log(result);
// // Напиши функцію, яка приймає рядок text, та повертає масив усіх великих літер, які є в text
// // в такому ж порядку.
// getCapitals('Ukraine Everywhere') // ['U', 'E']
// getCapitals('UkraiNe EveRywherE') // ['U', 'N', 'E', 'R', 'E']
// getCapitals("1234M5678A9") // ['M', 'A']
// // Напиши скрипт, який для обєкта user, послідовно:
// // - добавить поле mood зі значеням 'happy'.
// // - замінить hobby на 'skydiving'.
// // - замінить значення "premium" на false.
// // - виведе вміст обєкта users в форматі ключ:значение використовуючи Object.keys() и for...of.

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
// // У нас есть объект, в котором храняться зарплаты команды.
// // Напишите код для сумирования всех зарплат и сохраните его результат в переменной sum.
// // Если объект salaries пуст, то результат должен быть 0.

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// // Напишите ф-цию calcTotalPrice(stones, stonesName), которая принимает массив объектов и
// // строку с названием камня. Функция считает и возвращает общую стоимость камней
// // с таким именем, ценой и количеством из объекта

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];
// // Создайте объект calculator с тремя методами:
// // - read(a, b) - принимает два аргумента и сохраняет их как свойства объекта.
// // - sum() - возвращает сумму сохраненных значений.
// // - mult() - переумножает сохраненные значения и возвращает результат.

// const calculator = {
//   read(a, b) {},
//   sum() {},
//   mult() {},
// };
// // Об'єднати два обєкти між собою:
//
// const users = [
//   { name: "Victor", score: 20 },
//   { name: "Mario", score: 10 },
//   { name: "Tatiana", score: 30 },
// ];

// const moreUsers = [
//   { name: "Laura", score: 50 },
//   { name: "Jasmine", score: 70 },
//   { name: "Peter", score: 60 },
// ];

// console.log(allUsers); // [{name: "Victor", score: 20}, {name: "Mario", score: 10}, {name: "Tatiana", score: 30}, {name: "Laura", score: 50}, {name: "Jasmine", score: 70}, {name: "Peter", score: 60}]

// +++++++++++++++++++++++++++ Extra
/**
Создать функцию, которая в качестве аргумента может принять строку, числа, null или undefined и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:
 */

// getCodeStringFromText("hello"); // “104 101 108 108 111”

// // Напиши функцію, яка приймає рядок text, та повертає масив усіх великих літер, які є в text
// // в такому ж порядку.
// getCapitals('Ukraine Everywhere') // ['U', 'E']
// getCapitals('UkraiNe EveRywherE') // ['U', 'N', 'E', 'R', 'E']
// getCapitals("1234M5678A9") // ['M', 'A']
// to  Everyone
// // Напиши функцію, яка приймає рядок text, та повертає масив усіх великих літер, які є в text
// // в такому ж порядку.
// getCapitals('Ukraine Everywhere') // ['U', 'E']
// getCapitals('UkraiNe EveRywherE') // ['U', 'N', 'E', 'R', 'E']
// getCapitals("1234M5678A9") // ['M', 'A']
// // Напиши скрипт, який для обєкта user, послідовно:
// // - добавить поле mood зі значеням 'happy'.
// // - замінить hobby на 'skydiving'.
// // - замінить значення "premium" на false.
// // - виведе вміст обєкта users в форматі ключ:значение використовуючи Object.keys() и for...of.

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
// // У нас есть объект, в котором храняться зарплаты команды.
// // Напишите код для сумирования всех зарплат и сохраните его результат в переменной sum.
// // Если объект salaries пуст, то результат должен быть 0.

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// // Напишите ф-цию calcTotalPrice(stones, stonesName), которая принимает массив объектов и
// // строку с названием камня. Функция считает и возвращает общую стоимость камней
// // с таким именем, ценой и количеством из объекта

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

// Реалізуй функцію, яка приймає тип String або Number і повертає масив з протилежним типом даних:
//
// function convert(...param) {
//   newArray = [];
//   for (let i = 0; i < param.length; i += 1) {
//     if (typeof param[i] === 'string') {
//       newArray.push(Number(param[i]));
//     } else {
//       newArray.push(String(param[i]));
//     }
//   }
//   return newArray;
// }

// console.log(convert('1', 2, 3, '4')); // [1, '2', '3', 4]

// // Напиши функцію, яка повертає останній символ стрічки

// function getLastCharacter(text) {
//   return text[text.length - 1];
// }

// console.log(getLastCharacter('321433530')); // 0

// Реалізуйте функцію, яка розгладить масив:
// const arr = [1, 2, [3, 4], [5, 6], 7];

// function foo(arr1) {
//   const newArray = [];
//   for (const element of arr1) {
//     if (Array.isArray(element)) {
//       newArray.push(...element);
//     } else {
//       newArray.push(element);
//     }
//   }
//   return newArray;
// }

// //console.log(newArray); // [1, 2, 3, 4, 5, 6, 7]
// console.log(foo(arr)); // [1, 2, 3, 4, 5, 6, 7]

//Реалізуйте result
//const a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// //const result = [...a.slice(0, 3), ...a.slice(0, 3), ...a.slice(-2)];
// const result = [...a];
// result.splice(3, 3, ...result.slice(0,3));

// console.log(result); // ["a", "b", "c", "a", "b", "c", "g", "h"]

// Реалізуйте result
// const a = ['a', 'b', 'c'];
// const b = [1, [2, 3]];
// const c = 0;

// const result = a.concat(c, ...b);

// console.log(result); // ['a', 'b', 'c', 0, 1, 2, 3]

// console.log(
//   (function (x) {
//     delete x;
//     return x;
//   })(1)
// );

//console.log(123);

// const person = {
//   firstName: "John",
//   age: 30,
// };
// const { firstName: personName } = person;
// console.log(personName);

//Objects
// const user = {
//   email: "sdfghsdjfh",
//   age: 20,
// };
// //
// // // присвоєння змінної userEmail за допомогою деструктуризації
// const { email } = user;
// // // присвоєння змінної userEmail звичайним методом
// // // const userEmail = user.email;
// console.log(email);

// function foo(obj = {}) {
//   const { username } = obj;
//   console.log(username);
// }

// foo();

// function foo({ username } = {}) {
//   console.log(username);
// }

// const { username } = {};
// console.log(username);

// //foo();

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {
//   today: {
//     low: todayLow,
//     high: todayHigh,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: tomorrowLow,
//     high: tomorrowHigh,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;
// console.log(
//   todayLow,
//   todayHigh,
//   todayIcon,
//   tomorrowLow,
//   tomorrowHigh,
//   tomorrowIcon
// );
// console.table(forecast);

// # Модуль 3 Заняття 6. Деструктуризація та rest/spread
//
// ## Example 1 - Деструктуризація
//
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
// незалежних аргументів.
//
// const params = {
//   weight: 10,
//   height: 20,
// };

// calcBMI(params);
// function calcBMI({ weight, height }) {
//   console.log(params);
//   const { weight, height } = params;
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // // Раніше було так
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   })
// );
//
// ## Example 2 - Деструктуризація
//
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
// незалежних аргументів.
//
// function printContactsInfo(props) {
//   const { names, phones } = props;
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // Раніше було так
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });
//
//
// ## Example 3 - Глибока деструктуризація
//
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
// незалежних аргументів.
//
// function getBotReport(props) {
//   const {
//     companyName,
//     bots: { repair: repairBots, defence: defenceBots },
//   } = props;
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }
// //
// // Раніше було так
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Очікується
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   })
// );

// "Cyberdyne Systems has 200 bots in stock"
//
// ## Example 4 - Деструктуризація
//
// Напиши функцію так, щоб вона приймала об'єкт параметрів із властивостями
//   `companyName` та `stock` та виводила репорт про кількість товарів на складі будь-якої
// компанії.
//

// function getStockReport(props) {
//   const { companyName, stock } = props;
//   let sum = 0;
//   for (const stockValue of Object.values(stock)) {
//     // масив чисел
//     sum += stockValue;
//   }
//   return `${companyName} has ${sum} items in stock!`;
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   })
// ); // "Belacci has 35 item in stock"
//
// ## Example 5 - Операція spread
//
// Доповни функцію `createContact(partialContact)` так, щоб вона повертала новий
// об'єкт контакту з доданими властивостями `id` та `createdAt`, а також `list` зі
// значенням "default" якщо в `partialContact` немає такої властивості.
//

// let contactId = 0;
// function createContact(props) {
//   contactId += 1;

//   return {
//     list: 'default',
//     ...props,
//     id: contactId,
//     createdAt: Date.now(),
//   };
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );
//
// ## Example 6 - Операція rest
//
// Напиши функцію `transformUsername(user)` так, щоб вона повертала новий об'єкт із властивістю
//   `fullName`, замість `firstName` та `lastName`.
//

// function transformUsername(user) {
//   const { firstName, lastName, ...otherParams } = user;
//   console.log('Other Params: ', otherParams);
//   const fullName = `${firstName} ${lastName}`;

//   return {
//     fullName,
//     ...otherParams,
//   };
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   })
// );

// const arr1 = [1, 2, 3, 4];
// const arr2 = [5, 6, 7, 8];
// console.log([...arr1, 333, ...arr2]);

// const user = {
//   name: 'Dima',
//   // метод обʼєкту
//   sayHello() {
//     alert(this.name);
//   }
// }

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(-2));
// console.log(animals);

//метод масиву push()
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// animals.push('dog', 'cat');
// console.log(animals);

// let arr = [];
// console.log(fillArray(2, 10));
// function fillArray(min, max) {
//   for (let i = min; i <= max; i += 2) {
//     // console.log(i);
//     // console.log(arr.push(i));
//     // arr.push(i) повертає довжину масиву
//     // return припиняє виконання функції (і циклу відповідно) та повертає значення
//     // return arr.push(i);
//     // arr.push(i);
//     // console.log(arr);
//     // return arr;
//   }
// }

// # Модуль 3. Заняття 1. Об'єкти
//
// ## Example 1 - Основи об'єктів
//
// Напиши скрипт, який для об'єкта `user`, послідовно:
//
// - додає поле `mood` зі значенням `'happy'`
// - замінює значення `hobby` на `'skydiving'`
// - замінює значення `premium` на `false`
// - виводить вміст об'єкта `user` у форматі `ключ:значення` використовуючи
//   `Object.keys()` та `for...of`
//
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// // методи виводу ключів та значень властивостей обʼєкту
// console.log(user);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// user.mood = 'happy';
// // console.log(user);
//
// user.hobby = 'skydiving';
// user.premium = false;
// console.log(user);
// delete user.hobby;
// console.log(user);

// const keysArray = Object.keys(user);
// console.log(keysArray);

// for (const key of keysArray) {
//   console.log(`${key}: ${user[key]}`);
// }
//
// ## Example 2 - метод Object.values()
//
// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
// підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно
// вийти 390. Якщо об'єкт `salaries` порожній, то результат має бути 0.
//
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// function getSalarySum(companySalaries) {
//   const valuesArr = Object.values(companySalaries);
//   // if (!valuesArr.length) return 0;
//   let sum = 0;

//   for (const value of valuesArr) {
//     sum += value;
//   }

//   return sum;
// }

// console.log(getSalarySum(salaries));

//
// ## Example 3 - Масив об'єктів
//
// Напишіть функцію `calcTotalPrice(stones, stoneName)`, яка приймає масив
// об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість
// каміння з таким ім'ям, ціною та кількістю з об'єкта
//
// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stonesArr, stoneName) {
//   for (const stone of stonesArr) {
//     console.log(stone);

//     if (stone.hasOwnProperty('name') && stone.name === stoneName) {
//       console.log('Target stone price: ', stone.price);
//       return stone.price * stone.quantity;
//     }
//   }
// }

// console.log(calcTotalPrice(stones, 'Щебінь'));

//
// ## Example 4 - Комплексні завдання
//
// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт `account`
// в якому необхідно реалізувати методи для роботи з балансом та історією
// транзакцій.
//
// /*
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// let idCounter = 0;
//
// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */
//
// const account = {
//   // Поточний баланс рахунку
//   balance: 0,
//
//   // Історія транзакцій
//   transactions: [],
//
//   /*
//    * Метод створює та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції.
//    */
//   createTransaction(amount, type) {
//     idCounter += 1;
//
//     // const transactionObj = {
//     //   id: idCounter,
//     //   type,
//     //   amount,
//     // }
//     // return transactionObj;
//
//     return {
//       id: idCounter,
//       type,
//       amount,
//     }
//   },
//
//   /*
//    * Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій
//    */
//   deposit(amount) {
//     // console.log(this);
//     this.balance += amount;
//     const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(newTransaction);
//   },
//
//   /*
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       alert('Недостатньо коштів');
//       return;
//     }
//
//     this.balance -= amount;
//     const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(newTransaction);
//   },
//
//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance;
//   },
//
//   /*
//    * Метод шукає та повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//   },
//
//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {
//     let total = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         total += transaction.amount;
//       }
//     }
//     return total;
//   },
// };

// account.deposit(100);
// account.deposit(1000);
// account.withdraw(500);
//
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(2));
//
// // account.withdraw(1000);
//
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
//
// console.log(account.transactions);

//End Objects

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   // Об'єкт книги
//   console.log(book);
//   // Назва
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }

// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(bookNames); // ["The Last Kingdom", "На березі спокійних вод", "Сон смішної людини"]

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating); // 8.2

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book.genres;
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   const newArray = firstArray.concat(secondArray);
//   const lengthArray = newArray.length;
//   if (lengthArray > maxLength) {
//     return newArray.slice(0, maxLength);
//   }
//   return newArray;
//   // Change code above this line
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));
//console.log(makeArray());

// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

//В циклі for використовувалися методи includes і push

// function getCommonElements(array1, array2) {
//   const duplicates = [];

//   for (let i = 0; i < array1.length; i += 1) {
//     const element = array1[i];
//     const hasElement = array2.includes(element);
//     if (hasElement) {
//       duplicates.push(element);
//     }
//   }
//   return duplicates;
//   // Change code above this line
// }

// function getCommonElements(array1, array2) {
//   const arr = array1.concat(array2);
//   const duplicates = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     for (let j = i + 1; j < arr.length; j += 1) {
//       if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
//         duplicates.push(arr[i]);
//       }
//     }
//   }
//   return duplicates;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([1, 2, 3], [2, 4]));
//console.log(getCommonElements([], []));

// let arr = [];

// console.log(fillArray(2, 10));

// function fillArray(min, max) {
//     for (let i = min; i <= max; i += 2) {
//         return arr.push(i);
//     }
// }

// // Коли не потрібно робити return
// let a = 10;
// function foo(b) {
//   if (b > 10) {
//     a = b;
//   }
// }

// foo(20);
// console.log(a);

// Функція, яка не має return
// const foo = function () {
//   const a = 5;
// }
// console.log(foo());

// Різні варіанти оголошення функції
// foo(5); // => так не працює. Виклик функції має бути після оголошення змінної
// const foo = function (a) {
//   console.log(a);
// }

// foo(5); // => Так працює. Ініціалізація відбувається через ключове слово function
// function foo(a) {
//   console.log(a)
// }

// # Модуль 2. Заняття 4. Функції
//
// ## Example 1 - Індекс маси тіла
//
// Напиши функцію `calcBMI(weight, height)` яка розраховує та повертає
// індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на
// квадрат висоти людини в метрах.
//
//   Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді
//   `24.7` або `24,7`, тобто як роздільник дробової частини
// може бути кома.
//
//   Індекс маси тіла необхідно округлити до однієї цифри після коми;

// function calcBMI(weight, height) {
//   const newWeight = Number(weight.replace(",", "."));
//   const newHeight = Number(height.replace(",", "."));

//   return (newWeight / Math.pow(newHeight, 2)).toFixed(1);
// }

// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi); // 28.8
//
// ## Example 2 - Найменше з чисел
//
// Напиши функцію `min(a,b)`, яка повертає найменше з чисел `a` та `b`.
//
// function min(a, b) {
//   return Math.min(a, b);
// }
// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1
//
// ## Example 3 - Площа прямокутника
//
// Напиши функцію `getRectArea(dimensions)` для обчислення площі прямокутника
// зі сторонами, значення яких будуть передані до параметра `dimensions` у вигляді
// рядка. Значення гарантовано розділені пробілом.
//
// function getRectArea(dimensions) {
//   const valuesArr = dimensions.split(" ");
//   const width = Number(valuesArr[0]);
//   const height = Number(valuesArr[1]);

//   return width * height;
// }
// console.log(getRectArea("8 11"));

// function getRectArea(dimensions) {
//   if (!dimensions) {
//     return 'Error';
//   }
//
//   const valuesArr = dimensions.split(' ');
//   const width = Number(valuesArr[0]);
//   const height = Number(valuesArr[1]);
//
//   return width * height;
// }
// console.log(getRectArea('8 11'));

//
// ## Example 4 - Логування елементів
//
// Напиши функцію `logItems(items)`, яка отримує масив та використовує цикл
//   `for`, який для кожного елемента масиву буде виводити в консоль повідомлення у
// форматі `<номер елемента> - <значення елемента>`. Нумерація елементів повинна
// починатися з `1`.
//
//   Наприклад для першого елемента масиву `['Mango', 'Poly', 'Ajax']` з індексом `0`
// буде виведено `1 - Mango`, а для індексу 2 виведе `3 - Ajax`.
// function logItems(itemsArr) {
//   for (let i = 0; i < itemsArr.length; i += 1) {
//     console.log(`Element ${i + 1}: `, itemsArr[i]);
//   }
// }
// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
//
// ## Example 5 - Логування контактів
//
// Напиши функцію `printContactsInfo(names, phones)` яка виводить у консоль ім'я
// та телефонний номер користувача. У параметри `names` та `phones` будуть передані
// рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та
// телефонів у рядках вказують на відповідність. Кількість імен та телефонів
// гарантовано однакова.

// function printContactsInfo(names, phones) {
//   const namesArr = names.split(',');
//   const phonesArr = phones.split(',');
//
//   for (let i = 0; i < namesArr.length; i += 1) {
//     console.log(`${namesArr[i]}: `, phonesArr[i]);
//   }
// }
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );
//
// ## Example 6 - Пошук найбільшого елемента
//
// Напиши функцію `findLargestNumber(numbers)`яка шукає найбільше число в
// масиві.
// function findLargestNumber(numbersArr) {
//   let max;
//
//   for (let number of numbersArr) {
//     if (max === undefined || number > max) {
//       max = number
//     }
//   }
//
// // console.log(max);
//
//   return max;
// }
//
// const maxValue = findLargestNumber([2, 17, 94, 1, 23, 37]);
// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
//
// ## Example 7 - Середнє значення
//
// Напишіть функцію `calAverage()` яка приймає довільну кількість аргументів
// і повертає їхнє середнє значення. Усі аргументи будуть лише числами.

// function calAverage(...args) {
//   console.log(args);
//   let sum = 0;
//
//   for (let argument of args) {
//     sum += argument;
//   }
//
//   return sum / args.length;
// }
// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// function calAverage() {
//   console.log(arguments);
//   let sum = 0;
//
//   for (let argument of arguments) {
//     sum += argument;
//   }
//
//   return sum / arguments.length;
// }
// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

//
// ## Example 8 - Форматування часу
//
// Напиши функцію `formatTime(minutes)` яка переведе значення `minutes`
// (кількість хвилин) у рядок у форматі годин та хвилин `HH:MM`.

// function formatTime(timeInMinutes) {
//   const hours = Math.floor(timeInMinutes / 60);
//   const minutes = timeInMinutes % 60;
//
//   // const hoursString = hours < 10 ? `0${hours}` : hours;
//   // const minutesString = minutes < 10 ? `0${minutes}` : minutes;
//
//   const hoursString = `${hours}`.padStart(2, 0);
//   const minutesString = `${minutes}`.padStart(2, 0);
//
//   return `${hoursString}:${minutesString}`
// }
// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"
//
// ## Example 9 - Колекція курсів
//
// Напишіть функції для роботи з колекцією навчальних курсів `courses`:
//
// - додає курс до кінця колекції
// - видаляє курс із колекції
// - змінює ім'я на нове
//
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
//
// function addCourse(name) {
//   // if (courses.includes(name)) {
//   //   console.log('Ви вже маєте такий курс');
//   //   return;
//   // }
//   //
//   // console.log('Hello');
//
//   if (courses.includes(name)) {
//     console.log('Ви вже маєте такий курс');
//   } else {
//     courses.push(name);
//   }
// }
// addCourse('Express');
// // console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// // addCourse('CSS'); // 'Ви вже маєте такий курс'
//
// function removeCourse(name) {
//   if (courses.includes(name)) {
//     const courseIndex = courses.indexOf(name);
//     courses.splice(courseIndex, 1);
//   } else {
//     console.log('Курс із таким ім\'ям не знайдено');
//   }
// }
// removeCourse('React');
// // console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// //removeCourse('Vue'); // 'Курс із таким ім'ям не знайдено'
//
// function updateCourse(oldName, newName) {
//   if (courses.includes(oldName)) {
//     const courseIndex = courses.indexOf(oldName);
//     courses.splice(courseIndex, 1, newName);
//   } else {
//     console.log('Курс із таким ім\'ям не знайдено');
//   }
// }
// console.log(courses);
// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// const arr = [7, 3, 8, 9, 2];
// const newArr = arr.slice(1);
// console.log(newArr);

// const deadline = 0;
// if (!deadline) {
//   console.log('if block');
// } else {
//   console.log('else block');
// }

// # Модуль 2. Заняття 3. Масиви
//
// ## Example 1 - Базові операції з масивом
//
// 1. Створіть масив `genres` з елементами «Jazz» та «Blues».
// 2. Додайте «Рок-н-рол» до кінця.
// 3. Виведіть у консоль перший елемент масиву.
// 4. Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву
// довільної довжини.
// 5. Видаліть перший елемент та виведіть його в консоль.
// 6. Вставте «Country» та «Reggae» на початок масиву.
//
// const genres = ['Jazz', 'Blues'];
// genres.push('Rock&Roll');
//const firstElement = genres.shift();
//console.log(genres.shift());
//console.log(genres[genres.length - 1]);
// genres.unshift('Country', 'Reggae');
// console.log(genres);
//
// ## Example 2 - Масиви та рядки
//
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення
// яких зберігаються у змінній `values` у вигляді рядка. Значення гарантовано
// розділені пробілом.
//
// const values = '8 11';
// const valuesArr = values.split(' ');
//const height = Number(valuesArr[0]);
// console.log(valuesArr);
// console.log(Number(valuesArr[0]) * Number(valuesArr[1]));

//
// ## Example 3 - Перебір масиву
//
// Напиши скрипт для перебору масиву `fruits` циклом `for`. Для кожного елемента
// масиву виведи в консоль рядок у форматі `номер_елемента: значення_елемента`.
//   Нумерація елементів повинна починатися з `1`.
//
// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`Element ${i + 1}: `, fruits[i]);
// }
//
// ## Example 4 - Масиви та цикли
//
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У
// змінних `names` та `phones` зберігаються рядки імен та телефонних номерів,
//   розділені комами. Порядковий номер імен та телефонів у рядках вказують на
// відповідність. Кількість імен та телефонів гарантовано однакова.
//
// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const namesArr = names.split(',');
// const phonesArr = phones.split(',');
// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(`${namesArr[i]}: `, phonesArr[i]);
// }

//
// ## Example 5 - Масиви та рядки
//
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і
// останнього. Результуючий рядок не повинен починатися або закінчуватися
// символ пробілу. Скрипт повинен працювати для будь-якого рядка.
//
// const string = 'Welcome to the future';
// const wordsArr = string.split(' ');
// wordsArr.pop();
// wordsArr.shift();
// console.log(`"${wordsArr.join(' ')}"`);
// const wordsArr = string.split(' ');
// const newWordsArr = wordsArr.slice(1, wordsArr.length -1);
// console.log(newWordsArr.join(' '));

//
// ## Example 6 - Масиви та рядки
//
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить
// його в консоль.
//
// const string = 'Welcome to the future';
// let newSting = '';
// for (let i = string.length - 1; i >=0; i -= 1) {
//   newSting += string[i]
// }
// console.log(newSting);

// const charsArr = string.split('');
// const reversedCharsArr = charsArr.reverse();
// console.log(reversedCharsArr.join(''));
// console.log(string.split('').reverse().join(''));

//
// ## Example 7 - Сортування масиву із циклом
//
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою
// елемента.
//
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// for (let i = 0; i < langs.length; i += 1) {
//   // порівнюємо поточний елемент з іншими елементами масиву
//   for (let j = i + 1; j < langs.length; j += 1) {
//     // мфняємо елементи місцями
//     if (langs[i] > langs[j]) {
//       const thirdValue = langs[i];
//       langs[i] = langs[j];
//       langs[j] = thirdValue
//     }
//   }
// }
// console.log(langs);
//
// ## Example 8 - Пошук елемента
//
// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для
// будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
//
// const numbers = [2, 17, 94, 1, 23, 37];
// let min;
// for (let number of numbers) {
//   if (min === undefined || number < min) {
//     min = number
//   }
// }
// console.log(min); // 1

// const fruits = ["Яблуко", "Груша", "Апельсин"];
// const shoppingCart = fruits;
// shoppingCart.push("Банан");
// console.log(fruits.length);
// console.log(shoppingCart.length);

// let a = 0;

//     function stringToNumber (str) {
//   // put your code here
//         a = Number(str);
//         //a = str;
//         return a;
// }

// stringToNumber("1234");

// console.log(a);

// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

// const a = 9;
// if (a == 10) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = 7;
// let result = "";

// switch (num) {
//     case 1:
//         result = "зима";
//         break;
//     case 2:
//         result = "весна";
//         break;
//     case 3:
//         result = "літо";
//         break;
//     case 4:
//         result = "осінь";
//         break;
//     default:
//         result = "нічого";
// }

//     console.log(result);

//Використовуючи конструкцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
//інакше відобразити: "Не знаєте? ECMAScript!"

// const message = prompt("Яка офіційна назва JavaScript?");

// if (message === "ECMAScript")
// {
// alert("Вірно!");
// } else {
// alert("Не знаєте? ECMAScript!");
// }

// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10

// const answer = prompt("Введіть хвилини");

// const hours = Math.floor(answer / 60);

// // console.log(hours);
// const hoursModify = String(hours).padStart(2, 0);
// //
// const minutes = answer % 60;
// // console.log(minutes);
// const minutesModify = String(minutes).padStart(2, 0);
// // console.log(minutesModify);
// console.log(`${hoursModify}:${minutesModify}`);

//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// const maxDig = 5;
// const minDig = -50;
// let total = 0;

// for (let i = maxDig; i >= minDig; i -= 1){

//     if (i % 2 === 0) {
//         total += i;
//         console.log(i);
//     }
// }

// console.log(total);

//Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
//інакше виводити рядок "Невірний пароль!"

// const login = prompt("Введіть логін");
// console.log(login);
// let password;

// if (login === "Адмін") {
//     const password = prompt("Введіть пароль");//     //
//     if (password === "Я головний") {
//     alert("Добрий день!");
// } else {
//     alert("Невірний пароль!");
// }//     //
// } else if (!login) {
//     alert("Скасовано");
// } else {
//     alert("Я вас не знаю");
// }

// switch (login) {
//     case "Адмін":
//         password = prompt("Введіть пароль");
//         switch (password) {
//     case "Я головний":
//        alert("Добрий день!");
//         break;
//     default:
//      alert("Невірний пароль!");
// }
//         break;
//     case null:
//     case "":
//      alert("Скасовано");
//         break;
//     default:
//      alert("Я вас не знаю");
// }

// }

//     if (password =) {
//         console.log("Скасовано");
//   }

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// # Модуль 1. Заняття 1. Змінні, типи та оператори
//
// ## Example 1 - Математичні оператори
//
// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 300;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total)
// const diff = apples - grapes;
// console.log(diff)

// ## Example 2 - Комбіновані оператори
//
// Заміни вираз перевизначення комбінованим оператором `+=`.

//  let students = 100;

// students = students + 50;
// students *= 2;
// console.log(students);

// ## Example 3 - Пріоритет операторів
//
// Розбери пріоритет операторів в інструкції привласнення значення змінної
//   `result`.

// const result = 10 + 20 - 2 * 5;
// console.log(result);

// ## Example 4 - Клас Math
//
// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення
// змінної `value`. Використовуй методи `Math.floor()`, `Math.ceil()` та
//   `Math.round()`. Перевір що буде в консолі при значеннях `27.3` та `27.9`.

// const value = 27.5;
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));

// ## Example 5 - Шаблонні рядки
//
// Склади фразу за допомогою шаблонних рядків `A has B bots in stock`, де A, B -
// змінні вставлені в рядок.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = companyName + ' has ' + (repairBots + defenceBots) + ' bots in stock';
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// ## Example 6 - Методи рядків та чейнінг
//
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього
// необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.
//
//   Вага та висота зберігаються у змінних `weight` та `height`, але не як числа, а в
// вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді
//   `24.7` або `24,7`, тобто як роздільник дробової частини може бути
// кома.
//
//   Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = '88,3';
// let height = '1.75';
// const newWeight = Number(weight.replace(',', '.'));
// const newHeight = Number(height.replace(',', '.'));

// console.log(newHeight);
// console.log(typeof Number(weight));
// console.log(Number(weight));
// console.log(Number.parseFloat(weight));

// const bmi = newWeight / Math.pow(newHeight, 2);
// console.log(bmi);
// console.log(bmi.toFixed(1));
// console.log(bmi); // 28.8

// ## Example 7 - Оператори порівняння та приведення типів
//
// Яким буде результат виразів?

// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('2' > '12');
// console.log('2'.charCodeAt(0));
// console.log('12'.charCodeAt(0));

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);
//
// console.log('false' === false);
//
// console.log(1 == true);
//
// console.log(1 === true);
//
// console.log('0' == false);
//
// console.log('0' === false);
//
// console.log('Papaya' < 'papaya');
//
// console.log('Papaya' === 'papaya');
//
// console.log(undefined == null);
//
// console.log(undefined === null);

// Значення, перетворення яких дають false
// 1. false
// 2. null
// 3. undefined
// 4. NaN
// 5. 0
// 5. -0
// 6. ''

// ## Example 8 - Логічні оператори
//
// Яким буде результат виразів?

// console.log(true && 3);
//
// console.log(false && 3);
//
// console.log(true && 4 && 'kiwi');
//
// console.log(true && 0 && 'kiwi');
//
// console.log(true || 3);
//
// console.log(true || 3 || 4);
//
// console.log(true || false || 7);
//
// console.log(null || 2 || undefined);
//
// console.log((1 && null && 2) > 0);
//
// console.log(null || (2 && 3) || 4);

// ## Example 9 - Значення за замовчуванням та оператор нульового злиття
//
// Отрефактори код так, щоб у змінну `value` присвоювалося значення
// змінної `incomingValue`, якщо воно не рівне `undefined` або `null`. В
// іншому випадку має присвоюватися значення `defaultValue`. Перевір роботу
// скрипта для наступних значень змінної `incomingValue`: null, undefined, 0,
//   false. Використовуй оператор `??` (nullish coalescing operator).

// const incomingValue = false;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value);

// ## Example 10 - Оператор % та методи рядків
//
// Напиши скрипт, який переведе значення `totalMinutes` (кількість хвилин) в
// рядок у форматі годин та хвилин `HH:MM`.

// - 70 покаже 01:10
// - 450 покаже 07:30
// - 1441 покаже 24:01

// const totalMinutes = 70;
//
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);
//
// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// const products = 10;
// const search = '';
// const filters = 1;
//
// if (search && !products) {
//   console.log('Пошук не дав результатів');
// } else if (filters && !products) {
//   console.log('Фільтр не дав результатів');
// } else {
//   console.log('У нас ще немає продуктів');
// }

// # Модуль 1. Заняття 2. Розгалуження. Цикли
//
// ## Example 1 - Введення користувача та розгалуження
//
// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме:
//   `"Яка офіційна назва JavaScript?"`. Якщо користувач вводить
//   `ECMAScript`, то показуй alert з рядком `"Правильно!"`, в іншому випадку -
// `"Не знаєте? ECMAScript!"`

// const answer = prompt('Яка офіційна назва JavaScript?');
// console.log(answer);
// if (answer === 'ECMAScript') {
//   alert("Правильно!")
// } else {
//   alert('Не знаєте? ECMAScript!')
// }

//
// ## Example 2 - Відображення часу (if...else)
//
// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка
// формату `"14 г. 26 хв."`. Якщо значення змінної `minutes` дорівнює `0`, то
// виводь рядок `"14 г."`, без хвилин.
//
// const hours = 14;
// const minutes = 0;
// let timestring;
//
// if (minutes !== 0) {
//   timestring = `${hours} год. ${minutes} хв`;
// } else {
//   timestring = `${hours} год.`
// }
//
// console.log(timestring);

//
// ## Example 3 - Розгалуження
//
// Напиши скрипт, який виводить у консоль рядок `"Це позитивне число"`,
//   якщо у prompt користувач ввів число більше нуля. Якщо було введено нуль, виводь
// в консоль рядок `"Це нуль"`. Якщо передали від'ємне число, у консолі
// повинен бути рядок `"Це негативне число"`.
//
// const userInput = Number(prompt('Введіть число'));
// //console.log(Number(userInput));
// if (userInput > 0) {
//   console.log('Це позитивне число');
// } else if (userInput === 0) {
//   console.log('Це нуль');
// } else if (userInput < 0) {
//   console.log('Це негативне число');
// } else {
//   console.log('Ви ввели не число');
// }

// const userInput = prompt('Введіть число');
// //console.log(Number(userInput));
// if (userInput === null) {
//   console.log('Це позитивне число');
// } else if (Number(userInput) === 0) {
//   console.log('Це нуль');
// } else if (userInput < 0) {
//   console.log('Це негативне число');
// } else {
//   console.log('Ви ввели не число');
// }

//
// ## Example 4 - Вкладені розгалуження
//
// Напиши скрипт, який порівнює числа у змінних `a` та `b`. Якщо обидва
// значення більше `100`, то виведи в консоль максимальне з них. В протилежному
// випадку у консолі повинна бути сума значення `b` та числа 512.
//
// const a = 120;
// const b = 80;

// if (a > 100) {
//   if (b > 100) {
//     console.log(Math.max(a, b));
//   } else {
//     console.log(b + 512);
//   }
// } else {
//   console.log(b + 512);
// }

// if (a > 100 && b > 100) {
//   console.log(Math.max(a, b));
// } else {
//   console.log(b + 512);
// }
//
// ## Example 5 - Форматування посилання
//
// Напиши скрипт який перевіряє чи закінчується значення змінної `link`
// символом `/`. Якщо ні, додай до кінця значення `link` цей символ. Використовуй
// конструкцію `if...else`.
//
// let link = 'https://my-site.com/about';
//
// if (!link.endsWith('/')) {
//   //link = link + '/'
//   link = `${link}/`
//   //link += '/'
// };
// console.log(link);
//
// ## Example 6 - Форматування посилання
//
// Напиши скрипт який перевіряє чи закінчується значення змінної `link`
// символом `/`. Якщо ні, додай до кінця значення `link` цей символ, але тільки в
// тому випадку, якщо в `link` є підрядок `"my-site"`. Використовуй конструкцію
//   `if...else`.
//
// let link = 'https://somesite.com/my-site/about';
//
// if (!link.endsWith('/') && link.includes('my-site')) {
//   link = `${link}/`
// }
// console.log(link);
//
// ## Example 7 - Форматування посилання (тернарний оператор)
//
// Виконай рефакторинг коду попередньої задачі, використовуючи тернарний оператор.
//
// let link = 'https://somesite.com/about';
// link = !link.endsWith('/') && link.includes('my-site') ? `${link}/` : link;
//
// ## Example 8 - if...else та логічні оператори
//
// Напиши скрипт який виводитиме в консоль браузера рядок залежно від
// значення змінної `hours`.
//
//   Якщо значення змінної `hours`:
//
// - менше `17`, виводь рядок `"Pending"`
// - більше або дорівнює `17` і менше або дорівнює 24, виводь рядок `"Expires"`
// - більше `24` , виводь рядок `"Overdue"`
//
// const hours = 10;
//
// ## Example 9 - Дедлайн здачі проекту (if...else)
//
// Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй
// конструкцію `if...else`.
//
// - Якщо до дедлайну 0 днів - виведи рядок `"Сьогодні"`
// - Якщо до дедлайну 1 день - виведи рядок `"Завтра"`
// - Якщо до дедлайну 2 дні - виведи рядок `"Післязавтра"`
// - Якщо до дедлайну 3+ днів - виведи рядок `"Дата у майбутньому"`
//
// const daysUntilDeadline = 5;

// if (daysUntilDeadline === 0) {
//   console.log('Сьогодні');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Післязавтра');
// } else {
//   console.log('Дата у майбутньому')
// }
//
// ## Example 10 - Дедлайн здачі проекту (switch)
//
//   Виконай рефакторинг коду попередньої задачі використовуючи `switch`.
//
// const daysUntilDeadline = 5;
//
// switch (daysUntilDeadline) {
//   case 0:
//     console.log('Сьогодні');
//     break;
//   case 1:
//     console.log('Завтра');
//     break;
//   case 2:
//     console.log('Післязавтра');
//     break;
//   default:
//     console.log('Дата у майбутньому');
//     break;
// }
//
// ## Example 11 - Цикл for
//
//     Напиши цикл for, який виводить у консоль браузера числа за зростанням від `min`
//     до `max`, але тільки якщо число кратне `5`.
//
// const max = 100;
// const min = 26;
//
// for (let i = min; i < max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }
//
// for (let i = min; i < max; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

//
// ## Example 12 - Введення користувача та розгалуження
//
//     Напиши скрипт, який питатиме логін за допомогою `prompt` та логувати
//     результат у консоль браузера.
//
//   - Якщо відвідувач вводить `"Адмін"`, то `prompt` запитує пароль
//   - Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок `"Скасовано"`
//   - В іншому випадку вивести рядок `"Я вас не знаю"`
//
//     Пароль перевіряти так:
//
//     - Якщо введено пароль `"Я адмін"`, то вивести рядок `"Здрастуйте!"`
//   - Інакше виводити рядок `"Невірний пароль"`

// const inputValue = prompt('Логін');
// if (inputValue === 'Адмін') {
//   const password = prompt('Пароль');
//   if (password === 'Я адмін') {
//     alert('Здрастуйте!')
//   } else {
//     alert('Невірний пароль')
//   }
// } else if (inputValue === '' || inputValue === null) {
//   alert('Скасовано');
// } else {
//   alert('Я вас не знаю');
// }
