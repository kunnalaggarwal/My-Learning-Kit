function Ex1() {

    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("flowchart").setAttribute("src", "flowchart/ex1.jpg");
    
    document.getElementById("js").setAttribute("src", "images/Ex1.jpg");
    document.getElementById("output").innerHTML = "Tells If a function is Prime or Not";
 
    var num = parseInt(prompt("Enter a number:"));
    var prime = true;
    var d = 2;
 
    while (prime == true && d <= num / 2) {
       if (num % d == 0) {
          prime = false;
          d++;
       }
       else {
          d++;
       }
    }
 
    if (prime == true) {
       alert(num + " is prime");
    }
    else {
       alert(num + " is not prime");
    }
 }
 
 function Ex2() {
 
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("js").setAttribute("src", "images/Ex2.jpg");
    document.getElementById("flowchart").setAttribute("src", "flowchart/ex2.jpg");
 
    document.getElementById("output").innerHTML = "checks if sum of first 4 numbers is equal to sum of next 4 numbers";
    var sum1 = 0;
    var sum2 = 0;
 
    for (var i = 1; i <= 4; i++) {
       var num1 = parseInt(prompt("Enter a number:"));
       sum1 = sum1 + num1;
    }
 
    for (var i = 1; i <= 4; i++) {
       var num2 = parseInt(prompt("Enter a number:"));
       sum2 = sum2 + num2;
    }
 
    if (num1 == num2) {
       alert("yes");
    }
    else {
       alert("no")
    }
 }
 
 
 function Ex3() {
 
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("js").setAttribute("src", "images/Ex3.jpg");
    document.getElementById("flowchart").setAttribute("src", "flowchart/ex3.jpg");
 
    document.getElementById("output").innerHTML = "Prints all the primes lower than input value";
 
    var num = parseInt(prompt("Enter a number :"));
 
    for (var i = 2; i <= num; i++) {
       if (prime(i) == true) {
          alert(i);
       }
    }
 }
 
 function Ex4() {
 
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("js").setAttribute("src", "images/Ex4.jpg");
    document.getElementById("flowchart").setAttribute("src", "flowchart/ex4.jpg");
 
 
    document.getElementById("output").innerHTML = "checks if number is prime and has a 7 in it";
    var n = parseInt(prompt("Enter a number : "));
 
    for (var i = 2; i <= n; i++) {
       if (prime(i) == true && has7(i) == true) {
          alert(i);
       }
    }
 }
 
 function Ex5() {
 
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("js").setAttribute("src", "images/Ex5.jpg");
    document.getElementById("flowchart").setAttribute("src", "flowchart/ex5.jpg");
 
    document.getElementById("output").innerHTML = "checks if prime number has a prime digit in it."
    var n = parseInt(prompt("Enter a number : "));
 
    for (var i = 2; i <= n; i++) {
       if (prime(i) == true && digitPrime(i) == true) {
          alert(i);
       }
    }
 }
 
 function Ex6() {
 
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("js").setAttribute("src", "images/Ex6.jpg");
    document.getElementById("flowchart").setAttribute("src", "flowchart/ex6.jpg");
 
    document.getElementById("output").innerHTML = "prints the digits of number seperatly";
 
    var a = parseInt(prompt("Please enter a number: ", ""));
 
    var b;
 
    while (a != 0) {
       b = a;
       b = b % 10;
       a = a / 10;
       a = Math.floor(a);
       alert(b);
    }
 }
 
 function Ex7() {
 
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("js").setAttribute("src", "images/Ex7.jpg");
    document.getElementById("flowchart").setAttribute("src", "flowchart/ex7.jpg");
 
    document.getElementById("output").innerHTML = "output number of 7s";
 
    var a = parseInt(prompt("Please enter a number: ", ""));
 
    var b;
    var counter = 0;
 
    // translate rest of your flowcharts to js here:
 
    while (a != 0) {
       b = a;
       b = b % 10;
       a = a / 10;
       a = Math.floor(a);
 
       if (b == 7) {
          counter++;
       }
 
    }
    alert(counter);
 }
 
 function Ex8() {
 
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("js").setAttribute("src", "images/Ex8.jpg");
    document.getElementById("flowchart").setAttribute("src", "flowchart/ex8.jpg");
 
    document.getElementById("output").innerHTML = "outputs sum of the digits";
    var a = parseInt(prompt("Please enter a number: ", ""));
    var sum = 0;
    var b;
 
    // translate rest of your flowcharts to js here:
 
    while (a != 0) {
       b = a;
       b = b % 10;
       a = a / 10;
       a = Math.floor(a);
 
       sum = sum + b;
 
    }
    alert(sum);
 }
 
 function Ex9() {
 
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("js").setAttribute("src", "images/Ex9.jpg");
    document.getElementById("flowchart").setAttribute("src", "flowchart/ex9.jpg");
 
    document.getElementById("output").innerHTML = "checks wheather reverse of a number is equal to the number";
 
    var a = parseInt(prompt("Please enter a number: ", ""));
 
    var b;
    var reverse = 0;
    var temp = a;
 
    while (a != 0) {
       b = a;
       b = b % 10;
       a = a / 10;
       reverse = (10 * reverse) + b;
       a = Math.floor(a);
    }
 
    if (reverse == temp) {
       alert("yes")
    }
    else {
       alert("no");
    }
 }
 
 function Ex10() {
 
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("js").setAttribute("src", "images/Ex10.jpg");
    document.getElementById("flowchart").setAttribute("src", "flowchart/ex10.jpg");
 
    document.getElementById("output").innerHTML = "factorial";
 
    var a = parseInt(prompt("Please enter a number: ", ""));
    var i = a;
    var n = 1;
 
 
    // translate rest of your flowcharts to js here:
 
    while (n < i) {
       a = a * n;
       n++;
    }
    alert(a);
 }
 
 function Ex11() {
 
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("js").setAttribute("src", "images/Ex11.jpg");
    document.getElementById("flowchart").setAttribute("src", "flowchart/ex11.jpg");
 
    document.getElementById("output").innerHTML = "fabonacci series :" + "<br>";
    var a = parseInt(prompt("Please enter a number: ", ""));
 
    var b = 0;
    var n = 1;
    var temp = 0;
 
    while (temp < a) {
 
       n = n + b;
       x = n;
       n = b;
       b = x;
 
       temp++;
 
       document.getElementById("output").innerHTML += n + ",";
    }
 }
 
 function Ex12() {
 
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("js").setAttribute("src", "images/Ex12.jpg");
    document.getElementById("flowchart").setAttribute("src", "flowchart/ex12.jpg");
 
 
    var outputObj = document.getElementById("output");
    // this statement receives some data and parses it to integer
    var a = parseInt(prompt("Please enter a number: ", ""));
    var i = 1;
    var j = 1;
 
    while (i <= a) {
 
       while (j <= i) {
          outputObj.innerHTML += "XX ";
          j++;
       }
       i++;
       outputObj.innerHTML += "</br>";
       j = 1;
    }
 }
 
 function Ex13() {
 
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("js").setAttribute("src", "images/Ex13.jpg");
    document.getElementById("flowchart").setAttribute("src", "flowchart/ex13.jpg");
 
    document.getElementById("output").innerHTML = "prime factors: </br>";
    // Enter 2 numbers a and b
 
    var a = (prompt("Enter a number :"));
 
    for (var i = 1; i <= a / 2; i++) {
       if (a % i == 0 && prime(i)) {
          document.getElementById("output").innerHTML += i + " ";
       }
    }
 }
 
 function Ex14() {
 
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("js").setAttribute("src", "images/Ex14.jpg");
    document.getElementById("flowchart").setAttribute("src", "flowchart/ex14.jpg");
 
    var a = parseInt(prompt("Enter a number:"));
    var b = parseInt(prompt("Enter a number:"));
    var c = parseInt(prompt("Enter a number:"));
 
    var p = (a + b + c) / 2;
 
    var area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
 
    document.getElementById("output").innerHTML = "area : " + area;
 }
 
 function Ex15() {
 
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("js").setAttribute("src", "images/Ex15.jpg");
    document.getElementById("flowchart").setAttribute("src", "flowchart/ex15.jpg");
 
    var a = parseInt(prompt("Enter a number:"));
    var b = parseInt(prompt("Enter a number:"));
    var c = parseInt(prompt("Enter a number:"));
 
    var d = Math.sqrt((Math.pow(b, 2)) - (4 * a * c));
    var quadForm1 = (-b + d) / (2 * a);
    var quadForm2 = (-b - d) / (2 * a);
 
    document.getElementById("output").innerHTML = "one root : " + quadForm1 + "</br> another root :" + quadForm2;
 }
 
 function Ex16() {
 
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("js").setAttribute("src", "images/Ex16.jpg");
    document.getElementById("flowchart").setAttribute("src", "flowchart/ex16.jpg");
 
    var a = parseInt(prompt("Enter a number:"));
    var b = parseInt(prompt("Enter a number:"));
    var c = parseInt(prompt("Enter a number:"));
 
    var d = ((Math.pow(b, 2)) - (4 * a * c));
 
    if (d > 0) {
       document.getElementById("output").innerHTML="it has 2 distinct roots";
    }
    else if (d < 0) {
       document.getElementById("output").innerHTML="it has no roots";
    }
    else {
       document.getElementById("output").innerHTML="it has identical roots";
    }
 
 }
 
 function Ex17() {
 
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("js").setAttribute("src", "images/Ex17.jpg");
    document.getElementById("flowchart").setAttribute("src", "flowchart/ex17.jpg");
 
    var a = parseInt(prompt("Enter a number:"));
 
    if (a > 0) {
       document.getElementById("output").innerHTML = "positive";
    }
    else if (a < 0) {
       document.getElementById("output").innerHTML = "negative";
    }
    else {
       document.getElementById("output").innerHTML = "0";
    }
 }
 
 function Ex18() {
 
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("js").setAttribute("src", "images/Ex18.jpg");
    document.getElementById("flowchart").setAttribute("src", "flowchart/ex18.jpg");
 
    var a = parseInt(prompt("Enter a number:"));
 
    if (a % 3 == 0) {
       if (a % 2 == 0) {
          document.getElementById("output").innerHTML = "divisible by 6";
       }
    }
    else {
       document.getElementById("output").innerHTML = "not divisible by 6";
    }
 }
 
 function Ex19() {
 
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
 
    document.getElementById("js").setAttribute("src", "images/Ex19.jpg");
    document.getElementById("flowchart").setAttribute("src", "flowchart/ex19.jpg");
 
    var a = parseInt(prompt("Enter a number:"));
    var b = parseInt(prompt("Enter a number:"));
    var c = parseInt(prompt("Enter a number:"));
    document.getElementById("output").innerHTML = "highest : </br>";
    if (a > b) {
       if (a > c) {
          document.getElementById("output").innerHTML += a;
       }
       else {
          document.getElementById("output").innerHTML += c;
       }
    }
    else if (b > c) {
       document.getElementById("output").innerHTML += b;
    }
    else {
       document.getElementById("output").innerHTML += c;
    }
 
 }
 
 function Ex20() {
 
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
 
    document.getElementById("js").setAttribute("src", "images/Ex20.jpg");
    document.getElementById("flowchart").setAttribute("src", "flowchart/ex20.jpg");
 
    var a = parseInt(prompt("Enter a number:"));
    var decimal = 0;
 
    for (var i = 1; i <= a; i++) {
       var b = parseInt(prompt("Enter a number:"));
       b = b * Math.pow(2, a - i);
       decimal = decimal + b;
    }
    document.getElementById("output").innerHTML = decimal;
 }
 
 function prime(num) {
    var flag = true;
    var d = 2;
 
    while (flag == true && d <= num / 2) {
       if (num % d == 0) {
          flag = false;
       }
       d++;
    }
    return flag;
 }
 
 function has7(num) {
    var a;
    var sFlag = false;
    while (num != 0) {
       a = num;
       a = a % 10;
       num = Math.floor(num / 10);
 
       if (a == 7) {
          sFlag = true;
       }
    }
    return sFlag;
 }
 
 function digitPrime(num) {
    var a;
    var dFlag = true;
    while (num != 0 && dFlag == true) {
       a = num;
       a = a % 10;
       num = Math.floor(num / 10);
       if (prime(a) == false || a == 1) {
          dFlag = false;
       }
    }
    return dFlag;
 }
 
 function checkUncheck1() {
    if (document.getElementById("check1").checked == true) {
       document.getElementById("flowchart").style.display = "inline";
    }
    else {
       document.getElementById("flowchart").style.display = "none";
    }
 }
 
 function checkUncheck2() {
    if (document.getElementById("check2").checked == true) {
       document.getElementById("js").style.display = "inline";
    }
    else {
       document.getElementById("js").style.display = "none";
    }
 }
 