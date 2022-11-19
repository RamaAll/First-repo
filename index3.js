console.log("Rama Allowh")
let first = 42
first = true
first = [0,1,2]
first = {
    firs_name: 'Rama\t',
    last_name: 'Allowh',
}
console.log(first.firs_name + ' ' + first.last_name)
let x = 2;
let y = 2;
let z = x += y; /* or x ++ y*/
console.log(z)

function plusnumbers(first, second){ 
    if(second == 0){
        console.log('divide by 0')
        return 0;
    }
    return first + second;
}
for(let index = 0; index < 10; index+=2){
    console.log(index);
}

 let result = plusnumbers(1,2)
 console.log(plusnumbers(1,4))

 console.log('♥♥♥♥♥♥♥♥♥');
 console.log(result);
 console.log('♥♥♥♥♥♥♥♥♥');
