c=0,p1=0,p2=0
function display()
{
    var dice = Math.floor(Math.random() * 6) + 1;
    
    ++c
    document.getElementById("show").value=dice;
    if(c%2===0){
        p2+=dice;
    }
    else{
        p1+=dice;
    }
    document.getElementById("p1").value=p1
    document.getElementById("p2").value=p2
    if(p1>=30)
    {
        document.getElementById("out").innerHTML="Player 1 is win!!"
    }
    if(p2>=30)
    {
        document.getElementById("out").innerHTML="Player 2 is win!!"
    }
}

