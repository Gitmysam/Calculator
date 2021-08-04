function getHistry(){
return document.querySelector(".histry").innerText;
}
function printHistry(num){
  document.querySelector('.histry').innerText=num;
}
function getOutput(){
  return document.querySelector('.output').innerText;
}
function printOutput(num){
document.querySelector('.output').innerText=num;}
function reverseNumber(num){
  return Number(num.replace(/,/g,''));
}
var operator=document.getElementsByClassName('operator');
for(var i=0;i<operator.length;i++){
  operator[i].addEventListener('click',function(){
if(this.id=='clear'){
  printHistry('');
  printOutput('');
}
else if(this.id=='backspace'){
  var output=reverseNumber(getOutput()).toString();
  if(output){
    output=output.substr(0,output.length-1);
    printOutput(output);
  }
  if(output=='-'){
    printOutput('');
  }
}
else{
  var output=getOutput();
  var histry=getHistry();
  if(output==''&&histry!=''){
    if(isNaN(histry[histry.length-1])){
      histry=histry.substr(0,histry.length-1);
    }
  }
  if(output!=''||histry!=''){
    output=output==''?output:reverseNumber(output);
     histry=histry+output;
     if(this.id=='='){
       var result=eval(histry);
       printOutput(result);
       printHistry('');
     }
     else{
       histry=histry+this.id;
       printHistry(histry);
       printOutput('');
     }
  }
}

  });
}
var number=document.getElementsByClassName('number');
for(var i=0;i<number.length;i++){
  number[i].addEventListener('click',function(){
    var output=reverseNumber(getOutput());
if(output!=NaN){
  output=output+this.id;
  printOutput(output);
}
  });
}
