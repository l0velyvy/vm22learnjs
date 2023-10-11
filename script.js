console.log (`hello world`)

let num = 1;
var text = `Hello`; 
console.log(num);
let string = `hello`;
string = `hello dont`;
string = `hello im multi line string`
string = `hello number is:  ${num}`

let boolean = true;
console.log(boolean);
boolean =false;
console.log(boolean);
boolean = true && false && true;
console.log(boolean);
boolean = true || false || true;
console.log(boolean);
boolean = !true;
console.log(boolean);
boolean = true && false || true && !false;
console.log(boolean);
num = 10;
boolean = num > 10;
boolean = num < 10;
boolen = num == 10;
boolean = num === 10,
boolean = num >= 10;
boolean = num <= 10;
boolean = num != 10;
boolean = num !== 10;
console.log(boolean);
if(num == 10) {
    console.log('võrdne kümnega');
} else {
console.log('ei ole võrdne kümnega');
}

console.log(Boolean(num));
console.log(Boolean('asdasd'));
console.log(Boolean(0));
console.log(Boolean(''));

let noValue = null;
let noValue2;
console.log(noValue);
console.log(noValue2);
num = 1/0;
console.log(num);
num = -1/0;
console.log(num);
num = 0/0;
console.log(num);

let array = [1, 2, true, 1, 2, 'hello'];
console.log(array);
console.log(array[4]);

array[3] = 96;
console.log(array);
array.push ('new value');
console.log(array);
array = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];
console.log(array);
console.log(array[1][2]);
array = [[[[[1]]]]];
console.log(array[0][0][0][0][0]);

let object = {
    name: 'Kaspar',
    age: 30,
    cats: ['Nuustik', 'Kratt', 'Klutt', 'Pätu']
};

console.log(object);
console.log(object.name);
console.log(console)


for(let i=0; i<10; i++){
    console.log(i);
}