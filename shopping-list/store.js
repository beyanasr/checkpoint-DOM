                   //first item
document.getElementById("buttn+1").addEventListener("click", function(){
    var text=document.getElementById("plus1").value;
    text++;
    document.getElementById("plus1").value=text;
    total1()
    totalsum()
} )
document.getElementById("buttn-1").addEventListener("click", function(){
    var text=document.getElementById("plus1").value;
    if(text>=1){
    text--;
    document.getElementById("plus1").value=text;
    }
    total1()
    totalsum()
} )


let menu=document.getElementById("parent");
let item1=document.getElementById("child1");
function remove(){
    menu.removeChild(item1);
}
function heart()
{let love=document.getElementById("like");

    if (love.style.color=='black')
    {
        love.style.color='#FF0000';
    }
    else{ love.style.color='black'}
    
}
                   //SECOND ITEM

document.getElementById("buttn+2").addEventListener("click", function()
{ var num=document.getElementById("plus2").value;
num++;
document.getElementById("plus2").value=num;
total2()
totalsum()
})

document.getElementById("buttn-2").addEventListener("click", function()
{ var num=document.getElementById("plus2").value;
if(num>=1){
num--;
document.getElementById("plus2").value=num;
}
total2 ()
totalsum()
})

let menu1=document.getElementById("parent");
let item2=document.getElementById("child2");
function remove1(){
    menu1.removeChild(item2);
}
function heart2(){
    love=document.getElementById("like2");
    if (love.style.color=='black')
    {
        love.style.color='#FF0000';
    }
    else{ love.style.color='black'}
    
}

                      //third item

document.getElementById("buttn+3").addEventListener("click", function()
{ var num=document.getElementById("plus3").value;
num++;
document.getElementById("plus3").value=num;
total3 ()
totalsum()
})

document.getElementById("buttn-3").addEventListener("click", function()
{ var num=document.getElementById("plus3").value;
if(num>=1){
num--;
document.getElementById("plus3").value=num;
}
total3 ()
totalsum()
})

let menu2=document.getElementById("parent");
let item3=document.getElementById("child3");
function remove2(){
    menu2.removeChild(item3);
}
function heart3(){
   let love=document.getElementById("like3");
    if (love.style.color=='black')
    {
        love.style.color='#FF0000';
    }
    else{ love.style.color='black'}
    
}
                           //total functions
function total1 (){
    var sum =1379*document.getElementById("plus1").value;
    document.getElementById("price-item1").innerHTML=sum;
}
function total2 (){
    var sum = 176.80*document.getElementById("plus2").value;
    document.getElementById("price-item2").innerHTML=sum;
}
function total3 (){
    var sum =249*document.getElementById("plus3").value;
    document.getElementById("price-item3").innerHTML=sum;
}
function totalsum(){
    var prix1=Number(document.getElementById("price-item1").innerHTML);
    var prix2=Number(document.getElementById("price-item2").innerHTML);
    var prix3=Number(document.getElementById("price-item3").innerHTML);
    var somme=prix1+prix2+prix3;
    document.getElementById("finalPrice").value=somme;

}

/*
//tryal
function total (X,Y){
    var sum =1379.00*document.getElementById("X").value;
    document.getElementById("Y").innerHTML=sum;
}
*/