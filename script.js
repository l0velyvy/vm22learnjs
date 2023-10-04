let boolean = true;

console.log(boolean);

boolean = false;

console.log(boolean)

boolean = true && false && true;

console.log(boolean);

boolean = true || false || true;

console.log(boolean);

boolean = !true;

console.log(boolean)

boolean = true && false || true && !false;

console.log(boolean);

num = 10;

boolean = num > 10

boolean  = num < 10

boolean = num == 10;

boolean = num === 10; // check type and value

boolean = num >= 10;

boolean = num != 10;

boolean = num !== 10; //check type and value

console.log(boolean)

 

if(num == 10) {

    console.log('võrdne kümnega')

} else {

    console.log('ei ole võrdne kümnega')

}

 

console.log(Boolean(num));

console.log(Boolean('asjsd'));

console.log(Boolean(0));

console.log(Boolean(''));

 

let noValue = null;

let noValue2;

console.log(noValue);

console.log(novalue2);

num = 1/0;

console.log(num);

num = -1/0;

 

let array = [1, 2, true, 1.2, 'hello'];
console.log(array);
console.log(array[4]);

array[3] = 69;
console.log(array);
array.push('new value');
console.log(array);
array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
console.log(array);