// Создайте переменные со значениями:
// a. имя переменной: myNum, значение: 10

var myNum = 10;
console.log(myNum);

// b. имя переменной: myStr, значение: 'строка'
var myStr = 'строка';
console.log(myStr);

// c. имя переменной: myBool, значение: true
var myBool=true;
console.log(myBool);

// d. имя переменной: myArr, значения: 1, 2, 3, 4, 5
var myArr = [1,2,3,4,5];
console.log(myArr);

// e. имя переменной myObj, значения: first: 'First Name', last: 'Last Name'
var myObj = {
  first: 'First Name', 
  last: 'Last Name'
  };
console.log(myObj); 

// Отформатируйте целое число, которое хранится в переменной myNum,
// чтобы получить результат с 2 знаками после запятой.
// Результат сохраните в переменную decimal2.
var decimal2 = myNum.toFixed;

// Создайте переменную i для которой выполните префиксный и
// постфиксный инкремент и декремент. Поэкспериментируйте с
// результатами, выводя их в консоль.
var i =1;
console.log(++i);
console.log(i++);
console.log(--i);
console.log(i--);

// Создайте новую переменную myTest и присвойте ей значение 20.
// Выполните присваивание с операцией, используя операторы: +=, –=, *=,
// /=, %=. Результаты присваиваются в myTest, затем выводятся в консоль.
// В вычислениях можно использовать объявленную ранее переменную
// myNum и/или числа.
var myTest = 20;
myTest+=myNum;
myTest-=myNum;
myTest*=myNum;
myTest/=myNum;
myTest%=myNum;

// Используя свойства и методы объекта Math, присвойте переменным и
// отобразите в консоли:
// ○ константа Pi → myPi
var myPi = Math.PI;
console.log(myPi);

// ○ округленное значение числа 89.279 → myRound
var myRound = Math.round(89.279);
console.log(myRound);

// ○ случайное число между 0..10 → myRandom
var myRandom = Math.random()*10;
console.log(myRandom);

// ○ 3 в 5 степени → myPow
var myPow = Math.pow(3,5);
console.log(myPow);

// Создайте объект с именем strObj. Присвойте ключу str строку текста
// "Мама мыла раму, рама мыла маму", ключу length установите длину
// этой строки.
var strObj = {str:'Мама мыла раму, рама мыла маму'};
strObj.length = strObj.str.length;

// Проверьте наличие текста 'рама' в поле str объекта strObj (см.п.6),
// результат сохраните в переменную isRamaPos и выведите ее в консоль.
var isRamaPos = strObj.str.indexOf('рама');
console.log(isRamaPos);


var strReplace = strObj.str.replace('Мама мыла раму, рама мыла маму', 'Мама моет раму, Рама держит маму');
// 9. Преобразуйте любую строку в верхний, затем в нижний регистры,
// результат отобразите в консоли.
var str = strObj.str.toUpperCase();
console.log(str);
var str = strObj.str.toLowerCase();
console.log(str);  