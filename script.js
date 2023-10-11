var sum = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);



function fibonacci() {
    var a = 0, b = 1, count = 0;

    for(var sum = 0; sum < 4000000;){

        sum = a + b;

        a = b;          
        b = sum;        

        if(sum % 2 == 0){
            count += sum;
        }
    }
    return count;
}

console.log(fibonacci());