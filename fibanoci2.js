var fibanoci= function(result,len){
var num1= result[0];
var num2= result[1];
var next;
var count =2;
while (count<len)
{
next= num1+num2;
num1= num2;
num2 = next;
result.push(next);
count++;
}
return result;
}