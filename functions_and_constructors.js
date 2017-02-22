// RUBY METHOD
// def say_hi
//  puts "hi"
// end
// say_hi

// JS FUNCTIONS
// function sayHi() {
//  console.log("hi"); 
// }
// sayHi();


// RUBY METHOD WITH PARAMS
// def add_two_nums(num_one, num_two)
//  num_one + num_two
// end
// puts add_two_nums(1, 4)

// JS FUNCTION WITH PARAMS
// function addTwoNums(numOne, numTwo) {
//  return numOne + numTwo;
// }
// console.log(addTwoNums(1, 4));


// RUBY SCOPE
// x = "hello"
// def do_something
//  x = "zebra"
// end
// do_something
// puts x

// JS SCOPE
// var x = "hello";
// function doSomething() {
//  var x = "zebra";  
//  console.log("local scope x: " + x);
// }
// doSomething();
// console.log("global scope x: " + x);



// JS CLASSICAL DEFINITION OF FUNCTIONS(ANONYMOUS):
// function cool(){
//  console.log("a variable can contain a function");
// }
// cool();
// console.log(typeof cool);

// JS NAMED FUNCTIONS:
// var cool = function(){
//  console.log("a variable can contain a function");
// };
// cool();
// console.log(typeof cool);


// FUNCTIONS CAN BE PROPERTIES OF OBJECTS:
// var book = {
//   title: "Eat Pray Love",
//   author: "Some Lady",
//   publishDate: 2006,
//   printMessage: function() {
//     return this.title + " was written by " + this.author;
//   }
// };

// console.log(book.title);
// console.log(book.author);
// console.log(book.printMessage());



// RUBY CLASSES
// class Car
//  attr_accessor :model, :year, :miles
//  def initialize(model, year, miles)
//    @model = model
//    @year = year
//    @miles = miles
//  end
//  def print_message
//    puts "#{model} has done #{miles} miles"
//  end
// end

// mustang = Car.new("Mustang", 2008, 60000)
// puts mustang
// puts mustang.miles
// puts mustang.print_message


// JS CONSTRUCTORS
// var Car = function(model, year, miles) {
//   this.model = model;
//   this.year = year;
//   this.miles = miles;
//   this.printMessage = function() {
//     return this.model + " has done " + this.miles + " miles";
//   };
// };

// var mustang = new Car("Mustang", 2008, 60000);
// console.log(mustang);
// console.log(mustang.model);
// console.log(mustang.printMessage());










