
// > greater than: 10 > 9 this is 'true'
// < less than: 9 < 10 this is 'true'
// >= greater than or equal to: 10 >= 9 this is 'true'
// <= less than or equal to: 10 <= 9 this is 'flase'
// == equal to: 10 == 9 this is 'false'
// != not equal to: 10 != 9 this is 'true'

// if, if-else, if-else-if

//if
if(10 < 9) {
    console.log("10 < 9");
}


// if-else
if(10 <= 9) {
    console.log('10 <= 9');
} else {
    console.log('10 > 9');
}

// if-else-if
if(10 <= 9) {
    console.log('10 <= 9')
} else if(10 == 9) {
    console.log('10 == 9');
}

// for
let i = 0; // this is a counter;

/*
    given initial value, 
    check if i is less than or equal to 10 if it is not then terminate for loop, 
    increment by 1
*/
let sum = 0;
for(i; i <= 10; i++ ) { 
    if( i % 2 == 0) {
        sum += i;
    }
}

console.log(`sum is: ${sum}`);

// while
