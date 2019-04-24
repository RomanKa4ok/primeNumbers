(function() {
	var simpleNumbersBtn = document.querySelector('.num__button');
	simpleNumbersBtn.onclick = primeNumbersDisplay;

})();

function primeNumbersDisplay() {
    var a = prompt('Enter First number:'),
    	b = prompt('Enter Second number:'),
    	first = 0,
    	second = 0,
    	primeList = [],
    	textOutput = document.querySelector('.output');
    //validation
    if (a > b) {
        first = b;
        second = a;
    }
    if (a < b) {
        first = a;
        second = b;
    }
    if (a == b) {
        alert('You can\'t use equal numbers!');
        a = prompt('Enter First number:');
        b = prompt('Enter Second number:');
    }
    if (a == '' || '' == b || a == null || null == b) {
        alert(`Please fill in both fields!`);
        a = prompt('Enter First number:');
        b = prompt('Enter Second number:');
    }
    

    prime:
        for (var i = first; i < second; i++) {
            
            for (var primeNum = 2; primeNum < i; primeNum++) {
                if (i % primeNum == 0) continue prime;
            }

            if (i >= 2) {
                primeList.push(i); 
            }

    } 

    	textOutput.innerHTML = 'Here are your prime numbers!: ';
    	textOutput.innerHTML += `${primeList}`;
    
   	
}