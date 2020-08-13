'use strict'

var number = 1
var string = "Hello!"
var sym = Symbol()
var boolean = true
null // то чего не существует
undefined // значение необределено
var object = {} // коллекция/структура данных(комплексный тип данных). Даннные могут быть свойствами и методами объекта

console.log(4 / 0) // = Infinity это числовое значение при деление на 0
console.log('string' * 9) // NaN(Not-a-number) это числовое значение полученое при операции не подлежащей математической логики

let something
console.log(something)

let persone = {
    name: "John",
    age: 25,
    isMarried: false
}

//console.log(persone.name)

//let arr = ['plum.png', 'orange.jpg', 'apple.bmp']

//console.log(arr[0])

//alert('Hello world!')

//let answer = +prompt('Есть ли вам 18?', 'Да') // + перед строкой превращает строку в тип number

// console.log(typeof (answer))

// console.log('arr' + ' - object')
// console.log(4 + ' - object')

let incr = 10,
    decr = 10


console.log(incr++)
console.log(decr--)

console.log(5 % 2)
console.log('2' === 2)

let isChecked = true,
    isClose = false

console.log(isChecked && !isClose)
console.log(isChecked || isClose)
console.log(isChecked || isClose)
console.log('LOH')

console.log('LOH3')