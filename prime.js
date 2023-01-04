let num=100;
let count=0;
for ( let i=2; i<num; i++)
{ 
  if(num%i==0)
  count++;
};
(count>0) ? console.log("Composite Number") : console.log("Prime Number");