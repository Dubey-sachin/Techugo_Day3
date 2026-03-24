//palindrome checker

let n=141;
let realno=n;
let temp=0;

while(n>0)
{
  let a=n%10;
  temp=temp*10+a;
  n=Math.floor(n/10);
}
if(realno===temp)
{
    console.log("Given nmber is palindrome")
}
else{
    console.log("given number is not palindrome")
}

// factorial

function factorial(n)
{  if(n==1 || n==0)
{
    return 1;
}
  return n * factorial(n-1);
}

console.log(factorial(5));

// reverse the string without built in function

// let s="Sachin";
// let f=0,l=s.length-1;
// while(f<l)
// {
//     let temp;
//     temp=s[f];
//     s[f]=s[l];
//     s[l]=temp;
//     l--;
//     f++;
// }
// console.log(" reverse String is "+ s);

let s="Sachin";
let f=0,l=s.length-1;
s=s.split("");
while(f<l)
{
    let temp;
    temp=s[f];
    s[f]=s[l];
    s[l]=temp;
    l--;
    f++;
}
s=s.join("");
console.log(" reverse String is "+ s);

// sum of array

let array=[1,2,3,4,5];

let sum=0;

let size=array.length

for(let i=0; i<size; i++)
{
    sum=sum+array[i];
}
console.log(" sum is ",sum)

// count vowels in string

{
    let g="sachindubey";
let strinSize=g.length;
let count=0;

for(let i=0; i<=strinSize-1; i++)
{
    if(g[i]==='a' || g[i]==='e' || g[i]==='i' || g[i]==='o' || g[i]==='u'||g[i]==='A' ||g[i]==='E' ||g[i]==='I' ||g[i]==='O' ||g[i]==='U')
    {
        count++;
    }
}
console.log(count);

}

