function Key(button,element,value){
	this.button=button;
  this.element= element;
  this.value= value;
}

Key.prototype ={
	numberOutput: function (){
		(this.element).onclick=()=>outputBar.textContent+=this.value
		},
  symbolOutput: function (){
		(this.element).onclick=()=>outputBar.textContent=this.value
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
const enter= new Key('enter', document.getElementById('enter-button'), 'You Hit Enter')
enter.symbolOutput();

const outputBar= document.getElementById('output-input');


