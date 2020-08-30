function hoverr()
{
   document.getElementById("btt") .style.backgroundColor="#0DFFF2";
}

function nothoverr()
{
   document.getElementById("btt") .style.backgroundColor="#00BCBA";
}
function show()
{
    document.getElementById("btt2").style.visibility="visible";
}
function hide()
{
    document.getElementById("btt2").style.visibility="hidden";
}
var n=0;
function hoverd()
{
    n=n+1;
    document.getElementById("img1").innerHTML=n;
}
function hoverd2()
{
    n=n+1;
    document.getElementById("img2").innerHTML=n;
}
function hoverd3()
{
    n=n+1;
    document.getElementById("img3").innerHTML=n;
}