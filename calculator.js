function Key(button,element,value){ //creating object values
	this.button=button; // correlates to each button on screen 
  this.element= element; //links button element to object
  this.value= value; // adds integar or symbol string value to object variable
}
//list of variables in Key function in their empty state
let firstNumber=[];
let newNumber =[];
let numberSwitch=false;
let firstInt=0;
let newInt=[];
let total= 0;
let arrayCounter=0;


Key.prototype ={
	numberOutput: function (){
		(this.element).onclick=()=>{ //number button is clicked
    outputBar.textContent+=this.value;//the number is appended to the end of the chain of number in output bar
    if (arrayCounter==0){//this denotes if this is the number before or after a symbole is picked 
      firstNumber.push(this.value);
      console.log(`first number is ${firstNumber}`,arrayCounter);
      }
    else {newNumber.push(this.value);
    		console.log(`new number is ${newNumber}`, arrayCounter,newInt);}
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
    if (this.value == '+'||this.value == '-'||this.value =='/'){
    	if(newInt==0){//if symbol is not enter or clear and first number hasn't been established
          newInt[arrayCounter]=Number(firstNumber.join(""))//the string of numbers becomes an integer from the array          symbol=this.value//symbol variable becomes == to the symbol that was chosen
          firstNumber=[];// firstNubmer array reset to empty 
          arrayCounter++;
          newInt[arrayCounter]=this.value
          arrayCounter++;
          newNumber=[]
          console.log(newInt)
          }
       if(newNumber.length>0){//for when enter has been pressed
       	  newInt[arrayCounter]=Number(newNumber.join(""))//2nd integer is made from 2nd number array
          console.log(` `);
          symbol=this.value// used if doing math on total
          //secondNumber=[];//secondNumber array reset
          arrayCounter++;
          newInt[arrayCounter]=this.value
          arrayCounter++;
          newNumber=[]
          console.log(newInt)
    			}
       }  
      if( this.value == 'x'){
         if(firstInt==0){//if symbol is not enter or clear and first number hasn't been established
            newInt[arrayCounter]=Number(firstNumber.join(""))//the string of numbers becomes an integer from the array          symbol=this.value//symbol variable becomes == to the symbol that was chosen
            firstNumber=[];// firstNubmer array reset to empty 
            arrayCounter++;
            newInt[arrayCounter]='*'
            arrayCounter++
            newNumber=[]
            }
         if(newNumber.length>0){//for when enter has been pressed
            newInt[arrayCounter]=Number(newNumber.join(""))//2nd integer is made from 2nd number array
            console.log(` `);
            symbol=this.value// used if doing math on total
            //secondNumber=[];//secondNumber array reset
            arrayCounter++;
            newInt[arrayCounter]='*'
            arrayCounter++;
            newNumber=[]
            }
        }
        if (this.value == ' '){//clear button resets everything to beginning values again
        	firstNumber= [];
          newNumber=[];
          newInt=[];
          arrayCounter=0;
        }
        if (this.value == '='){// for enter
        
        	//if(arrayCounter==1){	newInt=Number(newNumber[arrayCounter].join(""));}//used if it hasn't happened yet 
          //actual math turning symbol into what is being performed
          newInt[arrayCounter]=Number(newNumber.join(""))
					//total=newInt.join('')
          
          console.log(total)//this way works but doesn't follow order of operations
          //maybe do for loop that if it finds a multiply or divide only performs those then splices array with the product
          //and removes the original numbers then repeat for loop looking for plus and minus
          for(let i=0;i<newInt.length; i++){
          	console.log(newInt, newInt.length,'for loop',i)
            if (total==0){total+=newInt[0]}
        	  if (newInt[i]=='*'){ total*=newInt[i+1]; i++}
            if (newInt[i]=='/'){ total/=newInt[i+1]; i++}
            if (newInt[i]=='+'){ total+=newInt[i+1]; i++}
            if (newInt[i]=='-'){ total-=newInt[i+1]; i++}
            else {console.log('I dont fucking knoW',i , newInt[i])}
            console.log(total)
            }
          }
          outputBar.textContent=(total)//total shown in output bar
          
          console.log(`this is ${total}`)
          
          secondNumber=[];//secondnumber array reset again probably redundant
          firstInt=total;//if not being cleared, math performed on total w/ new button clicks forming 2nd number
          newInt=[];
          
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
