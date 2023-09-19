function Key(button,element,value){ //creating object values
	this.button=button; // correlates to each button on screen 
  this.element= element; //links button element to object
  this.value= value; // adds integar or symbol string value to object variable
}
//list of variables in Key function in their empty state
let firstNumber=[];
let secondNumber =[];
let numberSwitch=false;
let firstInt=0;
let secondInt=0;
let total= 0;
Key.prototype ={
	numberOutput: function (){
		(this.element).onclick=()=>{ //number button is clicked
    outputBar.textContent+=this.value;//the number is appended to the end of the chain of number in output bar
    if (numberSwitch==false){//this denotes if this is the number before or after a symbole is picked 
      firstNumber.push(this.value);
      console.log(`first number is ${firstNumber}`);
      }
    else secondNumber.push(this.value);
    		console.log(`second number is ${secondNumber}`);
    }
  }, 
  
  //still need to be able to do chaining ie 2+3*2=8
  //make a counting variable that increments by 1 when +-x/ pressed
  //create a new array based on that increment that stores the next number
  //create an array based on symbol thats pressed ie 2+3*2 creates array0=[2], array[1]=3, array[2]=2 symbol array=[+,x]
  //somehow transform that mix of arrays to an equation to do on enter.
  symbolOutput: function (){//function for when a symbole is picked
		(this.element).onclick=()=>{
    outputBar.textContent=this.value;//output bar clears and only symbol is shown until 2nd number started
    if (this.value == '+'||this.value == '-'||this.value == 'x'||this.value =='/'){
    	if(firstInt==0){//if symbol is not enter or clear and first number hasn't been established
          firstInt=Number(firstNumber.join(""))//the string of numbers becomes an integer from the array
          console.log(`firstInt=${firstInt} secondInt= ${secondInt}`);//debugging section
          symbol=this.value//symbol variable becomes == to the symbol that was chosen
          firstNumber=[];// firstNubmer array reset to empty 
          numberSwitch=true;//switch turned on to make new number buttons chain to the 2nd number
          }
       if(firstInt!=0||secondInt!=0){//for when enter has been pressed
       	  secondInt=Number(secondNumber.join(""))//2nd integer is made from 2nd number array
          console.log(`firstInt=${firstInt} secondInt= ${secondInt} numberSwitch is ${numberSwitch} `);
          symbol=this.value// used if doing math on total
          secondNumber=[];//secondNumber array reset
          
    			}
       }     
        if (this.value == ' '){//clear button resets everything to beginning values again
        	firstNumber= [];
          secondNumber=[];
          firstInt=0;
          secondInt=0;
          numberSwitch=false;
        }
        if (this.value == '='){// for enter
        
        	if(numberSwitch==true){	secondInt=Number(secondNumber.join(""));}//used if it hasn't happened yet 
          //actual math turning symbol into what is being performed
          if(symbol == '+'){total=firstInt+secondInt}
          if(symbol == '-'){total=firstInt-secondInt}
          if(symbol == 'x'){total = firstInt*secondInt}
          if(symbol == '/'){total = firstInt/secondInt}
          outputBar.textContent=(total)//total shown in output bar
          
          console.log(total, symbol)
          
          secondNumber=[];//secondnumber array reset again probably redundant
          firstInt=total;//if not being cleared, math performed on total w/ new button clicks forming 2nd number
          secondInt=0;
          symbol =''
          
        	}
       }
		},
}
const one= new Key('one',document.getElementById("1-button"),1);
one.numberOutput();
const two= new Key('two',document.getElementById("2-button"),2);
two.numberOutput();
const three= new Key('three',document.getElementById("3-button"),3);
three.numberOutput();
const four= new Key('four',document.getElementById("4-button"),4);
four.numberOutput();
const five= new Key('five',document.getElementById("5-button"),5);
five.numberOutput();
const six= new Key('six',document.getElementById("6-button"),6);
six.numberOutput();
const seven= new Key('seven',document.getElementById("7-button"),7);
seven.numberOutput();
const eight= new Key('eight',document.getElementById("8-button"),8);
eight.numberOutput();
const nine= new Key('nine',document.getElementById("9-button"),9);
nine.numberOutput();
const zero= new Key('zero',document.getElementById("0-button"),0);
zero.numberOutput();
const decimal= new Key('decimal',document.getElementById("decimal-button"), '.');
decimal.numberOutput();
const clear= new Key('clear',document.getElementById("clear-button"),' ');
clear.symbolOutput();
const plus= new Key('plus',document.getElementById("plus-button"),'+');
plus.symbolOutput();
const minus= new Key('minus',document.getElementById("minus-button"),'-');
minus.symbolOutput();
const multiply= new Key('multiply',document.getElementById("multiply-button"),'x');
multiply.symbolOutput();
const divide= new Key('divide',document.getElementById("division-button"),'/');
divide.symbolOutput();
const enter= new Key('enter', document.getElementById('enter-button'), '=')
enter.symbolOutput();

const outputBar= document.getElementById('output-input');
