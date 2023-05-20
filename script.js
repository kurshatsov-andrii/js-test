let a = 0;

    function stringToNumber (str) {
  // put your code here
        a = Number(str);
        //a = str;
        return a;
}

stringToNumber("1234");

console.log(a);        



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
