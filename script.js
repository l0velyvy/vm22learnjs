for(let i=1;i<=200;i++){

    if(i%5===0 && i%7===0){
        console.log('foobar');
    } else if(i%5===0){
        console.log('foo');
    } else if (i%7===0){
        console.log('bar');
    } 
    console.log(i);
}

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)