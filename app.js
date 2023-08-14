
//*********Chapter 6 Qno1 ******
// var a= 10;
// document.write("Result: <br /> The value of a is "+ a+"<br /><br />");
// document.write("************************************<br /><br />")
// a = ++a;
// document.write("The value of ++a is "+ a+"<br />")
// document.write("Now the value of a is "+ a+ "<br /><br />")


// document.write("The value of a++ is "+ a++ +"<br />")
// document.write("Now the value of a is "+ a+"<br /><br />")

// a = --a;

// document.write("The value of --a is "+ a+"<br />")
// document.write("Now the value of a is "+ a+ "<br /><br />")



// document.write("The value of --a is "+ a--+"<br />")
// document.write("Now the value of a is "+ a+ "<br /><br />")

//*********Chapter 6 Qno2 ******

// var a=2;
// var b=1;
//var result= --a - --b + ++b + b--
//           1      0    1     1


// document.write("The a is " + a+"<br />")
// document.write("The b is " + b+"<br />")
// document.write("The result is "+result)


//*********Chapter 6 Qno3 ******

// var name = prompt("Enter Your name")
// document.write("Wwelcome "+name)

//*********Chapter 6 Qno4 ******

// var num = prompt("Enter number",5)
// document.write( num+" * 1 = "+num*1+"<br />")
// document.write( num+" * 2 = "+num*2+"<br />")
// document.write( num+" * 3 = "+num*3+"<br />")
// document.write( num+" * 4 = "+num*4+"<br />")
// document.write( num+" * 5 = "+num*5+"<br />")
// document.write( num+" * 6 = "+num*6+"<br />")
// document.write( num+" * 7 = "+num*7+"<br />")
// document.write( num+" * 8 = "+num*8+"<br />")
// document.write( num+" * 9 = "+num*9+"<br />")
// document.write( num+" * 10 = "+num*10+"<br />")

//*********Chapter 6 Qno5 ******

// var sub1 = prompt("Enter first Sub")
// var sub2 = prompt("Enter second Sub")
// var sub3 = prompt("Enter third Sub")
// var totalmarks=100;
// var sub1marks= +prompt("Subject1 Number")
// var sub2and3marks= +prompt("Subject2 and third subject Number")

// var Percent1= sub1marks/totalmarks*100;
// var percent2and3= sub2and3marks/totalmarks*100
// var subTotalMarks=totalmarks*3
// var subObtMarks=sub1marks+sub2and3marks+sub2and3marks
// var fullpercent=(Percent1+percent2and3+percent2and3)/3

// document.write("<th><b>Subject    Total Marks    Obtained Marks    Percentage </b></th>  <br />")
// document.write(sub1+"           "+ totalmarks+" "+sub1marks+" "+Percent1+ "<br /><br />")
// document.write(sub2+"           "+totalmarks+" "+sub2and3marks+" "+percent2and3+"<br /> <br />")
// document.write(sub3+"           "+totalmarks+" "+sub2and3marks+" "+percent2and3+"<br /> <br />")
// document.write(" "+ subTotalMarks+" "+ subObtMarks +" "+fullpercent)



//*********Chapter 7 Qno1 ******

// var city = prompt("Enter city name")
// if(city==="Karachi")
// {
//     document.write("Welcome the city of lights");
//}


//*********Chapter 7 Qno2 ******

// var gender= prompt("Enter your gender")
// var message;
// if(gender==="Male"){
//     message="Hello, Sir"

// }
// if(gender==="Female"){
//     message="Hello,Miss"
// }

// alert(message)

//*********Chapter 7 Qno3 ******

// var signal= prompt("What he signal sign")

// if(signal==="red"){
//     document.write("Must Stop")
// }
// else if(signal==="yellow"){
//     document.write("Ready to Move")
// }
// else if(signal==="green")
// {
//     document.write("Move Now")
// }

//*********Chapter 7 Qno4 ******

// var fuel = prompt("Your fuel")

// if(fuel<0.25){
//     alert("Please refill the fuel in your car ")
// }


//*********Chapter 7 Qno5 ******

//a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }  condition true so statement run

//b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }  condition false due to post increment

//c
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }  condition 2 and 4 is true

//d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }  statement execute condition true

//e
// if (True){
// alert("True");
// }
// if (false)){
// alert("False");
// }   true printed due to true condition

//f
// if("car" < "cat"){
// alert("car is smaller than cat");
// }


//*********Chapter 7 Qno6 ******

// var sub1= +prompt("Enter first Subject Number")
// var sub2= +prompt("Enter second Subject Number")
// var sub3= +prompt("Enter third Subject Number")
// var ObtainedMarks=sub1+sub2+sub3
// var totalMarks= 300;
// var percentage= (sub1+sub2+sub3)/totalMarks*100;
// if(percentage>=80){
//     document.write(totalMarks+"Marks Obtained "+ObtainedMarks+" "+percentage+"% Grade: A-one <br /> Remarks: Excellent")
// }
// else if(percentage>=70&&percentage<=80){
//     document.write(totalMarks+"Marks Obtained "+ObtainedMarks+" "+percentage+"% Grade: A <br /> Remarks: Good")
// }

// else if(percentage>=60&&percentage<=70){
//     document.write(totalMarks+"Marks Obtained "+ObtainedMarks+" "+percentage+ "% Grade: B <br /> Remarks: You need to improve")
// }
// else{
//     document.write(totalMarks+"Marks Obtained "+ObtainedMarks+" "+percentage+ "% Fail Sorry")
// }

//*********Chapter 7 Qno7 ******
// var secretNum= 6
// var user = +prompt("Guess the number")
// if(user===secretNum){
// alert("Bingo! Correct answer")
// }
// else if(++secretNum===secretNum){
//     alert("Close Enough to correct answer")
// }

//*********Chapter 7 Qno8 ******

// var num= +prompt("Enter your Number")
// if(num%3===0){
//     alert("Number is divisible by 3")
// }
// else {
//     alert("Not divide by 3")
// }

//*********Chapter 7 Qno9 ******
// var num= prompt("Enter your Number")
// if(num%2===0){
//     alert("Number is even")
// }
// else{
//     alert("Odd Number")
// }

//*********Chapter 7 Qno10 ******

// var temp= +prompt("Enter Temperature")
// if (temp>40) {

//     alert("It is too hot outside")
// }
// else if(temp>30&&temp<40){
//     alert("The weather today is normal")
// }
// else if(temp>20&&temp<30){
//     alert("Today weather is cool")
// }
// else{
//     alert("OMG!Today weather is too cool")
// }

//*********Chapter 7 Qno11 ******

// var num1= +prompt("Enter first Number")
// var num2 = +prompt("Enter Second Number")
// var operation=prompt("Please enter operation")
// var result;

// if(operation==="+")
// {
//    result= num1+num2;
// }
// else if(operation==="-"){
//     result = num1-num2
// }
// else if(operation==="*"){
//     result = num1*num2
// }
// else if(operation==="/"){
// result = num1/num2
// }
// else if(operation==="%"){
//     result = num1%num2
// }
// else{
//     result="invalid operator"
// }
// alert(result)

//*********Chapter 12 Qno1 ******

// var char = prompt("Enter ASCII Number")
// var result= char.charCodeAt(0);
// alert(result)

//*********Chapter 11 Qno2 ******

// var int1= prompt("Enter first Number")
// var int2= prompt("Enter second Number")
// if(int1>int2){
//     alert("Integer 1 is larger")
// }
// else if(int1<int2){
//     alert("Integer 2 is larger")
// }
// else{
//     alert("Both are equal")
// }

//*********Chapter 11 Qno3 ******

// var num = prompt("Enter your Number")
// if(num < 0)
// {
//     alert("The number is negative")
// }
// else if(num>0){
//     alert("Number is positive")
// }
// else{
//     alert("zero")
// }


//*********Chapter 11 Qno4 ******
// var char = prompt("Enter your Character ")
// if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//     alert(true +" is vowel");
// }
// else{
//     alert(false + " is not vowel")
// }


//*********Chapter 11 Qno5 ******

// var corrPass="Daniyal"
// var pass=prompt("Enter your Password")
// if(pass===""){
//     alert("Please Enter Your Password")
// }
// else if(pass===corrPass){
//     alert("Correct! The password you entered matches the original password.")
// }
// else{
//     alert("Invalid Password")
// }


//*********Chapter 11 Qno6 ******

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }
// alert(greeting)

//*********Chapter 11 Qno7 ******

// var clockTime= prompt("Enter your desire hour")
// if(clockTime >= "0000" &&clockTime < "1200" ){
//     alert("Good Morning")
// }
// else if(clockTime >= "1200" &&clockTime < "1700"){
//     alert("Good Afternoon")
// }
// else if(clockTime >= "1700" &&clockTime < "2100"){
//     alert("Good Evening")
// }
// else if(clockTime >= "2100" &&clockTime < "2359"){
//     alert("Good Night")
// }
// else{
//     alert("Wrong")
// }
