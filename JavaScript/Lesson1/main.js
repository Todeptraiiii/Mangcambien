
// var fullName = 'Dao Van To';
// var Age      = '21';
// alert(fullName);
// alert(Age);
/*
Giới thiệu một số hàm built-in
1. Alert
2. Console
3. Confirm
4. Prompt
5. Set timeout
6. Set interval 
*/
// prompt('Xac nhan ban du tuoi!!');

// setTimeout(function() {
// alert('Thong bao')
// },1000)
// setInterval(function() {
//     console.log('Day la log' + Math.random())
// },1000)
/*
Giới thiệu về toán tử trong JavaScript
1. Toán tử số học - Arithmetic
2. Toán tử gán   - Assignment
3. Toán tử so sánh - Comparison
4. Toán tử logic    - Logical 
*/

// var a = 1 * 2;
// var b = 1;
// var c = 2;
// if (c > b){
//     alert('Dao Van To')
// }
// var a1 = 1;
// var b1 = 2;
// if(a > 0 && b > 0){
//     alert (' a & b lớn hơn 0');
// }
/* Toán tử số học 
+   -- > Cộng
-   --> Trừ
*   --> Nhân
**  --> Lũy thừa
/   --> Chia

*/
// var a = 1;
// var b = 2;
// var c = a/b;
// console.log(c);

/* Toán tử gán 

*/
/* Toán tử chuỗi
*/
// var firstName =  'Tố';
// var lastName  =  'Đào';
// var fullName  = firstName + lastName;
// console.log(fullName);
/* Toán tử so sánh

*/
/*
Câu lệnh điều kiện 
*/
// if (){

// }

/* 1. Dữ liệu nguyên thủy - Primitive Data
- Number
- String
- Boolean
- Underfind
- Null
- Symbol 'Unique'
  2. Dữ liệu phức tạp - Complex Data
  - Function
  - Object
*/
// Function
// var myFunction = function() {
//     alert('Dao Van To dep trai')
// };
// // Object (Dùng cực nhiều)
// var myObject = {
//     name: 'Tố',
//     age : '21',
//     address: 'Hà nội',
//     myFunction
// };
// console.log('myObject',myObject);
// var myArray = [
//     'JS',
//     'PHP',
//     'noteJS'
// ]

// Toán tử so sánh - P2
/*
=== : tuyet doi, so sanh ca kieu du lieu
!== 
*/
// var a = '1';
// var b = 1;
// console.log(a == b);

/*
Hàm (function ) trong JavaScript
1. Hàm?
- Một khối mã
-  Làm 1 việc cụ thể

2. Loại hàm?
- Built - in
- Tự định nghĩa

3. Tính chât
- Không thực thi khi định nghĩa
- Sẽ thực thi khi được gọi
- Có thể nhận tham số
- Có thể trả về một giá trị

4. Tạo hàm đầu tiên
*/

// function showDialog(){
//     // code
//     alert('HI! Xin chao cac ban!');
// }
// showDialog();

//

// Tham số hàm  - JavaScipt Basic

/*
1. Tham số?
- Định nghĩa?
- Kiểu dữ liệu? 'Không có giới hạn' 
- Tính private?
- 1 tham số
- Nhiều tham số
2. Truyền tham số
- 1 tham số
- Nhiều tham số
3. Arguments?
- Đối tượng Arguiments (Chỉ xuất hiện trong function thôi)
- Giới thiệu vòng for
 */
// function writeLog() {
//     console.log(arguments);
// }
// writeLog('Hi! To dep trai','Hi! Tuan xau trai');

// function writeLog() {
//     var myString = '';
//     for(var param of arguments){
//         myString += `${param} - `; // template string : cho phép thực thi lệnh ngay trong string
//     }
//     console.log(myString);
// }
// writeLog('Hi! To dep trai','Hi! Tuan xau trai');

// Return trong hàm - JavaScript

//confirm('Message?'); // hiện lên một biến kết quả. Vậy làm thế nào để lấy giá trị

// var isConfirm = confirm('Message?');
// console.log(isConfirm); // trả về dữ liệu khi người dùng bấm

// Ví dụ về hàm return 
// function sum(a,b){
//     return a + b;
// }
// console.log(sum(2,8));

/*
Các loại function 
1. Declaration function 
2. Expression function
3. Arrow function 
*/

// // declare: Cái này có thể gọi trước khi được định nghĩa
// function  showMessage(){

// }
// // Express: Cái này thì không
// var showMessage2 = function ()
// {

// }


/*
Chuỗi trong JS
1. Tạo chuỗi
- Cách tách các chuỗi
- Nên dùng cách nào? Lý do?
- Kiểm tra các data type
2. Một số case sử dụng blackflash(\)
3. Xem độ dài chuỗi
4. Chú ý độ dài khi viết code
5. Template string es6 
*/
// var fullName = 'To Dao';
// console.log(fullName.length);

/* Làm việc với chuỗi */
// var myString = 'Hoc JS tai JS JS F8!'
// // 1. Length
// // console.log(myString.length)
// // 2. Find index
// console.log(myString.indexOf('JS',6)); // bat dau tim tu ki tu thu 6
// // 3. Cut string
// console.log(myString.slice(4,6));
// 4. Replace
// console.log(myString.replace('JS','JavaScript'));
// console.log(myString.replace(/JS/g,'JavaScript'));
//5. Convert to uppercase
//console.log(myString.toUpperCase())
//6. Convert to loWercase
//console.log(myString.toloWerCase())
//7. Trim
// console.log(myString.trim().length)
//8. Split: cắt
// var language = 'daovanto'
//9. Get a character by index 
// const myString2 = 'To dao';

// console.log(myString2[10])


/* Làm việc với số */

/* Làm việc với mảng */
// var language = [
//   'PHP',
//   'JS',
//   'HOT'
// ]
// console.log(language[0])
// Keyword: JavaScript array methods
// 1.To string
// 2. Join
// 3. Pop
// 4. Push
// 5. Shift
// 6. Unshift
// 7. Splicing
// 8. Concat nối array
// 9. Slicing : Cắt
// var language = [
//     'PHP',
//     'JS',
//     'HOT'
//   ]
// var language1 = [
//   'To'
// ]
//   // console.log(language.toString);
//   console.log(language.join(''));
//   // console.log(language.pop());
//   // console.log(language.push('Dart'));
//   // console.log(language.shift()); // Ngược lại với ông Pop
//   // console.log(language.unshift('Dart1')); // Chèn một phần từ vào đầu mảng
//   // language.splice(1,2); // xóa đi 2 phần từ từ vị trí 1
//   // language.splice(1,0,'Dart3');
//   // console.log(language);  
//   console.log(language.concat(language1));


/* Làm việc với Object */
// Object trong JS
// var myInfo = {
//   name: 'To Dao',
//   age : 18,
//   getName: function(){
//     return this.name;
//   }
// }
// console.log(myInfo.name);
// var myKey = 'age'
// // add thêm value
// myInfo.email = 'daovanto@gmail.com';
// // 
// console.log(myInfo[myKey]);
// // xoa 1 key 
// delete myInfo.age;
// console.log(myInfo.getName());
// // Phương thức --> Method
// // Others     --> Thuộc tính/ Property

// Object constructor
// function User(firstName,lastName,avatar){
//   this.firstName = firstName,
//   this.lastName  = lastName,
//   this.avatar    = avatar
// }
// var author  = new User ('To','Dao', 'Avatar');
// var student = new User ('Chien','Kim','Manh');
// console.log(author);
// console.log(student);





/* Object prototype - Basic*/
// function User(firstName,lastName,avatar){
//   this.firstName = firstName,
//   this.lastName  = lastName,
//   this.avatar    = avatar
// }
// User.prototype.GetFullName = function(){
//   return `${this.firstName} ${this.lastName}`
// }
// var user1 = new User('To','Dao','Deptrai');
// console.log(user1.firstName);
// console.log(user1.lastName);
// console.log(user1.GetFullName());


// /* Đối tượng date*/
// var date = new Date();
// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();
// console.log(typeof date);
// // KEY word: date.mozilla developer
 



/* Math object */
// Math.Pi
// Math.round()
// Math.abs()
// Math.cell()
// Math.floor()
// Math.random()
// Math.mix()
// Math.max()

// var random = Math.floor(Math.random() * 100);
// var bonus = [
//   '10k',
//   '20k',
//   '30k',
//   '40K',
//   '50K'
// ]
// console.log(bonus[random]);
// if (random < 50){
//   console.log('Doi mau');
// }
// function getRamdomItem(array){
//   return array[Math.floor(Math.random() * array.length)] // 0 den 6
// }
// var abc = [1,2,3,4,5,6,7];
// var Item1 = getRamdomItem(abc);
// //console.log(Item1);
// console.log(abc.length);

// Câu lệnh rẽ nhánh - If else
// function run(a) {
//   if(a%15 == 0) return 3
//   if(a%3 == 0) return 1;
//   if(a%5 == 0) return 2;
// }


// // Kỳ vọng
// console.log(run(3)) // 1
// console.log(run(5)) // 2
// console.log(run(15)) // 3


/* Câu lệnh rẽ nhánh - Switch  */
// var hungdz = 3;
// switch(hungdz){
//   case 1: console.log('Hung rat la mat tho gian');
//   case 3: console.log('Hung dep trai ');
// }

/* Toán tử 3 ngôi */
// return a > 8 ? 1 : 0;


/* Vòng lặp - Loop*/
// 1. for - Lặp với điều kiện đúng
// 2. for/in - lặp qua key của đối tượng
// 3. for/of - lặp qua value của đối tượng
// 4. while - lặp khi điều kiện đúng
// 5. do/while - lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng



// For loop
// Làm bài
// function getRandNumbers(min,max,length){
    
//   var arr = [];
//   for(var i = 0 ; i <= length-1 ; i++){
//       var arr1 = Math.floor(Math.random() * (max - min) + min);
//       arr.push(arr1);
//   }
//   return arr;
// }
// console.log(getRandNumbers(0,8,8));


/**
* 
* VD 1: for (var i = 0; i < 100; i--) // i++ mới đúng
* VD 2: for (var i = 100; i >= 0; i++) // i-- mới đúng
* là 2 vòng lặp không có điểm dừng (lặp vô hạn)
* 
* => Treo trình duyệt!!!
*/

// For/ in loop

// var string = {
//   firstname : 'to',
//   lastname  : 'dao'
// }

//////////////////////////////////////////////////////////////////////////
// for (var key in string ){
//   console.log(string[key]); khi trong vòng for thì muốn in ra object phải 
// }

/////////////////////////////////////////////////////////////////////////

// console.log(string.firstname);
// console.log(Object.keys(string));

// function run(object) {
//   var arr = [];
//   for(var key in object){
//       arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
//   }
//   return arr;
// }

// // Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));
// // Output:
// // [
// //     "Thuộc tính name có giá trị Nguyen Van A",
// //     "Thuộc tính age có giá trị 16"
// // ]


// for/of không áp dụng với object

/* Array methods */
// for Each()
// every() // kieemr tra lan luot phan tu thoa man dieu kien gi do
// some()
// find() // Rất hợp trong tìm kiếm, chỉ 1 cái thôi
// filter() // Trả về tất cả phần từ thỏa mãn tìm kiếm
// map() Để thay đổi hoặc sửa element trong array. Dùng rất nhiều, rất nhiều
// reduce()


// var courses = [
//   {
//     id: 'pro',
//     name: 'Hoa',
//     coin: 100
//   },
//   {
//     id: 1,
//     name: 'Hungdz',
//     coin: 50
//   },
//   {
//     id: 2,
//     name: 'Pham minh diep',
//     coin: 25
//   },
//   {
//     id: 3,
//     name: 'doan duong nam truong',
//     coin: 25
//   }
// ]

// courses.forEach((value,index)=>{
//   console.log(value == courses,index);
// })
// var a = courses.every((value,index) => {
//   return value.coin === 'free';
// })
// console.log(a);
// var b = courses.find((value,index) => {
//   return value.coin === '50k';
// })
// console.log(b);

// Array map()
// var newCourses = courses.map(function(course){
//   return {
//     id   : course.id,
//     name : `${course.name} is free`
//   };
// });
// console.log(newCourses);

// Phương thức reduce();

// var sports = [
//   {
//       name: 'Bơi lội',
//       gold: 11
//   },
//   {
//       name: 'Boxing',
//       gold: 3
//   },
//   {
//       name: 'Đạp xe',
//       gold: 4
//   },
//   {
//       name: 'Đấu kiếm',
//       gold: 5
//   },
// ]
// function getTotalGold(arr){
//   var totalGold =  arr.reduce(function(accumulator,currentValue){
//       return accumulator + currentValue.gold;
// },0);
// return totalGold;
// }


// // Expected results:
// console.log(getTotalGold(sports)) // Output: 23

/* includes method */
// var cars = ['Rolls-Royce', 'Mercedes', 'Lexus', 'BMW', 'Audi'];

// function checkCar(cars) {
//    return cars.includes('Mercedes', 2);  Số 2 là đối số
// }

// console.log(checkCar(cars)); // Output: ?

/* CallBack */

// - Là hàm (function) được truyền qua đối số khi gọi hàm khác

//1. Là hàm
//2. Được truyền qua đối số


// function myFunction(param){
//   param('Hoc lap trinh');
// }
// function myCallback(value){
//   console.log('value: ',value);
// }

// myFunction(myCallback);




/* Callback 2 */

// Array.prototype.map2() = function(callback){
//   var output= [], arraylength = this.length;
//   for(var i = 0; i< arraylength; i++){
//     var result = callback(this[i],i);
//     output.push(result);;
//   }
//   return output;
// }

// var htmls = courses.map2(function(course){
//   return `<h2>${course}</h2>`
// });
// console.log(htmls.join(''));



// HTML DOM
// Có 3 thành phần 
//1. Element
//2. Attribute
//3. Text

// document.write('Hello Guys!');

// Get element methods

//1. Element: ID,class,tag, CSS selector, HTML collection
// var headingNode = document.getElementById('heading');
// console.log(headingNode);
// var headingNodes = document.getElementsByClassName('heading');
// console.log(headingNodes);

//DOM attribute

// var headingElement = document.querySelector('h1');
// headingElement.setAttribute('class','heading');
// console.log(headingElement);




/* InnerText va text Content property*/

// var headingElement = document.querySelector('h1');
// // console.log(headingElement.innerText);
// headingElement.innerText = 'New heading';

/*Inner HTML  vs OuterHTML*/

// var boxElement = document.querySelector('.box');
// boxElement.innerHTML = '<h1> Heading <h1>';
// var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

// function render(courses) {
//     var a = courses.map((value,index) => {
//         return `<li>${value}</li>`;
//     }).join("");
//     var courseslist = document.querySelector('.courses-list');
//     courseslist.innerHTML = a;
//     return courseslist;
// }

// render(courses)


/* Node properties */
// var boxElement  = document.querySelector('.box');
// console.log(boxElement.style);

/* Class list property */

// add : Thêm class vào element
// contains : Kiểm tra 1 class có nằm trong mục hay không
// remove : xóa class
// toggle : xóa bỏ class trong element khi được gọi đén
// var boxElement = document.querySelector('.box');
// // console.log(boxElement.classList.length[0]);
//   boxElement.classList.add('red');

  // console.log(boxElement.classList.contains('red'));
// setTimeout(()=> {
//   boxElement.classList.remove('red');
// },3000);
// setInterval(()=> {
//   boxElement.classList.toggle('red');
// },3000);


/* DOM Event  */
// 1. Attribute events
// 2. Assign event using the element node

// var buttonElement = document.querySelector('button');
// buttonElement.onclick = function(){
//     buttonElement.style.background = 'red';
//     console.log(buttonElement.style);

// }

// DOM EVENT

//1. Input / Select
//2. Key up/ Down
// var inputElement = document.querySelector('input[type="text"]');
// // console.log(inputElement);
// inputElement.onchange = function(e){
//   console.log(e.target.value); // target là chính cái element node của thẻ input này
// }

// 1. prevenDefault : Loại bỏ hành vi mặc định của trình duyệt trên thẻ HTML
//2. stopPropagation: Loại bỏ sự kiện nổi bọt