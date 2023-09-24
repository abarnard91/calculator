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
let symbol='';


Key.prototype ={
	numberOutput: function (){
		(this.element).onclick=()=>{ //number button is clicked
      if(symbol=="="){
        outputBar.textContent=''; 
        symbol=''
        firstNumber=[0];
        arrayCounter=0;
      }
      outputBar.textContent+=this.value;//the number is appended to the end of the chain of number in output bar
      if (arrayCounter==0){//this denotes if this is the number before or after a symbole is picked 
        firstNumber.push(this.value);
        console.log(`first number is ${firstNumber}`,arrayCounter);
        }
      else {newNumber.push(this.value);
          console.log(`new number is ${newNumber}`, arrayCounter,newInt);}
      }
  }, 
  
  symbolOutput: function (){//function for when a symbol is picked
		(this.element).onclick=()=>{
    outputBar.textContent=this.value;//output bar clears and only symbol is shown until 2nd number started
    if (this.value == '+'||this.value == '-'||this.value =='/'||this.value=='x'){
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

          symbol=this.value// used if doing math on total
          //secondNumber=[];//secondNumber array reset
          arrayCounter++;
          newInt[arrayCounter]=this.value
          arrayCounter++;
          newNumber=[]
          console.log(newInt)
    			}
       }  
    if (this.value == ' '){//clear button resets everything to beginning values again
        	firstNumber=[];
          newNumber =[];
          numberSwitch=false;
          firstInt=0;
          newInt=[];
          total= 0;
          arrayCounter=0
          sybol='';
        }
    if (this.value == '='){// for enter

          //actual math turning symbol into what is being performed
          newInt[arrayCounter]=Number(newNumber.join(""))
					//total=newInt.join('')
          let total=0;
          console.log('Go into the Loop')
          //while (newInt.length>1){
          console.log("ENTERING THE LOOP")
          //multiply
            for(let i=0;i<newInt.length; i++){
              if(newInt[i]=='x'){
                console.log(`newInt[i-1] is ${newInt[i-1]} and newInt[I+1] is ${newInt[i+1]}`)
                total=newInt[i-1]*newInt[i+1];
                newInt.splice((i-1),3,total);
              }
              else {console.log(`array value is ${newInt[i]} and i is ${i}`)}
            
              console.log(newInt)}
          //divide   
            for(let i=0;i<newInt.length; i++){
              if(newInt[i]=='/'){
                console.log(`newInt[i-1] is ${newInt[i-1]} and newInt[I+1] is ${newInt[i+1]}`)
                total=newInt[i-1]/newInt[i+1];
                newInt.splice((i-1),3,total);}
              else {console.log(`array value is ${newInt[i]} and i is ${i}`)}
              
              console.log(newInt)}
   
          //addition  
            for(let i=0;i<newInt.length; i++){
            if(newInt[i]=='+'){
              console.log(`newInt[i-1] is ${newInt[i-1]} and newInt[I+1] is ${newInt[i+1]}`)
              total=newInt[i-1]+newInt[i+1];
              newInt.splice((i-1),3,total);
            }
            else {console.log(`array value is ${newInt[i]} and i is ${i}`)}
            
            console.log(newInt)
            }
          //subtract
          for(let i=0;i<newInt.length; i++){
            if(newInt[i]=='-'){
              console.log(`newInt[i-1] is ${newInt[i-1]} and newInt[I+1] is ${newInt[i+1]}`)
              total=newInt[i-1]-newInt[i+1];
              newInt.splice((i-1),3,total);
            }
            else {console.log(`array value is ${newInt[i]} and i is ${i}`)}
            console.log( newInt) }
          //if(newInt.values()==undefined){break}
          //}
          total=Number(newInt.join(''))
          outputBar.textContent=total;
          firstNumber=[total];//makes firstnumber the total for chaining arithmetic (aka 2=+3=5+5=10)
          newNumber=[];//resets 2nd (or nth) number for new math 
          newInt=[];
          arrayCounter=1;
          symbol=this.value;
          }
    }

  }
};
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
