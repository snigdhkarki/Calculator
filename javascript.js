let op = 0;
let d = "";
let num1 =0;
let num2 = 0;
let s =0;

let display = document.querySelector(".upparent");
let a1 = document.querySelector(".a1");
let a2 = document.querySelector(".a2");
let a3 = document.querySelector(".a3");
let a4 = document.querySelector(".a4");
let a5 = document.querySelector(".a5");
let a6 = document.querySelector(".a6");
let a7 = document.querySelector(".a7");
let a8 = document.querySelector(".a8");
let a9 = document.querySelector(".a9");
let a0 = document.querySelector(".a0");
let ae = document.querySelector(".ae");
let aa = document.querySelector(".aa");
let as = document.querySelector(".as");
let am = document.querySelector(".am");
let ad = document.querySelector(".ad");
let ac = document.querySelector(".ac");
a1.addEventListener('click',
function ()
{
    let dis = document.createTextNode('1');
    display.appendChild(dis);
    d = d+1;
    
}
);
a2.addEventListener('click',
function ()
{
    let dis = document.createTextNode('2');
    display.appendChild(dis);
    d = d+2;
}
);
a3.addEventListener('click',
function ()
{
    let dis = document.createTextNode('3');
    display.appendChild(dis);
    d = d+3;
}
);
a4.addEventListener('click',
function ()
{
    let dis = document.createTextNode('4');
    display.appendChild(dis);
    d = d+4;
}
);
a5.addEventListener('click',
function ()
{
    let dis = document.createTextNode('5');
    display.appendChild(dis);
    d= d+5;
}
);
a6.addEventListener('click',
function ()
{
    let dis = document.createTextNode('6');
    display.appendChild(dis);
    d =d+6;
}
);
a7.addEventListener('click',
function ()
{
    let dis = document.createTextNode('7');
    display.appendChild(dis);
    d = d+7;
}
);
a8.addEventListener('click',
function ()
{
    let dis = document.createTextNode('8');
    display.appendChild(dis);
    d =d+8;
    
}
);
a9.addEventListener('click',
function ()
{
    let dis = document.createTextNode('9');
    display.appendChild(dis);
    d= d+9;
}
);
a0.addEventListener('click',
function ()
{
    let dis = document.createTextNode('0');
    display.appendChild(dis);
    d = d+0;
}
);
ae.addEventListener('click',
function ()
{
    
    op++;
    s = 1;
    
    if(op == 2){calc();}
    
    
    
    
}
);
aa.addEventListener('click',
function ()
{
    let dis = document.createTextNode('+');
    op++;
    
    if(op == 2){calc();}
    display.appendChild(dis);
    d = d+"+";
    
    
}
);
as.addEventListener('click',
function ()
{
    let dis = document.createTextNode('-');
    op++;
    
    if(op == 2){calc();}
    display.appendChild(dis);
    d =d+'-';
    
    
}
);
am.addEventListener('click',
function ()
{
    let dis = document.createTextNode('*');
    op++;
    
    if(op == 2){calc();}
    display.appendChild(dis);
    d = d+'*';
    
    
}
);
ad.addEventListener('click',
function ()
{
    let dis = document.createTextNode('/');
    op++;
    
    if(op == 2){calc();}
    display.appendChild(dis);
    d =d+"/";
    
}
);

ac.addEventListener('click',
function ()
{
    display.innerHTML = '';
    
    
}
);



function calc()
{
    num1 = 0;
    num2 = 0;
    let count =0;
    let ope = "";
    let result = 0;
    for(let i =0;i<= (d.length-1);i++)
    {
        if((!(d.charAt(i)=='/'||d.charAt(i)=='*'||d.charAt(i)=='+'||d.charAt(i)=='-'||d.charAt(i)=='='))&&(count==0))
        {
            num1 = num1+  d.slice(i,i+1);
            
            

        }
        else if(d.charAt(i)=='/'||d.charAt(i)=='*'||d.charAt(i)=='+'||d.charAt(i)=='-'||d.charAt(i)=='=')
        {
            count++;
            ope = ope + d.charAt(i);
            
        } 
        else
        {
            num2 = num2+ d.slice(i,i+1);

        }
    }
    if(ope == '+')
    {
        result = Number(num1) + Number(num2); 
    }
    else if(ope == '-')
    {
        result = num1 - num2;
    }
    else if(ope == '*')
    {
        result = num1*num2;

    }
    else
    {
        result = num1/num2;
    }
    if (s == 0)
    {
        display.innerHTML = '';
    let res = document.createTextNode(result);
    display.appendChild(res);
    d = result.toString();
    op = 1;

    }
    else
    {
        display.innerHTML = '';
        let res = document.createTextNode(result);
    display.appendChild(res);
    d = result.toString();
    op = 0;
    s = 0;
        
    }


    


}


//does not work for negetive numbers//











