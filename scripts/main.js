//Global
let i = 0; //default value
let num = 0;

//Variables
var loop1 = document.getElementById('loop1'),
loop2 = document.getElementById('loop2'),
loop3 = document.getElementById('loop3'),
loop4 = document.getElementById('loop4'),
loop5 = document.getElementById('loop5'),
loop6 = document.getElementById('loop6'),
loop7 = document.getElementById('loop7'),
loop8 = document.getElementById('loop8');


//Print 1-10
function ex1(){
	let i = 1;
	while (i <= 10){
		loop1.innerHTML += (i + ', ');
  		i++;
	}
}

//Print 1-10 in reverse
function ex2(){
	for (i = 10; i >= 1; i--){
    	loop2.innerHTML += (i + ', ');
	}
}

//Print Alphabet
function ex3() {
	let letters = [
	'A','B','C','D','E','F', 'G', 'H', 'I', 'J', 'K', 
	'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
	'V', 'W', 'X', 'Y', 'Z'];
	for (i = 0; i < letters.length; i++){
    	loop3.innerHTML += (letters[i] + ', ');
  	}
}

//Print Sum of Numbers 1-100
function ex4() {
  	for (i = 0; i <= 100; i++) {
    	num += i;
    }
  	loop4.innerHTML = num + '<br/><br/>';
}

//Print Even Numbers 1-100 
function ex5() {
	for (i = 0; i <= 100; i++){
    	if(i % 2 === 1){
       		continue;
       	} else if (i % 2 === 0) {
         	loop5.innerHTML += (i + ', ');         
       	}   
  	}
}

//Print Odd Numbers 1-100
function ex6() {
	for (i = 0; i < 100; i++) {
    	if (i % 2 === 1) {
      		loop6.innerHTML += (i + ', ');
    	} else if (i % 2 === 0) {
      	continue;
    	}
  	}
}

//Print Sum of Even Numbers 1-100
function ex7() {
	for (i = 0; i <= 100; i++) {
    	if (i % 2 === 1) {
      		continue;
    	} else {
      	num += i;
    }  
    	loop7.innerHTML = num;
  	}  
}

//Print Sum of all Odd Numbers 1-100
function ex8() {
	for (i =0; i <= 100; i++) {
    	if (i % 2 === 1) {
      		num += i;
    	} else {
     		continue;
    	} loop8.innerHTML = num;
  	}
}
